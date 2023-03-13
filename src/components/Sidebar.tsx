import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
    return (
        <nav className="nav flex-column">
            <Link to="/" className="nav-link">
                홈
            </Link>
            <Link to="/write" className="nav-link">
                글쓰기
            </Link>
            <Link to="/list" className="nav-link" >
                목록
            </Link>
        </nav>
    );
};

export default Sidebar;
