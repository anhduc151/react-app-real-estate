import React, { useEffect, useState } from 'react';
import { getDatabase, ref, child, get } from 'firebase/database';
import '../NorthProduct/NorthProduct.css';
import ColumnSection from '../../../component/ColumnSection';
import FooterSection from '../../../component/FooterSection';
import Header from '../../../component/Header';
import doolin_house_dublin01 from '../../../assets/img/index/doolin-house-dublin01.jpeg';
import Product from '../../../component/Product';
import { checkLikeProductSelector } from '../../../Redux/selector';
import { useSelector } from 'react-redux';
import { db } from '../../../firebase/connect';
import { collection, query, where, getDocs } from 'firebase/firestore';

// let productNorth = Array(15).fill(5);
const Products = () => {
  const [products, setProducts] = useState([]);
  const data = useSelector(checkLikeProductSelector);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(
        collection(db, 'products'),
        where('category', '==', 'north')
      );
      const querySnapshot = await getDocs(q);
      let data = [];

      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <>
      <div>
        <Header />
        <section className='local-property-card-section pt-md-5'>
          <h1>Các dự án ở phía Bắc</h1>

          <div className='content'>
            <div className='row'>
              {products.map((data) => {
                return (
                  <Product
                    key={data.id}
                    img={doolin_house_dublin01}
                    price={data.price}
                    title={data.name}
                    bed={data.bedroom}
                    bathtub={data.bathroom}
                    area={data.m2}
                  />
                );
              })}
            </div>
          </div>
        </section>
        <ColumnSection></ColumnSection>
        <FooterSection></FooterSection>
      </div>
    </>
  );
};

export default Products;
