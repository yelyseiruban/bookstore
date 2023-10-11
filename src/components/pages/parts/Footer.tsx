import React from "react";
import "./Footer.css"

function Footer(){
    return(
        <nav className="footer">
            <div className="footer-column">
                <h2>Social Medias</h2>
                <ul className="column-content">
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>YouTube</li>
                </ul>
            </div>
            <div className="footer-column">
                <h2>Some Text</h2>
                <p className="column-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo nec odio convallis
                    tristique.</p>
            </div>
            <div className="footer-column">
                <h2>Address</h2>
                <address className="column-content">
                    123 Example Street <br/>
                    City, State, ZIP <br/>
                    Email: example@example.com <br/>
                    Phone: (123) 456-7890
                </address>
            </div>
        </nav>
    )
}

export default Footer