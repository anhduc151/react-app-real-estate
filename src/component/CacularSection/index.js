import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../CacularSection/CacularSection.css'


export default class index extends Component {
    render() {
        return (
            <section className="mortgage-calc">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 d-none d-lg-block mortgage-container move-from-left">
                            <h2>Tính thế chấp của bạn</h2>
                            <p>SỐ TIỀN VAY đ<input type="number" id="amount" min={1} max={2000000} onchange="calcLoan()" /></p>
                            <p>LÃI SUẤT %<input type="number" id="iterest_rate" min={0} max={100} defaultValue="2.7" step=".1" onchange="calcLoan()" /></p>
                            <p className="mb-5 pb-4">THỜI HẠN VAY (NĂM) <input type="number" id="years" min={1} max={35} defaultValue={35} step={1} onchange="calcLoan()" /></p>
                            <div id="payment" className="payment text-center mt-5" />
                        </div>
                        <div className="col-lg-7 mortgage-text-container move-from-right">
                            <div className="col-lg-10 col-md-12 ml-0 ml-lg-5 pt-5 pb-5 text-center">
                                <h2>Chuyên môn tài chính từ một nhà cung cấp chuyên gia</h2>
                                <div className="border-top border-danger mx-auto mt-5 mb-5" />
                                <div>
                                    <p>Bộ phận Thế chấp Bất động sản của chúng tôi có thể cung cấp cho bạn lời khuyên tài chính chuyên nghiệp ở mọi giai đoạn trong quy trình tài sản của bạn.
                                        Từ các khoản thế chấp và bảo hiểm nhân thọ đến các khoản đầu tư và lương hưu, v.v., chúng tôi luôn đồng hành cùng bạn trên mọi chặng đường.</p>
                                </div>
                                <Link to="/advise" className="btn">Yêu Cầu</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}
