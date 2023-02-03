import React, { Component } from 'react';
import '../Advise/Advise.css'
import Header from '../../component/Header'
import ColumnSection from '../../component/ColumnSection'
import FooterSection from '../../component/FooterSection'
import CacularSection from '../../component/CacularSection'
import FooterWidget from '../../component/FooterWidget'
import mortgage01 from '../../assets/img/mortgage/mortgage01.jpg'
import mortgage02 from '../../assets/img/mortgage/mortgage02.jpg'
import mortgage03 from '../../assets/img/mortgage/mortgage03.jpeg'
import mortgage04 from '../../assets/img/mortgage/mortgage04.jpg'
import mortgage05 from '../../assets/img/mortgage/mortgage05.jpeg'
import ModalBox from '../../component/Modal'


export default class index extends Component {
    render() {
        const content = (
            <div className="" id="contactModal" tabIndex={-1} aria-labelledby="contactModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content row">
                        <div className="modal-header row ml-auto">
                            <div className="col-sm-10 text-center">
                                <h5 className="modal-title" id="contactModalLabel">Yêu cầu dịch vụ tài chính</h5>
                            </div>
                            <div className="col-sm-10 text-center">
                                <p>Nhóm chuyên gia tài chính của chúng tôi luôn trực tuyến, có sẵn qua cuộc gọi hoặc cuộc họp ảo để hướng dẫn bạn thực hiện các lựa chọn của mình. Liên lạc ngay hôm nay</p>
                            </div>
                            {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button> */}
                        </div>
                        <div className="modal-body">
                            <form id="myForm" onsubmit="return sendMail(this);">
                                <div className="form-group">
                                    <div className="col-sm-12">
                                        <i className="fas fa-user" />
                                        <input type="text" name="name" className="form-control" id="inputFullName" placeholder="Full Name" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-12">
                                        <i className="fas fa-envelope" />
                                        <input type="email" name="email" className="form-control" id="inputEmail" placeholder="Email" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-12">
                                        <i className="fas fa-mobile-alt" />
                                        <input type="" name="phone" className="form-control" id="inputPhone" placeholder="Phone" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <select id="inputOption" name="time" className="form-control" required>
                                        <option selected value>Chọn sản phẩm</option>
                                        <option>thế chấp</option>
                                        <option>Bảo vệ thế chấp/Bảo hiểm nhân thọ</option>
                                        <option>Bảo hiểm nhà ở</option>
                                        <option>lương hưu</option>
                                        <option>Chuyển đổi/thế chấp</option>
                                        <option>Khác</option>
                                    </select>
                                </div>
                                {/* <div className="form-group">
                                    <div className="col-sm-12">
                                        <button  type="submit" className="btn">Gửi Yêu Cầu</button>
                                    </div>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
        return (
            <div>
                <Header />
                <section className="hero-img">
                    <div id="container">
                        <div className="row align-items-center">
                            <div className="img-container">
                                <img src={mortgage01} className="img-fluid" alt="man Writing" />
                            </div>
                            <div className="col-12 text-center image-caption move-from-top">
                                <h1>Tư vấn thế chấp</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-header">
                    <div className="container gray-bg">
                        <div className="row">
                            <div className="col-md-7">
                                <h1>Thế chấp bất động sản</h1>
                                <div className="border-top border-costum mt-5 mb-3" />
                                <p className="lead">Cần tư vấn - Liên hệ với một trong những Cố vấn thế chấp của chúng tôi</p>
                            </div>
                            <div className="col-md-5 text-center">
                                {/* Button trigger modal */}
                                <ModalBox title="Liên hệ chúng tôi" content={content} />
                                {/* <button  type="button" className="contact-btn" data-toggle="modal" data-target="#contactModal">Liên hệ chúng tôi</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="container white-bg move-from-right">
                        <p className="lead">Bất kể tình huống của bạn là gì, đội ngũ cố vấn thế chấp có trình độ của chúng tôi có kinh nghiệm và kiến thức thị trường để tìm đúng
                            lựa chọn thế chấp cho bạn. Từ những người mua lần đầu và những người chuyển nhà đến các nhà đầu tư, v.v., đội ngũ giàu kinh nghiệm của chúng tôi sẽ làm việc với bạn
                            hướng dẫn bạn qua quy trình thế chấp một cách cẩn thận và chu đáo.</p>
                    </div>
                </section>
                <CacularSection />
                <section>
                    <div className="advice-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7 mt-xl-5 advice-text">
                                    <h1>Mang đến cho người mua lần thứ hai những lựa chọn tuyệt vời</h1>
                                    <div className="border-top border-danger text-center mt-4 mb-4" />
                                    <p>Cho dù bạn đang giao dịch tăng hay giảm quy mô, bạn sẽ biết rằng thị trường thế chấp đã thay đổi và phát triển trong những năm gần đây. Bây giờ hơn bao giờ hết,
                                        bạn cần một cố vấn có kinh nghiệm ở góc của bạn nêu chi tiết các tùy chọn có sẵn và cho bạn lời khuyên cũng như hỗ trợ bạn cần.</p>
                                    {/* Button trigger modal */}
                                    <div className="text-center">
                                        <ModalBox title="Liên hệ chúng tôi" content={content} />
                                    </div>
                                </div>
                                <div className="col-md-5 mt-5 pt-md-3 pt-lg-0">
                                    <img src={mortgage02} className="img-fluid" alt="women talking" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="advice-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 mt-5 pt-md-3 pt-lg-0 order-2 order-md-1">
                                    <img src={mortgage03} className="img-fluid" alt="packing out from boxes" />
                                </div>
                                <div className="col-md-7 mt-xl-5 advice-text order-1 order-md-2">
                                    <h1>Người mua lần đầu – đảm bảo thế chấp đầu tiên của bạn</h1>
                                    <div className="border-top border-danger text-center mt-4 mb-4" />
                                    <p>Áp dụng cho thế chấp của bạn có thể cảm thấy phức tạp. Với hơn 20 năm kinh nghiệm dưới vành đai của chúng tôi và đã tổ chức
                                        hàng ngàn khoản thế chấp cho người mua lần đầu trên khắp Ireland, bạn có thể tin tưởng vào chúng tôi để được tư vấn rõ ràng và hướng dẫn
                                        ngay trong suốt quá trình thế chấp</p>
                                    {/* Button trigger modal */}
                                    <div className="text-center">
                                        <ModalBox title="Liên hệ chúng tôi" content={content} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <FooterWidget />
                <section>
                    <div>
                        <div className="advice-header">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7 mt-xl-5 advice-text">
                                        <h1>Giải thích chương trình Trợ giúp để Mua</h1>
                                        <div className="border-top border-danger text-center mt-4 mb-4" />
                                        <p>Là người mua lần đầu, chương trình Hỗ trợ mua của chính phủ Ireland là một sáng kiến hoàn thuế có thể trị giá tới 30.000 € đối với việc mua
                                            ngôi nhà đầu tiên của bạn. Bạn sẽ tìm thấy tất cả lời khuyên bạn cần trong hướng dẫn Trợ giúp mua của chúng tôi tại đây và bạn cũng có thể xem mình có đủ điều kiện tham gia chương trình hay không,
                                            và tính xem bạn được hưởng bao nhiêu.</p>
                                        {/* Button trigger modal */}
                                        <div className="text-center">
                                            <ModalBox title="Liên hệ chúng tôi" content={content} />
                                        </div>
                                    </div>
                                    <div className="col-md-5 mt-5 pt-md-3 pt-lg-0">
                                        <img src={mortgage04} className="img-fluid" alt="laptop on the table" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="advice-header">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5 mt-5 pt-md-3 pt-lg-0 order-2 order-md-1">
                                        <img src={mortgage05} className="img-fluid" alt="women and a man talking" />
                                    </div>
                                    <div className="col-md-7 mt-xl-5 advice-text order-1 order-md-2">
                                        <h1>Cung cấp cho nhà đầu tư các giải pháp hợp lý</h1>
                                        <div className="border-top border-danger text-center mt-4 mb-4" />
                                        <p>Cho dù bạn là nhà đầu tư bất động sản có kinh nghiệm hay chủ nhà lần đầu, bạn cần một hợp đồng thế chấp mua để cho phép giúp bạn tận dụng tối đa
                                            tài sản của bạn. Với rất nhiều nhà cung cấp mới trên thị trường, chúng tôi sẽ cung cấp cho bạn lời khuyên cụ thể mà bạn cần và làm việc với bạn từng bước để nhận được
                                            thế chấp mua để cho thuê tốt nhất đáp ứng nhu cầu của bạn.</p>
                                        {/* Button trigger modal */}
                                        <div className="text-center">
                                            <ModalBox title="Liên hệ chúng tôi" content={content} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ColumnSection />
                <FooterSection />
            </div>
        );
    }
}
