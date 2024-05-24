import React from 'react';
import { TeamOutlined, CalendarOutlined, SettingOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Sider } = Layout;

const items1 = ['1'].map((key) => ({
  key,
  label: `Quản trị ${key}`,
}));

const items2 = [
  {
    key: 'sub1',
    icon: <TeamOutlined />,
    label: 'Quản lý đội bóng',
    children: [
      {
        key: '1',
        label: 'Thông tin đội bóng',
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
        key: '5',
        label: 'Ghi nhận kết quả',
      },
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
            Content here
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
