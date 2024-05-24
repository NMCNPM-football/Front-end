import React, { useState } from 'react';
import { TeamOutlined, CalendarOutlined, SettingOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import MatchManagement from './MatchManagement'; // Import MatchManagement component
import PlayerManagement from './MatchManagement';
const { Header, Content, Sider } = Layout;

const items1 = ['1'].map((key) => ({
  key,
  label: `Quản trị ${key}`,
}));

const items2 = [
  // Existing menu items
  {
    key: 'sub1',
    icon: <TeamOutlined />,
    label: 'Quản lý đội bóng',
    children: [
      {
        key: '1',
        label: 'Thông tin đội bóng',
      },
      // Add new menu item for MatchManagement
      {
        key: '5',
        label: 'Ghi nhận kết quả',
      },
      {
        key: '2',
        label: 'Cầu thủ',
      },
      {
        key: '3',
        label: 'Huấn luyện viên',
      },
      {
        key: '4',
        label: 'Xếp đội hình',
      },
    ],
  },
  {
    key: 'sub2',
    icon: <CalendarOutlined />,
    label: 'Quản lý trận đấu',
    children: [
      {
        key: '6',
        label: 'Lập lịch thi đấu',
      },
    ],
  },
  {
    key: 'sub3',
    icon: <SettingOutlined />,
    label: 'Thay đổi quy định',
    children: [],
  },
];

const AdminDashboard = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedMenuKey, setSelectedMenuKey] = useState(items2[0].children[0].key);

  const handleMenuClick = ({ key }) => {
    setSelectedMenuKey(key);
  };

  const renderContent = () => {
    switch (selectedMenuKey) {
      case '1':
        return <div>Content for Thông tin đội bóng</div>;
      case '2':
        return <PlayerManagement/>;
      case '3':
        return <div>Content for Huấn luyện viên</div>;
      case '4':
        return <div>Content for Xếp đội hình</div>;
      case '5':
        return <MatchManagement />; // Render MatchManagement component
      case '6':
        return <div>Content for Lập lịch thi đấu</div>;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
            onClick={handleMenuClick}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {renderContent()}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
