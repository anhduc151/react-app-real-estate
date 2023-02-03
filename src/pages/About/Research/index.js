import React, { Component } from 'react'
import '../../About/Research/Research.css'
import Header from '../../../component/Header'
import ColumnSectione from '../../../component/ColumnSection'
import FooterSection from '../../../component/FooterSection'
import research01 from '../../../assets/img/research/research01.jpg'
import research02 from '../../../assets/img/research/research02.jpg'
import research03 from '../../../assets/img/research/research03.jpg'
import research05 from '../../../assets/img/research/research05.jpg'
import research06 from '../../../assets/img/research/research06.jpg'

export default class index extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="hero-img">
                    <div id="container">
                        <div className="row align-items-center">
                            <div className="img-container">
                                <img src={research01} className="img-fluid" alt="Team Meeting" />
                            </div>
                            <div className="col-12 text-center image-caption move-from-top">
                                <h2>Nhóm nghiên cứu kinh tế</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-white-bg">
                                <div className="text-left">
                                    <p className="lead">Realty Research được công nhận là công ty hàng đầu trong ngành cung cấp nghiên cứu về bất động sản và những phát hiện của chúng tôi
                                        thường xuyên xuất hiện trên nhiều phương tiện truyền thông, bao gồm các nền tảng in ấn, phát sóng và truyền thông xã hội.</p>
                                    <p className="lead">Chúng tôi là những chuyên gia nghiên cứu thị trường làm việc với khách hàng để tạo ra thị trường bất động sản chất lượng cao, dựa trên dữ liệu và không có đối thủ
                                        tìm kiếm.<br /> Phân tích của chúng tôi tập trung vào các điều kiện thị trường bất động sản hiện tại và tương lai trên toàn quốc và khu vực Ireland
                                        thị trường bất động sản nhà ở. Kiến thức sâu rộng và chuỗi dữ liệu chạy dài của chúng tôi đã mang lại cho chúng tôi kiến thức chuyên môn vô song
                                        trong việc dự đoán xu hướng thị trường bất động sản.</p>
                                    <p className="lead">Chúng tôi xuất bản các báo cáo về nhiều loại thị trường, bao gồm thị trường nhà ở, khu vực cho thuê tư nhân và khu vực nông nghiệp.
                                        thị trường nhà đất. Chúng tôi cũng đưa ra các phân tích chuyên sâu về các xu hướng trong thị trường bất động sản thương mại cùng với chiến lược của chúng tôi.
                                        đối tác thương mại Cushman &amp; Wakefield mà chúng tôi đã có 20 năm hợp tác.</p>
                                    <p className="lead">Ngoài các báo cáo bằng văn bản, chúng tôi thường xuyên thực hiện nghiên cứu riêng biệt và tổ chức các buổi thuyết trình trực tiếp, đi sâu vào chi tiết hơn
                                        về các chủ đề quan tâm cụ thể cho khách hàng của chúng tôi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-left custom-bg">
                            <div className="border-top border-danger mx-auto mb-4 d-none" />
                            <p className="lead">Chúng tôi là những chuyên gia nghiên cứu thị trường làm việc với khách hàng để tạo ra chất lượng cao, dựa trên dữ liệu và không có đối thủ
                                nghiên cứu thị trường bất động sản.</p>
                            <p className="lead">Phân tích của chúng tôi tập trung vào các điều kiện thị trường bất động sản hiện tại và tương lai trên toàn quốc và khu vực Ireland
                                thị trường bất động sản nhà ở.</p>
                            <p className="lead">Kiến thức sâu rộng và chuỗi dữ liệu chạy dài của chúng tôi đã đủ khả năng
                                chuyên môn vô song của chúng tôi trong việc dự báo xu hướng thị trường bất động sản.</p>
                            <div className="border-top border-danger mx-auto mt-4 d-none" />
                        </div>
                        <div className="col-md-6 custom-bg-img d-none d-md-block">
                            <img src={research02} className="img-fluid" alt="Two woman talking" />
                        </div>
                    </div>

                </div>
                <div className="text-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 d-flex">
                                <i className="fas fa-home" />
                                <h1>Vui lòng liên lạc để biết thêm thông tin</h1>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="header-elem d-lg-flex">
                                    <i className="fal fa-user-friends" />
                                    <h2>Giám đốc điều hành - Khu dân cư và Tư vấn</h2>
                                </div>
                                <div className="card-body-elem text-center">
                                    <img src={research03} className="img-fluid mb-3" alt="man standing" />
                                    <h3>Hữu Hào</h3>
                                    <h4>CHỦ SỞ HỮU SÂN HÀNG ĐẪY</h4>
                                    <p className="mb-0"><strong>Phone:</strong> 0987362266</p>
                                    <p><strong>Email:</strong> huuhao@gmail.com</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="header-elem d-lg-flex">
                                    <i className="fal fa-user-friends" />
                                    <h2>Chuyên gia kinh tế cao cấp - Phó Giám đốc</h2>
                                </div>
                                <div className="card-body-elem text-center">
                                    <img src={research06} className="img-fluid mb-3" alt="business women" />
                                    <h3>Thảo Vân</h3>
                                    <h4>CHỦ SỞ HỮU SÂN HỒNG ĐỎ</h4>
                                    <p className="mb-0"><strong>Phone:</strong> 098736622323</p>
                                    <p><strong>Email:</strong> thaovan@gmail.com</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="header-elem d-lg-flex">
                                    <i className="fal fa-user-friends" />
                                    <h2>Chuyên viên kinh tế - Phó Giám đốc</h2>
                                </div>
                                <div className="card-body-elem text-center">
                                    <img src={research05} className="img-fluid mb-3" alt="women standing" />
                                    <h3>Anh Đức</h3>
                                    <h4>CHỦ SỞ HỮU SÂN QUYỀN LINH</h4>
                                    <p className="mb-0"><strong>Phone:</strong> 0987263397</p>
                                    <p><strong>Email:</strong> leanhduc1510@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ColumnSectione />
                <FooterSection />
            </div>
        )
    }
}
