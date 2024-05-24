import React, { useState } from 'react';

const RuleFormat = () => {
  const [rules, setRules] = useState({
    minAge: 15,
    maxAge: 22,
    maxForeignPlayers: 3,
    winPoints: 3,
    drawPoints: 1,
    losePoints: 0,
  });

  const [newValues, setNewValues] = useState({
    minAge: '',
    maxAge: '',
    maxForeignPlayers: '',
    winPoints: '',
    drawPoints: '',
    losePoints: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewValues({
      ...newValues,
      [name]: value,
    });
  };

  const handleConfirm = (rule) => {
    setRules({
      ...rules,
      [rule]: newValues[rule] !== '' ? parseInt(newValues[rule], 10) : rules[rule],
    });
    setNewValues({
      ...newValues,
      [rule]: '',
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label>Thay đổi tuổi tối thiểu của cầu thủ</label>
        <div className="flex items-center gap-4">
          <span className="min-w-[150px]">Quy định hiện hành: {rules.minAge}</span>
          <span className="text-xl">→</span>
          <input
            type="text"
            placeholder="Nhập quy định mới"
            name="minAge"
            value={newValues.minAge}
            onChange={handleChange}
            className="p-2 flex-1 border border-gray-300 rounded"
          />
          <button
            onClick={() => handleConfirm('minAge')}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Xác nhận
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <label>Thay đổi tuổi tối đa của cầu thủ</label>
        <div className="flex items-center gap-4">
          <span className="min-w-[150px]">Quy định hiện hành: {rules.maxAge}</span>
          <span className="text-xl">→</span>
          <input
            type="text"
            placeholder="Nhập quy định mới"
            name="maxAge"
            value={newValues.maxAge}
            onChange={handleChange}
            className="p-2 flex-1 border border-gray-300 rounded"
          />
          <button
            onClick={() => handleConfirm('maxAge')}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Xác nhận
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <label>Thay đổi số cầu thủ nước ngoài tối đa</label>
        <div className="flex items-center gap-4">
          <span className="min-w-[150px]">Quy định hiện hành: {rules.maxForeignPlayers}</span>
          <span className="text-xl">→</span>
          <input
            type="text"
            placeholder="Nhập quy định mới"
            name="maxForeignPlayers"
            value={newValues.maxForeignPlayers}
            onChange={handleChange}
            className="p-2 flex-1 border border-gray-300 rounded"
          />
          <button
            onClick={() => handleConfirm('maxForeignPlayers')}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Xác nhận
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <label>Thay đổi số điểm trận thắng</label>
        <div className="flex items-center gap-4">
          <span className="min-w-[150px]">Quy định hiện hành: {rules.winPoints}</span>
          <span className="text-xl">→</span>
          <input
            type="text"
            placeholder="Nhập quy định mới"
            name="winPoints"
            value={newValues.winPoints}
            onChange={handleChange}
            className="p-2 flex-1 border border-gray-300 rounded"
          />
          <button
            onClick={() => handleConfirm('winPoints')}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Xác nhận
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <label>Thay đổi số điểm trận hòa</label>
        <div className="flex items-center gap-4">
          <span className="min-w-[150px]">Quy định hiện hành: {rules.drawPoints}</span>
          <span className="text-xl">→</span>
          <input
            type="text"
            placeholder="Nhập quy định mới"
            name="drawPoints"
            value={newValues.drawPoints}
            onChange={handleChange}
            className="p-2 flex-1 border border-gray-300 rounded"
          />
          <button
            onClick={() => handleConfirm('drawPoints')}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Xác nhận
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <label>Thay đổi số điểm trận thua</label>
        <div className="flex items-center gap-4">
          <span className="min-w-[150px]">Quy định hiện hành: {rules.losePoints}</span>
          <span className="text-xl">→</span>
          <input
            type="text"
            placeholder="Nhập quy định mới"
            name="losePoints"
            value={newValues.losePoints}
            onChange={handleChange}
            className="p-2 flex-1 border border-gray-300 rounded"
          />
          <button
            onClick={() => handleConfirm('losePoints')}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
};

export default RuleFormat;