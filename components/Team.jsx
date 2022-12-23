import img1 from '../assets/img/team/02.gif'
import img2 from '../assets/img/team/01.gif'
import img3 from '../assets/img/team/rl.gif'
import img4 from '../assets/img/team/parvez.gif'

function Team(){
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
                    <div className="col-xl-3 col-lg-4 col-md-6 ">
                        <div className="team-item ">
                            <div className="team-item-img mx-auto ">
                                <div className="bg-gray mx-auto "><img src={img2} alt=" "/></div>
                            </div>
                            <div className="team-item-content ">
                                <h4>Hayat</h4>
                                <p className="fw-bold ">Community Lead</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 ">
                        <div className="team-item ">
                            <div className="team-item-img mx-auto ">
                                <div className="bg-navigreen mx-auto "><img src={img3} alt=" "/></div>
                            </div>
                            <div className="team-item-content ">
                                <h4>Devi</h4>
                                <p className="fw-bold ">Artist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 ">
                        <div className="team-item ">
                            <div className="team-item-img mx-auto ">
                                <div className="bg-purple mx-auto "><img src={img4} alt=" "/></div>
                            </div>
                            <div className="team-item-content ">
                                <h4>RL</h4>
                                <p className="fw-bold ">Founder</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 ">
                        <div className="team-item ">
                            <div className="team-item-img mx-auto ">
                                <div className="bg-sky mx-auto "><img src={img1} alt=" "/></div>
                            </div>
                            <div className="team-item-content ">
                                <h4>Parvez</h4>
                                <p className="fw-bold ">Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team