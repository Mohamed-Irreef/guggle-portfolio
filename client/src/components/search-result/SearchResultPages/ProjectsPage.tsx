import githubLogo from '../../../assets/github.png';
import proj1 from '../../../assets/proj1.png';
import proj2 from '../../../assets/projects/proj2.png';
import proj3 from '../../../assets/projects/proj3.png';
import proj4 from '../../../assets/projects/proj4.png';
import proj5 from '../../../assets/projects/proj5.png';
import proj6 from '../../../assets/projects/proj6.png';
import proj7 from '../../../assets/projects/proj7.png';
import proj8 from '../../../assets/projects/proj8.png';
import proj9 from '../../../assets/projects/proj9.png';
import proj10 from '../../../assets/projects/proj10.jpg';
import proj11 from '../../../assets/projects/proj11.png';
import proj12 from '../../../assets/projects/proj12.png';
import ProjectComponent from '../UiComponents/ProjectComponent';

const ProjectsPage = () => {
  //   const projects = [
  //   {
  //     id: 1,
  //     githubLink: "https://github.com/Mohamed-Irreef/E-Commerce",
  //     navTitle: "GitHub - Mohamed Irreef",
  //     navPath: "https://github.com/Mohamed-Irreef > E-Commerce",
  //     navLogo: githubLogo,
  //     projImage: proj1,
  //     heading: "StockFlow Warehouse Inventory Management System",
  //     description:
  //       "StockFlow is an intelligent inventory management system that monitors stock levels, predicts demand, automates restocking, and provides real-time analytics to optimize supply chains, reduce waste, and improve business efficiency.",
  //     techStack: "React.js . Node.js . MongoDB",
  //   },
  //   {
  //     id: 2,
  //     githubLink: "https://github.com/Mohamed-Irreef/BlogSphere",
  //     navTitle: "GitHub - Mohamed Irreef",
  //     navPath: "https://github.com/Mohamed-Irreef > BlogSphere",
  //     navLogo: githubLogo,
  //     projImage: proj2,
  //     heading: "BlogSphere - College Blog Platform",
  //     description:
  //       "A full-stack blogging platform where admins can post articles, and students can read, like, and comment on posts. Built for college communities with a simple and interactive UI.",
  //     techStack: "React.js . Express.js . MongoDB",
  //   },
  //   {
  //     id: 3,
  //     githubLink: "https://github.com/Mohamed-Irreef/EduNex",
  //     navTitle: "GitHub - Mohamed Irreef",
  //     navPath: "https://github.com/Mohamed-Irreef > EduNex",
  //     navLogo: githubLogo,
  //     projImage: proj3,
  //     heading: "EduNex Learning Path Dashboard",
  //     description:
  //       "EduNex enables instructors to upload educational resources in multiple formats and track learners' progress using analytics dashboards. Designed to enhance personalized learning experiences.",
  //     techStack: "MERN Stack",
  //   },
  //   {
  //     id: 4,
  //     githubLink: "https://github.com/Mohamed-Irreef/FoodLink",
  //     navTitle: "GitHub - Mohamed Irreef",
  //     navPath: "https://github.com/Mohamed-Irreef > FoodLink",
  //     navLogo: githubLogo,
  //     projImage: proj4,
  //     heading: "FoodLink - Smart Food Redistribution System",
  //     description:
  //       "Connects functional halls with orphanages to manage and distribute excess food efficiently, reducing food waste and supporting those in need through an intelligent backend system.",
  //     techStack: "React.js . Node.js . MongoDB",
  //   },
  //   {
  //     id: 5,
  //     githubLink: "https://github.com/Mohamed-Irreef/Portfolio",
  //     navTitle: "GitHub - Mohamed Irreef",
  //     navPath: "https://github.com/Mohamed-Irreef > Portfolio",
  //     navLogo: githubLogo,
  //     projImage: proj1,
  //     heading: "Personal Portfolio Website",
  //     description:
  //       "A fully responsive personal portfolio website showcasing projects, skills, and achievements, built using modern web technologies and smooth animations.",
  //     techStack: "React.js . CSS . Framer Motion",
  //   },
  //   {
  //     id: 6,
  //     githubLink: "https://github.com/Mohamed-Irreef/Edumate-Clone",
  //     navTitle: "GitHub - Mohamed Irreef",
  //     navPath: "https://github.com/Mohamed-Irreef > Edumate-Clone",
  //     navLogo: githubLogo,
  //     projImage: proj2,
  //     heading: "Edumate Portal Clone",
  //     description:
  //       "A full-stack clone of the Sairam Edumate portal featuring student and staff login, dashboards, and dynamic data management integrated with backend APIs.",
  //     techStack: "React.js . Node.js . MongoDB",
  //   },
  //   {
  //     id: 7,
  //     githubLink: "https://github.com/Mohamed-Irreef/Image-Uploader",
  //     navTitle: "GitHub - Mohamed Irreef",
  //     navPath: "https://github.com/Mohamed-Irreef > Image-Uploader",
  //     navLogo: githubLogo,
  //     projImage: proj3,
  //     heading: "Animated Image Uploader Card",
  //     description:
  //       "A simple image uploader card with an animated upload button, allowing users to upload a profile picture and display their name dynamically.",
  //     techStack: "HTML . CSS . JavaScript",
  //   },
  //   {
  //     id: 8,
  //     githubLink: "https://github.com/Mohamed-Irreef/Course-Cart",
  //     navTitle: "GitHub - Mohamed Irreef",
  //     navPath: "https://github.com/Mohamed-Irreef > Course-Cart",
  //     navLogo: githubLogo,
  //     projImage: proj4,
  //     heading: "Add & Remove Course Cart Items",
  //     description:
  //       "A dynamic JavaScript project allowing users to add or remove course items from a cart with instant updates to the UI.",
  //     techStack: "HTML . CSS . JavaScript",
  //   },
  //   {
  //     id: 9,
  //     githubLink: "https://github.com/Mohamed-Irreef/Filter-List",
  //     navTitle: "GitHub - Mohamed Irreef",
  //     navPath: "https://github.com/Mohamed-Irreef > Filter-List",
  //     navLogo: githubLogo,
  //     projImage: proj1,
  //     heading: "Searchable Filter List of Indian States",
  //     description:
  //       "An interactive list filter built using JavaScript to search and filter through Indian states dynamically as users type.",
  //     techStack: "JavaScript . HTML . CSS",
  //   },
  //   {
  //     id: 10,
  //     githubLink: "https://github.com/Mohamed-Irreef/Ecommerce-Home",
  //     navTitle: "GitHub - Mohamed Irreef",
  //     navPath: "https://github.com/Mohamed-Irreef > Ecommerce-Home",
  //     navLogo: githubLogo,
  //     projImage: proj2,
  //     heading: "E-commerce Website Homepage in React",
  //     description:
  //       "Developed a modern e-commerce homepage with a navigation bar, banners, product showcases, and footer. Includes sign-in, wishlist, and cart features.",
  //     techStack: "React.js . CSS",
  //   },
  //   {
  //     id: 11,
  //     githubLink: "https://github.com/Mohamed-Irreef/AI-ChatBox",
  //     navTitle: "GitHub - Mohamed Irreef",
  //     navPath: "https://github.com/Mohamed-Irreef > AI-ChatBox",
  //     navLogo: githubLogo,
  //     projImage: proj3,
  //     heading: "AI Chat Box using Gemini API",
  //     description:
  //       "A custom-built AI chatbot UI developed in React with Particle.js integration, connected to Guggle's Gemini API for intelligent conversational responses.",
  //     techStack: "React.js . Gemini API",
  //   },
  //   {
  //     id: 12,
  //     githubLink: "https://github.com/Mohamed-Irreef/Device-Control-Dashboard",
  //     navTitle: "GitHub - Mohamed Irreef",
  //     navPath: "https://github.com/Mohamed-Irreef > Device-Control-Dashboard",
  //     navLogo: githubLogo,
  //     projImage: proj4,
  //     heading: "IoT Device Control Dashboard using ESP32",
  //     description:
  //       "A dashboard interface to monitor and control IoT devices connected via ESP32. Includes device info and real-time status updates.",
  //     techStack: "React.js . IoT . ESP32",
  //   },
  //   {
  //     id: 13,
  //     githubLink: "https://github.com/Mohamed-Irreef/NotesApp",
  //     navTitle: "GitHub - Mohamed Irreef",
  //     navPath: "https://github.com/Mohamed-Irreef > NotesApp",
  //     navLogo: githubLogo,
  //     projImage: proj1,
  //     heading: "Quick Notes Application",
  //     description:
  //       "A lightweight notes app for creating, editing, and deleting notes in the browser. Uses localStorage for data persistence.",
  //     techStack: "HTML . CSS . JavaScript",
  //   },
  //   {
  //     id: 14,
  //     githubLink: "https://github.com/Mohamed-Irreef/Weather-App",
  //     navTitle: "GitHub - Mohamed Irreef",
  //     navPath: "https://github.com/Mohamed-Irreef > Weather-App",
  //     navLogo: githubLogo,
  //     projImage: proj2,
  //     heading: "Weather Forecast Web Application",
  //     description:
  //       "Fetches real-time weather data using OpenWeatherMap API, displaying temperature, humidity, and forecast with responsive design.",
  //     techStack: "React.js . API Integration",
  //   },
  //   {
  //     id: 15,
  //     githubLink: "https://github.com/Mohamed-Irreef/ToDo-Manager",
  //     navTitle: "GitHub - Mohamed Irreef",
  //     navPath: "https://github.com/Mohamed-Irreef > ToDo-Manager",
  //     navLogo: githubLogo,
  //     projImage: proj3,
  //     heading: "Smart To-Do Manager",
  //     description:
  //       "An efficient to-do app with category-based task management, local storage, and progress visualization for productivity tracking.",
  //     techStack: "React.js . CSS",
  //   },
  //   {
  //     id: 16,
  //     githubLink: "https://github.com/Mohamed-Irreef/QuizMaster",
  //     navTitle: "GitHub - Mohamed Irreef",
  //     navPath: "https://github.com/Mohamed-Irreef > QuizMaster",
  //     navLogo: githubLogo,
  //     projImage: proj4,
  //     heading: "QuizMaster - Interactive Quiz App",
  //     description:
  //       "An engaging quiz app with multiple-choice questions, timer, score tracking, and performance summary. Built for learners to test their knowledge.",
  //     techStack: "React.js . JavaScript",
  //   },
  // ];
  const projects = [
    {
      id: 1,
      githubLink:
        'https://github.com/Mohamed-Irreef/inventory-management-system',
      navTitle: 'GitHub - Mohamed Irreef',
      navPath:
        'https://github.com/Mohamed-Irreef > StockFlow Inventory Management System',
      navLogo: githubLogo,
      projImage: proj1,
      heading: 'StockFlow Inventory Management System',
      description:
        'A complete warehouse inventory management solution that tracks stock levels, automates restocking, generates reports, and improves supply chain visibility with real-time analytics.',
      techStack: 'React.js . Node.js . MongoDB',
    },
    {
      id: 2,
      githubLink: 'https://github.com/Mohamed-Irreef',
      navTitle: 'GitHub - Mohamed Irreef',
      navPath:
        'https://github.com/Mohamed-Irreef > Guggle-Themed Portfolio Website',
      navLogo: githubLogo,
      projImage: proj2,
      heading: 'Guggle-Themed Portfolio Website',
      description:
        'A uniquely designed personal portfolio inspired by Guggle’s clean UI aesthetics, featuring project showcases, search-style navigation, and a modern interactive layout.',
      techStack: 'React.js . Express.js . MongoDB',
    },
    {
      id: 3,
      githubLink: 'https://github.com/Mohamed-Irreef',
      navTitle: 'GitHub - Mohamed Irreef',
      navPath:
        'https://github.com/Mohamed-Irreef > Hardware Controlling Dashboard',
      navLogo: githubLogo,
      projImage: proj3,
      heading: 'Hardware Controlling Dashboard',
      description:
        'A dashboard interface used to control electronic hardware devices through web commands, offering real-time monitoring, switching, and automation control.',
      techStack: 'MERN Stack',
    },
    {
      id: 4,
      githubLink: 'https://github.com/Mohamed-Irreef',
      navTitle: 'GitHub - Mohamed Irreef',
      navPath:
        'https://github.com/Mohamed-Irreef > University Event Management Portal',
      navLogo: githubLogo,
      projImage: proj4,
      heading: 'University Event Management Portal',
      description:
        'A portal for managing university events, including event registration, scheduling, announcements, and participant dashboards with seamless admin control.',
      techStack: 'React.js . Node.js . MongoDB',
    },
    {
      id: 5,
      githubLink: 'https://github.com/Mohamed-Irreef',
      navTitle: 'GitHub - Mohamed Irreef',
      navPath: 'https://github.com/Mohamed-Irreef > Chess.com Analysis Tool',
      navLogo: githubLogo,
      projImage: proj5,
      heading: 'Chess.com Analysis Tool',
      description:
        'A chess analysis interface that displays game stats, move insights, accuracy tracking, blunder detection, and performance summaries similar to Chess.com analysis.',
      techStack: 'React.js . CSS . Framer Motion',
    },
    {
      id: 6,
      githubLink: 'https://github.com/Mohamed-Irreef',
      navTitle: 'GitHub - Mohamed Irreef',
      navPath: 'https://github.com/Mohamed-Irreef > Learning Management System',
      navLogo: githubLogo,
      projImage: proj6,
      heading: 'Learning Management System',
      description:
        'A complete e-learning platform that supports course uploads, quizzes, student tracking, progress analytics, and instructor dashboards.',
      techStack: 'React.js . Node.js . MongoDB',
    },
    {
      id: 7,
      githubLink: 'https://github.com/Mohamed-Irreef',
      navTitle: 'GitHub - Mohamed Irreef',
      navPath:
        'https://github.com/Mohamed-Irreef > University Management Portal',
      navLogo: githubLogo,
      projImage: proj7,
      heading: 'University Management Portal',
      description:
        'A centralized university portal offering modules for student data, staff dashboards, attendance, marks, and academic information management.',
      techStack: 'HTML . CSS . JavaScript',
    },
    {
      id: 8,
      githubLink: 'https://github.com/Mohamed-Irreef',
      navTitle: 'GitHub - Mohamed Irreef',
      navPath: 'https://github.com/Mohamed-Irreef > E-Commerce Website',
      navLogo: githubLogo,
      projImage: proj8,
      heading: 'E-Commerce Website',
      description:
        'A modern e-commerce frontend with product listings, cart system, filters, and a clean UI optimized for user shopping experience.',
      techStack: 'HTML . CSS . JavaScript',
    },
    {
      id: 9,
      githubLink: 'https://github.com/Mohamed-Irreef',
      navTitle: 'GitHub - Mohamed Irreef',
      navPath:
        'https://github.com/Mohamed-Irreef > Java Socket Programming – Two Client Chat',
      navLogo: githubLogo,
      projImage: proj9,
      heading: 'Java Socket Programming – Two Client Chat',
      description:
        'A simple chat application built using Java socket programming enabling communication between two clients over TCP.',
      techStack: 'JavaScript . HTML . CSS',
    },
    {
      id: 10,
      githubLink: 'https://github.com/Mohamed-Irreef',
      navTitle: 'GitHub - Mohamed Irreef',
      navPath:
        'https://github.com/Mohamed-Irreef > Multi-Client Chat System (Java)',
      navLogo: githubLogo,
      projImage: proj10,
      heading: 'Multi-Client Chat System (Java)',
      description:
        'A Java-based multi-client chat server that handles multiple concurrent users using threads and socket programming.',
      techStack: 'React.js . CSS',
    },
    {
      id: 11,
      githubLink: 'https://github.com/Mohamed-Irreef',
      navTitle: 'GitHub - Mohamed Irreef',
      navPath:
        'https://github.com/Mohamed-Irreef > Zenista – ECE Symposium Event Website',
      navLogo: githubLogo,
      projImage: proj11,
      heading: 'Zenista – ECE Symposium Event Website',
      description:
        'An event website built for the Zenista ECE symposium featuring event listings, registration forms, schedules, and dynamic updates.',
      techStack: 'React.js . Gemini API',
    },
    {
      id: 12,
      githubLink: 'https://github.com/Mohamed-Irreef',
      navTitle: 'GitHub - Mohamed Irreef',
      navPath: 'https://github.com/Mohamed-Irreef > YouTube Clone',
      navLogo: githubLogo,
      projImage: proj12,
      heading: 'YouTube Clone',
      description:
        'A responsive YouTube interface clone featuring video cards, category filters, search UI, and a clean modern layout.',
      techStack: 'React.js . IoT . ESP32',
    },
  ];

  return (
    <div className="projects-page">
      <p className="time-taken">About 16 results (0.52 seconds)</p>

      <div className="proj-comp">
        {projects.map((project) => {
          return (
            <>
              <ProjectComponent project={project} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
