import Footer from "../../Footer";
import Header from "../../Header";
import Navbar from "../../Navbar";



const Help = () => {
    return (
        <>
            <Navbar />
            <div class="container-fluid">
                <div class="row-fluid">
                    <Header />
                    <div className="span9">
                        <div className="row-fluid">
                            <div className="page-header">
                                <h1>Quản lý yêu cầu của khách hàng<small /></h1>
                            </div>
                            <table className="table table-striped table-bordered table-condensed">
                                <thead>
                                    <tr>
                                        <th>Tài khoản</th>
                                        <th>Khách hàng đánh giá</th>
                                        <th>Phản hồi của khách hàng</th>
                                        <th>Thời gian đăng</th>
                                        <th>Tuỳ chọn</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="douban-list">
                                        <td>anhduc151</td>
                                        <td><i className="bx bxs-star star" /><i className="bx bxs-star star" /><i className="bx bxs-star star" /><i className="bx bxs-star star" /><i className="bx bxs-star star" /></td>
                                        <td>Không có yêu cầu gì, web sử dụng rất dễ dàng và tiện lợi</td>
                                        <td>2022-8-19 12:00</td>
                                        <td><button className="rep"><i className="bx bxs-message" /> Phản hồi</button> <button className="exit"><i className="bx bxs-x-circle" /> Bỏ qua</button></td>
                                    </tr>
                                    <tr className="douban-list">
                                        <td>thaovan1123</td>
                                        <td><i className="bx bxs-star star" /><i className="bx bxs-star star" /><i className="bx bxs-star star" /><i className="bx bxs-star star" /></td>
                                        <td>Web sử dụng rất tốt nhưng hiển thị dự án vẫn chưa được chi tiết lắm</td>
                                        <td>2022-8-19 12:00</td>
                                        <td><button className="rep"><i className="bx bxs-message" /> Phản hồi</button> <button className="exit"><i className="bx bxs-x-circle" /> Bỏ qua</button></td>
                                    </tr>
                                    <tr className="douban-list">
                                        <td>xuanmanh1162</td>
                                        <td><i className="bx bxs-star star" /><i className="bx bxs-star star" /><i className="bx bxs-star star" /><i className="bx bxs-star star" /><i className="bx bxs-star star" /></td>
                                        <td>Web load nhanh, thao tác dễ dàng, tiện lợi. cho 5 sao nha </td>
                                        <td>2022-8-19 12:00</td>
                                        <td><button className="rep"><i className="bx bxs-message" /> Phản hồi</button> <button className="exit"><i className="bx bxs-x-circle" /> Bỏ qua</button></td>
                                    </tr>
                                    <tr className="douban-list">
                                        <td>hoanghuy6615</td>
                                        <td><i className="bx bxs-star star" /><i className="bx bxs-star star" /><i className="bx bxs-star star" /><i className="bx bxs-star star" /><i className="bx bxs-star star" /></td>
                                        <td>Các dự án mà tôi cần đàu tư đều có ở đây, tôi rất hài lòng về trang web của các bạn</td>
                                        <td>2022-8-19 12:00</td>
                                        <td><button className="rep"><i className="bx bxs-message" /> Phản hồi</button> <button className="exit"><i className="bx bxs-x-circle" /> Bỏ qua</button></td>
                                    </tr>
                                    <tr className="douban-list">
                                        <td>huuhao661</td>
                                        <td><i className="bx bxs-star star" /><i className="bx bxs-star star" /><i className="bx bxs-star star" /><i className="bx bxs-star star" /><i className="bx bxs-star star" /></td>
                                        <td>Hơn cả mong đợi, tôi đã mua 2 dự án ở đây và sắp tới có thể là nhiều hơn nửa</td>
                                        <td>2022-8-19 12:00</td>
                                        <td><button className="rep"><i className="bx bxs-message" /> Phản hồi</button> <button className="exit"><i className="bx bxs-x-circle" /> Bỏ qua</button></td>
                                    </tr>
                                    <tr className="douban-list">
                                        <td>toan66112</td>
                                        <td><i className="bx bxs-star star" /><i className="bx bxs-star star" /><i className="bx bxs-star star" /><i className="bx bxs-star star" /><i className="bx bxs-star star" /></td>
                                        <td>Tôi thấy các dự án ở trang web của các bạn rất tốt, tôi rất hài lòng về dịch vụ của các bạn</td>
                                        <td>2022-8-19 12:00</td>
                                        <td><button className="rep"><i className="bx bxs-message" /> Phản hồi</button> <button className="exit"><i className="bx bxs-x-circle" /> Bỏ qua</button></td>
                                    </tr>
                                    <tr className="douban-list">
                                        <td>duc151</td>
                                        <td><i className="bx bxs-star star" /><i className="bx bxs-star star" /><i className="bx bxs-star star" /><i className="bx bxs-star star" /><i className="bx bxs-star star" /></td>
                                        <td>Tôi thấy các dự án ở trang web của các bạn rất tốt, tôi rất hài lòng về dịch vụ của các bạn</td>
                                        <td>2022-8-19 12:00</td>
                                        <td><button className="rep"><i className="bx bxs-message" /> Phản hồi</button> <button className="exit"><i className="bx bxs-x-circle" /> Bỏ qua</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Help;