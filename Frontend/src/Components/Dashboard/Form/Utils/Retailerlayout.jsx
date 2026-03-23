import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  RobotFilled,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import {  DashboardCustomize,  DeliveryDining,  Inventory2,  SubjectOutlined } from '@mui/icons-material';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
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
    },{
      key: "/Dashboard/Retailer/Connectcourier",
      icon: <DeliveryDining/>,
      label: "Connect Courier",
    },{
      key: "/Dashboard/Retailer/ReturnInvoice",
      icon: <DeliveryDining/>,
      label: "ReturnInvoice",
    },{
      key: "/Dashboard/Retailer/SingleMedicineInfo",
      icon: <DeliveryDining/>,
      label: "SingleMedicineInfo",
    },
    
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
            items={items}
            onClick={(e) => {
              navigate(e.key)
            }}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
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