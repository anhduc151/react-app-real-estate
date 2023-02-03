import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../AbroadSection/AbroadSection.css'
import abroad_classic01 from '../../assets/img/index/abroad-classic01.jpg'
// import abroad_unique02 from '../../assets/img/index/abroad-unique02.jpg'
// import abroad_france01 from '../../assets/img/index/abroad-france01.jpg'
// import abroad_maldives01 from '../../assets/img/index/abroad-maldives01.jpg'
// import abroad_edinburgh01 from '../../assets/img/index/abroad-edinburgh01.jpg'
import Slide from '../Slide';


export default class index extends Component {
    render() {
        const arr = [1,2,3,4,5]
        return (
            <section id="resent-property-section">
                <div className="container-fluid">
                    <h2 className="ml-4 move-from-left">Hoặc bạn nghĩ về các dự án nước ngoài ...</h2>
                    <h3 className="ml-4 mb-4 move-from-left">Các dự án được thêm gần đây ở nước ngoài</h3>
                    <div className="text-right move-from-left">
                        <Link to="/productManager">Các dự án gần đây<i className="fas fa-long-arrow-alt-right ml-2" /></Link>
                    </div>
                    <div id="resent-propery-slider">
                        <div className="swiper-container">                     
                            <div className="swiper-wrapper mt-2">                              
                               {arr.map((slide,index) => {
                                    return (
                                        <Slide img={abroad_classic01} name="Charles III. Palace" price="1.750.000.000" adress="Málaga, Spain" quantity="5" />
                                    );
                               })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
