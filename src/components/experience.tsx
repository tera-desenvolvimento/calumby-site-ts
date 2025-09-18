import img01 from "../img/experience/01.svg";
import img02 from "../img/experience/02.svg";
import img03 from "../img/experience/03.svg";
import img04 from "../img/experience/04.svg";

import "../style/experience.css"

const Experience = () => {
    return (
        <div className="experience-container">
            <div className="header">
                <span className="top-span">
                    DIFERENCIAIS
                </span>
                <span className="main-span">
                    Por que somos a <span>escolha mais inteligente</span> para sua empresa?
                </span>
            </div>

            <div className="cards-wrapper">
                <img src={img01} alt="" />
                <img src={img02} alt="" />
                <img src={img03} alt="" />
                <img src={img04} alt="" />
            </div>
        </div>
    )
}

export default Experience;