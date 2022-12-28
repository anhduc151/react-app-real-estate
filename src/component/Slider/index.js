import React, { Component } from 'react'
import '../Slider/Slider.css'
import slider from '../../assets/img/index/cork-city02.jpg'




export default class index extends Component {
  render() {
    return (
        <section className="hero-banner">
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slider} className="d-block w-100" alt="Cork city" />
              <div className="carousel-caption d-none d-md-block">
                <h2>Ngôi nhà mơ ước trong và ngoài nước<br /> Mua và bán tài sản bất động sản</h2>
                <p>Định hình tương lai của một người xây dựng, một cộng đồng tại một thời điểm.<br /> Liên hệ với chúng tôi để bắt đầu hành trình mua đất của bạn.</p> 
              </div>
            </div>
            <div className="carousel-item">
              <img src="assets/img/index/dublin-night02.jpg" className="d-block w-100" alt="Dublin city" />
              <div className="carousel-caption d-none d-md-block">
                <h2>Đổi mới để tạo giá trị trong bất động sản hơn 30 năm</h2>
                <p>Niềm tin bền vững đến từ các kỹ năng đa lĩnh vực đã đạt được qua nhiều thập kỷ của những người thực hiện dựa trên kết quả</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="assets/img/index/belfast-castle.jpg" className="d-block w-100" alt="Belfast Castle" />
              <div className="carousel-caption d-none d-md-block">
                <h2>Tạo ra giá trị thực thông qua quản lý bất động sản chuyên nghiệp, từng đoạt giải thưởng</h2>
                <p>Kiến thức ngành sâu để trao quyền cho quan hệ đối tác địa phương và toàn cầu</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="assets/img/index/wexford-house.jpg" className="d-block w-100" alt="Wexford-house" />
              <div className="carousel-caption d-none d-md-block">
                <h2>Chuyên gia bất động sản địa phương<br /> Chúng tôi xử lý toàn bộ việc bán hàng từ đầu đến cuối bao gồm cả lượt xem</h2>
                <p>Chúng tôi xử lý toàn bộ việc bán hàng từ đầu đến cuối bao gồm cả lượt xem và mua sắm</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Trước đó</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span className="carousel-control-next-icon" />
            <span className="sr-only">Kế tiếp</span>
          </a>
        </div>
      </section>
      
    )
  }
}
