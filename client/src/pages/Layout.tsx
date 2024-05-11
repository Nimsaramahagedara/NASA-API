import { Avatar, Button, Typography } from 'antd'
import  { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons';
import axios from 'axios';
import Stat from '../components/Stat';

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
        onClick:()=>{window.location.href = '/'},
        icon: <SettingOutlined />,
        
    }
];

const Layout = () => {
    const [current, setCurrent] = useState<string>('mail');
    const [collapsed, setCollapsed] = useState(false);
    const [users, setUsers] = useState<Array<any>>([])
    const navigate = useNavigate()

    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };
    const getallUsers = async()=>{
        try {
            const resp = await axios.get(`${import.meta.env.VITE_LOCAL_SERVER}/all`)
            setUsers(resp.data)
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        getallUsers()
    },[])

    return (
        <main>
            <div className='bg-black/50 fixed top-0 left-0 w-max h-full overflow-hidden'>
                <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    className={`${collapsed ? '' :'md:w-[25vw] w-full'}`}
                    // style={{width:collapsed  ? '' :'25vw'}}
                    inlineCollapsed={collapsed}
                    items={items}
                />

            </div>
            <Outlet />

            <div className='bg-black/50 hidden md:block fixed top-0 right-0 w-1/4 p-10 h-full'>
                <Stat value={users?.length}/>
                <Typography.Title level={3} type='danger'  className='text-white'>User List</Typography.Title>
                    {
                        users?.map((us)=>(
                            <div className='flex px-5 py-2 items-center text-white gap-2 bg-blue-900 rounded-xl hover:bg-blue-950'>
                                <Avatar size={32} icon={<UserOutlined />}/>
                                {us.firstName + ' '+ us.lastName}
                            </div>
                        ))
                    }
            </div>
        </main>
    )
}

export default Layout