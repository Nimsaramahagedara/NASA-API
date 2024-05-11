import {
    AlipayOutlined,
    LockOutlined,
    TaobaoOutlined,
    UserOutlined,
    WeiboOutlined,
} from '@ant-design/icons';
import {
    LoginFormPage,
    ProConfigProvider,
    ProFormCaptcha,
    ProFormCheckbox,
    ProFormText,
} from '@ant-design/pro-components';
import { Button, Divider, Space, Tabs, message, theme } from 'antd';
import axios from 'axios';
import type { CSSProperties } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

type LoginType = 'login' | 'register';

const iconStyles: CSSProperties = {
    color: 'rgba(0, 0, 0, 0.2)',
    fontSize: '18px',
    verticalAlign: 'middle',
    cursor: 'pointer',
};

const Page = () => {
    const [loginType, setLoginType] = useState<LoginType>('login');
    const { token } = theme.useToken();
    const navigate = useNavigate()


    const handleLogin = async(form:any)=>{
        const email = form.getFieldValue('email')
        const password = form.getFieldValue('password')
        const firstName = form.getFieldValue('firstName')
        const lastName = form.getFieldValue('lastName')
        const captcha = form.getFieldValue('captcha')

        try {
            if(loginType === 'login'){
                const resp = await axios.post(`${import.meta.env.VITE_LOCAL_SERVER}/login`,{email,password})
                console.log(resp.data);
                navigate('/dashboard')
                
            }else{
                const resp = await axios.post(`${import.meta.env.VITE_LOCAL_SERVER}/register`,{email,password:captcha,firstName,lastName})
                console.log(resp.data);
                navigate('/')
                setLoginType('login')
            }
  
        } catch (error:any) {
            console.log(error);
            toast.error(error?.response?.data?.message)
        }
    }
    return (
        <div
            style={{
                backgroundColor: 'white',
                height: '100vh',
            }}
        >
            <LoginFormPage
                submitter={{
                    // Configure the button text
                    searchConfig: {
                        submitText: 'Submit',
                    },
                    // Configure the properties of the button
                    resetButtonProps: {
                        style: {
                            // Hide the reset button
                            display: 'none',
                        },
                    },
                    submitButtonProps: {},

                    // Fully customize the entire area
                    render: (props : any) => {
                       // console.log(props);
                        return [
                            <Button
                                type='primary'
                                block
                                key="submit"
                                onClick={()=>handleLogin(props.form)}
                            >
                                Submit
                            </Button>,
                        ];
                    },
                }}
                backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
                logo="https://cdn.icon-icons.com/icons2/2699/PNG/512/nasa_logo_icon_170926.png"
                backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
                title="NASA LOGIN"
                containerStyle={{
                    backgroundColor: 'rgba(0, 0, 0,0.65)',
                    backdropFilter: 'blur(4px)',
                }}
                subTitle="User Login"
                activityConfig={{
                    style: {
                        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
                        color: token.colorTextHeading,
                        borderRadius: 8,
                        backgroundColor: 'rgba(255,255,255,0.25)',
                        backdropFilter: 'blur(4px)',
                    },
                    title: 'NASA API',
                    subTitle: 'IT21167614',
                    action: (
                        <Button
                            size="large"
                            style={{
                                borderRadius: 20,
                                background: token.colorBgElevated,
                                color: token.colorPrimary,
                                width: 120,
                            }}
                        >
                            Nimsara
                        </Button>
                    ),
                }}
                actions={
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <Divider plain>
                            <span
                                style={{
                                    color: token.colorTextPlaceholder,
                                    fontWeight: 'normal',
                                    fontSize: 14,
                                }}
                            >
                                Other Login
                            </span>
                        </Divider>
                        <Space align="center" size={24}>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    height: 40,
                                    width: 40,
                                    border: '1px solid ' + token.colorPrimaryBorder,
                                    borderRadius: '50%',
                                }}
                            >
                                <AlipayOutlined style={{ ...iconStyles, color: '#1677FF' }} />
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    height: 40,
                                    width: 40,
                                    border: '1px solid ' + token.colorPrimaryBorder,
                                    borderRadius: '50%',
                                }}
                            >
                                <TaobaoOutlined style={{ ...iconStyles, color: '#FF6A10' }} />
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    height: 40,
                                    width: 40,
                                    border: '1px solid ' + token.colorPrimaryBorder,
                                    borderRadius: '50%',
                                }}
                            >
                                <WeiboOutlined style={{ ...iconStyles, color: '#1890ff' }} />
                            </div>
                        </Space>
                    </div>
                }
            >
                <Tabs
                    centered
                    activeKey={loginType}
                    onChange={(activeKey) => setLoginType(activeKey as LoginType)}
                >
                    <Tabs.TabPane key={'login'} tab={'Login'} />
                    <Tabs.TabPane key={'register'} tab={'Register'} />
                </Tabs>
                {loginType === 'login' && (
                    <>
                        <ProFormText
                            name="email"
                            fieldProps={{
                                size: 'large',
                                prefix: (
                                    <UserOutlined
                                        style={{
                                            color: token.colorText,
                                        }}
                                        className={'prefixIcon'}
                                    />
                                ),
                            }}
                            placeholder={'Email'}
                            rules={[
                                {
                                    required: true,
                                    message: 'Email Required !',
                                },
                            ]}
                        />
                        <ProFormText.Password
                            name="password"
                            fieldProps={{
                                size: 'large',
                                prefix: (
                                    <LockOutlined
                                        style={{
                                            color: token.colorText,
                                        }}
                                        className={'prefixIcon'}
                                    />
                                ),
                            }}
                            placeholder={'Password'}
                            rules={[
                                {
                                    required: true,
                                    message: 'Password Required',
                                },
                            ]}
                        />
                    </>
                )}
                {loginType === 'register' && (
                    <>
                     <ProFormText
                            fieldProps={{
                                size: 'large',
                                prefix: (
                                    <UserOutlined
                                    style={{
                                        color: token.colorText,
                                    }}
                                    className={'prefixIcon'}
                                />
                                ),
                            }}
                            name="firstName"
                            placeholder={'First Name'}
                            rules={[
                                {
                                    required: true,
                                    message: 'First Name Required',
                                }
                            ]}
                        />
                        <ProFormText
                            fieldProps={{
                                size: 'large',
                                prefix: (
                                    <UserOutlined
                                    style={{
                                        color: token.colorText,
                                    }}
                                    className={'prefixIcon'}
                                />
                                ),
                            }}
                            name="lastName"
                            placeholder={'Last Name'}
                            rules={[
                                {
                                    required: true,
                                    message: 'Last Name Required',
                                }
                            ]}
                        />
                               <ProFormText
                            fieldProps={{
                                size: 'large',
                                prefix: (
                                    <UserOutlined
                                    style={{
                                        color: token.colorText,
                                    }}
                                    className={'prefixIcon'}
                                />
                                ),
                            }}
                            name="email"
                            placeholder={'Email'}
                            rules={[
                                {
                                    required: true,
                                    message: 'Email Required',
                                },
                                {
                                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Pattern missmatch',
                                },
                            ]}
                        />
                        <ProFormCaptcha
                            fieldProps={{
                                size: 'large',
                                prefix: (
                                    <LockOutlined
                                        style={{
                                            color: token.colorText,
                                        }}
                                        className={'prefixIcon'}
                                    />
                                ),
                            }}
                            captchaProps={{
                                size: 'large',
                            }}
                            placeholder={'Password'}
                            captchaTextRender={(timing:any, count : any) => {
                                if (timing) {
                                    return `${count} ${'Times'}`;
                                }
                                return 'Captcha';
                            }}
                            name="captcha"
                            rules={[
                                {
                                    required: true,
                                    message: 'Captcha failed',
                                },
                            ]}
                            onGetCaptcha={async () => {
                                message.success('Captcha Success：1234');
                            }}
                        />
                    </>
                )}
                <div
                    style={{
                        marginBlockEnd: 24,
                    }}
                >
                    <ProFormCheckbox noStyle name="autoLogin">
                        Remember Me
                    </ProFormCheckbox>
                    <a
                        style={{
                            float: 'right',
                        }}
                    >
                        Forgot password
                    </a>
                </div>
            </LoginFormPage>
        </div>
    );
};

export default () => {
    return (
        <ProConfigProvider dark>
            <Page />
        </ProConfigProvider>
    );
};