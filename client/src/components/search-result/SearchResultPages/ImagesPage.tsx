import React, { useState } from 'react';

import myprofile from '../../../assets/myprofile.jpg';
import img1 from '../../../assets/img1.jpeg';
import img2 from '../../../assets/img2.jpeg';
import img3 from '../../../assets/img3.png';
import img5 from '../../../assets/img5.jpg';
// removed unused imports: SearchResultNav, ImageSection

import image2 from '../../../assets/linkedin.png';
import ImageComponent from './imagePages/ImageComponent';

import project1 from '../../../assets/imagePage/projectsImg/project1.png';
import project2 from '../../../assets/imagePage/projectsImg/project2.png';
import project3 from '../../../assets/imagePage/projectsImg/project3.png';
import project4 from '../../../assets/imagePage/projectsImg/project4.png';
import project5 from '../../../assets/imagePage/projectsImg/project5.png';
import project6 from '../../../assets/imagePage/projectsImg/project6.png';
import project7 from '../../../assets/imagePage/projectsImg/project7.png';
import project8 from '../../../assets/imagePage/projectsImg/project8.png';
import project9 from '../../../assets/imagePage/projectsImg/project9.png';
import project10 from '../../../assets/imagePage/projectsImg/project10.png';

import project11 from '../../../assets/imagePage/projectsImg/project11.png';
import project12 from '../../../assets/imagePage/projectsImg/project12.png';
import project13 from '../../../assets/imagePage/projectsImg/project13.png';
import project14 from '../../../assets/imagePage/projectsImg/project14.png';
import project15 from '../../../assets/imagePage/projectsImg/project15.png';
import project16 from '../../../assets/imagePage/projectsImg/project16.png';
import project17 from '../../../assets/imagePage/projectsImg/project17.png';
import project18 from '../../../assets/imagePage/projectsImg/project18.png';
import project19 from '../../../assets/imagePage/projectsImg/project19.png';
import project20 from '../../../assets/imagePage/projectsImg/project20.png';

import project21 from '../../../assets/imagePage/projectsImg/project21.png';
import project22 from '../../../assets/imagePage/projectsImg/project22.png';
import project23 from '../../../assets/imagePage/projectsImg/project23.png';
import project24 from '../../../assets/imagePage/projectsImg/project24.png';
import project25 from '../../../assets/imagePage/projectsImg/project25.png';

import project26 from '../../../assets/imagePage/projectsImg/project26.png';
import project27 from '../../../assets/imagePage/projectsImg/project27.png';
// project28.png is missing in the assets folder; fallback to project29
import project28 from '../../../assets/imagePage/projectsImg/project29.png';

import project29 from '../../../assets/imagePage/projectsImg/project29.png';
import project30 from '../../../assets/imagePage/projectsImg/project30.png';

import project31 from '../../../assets/imagePage/projectsImg/project31.png';
import project32 from '../../../assets/imagePage/projectsImg/project32.png';
import project33 from '../../../assets/imagePage/projectsImg/project33.png';
import project34 from '../../../assets/imagePage/projectsImg/project34.png';
import project35 from '../../../assets/imagePage/projectsImg/project35.png';
import project36 from '../../../assets/imagePage/projectsImg/project36.png';
import project37 from '../../../assets/imagePage/projectsImg/project37.png';
import project38 from '../../../assets/imagePage/projectsImg/project38.png';
import project39 from '../../../assets/imagePage/projectsImg/project39.png';
import project40 from '../../../assets/imagePage/projectsImg/project40.png';

import project41 from '../../../assets/imagePage/projectsImg/project41.png';
import project42 from '../../../assets/imagePage/projectsImg/project42.png';
import project43 from '../../../assets/imagePage/projectsImg/project43.png';
import project44 from '../../../assets/imagePage/projectsImg/project44.png';
import project45 from '../../../assets/imagePage/projectsImg/project45.png';

import intern1 from '../../../assets/imagePage/internshipsImg/internship1.jpeg';
import intern2 from '../../../assets/imagePage/internshipsImg/internship2.jpeg';
import intern3 from '../../../assets/imagePage/internshipsImg/internship3.jpeg';
import intern4 from '../../../assets/imagePage/internshipsImg/internship4.jpeg';
import intern5 from '../../../assets/imagePage/internshipsImg/internship5.jpeg';
import intern6 from '../../../assets/imagePage/internshipsImg/internship6.jpeg';
import intern7 from '../../../assets/imagePage/internshipsImg/internship7.jpeg';
import intern8 from '../../../assets/imagePage/internshipsImg/internship8.jpeg';
import intern9 from '../../../assets/imagePage/internshipsImg/internship9.png';
import intern10 from '../../../assets/imagePage/internshipsImg/internship10.png';

import me1 from '../../../assets/imagePage/profileImages/me1.jpeg';
import me2 from '../../../assets/imagePage/profileImages/me2.jpg';
import me3 from '../../../assets/imagePage/profileImages/me3.jpg';
import me4 from '../../../assets/imagePage/profileImages/me4.jpg';
import me5 from '../../../assets/imagePage/profileImages/me5.jpg';
import me7 from '../../../assets/imagePage/profileImages/me7.jpeg';
import me9 from '../../../assets/imagePage/profileImages/me9.jpeg';
import me11 from '../../../assets/imagePage/profileImages/me11.jpeg';

import edu1 from '../../../assets/imagePage/educationImages/edu1.jpg';
import edu2 from '../../../assets/imagePage/educationImages/edu2.jpg';
import edu3 from '../../../assets/imagePage/educationImages/edu3.jpg';
import edu4 from '../../../assets/imagePage/educationImages/edu4.jpg';

import certificate1 from '../../../assets/imagePage/certificateImages/certificate1.jpeg';
import certificate2 from '../../../assets/imagePage/certificateImages/certificate2.jpeg';
import certificate3 from '../../../assets/imagePage/certificateImages/certificate3.jpeg';
import certificate4 from '../../../assets/imagePage/certificateImages/certificate4.jpeg';
import certificate5 from '../../../assets/imagePage/certificateImages/certificate5.jpeg';
import certificate6 from '../../../assets/imagePage/certificateImages/certificate6.jpeg';
import certificate7 from '../../../assets/imagePage/certificateImages/certificate7.jpeg';
import certificate8 from '../../../assets/imagePage/certificateImages/certificate8.jpeg';
import certificate9 from '../../../assets/imagePage/certificateImages/certificate9.jpeg';
import certificate10 from '../../../assets/imagePage/certificateImages/certificate10.jpeg';

import certificate11 from '../../../assets/imagePage/certificateImages/certificate11.jpeg';
import certificate12 from '../../../assets/imagePage/certificateImages/certificate12.jpeg';
import certificate13 from '../../../assets/imagePage/certificateImages/certificate13.jpeg';
import certificate14 from '../../../assets/imagePage/certificateImages/certificate14.jpeg';
import certificate15 from '../../../assets/imagePage/certificateImages/certificate15.jpeg';
import certificate16 from '../../../assets/imagePage/certificateImages/certificate16.jpeg';
import certificate17 from '../../../assets/imagePage/certificateImages/certificate17.jpeg';
import certificate18 from '../../../assets/imagePage/certificateImages/certificate18.jpeg';
import certificate19 from '../../../assets/imagePage/certificateImages/certificate19.jpeg';
import certificate20 from '../../../assets/imagePage/certificateImages/certificate20.jpeg';

import certificate21 from '../../../assets/imagePage/certificateImages/certificate21.jpeg';
import certificate22 from '../../../assets/imagePage/certificateImages/certificate22.jpeg';
import certificate23 from '../../../assets/imagePage/certificateImages/certificate23.jpeg';

const ImagesPage = () => {
  const [imageTab, setImageTab] = useState('all');
  const imageNavTab = [
    {
      id: 0,
      image: img2,
      title: 'All',
      tab: 'all',
    },
    {
      id: 1,
      image: myprofile,
      title: 'My Profile',
      tab: 'myprofile',
    },
    {
      id: 2,
      image: img1,
      title: 'Education',
      tab: 'education',
    },
    {
      id: 3,
      image: img2,
      title: 'Projects',
      tab: 'projects',
    },
    {
      id: 4,
      image: img3,
      title: 'Internships',
      tab: 'internships',
    },

    {
      id: 6,
      image: img5,
      title: 'Certifications',
      tab: 'certificates',
    },
    {
      id: 7,
      image: img1,
      title: 'Favourites',
      tab: 'favourites',
    },
  ];

  // const images=[...]

  const images = [
    {
      id: 1,
      image: project1,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 2,
      image: project2,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 3,
      image: project3,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 4,
      image: project4,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 5,
      image: project5,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 6,
      image: project6,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 7,
      image: project7,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 8,
      image: project8,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 9,
      image: project9,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 10,
      image: project10,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },

    {
      id: 11,
      image: project11,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 12,
      image: project12,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 13,
      image: project13,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 14,
      image: project14,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 15,
      image: project15,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 16,
      image: project16,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 17,
      image: project17,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 18,
      image: project18,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 19,
      image: project19,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 20,
      image: project20,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },

    {
      id: 21,
      image: project21,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 22,
      image: project22,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 23,
      image: project23,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 24,
      image: project24,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 25,
      image: project25,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 26,
      image: project26,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 27,
      image: project27,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 28,
      image: project28,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 29,
      image: project29,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 30,
      image: project30,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },

    {
      id: 31,
      image: project31,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 32,
      image: project32,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 33,
      image: project33,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 34,
      image: project34,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 35,
      image: project35,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 36,
      image: project36,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 37,
      image: project37,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 38,
      image: project38,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 39,
      image: project39,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 40,
      image: project40,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },

    {
      id: 41,
      image: project41,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 42,
      image: project42,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 43,
      image: project43,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 44,
      image: project44,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },
    {
      id: 45,
      image: project45,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Web Development Basics. This is my first blog post',
      category: ['all', 'projects'],
    },

    {
      id: 46,
      image: intern1,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Electrnics Internship. NanoTechnologies,porur,chennai',
      category: ['all', 'internships'],
    },
    {
      id: 47,
      image: intern2,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Electrnics Internship. NanoTechnologies,porur,chennai',
      category: ['all', 'internships'],
    },
    {
      id: 48,
      image: intern3,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Electrnics Internship. NanoTechnologies,porur,chennai',
      category: ['all', 'internships'],
    },
    {
      id: 49,
      image: intern4,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Electrnics Internship. NanoTechnologies,porur,chennai',
      category: ['all', 'internships'],
    },
    {
      id: 50,
      image: intern5,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Electrnics Internship. NanoTechnologies,porur,chennai',
      category: ['all', 'internships'],
    },
    {
      id: 51,
      image: intern6,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Electrnics Internship. NanoTechnologies,porur,chennai',
      category: ['all', 'internships'],
    },
    {
      id: 52,
      image: intern7,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Electrnics Internship. NanoTechnologies,porur,chennai',
      category: ['all', 'internships'],
    },
    {
      id: 53,
      image: intern8,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Electrnics Internship. NanoTechnologies,porur,chennai',
      category: ['all', 'internships'],
    },
    {
      id: 54,
      image: intern9,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Fullstack Dev Intern. Big Bucks Innovation',
      category: ['all', 'internships'],
    },
    {
      id: 55,
      image: intern10,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Fullstack Dev Intern. Vulture Lines Tech Management',
      category: ['all', 'internships'],
    },

    {
      id: 56,
      image: me1,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Mohamed Irreef S - Personal Photo',
      category: ['all', 'myprofile'],
    },
    {
      id: 57,
      image: me2,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Mohamed Irreef S - Personal Photo',
      category: ['all', 'myprofile'],
    },
    {
      id: 58,
      image: me3,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Mohamed Irreef S - Personal Photo',
      category: ['all', 'myprofile'],
    },
    {
      id: 59,
      image: me4,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Mohamed Irreef S - Personal Photo',
      category: ['all', 'myprofile'],
    },
    {
      id: 60,
      image: me5,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Mohamed Irreef S - Personal Photo',
      category: ['all', 'myprofile'],
    },
    // {
    //   id: 61,
    //   image: me6,
    //   imageNavTitle: "Dev Communinty",
    //   imageNavLogo: image2,
    //   imageHeading: "Mohamed Irreef S - Personal Photo",
    //   category: ["all", "myprofile"],
    // },
    {
      id: 62,
      image: me7,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Mohamed Irreef S - Personal Photo',
      category: ['all', 'myprofile'],
    },
    // {
    //   id: 63,
    //   image: me8,
    //   imageNavTitle: "Dev Communinty",
    //   imageNavLogo: image2,
    //   imageHeading: "Mohamed Irreef S - Personal Photo",
    //   category: ["all", "myprofile"],
    // },
    {
      id: 64,
      image: me9,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Mohamed Irreef S - Personal Photo',
      category: ['all', 'myprofile'],
    },
    // {
    //   id: 65,
    //   image: me10,
    //   imageNavTitle: "Dev Communinty",
    //   imageNavLogo: image2,
    //   imageHeading: "Mohamed Irreef S - Personal Photo",
    //   category: ["all", "myprofile"],
    // },
    {
      id: 66,
      image: me11,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Mohamed Irreef S - Personal Photo',
      category: ['all', 'myprofile'],
    },
    // {
    //   id: 67,
    //   image: me12,
    //   imageNavTitle: "Dev Communinty",
    //   imageNavLogo: image2,
    //   imageHeading: "Mohamed Irreef S - Personal Photo",
    //   category: ["all", "myprofile"],
    // },
    // {
    //   id: 68,
    //   image: me13,
    //   imageNavTitle: "Dev Communinty",
    //   imageNavLogo: image2,
    //   imageHeading: "Mohamed Irreef S - Personal Photo",
    //   category: ["all", "myprofile"],
    // },

    {
      id: 69,
      image: edu1,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Zigma Matriculation Higher Secondqary School.',
      category: ['all', 'education'],
    },
    {
      id: 70,
      image: edu2,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Zigma Matriculation Higher Secondqary School.',
      category: ['all', 'education'],
    },
    {
      id: 71,
      image: edu3,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Sri Sairam Engineering College,chennai.',
      category: ['all', 'education'],
    },
    {
      id: 72,
      image: edu4,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Sri Sairam Engineering College,chennai.',
      category: ['all', 'education'],
    },
    {
      id: 73,
      image: certificate1,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Awards and Achievements - Mohamed Irreef S',
      category: ['all', 'certificates'],
    },
    {
      id: 74,
      image: certificate2,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Awards and Achievements - Mohamed Irreef S',
      category: ['all', 'certificates'],
    },
    {
      id: 75,
      image: certificate3,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Awards and Achievements - Mohamed Irreef S',
      category: ['all', 'certificates'],
    },
    {
      id: 76,
      image: certificate4,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Awards and Achievements - Mohamed Irreef S',
      category: ['all', 'certificates'],
    },
    {
      id: 77,
      image: certificate5,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Awards and Achievements - Mohamed Irreef S',
      category: ['all', 'certificates'],
    },
    {
      id: 78,
      image: certificate6,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Awards and Achievements - Mohamed Irreef S',
      category: ['all', 'certificates'],
    },
    {
      id: 79,
      image: certificate7,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Awards and Achievements - Mohamed Irreef S',
      category: ['all', 'certificates'],
    },
    {
      id: 80,
      image: certificate8,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Awards and Achievements - Mohamed Irreef S',
      category: ['all', 'certificates'],
    },
    {
      id: 81,
      image: certificate9,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Awards and Achievements - Mohamed Irreef S',
      category: ['all', 'certificates'],
    },
    {
      id: 82,
      image: certificate10,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Awards and Achievements - Mohamed Irreef S',
      category: ['all', 'certificates'],
    },

    {
      id: 83,
      image: certificate11,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Awards and Achievements - Mohamed Irreef S',
      category: ['all', 'certificates'],
    },
    {
      id: 84,
      image: certificate12,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Awards and Achievements - Mohamed Irreef S',
      category: ['all', 'certificates'],
    },
    {
      id: 85,
      image: certificate13,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Awards and Achievements - Mohamed Irreef S',
      category: ['all', 'certificates'],
    },
    {
      id: 86,
      image: certificate14,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Awards and Achievements - Mohamed Irreef S',
      category: ['all', 'certificates'],
    },
    {
      id: 87,
      image: certificate15,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Awards and Achievements - Mohamed Irreef S',
      category: ['all', 'certificates'],
    },
    {
      id: 88,
      image: certificate16,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Awards and Achievements - Mohamed Irreef S',
      category: ['all', 'certificates'],
    },
    {
      id: 89,
      image: certificate17,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Awards and Achievements - Mohamed Irreef S',
      category: ['all', 'certificates'],
    },
    {
      id: 90,
      image: certificate18,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Awards and Achievements - Mohamed Irreef S',
      category: ['all', 'certificates'],
    },
    {
      id: 91,
      image: certificate19,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Awards and Achievements - Mohamed Irreef S',
      category: ['all', 'certificates'],
    },
    {
      id: 92,
      image: certificate20,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Awards and Achievements - Mohamed Irreef S',
      category: ['all', 'certificates'],
    },

    {
      id: 93,
      image: certificate21,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Awards and Achievements - Mohamed Irreef S',
      category: ['all', 'certificates'],
    },
    {
      id: 94,
      image: certificate22,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Awards and Achievements - Mohamed Irreef S',
      category: ['all', 'certificates'],
    },
    {
      id: 95,
      image: certificate23,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Awards and Achievements - Mohamed Irreef S',
      category: ['all', 'certificates'],
    },

    {
      id: 96,
      image: certificate1,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Awards and Achievements - Mohamed Irreef S',
      category: ['all', 'favourites'],
    },
    {
      id: 97,
      image: certificate2,
      imageNavTitle: 'Dev Communinty',
      imageNavLogo: image2,
      imageHeading: 'Awards and Achievements - Mohamed Irreef S',
      category: ['all', 'favourites'],
    },
  ];

  return (
    <>
      <div className="images-page">
        <div className="image-nav-tab">
          {imageNavTab.map((navTab) => {
            return (
              <div
                className="image-tab-box"
                key={navTab.id}
                onClick={() => {
                  setImageTab(navTab.tab);
                }}
              >
                <div className="image-tab-box-image">
                  <img src={navTab.image} alt={navTab.title} />
                </div>
                <div className="image-tab-box-title">
                  <span>{navTab.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="image-main-container">
        <ImageComponent images={images} imageTab={imageTab} />
      </div>
    </>
  );
};

export default ImagesPage;
