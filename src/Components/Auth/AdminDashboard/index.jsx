import React, { useState } from "react";
import { UserSwitchOutlined } from "@ant-design/icons";

import {
  TeamOutlined,
  CalendarOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import MatchManagement from "./MatchManagement";
import RuleFormat from "./Rule/RuleFormat";
import ClubAdd from "./Club/ClubAdd";
import PlayerManagement from "../ManagerDashboard/PlayerManagement";
import MatchScheduler from "./MatchScheduler";
import TeamGrid from "../../ClubInfo/TeamGrid";
import UserAuth from "./UserAuth";
import Lineup from "./LineUp";

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
      { key: "1", label: "Thêm đội bóng" },
      { key: "2", label: "Thông tin đội bóng" },
      { key: "8", label: "Xếp đội hình" },
    ],
  },
  {
    key: "sub2",
    icon: <CalendarOutlined />,
    label: "Quản lý trận đấu",
    children: [
      { key: "3", label: "Lập lịch thi đấu" },
      { key: "4", label: "Tạo diễn biến trận đấu" },
      { key: "5", label: "Tạo bảng xếp hạng" },
      { key: "6", label: "Bảng xếp hạng" },
    ],
  },
  {
    key: "sub3",
    icon: <SettingOutlined />,
    label: "Quy định giải đấu",
    children: [{ key: "7", label: "Thay đổi quy định cầu thủ" }],
  },
  {
    key: "sub4",
    icon: <UserSwitchOutlined />,
    label: "Phân quyền người dùng",
  },
];

const AdminDashboard = () => {
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
      case "5":
        return <PlayerManagement />;
      
      case "4":
        <MatchManagement />;
        return;
      case "1":
        return <ClubAdd />;
      case "2":
        return <TeamGrid />;
      case "3":
        return <MatchScheduler />;
      case "7":
        return <RuleFormat />;
      case "6":
        return <div>Content for Xếp hạng</div>;
      case "sub4":
        return <UserAuth />;
      case "8":
        return <Lineup/>;
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
