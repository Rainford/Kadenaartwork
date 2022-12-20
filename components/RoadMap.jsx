import {useEffect} from 'react'

import img1 from '../assets/img/kadenaArtWork_images/Banana.png';
import img2 from '../assets/img/kadenaArtWork_images/Pineapple.png';
import img3 from '../assets/img/kadenaArtWork_images/Mangosteens.png';
import img4 from '../assets/img/kadenaArtWork_images/Coconut.png';
import img5 from '../assets/img/kadenaArtWork_images/Mango.png';
import img6 from '../assets/img/kadenaArtWork_images/Watermelon.png';
import img7 from '../assets/img/kadenaArtWork_images/Dragon-Fruits.png';

function RoadMap(){
    useEffect(() => {
        document.addEventListener('scroll', () => {
            const progressLine = document.querySelector('.progress-line');
            const progressOffset = document.querySelector('.roadmap').offsetTop;
            const scrollPosition = document.querySelector('html').scrollTop;
            const progressHeight = document.querySelector('.roadmap').clientHeight;

            if ((scrollPosition - progressOffset) > 0) {
                progressLine.style.height = `${scrollPosition - progressOffset}px`;
                if ((scrollPosition - progressOffset) > progressHeight) {
                    progressLine.style.height = "100%";
                }
            } else {
                progressLine.style.height = "0px";
            }
        });
    }, []);
    return (
        <div className="roadmap" id="road_map">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="section-title text-center">
                            <h2>Our Roadmap</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-10 roadmap-row">
                        <div className="progress-area">
                            <div className="progress-line"></div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-md-6">
                                <div className="roadmap-img-content">
                                    <div className="img">
                                        <img src={img1} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h4 className="mb-0 fw-semibold ">Q1 - 2022</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="roadmap-inner">
                                    <h4 className="fw-semibold">PHASE 1</h4>
                                    <p>Launch Twitter, Discord & Telegram <br /> Art Development <br /> Project Collabs </p>
                                </div>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-5">
                            <div className="col-md-6">
                                <div className="roadmap-img-content right">
                                    <div className="img">
                                        <img src={img2} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h4 className="mb-0 fw-semibold ">Q2 - 2022</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="roadmap-inner right">
                                    <h4 className="fw-semibold">PHASE 2</h4>
                                    <p>Launch Twitter, Discord & Telegram <br /> Art Development <br /> Project Collabs </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-md-6">
                                <div className="roadmap-img-content">
                                    <div className="img">
                                        <img src={img3} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h4 className="mb-0 fw-semibold ">Q3 - 2022</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="roadmap-inner">
                                    <h4 className="fw-semibold">PHASE 3</h4>
                                    <p>Launch Twitter, Discord & Telegram <br /> Art Development <br /> Project Collabs </p>
                                </div>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-5">
                            <div className="col-md-6">
                                <div className="roadmap-img-content right">
                                    <div className="img">
                                        <img src={img4} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h4 className="mb-0 fw-semibold ">Q4 - 2022</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="roadmap-inner right">
                                    <h4 className="fw-semibold">PHASE 4</h4>
                                    <p>Launch Twitter, Discord & Telegram <br /> Art Development <br /> Project Collabs </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-md-6">
                                <div className="roadmap-img-content">
                                    <div className="img">
                                        <img src={img5} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h4 className="mb-0 fw-semibold ">Q5 - 2022</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="roadmap-inner">
                                    <h4 className="fw-semibold">PHASE 5</h4>
                                    <p>Launch Twitter, Discord & Telegram <br /> Art Development <br /> Project Collabs </p>
                                </div>
                            </div>
                        </div>
                        <div className="row flex-row-reverse mb-5">
                            <div className="col-md-6">
                                <div className="roadmap-img-content right">
                                    <div className="img">
                                        <img src={img6} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h4 className="mb-0 fw-semibold ">Q6 - 2022</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="roadmap-inner right">
                                    <h4 className="fw-semibold">PHASE 6</h4>
                                    <p>Launch Twitter, Discord & Telegram <br /> Art Development <br /> Project Collabs </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-md-6">
                                <div className="roadmap-img-content">
                                    <div className="img">
                                        <img src={img7} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h4 className="mb-0 fw-semibold ">Q7 - 2022</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="roadmap-inner">
                                    <h4 className="fw-semibold">PHASE 7</h4>
                                    <p>Launch Twitter, Discord & Telegram <br /> Art Development <br /> Project Collabs </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoadMap