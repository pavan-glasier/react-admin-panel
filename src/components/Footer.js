import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
const Footer = () => {
    return (
        <>
            <footer className="main-footer">
                <div className="footer-left">
                    <Link to="/templateshub.net">Templateshub</Link>
                </div>
                <div className="footer-right">
                </div>
            </footer>
        </>
    )
}

export default Footer