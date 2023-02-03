import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../PropertySection/PropertySection.css';
import house_dublin01 from '../../assets/img/index/doolin-house-dublin01.jpeg';
import glasnevin_dublin01 from '../../assets/img/index/glasnevin-dublin01.jpeg';
import templeogue_dublin01 from '../../assets/img/index/templeogue-dublin01.jpeg';
import charlotte_quay_dublin01 from '../../assets/img/index/charlotte-quay-dublin01.jpeg';
import dingle01 from '../../assets/img/index/dingle01.jpeg';


export default class index extends Component {
    render() {
        return (
            <section className="local-property-card-section pt-md-5">
                <h2 className="move-from-left">Các dự án được thêm gần đây</h2>
                <div className="text-right move-from-left mr-5 mb-3">
                    <Link to="/northProduct">Tất cả dự án <i className="fas fa-long-arrow-alt-right ml-2" /></Link>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="box">
                                <img src={house_dublin01} className="img-fluid" alt="Doolin House, Dublin" />
                                <div className="text">
                                    <h3>
                                        Vạn Phú Shophouse Đại Từ
                                    </h3>
                                    <span>3.000.000.000 đ</span>
                                    <p className="text-left">Căn hộ, chung cư</p>
                                    <p className="text-left">Chúng tôi tự hào giới thiệu Ngôi nhà Vạn Phú Shophouse Đại Từ cho Thị trường bất động sản. Một phòng ngủ tuyệt vời này
                                        căn hộ được trình bày trong tình trạng hoàn hảo</p>
                                    <div className="property-details">
                                        <span>56 mét vuông</span>
                                        <span>1 phòng ngủ</span>
                                        <span>1 nhà tắm<span>
                                        </span></span></div>
                                    <Link to="/" className="btn">Thích dự án</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="box">
                                <img src={glasnevin_dublin01} className="img-fluid" alt="Glasnevin, Dublin" />
                                <div className="text">
                                    <h3>Khu đô thị Cao Xanh-Hà Khánh</h3>
                                    <span>10.000.000.000 đ</span>
                                    <p className="text-left">nhà bậc thang</p>
                                    <p className="text-left">Dự án khu đô thị Cao Xanh - Hà Khánh có diện tích hơn 93ha, thuộc quy hoạch phân khu xung quanh vịnh Cửa Lục của các xã phía Nam huyện Hoành Bồ trước đây, nay là TP. Hạ Long, tỉnh Quảng Ninh</p>
                                    <div className="property-details">
                                        <span>160 mét vuông</span>
                                        <span>3 phòng ngủ</span>
                                        <span>1 nhà tắm</span>
                                    </div>
                                    <Link to="/" className="btn">Thích dự án</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="box">
                                <img src={templeogue_dublin01} className="img-fluid" alt="Templeogue, Dublin" />
                                <div className="text">
                                    <h3>Suntec City Long An</h3>
                                    <span>15.000.000.000 đ</span>
                                    <p className="text-left">Nhà đôi</p>
                                    <p className="text-left">Suntec City là dự án khu đô thị kiểu mẫu khép kín ven sông do chủ đầu tư Novaland phát triển tại trung tâm huyện Thủ Thừa, tỉnh Long An.</p>
                                    <div className="property-details">
                                        <span>180 mét vuông</span>
                                        <span>3 phòng ngủ</span>
                                        <span>2 nhà tắm</span>
                                    </div>
                                    <Link to="/" className="btn">Thích dự án</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 d-none d-md-block">
                            <div className="box">
                                <img src={charlotte_quay_dublin01} className="img-fluid" alt="Charlotte Quay Dublin" />
                                <div className="text">
                                    <h3>Khu đô thị Ao Tiên Vân Đồn</h3>
                                    <span>6.000.000.000 đ</span>
                                    <p className="text-left">Căn hộ, chung cư</p>
                                    <p className="text-left">Khu đô thị Ao Tiên Vân Đồn là một trong những dự án khu đô thị mặt biển nổi bật nhất của khu kinh tế Vân Đồn, huyện Vân Đồn, tỉnh Quảng Ninh, với quy mô 115ha, vị trí đắc địa ngay đường ra cảng Ao Tiên.
                                        Dự án Ao Tiên Vân Đồn do Công ty TNHH MTV Du lịch Mai Quyền làm chủ đầu tư.</p>
                                    <div className="property-details">
                                        <span>81 mét vuông</span>
                                        <span>4 phòng ngủ</span>
                                        <span>2 nhà tắm</span>
                                    </div>
                                    <Link to="/" className="btn">Thích dự án</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 d-none d-md-block">
                            <div className="box">
                                <img src={dingle01} className="img-fluid" alt="Ventry, Dingle, Co Kerry" />
                                <div className="text">
                                    <h3>Ruby Residence Ngã Bảy</h3>
                                    <span>7.500.000.000 đ</span>
                                    <p className="text-left">Căn hộ, chung cư</p>
                                    <p className="text-left">Ruby Residence là tên thương mại của dự án Khu đô thị Nông Thôn Mới nâng cao Đại Thành tại trung tâm TP. Ngã Bảy, tỉnh Hậu Giang.</p>
                                    <div className="property-details">
                                        <span>200 mét vuông</span>
                                        <span>4 phòng ngủ</span>
                                        <span>3 nhà tắm</span>
                                    </div>
                                    <Link to="/" className="btn">Thích dự án</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 d-none d-md-block">
                            <div className="box">
                                <img src={dingle01} className="img-fluid" alt="Ventry, Dingle, Co Kerry" />
                                <div className="text">
                                    <h3>Ruby Residence Ngã Bảy</h3>
                                    <span>7.500.000.000 đ</span>
                                    <p className="text-left">Căn hộ, chung cư</p>
                                    <p className="text-left">Ruby Residence là tên thương mại của dự án Khu đô thị Nông Thôn Mới nâng cao Đại Thành tại trung tâm TP. Ngã Bảy, tỉnh Hậu Giang.</p>
                                    <div className="property-details">
                                        <span>200 mét vuông</span>
                                        <span>4 phòng ngủ</span>
                                        <span>3 nhà tắm</span>
                                    </div>
                                    <Link to="/" className="btn">Thích dự án</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
