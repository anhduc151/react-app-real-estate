import React, { Component } from 'react';
import '../RequestValue/RequestValue.css'
import Header from '../../../component/Header'
import FooterSection from '../../../component/FooterSection'
import valueimg1 from '../../../assets/img/req-valuation/request-valuation01jpg.jpg'
import bgr from '../../../assets/img/index/blue-bg.jpg'
import pic01 from '../../../assets/img/req-valuation/profil-pic/profil-pic01.jpg'
import pic02 from '../../../assets/img/req-valuation/profil-pic/profil-pic02.jpg'
import pic03 from '../../../assets/img/req-valuation/profil-pic/profil-pic03.jpg'
import pic04 from '../../../assets/img/req-valuation/profil-pic/profil-pic04.jpg'
import pic05 from '../../../assets/img/req-valuation/profil-pic/profil-pic05.jpg'
import pic06 from '../../../assets/img/req-valuation/profil-pic/profil-pic06.jpg'



export default class index extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="hero-img">
                    <div id="container">
                        <div className="row align-items-center">
                            <div className="img-container">
                                <img src={valueimg1} className="img-fluid" alt="girl with laptop" />
                            </div>
                            <div className="col-12 text-center text-lg-right image-caption move-from-left">
                                <h1>Yêu cầu định giá</h1>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Satrt Hero Section*/}
                {/*Start Request Valuation Section*/}
                <section className="req-value-section">
                    <div className="request-container">
                        <div className="row">
                            <div className="col-lg-6 text-center order-2 order-lg-1">
                                <div className="col-md-12 justify-content-center">
                                    <form id="myForm" onsubmit="return sendMail(this);" className="signup-form">
                                        <div className="requet-content">
                                            <h2>Yêu cầu định giá</h2>
                                            <div className="radio-btns">
                                                <input type="radio" id="sell" name="message4" defaultValue="sell" style={{ margin: "10px" }} />
                                                <label htmlFor="sell">Bán</label>
                                                <input type="radio" id="let" name="message4" defaultValue="let" style={{ margin: "10px" }} />
                                                <label htmlFor="let">Để cho</label>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-md-12 form-group text-left">
                                                    <label htmlFor="location">Địa điểm *</label>
                                                    <select name="message2" id="location" className="form-control" required>
                                                        <option value>Chọn địa điểm*</option>
                                                    </select>
                                                    <label htmlFor="area">Khu vực *</label>
                                                    <select name="message3" id="area" className="form-control" required>
                                                        <option value>Chọn khu vực*</option>
                                                    </select>
                                                    <label htmlFor="name">Tên đầy đủ *</label>
                                                    <input type="text" className="form-control" id="name" name="name" required />
                                                    <label htmlFor="email">Email *</label>
                                                    <input type="email" className="form-control" id="email" name="email" required />
                                                    <label htmlFor="phone">Số điện thoại *</label>
                                                    <input type="number" className="form-control" id="phone" name="phone" required />
                                                    <label htmlFor="inputDay">Chọn thời gian gọi lại ưa thích *</label>
                                                    <select id="inputDay" className="form-control" name="time" required>
                                                        <option value>Lựa chọn</option>
                                                        <option>9am - 1pm</option>
                                                        <option>1pm - 4pm</option>
                                                        <option>4pm - 9pm</option>
                                                        <option>Bất cứ lúc nào</option>
                                                    </select>
                                                </div>
                                                <div className="btn">
                                                    <button type="submit" name="submit" className="submit-btn">Nộp</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 align-self-center justify-content-center">
                                <div className="col-md-12 col-lg-9 text-center">
                                    <div className="form-header-h1 ">
                                        <h1>Suy nghĩ về việc bán hoặc cho tài sản của bạn?</h1>
                                    </div>
                                    <div className="border-top border-danger mx-auto mt-md-5 mb-md-5" />
                                    <div className="form-header-p">
                                        <p> Bạn có thể đăng ký định giá với bất kỳ văn phòng nào của chúng tôi.
                                            Khi chúng tôi có thông tin chi tiết của bạn, chúng tôi sẽ gọi cho bạn vào thời điểm thích hợp cho bạn.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End Request Valuation Section*/}
                {/*Start Info Section*/}
                <section className="features" style={{ backgroundImage: `url(${bgr})` }}>
                    <div className="container"  >
                        <div className="features-content">
                            <div className="row">
                                <div className="col-md-12 pt-5 features-box move-from-left">
                                    <h3 className="features-h4 text-center">Dịch vụ đại lý toàn bộ bất động sản: <strong>10.000.000 +VAT</strong></h3>
                                    <p className="features-text lead text-center">Những ngày trả cho một đại lý bất động sản vài nghìn Euro để bán một tài sản đã không còn nữa. kinh nghiệm của chúng tôi,
                                        các đại lý bất động sản đủ điều kiện sẽ xử lý việc bán tài sản của bạn từ đầu đến cuối. Chúng tôi sẽ giúp bạn có được giá tốt nhất cho tài sản của bạn
                                        nhưng phí của chúng tôi chỉ là €1599+VAT, giúp bạn tiết kiệm hàng nghìn đô la.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="info">
                    <div className="container white-bg">
                        <div className="row">
                            <div className="col-12">
                                <h1>Bán nhà của bạn - Thẩm định thị trường</h1>
                                <p>Btrước khi xem xét đưa một tài sản ra thị trường để bán hoặc với mục đích kiếm lời
                                    thu nhập cho thuê tiềm năng, điều cần thiết là bạn phải có cảm nhận thực sự về giá trị thị trường của nó – đó là nơi
                                    chúng tôi đến. Đội ngũ chuyên gia định giá của chúng tôi có kiến thức chuyên sâu về thị trường bất động sản ở bạn
                                    khu vực và sẽ sẵn lòng hướng dẫn bạn với kiến thức chuyên môn và địa phương của họ. Thường được gọi là một
                                    Đánh giá thị trường định giá của chúng tôi sẽ cung cấp cho bạn giá hướng dẫn cực kỳ quan trọng để thực hiện
                                    một quyết định sáng suốt khi nói đến việc bán nhà của bạn.</p>
                                <p className="lead">Nếu bạn đang nghĩ đến việc bán, hãy điền vào biểu mẫu trên và văn phòng địa phương của bạn sẽ liên hệ.</p>
                            </div>
                            <div className="col-12">
                                <h1>Định giá ngân hàng, pháp lý và doanh thu</h1>
                                <p>Đôi khi bạn có thể cần định giá tài sản vì các lý do liên quan đến Ngân hàng, Pháp lý hoặc Doanh thu.
                                    Nhóm Định giá Nhà ở chuyên dụng của chúng tôi cung cấp dịch vụ chuyên nghiệp và nhanh nhạy, sử dụng
                                    kiến thức thị trường chi tiết và cơ sở dữ liệu tài sản toàn diện cho mục đích so sánh, cung cấp định giá cho
                                    khách hàng chủ yếu trong các lĩnh vực chính sau:</p>
                                <ul>
                                    <li>chứng thực di chúc</li>
                                    <li>Luật gia đình</li>
                                    <li>Chuyên gia làm chứng</li>
                                    <li>Sổ đỏ/ Sổ xanh Định giá cho các mục đích Ngân hàng và Thế chấp</li>
                                    <li>Định giá liên quan đến doanh thu</li>
                                    <li>chuyển gia đìnhr</li>
                                    <li>Thuế lãi vốn</li>
                                    <li>Thuế mua lại vốn</li>
                                    <li>Quỹ hưu trí tự quản lý</li>
                                    <li>Chương trình giao dịch công bằng HSE</li>
                                </ul>
                                <p className="lead">Để tận dụng một trong các dịch vụ trên, vui lòng liên hệ với chúng tôi tại<a href="tel:+84987266338"> +84987266338</a> hoặc leanhduc1510@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="team">
                    <div className="container my-3 py-3 text-center">
                        <div className="row mb-5 mt-5">
                            <div className="col">
                                <h1>Gặp gỡ nhóm định giá của chúng tôi</h1>
                                <p className="mt-3">Đối với định giá ngân hàng, pháp lý và doanh thu</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="card-wrapper">
                                    <div className="card-body">
                                        <div className="card-front">
                                            <div className="card align-items-center">
                                                <img src={pic01} className="img-fluid rounded-circle w-50 mb-3" alt="Mark Lewis" />
                                                <h2>Anh Đức</h2>
                                                <h3>Giám đốc</h3>
                                                <h4>Bất động sản</h4>
                                                <p><strong>Phone: </strong> +9487263397<br /><strong>Email: </strong> leanhduc1510@gmail.com</p>
                                                <div className="border-top border-danger w-25 mx-auto mt-md-3 mb-md-3" />
                                                <i className="fas fa-arrow-circle-right" />
                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <div className="card align-items-center">
                                                <h3>Anh Đức</h3>
                                                <p className="text-uppercase">Giám đốc</p>
                                                <p><strong>Phone: </strong> +353 1 237 6411<br /><strong>Mobil: </strong> +84 87 255 6677<br /><strong>Email: </strong> leanhduc1510@gmail.com</p>
                                                <div className="border-top border-danger w-25 mx-auto mt-md-3 mb-md-3" />
                                                <p className="lead">Anh Đức là thành viên của nhóm Red Coral từ năm 2011. Từng là giám đốc của The Group, anh ấy đã rời đi vào năm 2018 để mở văn phòng nhượng quyền ở Tây Dublin.</p>
                                                <p className="lead">Anh ấy trở lại nhóm chính vào tháng 2 năm 2020 với tư cách là giám đốc trong nhóm định giá.</p>
                                                <div className="d-flex flex-row justify-content-center">
                                                    <div className="p-4">
                                                        <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook" aria-hidden="true" />
                                                            <span className="sr-only">Facebook</span>
                                                        </a>
                                                    </div>
                                                    <div className="p-4">
                                                        <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" aria-hidden="true" />
                                                            <span className="sr-only">Instagram</span>
                                                        </a>
                                                    </div>
                                                    <div className="p-4">
                                                        <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" aria-hidden="true" />
                                                            <span className="sr-only">Twitter</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
                                <div className="card-wrapper">
                                    <div className="card-body">
                                        <div className="card-front">
                                            <div className="card align-items-center">
                                                <img src={pic02} className="img-fluid rounded-circle w-50 mb-3" alt="Fiona Grant" />
                                                <h2>Thảo Vân</h2>
                                                <h3>Trưởng phòng định giá thương mại</h3>
                                                <h4>Bất động sản</h4>
                                                <p><strong>Phone: </strong> +8451 237 6422<br /><strong>Email: </strong> thaovan@gmail,com</p>
                                                <div className="border-top border-danger w-25 mx-auto mt-md-3 mb-md-3" />
                                                <i className="fas fa-arrow-circle-right" />
                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <div className="card">
                                                <h3>Thảo Vân</h3>
                                                <p className="text-uppercase"> Trưởng phòng định giá thương mại</p>
                                                <p><strong>Phone: </strong> +353 1 237 6422<br /><strong>Mobil: </strong> +845 86 236 8739<br /><strong>Email: </strong> thaovan@gmail.com</p>
                                                <div className="border-top border-danger w-25 mx-auto mt-md-3 mb-md-3" />
                                                <p className="lead">Thảo Vân có nhiều kinh nghiệm trong thị trường bất động sản thương mại và đã gia nhập Red Coral vào tháng 1 năm 2021 với tư cách là Trưởng bộ phận Định giá Thương mại. Kinh nghiệm, mối quan hệ của cô ấy
                                                    kỹ năng phát triển và sự cống hiến để đảm bảo dịch vụ tốt nhất trong lớp đã dẫn đến một danh sách khách hàng đặc biệt.</p>
                                                <div className="d-flex flex-row justify-content-center">
                                                    <div className="p-4">
                                                        <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook" aria-hidden="true" />
                                                            <span className="sr-only">Facebook</span>
                                                        </a>
                                                    </div>
                                                    <div className="p-4">
                                                        <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" aria-hidden="true" />
                                                            <span className="sr-only">Instagram</span>
                                                        </a>
                                                    </div>
                                                    <div className="p-4">
                                                        <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" aria-hidden="true" />
                                                            <span className="sr-only">Twitter</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-2 mb-md-5 mt-md-0">
                                <div className="card-wrapper">
                                    <div className="card-body">
                                        <div className="card-front">
                                            <div className="card align-items-center">
                                                <img src={pic03} className="img-fluid rounded-circle w-50 mb-3" alt="David Cowhey" />
                                                <h2>Hữu Hào </h2>
                                                <h3>Giám đốc</h3>
                                                <h4>Bất động sản</h4>
                                                <p><strong>Phone: </strong> +353 1 237 6433<br /><strong>Email: </strong> huuhao@redcoral.ie</p>
                                                <div className="border-top border-danger w-25 mx-auto mt-md-3 mb-md-3" />
                                                <i className="fas fa-arrow-circle-right" />
                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <div className="card">
                                                <h3>Hữu Hào</h3>
                                                <p className="text-uppercase">Portfolio Team Manager</p>
                                                <p><strong>Phone: </strong> +8451 237 6433<br /><strong>Mobil: </strong> +353 85 219 8429<br /><strong>Email: </strong> huuhao@redcoral.ie</p>
                                                <div className="border-top border-danger w-25 mx-auto mt-md-3 mb-md-3" />
                                                <p className="lead">Hữu Hào hiện đang điều hành các dự án định giá lớn với một số tập đoàn, với danh mục đầu tư khối lượng lớn bất động sản nhà ở.</p>
                                                <p className="lead">Hữu Hào gia nhập San Hô Đỏ vào năm 2017 và đã kết hợp kiến thức pháp lý của mình với nền tảng bất động sản nhà ở của mình.</p>
                                                <div className="d-flex flex-row justify-content-center">
                                                    <div className="p-4">
                                                        <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook" aria-hidden="true" />
                                                            <span className="sr-only">Facebook</span>
                                                        </a>
                                                    </div>
                                                    <div className="p-4">
                                                        <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" aria-hidden="true" />
                                                            <span className="sr-only">Instagram</span>
                                                        </a>
                                                    </div>
                                                    <div className="p-4">
                                                        <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" aria-hidden="true" />
                                                            <span className="sr-only">Twitter</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-5 mt-md-0 mb-4 mt-lg-5 pt-lg-5">
                                <div className="card-wrapper">
                                    <div className="card-body">
                                        <div className="card-front">
                                            <div className="card align-items-center">
                                                <img src={pic04} className="img-fluid rounded-circle w-50 mb-3" alt="Clare O'Grady" />
                                                <h2>Thảo Băng </h2>
                                                <h3>Giám đốc</h3>
                                                <h4>Bất động sản</h4>
                                                <p><strong>Phone: </strong> +845 1 237 6444<br /><strong>Email: </strong> thaobang@redcoral.ie</p>
                                                <div className="border-top border-danger w-25 mx-auto mt-md-3 mb-md-3" />
                                                <i className="fas fa-arrow-circle-right" />
                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <div className="card">
                                                <h3>Thảo Băng</h3>
                                                <p className="text-uppercase">Giám đốc</p>
                                                <p><strong>Phone: </strong> +845 1 237 6444<br /><strong>Mobil: </strong> +845 87 987 1234<br /><strong>Email: </strong> ThaoBang@redcoral.ie</p>
                                                <div className="border-top border-danger w-25 mx-auto mt-md-3 mb-md-3" />
                                                <p className="lead">Thảo Băng gia nhập Red Coral vào năm 2004 và đã kết hợp kiến thức nền tảng về ngân hàng với kiến thức sâu rộng về bất động sản của mình. Clare đã mang theo nhiều kinh nghiệm trong việc quản lý khách hàng từ vai trò trước đây của cô ấy với Goodbody Stockbrokers với tư cách là một tư nhân.
                                                    người quản lý danh mục đầu tư của khách hàng và sở hữu mức độ chính trực, tính linh hoạt cao và kỹ năng giao tiếp giữa các cá nhân xuất sắc.</p>
                                                <div className="d-flex flex-row justify-content-center">
                                                    <div className="p-4">
                                                        <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook" aria-hidden="true" />
                                                            <span className="sr-only">Facebook</span>
                                                        </a>
                                                    </div>
                                                    <div className="p-4">
                                                        <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" aria-hidden="true" />
                                                            <span className="sr-only">Instagram</span>
                                                        </a>
                                                    </div>
                                                    <div className="p-4">
                                                        <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" aria-hidden="true" />
                                                            <span className="sr-only">Twitter</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-5 mb-4 mt-md-0 mt-lg-5 pt-lg-5">
                                <div className="card-wrapper">
                                    <div className="card-body">
                                        <div className="card-front">
                                            <div className="card align-items-center">
                                                <img src={pic05} className="img-fluid rounded-circle w-50 mb-3" alt="Michéal O'Looney" />
                                                <h2>Xuân Mạnh</h2>
                                                <h3>Người định giá nhà ở</h3>
                                                <h4>Bất động sản</h4>
                                                <p><strong>Phone: </strong> +845 1 237 6455<br /><strong>Email: </strong> xuanmanh@redcoral.ie</p>
                                                <div className="border-top border-danger w-25 mx-auto mt-md-3 mb-md-3" />
                                                <i className="fas fa-arrow-circle-right" />
                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <div className="card">
                                                <h3>Xuân Mạnh</h3>
                                                <p className="text-uppercase">Người định giá nhà ở</p>
                                                <p><strong>Phone: </strong> +845 1 237 6455<br /><strong>Mobil: </strong>+845 83 567 4532<br /><strong>Email: </strong> xuanmanh@redcoral.ie</p>
                                                <div className="border-top border-danger w-25 mx-auto mt-md-3 mb-md-3" />
                                                <p className="lead">Xuân Mạnh tốt nghiệp Học viện Công nghệ Limerick với Bằng Quản lý và Định giá Tài sản vào năm 2014. Anh gia nhập Red Coral vào tháng 7 năm 2015 và xây dựng một
                                                    danh tiếng là một người giao tiếp xuất sắc với kỹ năng bán hàng xuất sắc tại các chi nhánh Clonakilty &amp; Skibbereen của họ.</p>
                                                <div className="d-flex flex-row justify-content-center">
                                                    <div className="p-4">
                                                        <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook" aria-hidden="true" />
                                                            <span className="sr-only">Facebook</span>
                                                        </a>
                                                    </div>
                                                    <div className="p-4">
                                                        <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" aria-hidden="true" />
                                                            <span className="sr-only">Instagram</span>
                                                        </a>
                                                    </div>
                                                    <div className="p-4">
                                                        <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" aria-hidden="true" />
                                                            <span className="sr-only">Twitter</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-5 mb-4 mt-md-0 mt-lg-5 pt-lg-5">
                                <div className="card-wrapper">
                                    <div className="card-body">
                                        <div className="card-front">
                                            <div className="card align-items-center">
                                                <img src={pic06} className="img-fluid rounded-circle w-50 mb-3" alt="Harriet Delany" />
                                                <h2>Hoàng Huy </h2>
                                                <h3>Người định giá nhà ở</h3>
                                                <h4>Bất động sản</h4>
                                                <p><strong>Phone: </strong> +845 1 237 6466<br /><strong>Email: </strong> hoanghuy@redcoral.ie</p>
                                                <div className="border-top border-danger w-25 mx-auto mt-md-3 mb-md-3" />
                                                <i className="fas fa-arrow-circle-right" />
                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <div className="card">
                                                <h3>Hoàng Huy</h3>
                                                <p className="text-uppercase">Người định giá nhà ở</p>
                                                <p><strong>Phone: </strong>+845 1 237 6466<br /><strong>Mobil: </strong> +845 86 645 7654<br /><strong>Email: </strong> hoanghuy@redcoral.ie</p>
                                                <div className="border-top border-danger w-25 mx-auto mt-md-3 mb-md-3" />
                                                <p className="lead">Anh ấy đã thành công trong việc lãnh đạo bộ phận cho đến năm 2018 khi cô ấy đảm nhận thử thách quản lý chi nhánh Savills Central Dublin phụ trách việc bán hàng tại Dublin 2, 4, 6, 6W, 14 và 16.</p>
                                                <p className="lead">Anh gia nhập nhóm Red Coral vào tháng 1 năm 2021 và cung cấp các định giá chính thức cho các tổ chức tài chính và người cho vay.</p>
                                                <div className="d-flex flex-row justify-content-center">
                                                    <div className="p-4">
                                                        <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook" aria-hidden="true" />
                                                            <span className="sr-only">Facebook</span>
                                                        </a>
                                                    </div>
                                                    <div className="p-4">
                                                        <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" aria-hidden="true" />
                                                            <span className="sr-only">Instagram</span>
                                                        </a>
                                                    </div>
                                                    <div className="p-4">
                                                        <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" aria-hidden="true" />
                                                            <span className="sr-only">Twitter</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <FooterSection />
            </div>
        );
    }
}
