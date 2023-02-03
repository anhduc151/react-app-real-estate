import React, { Component } from 'react'
import '../FeartureSection/FeartureSection.css'
import bgr from '../../assets/img/index/blue-bg.jpg'
import property_in_hand from '../../assets/img/index/property-in-hand.png'

export default class index extends Component {
    render() {
        return (
            <div >
                <section className="features" style={{ backgroundImage: `url(${bgr})` }}>
                    <div className="container" >
                        <div className="features-content" >
                            <div className="row">
                                <div className="col-md-6 col-lg-4 features-box move-from-left">
                                    <div className="features-icon">
                                        <i className="fas fa-globe" />
                                    </div>
                                    <h4 className="features-h4">Những khu đất có tiềm năng nhất thế giới</h4>
                                    <p className="features-text">Khám phá bộ sưu tập bất động sản quốc tế của chúng tôi và tìm ngôi nhà sang trọng đáp ứng phong cách sống độc đáo của bạn.</p>
                                </div>
                                <div className="col-md-6 col-lg-4 features-box move-from-left">
                                    <div className="features-icon">
                                        <i className="fas fa-trophy" />
                                    </div>
                                    <h4 className="features-h4">Chỉ những tài sản tốt nhất</h4>
                                    <p className="features-text">Nguồn tài nguyên số 1 cho tất cả mọi người trên toàn cầu với bất động sản cao cấp, tài sản thương mại và nhà ở tốt nhất.</p>
                                </div>
                                <div className="col-md-6 col-lg-4 features-box move-from-left">
                                    <div className="features-icon">
                                        <i className="fas fa-map-marked-alt" />
                                    </div>
                                    <h4 className="features-h4">Tất cả các dự án ở những vị trí hàng đầu</h4>
                                    <p className="features-text">Hãy để Chuyên gia bất động sản ở nước ngoài, tìm dự án hoàn hảo của bạn trong nước hoặc / và nước ngoài.</p>
                                </div>
                                <div className="col-md-6 col-lg-4 features-box move-from-right">
                                    <div className="features-icon">
                                        <i className="fas fa-key" />
                                    </div>
                                    <h4 className="features-h4">Nhà mới trong một tuần</h4>
                                    <p className="features-text">Hãy để chúng tôi Tìm cho bạn ngôi nhà mới ưng ý nhất trong vòng 7 ngày*</p>
                                </div>
                                <div className="col-md-6 col-lg-4 features-box move-from-right">
                                    <div className="features-icon">
                                        <i className="fas fa-presentation" />
                                    </div>
                                    <h4 className="features-h4">1% nhà môi giới hàng đầu</h4>
                                    <p className="features-text">Đại lý bất động sản <strong>Phí thấp nhất</strong>. Giá dịch vụ cố định: 10.000.000 + VAT</p>
                                </div>
                                <div className="col-md-6 col-lg-4 features-box move-from-right">
                                    <div className="features-icon">
                                        <i className="fas fa-lock-open-alt" />
                                    </div>
                                    <h4 className="features-h4">thanh toán an toàn</h4>
                                    <p className="features-text">Từ các nhà bán lẻ địa phương đến các doanh nghiệp tập đoàn, chúng tôi hợp tác với các doanh nghiệp trên toàn thế giới.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="request-container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-6 align-self-center justify-content-center">
                            <div className="col-md-12 col-lg-12 text-center">
                                <div className="form-header-h1 ">
                                    <h1>Suy nghĩ về việc bán hoặc cho tài sản của bạn?</h1>
                                </div>
                                <div className="border-top border-danger mx-auto mt-md-5 mb-md-3" />
                                <div className="form-header-p">
                                    <p />
                                </div>Đây là một dịch vụ miễn phí và không có nghĩa vụ phải tham gia các dịch vụ của chúng tôi, vì vậy nếu bạn cần định giá cho
                                bán hoặc cho thuê tài sản của bạn, chúng tôi sẵn sàng trợ giúp. Bạn có thể đăng ký định giá với bất kỳ văn phòng nào của chúng tôi.
                                Khi chúng tôi có thông tin chi tiết của bạn, chúng tôi sẽ gọi cho bạn vào thời điểm thích hợp cho bạn.
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 pr-0 align-self-center justify-content-center">
                            <img src={property_in_hand} className="img-fluid" alt="property in hand" />
                        </div>
                        <div>
                            <a href="request-valuation.html" className="btn text-center">Đặt lịch định giá</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
