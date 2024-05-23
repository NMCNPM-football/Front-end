import React from 'react';

const PlayerList = ({ players, editPlayer, deletePlayer }) => {
  return (
    <div className="mt-4">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200 text-gray-600">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Tên</th>
            <th className="px-4 py-2">Vị trí</th>
            <th className="px-4 py-2">Đội bóng</th>
            <th className="px-4 py-2">Quốc tịch</th>
            <th className="px-4 py-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id} className="border-bottom">
              <td className="px-4 py-2">{player.id}</td>
              <td className="px-4 py-2">{player.name}</td>
              <td className="px-4 py-2">{player.position}</td>
              <td className="px-4 py-2">{player.team}</td>
              <td className="px-4 py-2">{player.nationality}</td>
              <td className="px-4 py-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded-md"
                  onClick={() => editPlayer(player)}
                >
                  Sửa
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded-md"
                  onClick={() => deletePlayer(player.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerList;
