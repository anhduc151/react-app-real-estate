import { Link } from "react-router-dom";

const Slide = (props) => {
    const {img, price, name, adress, quantity} = props
    return (
        <Link to="/productManager" className="swiper-slide">
            <div className="property-list shadow">
                <div className="image">
                    <img src={img} className="img-fluid" alt="Spanish House" />
                </div>
                <div className="text-right">
                    <h6>Giá</h6>
                    <p>{price} đ</p>
                </div>
                <div className="d-flex justify-content-between mb-4">
                    <div className="item">
                        <h4 className="m-0">{name}</h4>
                        <p className="m-0">{adress}</p>
                    </div>
                    <div className="item d-flex align-self-center">
                        <i className="fas fa-bed mr-2 align-self-center" />
                        <span className="mr-3">{quantity}</span>
                        <i className="fas fa-bath mr-2 align-self-center" />
                        <span>{quantity}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Slide;