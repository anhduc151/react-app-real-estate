import Footer from "../../../Footer";
import Header from "../../../Header";
import Navbar from "../../../Navbar";



const Query = () => {
    return (
        <>
            <Navbar />
            <div class="container-fluid">
                <div class="row-fluid">
                    <Header />
                    <div className="span9">
                        <div className="row-fluid">
                            <div className="page-header">
                                <h1>Quản lý người dùng <small>Chi tiết yêu cầu của người dùng</small>
                                    <button className="btn pull-right" onclick="javascript :history.back(-1);">trở lại</button>
                                </h1>
                            </div>
                            <table className="table table-striped table-bordered table-condensed">
                                <thead>
                                    <tr>
                                        <th>Tài khoản</th>
                                        <th>Họ và tên</th>
                                        <th>Dự án</th>
                                        <th>Tình trạng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="list-user-detail">
                                        <td>10001</td>
                                        <td>Nguyễn Ngọc Lam</td>
                                        <td>Dự án phía Bắc</td>
                                        <td>Đã bán</td>
                                    </tr>
                                    <tr className="list-user-detail">
                                        <td>10002</td>
                                        <td>Lê Anh Đức</td>
                                        <td>Dự án phía Bắc</td>
                                        <td>Đã bán</td>
                                    </tr>
                                    <tr className="list-user-detail">
                                        <td>10003</td>
                                        <td>Nguyễn Hữu Hào</td>
                                        <td>Dự án phía Bắc</td>
                                        <td>Đã bán</td>
                                    </tr>
                                    <tr className="list-user-detail">
                                        <td>10004</td>
                                        <td>Nguyễn Thảo Vân</td>
                                        <td>Dự án phía Bắc</td>
                                        <td>Đã bán</td>
                                    </tr>
                                    <tr className="list-user-detail">
                                        <td>10005</td>
                                        <td>Hoàng Quốc Huy</td>
                                        <td>Dự án phía Bắc</td>
                                        <td>Đã bán</td>
                                    </tr>
                                </tbody>
                            </table>
                            <hr />
                            <table className="table table-striped table-bordered table-condensed">
                                <thead>
                                    <tr>
                                        <th>số seri</th>
                                        <th>Dự án đã mua</th>
                                        <th>Thời gian mua</th>
                                        <th>Thời gian ký hợp đồng</th>
                                        <th>Tình trạng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="list-user-book-detail">
                                        <td>1</td>
                                        <td>Masteri Waterfront</td>
                                        <td>2022-5-20 14:00</td>
                                        <td>2022-5-20 14:00</td>
                                        <td>Chưa hết hạn</td>
                                    </tr>
                                    <tr className="list-user-book-detail">
                                        <td>1</td>
                                        <td>Khu chung cư cao cấp An Thịnh Phát</td>
                                        <td>2022-5-20 14:00</td>
                                        <td>2022-5-20 14:00</td>
                                        <td>Chưa hết hạn</td>
                                    </tr>
                                    <tr className="list-user-book-detail">
                                        <td>1</td>
                                        <td>Masteri Waterfront</td>
                                        <td>2022-5-20 14:00</td>
                                        <td>2022-5-20 14:00</td>
                                        <td>Chưa hết hạn</td>
                                    </tr>
                                    <tr className="list-user-book-detail">
                                        <td>1</td>
                                        <td>Land City</td>
                                        <td>2022-5-20 14:00</td>
                                        <td>2022-5-20 14:00</td>
                                        <td>Chưa hết hạn</td>
                                    </tr>
                                    <tr className="list-user-book-detail">
                                        <td>1</td>
                                        <td>The Crown - Vinhomes Ocean Park</td>
                                        <td>2022-5-20 14:00</td>
                                        <td>2022-5-20 14:00</td>
                                        <td>Chưa hết hạn</td>
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

export default Query;