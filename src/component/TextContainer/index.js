import React, { Component } from 'react';
import '../TextContainer/TextContainer.css'

export default class index extends Component {
    render() {
        return (
            <div className="text-container">
                <div className="row pt-5">
                    <div className="col-md-12 text-center">
                        <h3>Suy nghĩ về việc mua bán 1 dự án </h3>
                        <h4>Hãy chắc chắn rằng bạn liên hệ với chúng tôi trước!</h4>
                    </div>
                    <div className="col-md-6 text-lists pt-5">
                        <ul>
                            <li><i className="far fa-check-circle" aria-hidden="true" /></li>
                            <li>Chúng tôi là một đại lý bất động sản được cấp phép đầy đủ</li>
                            <li><i className="far fa-check-circle" aria-hidden="true" /></li>
                            <li>Chúng tôi tính phí cố định 10.000.000đ + VAT - không có phụ phí ẩn</li>
                            <li><i className="far fa-check-circle" aria-hidden="true" /></li>
                            <li>Dấu hiệu rao bán hấp dẫn được ghi đầy đủ trên tất cả dự án</li>
                            <li><i className="far fa-check-circle" aria-hidden="true" /></li>
                            <li>Chúng tôi sẽ mang đến cho bạn mức giá tối đa và giúp bạn tiết kiệm rất nhiều chi phí</li>
                        </ul>
                    </div>
                    <div className="col-md-6 text-lists pt-5">
                        <ul>
                            <li><i className="far fa-check-circle" aria-hidden="true" /></li>
                            <li>Dự án của chúng tôi bao gồm tất cả các tỉnh thành ở Việt Nam</li>
                            <li><i className="far fa-check-circle" aria-hidden="true" /></li>
                            <li>Chúng tôi xử lý toàn bộ việc bán hàng từ đầu đến cuối bao gồm cả lượt xem</li>
                            <li><i className="far fa-check-circle" aria-hidden="true" /></li>
                            <li>Chúng tôi sử dụng các nhiếp ảnh gia chuyên nghiệp để chụp ảnh &amp; sơ đồ tầng 2D</li>
                            <li><i className="far fa-check-circle" aria-hidden="true" /></li>
                            <li>Chúng tôi quảng cáo dự án đúng chuẩn yêu cầu mà bạn cần</li>
                        </ul>
                    </div>
                    <div className="col-md-12 text-center pt-5">
                        <h4>Dịch vụ đại lý bất động sản đầy đủ, không thỏa hiệp</h4>
                        <p className="hero-btn-text"><span>10.000.000đ</span>+VAT @ 23%</p>
                        <a href="request-valuation.html" className="btn-custom">
                            <p>Đặt chỗ định giá miễn phí tài sản của tôi <i className="fas fa-long-arrow-alt-right ml-2" /></p></a>
                    </div>
                </div>
            </div>
        );
    }
}
