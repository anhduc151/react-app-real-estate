import React, { Component } from 'react'
import '../ColumnSection/ColumnSection.css'
import advice01 from '../../assets/img/index/advice01.jpg'
import mortgages01 from '../../assets/img/index/mortgages01.jpg'
import research01 from '../../assets/img/index/research01.jpg'
import { Link } from 'react-router-dom'

export default class index extends Component {
    render() {
        return (
            <div className="container p-0 pt-lg-5">
                
                <div className="row what-we-do text-center mt-5">
                    <div className="col-md-12 col-lg-4">
                        <Link to="/advice">
                            <img src={advice01} className="img-fluid pt-3" alt="women in business" />
                            <h3 className="my-4 text-center">TƯ VẤN CHO NGƯỜI MUA</h3>
                            <div className="border-top border-danger w-25 mx-auto mt-md-3 mb-3" />
                            <p>Mua tài sản là một quá trình phức tạp. Với hơn 30 năm kinh nghiệm làm việc với người mua tất cả
                                trên khắp Ireland, chúng tôi đã nghiên cứu và phát triển tuyển tập các hướng dẫn và tài nguyên hữu ích để cung cấp
                                bạn với cái nhìn sâu sắc bạn cần.
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <Link to="/advise">
                            <img src={mortgages01} className="img-fluid pt-3" alt="mortgages" />
                            <h3 className="my-4 text-center">THẾ CHẤP</h3>
                            <div className="border-top border-danger w-25 mx-auto mt-md-3 mb-3" />
                            <p>Từ việc sẵn sàng thế chấp đến chuẩn bị và nộp đơn đăng ký đầy đủ của bạn, bộ phận Thế chấp của chúng tôi
                                có cái nhìn sâu sắc và kiến thức chuyên môn cần thiết để giúp đảm bảo cho bạn kết quả tốt nhất có thể.
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <Link to="/reSearch">
                            <img src={research01} className="img-fluid pt-3" alt="monitor screen" />
                            <h3 className="my-4 text-center">TÌM KIẾM</h3>
                            <div className="border-top border-danger w-25 mx-auto mt-md-3 mb-3" />
                            <p>Áp dụng các phương pháp nghiên cứu chuyên sâu, chúng tôi thường xuyên đăng tải các thông tin cập nhật, xu hướng, dự báo thị trường
                                và nhiều hơn nữa giúp bạn đưa ra các quyết định về tài sản sáng suốt được hỗ trợ bởi các thông tin và dữ kiện xác thực.
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
