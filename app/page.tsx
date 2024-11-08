"use client"
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { useRef, useState } from "react";
import JobExperience from "./components/JobExperience";
import Projects from "./components/Projects";




export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0})
  const stack = ["Javascript", "TypeScript", "Next.js", "MongoDB", "Node.js","TailwindCSS","React","Stripe", "MercadoPago","ShadcnUI"];
  const stackRentalProject = ["Javascript", "TypeScript", "Next.js", "MongoDB", "Shadcn","TailwindCSS","Node.Js","React"];
  const stackEcommerceProject = ["TypeScript", "Next.js", "Sanity.io", "Shadcn","TailwindCSS","Stripe","React"];
  const stackEnterviewProject = ["Vue 3", "Node.js", "Express.js", "MongoDB","TailwindCSS"];

  const siteUri = {
    rental: "https://rentalbike.vercel.app/", 
    ecommerce: "https://nextjs-sanitycommerce.vercel.app/",
    restaurants: "https://frontendprueba.vercel.app/",
  };
  const [selectedAncor, setSelectedAncor] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const x = e.clientX;
    const y = e.clientY + window.scrollY;

    setMousePosition({x , y});
  }
  const handleAncorClick = (ancor: string)=>{
    setSelectedAncor(ancor);
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
                  <a onClick={()=>{
                    handleAncorClick('about'); 
                    aboutRef.current?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }} className="group flex items-center flex-row relative">
                    <span className={`nav-indicator absolute top-1/2 left-0 transform -translate-y-1/2 w-8 h-[2px] bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${
                      selectedAncor === "about"
                      ? "group-[]:bg-slate-200 group-[]:w-16"
                      : ""
                    }`}>
                    </span>
                    <span className={`pl-12 hover:pl-20 transition-all pr-5 ${
                      selectedAncor === "about"
                      ? "pl-20"
                      : ""
                    }`}>
                        Sobre mi
                    </span>
                  </a>
                </li>
                <li>
                  <a onClick={()=>{
                    handleAncorClick("experience");
                    experienceRef.current?.scrollIntoView({
                      behavior: 'smooth'
                    });
                    
                    }} className="group flex items-center flex-row relative">
                    <span className={`nav-indicator absolute top-1/2 left-0 transform -translate-y-1/2 w-8 h-[2px] bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${
                      selectedAncor === "experience"
                      ? "group-[]:bg-slate-200 group-[]:w-16"
                      : ""
                    }`}>
                    </span>
                    <span className={`pl-12 hover:pl-20 transition-all ${
                      selectedAncor === "experience"
                      ? "pl-20"
                      : ""
                    }`}>
                      Experiencia
                    </span>
                  </a>
                </li>
                <li>
                  <a onClick={()=>{
                    handleAncorClick("projects");
                    projectRef.current?.scrollIntoView({
                      behavior:'smooth'
                    })
                  }} className="group flex items-center flex-row relative">
                    <span className={`nav-indicator absolute top-1/2 left-0 transform -translate-y-1/2 w-8 h-[2px] bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${
                      selectedAncor === "projects"
                      ? "group-[]:bg-slate-200 group-[]:w-16"
                      : ""
                    }`}>
                    </span>
                    <span className={`pl-12 hover:pl-20 transition-all ${
                      selectedAncor === "projects"
                      ? "pl-20"
                      : ""
                    }`}>
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
        <section id="about" ref={aboutRef} className="lg:w-4/5 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
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
              eficiente, modular y reutilizable, Apasionado por aprender y mejorar continuamente, busco oportunidades para crecer en un entorno colaborativo donde pueda aplicar mis habilidades y contribuir al éxito del equipo.
            </p>
            <p className="text-gray-300">
              Me identifico como una persona capaz de solucionar problemas, atenta al detalle, capaz de
              cumplir con tiempos de entrega y de trabajar en equipo o individualmente en entornos agiles y de
              ritmo rápido.
            </p>
          </div>
        </section>
        <section id="experience" ref={experienceRef} className="lg:w-4/5 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experiencia</h2>
        </div>
          <div>
            <ol className="group/list">
              <li className="mb-12">
                <JobExperience startDate="2023" endDate="2024" title="Junior Frontend Next.js" description="Diseño y la implementación de aplicaciones de comercio electrónico, optimizando la experiencia del usuario y asegurando un proceso de compra fluido. Implementé funciones como carritos de compra, gestión de productos y procesos de pago, garantizando la integración efectiva con sistemas de pago y APIs externas. Desarrollé componentes reutilizables con Shadcn UI, optimizando el flujo de trabajo y la consistencia del diseño en las aplicaciones."
                stack={stack}/>
              </li>
            </ol>
          </div>
        </section>
        <section id="projects" ref={projectRef}>
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Proyectos</h2>
          </div>
          <div>
            <ul className="group/list">
            <li className="mb-12">
                  <Projects title="Restaurant Menu Web" tecnologies={stackEnterviewProject} description="Se realizó un demo de aplicación web para dispositivos móviles para que restaurantes presenten virtualmente sus menus y productos, la aplicación fue diseñada como prueba para entrevista para la realización del proyecto." siteUri={siteUri.restaurants}
                  imageUrl="https://res.cloudinary.com/djqpy9gf0/image/upload/v1731028617/qilalyoo3kogub4ckoue.png" />
              </li>
              <li className="mb-12">
                  <Projects title="Rental motorcycle Web" tecnologies={stackRentalProject} description="Se realizó un demo de aplicación web FullStack en Next.js 14, este sitio se encarga de tomar, gestionar y hacer pago de reservas para una empresa local de renta de motocicletas, integracion con pasarela de pago. Frontend construido con React.js, implementando componentes de Shadcn UI y estilos con tailwindCSS." siteUri={siteUri.rental}
                  imageUrl="https://res.cloudinary.com/djqpy9gf0/image/upload/v1726676214/ogtgcqpm3fmylnf09plb.png" />
              </li>
              <li className="mb-12">
                  <Projects tecnologies={stackEcommerceProject} title="FullStack Ecommerce Next.js web " description="Desarrollo de aplicacion FullStack de Ecommerce, utlizando headless CMS Sanity.io moderna interfaz de usuario e integracion de pagos con Stripe, se realizo el despliegue en Vercel." siteUri={siteUri.ecommerce}
                  imageUrl="https://res.cloudinary.com/djqpy9gf0/image/upload/v1727482567/Captura_de_pantalla_2024-09-27_a_la_s_7.14.36_p._m._qmy7fc.png" />
              </li>
              
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
