

const Navbar = () => {
    return (
        <div className="navbar navbar-fixed-top">
            <div className="navbar-inner">
                <div className="container-fluid">
                    <a href="/#" className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </a>
                    <a className="brand" href="/#">BatDongSan.com</a>
                    <div className="btn-group pull-right">
                        <a className="btn" href="/#"><i className="bx bxs-user-circle" /> Admin</a>
                        <a className="btn dropdown-toggle" data-toggle="dropdown" href="/#">
                            <span className="caret" />
                        </a>
                        <ul className="dropdown-menu">
                            <li><a href="/#">Thông tin cá nhân</a></li>
                            <li className="divider"/>
                            <li><a href="/#">Đăng xuất</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Navbar;