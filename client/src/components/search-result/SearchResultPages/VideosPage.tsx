import React from 'react';
import SearchResultNav from '../SearchResultNav';
import { Link } from 'react-router';
import VideoComponent from '../UiComponents/VideoComponent';

const videos = [
  {
    titleLink: 'www.youtube.com > watch',
    heading: 'MERN Series Episode 1: Introduction to MERN Stack',
    description:
      'A beginner-friendly overview explaining what MongoDB, Express, React, and Node.js are and how they work together.',
    channel: 'EduNex Education',
    videoLinkId: 'kpV4MUJ5jBo',
    time: '17:30',
  },
  {
    titleLink: 'www.youtube.com > watch',
    heading: 'MERN Series Episode 2: Setting Up the Development Environment',
    description:
      'Walkthrough on installing Node.js, MongoDB, and initial setup required for building a MERN application.',
    channel: 'EduNex Education',
    videoLinkId: 'kpV4MUJ5jBo',
    time: '17:30',
  },
  {
    titleLink: 'www.youtube.com > watch',
    heading: 'MERN Series Episode 3: Backend Setup with Node.js & Express',
    description:
      'How to initialize a backend project using Node.js, structure Express routes, and organize folders effectively.',
    channel: 'EduNex Education',
    videoLinkId: 'kpV4MUJ5jBo',
    time: '17:30',
  },
  {
    titleLink: 'www.youtube.com > watch',
    heading: 'MERN Series Episode 4: MongoDB Database Connection',
    description:
      'Connecting Node.js with MongoDB using Mongoose and building schemas for CRUD operations.',
    channel: 'EduNex Education',
    videoLinkId: 'kpV4MUJ5jBo',
    time: '17:30',
  },
  {
    titleLink: 'www.youtube.com > watch',
    heading: 'MERN Series Episode 5: Building REST APIs',
    description:
      'Creating and testing REST API endpoints using Express and Postman for real-world applications.',
    channel: 'EduNex Education',
    videoLinkId: 'kpV4MUJ5jBo',
    time: '17:30',
  },
  {
    titleLink: 'www.youtube.com > watch',
    heading: 'MERN Series Episode 6: React Setup & Folder Structure',
    description:
      'Setting up a React project, understanding folder structure, and exploring React fundamentals.',
    channel: 'EduNex Education',
    videoLinkId: 'kpV4MUJ5jBo',
    time: '17:30',
  },
  {
    titleLink: 'www.youtube.com > watch',
    heading: 'MERN Series Episode 7: React Components & State Management',
    description:
      'Learning components, props, and state, and building interactive UI using React’s state management.',
    channel: 'EduNex Education',
    videoLinkId: 'kpV4MUJ5jBo',
    time: '17:30',
  },
  {
    titleLink: 'www.youtube.com > watch',
    heading: 'MERN Series Episode 8: Integrating React with Backend APIs',
    description:
      'Connecting React to Express APIs using Axios/Fetch and displaying backend data in the UI.',
    channel: 'EduNex Education',
    videoLinkId: 'kpV4MUJ5jBo',
    time: '17:30',
  },
  {
    titleLink: 'www.youtube.com > watch',
    heading: 'MERN Series Episode 9: Building CRUD Application UI',
    description:
      'Creating UI components for creating, updating, and deleting data while interacting with the backend.',
    channel: 'EduNex Education',
    videoLinkId: 'kpV4MUJ5jBo',
    time: '17:30',
  },
  {
    titleLink: 'www.youtube.com > watch',
    heading: 'MERN Series Episode 10: Deploying Full MERN Application',
    description:
      'Deploying MERN projects using Render, Vercel, and MongoDB Atlas with step-by-step guidance.',
    channel: 'EduNex Education',
    videoLinkId: 'kpV4MUJ5jBo',
    time: '17:30',
  },
];

const VideosPage = () => {
  return (
    <div className="video-page-container">
      {videos.map((video) => {
        return (
          <>
            <VideoComponent video={video} />
          </>
        );
      })}
    </div>
  );
};

export default VideosPage;
