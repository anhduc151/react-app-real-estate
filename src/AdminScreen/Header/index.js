import { Link } from 'react-router-dom';
import '../Header/header.css';

const Header = () => {
  return (
    <div className='span3'>
      <ul className='nav nav-list'>
        <li className='nav-header'>
          <i className='bx bxs-home' /> Trang chủ
        </li>
        <li className='active'>
          <Link to='/admin'>Thông tin trang chủ</Link>
        </li>
        <li className='nav-header'>
          <i className='bx bxs-building' /> Quản lý sản phẩm
        </li>
        <li>
          <Link to='/admin/products'>Quản lý sản phẩm</Link>
        </li>
        <li>
          <Link to='/admin/addproduct'>Thêm sản phẩm</Link>
        </li>
        <li>
          <Link to='/admin/editproduct'>Sửa sản phẩm</Link>
        </li>
        <li>
          <Link to='/admin/deleteproduct'>Xoá sản phẩm</Link>
        </li>
        <li className='nav-header'>
          <i className='bx bxs-user-circle' /> Quản lý user
        </li>
        <li>
          <Link to='/admin/adduser'>Thêm tài khoản user</Link>
        </li>
        <li>
          <Link to='/admin/removeuser'>Xoá tài khoản user</Link>
        </li>
        <li className='nav-header'>
          <i className='bx bxs-bar-chart-alt-2' /> Quản lý doanh thu
        </li>
        <li>
          <Link href=''>Thống kê doanh thu</Link>
        </li>
        <li className='nav-header'>
          <i className='bx bxs-food-menu' /> Quản lý đơn hàng
        </li>
        <li>
          <Link to='/admin/addshipment'>Thêm người dùng</Link>
        </li>
        <li>
          <Link to='/admin/query'>truy vấn người dùng</Link>
        </li>
        <li className='nav-header'>
          <i className='bx bxs-help-circle' /> Hỗ trợ khách hàng
        </li>
        <li>
          <Link to='/admin/help'>Đánh giá và yêu cầu của khách hàng</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
