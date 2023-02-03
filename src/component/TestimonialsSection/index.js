import React, { Component } from 'react'
import '../TestimonialsSection/TestimonialsSection.css'

export default class index extends Component {
    render() {
        return (
            <section className="testimonials-container pt-5">
                <div className="container-fluid">
                    <div className="row mt-5 move-from-left">
                        <div className="col-12 testimonials-header text-center">
                            <h2>Đánh giá của khách hàng</h2>
                            <div className="border-top border-danger w-25 mx-auto mt-md-3 mb-md-3" />
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="testimonials-card-header">
                                <i className="fas fa-quote-left" />
                            </div>
                            <div className="testimonials-card-body">
                                <p> Thật tuyệt vời khi làm việc với bạn. Chúng tôi thực sự sẽ bỏ lỡ khu vực này, nhưng chúng tôi đang mong chờ chương tiếp theo của cuộc đời mình.
                                    Cảm ơn bạn đã làm cho quy trình trở nên dễ dàng và nhận được kết quả tuyệt vời!</p>
                                <p className="mb-0">Thảo Vân</p>
                                <span>Chủ nhà</span>
                                <div className="icons d-flex">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                            <div className="testimonials-card-header">
                                <i className="fas fa-quote-left" />
                            </div>
                            <div className="testimonials-card-body">
                                <p>Chúng tôi rất biết ơn bạn và nhóm vì sự hỗ trợ tuyệt vời mà bạn đã dành cho chúng tôi trong việc bán căn nhà của chúng tôi. nhưng chúng tôi rất hài lòng với
                                    cách nó đã làm việc! Chúng tôi biết kết quả là nhờ sự chăm chỉ và kiên trì của bạn.</p>
                                <p className="mb-0">Hữu Hào</p>
                                <span>Chủ nhà</span>
                                <div className="icons d-flex ">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div className="testimonials-card-header">
                                <i className="fas fa-quote-left" />
                            </div>
                            <div className="testimonials-card-body">
                                <p>Rất vui được giao dịch với bạn và nhóm. Bạn đã giúp việc bán nhà của tôi trở nên dễ dàng, Thực sự hài lòng với kết quả này.
                                    Tôi rất mong được thực hiện một cuộc giao dịch với bạn trong thời gian sớm nhất!</p>
                                <p className="mb-0">Xuân Mạnh</p>
                                <span>Chủ nhà</span>
                                <div className="icons d-flex">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div className="testimonials-card-header">
                                <i className="fas fa-quote-left" />
                            </div>
                            <div className="testimonials-card-body">
                                <p>Đây là một công ty bất động sản thực sự quan tâm đến mọi người và đối xử với khách hàng của mình rất đàng hoàng và cẩn thận. Và thật là một kết quả tuyệt vời trong việc mua
                                    bán nhà! Tôi rất muốn giới thiệu họ, họ đã đưa ra lời khuyên tuyệt vời!</p>
                                <p className="mb-0">Anh Đức</p>
                                <span>Chủ nhà</span>
                                <div className="icons d-flex">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
    }
}
