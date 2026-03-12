import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  RobotFilled,
  
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import {  DashboardCustomize,  Inventory2,  SubjectOutlined } from '@mui/icons-material';
import Retailer from '../../Retailar/Retailer';
import Wholesalerfirst from '../../Retailar/Order/WholesalerPages/Wholesalerfirst';
import Inventory from '../../../../Inventory/Inventory';
import AiAgent from '../../../Wholesalecompenent.jsx/Aiagent';


const { Header, Sider, Content } = Layout;
const Retailerlayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey,setSelectedKey] = useState('1')
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const Component = {
     '1': <Retailer/>,
     '2':<Wholesalerfirst/>,
     '3': <Inventory/>,
     '4':<AiAgent/>
  
  }
  const items = [
            {
              key: '1',
              icon: <DashboardCustomize/>,
              label: 'Retailer',
            },
            {
              key: '2',
              icon: <SubjectOutlined />,
              label: 'Wholesaler',
            },
            {
              key: '3',
              icon: <Inventory2 />,
              label: 'Inventory',
            },
            {
              key: '4',
              icon:<RobotFilled/>,
              label: 'Ai agent'
            },
            // {
            //   key: '5',
            //   icon: <CalendarMonth/>,
            //   label: '',
            // }, 
            // {
            //   key: '7',
            //   icon: <SettingsOutlined/>,
            //   label: 'Settings',
            // },
          ]
  return (
    <>
    <Layout className='min-h-screen'>
      <Sider trigger={null} collapsible collapsed={collapsed} >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
          onClick={(e)=>{
            console.log("items",e?.key)
            setSelectedKey(e?.key)
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

          // style={{
          //   margin: '24px 16px',
          //   padding: 24,
          //   minHeight: 280,
          //   background: colorBgContainer,
          //   borderRadius: borderRadiusLG,
          // }}
        >
          {Component[selectedKey]}
        </Content>
      </Layout>
    </Layout>


    </>
  )
}

export default Retailerlayout