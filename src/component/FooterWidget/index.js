import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../FooterWidget/FooterWidget.css'


export default class index extends Component {
    render() {
        return (
            <div className="footer-widget-border">
                <div className="container-fliud footer-widget">
                    <div className="row pt-5 pb-5 align-items-center">
                        <div className="col-md-6 col-lg-3 text-center footer-widget-text">
                            <h1>Đội ngũ của chúng tôi</h1>
                            <p>Người dân địa phương có kinh nghiệm</p>
                        </div>
                        <div className="col-md-6 col-lg-3 mt-3 text-center social-media">
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
                        <div className="col-md-6 col-lg-3 mt-5 mt-lg-0 text-center">
                            <Link to="/contact" className="btn">Đặt một câu hỏi</Link>
                        </div>
                        <div className="col-md-6 col-lg-3 mt-5 mt-lg-0 text-center">
                            <Link to="/advise" className="btn">Yêu cầu thẩm định</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
