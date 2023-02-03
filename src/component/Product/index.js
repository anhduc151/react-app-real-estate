import Header from '../Header';
import ColumnSection from '../ColumnSection';
import FooterSection from '../FooterSection';
import doolin_house_dublin01 from '../../assets/img/index/doolin-house-dublin01.jpeg';
import { Alert, Space } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkLikeProduct } from '../../Redux/action';
import { checkLikeProductSelector } from '../../Redux/selector';
import AddToCart from '../../ultis/AddToCart';
const Product = ({ img, price, title, bed, bathtub, area }) => {
  const [toggleAlert, setToggleAlert] = useState(false);
  const dispatch = useDispatch();
  const handleLikeProduct = () => {
    setToggleAlert(true);
    const product = {
      img,
      price,
      title,
      area,
    };
    dispatch(checkLikeProduct(product));
    AddToCart(product);
  };
  useEffect(() => {
    if (!toggleAlert) return;
    setTimeout(() => setToggleAlert(false), 2000);
  }, [toggleAlert]);
  return (
    <div className='col-md-6 col-lg-3'>
      {toggleAlert && (
        <div className='message__box'>
          <Alert message='Đã thêm vào mục yêu thích' type='success' showIcon />;
        </div>
      )}
      <div className='box1'>
        <img src={img} className='img-fluid' alt='Doolin House, Dublin' />
        <div className='text'>
          <span>{price}</span>
          <hr />
          <h3>{title}</h3>
          <hr />
          <div className='property-details justify-content-between d-flex align-self-center'>
            <div>
              <i className='fas fa-bed mr-2 align-self-center' />
              <span className>{bed}</span>
            </div>
            <div className='border-right dorder-danger' />
            <div>
              <i className='fas fa-bath mr-2 align-self-center' />
              <span>{bathtub}</span>
            </div>
            <div className='border-right dorder-danger' />
            <div>
              <i className='fas fa-ruler-combined mr-2 align-self-center' />
              <span>{area}</span>
            </div>
          </div>
        </div>
        <hr />
        <div className='text-center'>
          <button onClick={handleLikeProduct}>
            Thích dự án
            <i className='fas fa-long-arrow-alt-right ml-2' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
