"use client"
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import JobExperience from "./components/JobExperience";
import Projects from "./components/Projects";



export default function Home() {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0})
  const stack = ["Javascript", "TypeScript", "Next.js", "Nest.js"];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const x = e.clientX;
    const y = e.clientY;

    setMousePosition({x , y});
  }
  return (
    <div className="relative flex flex-col lg:justify-end bg-slate-900 lg:flex-row pb-4 sm:px-20 font-[family-name:var(--font-geist-sans)]" onMouseMove={handleMouseMove} style={{background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(22,38,67, 1) 0%, rgba(15, 23, 42, 1)23%`,}}>
      <main id="header" className="lg:fixed lg:top-0 lg:left-0 flex flex-col items-center lg:py-20 mr-8 w-full lg:w-1/2">
        <header className="flex flex-col text-slate-200 p-6 sm:p-0 w-full lg:w-[400px] h-72 gap-3">
          <h1 className="text-5xl font-bold w-auto">Sergio Afanador</h1>
          <h3 className="font-medium text-2xl">Junior Frontend Developer</h3>
          <p className="text-gray-300 w-auto">Construyo experiencias digitales con un excelente cumplimiento de tiempos de entrega.</p>
            <ul className="lg:hidden flex flex-row gap-4">
              <a href="https://www.linkedin.com/in/sergio-afanador-bayona-51b1771a1/" title="Linkedin"><IoLogoLinkedin className="hover:cursor-pointer hover:text-white text-gray-400" size={26} />
              </a>
              <a href="https://github.com/safanador" title="Github"><FaGithub className="hover:cursor-pointer hover:text-white text-gray-400" size={26}/>
              </a>
              <a href="#" title="Instagram"><IoLogoInstagram className="hover:cursor-pointer hover:text-white text-gray-400" size={26}/>
              </a>
              <a href="#" title="Twitter"><FaXTwitter className="hover:cursor-pointer hover:text-white text-gray-400" size={26}/>
              </a>
            </ul>
            <nav className="hidden lg:flex md:mt-16 md:mb-20 ">
              <ul className=" flex flex-col gap-6">
                <li>
                  <a href="#about" className="group flex items-center flex-row relative">
                    <span className="nav-indicator absolute top-1/2 left-0 transform -translate-y-1/2 w-8 h-[2px] bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200">
                    </span>
                    <span className="pl-12 hover:pl-20 transition-all pr-5">
                        Sobre mi
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#experience" className="group flex items-center flex-row relative">
                    <span className="nav-indicator absolute top-1/2 left-0 transform -translate-y-1/2 w-8 h-[2px] bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200">
                    </span>
                    <span className="pl-12 hover:pl-20 transition-all">
                      Experiencia
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#projects" className="group flex items-center flex-row relative">
                    <span className="nav-indicator absolute top-1/2 left-0 transform -translate-y-1/2 w-8 h-[2px] bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200">
                    </span>
                    <span className="pl-12 hover:pl-20 transition-all pr-4">
                      Projectos
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
            <ul className="hidden lg:flex  md:mt-6 md:flex-row md:gap-4">
              <a href="https://www.linkedin.com/in/sergio-afanador-bayona-51b1771a1/" title="Linkedin"><IoLogoLinkedin className="hover:cursor-pointer hover:text-white text-gray-400" size={26} />
              </a>
              <a href="https://github.com/safanador" title="Github"><FaGithub className="hover:cursor-pointer hover:text-white text-gray-400" size={26}/>
              </a>
              <a href="#" title="Instagram"><IoLogoInstagram className="hover:cursor-pointer hover:text-white text-gray-400" size={26}/>
              </a>
              <a href="#" title="Twitter"><FaXTwitter className="hover:cursor-pointer hover:text-white text-gray-400" size={26}/>
              </a>
            </ul>
        </header>
      </main>
      <main id="content" className=" pl-8 pt-24 overflow-y-auto lg:w-1/2 lg:py-24">
        <section id="about" className="lg:w-4/5 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-full bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-6 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Sobre mi</h2>
          </div>
          <div className="w-full pr-4">
            <p className="mb-4 text-gray-300">
              Soy Desarrollador Frontend junior con experiencia en desarrollo de interfaces accesibles y
              responsivas adaptadas a diferentes dispositivos y tamaños de pantalla para la web y móviles,
              usando React y React-Native, tengo experiencia realizando integraciones de API y manejo de
              estados tanto en web como en móvil.
            </p>
            <p className="mb-4 text-gray-300">
              Me caracterizo por mi capacidad para escribir código
              eficiente, modular y reutilizable, asimismo, me caracterizo por estar abierto al uso y aprendizaje
              de tecnologías diferentes a las que frecuentemente uso.
            </p>
            <p className="text-gray-300">
              Me identifico como una persona capaz de solucionar problemas, atenta al detalle, capaz de
              cumplir con tiempos de entrega y de trabajar en equipo o individualmente en entornos agiles y de
              ritmo rápido.
            </p>
          </div>
        </section>
        <section className="lg:w-4/5 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
          <div>
            <JobExperience startDate="2024" endDate="Present" title="Senior Frontend Next.js" description="Build and maintain critical components used to construct Kaviyos frontend, across the whole product. Work closely with cross - functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
            stack={stack}/>
          </div>
          <div>
            <JobExperience startDate="2020" endDate="2023" title="mid-senior Frontend Next.js" 
            description="Build and maintain critical components used to construct Kaviyos frontend, across the whole product. Work closely with cross - functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
            stack={stack}/>
          </div>
          <div>
            <JobExperience startDate="2018" endDate="2020" title="Junior Frontend Next.js" description="Build and maintain critical components used to construct Kaviyos frontend, across the whole product. Work closely with cross - functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
            stack={stack}/>
          </div>
        </section>
        <section>
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2>Proyectos</h2>
          </div>
          <div>
            <ul className="group/list">
              <li className="mb-12">
                <Projects title="Build a Spotify connected" description="Video course that teaches how to build a web app with the spotify web api. Topics covered include the principles of rest api. user auth flows, node, express, react, styled components and more."
                imageUrl="https://res.cloudinary.com/djqpy9gf0/image/upload/v1726676214/ogtgcqpm3fmylnf09plb.png" />
              </li>
              <li className="mb-12">
                <Projects title="Build a Spotify connected" description="Video course that teaches how to build a web app with the spotify web api. Topics covered include the principles of rest api. user auth flows, node, express, react, styled components and more."
                imageUrl="https://res.cloudinary.com/djqpy9gf0/image/upload/v1726676214/ogtgcqpm3fmylnf09plb.png" />
              </li>
              <li className="mb-12">
                <Projects title="Build a Spotify connected" description="Video course that teaches how to build a web app with the spotify web api. Topics covered include the principles of rest api. user auth flows, node, express, react, styled components and more."
                imageUrl="https://res.cloudinary.com/djqpy9gf0/image/upload/v1726676214/ogtgcqpm3fmylnf09plb.png" />
              </li>
              <li className="mb-12">
                <Projects title="Build a Spotify connected" description="Video course that teaches how to build a web app with the spotify web api. Topics covered include the principles of rest api. user auth flows, node, express, react, styled components and more."
                imageUrl="https://res.cloudinary.com/djqpy9gf0/image/upload/v1726676214/ogtgcqpm3fmylnf09plb.png" />
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
