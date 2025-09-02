import { useRef } from "react";
import { TopBar } from "../../main/layouts/TopBar/TopBar";
import { Footer } from "../../main/layouts/Footer/Footer";
import * as Section from "./sections";

export const Index = () => {

  const aboutRef = useRef<HTMLDivElement>(null);
  const housesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const storiesRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (section: 'about' | 'houses' | 'services' | 'stories') => {
    const map = {
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
      <Section.ImgIndex />
      <Section.About ref={aboutRef} />
      <Section.HProperties ref={housesRef} />
      <Section.OurCommitment />
      <Section.Services ref={servicesRef} />
      <Section.Stories ref={storiesRef} />
      <Section.Team />
      <Footer />
    </>
  )
}
