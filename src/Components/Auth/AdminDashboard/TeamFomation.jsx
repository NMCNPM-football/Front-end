import React, { useState, useEffect } from 'react';
import { Layout, Table, Modal, Button } from 'antd';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const { Content } = Layout;

const TeamFormation = () => {
  const [visible, setVisible] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [fieldPlayers, setFieldPlayers] = useState([]);
  const [playerPositions, setPlayerPositions] = useState({});
  const stadiumImage = "/assets/stadium.jpg"; // Đường dẫn đến ảnh sân bóng

  useEffect(() => {
    // Tạo danh sách mẫu các cầu thủ (có thể thay bằng call API nếu cần)
    const initialPlayers = [
      { id: 1, name: 'Rodrigo Da Silva Dün', position: null },
      { id: 2, name: 'Hoàng Minh Tâm', position: null },
      { id: 3, name: 'Võ Ngọc Toàn', position: null },
      { id: 4, name: 'Lâm Quý', position: null },
      { id: 5, name: 'Phạm Nguyên Sa', position: null },
      { id: 6, name: 'Phạm Văn Tiêu', position: null },
      { id: 7, name: 'Phan Văn Lêng', position: null },
      { id: 8, name: 'Đặng Anh Tuân', position: null },
      { id: 9, name: 'Duy Cung', position: null },
      { id: 10, name: 'Liều Quang Vinh', position: null },
      { id: 11, name: 'Naveen Trong Fam', position: null },
    ];
    setFieldPlayers(initialPlayers);
  }, []);

  const showModal = (record) => {
    setSelectedPlayer(record);
    setVisible(true);
  };

  const handleOk = () => {
    if (selectedPlayer && selectedPlayer.position !== null) {
      setVisible(false);
      setSelectedPlayer(null);
    }
  };

  const handleCancel = () => {
    setVisible(false);
    setSelectedPlayer(null);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(fieldPlayers);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setFieldPlayers(items);
  };

  const handlePositionSelection = (player, position) => {
    const updatedPositions = { ...playerPositions };
    if (!updatedPositions[position]) {
      updatedPositions[position] = player.id;
      player.position = position;
      setSelectedPlayer(null);
      setVisible(false);
      setPlayerPositions(updatedPositions);
    } else {
      // Position already taken, handle this case as needed
      console.log("Position already taken");
    }
  };

  const getPlayerNameByPosition = (position) => {
    const playerId = playerPositions[position];
    if (playerId) {
      const player = fieldPlayers.find(player => player.id === playerId);
      if (player) {
        return player.name;
      }
    }
    return '';
  };

  const columns = [
    { title: 'Tên cầu thủ', dataIndex: 'name', key: 'name' },
    { title: 'Vị trí', dataIndex: 'position', key: 'position' },
    {
      title: 'Hành động',
      dataIndex: '',
      key: 'action',
      render: (record) => (
        <Button type="primary" onClick={() => showModal(record)}>
          Chọn
        </Button>
      ),
    },
  ];

  return (
    <Layout>
      <Content className="p-4 flex">
        <div className="w-2/3 bg-white p-4 mr-4">
          <h1 className="text-2xl font-bold mb-4">Xếp đội hình</h1>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="players">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <Table dataSource={fieldPlayers} columns={columns} pagination={false} />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <Modal
            title={`Chọn vị trí cho ${selectedPlayer ? selectedPlayer.name : ''}`}
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>
              {[...Array(11)].map((_, index) => (
                <Button key={index} onClick={() => handlePositionSelection(selectedPlayer, index + 1)}>{index + 1}</Button>
              ))}
            </p>
          </Modal>
        </div>
        <div className="w-1/3 relative">
          <div className="field-container p-4 absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${stadiumImage})` }}>
            <h2 className="text-2xl font-bold mb-4">Sân bóng</h2>
            <div className="field-grid grid grid-cols-11 gap-2">
              {/* Hiển thị tên của cầu thủ trong ô vị trí trên sân */}
              {[...Array(11)].map((_, index) => (
                <div key={index} className="field-position bg-gray-300 h-12 flex justify-center items-center rounded-md">
                  {getPlayerNameByPosition(index + 1)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default TeamFormation;
