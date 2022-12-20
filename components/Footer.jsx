import SocialLinks from './SocialLinks'
import Logo from '../assets/img/logo.png'
function Footer(){
    return (
        <footer className="footer ">
            <div className="container ">
                <div className="row align-items-center ">
                    <div className="col-md-4 text-center text-md-start">
                        <p className="text-white ">@2022 NFT Landing Page</p>
                    </div>
                    <div className="col-md-4 text-center ">
                        <div className="footer-logo ">
                            <img src={Logo} alt=" " />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer