import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Header/Header.css'
import logo from '../../assets/img/logo/logo.svg'

export default class index extends Component {
    render() {
        return (
            
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <Link to="/"><img src={logo} alt="#"/></Link>
                        <a className="navbar-brand" src={logo} href="/#"> </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">Trang chủ<span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dự án</a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <Link className="dropdown-item" to="/northProduct">Dự án các tỉnh ở Phía Bắc</Link>
                                        <Link className="dropdown-item" to="/southProduct">Dự án các tỉnh ở phía Nam </Link>
                                        <Link className="dropdown-item" to="/productManager">Dự án đã thích</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/advise">Tư vấn thế chấp</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownSecondMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Thông tin thêm</a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownSecondMenuLink">
                                        <Link className="dropdown-item" to="/research">Đội nghiên cứu dự án</Link>
                                        <Link className="dropdown-item" to="/advice">Lời khuyên cho người mua</Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownThirdMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Liên hệ</a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownThirdMenuLink">
                                        <Link className="dropdown-item" to="/request-valuetion">Yêu cầu định giá</Link>
                                        <Link className="dropdown-item" to="/contact">Dịch vụ khách hàng</Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownThirdMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Tài khoản</a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownThirdMenuLink">
                                        <Link className="dropdown-item" to="/login">Đăng nhập</Link>
                                        <Link className="dropdown-item" to="/signup">Đăng ký</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            
        )
    }
}
