import React, { useEffect, useState } from 'react';
import '../NorthProduct/NorthProduct.css';
import Product from '../../../component/Product';
import { getDatabase, ref, child, get } from 'firebase/database';
import { checkLikeProductSelector } from '../../../Redux/selector';
import { useSelector } from 'react-redux';

import ColumnSection from '../../../component/ColumnSection';
import FooterSection from '../../../component/FooterSection';
import Header from '../../../component/Header';
import doolin_house_dublin01 from '../../../assets/img/index/doolin-house-dublin01.jpeg';
import { db } from '../../../firebase/connect';
import { collection, query, where, getDocs } from 'firebase/firestore';
// import glasnevin_dublin01 from "../../../assets/img/index/glasnevin-dublin01.jpeg";
// import templeogue_dublin01 from "../../../assets/img/index/templeogue-dublin01.jpeg";
// import charlotte_quay_dublin01 from "../../../assets/img/index/charlotte-quay-dublin01.jpeg";
// import killinick_wexford01 from "../../../assets/img/index/killinick-wexford01.jpeg";

const Products = () => {
  const [products, setProducts] = useState([]);
  const data = useSelector(checkLikeProductSelector);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(
        collection(db, 'products'),
        where('category', '==', 'south')
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
          <h1>Các dự án ở phía Nam</h1>
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
