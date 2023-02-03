import React, { Component } from 'react';
import Header from '../../../component/Header'
import '../Contact/Contact.css'
import ColumnSection from '../../../component/ColumnSection'
import FooterSection from '../../../component/FooterSection'
import cnt01 from '../../../assets/img/contact/contact01.jpeg'
import cnt02 from '../../../assets/img/contact/contact02.jpeg'



export default class index extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="hero-img">
                    <div id="container">
                        <div className="row align-items-center">
                            <div className="img-container">
                                <img src={cnt01} className="img-fluid" alt="man useing phone" />
                            </div>
                            <div className="col-12 text-center text-md-left ml-lg-5 image-caption move-from-right">
                                <h1>Liên hệ</h1>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Satrt Hero Section*/}
                {/*Start Advice tips Section */}
                <section className="advice-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-white-bg">
                                <div className="text-center">
                                    <h1>Dịch vụ khách hàng</h1>
                                    <div className="border-top border-danger mx-auto mt-md-5 mb-md-3" />
                                    <p>Bất kể câu hỏi của bạn là gì, nhóm của chúng tôi luôn sẵn sàng và chờ đợi phản hồi từ bạn.<br />
                                        Để định giá hợp pháp hoặc đánh giá thị trường tự do về nhà của bạn, vui lòng truy cập<a href="request-valuation.html"> trang này.</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/**/}
                <div className="contact-form">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 d-flex">
                                <p className="lead">ĐỂ LẠI PHẢN HỒI</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <form id="myForm" onsubmit="return sendMail(this);" className="signup-form">
                                    <div className="requet-content">
                                        <div className="form-row">
                                            <div className="col-md-12 form-group text-left">
                                                <label htmlFor="name">Họ và tên *</label>
                                                <input type="text" className="form-control" id="name" name="name" required />
                                                <label htmlFor="email">Email *</label>
                                                <input type="email" className="form-control" id="email" name="email" required />
                                                <label htmlFor="location">Vị trí của bạn</label>
                                                <select name="message" id="location" className="form-control">
                                                    <option value>Lựa chọn</option>
                                                </select>
                                                <label htmlFor="message2">Bình luận*</label>
                                                <textarea name="message2" id="message2" rows={5} className="form-control" required defaultValue={""} />
                                            </div>
                                            <div className="btn">
                                                <button type="submit" name="submit" className="submit-btn">Gửi phản hồi</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-6 mt-5 d-none d-lg-block">
                                <img src={cnt02} className="img-fluid" alt="man use mobile" />
                            </div>
                        </div>
                    </div>
                </div>
                <ColumnSection/>
                <FooterSection />
            </div>
        );
    }
}
