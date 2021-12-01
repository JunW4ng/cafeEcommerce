import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcMastercard, faCcVisa, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'


export const Footer = () => {

    return (
        <>
            <footer>
                <div className="footer container-fluid text-center">
                    <div className="d-flex justify-content-center">
                        <div className="connect">
                            <p className="followFooter fs-4">Connect with us!</p>
                            <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} className="socialIcon" /></a>
                            <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} className="socialIcon" /></a>
                            <a href="https://www.twitter.com/"><FontAwesomeIcon icon={faTwitter} className="socialIcon" /></a>
                        </div>
                        <div className="contact">
                            <p className="followFooter fs-4">Contact us</p>
                            <ul className="text-start">
                                <li className=" ">Phone: +123 3456789</li>
                                <li className=" ">Email: email@email.com</li>
                            </ul>
                        </div>
                    </div>
                    <hr></hr>
                    <p className="fs-1 fw-bold mt-4">J | W </p>
                    <div>
                        <FontAwesomeIcon icon={faCcMastercard} className="socialIcon" />
                        <FontAwesomeIcon icon={faCcVisa} className="socialIcon" />
                    </div>
                </div>
                <div className="miniBar bg-dark text-white">
                    <p>© 2021, J|W Coffee Roasters : Speciality Coffee, All Rights Reserved.</p>
                </div>
            </footer>
        </>
    )
}