/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Code,
  Database,
  Terminal,
  CheckCircle2,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Rocket,
  Cpu,
} from "lucide-react";

const NAV_LINKS = [
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const SKILLS = [
  {
    category: "Frontend",
    icon: <Cpu className="w-5 h-5 text-primary" />,
    items: [
      "React.js / Next.js",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "JavaScript (ES6+)",
    ],
  },
  {
    category: "Backend",
    icon: <Database className="w-5 h-5 text-primary" />,
    items: ["Node.js", "Express.js", "MongoDB / Mongoose", "RESTful APIs"],
  },
  {
    category: "Tools",
    icon: <Terminal className="w-5 h-5 text-primary" />,
    items: ["Git / GitHub", "Docker", "Postman", "VS Code"],
  },
  {
    category: "Testing",
    icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
    items: ["Jest", "Cypress", "React Testing Lib", "Unit Testing"],
  },
];

const PROJECTS = [
  {
    title: "E-commerce Engine",
    description:
      "A full-featured headless commerce solution with real-time inventory tracking, secure Stripe integration, and an ultra-fast customer checkout experience.",
    tags: ["React", "Node.js"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkOmbmwK0lXO9Ug_RxvPHmTdWBvO-TmRW-jcMX6Y5aVYkGYPHcFxOVqSemOWJ81pFZ_BVLd1AsOd5aFevvt91hqApG1LIeItfZ7RG27Gl4E92KcsCu7lLRrzF4dMR2VqY29KOL6vK9kg4y9SJY64EszmptSdFEsRAVuRSYy7uDiwcD5Or3GKLHmYkrdit3odbMcrFdfbLpOiBCI0AzJD0Hpr0J9CWb0IxrvOHwbbbLlNhPn4PtuOrST-l1hTzuJhappPN3nq0Y0Q",
    large: true,
  },
  {
    title: "SaaS Dashboard",
    description:
      "Advanced analytics platform with dynamic data visualization and user management systems.",
    tags: ["Next.js"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC4VgB8R82ezCjKH19f-leLoehrdyuMS0KK-LJwtNczRU7txOeCD7wuKxMB9BwezTwmjal3EBp5TkY09JVTt5XdVR7dD-EKbLPuccMIyghpPb_vb4Ox2GXbEQ5foj3_AthuzKBSqg3lQ19uhLY9mDLMPEWwyXqJn5hmQqft0bhPz7oRfhUQUQppbSbGHXGI-AiFPMuYQ9KoyAEnD1DiLm2oI9GrinDY51tDJVZMG83XrKw0nkMw-q1T0DQm_3ehGRTmC-BfatWKvw",
    large: false,
  },
  {
    title: "Nexus Social Platform",
    description:
      "A decentralized approach to social networking focusing on data privacy and real-time community interactions using WebSockets and end-to-end encryption.",
    tags: ["MongoDB", "Express"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMh8iTf4A8v5E7STYMM1nqpNOqFh4JpEyW2tyyUaf3wsowVBUMfj_sEC9ZiiphQmXGJt2_wuGbEm6MH0yk_Oz5j10Vf-yP6CjBNp9V09ZcLa79HNgWdrxuQyuxnnD2FQg0lMvYnft9MKJpzPYgWjSI0AxpUVbtjR63hCnH6vKCtQ3s33P3mqWIjri9WzTytRSrdD_DmgbmkGtWhQfm03dv92ucka56erdIl09lnUkQOyezk2N8bF_kjw7XQ67Ke0VXDEki9FTXqg",
    large: true,
    row: true,
  },
];

const TIMELINE = [
  {
    role: "Junior Web Developer",
    company: "Startup Labs",
    period: "2020 - 2021",
    description:
      "Founded my base in JavaScript and modern CSS. Assisted in delivering 5+ client landing pages and refined my debugging skills.",
    icon: <Code className="w-6 h-6 text-primary" />,
  },
  {
    role: "Full Stack Developer",
    company: "TechSphere Solutions",
    period: "2021 - 2023",
    description:
      "Took ownership of end-to-end features. Mastered the MERN stack and optimized database queries reducing latency by 40%.",
    icon: <Terminal className="w-6 h-6 text-primary" />,
  },
  {
    role: "Senior Full Stack Engineer",
    company: "Innovate Corp",
    period: "2023 - Present",
    description:
      "Leading a team of 4 developers. Architected a microservices-based SaaS platform serving 50k+ active monthly users.",
    icon: <Rocket className="w-6 h-6 text-on-surface" />,
    current: true,
  },
];

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-surface flex flex-col items-center justify-center p-6"
          >
            <div className="relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-[1px] bg-primary mb-8"
              />
              <div className="flex justify-between items-end w-[200px] mb-2 text-primary font-headline">
                <span className="text-[10px] tracking-[0.4em] uppercase opacity-50">
                  Initializing
                </span>
                <motion.span
                  className="text-2xl font-bold italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {/* Pseudo counter logic isn't strictly needed for a 2s loader but looks nice */}
                  SC-01
                </motion.span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-4 flex flex-col items-center gap-2"
            >
              <div className="text-[2vw] font-headline font-bold uppercase tracking-tighter text-on-surface opacity-10">
                Awais Portfolio
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen selection:bg-primary/20 selection:text-primary">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/5">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between font-headline uppercase tracking-wider">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-on-surface"
            >
              Awais
            </motion.div>

            <div className="hidden md:flex items-center gap-10 text-sm">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="hover:text-primary transition-colors text-on-surface-variant hover:font-medium"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="btn-gradient text-[#00363f] px-6 py-2 rounded-md font-bold hover:opacity-90 transition-opacity"
              >
                Resume
              </motion.button>
            </div>
          </div>
        </nav>

        <main>
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-16 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-7 space-y-10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-primary/40" />
                  <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-primary">
                    Senior Full Stack Architect
                  </span>
                </div>

                <h1 className="text-[clamp(4rem,10vw,8rem)] font-bold leading-[0.85] tracking-tighter">
                  Muhammad <br /> <span className="text-gradient">Awais</span>
                </h1>

                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="px-2 py-0.5 border border-primary/20 bg-primary/5 rounded text-[10px] font-bold text-primary uppercase tracking-widest">
                      Available for Hire
                    </div>
                    <div className="text-[10px] text-on-surface-variant/60 font-medium uppercase tracking-widest">
                      Based in Remote / Global
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-medium text-on-surface-variant leading-tight max-w-xl">
                    Hi, I'm{" "}
                    <span className="text-on-surface font-bold">Awais</span>. I
                    build robust systems with{" "}
                    <span className="italic text-on-surface">MERN</span> &{" "}
                    <span className="underline decoration-primary/40 underline-offset-8">
                      React
                    </span>
                    .
                  </h2>

                  <p className="text-lg text-on-surface-variant/70 max-w-lg leading-relaxed font-body">
                    Turning complex architectural challenges into
                    high-performance, accessible digital experiences through
                    clean code and tonal depth.
                  </p>
                </div>

                <div className="flex flex-wrap gap-8 pt-6">
                  <button className="btn-gradient text-[#00363f] px-10 py-5 rounded-md font-bold flex items-center gap-3 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgb(0,224,255,0.2)] transition-all">
                    Selected Works <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="px-10 py-5 rounded-md font-bold text-on-surface border border-outline-variant/10 hover:bg-surface-container-high hover:border-outline-variant/30 transition-all">
                    Email Me
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="hidden lg:block lg:col-span-5 relative"
              >
                <div className="aspect-[3/4] bg-surface-container-low rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-outline-variant/5 group">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-surface via-transparent to-transparent opacity-40" />
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRldJYeIPfha-KxIKeeoR2G8Lw2l8IxwRjEaK1nCA9wmGYNjQ4i__n3k0Viws2heO321L-QB21Ii7hE6R56TWCiZuLdHmMjiywUI5tdlF_XXgM1oy2lKbkW6nJNVVnY3q4ugujJ1yN8NgSjuDwpsKFq94CEgGlnegpZk8Sc9uElWIxRQTIpnJIYxnwvDpVJ2u1s141PkKSqHJfVDb1D37rO4Ih4UlrvdXPlfGIgbNSKSqzaW5AJV1izST_iw3mJGk4q4R_nsK6SA"
                    alt="Awais Architecture"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-[0.8] contrast-[1.1] group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                  />
                </div>

                {/* Asymmetrical Floating Badge */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 backdrop-blur-3xl rounded-full border border-primary/10 flex flex-col items-center justify-center p-8 text-center"
                >
                  <div className="text-4xl font-bold text-primary">04</div>
                  <div className="text-[8px] uppercase tracking-[0.3em] font-bold text-on-surface-variant font-headline">
                    Years of System Mastery
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* About Section */}
          <section
            id="about"
            className="py-32 bg-surface-container-low px-6 relative"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent" />
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-2xl transition-all group-hover:bg-primary/10" />
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDSCj-Kj_S-ntOGAI1RCTI9cETdIkF7E2ITEte9ZJlLGfIcKI1S8hgB1fy72-k5m2e_6ofATUIu-4S7-YZbp_4jrSNgAHpyHblEAWi6XytudD687LNzoEplMUuwvZW_zEvaLSX5zeprCqISh8q4crH7aF6k7lv85yn5380pBZccoUyOS8u2bgrhX-4qzt3DWkMBAGteMO3kMj9WURl7HoLGviwXoSpCvcd0PE900N6V1YeKu1ag_o-j2UCCkmsspdaMDhKbezDTw"
                  alt="Clean Code"
                  referrerPolicy="no-referrer"
                  className="relative rounded-xl border border-outline-variant/10 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary">
                  About Me
                </span>
                <h2 className="text-5xl font-bold leading-[1.1]">
                  Engineering Excellence through Clean Architecture.
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  With four years of hands-on experience in the MERN stack, I've
                  evolved from building simple interfaces to architecting
                  complex distributed systems. My focus lies at the intersection
                  of performance, accessibility, and clean code principles.
                </p>

                <div className="grid grid-cols-2 gap-12 pt-4">
                  <div className="space-y-2">
                    <h4 className="text-4xl font-bold text-primary">20+</h4>
                    <p className="text-xs uppercase tracking-widest text-on-surface-variant font-medium">
                      Projects Completed
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-4xl font-bold text-primary">100%</h4>
                    <p className="text-xs uppercase tracking-widest text-on-surface-variant font-medium">
                      Client Satisfaction
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Technical Arsenal Section */}
          <section className="py-40 px-6 relative" id="skills">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                <div className="max-w-2xl space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-[1px] bg-primary/30" />
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary">
                      Capabilities
                    </span>
                  </div>
                  <h2 className="text-6xl md:text-7xl font-bold tracking-tighter">
                    Stack & <br /> <span className="opacity-30">Strategy.</span>
                  </h2>
                </div>
                <p className="text-on-surface-variant/60 uppercase tracking-[0.3em] text-[10px] font-bold pb-4 border-b border-outline-variant/10">
                  04 // Modern Web Ecosystem
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/10 border border-outline-variant/10 rounded-2xl overflow-hidden">
                {SKILLS.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-10 bg-surface hover:bg-surface-container-low transition-colors group cursor-default"
                  >
                    <div className="flex items-center gap-4 mb-10">
                      <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:border-primary/30 transition-colors">
                        {skill.icon}
                      </div>
                      <h3 className="font-bold text-lg uppercase tracking-wider">
                        {skill.category}
                      </h3>
                    </div>
                    <ul className="space-y-5">
                      {skill.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center justify-between text-xs text-on-surface-variant font-medium group/item"
                        >
                          <span>{item}</span>
                          <div className="w-1 h-1 rounded-full bg-primary/20 group-hover/item:bg-primary transition-colors" />
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Selected Works Section */}
          <section
            className="py-32 bg-surface-container-low px-6 border-y border-outline-variant/5"
            id="work"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-end mb-20">
                <h2 className="text-6xl font-bold">Selected Works</h2>
                <a
                  href="#"
                  className="text-primary hover:text-primary-container transition-colors font-bold text-sm uppercase tracking-widest flex items-center gap-2"
                >
                  View All Projects <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="grid md:grid-cols-12 gap-8">
                {PROJECTS.map((project, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`${project.large ? "md:col-span-8" : "md:col-span-4"} 
                    ${project.row ? "md:col-span-12 flex flex-col md:flex-row" : ""} 
                    bg-surface-container rounded-2xl overflow-hidden border border-outline-variant/10 group`}
                  >
                    <div
                      className={`${project.row ? "md:w-1/2" : ""} overflow-hidden aspect-video relative`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-surface/20 group-hover:bg-transparent transition-colors duration-700" />
                    </div>

                    <div
                      className={`p-10 ${project.row ? "md:w-1/2 flex flex-col justify-center" : ""} space-y-6`}
                    >
                      <div className="flex gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] uppercase tracking-widest px-3 py-1 bg-surface-container-highest text-primary font-bold rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-3xl font-bold">{project.title}</h3>
                      <p className="text-on-surface-variant leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex gap-4 pt-4">
                        {project.large || project.row ? (
                          <>
                            <button className="btn-gradient text-[#00363f] px-6 py-3 rounded-md font-bold text-sm">
                              Live Demo
                            </button>
                            <button className="border border-outline-variant/20 px-6 py-3 rounded-md font-bold text-sm hover:bg-surface-container-high transition-colors">
                              Source Code
                            </button>
                          </>
                        ) : (
                          <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                            Preview <ArrowRight className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Career Timeline Section */}
          <section className="py-40 px-6 relative" id="experience">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col items-center mb-32 space-y-6">
                <div className="px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-bold text-primary uppercase tracking-[0.4em]">
                  The Progression
                </div>
                <h2 className="text-7xl font-bold tracking-tighter">
                  Career Loop.
                </h2>
              </div>

              <div className="space-y-12 relative before:absolute before:left-0 md:before:left-1/2 before:w-[1px] before:h-full before:bg-outline-variant/20">
                {TIMELINE.map((item, idx) => (
                  <div
                    key={idx}
                    className={`relative flex flex-col md:flex-row gap-12 ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`md:w-1/2 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"} space-y-2`}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                      >
                        <h3 className="text-2xl font-bold">{item.role}</h3>
                        <p className="text-primary font-bold">
                          {item.company} |{" "}
                          <span className="text-on-surface-variant font-medium">
                            {item.period}
                          </span>
                        </p>
                        <p className="text-sm text-on-surface-variant leading-relaxed max-w-sm ml-auto mr-0 md:inline-block">
                          {item.description}
                        </p>
                      </motion.div>
                    </div>

                    <div className="absolute left-0 md:left-1/2 -ms-6 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className={`w-12 h-12 rounded-full flex items-center justify-center z-10 
                        ${item.current ? "btn-gradient shadow-[0_0_20px_rgba(129,233,255,0.4)]" : "bg-surface-container border border-primary/40"}`}
                      >
                        {item.icon}
                      </motion.div>
                    </div>

                    <div className="md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section
            className="py-32 bg-surface-container-low px-6 transition-colors"
            id="contact"
          >
            <div className="max-w-7xl mx-auto">
              <div className="bg-surface-container-high rounded-3xl overflow-hidden border border-outline-variant/10 flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-12 lg:p-20 space-y-10 bg-surface-container-highest/20">
                  <div className="space-y-6">
                    <h2 className="text-6xl font-bold leading-tight">
                      Let's build something{" "}
                      <span className="text-gradient">remarkable.</span>
                    </h2>
                    <p className="text-on-surface-variant text-lg">
                      I'm currently open to new opportunities and interesting
                      projects. Whether you have a question or just want to say
                      hi, my inbox is always open.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-xl bg-surface-container-highest flex items-center justify-center border border-outline-variant/10">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                          Email
                        </p>
                        <p className="font-headline font-semibold text-lg">
                          hello@awais.dev
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-xl bg-surface-container-highest flex items-center justify-center border border-outline-variant/10">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                          Location
                        </p>
                        <p className="font-headline font-semibold text-lg">
                          Remote / Worldwide
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 p-12 lg:p-20">
                  <form className="space-y-10">
                    <div className="space-y-10 overflow-hidden">
                      <div className="relative group">
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          className="w-full bg-transparent border-b border-outline-variant/30 py-4 focus:ring-0 focus:border-primary transition-colors text-on-surface placeholder:text-transparent peer"
                        />
                        <label className="absolute left-0 top-4 text-on-surface-variant pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                          Your Name
                        </label>
                      </div>

                      <div className="relative group">
                        <input
                          type="email"
                          required
                          placeholder="Your Email"
                          className="w-full bg-transparent border-b border-outline-variant/30 py-4 focus:ring-0 focus:border-primary transition-colors text-on-surface placeholder:text-transparent peer"
                        />
                        <label className="absolute left-0 top-4 text-on-surface-variant pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                          Your Email
                        </label>
                      </div>

                      <div className="relative group">
                        <textarea
                          required
                          rows={4}
                          placeholder="Your Message"
                          className="w-full bg-transparent border-b border-outline-variant/30 py-4 focus:ring-0 focus:border-primary transition-colors text-on-surface placeholder:text-transparent peer resize-none"
                        />
                        <label className="absolute left-0 top-4 text-on-surface-variant pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                          Your Message
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-gradient text-[#00363f] py-5 rounded-xl font-bold text-lg hover:scale-[0.99] active:scale-[0.97] transition-transform"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="py-12 px-6 border-t border-outline-variant/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-bold font-headline uppercase tracking-tighter text-on-surface">
              Awais
            </div>
            <p className="text-on-surface-variant text-sm tracking-wide">
              © {new Date().getFullYear()} Awais. Engineered with precision.
            </p>
            <div className="flex gap-12">
              {[
                { icon: <Github className="w-4 h-4" />, href: "#" },
                { icon: <Linkedin className="w-4 h-4" />, href: "#" },
                { icon: <Twitter className="w-4 h-4" />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="text-on-surface-variant/40 hover:text-primary transition-colors hover:scale-110 transform"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
