import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";
import '../AdminManager/admin.css'

const AdminManager = () => {
    return (
        <>
            <Navbar />
            <div class="container-fluid">
                <div class="row-fluid">
                    <Header />
                    <div className="span9">
                        <div className="row-fluid">
                            <div className="span3">
                                <h3>Tổng số sản phẩm</h3>
                                <p><a href="#" className="badge badge-inverse">500</a></p>
                            </div>
                            <div className="span3">
                                <h3>Mua hôm nay</h3>
                                <p><a href="#" className="badge badge-inverse">8</a></p>
                            </div>
                            <div className="span3">
                                <h3>Thông tin đang chờ xử lý</h3>
                                <p><a href="#" className="badge badge-inverse">2</a></p>
                            </div>
                            <div className="span3">
                                <h3>Tổng số người dùng</h3>
                                <p><a href="#" className="badge badge-inverse">100</a></p>
                            </div>
                        </div>
                        <br />
                        <div className="row-fluid">
                            <div className="page-header">
                                <h1>Thống kê dự án đã bán</h1>
                            </div>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>số thứ tự</th>
                                        <th>Tài khoản</th>
                                        <th>Tên</th>
                                        <th>Dự án</th>
                                        <th>Thời gian đóng cọc</th>
                                        <th>Thời gian mua</th>
                                        <th>Giá</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="latest-borrowing">
                                        <td>1</td>
                                        <td>anhduc151</td>
                                        <td>Lê Anh Đức</td>
                                        <td>Dự án phía Nam</td>
                                        <td>2022-12-27 10:00</td>
                                        <td>2023-1-15 10:00</td>
                                        <td>15.000.000.000 đ</td>
                                    </tr>
                                    <tr className="latest-borrowing">
                                        <td>2</td>
                                        <td>thaovan121</td>
                                        <td>Nguyễn Thảo Vân</td>
                                        <td>Dự án phía Bắc</td>
                                        <td>2022-12-27 10:00</td>
                                        <td>2023-1-15 10:00</td>
                                        <td>23.000.000.000 đ</td>
                                    </tr>
                                    <tr className="latest-borrowing">
                                        <td>3</td>
                                        <td>huuhao562</td>
                                        <td>Nguyễn Hữu Hào</td>
                                        <td>Dự án phía Nam</td>
                                        <td>2022-12-27 10:00</td>
                                        <td>2023-1-15 10:00</td>
                                        <td>22.000.000.000 đ</td>
                                    </tr>
                                    <tr className="latest-borrowing">
                                        <td>4</td>
                                        <td>xuanhmanh662</td>
                                        <td>Võ Xuân Mạnh</td>
                                        <td>Dự án phía Bắc</td>
                                        <td>2022-12-27 10:00</td>
                                        <td>2023-1-15 10:00</td>
                                        <td>21.000.000.000 đ</td>
                                    </tr>
                                    <tr className="latest-borrowing">
                                        <td>5</td>
                                        <td>hoanghuy672</td>
                                        <td>Hoàng Quốc Huy</td>
                                        <td>Dự án phía Nam</td>
                                        <td>2022-12-27 10:00</td>
                                        <td>2023-1-15 10:00</td>
                                        <td>16.000.000.000 đ</td>
                                    </tr>
                                    <tr className="latest-borrowing">
                                        <td>6</td>
                                        <td>tonhu1212</td>
                                        <td>Lê Tố Như</td>
                                        <td>Dự án phía Nam</td>
                                        <td>2022-12-27 10:00</td>
                                        <td>2023-1-15 10:00</td>
                                        <td>40.000.000.000 đ</td>
                                    </tr>
                                    <tr className="latest-borrowing">
                                        <td>7</td>
                                        <td>xuanhmanh662</td>
                                        <td>Võ Xuân Mạnh</td>
                                        <td>Dự án phía Bắc</td>
                                        <td>2022-12-27 10:00</td>
                                        <td>2023-1-15 10:00</td>
                                        <td>21.000.000.000 đ</td>
                                    </tr>
                                    <tr className="latest-borrowing">
                                        <td>8</td>
                                        <td>anhduc151</td>
                                        <td>Lê Anh Đức</td>
                                        <td>Dự án phía Nam</td>
                                        <td>2022-12-27 10:00</td>
                                        <td>2023-1-15 10:00</td>
                                        <td>15.000.000.000 đ</td>
                                    </tr>
                                    <tr className="latest-borrowing">
                                        <td>9</td>
                                        <td>anhduc151</td>
                                        <td>Lê Anh Đức</td>
                                        <td>Dự án phía Nam</td>
                                        <td>2022-12-27 10:00</td>
                                        <td>2023-1-15 10:00</td>
                                        <td>15.000.000.000 đ</td>
                                    </tr>
                                    <tr className="latest-borrowing">
                                        <td>10</td>
                                        <td>thaovan121</td>
                                        <td>Nguyễn Thảo Vân</td>
                                        <td>Dự án phía Bắc</td>
                                        <td>2022-12-27 10:00</td>
                                        <td>2023-1-15 10:00</td>
                                        <td>23.000.000.000 đ</td>
                                    </tr>
                                    <tr className="latest-borrowing">
                                        <td>11</td>
                                        <td>thaovan121</td>
                                        <td>Nguyễn Thảo Vân</td>
                                        <td>Dự án phía Bắc</td>
                                        <td>2022-12-27 10:00</td>
                                        <td>2023-1-15 10:00</td>
                                        <td>23.000.000.000 đ</td>
                                    </tr>
                                    <tr className="latest-borrowing">
                                        <td>12</td>
                                        <td>huuhao562</td>
                                        <td>Nguyễn Hữu Hào</td>
                                        <td>Dự án phía Nam</td>
                                        <td>2022-12-27 10:00</td>
                                        <td>2023-1-15 10:00</td>
                                        <td>22.000.000.000 đ</td>
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

export default AdminManager;