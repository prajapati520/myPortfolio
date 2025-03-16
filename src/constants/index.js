import {
   frontend,
   backend,
   ux,
   prototyping,
   javascript,
   typescript,
   html,
   css,
   reactjs,
   redux,
   tailwind,
   nodejs,
   git,
   figma,
   docker,
   postgresql,
   rubyrails,
   graphql,
   fleet,
   farmo,
   metrium,
   littlerippers,
   nyeusi,
   //  space,
   //  coverhunt,
   //  dcc,
   //  kelhel,
   microverse,
} from "../assets";

export const navLinks = [
   {
      id: "about",
      title: "About",
   },
   {
      id: "projects",
      title: "Projects",
   },
   {
      id: "contact",
      title: "Contact",
   },
];

const services = [
   {
      title: "Frontend Developer",
      icon: frontend,
   },
   {
      title: "Backend Developer",
      icon: backend,
   },
   {
      title: "UI/UX Design",
      icon: ux,
   },
   {
      title: "Software Prototyping",
      icon: prototyping,
   },
];

const technologies = [
   {
      name: "HTML 5",
      icon: html,
   },
   {
      name: "CSS 3",
      icon: css,
   },
   {
      name: "JavaScript",
      icon: javascript,
   },
   {
      name: "TypeScript",
      icon: typescript,
   },
   {
      name: "React JS",
      icon: reactjs,
   },
   {
      name: "Redux Toolkit",
      icon: redux,
   },
   {
      name: "Tailwind CSS",
      icon: tailwind,
   },
   {
      name: "Node JS",
      icon: nodejs,
   },
   {
      name: "Rails",
      icon: rubyrails,
   },
   {
      name: "graphql",
      icon: graphql,
   },
   {
      name: "postgresql",
      icon: postgresql,
   },
   {
      name: "git",
      icon: git,
   },
   {
      name: "figma",
      icon: figma,
   },
   {
      name: "docker",
      icon: docker,
   },
];

const experiences = [
   {
      title: "Internship Trainee",
      company_name: "Software Associates",
      icon: microverse,
      iconBg: "#333333",
      date: "June 2021 - Sep 2021",
   },
   {
      title: "Junior Stack Developer",
      company_name: "Software Associates",
      icon: microverse,
      iconBg: "#333333",
      date: "Sep 2021 - Feb 2024",
   },
   {
      title: "Full Stack Developer",
      company_name: "Software Associates",
      icon: microverse,
      iconBg: "#333333",
      date: "Feb 2024 - Persent",
   },
   // {
   //   title: 'Full Stack Developer',
   //   company_name: 'Software Associates',
   //   icon: microverse,
   //   iconBg: '#333333',
   //   date: 'Sep 2022 - Present',
   // },
];

const projects = [
   {
      id: "project-1",
      name: "Fleet",
      description:
         "Provide engaged management and engineered efficiency so our customers can focus their resources on core business objectives and revenue-driving initiatives",
      tags: [
         {
            name: "Mean Stack",
            color: "blue-text-gradient",
         },
         {
            name: "mongodb",
            color: "green-text-gradient",
         },
         {
            name: "Css",
            color: "pink-text-gradient",
         },
      ],
      image: fleet,
      repo: "https://github.com/shaqdeff/KomiKult",
      demo: "https://shaqdeff.github.io/KomiKult/",
   },
   {
      id: "project-2",
      name: "Farmo",
      description:
         "Farmo’s mission is to provide easy to use solutions to the many challenges faced on farms",
      tags: [
         {
            name: "Mean Stack",
            color: "blue-text-gradient",
         },
         {
            name: "restapi",
            color: "green-text-gradient",
         },
         {
            name: "css",
            color: "pink-text-gradient",
         },
      ],
      image: farmo,
      repo: "https://github.com/",
      demo: "",
   },
   {
      id: "project-3",
      name: "Metrium",
      description: "This is a single-page calculator app built with React",
      tags: [
         {
            name: "Mean Stack",
            color: "blue-text-gradient",
         },
         {
            name: "PostgreSQL",
            color: "green-text-gradient",
         },
         {
            name: "css",
            color: "pink-text-gradient",
         },
      ],
      image: metrium,
      repo: "https://github.com/",
      demo: "https://inspiring-medovik-37d3b3.netlify.app/",
   },
   {
      id: "project-4",
      name: "littlerippers",
      description: ``,
      tags: [
         {
            name: "Mean Stack",
            color: "blue-text-gradient",
         },
         {
            name: "MongoDB",
            color: "green-text-gradient",
         },
         {
            name: "css",
            color: "pink-text-gradient",
         },
      ],
      image: littlerippers,
      repo: "https://github.com/",
      demo: "https://movie-metro.netlify.app/",
   },
   {
      id: "project-5",
      name: "Nyeusi Fest Site",
      description: "This is a demo concert website for a music festival called Nyeusi.",
      tags: [
         {
            name: "nextjs",
            color: "blue-text-gradient",
         },
         {
            name: "supabase",
            color: "green-text-gradient",
         },
         {
            name: "css",
            color: "pink-text-gradient",
         },
      ],
      image: nyeusi,
      repo: "https://github.com/shaqdeff/Nyeusi-Fest-Site",
      demo: "https://shaqdeff.github.io/Nyeusi-Fest-Site/",
   },
];

export { services, technologies, experiences, projects };
