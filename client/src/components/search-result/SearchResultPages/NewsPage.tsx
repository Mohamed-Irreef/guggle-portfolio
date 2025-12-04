import BlogCard from '../UiComponents/BlogCard';
import blogLogo from '../../../assets/blog.png';
import blogImage from '../../../assets/img8.jpeg';
import img1 from '../../../assets/img1.jpeg';
import img2 from '../../../assets/img2.jpeg';
import img3 from '../../../assets/img3.png';
import img4 from '../../../assets/img4.jpg';
import img5 from '../../../assets/img5.jpg';
import img6 from '../../../assets/img6.jpg';
import img7 from '../../../assets/img7.jpeg';
import img8 from '../../../assets/img8.jpeg';
const blogList = [
  {
    id: 0,
    titleLogo: blogLogo,
    navTitle: 'EduNex Blog',
    heading:
      '12 Top Applications Written in Node.js - Examples from Big Companies',
    para: 'There are many more big players using Node.js, eg Microsoft, Guggle, Yahoo, Mozilla or Github. Technology creates countless possibilities in development.',
    postImage: blogImage,
    link: '',
    date: '5 Sept 2025',
  },
  {
    id: 1,
    titleLogo: blogLogo,
    navTitle: 'EduNex Blog',
    heading: 'The Future of JavaScript: Trends to Watch in 2025',
    para: 'JavaScript continues to evolve with new frameworks, features, and best practices shaping the web development landscape.',
    postImage: img1,
    link: '',
    date: '10 Sept 2025',
  },
  {
    id: 2,
    titleLogo: blogLogo,
    navTitle: 'EduNex Blog',
    heading: 'Understanding React 19 and Its New Features',
    para: 'React 19 introduces better performance, improved server components, and developer-friendly features.',
    postImage: img2,
    link: '',
    date: '12 Sept 2025',
  },
  {
    id: 3,
    titleLogo: blogLogo,
    navTitle: 'EduNex Blog',
    heading: 'Mastering MongoDB: A Beginner’s Guide',
    para: 'Learn how to model data, perform CRUD operations, and optimize queries in MongoDB efficiently.',
    postImage: img3,
    link: '',
    date: '15 Sept 2025',
  },
  {
    id: 4,
    titleLogo: blogLogo,
    navTitle: 'EduNex Blog',
    heading: 'Express.js Crash Course for Beginners',
    para: 'A step-by-step guide to building your first server with Express.js — fast, minimal, and flexible.',
    postImage: img4,
    link: '',
    date: '18 Sept 2025',
  },
  {
    id: 5,
    titleLogo: blogLogo,
    navTitle: 'EduNex Blog',
    heading: 'Understanding REST APIs and JSON',
    para: 'REST APIs are the backbone of modern web applications. Learn how JSON connects the frontend and backend.',
    postImage: img5,
    link: '',
    date: '20 Sept 2025',
  },
  {
    id: 6,
    titleLogo: blogLogo,
    navTitle: 'EduNex Blog',
    heading: '10 Common Mistakes in MERN Stack Development',
    para: 'Avoid these common pitfalls while developing full-stack apps with MongoDB, Express, React, and Node.',
    postImage: img6,
    link: '',
    date: '22 Sept 2025',
  },
  {
    id: 7,
    titleLogo: blogLogo,
    navTitle: 'EduNex Blog',
    heading: 'How to Build a Portfolio Website Using HTML, CSS, and JS',
    para: 'A complete walkthrough to design, structure, and deploy your personal portfolio website.',
    postImage: img7,
    link: '',
    date: '24 Sept 2025',
  },
  {
    id: 8,
    titleLogo: blogLogo,
    navTitle: 'EduNex Blog',
    heading: 'A Beginner’s Guide to TypeScript',
    para: 'TypeScript adds static typing to JavaScript, improving reliability and scalability in large projects.',
    postImage: img8,
    link: '',
    date: '26 Sept 2025',
  },
  {
    id: 9,
    titleLogo: blogLogo,
    navTitle: 'EduNex Blog',
    heading: 'Building a Chat App Using Socket.io',
    para: 'Learn how to create a real-time chat application using Node.js and Socket.io for instant communication.',
    postImage: img1,
    link: '',
    date: '28 Sept 2025',
  },
  {
    id: 10,
    titleLogo: blogLogo,
    navTitle: 'EduNex Blog',
    heading: 'Deploying Your MERN App on Render and Vercel',
    para: 'Step-by-step guide to deploying frontend and backend projects using Render and Vercel platforms.',
    postImage: img2,
    link: '',
    date: '1 Oct 2025',
  },
  // {
  //   id: 11,
  //   titleLogo: blogLogo,
  //   navTitle: "EduNex Blog",
  //   heading: "Why React Hooks Revolutionized Functional Components",
  //   para: "Hooks simplified state management and side effects in React, making functional components more powerful.",
  //   postImage: img3,
  //   link: "",
  //   date: "4 Oct 2025"
  // },
  // {
  //   id: 12,
  //   titleLogo: blogLogo,
  //   navTitle: "EduNex Blog",
  //   heading: "How to Connect Node.js with MySQL Database",
  //   para: "Learn how to establish connections, execute queries, and manage data using Node.js and MySQL.",
  //   postImage: img4,
  //   link: "",
  //   date: "7 Oct 2025"
  // },
  // {
  //   id: 13,
  //   titleLogo: blogLogo,
  //   navTitle: "EduNex Blog",
  //   heading: "The Rise of AI in Web Development",
  //   para: "Explore how artificial intelligence tools are transforming the way developers build and optimize websites.",
  //   postImage: img5,
  //   link: "",
  //   date: "10 Oct 2025"
  // },
  // {
  //   id: 14,
  //   titleLogo: blogLogo,
  //   navTitle: "EduNex Blog",
  //   heading: "How to Build a RESTful API Using Express and MongoDB",
  //   para: "Create a secure and scalable RESTful API using Express.js and MongoDB from scratch.",
  //   postImage: img6,
  //   link: "",
  //   date: "12 Oct 2025"
  // },
  // {
  //   id: 15,
  //   titleLogo: blogLogo,
  //   navTitle: "EduNex Blog",
  //   heading: "The Importance of Version Control with Git and GitHub",
  //   para: "Master Git and GitHub to manage code efficiently and collaborate with other developers.",
  //   postImage: img7,
  //   link: "",
  //   date: "15 Oct 2025"
  // },
  // {
  //   id: 16,
  //   titleLogo: blogLogo,
  //   navTitle: "EduNex Blog",
  //   heading: "How to Use Environment Variables in Node.js",
  //   para: "Environment variables help secure sensitive data and configure apps easily for multiple environments.",
  //   postImage: img8,
  //   link: "",
  //   date: "17 Oct 2025"
  // },
  // {
  //   id: 17,
  //   titleLogo: blogLogo,
  //   navTitle: "EduNex Blog",
  //   heading: "Best Practices for Writing Clean JavaScript Code",
  //   para: "Follow these simple coding standards and patterns to make your code more readable and maintainable.",
  //   postImage: img1,
  //   link: "",
  //   date: "19 Oct 2025"
  // },
  // {
  //   id: 18,
  //   titleLogo: blogLogo,
  //   navTitle: "EduNex Blog",
  //   heading: "Top 10 VS Code Extensions for Web Developers",
  //   para: "Boost your productivity with these must-have Visual Studio Code extensions for web development.",
  //   postImage: img2,
  //   link: "",
  //   date: "22 Oct 2025"
  // },
  // {
  //   id: 19,
  //   titleLogo: blogLogo,
  //   navTitle: "EduNex Blog",
  //   heading: "Frontend vs Backend: Understanding the Key Differences",
  //   para: "Explore how frontend and backend development work together to build complete web applications.",
  //   postImage: img2,
  //   link: "",
  //   date: "25 Oct 2025"
  // }
];

const NewsPage = () => {
  return (
    <div className="blogs-page">
      <div className="blog-page-container">
        {blogList.map((list) => {
          return (
            <>
              <BlogCard list={list} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default NewsPage;
