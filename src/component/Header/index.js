import React, { Component } from 'react'
import '../Header/Header.css'
import logo from '../../assets/img/logo/logo.svg';


export default class index extends Component {
  render() {
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <img src={logo} alt="" />
            <a className="navbar-brand" src="./assets/img/logo/logo.svg" href="index.html" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="index.html">Trang chủ<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dự án</a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="local-properties.html">Dự án các tỉnh ở Phía Bắc</a>
                    <a className="dropdown-item" href="abroad-properies.html">Dự án các tỉnh ở phía Nam </a>
                    <a className="dropdown-item" href="projects.html">Quản lý dự án</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="mortgage.html">Tư vấn thế chấp</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownSecondMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Thông tin thêm</a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownSecondMenuLink">
                    <a className="dropdown-item" href="research.html">Đội nghiên cứu dự án</a>
                    <a className="dropdown-item" href="buyAdvice.html">Lời khuyên cho người mua</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownThirdMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Liên hệ</a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownThirdMenuLink">
                    <a className="dropdown-item" href="request-valuation.html">Yêu cầu định giá</a>
                    <a className="dropdown-item" href="contact.html">Dịch vụ khách hàng</a>
                  </div>
                </li> 
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownThirdMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Tài khoản</a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownThirdMenuLink">
                    <a className="dropdown-item" href="login.html">Đăng nhập</a>
                    <a className="dropdown-item" href="signup.html">Đăng ký</a>
                  </div>
                </li> 
              </ul>
            </div>
          </div>
        </nav> 
      </header>
      
    )
  }
}
