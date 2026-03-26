import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  RobotFilled,

} from '@ant-design/icons';
import { Bell, Settings, User } from "lucide-react";

import { Button, Layout, Menu, theme } from 'antd';
import { DashboardCustomize, Inventory2 } from '@mui/icons-material';
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
      key: "/Dashboard/Wholesaler/TempelateDesigner",
      icon: <RobotFilled />,
      label: "TempelateDesigner"
    },
    {
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
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-500 hover:text-slate-700 hover:bg-gray-100 rounded-full transition-colors">
                <Bell size={18} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-gray-100 rounded-full transition-colors">
                <Settings size={18} />
              </button>

              <button className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-400 border border-orange-200">
                <User size={20} />
              </button>
            </div>
          </Header>
          <Content className="p-6 h-screen overflow-auto bg-gray-50"
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>


    </>
  )
}

export default Wholesalerlayout