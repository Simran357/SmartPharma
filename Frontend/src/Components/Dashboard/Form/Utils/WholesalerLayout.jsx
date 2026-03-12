import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  RobotFilled,
  
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import {  DashboardCustomize,  Inventory2,  SubjectOutlined } from '@mui/icons-material';
import Inventory from '../../../../Inventory/Inventory';
import AiAgent from '../../../Wholesalecompenent.jsx/Aiagent';
import WholeSaler from '../../../Wholesalecompenent.jsx/WholeSaler';


const { Header, Sider, Content } = Layout;
const Wholesalerlayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey,setSelectedKey] = useState('1')
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const Component = {
     '1': <WholeSaler/>,
     '2': <Inventory/>,
     '3':<AiAgent/>
  
  }
  const items = [
            {
              key: '1',
              icon: <DashboardCustomize/>,
              label: 'Wholesaler',
            },
          
            {
              key: '2',
              icon: <Inventory2 />,
              label: 'Inventory',
            },
            {
              key: '3',
              icon:<RobotFilled/>,
              label: 'Ai agent'
            },
      
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
        >
          {Component[selectedKey]}
        </Content>
      </Layout>
    </Layout>


    </>
  )
}

export default Wholesalerlayout