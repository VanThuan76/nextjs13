// components/TransactionPointsList.js
import React from 'react';

interface TransactionPoint {
  id: number;
  name: string;
  location: string;
  manager: string;
}

interface TransactionPointsListProps {
  transactionPoints: TransactionPoint[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const TransactionPointsList: React.FC<TransactionPointsListProps> = ({ transactionPoints, onEdit, onDelete }) => {
  // Kiểm tra nếu transactionPoints không tồn tại hoặc không phải là một mảng
  if (!transactionPoints || !Array.isArray(transactionPoints)) {
    return <p>Không có điểm giao dịch để hiển thị.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Tên</th>
          <th>Địa Điểm</th>
          <th>Trưởng Điểm</th>
          <th>Hành Động</th>
        </tr>
      </thead>
      <tbody>
        {transactionPoints.map((point) => (
          <tr key={point.id}>
            <td>{point.id}</td>
            <td>{point.name}</td>
            <td>{point.location}</td>
            <td>{point.manager}</td>
            <td>
              <button onClick={() => onEdit(point.id)}>Chỉnh Sửa</button>
              <button onClick={() => onDelete(point.id)}>Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionPointsList;
