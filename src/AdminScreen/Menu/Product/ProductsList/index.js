import React, { useEffect, useState } from 'react';
import { Button, Space, Table, Tag } from 'antd';
import { db } from '../../../../firebase/connect';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  deleteDoc,
} from 'firebase/firestore';
import { Link } from 'react-router-dom';

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'products'), orderBy('created_at', 'desc'));
    onSnapshot(q, (querySnapshot) => {
      setProducts(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });
  }, []);

  const handleDeleteProduct = async (record) => {
    if (window.confirm(`Bạn có muốn xóa ${record.name} không?`) == true) {
      const taskDocRef = doc(db, 'products', record.id);
      try {
        await deleteDoc(taskDocRef);
        alert('Đã xóa thành công');
      } catch (err) {
        alert(err);
      }
    }
  };

  const columns = [
    {
      title: 'Tên dự án',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Mô tả',
      dataIndex: 'about',
      key: 'about',
    },
    {
      title: 'Giá tiền',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Số phòng ngủ',
      dataIndex: 'bedroom',
      key: 'bedroom',
    },
    {
      title: 'Số phòng tắm',
      dataIndex: 'bathroom',
      key: 'bathroom',
    },
    {
      title: 'Diện tích',
      dataIndex: 'm2',
      key: 'm2',
    },
    {
      title: 'Vùng',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <Link to={'/admin/editproduct/' + record.id}>Sửa</Link>
          <Button onClick={() => handleDeleteProduct(record)} danger>
            Xóa
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <div className='container'>
      <Link to='/admin/addproduct' className='btn btn-primary'>
        Thêm mới
      </Link>
      <Table columns={columns} dataSource={products} />
    </div>
  );
}
