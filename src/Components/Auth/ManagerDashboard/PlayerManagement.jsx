import React, { useState } from 'react';
import { Layout, Table, Button, Modal, Form, Input, Select } from 'antd';
import { v4 as uuidv4 } from 'uuid';

const { Content } = Layout;
const { Option } = Select;

const PlayerManagement = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState([]);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.key === editingKey;

  const columns = [
    { title: 'Player ID', dataIndex: 'playerID', key: 'playerID', editable: false },
    { title: 'Tên cầu thủ', dataIndex: 'name', key: 'name', editable: true },
    { title: 'Ngày sinh', dataIndex: 'birthDay', key: 'birthDay', editable: true },
    { title: 'Vị trí', dataIndex: 'position', key: 'position', editable: true, render: (_, record) => (
      isEditing(record) ? (
        <Form.Item name="position" style={{ margin: 0 }}>
          <Select style={{ width: 120 }} defaultValue={record.position}>
            <Option value="GK">GK</Option>
            <Option value="DF">DF</Option>
            <Option value="MF">MF</Option>
            <Option value="ST">ST</Option>
          </Select>
        </Form.Item>
      ) : (
        record.position
      )
    )},
    { title: 'Chiều cao', dataIndex: 'height', key: 'height', editable: true },
    { title: 'Cân nặng', dataIndex: 'weight', key: 'weight', editable: true },
    { title: 'Quốc tịch', dataIndex: 'nationality', key: 'nationality', editable: true },
    { title: 'Club Name', dataIndex: 'clubName', key: 'clubName', editable: true },
    { title: 'Season', dataIndex: 'season', key: 'season', editable: true },
    { title: 'Type', dataIndex: 'typeName', key: 'typeName', editable: true },
    {
      title: 'Hành động',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Button type="primary" onClick={() => save(record.key)} style={{ marginRight: 8 }}>
              Lưu
            </Button>
            <Button onClick={cancel}>Hủy</Button>
          </span>
        ) : (
          <Button onClick={() => edit(record.key)}>Chỉnh sửa</Button>
        );
      },
    },
  ];

  const edit = (key) => {
    setEditingKey(key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = (key) => {
    form.validateFields().then((row) => {
      const newData = [...dataSource];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setDataSource(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setDataSource(newData);
        setEditingKey('');
      }
    });
  };

  const handleAdd = () => {
    setVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      const newData = {
        key: uuidv4(),
        ...values,
      };
      setDataSource([...dataSource, newData]);
      setVisible(false);
      form.resetFields();
    });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Layout>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          <h1>Quản lý cầu thủ</h1>
          <Button type="primary" onClick={handleAdd} style={{ marginBottom: 16 }}>
            Thêm cầu thủ
          </Button>
          <Table
            dataSource={dataSource}
            columns={columns}
            bordered
            components={{
              body: {
                cell: EditableCell,
              },
            }}
          />
          <Modal
            title="Thêm cầu thủ mới"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Form form={form} layout="vertical" name="playerForm">
              <Form.Item name="playerID" label="Player ID" hidden>
                <Input disabled />
              </Form.Item>
              <Form.Item name="name" label="Tên cầu thủ" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="birthDay" label="Ngày sinh" rules={[{ required: true }]}>
                <Input type="date" />
              </Form.Item>
              <Form.Item name="position" label="Vị trí" rules={[{ required: true }]}>
                <Select style={{ width: 120 }}>
                  <Option value="GK">GK</Option>
                  <Option value="DF">DF</Option>
                  <Option value="MF">MF</Option>
                  <Option value="ST">ST</Option>
                </Select>
              </Form.Item>
              <Form.Item name="height" label="Chiều cao" rules={[{ required: true }]}>
                <Input type="number" />
              </Form.Item>
              <Form.Item name="weight" label="Cân nặng" rules={[{ required: true }]}>
                <Input type="number" />
              </Form.Item>
              <Form.Item name="nationality" label="Quốc tịch" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="clubName" label="Club Name" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="season" label="Season" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="typeName" label="Type" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </Content>
    </Layout>
  );
};

const EditableCell = ({ title, editable, children, dataIndex, record, ...restProps }) => {
  return (
    <td {...restProps}>
      {editable ? (
        <Form.Item
          style={{ margin: 0 }}
          name={dataIndex}
          rules={[
            {
                required: true,
                message: `${title} không được để trống`,
              },
            ]}
          >
            <Input />
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };
  
  export default PlayerManagement;