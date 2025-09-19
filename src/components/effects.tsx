import React from "react";

import fx1 from "../img/fx/fx1.svg";
import fx2 from "../img/fx/fx2.svg";
import fx3 from "../img/fx/fx3.svg";
import fx4 from "../img/fx/fx4.svg";
import fx5 from "../img/fx/fx5.svg";
import fx6 from "../img/fx/fx6.svg";
import bgCardsLeft from "../img/fx/bg-cards-left.svg";
import bgCardsRight from "../img/fx/bg-cards-right.svg";

const Effects = () => {
    return (
        <React.Fragment>
            <img src={fx1} style={{ position: "absolute", top: 0, right: 0 }} />
            <img src={fx2} style={{ position: "absolute", top: 0, left: 0 }} />
            <img src={fx3} style={{ position: "absolute", top: "270px", left: 0, zIndex: 1 }} />

            <img src={bgCardsLeft} style={{ position: "absolute", top: "830px", left: 0 }} />
            <img src={bgCardsRight} style={{ position: "absolute", top: "450px", right: 0 }} />

            <img src={fx4} style={{ position: "absolute", top: "200px", right: 0, zIndex: 1 }} />
            <img src={fx5} style={{ position: "absolute", top: "1200px", left: 0, height: 1600 }} />
            <img src={fx6} style={{ position: "absolute", top: "1600px", right: 0, height: 1200 }} />
        </React.Fragment>
    )
}

export default Effects;