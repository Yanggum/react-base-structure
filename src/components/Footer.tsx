import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <p>Copyright &copy; {new Date().getFullYear()}
                    <a href="https://example.com">Example Inc.</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
