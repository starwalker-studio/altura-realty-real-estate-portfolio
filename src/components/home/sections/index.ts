import type { JSX } from "react";
import { ImgIndex } from "./section-index/ImgIndex";
import { About } from "./section-about/About";
import { HProperties } from "./section-properties/HProperties";
import { OurCommitment } from "./section-commitment/OurCommitment";
import { Services } from "./section-services/Services";
import { Stories } from "./section-stories/Stories";
import { Team } from "./section-team/Team";

interface ISection {
    ImgIndex: () => JSX.Element;
    About: () => JSX.Element;
    HProperties: () => JSX.Element;
    OurCommitment: () => JSX.Element;
    Services: () => JSX.Element;
    Stories: () => JSX.Element;
    Team: () => JSX.Element;
}

export const Section: ISection = {
    ImgIndex,
    About,
    HProperties,
    OurCommitment,
    Services,
    Stories,
    Team
}