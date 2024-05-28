import React, { useState } from "react";
import { TeamOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import PlayerAdd from "./Player/PlayerAdd";
import CoachAdd from "./Coach/CoachAdd";
import Lineup from "./LineUp/LineUp";
import DataTeamAdmin from "./Player/DataTeamAdmin"

const { Header, Content, Sider } = Layout;

const items1 = ["1"].map((key) => ({
  key,
  label: `Quản trị ${key}`,
}));

const items2 = [
  {
    key: "sub1",
    icon: <TeamOutlined />,
    label: "Quản lý đội bóng",
    children: [
      {
        key: "2",
        label: "Cầu thủ",
        children: [
          { key: "2.1", label: "Thêm cầu thủ" },
          { key: "2.2", label: "Sửa cầu thủ" },
          // Add more children here if needed
        ]
      },
      { key: "3", label: "Huấn luyện viên",
        children :[
            {key: "3.1", label: "Thêm huấn luyện viên"},
            {key: "3.2", label: "Sửa huấn luyện viên"}
        ]
      },
      { key: "4", label: "Trận đấu",
        children :[
            {key: "4.1", label: "Xếp đội hình"},
           
        ]
      },
    ],
  },

];

const ManagerDashboard = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedMenuKey, setSelectedMenuKey] = useState(
    items2[0].children[0].key
  );

  const handleMenuClick = ({ key }) => {
    setSelectedMenuKey(key);
  };

  const renderContent = () => {
    switch (selectedMenuKey) {
      case "2.1":
        return <PlayerAdd  />
      case "2.2":
        return <DataTeamAdmin />;
      case "3.1":
        return <CoachAdd />;
      case "4.1":
        return <Lineup />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
            onClick={handleMenuClick}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Manager</Breadcrumb.Item>
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
export default ManagerDashboard;