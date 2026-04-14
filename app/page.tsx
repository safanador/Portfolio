"use client";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { useRef, useState, useEffect } from "react";
import JobExperience from "./components/JobExperience";
import Projects from "./components/Projects";
import Image from "next/image";
import experiencesData from "./data/workExperience";
import projectsData from "./data/projects"
import uiTranslations from "./data/translations";

interface Job {
  startDate: string;
  endDate: string;
  title: string;
  description: string;
  company: string;
  stack: string[];
}

interface Project {
  title: string;
  role: string;
  technologies: string[];
  description: string;
  siteUri?: string;
  photos: string[];
}

export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedAncor, setSelectedAncor] = useState("");
  const [lang, setLang] = useState<'es' | 'en'>('es');

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'es') {
      setLang('es');
    } else {
      setLang('en');
    }
  }, []);

  const t = uiTranslations[lang];
  const projects = (projectsData as Record<string, Project[]>)[lang];
  const experiences = (experiencesData as Record<string, Job[]>)[lang];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const x = e.clientX;
    const y = e.clientY + window.scrollY;

    setMousePosition({ x, y });
  };
  const handleAncorClick = (ancor: string) => {
    setSelectedAncor(ancor);
  };
  return (
    <div
      className="relative flex flex-col lg:justify-end bg-slate-900 lg:flex-row pb-4 sm:px-20 font-[family-name:var(--font-geist-sans)]"
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(22,38,67, 1) 0%, rgba(15, 23, 42, 1)23%`,
      }}
    >
      <main
        id="header"
        className="lg:fixed lg:top-0 lg:left-0 flex flex-col items-center lg:py-20 mr-8 w-full lg:w-1/2"
      >
        <header className="flex flex-col text-slate-200 p-6 sm:p-0 w-full lg:w-[400px] h-72 gap-3">
          <div className="flex items-center gap-1">
            <div>
              <h1 className="text-5xl font-bold w-auto">Sergio Afanador</h1>
              <h3 className="font-medium text-2xl">{t.role}</h3>
            </div>
            <div className="rounded-full overflow-hidden border-1 border-slate-200">
              <Image
                src="https://res.cloudinary.com/djqpy9gf0/image/upload/v1754323314/perfilphoto_ylo4ju.jpg"
                alt="Sergio Afanador picture"
                className="w-full h-full object-cover"
                width={66}
                height={66}
              />
            </div>
          </div>
          <p className="text-gray-300 w-auto">
            {t.tagline}
          </p>
          <ul className="lg:hidden flex flex-row gap-4">
            <a
              href="https://www.linkedin.com/in/sergio-afanador-bayona-51b1771a1/"
              title="Linkedin"
            >
              <IoLogoLinkedin
                className="hover:cursor-pointer hover:text-white text-gray-400"
                size={26}
              />
            </a>
            <a href="https://github.com/safanador" title="Github">
              <FaGithub
                className="hover:cursor-pointer hover:text-white text-gray-400"
                size={26}
              />
            </a>
            <a href="#" title="Instagram">
              <IoLogoInstagram
                className="hover:cursor-pointer hover:text-white text-gray-400"
                size={26}
              />
            </a>
            <a href="#" title="Twitter">
              <FaXTwitter
                className="hover:cursor-pointer hover:text-white text-gray-400"
                size={26}
              />
            </a>
          </ul>
          <nav className="hidden lg:flex md:mt-16 md:mb-20 ">
            <ul className=" flex flex-col gap-6">
              <li>
                <a
                  onClick={() => {
                    handleAncorClick("about");
                    aboutRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="group flex items-center flex-row relative"
                >
                  <span
                    className={`nav-indicator absolute top-1/2 left-0 transform -translate-y-1/2 w-8 h-[2px] bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${selectedAncor === "about"
                      ? "group-[]:bg-slate-200 group-[]:w-16"
                      : ""
                      }`}
                  ></span>
                  <span
                    className={`pl-12 hover:pl-20 transition-all pr-5 ${selectedAncor === "about" ? "pl-20" : ""
                      }`}
                  >
                    {t.about}
                  </span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    handleAncorClick("experience");
                    experienceRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="group flex items-center flex-row relative"
                >
                  <span
                    className={`nav-indicator absolute top-1/2 left-0 transform -translate-y-1/2 w-8 h-[2px] bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${selectedAncor === "experience"
                      ? "group-[]:bg-slate-200 group-[]:w-16"
                      : ""
                      }`}
                  ></span>
                  <span
                    className={`pl-12 hover:pl-20 transition-all ${selectedAncor === "experience" ? "pl-20" : ""
                      }`}
                  >
                    {t.experience}
                  </span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    handleAncorClick("projects");
                    projectRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="group flex items-center flex-row relative"
                >
                  <span
                    className={`nav-indicator absolute top-1/2 left-0 transform -translate-y-1/2 w-8 h-[2px] bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${selectedAncor === "projects"
                      ? "group-[]:bg-slate-200 group-[]:w-16"
                      : ""
                      }`}
                  ></span>
                  <span
                    className={`pl-12 hover:pl-20 transition-all ${selectedAncor === "projects" ? "pl-20" : ""
                      }`}
                  >
                    {t.projects}
                  </span>
                </a>
              </li>
            </ul>
          </nav>
          <ul className="hidden lg:flex  md:mt-6 md:flex-row md:gap-4">
            <a
              href="https://www.linkedin.com/in/sergio-afanador-bayona-51b1771a1/"
              title="Linkedin"
            >
              <IoLogoLinkedin
                className="hover:cursor-pointer hover:text-white text-gray-400"
                size={26}
              />
            </a>
            <a href="https://github.com/safanador" title="Github">
              <FaGithub
                className="hover:cursor-pointer hover:text-white text-gray-400"
                size={26}
              />
            </a>
            <a href="#" title="Instagram">
              <IoLogoInstagram
                className="hover:cursor-pointer hover:text-white text-gray-400"
                size={26}
              />
            </a>
            <a href="#" title="Twitter">
              <FaXTwitter
                className="hover:cursor-pointer hover:text-white text-gray-400"
                size={26}
              />
            </a>
          </ul>
        </header>
      </main>
      <main
        id="content"
        className="pl-4 pt-24 overflow-y-auto md:pl-0 lg:w-1/2 lg:py-24"
      >
        <section
          id="about"
          ref={aboutRef}
          className="lg:w-4/5 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-full bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-6 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 ">
              {t.about}
            </h2>
          </div>
          <div className="w-full pr-4">
            <p className="mb-4 text-gray-300">
              {t.bio1}
            </p>
            <p className="mb-4 text-gray-300">
              {t.bio2}
            </p>
            <p className="text-gray-300">
              {t.bio3}
            </p>
          </div>
        </section>
        <section
          id="experience"
          ref={experienceRef}
          className="lg:w-4/5 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12  lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 ">
              {t.experience}
            </h2>
          </div>
          <div>
            <ol className="group/list">
              {experiences.map((job: Job, index: number) => (
                <li key={index} className="mb-12">
                  <JobExperience
                    startDate={job.startDate}
                    endDate={job.endDate}
                    title={job.title}
                    description={job.description}
                    stack={job.stack}
                    company={job.company}
                  />
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section id="projects" ref={projectRef}>
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12  lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 ">
              {t.projects}
            </h2>
          </div>
          <div>
            <ul className="group/list">
              {projects.map((project: Project, index: number) => (
                <li key={index} className="mb-12">
                  <Projects
                    title={project.title}
                    role={project.role}
                    tecnologies={project.technologies}
                    description={project.description}
                    siteUri={project.siteUri}
                    photos={project.photos}
                    lang={lang}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
