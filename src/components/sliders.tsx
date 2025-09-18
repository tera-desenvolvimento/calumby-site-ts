import React from "react";

import acImg from "../img/stack/ac.svg";
import botconversaImg from "../img/stack/botconversa.svg";
import googleadsImg from "../img/stack/googgleads.svg";
import manyImg from "../img/stack/many.svg";
import metaImg from "../img/stack/meta.svg";
import n8nImg from "../img/stack/n8n.svg";
import umblerImg from "../img/stack/umbler.svg";
import unnichatImg from "../img/stack/unnichat.svg";

import card01 from "../img/cards/1.svg";
import card02 from "../img/cards/2.svg";
import card03 from "../img/cards/3.svg";
import card04 from "../img/cards/4.svg";
import card05 from "../img/cards/5.svg";

import "../style/sliders.css";

const Sliders = () => {
    return (
        <React.Fragment>
            <div className="habilities-container">
                <b>Minhas habilidades são focadas em:</b>

                <div className="habilities-slider">
                    <div className="slider">
                        <ul className="habilities-list slider-track">
                            <li className="habilities-item slide">
                                <img src={acImg} alt="" />
                            </li>
                            <li className="habilities-item slide">
                                <img src={botconversaImg} alt="" />
                            </li>
                            <li className="habilities-item slide">
                                <img src={googleadsImg} alt="" />
                            </li>
                            <li className="habilities-item slide">
                                <img src={manyImg} alt="" />
                            </li>
                            <li className="habilities-item slide">
                                <img src={metaImg} alt="" />
                            </li>
                            <li className="habilities-item slide">
                                <img src={n8nImg} alt="" />
                            </li>
                            <li className="habilities-item slide">
                                <img src={umblerImg} alt="" />
                            </li>
                            <li className="habilities-item slide">
                                <img src={unnichatImg} alt="" />
                            </li>
                        </ul>
                        <ul className="habilities-list slider-track">
                            <li className="habilities-item slide">
                                <img src={acImg} alt="" />
                            </li>
                            <li className="habilities-item slide">
                                <img src={botconversaImg} alt="" />
                            </li>
                            <li className="habilities-item slide">
                                <img src={googleadsImg} alt="" />
                            </li>
                            <li className="habilities-item slide">
                                <img src={manyImg} alt="" />
                            </li>
                            <li className="habilities-item slide">
                                <img src={metaImg} alt="" />
                            </li>
                            <li className="habilities-item slide">
                                <img src={n8nImg} alt="" />
                            </li>
                            <li className="habilities-item slide">
                                <img src={umblerImg} alt="" />
                            </li>
                            <li className="habilities-item slide">
                                <img src={unnichatImg} alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="competencies-container">
                <b>O que eu faço?</b>

                <div className="competencies-slider">
                    <div className="slider">
                        <ul className="competencies-list slider-track">
                            <li className="competencies-item slide">
                                <img src={card01} alt="" />
                            </li>
                            <li className="competencies-item slide">
                                <img src={card02} alt="" />
                            </li>
                            <li className="competencies-item slide">
                                <img src={card03} alt="" />
                            </li>
                            <li className="competencies-item slide">
                                <img src={card04} alt="" />
                            </li>
                            <li className="competencies-item slide">
                                <img src={card05} alt="" />
                            </li>
                        </ul>
                        <ul className="competencies-list slider-track">
                            <li className="competencies-item slide">
                                <img src={card01} alt="" />
                            </li>
                            <li className="competencies-item slide">
                                <img src={card02} alt="" />
                            </li>
                            <li className="competencies-item slide">
                                <img src={card03} alt="" />
                            </li>
                            <li className="competencies-item slide">
                                <img src={card04} alt="" />
                            </li>
                            <li className="competencies-item slide">
                                <img src={card05} alt="" />
                            </li>
                        </ul>
                        <ul className="competencies-list slider-track">
                            <li className="competencies-item slide">
                                <img src={card01} alt="" />
                            </li>
                            <li className="competencies-item slide">
                                <img src={card02} alt="" />
                            </li>
                            <li className="competencies-item slide">
                                <img src={card03} alt="" />
                            </li>
                            <li className="competencies-item slide">
                                <img src={card04} alt="" />
                            </li>
                            <li className="competencies-item slide">
                                <img src={card05} alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Sliders;