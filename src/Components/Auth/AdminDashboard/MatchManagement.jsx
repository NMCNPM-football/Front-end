import React, { useState } from 'react';
import { Layout, Table, Button, Modal, Form, Input } from 'antd';

const { Content } = Layout;

const MatchManagement = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const dataSource = [
    // Dữ liệu trận đấu
  ];

  const columns = [
    // Các cột dữ liệu trận đấu
  ];

  const handleAddMatch = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleSave = () => {
    // Xử lý lưu thông tin trận đấu
  };

  return (
    <Layout>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          <h1>Quản lý trận đấu</h1>
          <Button type="primary" onClick={handleAddMatch}>Thêm trận đấu</Button>
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </Content>
      <Modal
        title="Thêm trận đấu mới"
        visible={visible}
        onCancel={handleCancel}
        onOk={handleSave}
      >
        <Form form={form} layout="vertical">
          {/* Thêm các trường thông tin của trận đấu */}
        </Form>
      </Modal>
    </Layout>
  );
};

export default MatchManagement;
