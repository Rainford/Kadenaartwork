// import img from '../assets/img/kadenaArtWork_images/Standing-View.png'

import { Link } from "react-router-dom"

function Mlnt() {
    return (
        <div className="mlnt" id="mlnt">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5">
                        <div className="mlnt-content">
                            <h3>MINT IT</h3>
                            <p className="text-white">You can mint max 5 NFTs</p>
                            <a href="https://mint.kadenaartwork.com" className="btn">MINT Now</a>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="mlnt-img">
                            {/* <img src={img} alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mlnt