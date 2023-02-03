import React, { Component } from 'react'
import '../Search/Search.css'

export default class index extends Component {
    render() {
        return (
            <div>
                <div className="navbar__search">
                    <div className="navbar__search-inputs">
                        <input type="text" placeholder="Tìm kiếm dự án..." />
                        <div className="navbar__search-btn">
                            <i className="fa-solid fa-magnifying-glass" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
