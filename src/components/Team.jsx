import devi from '../assets/img/team/devi.gif'
import hayat from '../assets/img/team/hayat.gif'
import rl from '../assets/img/team/rl.gif'
import parvez from '../assets/img/team/parvez.gif'
import Sterling from '../assets/img/team/Sterling.gif'


function Team() {
    return (
        <div className="team" id="team">
            <div className="container ">
                <div className="row justify-content-center ">
                    <div className="col-md-6 ">
                        <div className="section-title text-center ">
                            <h2>Our Team</h2>
                        </div>
                    </div>
                </div>
                <div className="row text-center -mt-40 ">
                    <div className="col-xl-2 col-lg-4 col-md-6 ">
                        <div className="team-item ">
                            <div className="team-item-img mx-auto ">
                                <div className="bg-gray mx-auto "> <a href="https://twitter.com/Hayat_8481" target="_blank"> <img src={hayat} alt=" "/> </a> </div>
                            </div>
                            <div className="team-item-content ">
                                <h4>Hayat</h4>
                                <p className="fw-bold ">Community Lead</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-12 col-md-12 ">
                        <div className="team-item ">
                            <div className="team-item-img mx-auto ">
                                <div className="bg-navigreen mx-auto "> <a href="https://twitter.com/devinamira" target="_blank"> <img src={devi} alt=" "/> </a> </div>
                            </div>
                            <div className="team-item-content ">
                                <h4>Devi</h4>
                                <p className="fw-bold ">Artist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-12 col-md-12 ">
                        <div className="team-item ">
                            <div className="team-item-img mx-auto ">
                                <div className="bg-sky mx-auto "> <a href="https://www.facebook.com/RainfordLennon/" target="_blank"> <img src={rl} alt=" "/> </a> </div>
                            </div>
                            <div className="team-item-content ">
                                <h4>RL</h4>
                                <p className="fw-bold ">Founder</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-12 col-md-12 ">
                        <div className="team-item ">
                            <div className="team-item-img mx-auto ">
                                <div className="bg-purple mx-auto "> <a href="https://dribbble.com/ParvezMasud17/about" target="_blank"> <img src={parvez} alt=" "/> </a> </div>
                            </div>
                            <div className="team-item-content ">
                                <h4>Parvez</h4>
                                <p className="fw-bold "> Web Developer</p>
                            </div>
                        </div>
                      </div>
                            <div className="col-xl-2 col-lg-12 col-md-12 ">
                        <div className="team-item ">
                            <div className="team-item-img mx-auto ">
                                <div className="bg-purple mx-auto "> <a href="https://twitter.com/LuzzoticaLong" target="_blank"> <img src={Sterling} alt=" "/> </a> </div>
                            </div>
                            <div className="team-item-content ">
                                <h4>Sterling</h4>
                                <p className="fw-bold "> Pact Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
