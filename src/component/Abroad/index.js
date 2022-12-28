import React, { Component } from 'react'
import '../Abroad/Abroad.css'
import abroad from '../../assets/img/index/abroad-classic01.jpg'
import abroad1 from '../../assets/img/index/abroad-unique02.jpg'


export default class index extends Component {
  render() {
    return (
        <section id="resent-property-section">
  <div className="container-fluid">
    <h2 className="ml-4 move-from-left">Hoặc bạn nghĩ về các dự án nước ngoài ...</h2>
    <h3 className="ml-4 mb-4 move-from-left">Các dự án được thêm gần đây ở nước ngoài</h3>
    <div className="text-right move-from-left">
      <a href="abroad-properies.html">Các dự án gần đây<i className="fas fa-long-arrow-alt-right ml-2" /></a>
    </div>
   
    <div id="resent-propery-slider">
      <div className="swiper-container">
       
        <div className="swiper-wrapper mt-2">
         
          <a href="projects.html" className="swiper-slide">
            <div className="property-list shadow">
              <div className="image">
                <img src={abroad} className="img-fluid" alt="Spanish House" />
              </div>
              <div className="text-right">
                <h6>Giá</h6>
                <p>1.750.000.000 đ</p>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <div className="item">
                  <h4 className="m-0">Charles III. Palace</h4>
                  <p className="m-0">Málaga, Spain</p>
                </div>
                <div className="item d-flex align-self-center">
                  <i className="fas fa-bed mr-2 align-self-center" />
                  <span className="mr-3">5</span>
                  <i className="fas fa-bath mr-2 align-self-center" />
                  <span>5</span>
                </div>
              </div>
            </div>
          </a>
          <a href="projects.html" className="swiper-slide">
            <div className="property-list shadow">
              <div className="image">
                <img src={abroad1} className="img-fluid" alt="Stone house" />
              </div>
              <div className="text-right">
                <h6>Giá</h6>
                <p>3.350.000.000 đ</p>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <div className="item">
                  <h4 className="m-0">Mada'in Saleh</h4>
                  <p className="m-0">Saudi Arabia</p>
                </div>
                <div className="item d-flex align-self-center">
                  <i className="fas fa-bed mr-2 align-self-center" />
                  <span className="mr-3">10</span>
                  <i className="fas fa-bath mr-2 align-self-center" />
                  <span>8</span>
                </div>
              </div>
            </div>
          </a>
          <a href="projects.html" className="swiper-slide">
            <div className="property-list shadow">
              <div className="image">
                <img src="assets/img/index/abroad-france01.jpg" className="img-fluid" alt="French Conty House" />
              </div>
              <div className="text-right">
                <h6>Giá</h6>
                <p>65.550.000.000 đ</p>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <div className="item">
                  <h4 className="m-0">Saint-Jean-Cap-Ferrat</h4>
                  <p className="m-0">Provence-Alpes-Côte D'azur, France
                  </p>
                </div>
                <div className="item d-flex align-self-center">
                  <i className="fas fa-bed mr-2 align-self-center" />
                  <span className="mr-3">7</span>
                  <i className="fas fa-bath mr-2 align-self-center" />
                  <span>7</span>
                </div>
              </div>
            </div>
          </a>
          <a href="projects.html" className="swiper-slide">
            <div className="property-list shadow">
              <div className="image">
                <img src="assets/img/index/abroad-maldives01.jpg" className="img-fluid" alt="maldives beach house" />
              </div>
              <div className="text-right">
                <h6>Giá</h6>
                <p>10.775.865.627</p>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <div className="item">
                  <h4 className="m-0">Kunfunadhoo Island</h4>
                  <p className="m-0">Baa Atoll, Republic Of Maldives</p>
                </div>
                <div className="item d-flex align-self-center">
                  <i className="fas fa-bed mr-2 align-self-center" />
                  <span className="mr-3">9</span>
                  <i className="fas fa-bath mr-2 align-self-center" />
                  <span>9</span>
                </div>
              </div>
            </div>
          </a>
          <a href="projects.html" className="swiper-slide">
            <div className="property-list shadow">
              <div className="image">
                <img src="assets/img/index/abroad-edinburgh01.jpg" className="img-fluid" alt="edinburgh uk house" />
              </div>
              <div className="text-right">
                <h6>Giá</h6>
                <p>3.750.000.000</p>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <div className="item">
                  <h4 className="m-0">Boraston House</h4>
                  <p className="m-0">Edinburgh, UK</p>
                </div>
                <div className="item d-flex align-self-center">
                  <i className="fas fa-bed mr-2 align-self-center" />
                  <span className="mr-3">8</span>
                  <i className="fas fa-bath mr-2 align-self-center" />
                  <span>8</span>
                </div>
              </div>
            </div>
          </a>
        </div>
     
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </div>
    </div>
  </div>
</section>

    )
  }
}
