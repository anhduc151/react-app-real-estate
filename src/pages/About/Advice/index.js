import React, { Component } from 'react'
import '../../About/Advice/Advice.css'
import Header from '../../../component/Header'
import ColumnSectione from '../../../component/ColumnSection'
import FooterSection from '../../../component/FooterSection'
import advice01 from '../../../assets/img/advice/advice01.jpg'
import advice02 from '../../../assets/img/advice/advice02.jpeg'

export default class index extends Component {
    render() {
        return (
            <div>
                <Header />
                    <section className="hero-img">
                        <div id="container">
                            <div className="row align-items-center">
                                <div className="img-container">
                                    <img src={advice01} className="img-fluid" alt="house" />
                                </div>
                                <div className="col-12 text-center image-caption">
                                    <h1 className="move-from-top">Mua nhà ở Việt Nam</h1>
                                    <p className="lead d-none d-md-block item-delay">Mua tài sản là một quá trình phức tạp. Với hơn 30 năm kinh nghiệm làm việc với người mua trên khắp Ireland, chúng tôi đã
                                        đã nghiên cứu và phát triển tuyển tập các hướng dẫn và tài nguyên hữu ích để cung cấp cho bạn thông tin chi tiết mà bạn cần.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Satrt Hero Section*/}
                    {/*Start Advice tips Section */}
                    <section className="advice-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 col-xl-6 text-white-bg">
                                    <div>
                                        <h1>Lời khuyên, thủ thuật và hơn thế nữa</h1>
                                        <div className="border-top border-danger mx-auto mt-md-5 mb-md-3" />
                                        <p>Cho dù mua căn nhà đầu tiên của bạn, tăng hay giảm quy mô, chúng tôi có tất cả các nguồn lực và thông tin chi tiết bạn cần khi nói đến
                                            mua nhà mới của bạn. Hãy dành một chút thời gian để xem xét lựa chọn hướng dẫn và lời khuyên của chúng tôi dưới đây về tất cả các khía cạnh của việc mua bất động sản
                                            ở Việt Nam ngày nay.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-xl-6 image d-none d-lg-block">
                                    <img src={advice02} className="img-fluid" alt="a couple seeing a house" />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/**/}

                <ColumnSectione />
                <FooterSection />
            </div>
        )
    }
}
