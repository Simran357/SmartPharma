import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  RobotFilled,
  
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import {  DashboardCustomize,  Inventory2 } from '@mui/icons-material';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';


const { Header, Sider, Content } = Layout;
const Wholesalerlayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

 const navigate = useNavigate()
   const location = useLocation();
const wholesalerMenu = [
  {
    key: "/Dashboard/Wholesaler",
    icon: <DashboardCustomize />,
    label: "Dashboard",
  },
  {
    key: "/Dashboard/Wholesaler/Inventory",
    icon: <Inventory2 />,
    label: "Inventory",
  },
   {
    key: "/Dashboard/Wholesaler/Alert",
    icon: <Inventory2 />,
    label: "Actionable",
  },
  {
    key: "/Dashboard/Wholesaler/AiAgent",
    icon: <RobotFilled />,
    label: "AI Agent",
  }, {
    key: "/Dashboard/Wholesaler/Retailors",
    icon: <RobotFilled />,
    label: "Retailors",
  },
  
];
  return (
    <>
    <Layout className='min-h-screen'>
      <Sider trigger={null} collapsible collapsed={collapsed} >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
          selectedKeys={[location.pathname]}
          items={wholesalerMenu}
          onClick={(e)=>{
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
     <Content className="p-6 h-screen overflow-auto bg-gray-50"
        >
         <Outlet/>
        </Content>
      </Layout>
    </Layout>


    </>
  )
}

export default Wholesalerlayout