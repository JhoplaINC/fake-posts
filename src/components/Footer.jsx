import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
    return (
        <footer>
            <div className="footer-left-side">
                <p className="footer-title">Web designed and developed by: <b>Jhopla</b></p>
                <div className="rrss-section">
                    <FontAwesomeIcon icon={faGithub} />
                    <a href="https://www.github.com/jhoplainc" target="_blank">
                        My github profile
                    </a>
                </div>
            </div>
            <div className="footer-right-side">
                <p className="footer-title">You can <b>contact me</b> through</p>
                <div className="rrss-section">
                    <div className="rrss-container">
                        <FontAwesomeIcon icon={faAt} />
                        <a href='mailto:jorge.plaza.gj@gmail.com' target="_blank">
                            jorge.plaza.gj@gmail.com
                        </a>
                    </div>
                    <div className="rrss-container">
                        <FontAwesomeIcon icon={faPhone} />
                        <a href='tel:+56983069105' target="_blank">
                            +56 9 8306 9105
                        </a>
                    </div>
                    <div className="rrss-container">
                        <FontAwesomeIcon icon={faLinkedin} />
                        <a href="https://www.linkedin.com/in/jhoplainc" target="_blank">
                            Linkedin
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
