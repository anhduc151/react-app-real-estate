import Navbar from '../../../Navbar';
import Header from '../../../Header';
import Footer from '../../../Footer';
import { useEffect, useState } from 'react';
import { db } from '../../../../firebase/connect';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  let { productId } = useParams();
  const [formData, setFormData] = useState({
    category: 'north',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      const docRef = doc(db, 'products', productId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        let data = docSnap.data();
        delete data.created_at;
        setFormData(data);
      } else {
        // doc.data() will be undefined in this case
        alert('Không tìm thấy dữ liệu');
        navigate('/admin/products');
      }
    };
    getProduct();
  }, []);

  const handleChangeValue = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskDocRef = doc(db, 'products', productId);
    try {
      await updateDoc(taskDocRef, formData);
      alert('Cập nhật thành công');
      navigate('/admin/products');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Navbar />
      <div class='container-fluid'>
        <div class='row-fluid'>
          <Header />
          <div className='span9'>
            <div className='row-fluid'>
              <div className='page-header'>
                <h1>
                  Thêm sản phẩm
                  <small />
                </h1>
              </div>
              <form className='form-horizontal' onSubmit={handleSubmit}>
                <fieldset>
                  <div className='control-group'>
                    <label className='control-label'>Tên sản phẩm</label>
                    <div className='controls'>
                      <input
                        type='text'
                        name='name'
                        className='input-xlarge'
                        value={formData.name}
                        onChange={handleChangeValue}
                      />
                    </div>
                  </div>
                  <div className='control-group'>
                    <label className='control-label'>Mô tả</label>
                    <div className='controls'>
                      <input
                        type='text'
                        name='about'
                        className='input-xlarge'
                        value={formData.about}
                        onChange={handleChangeValue}
                      />
                    </div>
                  </div>
                  <div className='control-group'>
                    <label className='control-label'>Giá tiền</label>
                    <div className='controls'>
                      <input
                        type='number'
                        min={0}
                        name='price'
                        className='input-xlarge'
                        value={formData.price}
                        onChange={handleChangeValue}
                      />
                    </div>
                  </div>
                  <div className='control-group'>
                    <label className='control-label'>Số phòng ngủ</label>
                    <div className='controls'>
                      <input
                        type='number'
                        min={0}
                        name='bedroom'
                        className='input-xlarge'
                        value={formData.bedroom}
                        onChange={handleChangeValue}
                      />
                    </div>
                  </div>
                  <div className='control-group'>
                    <label className='control-label'>Số phòng vệ sinh</label>
                    <div className='controls'>
                      <input
                        type='number'
                        min={0}
                        name='bathroom'
                        className='input-xlarge'
                        value={formData.bathroom}
                        onChange={handleChangeValue}
                      />
                    </div>
                  </div>
                  <div className='control-group'>
                    <label className='control-label'>Diện tích (m2)</label>
                    <div className='controls'>
                      <input
                        type='number'
                        min={0}
                        name='m2'
                        className='input-xlarge'
                        value={formData.m2}
                        onChange={handleChangeValue}
                      />
                    </div>
                  </div>
                  <select
                    name='category'
                    onChange={handleChangeValue}
                    value={formData.category}
                  >
                    <option value='north' selected>
                      Bắc
                    </option>
                    <option value='south'>Nam</option>
                  </select>
                  <div className='form-actions'>
                    <button type='submit' className='btn btn-success'>
                      Cập nhật
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Edit;
