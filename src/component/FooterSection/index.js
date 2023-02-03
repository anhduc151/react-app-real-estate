import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../FooterSection/FooterSection.css'

export default class index extends Component {
    render() {
        return (
            <div>
                <div className="footer-widget-green-border mt-5">
                    <div className="footer-widget-green-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 mb-xl-0  text-center move-from-right">
                                    <p className="m-0">Chúng tôi là những chuyên gia nghiên cứu thị trường làm việc với khách hàng để tạo ra chất lượng cao, dựa trên dữ liệu
                                        và nghiên cứu thị trường bất động sản vô song.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 text-center">
                                <h4>Thông tin liên lạc</h4>
                                <div className="footer-address">
                                    <p>35, Hoà Minh 14, Liên Chiểu, Đà Nẵng</p>
                                    <span>Phone: 0987263397</span>
                                    <span>Email: leanhduc1510@gmail.com</span>
                                </div>
                            </div>
                            <div className="col-lg-6 text-center mt-5 mt-lg-0">
                                <h4>Liên hệ nhanh</h4>
                                <ul className="pl-0">
                                    <li><Link to="/northProduct">Dự án</Link></li>
                                    <li><Link to="/advise">Thế chấp</Link></li>
                                    <li><Link to="/request-valuetion">Yêu cầu định giá</Link></li>
                                    <li><Link to="/contact">Liên hệ</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-12 mt-3 text-center social-media">
                                <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook" aria-hidden="true" />
                                    <span className="sr-only">Facebook</span>
                                </a>
                                <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" aria-hidden="true" />
                                    <span className="sr-only">Instagram</span>
                                </a>
                                <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube" aria-hidden="true" />
                                    <span className="sr-only">YouTube</span>
                                </a>
                                <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" aria-hidden="true" />
                                    <span className="sr-only">Twitter</span>
                                </a>
                            </div>
                        </div>
                        <div className="border-top border-dark w-100 mx-auto" />
                        <div className="row">
                            <div className="col-lg-12 footer-bottom text-center">
                                <p className="footer-text m-0">
                                    Dự án bất động sản
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
