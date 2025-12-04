import React, { useEffect, useState } from 'react';
import profile1 from '../../../assets/profile1.jpg';
import profile2 from '../../../assets/profile2.jpg';
import profile3 from '../../../assets/myprofile.jpg';
import linkedin from '../../../assets/linkedin.png';
import github from '../../../assets/github.png';
import insta from '../../../assets/insta.jpeg';
import facebook from '../../../assets/facebook.png';
import linkedinCircle from '../../../assets/linkedin-circle.png';

import skills from '../../../assets/skills.png';
import projects from '../../../assets/projects.png';
import chess from '../../../assets/chess.png';
import portfolio from '../../../assets/portfolio.jpg';
import wikipedia from '../../../assets/wikipedia.png';
import gmail from '../../../assets/gmail.png';
import WebList from '../UiComponents/WebList';
import Accordion from '../UiComponents/Accordion';

import HirePopup from '../../search-page/HirePopup';
import GeminiAI from '../UiComponents/GeminiAI';

const AboutPage = () => {
  const [age, setAge] = useState();
  const [showHirePopup, setShowHirePopup] = useState(false);
  function ageCalculator() {
    const d = new Date();
    setAge(d.getFullYear() - 2004);
  }
  useEffect(() => {
    ageCalculator();
  }, []);

  const data = [
    {
      logo: wikipedia,
      navTitle1: 'Wikipedia - Mohamed Irreef S',
      navTitle2: 'https://en.wikipedia.org › wiki › Mohamed_Ireef_S',
      heading: 'Mohamed Irreef S - MERN Stack Developer',
      para: 'Mohamed Irreef S is an Indian full-stack web developer specializing in the MERN stack and Spring Boot. Known for building scalable web applications, REST APIs, and real-time dashboards. Hackathon winner recognized for innovation in upcycling plastic waste to graphene.',
      link: 'https://en.wikipedia.org/wiki/Mohamed_Ireef_S',
    },
    {
      logo: skills,
      navTitle1: 'Professional Skills - Mohamed Irreef',
      navTitle2: 'https://mohamedireef.dev › skills',
      heading: 'Technical Skills and Expertise',
      para: 'Proficient in JavaScript (ES6+), TypeScript, and Java. Frontend experience in React.js, Tailwind CSS, and Material UI. Backend expertise in Node.js, Express.js, and Spring Boot. Skilled in SQL and MongoDB database design, Git version control, and REST API development.',
      link: 'https://github.com/Mohamed-Irreef',
    },
    {
      logo: projects,
      navTitle1: 'Projects - Mohamed Irreef',
      navTitle2: 'https://mohamedireef.dev › projects',
      heading: 'Featured Projects and Case Studies',
      para: 'Developed an Inventory Management System with real-time stock tracking, expiry alerts, and warehouse mapping using MERN stack. Created an Event Management Portal for educational institutions with Chart.js analytics and multi-role access control.',
      link: 'https://github.com/Mohamed-Irreef',
    },
    {
      logo: linkedinCircle,
      navTitle1: 'LinkedIn - Mohamed Irreef S',
      navTitle2: 'https://linkedin.com › in › mohamed-ireef-s-23',
      heading: 'Mohamed Irreef S - Certified MERN Stack Developer',
      para: 'Aspiring software engineer passionate about full-stack development, cloud integration, and scalable system design. Currently pursuing BE in ECE at Sri Sairam Engineering College, Chennai.',
      link: 'https://www.linkedin.com/in/-mohamed-ireef-s-23-/',
    },
    {
      logo: github,
      navTitle1: 'GitHub - Mohamed-Irreef',
      navTitle2: 'https://github.com › Mohamed-Irreef',
      heading: 'Mohamed-Irreef (GitHub Profile)',
      para: 'Open-source enthusiast sharing personal and collaborative projects. Repositories include full-stack MERN applications, Spring Boot REST APIs, and UI experiments built with React and Tailwind.',
      link: 'https://github.com/Mohamed-Irreef',
    },
    {
      logo: insta,
      navTitle1: 'Instagram - Mohamed Irreef',
      navTitle2: 'https://instagram.com › scratch_2_deploy',
      heading: 'Mohamed Irreef (@scratch_2_deploy)',
      para: 'Capturing the developer journey — tech, creativity, and life behind the code. Follow for design ideas, web dev tips, and personal moments.',
      link: 'https://www.instagram.com/scratch_2_deploy?igsh=c2J2N3JybjFpdmFz',
    },
    {
      logo: chess,
      navTitle1: 'Chess.com - Mohamed Irreef',
      navTitle2: 'https://chess.com › member › mohamed_ireef',
      heading: 'Mohamed Irreef S - Chess.com Profile',
      para: 'A passionate chess learner striving for strategic mastery. Aiming to sharpen problem-solving skills on the chessboard — one move at a time.',
      link: 'https://www.chess.com/member/gm-irreef',
    },
    {
      logo: gmail,
      navTitle1: 'Mail - Mohamed Irreef',
      navTitle2: 'mailto:mdirreef@gmail.com',
      heading: 'Contact Mohamed Irreef S via Email',
      para: 'For collaboration, freelance projects, or networking opportunities, reach out directly at mdirreef@gmail.com. Open to web app development, UI design, and team projects.',
      link: 'mailto:mdirreef@gmail.com',
    },
    {
      logo: portfolio,
      navTitle1: 'Personal Portfolio - Mohamed Irreef',
      navTitle2: 'https://connectin-mdirreef.netlify.app/',
      heading: 'Personal Portfolio Website',
      para: 'A personal Guggle-style portfolio featuring modern animations, search-based navigation, and responsive UI. Built using React, Tailwind, and Framer Motion to simulate a search engine experience.',
      link: 'https://connectin-mdirreef.netlify.app/',
    },
  ];

  const accordianItems = [
    {
      title: 'Who is Mohamed Irreef S?',
      content:
        'Mohamed Irreef S is a certified MERN Stack Developer and software engineer skilled in building scalable full-stack applications using React, Node.js, Express, MongoDB, and Spring Boot. He has worked on real-time dashboards, REST APIs, and dynamic UI systems with a focus on clean and efficient code.',
    },
    {
      title: 'What skills does Mohamed Irreef have?',
      content:
        'He is proficient in JavaScript (ES6+), TypeScript, and Java. His frontend expertise includes React.js, Tailwind CSS, and Material UI. On the backend, he is skilled in Node.js, Express.js, and Spring Boot. He also has solid database experience with MongoDB and SQL, and uses Git and GitHub for version control.',
    },
    {
      title: 'What projects has he worked on?',
      content:
        'Notable projects include an Inventory Management System with stock tracking, expiry alerts, and warehouse mapping; and an Event Management Portal designed for colleges with real-time analytics and role-based access. Both built with the MERN stack and modern UI frameworks.',
    },
    {
      title: 'Where can I find Mohamed Irreef on LinkedIn?',
      content:
        'You can connect with him on LinkedIn at https://www.linkedin.com/in/mohamed-ireef-s-23/. He frequently shares updates about his projects, learning journey, and development experiences.',
    },
    {
      title: 'Does he contribute to open-source projects?',
      content:
        "Yes, Mohamed actively shares his work on GitHub under the username 'Mohamed-Irreef'. His repositories include full-stack web apps, RESTful APIs, and UI component libraries created using React and Node.js.",
    },
    {
      title: 'Is Mohamed Irreef active on social platforms?',
      content:
        'Yes, he shares creative insights and personal moments on Instagram under the handle @scratch_2_deploy. His feed includes web design ideas, coding snippets, and motivational posts for developers.',
    },
    {
      title: 'Is Mohamed Irreef interested in chess?',
      content:
        'Absolutely! He is an active chess.com player who enjoys using chess to sharpen problem-solving and strategic thinking. His profile reflects a beginner’s determination to one day reach grandmaster level.',
    },
    {
      title: 'How can I contact Mohamed Irreef?',
      content:
        'You can reach him directly by email at mdirreef@gmail.com. He usually responds within 24 hours for collaboration, freelance opportunities, or tech-related discussions.',
    },
  ];

  return (
    <div className="about-page">
      <div className="about-container">
        <p className="time-taken">About 26 results (0.45 seconds)</p>
        <div className="about-title">
          <h3>Mohamed Irreef</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span>Full Stack Developer</span>
            <button className="hire-cta" onClick={() => setShowHirePopup(true)}>
              Hire Me
            </button>
          </div>
        </div>
        {/* AI CALL */}
        {/* <GeminiAI/> */}
        <div className="top-grid">
          <div className="photo-grid-container">
            <div className="left-photo-grids">
              <img src={profile1} alt="" />
            </div>

            <div className="right-photo-grids">
              <div className="right1-photo-grid">
                <img src={profile2} alt="" />
              </div>
              <div className="right2-photo-grid">
                <img src={profile3} alt="" />
              </div>
              {showHirePopup && (
                <HirePopup
                  recipientEmail={'mdirreef@gmail.com'}
                  onClose={() => setShowHirePopup(false)}
                />
              )}
            </div>
          </div>

          <div className="addition-grid-container">
            <div className="add-grid-top">
              <div className="add-grid" style={{ padding: '20px' }}>
                <span>Age</span>
                <div className="">
                  <p
                    className="age-dynamic"
                    style={{
                      marginTop: '40px',
                      fontSize: '17px',
                      fontWeight: '400',
                    }}
                  >
                    {age} years
                  </p>
                  <p
                    className="dob"
                    style={{ marginTop: '2px', fontSize: '12px' }}
                  >
                    16 March 2004
                  </p>
                </div>
              </div>

              <div className="add-grid add-grid-box">
                <div className="add-grid-left">
                  <div className="add-grid-left-nav">
                    <img src={linkedin} alt="" />
                    <p>Linkedin</p>
                  </div>

                  <div className="add-grid-left-content">
                    <p className="add-grid-left-name">Mohamed Irreef</p>
                    <span>Full Stack Developer</span>
                    <span
                      style={{
                        color: '#5a5a5aff',
                        fontSize: '12px',
                        marginTop: '2px',
                      }}
                    >
                      2.5k+ followers
                    </span>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/-mohamed-ireef-s-23-/"
                    className="add-grid-left-profile"
                  >
                    Linkedin Profile
                  </a>
                </div>
                <div className="add-grid-right">
                  <img src={profile1} alt="" />
                </div>
              </div>
            </div>

            <div className="add-grid-bottom">
              <div className="add-grid" style={{ padding: '20px' }}>
                <span
                  style={{
                    marginTop: '40px',
                    fontSize: '17px',
                    fontWeight: '400',
                  }}
                >
                  Education
                </span>
                <br /> <br />
                <a
                  href="https://sairam.edu.in/"
                  className="anchor"
                  style={{ marginTop: '10px', fontSize: '14px' }}
                >
                  Sri Sairam Engineering College
                </a>
                <p style={{ marginTop: '2px', fontSize: '10px' }}>
                  BE Electronics And Communication Engineering
                </p>
                <p style={{ marginTop: '2px', fontSize: '14px' }}>
                  2022 - 2026
                </p>
              </div>
              <div className="add-grid add-grid-box">
                <div className="add-grid-left">
                  <div className="add-grid-left-nav">
                    <img src={github} alt="" />
                    <p>GitHub</p>
                  </div>

                  <div className="add-grid-left-content">
                    <p className="add-grid-left-name">Mohamed Irreef</p>
                    <span>Full Stack Developer</span>
                    <span
                      style={{
                        color: '#5a5a5aff',
                        fontSize: '12px',
                        marginTop: '2px',
                      }}
                    >
                      30+ followers
                    </span>
                  </div>
                  <a
                    href="https://github.com/Mohamed-Irreef"
                    className="add-grid-left-profile"
                  >
                    GitHub Profile
                  </a>
                </div>
                <div className="add-grid-right">
                  <img src={profile3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-border"></div>

        <div className="about-contents-container">
          {/* Main Page Left Side Content */}
          <div className="about-page-left-content">
            <WebList data={data[0]} />

            <Accordion accordianItems={accordianItems} />

            <WebList data={data.slice(1)} />
            {/* <WebList data={data}/> */}
          </div>

          <div className="about-page-right-content">
            <div className="about-page-right-content-border">
              <p className="about-page-right-content-title">About</p>
              <p className="about-page-right-content-para">
                Mohamed Irreef is a certified full-stack web developer,
                educator, and innovator passionate about modern web
                technologies. Known for his expertise in MERN stack development
                (MongoDB, Express.js, React.js, Node.js), he also works with
                Java and MySQL to build scalable backend systems. He has also
                developed several impactful projects, including LMS Platform,
                StockFlow Warehouse Management System, and an E-commerce
                platform for local shopkeepers. He is also an avid chess player,
                known for his strategic thinking and problem-solving skills.{' '}
                <a className="anchor" href="">
                  wikipedia
                </a>
              </p>
              <ul className="about-page-right-content-para-list">
                <li>
                  <b>Born:</b> 16 March 2004 (age {age} years), Tuticorin
                </li>
                <li>
                  <b>College:</b>{' '}
                  <a className="anchor" href="https://sairam.edu.in/">
                    Sri Sairam Engineering College
                  </a>
                </li>
                <li>
                  <b>Department:</b> Electronics And Communication Engineering
                </li>
                <li>
                  <b>CGPA:</b> 8.11 &nbsp; &nbsp; <b>Batch:</b> 2022-2026
                </li>
                <li>
                  <b>School:</b>
                  <a
                    className="anchor"
                    href="https://www.justdial.com/Chennai/Zigma-Matriculation-School-Near-Super-Auto-Pvt-Ltd-Medavakkam/044P4003472_BZDET"
                  >
                    Zigma Matriculation Higher Secondary School
                  </a>
                </li>
                <li>
                  <b>HSC:</b> 90.5% &nbsp; &nbsp; <b>SSLC:</b> 85%
                </li>
              </ul>

              <div className="about-border"></div>
              <div className="about-page-right-content-para-profile">
                <p
                  className="about-page-right-content-title"
                  style={{ marginTop: '20px' }}
                >
                  Profiles
                </p>

                <div className="about-page-right-content-profile-container">
                  <a
                    className="anchor"
                    href="https://www.linkedin.com/in/-mohamed-ireef-s-23-/"
                  >
                    <div className="about-page-right-content-profile-box">
                      <div className="profile-box-logo">
                        <img src={linkedinCircle} alt="" />
                      </div>
                      <span>Linkedin</span>
                    </div>
                  </a>
                  <a
                    className="anchor"
                    href="https://github.com/Mohamed-Irreef"
                  >
                    <div className="about-page-right-content-profile-box">
                      <div className="profile-box-logo">
                        <img src={github} alt="" />
                      </div>
                      <span>GitHub</span>
                    </div>
                  </a>
                  <a
                    className="anchor"
                    href="https://www.instagram.com/scratch_2_deploy?igsh=c2J2N3JybjFpdmFz"
                  >
                    <div className="about-page-right-content-profile-box">
                      <div className="profile-box-logo">
                        <img src={insta} alt="" />
                      </div>
                      <span>Instagram</span>
                    </div>
                  </a>
                  <a
                    className="anchor"
                    href="https://www.facebook.com/profile.php?id=61577158546081"
                  >
                    <div className="about-page-right-content-profile-box">
                      <div className="profile-box-logo">
                        <img src={facebook} alt="" />
                      </div>
                      <span>Facebook</span>
                    </div>
                  </a>
                </div>
              </div>
              {/* <div className="about-border"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
