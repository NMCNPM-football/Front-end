import React from 'react';
import { Layout, Menu } from 'antd';
import { Route, Routes } from 'react-router-dom';
import PlayerManagement from './PlayerManagement'; // Chỉnh sửa tại đây
import MatchManagement from './MatchManagement'; // Chỉnh sửa tại đây

const { Header, Content, Footer } = Layout;

const AdminDashboard = () => {
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Quản lý cầu thủ</Menu.Item>
          <Menu.Item key="2">Quản lý trận đấu</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          <Routes>
            <Route path="/" element={<PlayerManagement />} />
            <Route path="/player" element={<PlayerManagement />} />
            <Route path="/match" element={<MatchManagement />} />
          </Routes>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Admin Dashboard</Footer>
    </Layout>
  );
};

export default AdminDashboard;
