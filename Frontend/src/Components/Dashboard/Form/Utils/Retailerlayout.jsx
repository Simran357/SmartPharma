import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  RobotFilled,   
} from '@ant-design/icons';

import { Button, Layout, Menu, theme } from 'antd';
import { DashboardCustomize, DeliveryDining, Inventory2, SubjectOutlined } from '@mui/icons-material';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import UserProfileMenu from '../UserProfile';
import { SettingsMenu } from './Setting';
import { NotificationMenu } from './Notifications';
const { Header, Sider, Content } = Layout;
const Retailerlayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate()
  const location = useLocation()
  const items = [
    {
      key: "/Dashboard/Retailer",
      icon: <DashboardCustomize />,
      label: "Retailer",
    },
    {
      key: "/Dashboard/Retailer/Order",
      icon: <SubjectOutlined />,
      label: "Wholesaler",
    },
    {
      key: "/Dashboard/Retailer/Inventory",
      icon: <Inventory2 />,
      label: "Inventory",
    },
    {
      key: "/Dashboard/Retailer/AiAgent",
      icon: <RobotFilled />,
      label: "AI Agent",
    }, {
      key: "/Dashboard/Retailer/Connectcourier",
      icon: <DeliveryDining />,
      label: "Connect Courier",
    }, {
      key: "/Dashboard/Retailer/ReturnInvoice",
      icon: <DeliveryDining />,
      label: "ReturnInvoice",
    }, {
      key: "/Dashboard/Retailer/InvoicePurchaseScan",
      icon: <DeliveryDining />,
      label: "InvoicePurchaseScan",
    },{
       key: "/Dashboard/Retailer/Courier",
      icon: <DeliveryDining />,
      label: "Courier",
    }
  ]


  return (
    <>
      <Layout className=''>
        <Sider trigger={null} collapsible collapsed={collapsed} >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[location.pathname]}
            defaultSelectedKeys={[location.pathname]}
            items={items}
            onClick={(e) => {
              navigate(e.key)
            }}
          /> 
        </Sider>
        <Layout>
          <Header
            style={{ background: colorBgContainer }}
            className="flex justify-between items-center px-4"
          >
            {/* LEFT SIDE */}
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">

              <NotificationMenu />
              <SettingsMenu />
              <UserProfileMenu
                username="Wholesaler"
                role="Admin"
              />


              <button className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-400 border border-orange-200">
                <UserProfileMenu size={20} />
              </button>  

            </div>
          </Header>
          <Content className="p-6 bg-gray-50" >
            <Outlet />
          </Content>
        </Layout>
      </Layout>


    </>
  )
}

export default Retailerlayout 