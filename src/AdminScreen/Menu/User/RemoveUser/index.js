import Footer from "../../../Footer";
import Header from "../../../Header";
import Navbar from "../../../Navbar";



const RemoveUser = () => {
    return (
        <>
            <Navbar />
            <div class="container-fluid">
                <div class="row-fluid">
                    <Header />
                    <div className="span9">
                        <div className="row-fluid">
                            <div className="page-header">
                                <h1>Quản lý người dùng <br></br> <small>Xoá tài khoản người dùng</small></h1>
                            </div>
                            <table className="table table-striped table-bordered table-condensed">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>Tài khoản</th>
                                        <th>Tên đăng nhập</th>
                                        <th>Mật khẩu</th>
                                        <th>Vị trí</th>
                                        <th>Thời gian thêm</th>
                                        <th>Trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="douban-list">
                                        <td>100001</td>
                                        <td>anhduc151</td>
                                        <td>anhduc1510</td>
                                        <td>123@#$</td>
                                        <td>Người quản lý</td>
                                        <td>2022-8-19 12:00</td>
                                        <td><button className="remove">Xoá</button></td>
                                    </tr> 

                                    <tr className="douban-list">
                                        <td>100002</td>
                                        <td>anhduc151</td>
                                        <td>anhduc1510</td>
                                        <td>123@#$</td>
                                        <td>Người quản lý</td>
                                        <td>2022-8-19 12:00</td>
                                        <td><button className="remove">Xoá</button></td>
                                    </tr>
                                    <tr className="douban-list">
                                        <td>100003</td>
                                        <td>anhduc151</td>
                                        <td>anhduc1510</td>
                                        <td>123@#$</td>
                                        <td>Người quản lý</td>
                                        <td>2022-8-19 12:00</td>
                                        <td><button className="remove">Xoá</button></td>
                                    </tr>
                                    <tr className="douban-list">
                                        <td>100004</td>
                                        <td>anhduc151</td>
                                        <td>anhduc1510</td>
                                        <td>123@#$</td>
                                        <td>Người quản lý</td>
                                        <td>2022-8-19 12:00</td>
                                        <td><button className="remove">Xoá</button></td>
                                    </tr>
                                    <tr className="douban-list">
                                        <td>100005</td>
                                        <td>anhduc151</td>
                                        <td>anhduc1510</td>
                                        <td>123@#$</td>
                                        <td>Người quản lý</td>
                                        <td>2022-8-19 12:00</td>
                                        <td><button className="remove">Xoá</button></td>
                                    </tr>
                                    <tr className="douban-list">
                                        <td>100006</td>
                                        <td>anhduc151</td>
                                        <td>anhduc1510</td>
                                        <td>123@#$</td>
                                        <td>Người quản lý</td>
                                        <td>2022-8-19 12:00</td>
                                        <td><button className="remove">Xoá</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    );
}

export default RemoveUser;