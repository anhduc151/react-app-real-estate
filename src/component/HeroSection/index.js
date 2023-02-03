import React, { Component } from 'react';
import '../HeroSection/HeroSection.css'
import city02 from '../../assets/img/index/cork-city02.jpg';

export default class index extends Component {
    render() {
        return (
            <section className="hero-banner">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={city02} className="d-block w-100" alt="Cork city" />
                            <div className="carousel-caption d-none d-md-block">
                                <h2>Ngôi nhà mơ ước trong và ngoài nước<br /> Mua và bán tài sản bất động sản</h2>
                                <p>Định hình tương lai của một người xây dựng, một cộng đồng tại một thời điểm.<br /> Liên hệ với chúng tôi để bắt đầu hành trình mua đất của bạn.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

