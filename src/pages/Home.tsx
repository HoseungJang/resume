import { useEffect } from "react";

import { Header } from "../components/common/Header";
import { Main } from "../components/common/Main";
import { ProfileSection } from "../components/profile/Section";
import { ValueSection } from "../components/value/Section";
import { ExperienceSection } from "../components/experience/Section";
import { SkillSection } from "../components/skill/Section";
import { ProjectSection } from "../components/project/Section";
import { Footer } from "../components/common/Footer";

import { GA } from "../services/ga";

import { profile } from "../data/profile";
import { values } from "../data/value";
import { experiences } from "../data/experience";
import { skills } from "../data/skill";
import { projects } from "../data/project";

export function Home() {
  useEffect(() => GA.trackPageView({ path: window.location.pathname }), []);

  return (
    <>
      <Header />
      <Main>
        <ProfileSection profile={profile} />
        <ValueSection values={values} />
        <ExperienceSection experiences={experiences} />
        <SkillSection skills={skills} />
        <ProjectSection projects={projects} />
      </Main>
      <Footer />
    </>
  );
}
