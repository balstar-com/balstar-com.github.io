import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                {/*<li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>*/}
                {/*<li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>*/}
                {/*<li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>*/}
                <li><a href="https://github.com/purple52" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="https://www.linkedin.com/company/balstar" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; Balstar Limited. All rights reserved</li>
                <li className="website">Website template credit: <a href="https://html5up.net">HTML5 UP</a></li>
            </ul>
            <p className="company">Balstar Limited is registered as company no. 8550201 in England and Wales. Registered address: 10 Penland Road, Haywards Heath, West Sussex, RH16 1PW</p>
        </div>
    </footer>
)

export default Footer
