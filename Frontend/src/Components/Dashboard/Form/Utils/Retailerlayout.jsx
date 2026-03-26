import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  RobotFilled,
} from '@ant-design/icons';
import { Bell, Settings, User } from "lucide-react";
import { Button, Layout, Menu, theme } from 'antd';
import { DashboardCustomize, DeliveryDining, Inventory2, SubjectOutlined } from '@mui/icons-material';
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
    }, {
      key: "/Dashboard/Retailer/Connectcourier",
      icon: <DeliveryDining />,
      label: "Connect Courier",
    }, {
      key: "/Dashboard/Retailer/ReturnInvoice",
      icon: <DeliveryDining />,
      label: "ReturnInvoice",
    }, {
      key: "/Dashboard/Retailer/SingleMedicineInfo",
      icon: <DeliveryDining />,
      label: "SingleMedicineInfo",
    },
    {
      key: "/Dashboard/Retailer/OneMedicine",
      icon: <DeliveryDining />,
      label: "OneMedicine",
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
              <button className="relative p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors">
                <Bell size={18} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors">
                <Settings size={18} />
              </button>

              <button className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-400 border border-orange-200">
                <User size={20} />
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