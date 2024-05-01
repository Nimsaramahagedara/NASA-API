import { Button } from 'antd'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {
    ContainerOutlined,
    DesktopOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
  } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: 'Home',
        key: 'mail',
        icon: <MailOutlined />,
    },
    {
        label: 'Page',
        key: 'app',
        icon: <AppstoreOutlined />,
    },
    {
        label: 'Logout',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        
    }
];

const Layout = () => {
    const [current, setCurrent] = useState<string>('mail');
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };

    return (
        <main>
            <div className='bg-black/50 fixed top-0 left-0 w-max h-full'>
                <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    style={{width:collapsed  ? '' :'25vw'}}
                    inlineCollapsed={collapsed}
                    items={items}
                />

            </div>
            <Outlet />

            <div className='bg-black/50 fixed top-0 right-0 w-1/4 p-10 h-full'>

            </div>
        </main>
    )
}

export default Layout