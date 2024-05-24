import React, { useState } from 'react';
import { Layout, Table, Button, Modal, Form, Input } from 'antd';

const { Content } = Layout;

const MatchManagement = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState([]);

  const columns = [
    { title: 'Đội nhà', dataIndex: 'homeTeam', key: 'homeTeam' },
    { title: 'Đội khách', dataIndex: 'awayTeam', key: 'awayTeam' },
    { title: 'Kết quả', dataIndex: 'result', key: 'result' },
    {
      title: 'Hành động',
      dataIndex: 'operation',
      render: (_, record) => (
        <Button onClick={() => handleEdit(record.key)}>Chỉnh sửa</Button>
      ),
    },
  ];

  const handleAddMatch = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      const newData = {
        key: Math.random(), // Sử dụng key ngẫu nhiên
        ...values,
      };
      setDataSource([...dataSource, newData]);
      setVisible(false);
      form.resetFields();
    });
  };

  const handleEdit = (key) => {
    // Logic để chỉnh sửa kết quả trận đấu
    // Có thể hiển thị một modal hoặc giao diện chỉnh sửa khác
    console.log('Edit match with key:', key);
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
          <Form.Item name="homeTeam" label="Đội nhà" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="awayTeam" label="Đội khách" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="result" label="Kết quả" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default MatchManagement;
