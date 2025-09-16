import { useRef } from "react";
import { TopBar } from "../../main/layouts/TopBar/TopBar";
import { Footer } from "../../main/layouts/Footer/Footer";
import * as Section from "./sections";

export const Index = () => {

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const housesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const storiesRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (section: 'home' | 'about' | 'houses' | 'services' | 'stories') => {
    const map = {
      home: homeRef,
      about: aboutRef,
      houses: housesRef,
      services: servicesRef,
      stories: storiesRef,
    };

    map[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <TopBar onNavigate={handleNavigate} />
      <div ref={homeRef}>
        <Section.ImgIndex />
        <Section.About ref={aboutRef} />
        <Section.HProperties ref={housesRef} />
        <Section.OurCommitment />
        <Section.Services ref={servicesRef} />
        <Section.Stories ref={storiesRef} />
        <Section.Team />
      </div>
      <Footer />
    </>
  )
}
