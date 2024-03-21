//  icons
import {
    FiYoutube,
    FiInstagram,
    FiGithub,
    FiDribbble,
    FiLayout,
    FiSettings,
    FiPenTool,
    FiTag,
    FiMail,
    FiMapPin,
  } from 'react-icons/fi';
  import { FaPhone } from "react-icons/fa6";
  import { TiSocialFacebookCircular } from "react-icons/ti";
  import { FaSquareFacebook } from "react-icons/fa6";
  import { FaLinkedin } from "react-icons/fa6";
  // companies icons
  import FreelancerBrandIcon from './assets/brands/freelancer.png';
  import UpworkBrandIcon from './assets/brands/upwork.png';
  import FiverBrandIcon from './assets/brands/fiverr.png';
  import BehanceBrandIcon from './assets/brands/behance.png';
  import DribbbleBrandIcon from './assets/brands/dribbble.png';
  
  // projects images
  import Project1 from './assets/projects/klucz.jpg';
  import Project2 from './assets/projects/bank.jpg';
  import Project3 from './assets/projects/food.jpg';
  import Project4 from './assets/projects/car.jpg';
  import Project5 from './assets/projects/dataa.jpg';
  import Project6 from './assets/projects/login.jpg';
  
  // skills images
  import SkillImg1 from './assets/skills/html5.png';
  import SkillImg2 from './assets/skills/css3.png';
  import SkillImg3 from './assets/skills/js.png';
  import SkillImg4 from './assets/skills/reactjs.png';
  import SkillImg5 from './assets/skills/nextjs.png';
  import SkillImg6 from './assets/skills/nodejs.png';
  import SkillImg7 from './assets/skills/git.png';
  import SkillImg8 from './assets/skills/figma.png';
  
  // testimonial images
  import TestiImage1 from './assets/testimonials/testimonial-1.webp';
  import TestiImage2 from './assets/testimonials/testimonial-2.webp';
  import TestiImage3 from './assets/testimonials/testimonial-3.webp';
  
  // navigation
  export const navigation = [
    {
      name: 'home',
      href: 'home',
    },
    {
      name: 'about',
      href: 'About',
    },
    {
      name: 'portfolio',
      href: 'portfolio',
    },
    {
      name: 'services',
      href: 'services',
    },
    {
      name: 'testimonials',
      href: 'testimonials',
    },
    {
      name: 'contact',
      href: 'contact',
    },
  ];
  
  // social
  export const social = [
    {
      icon: <FaSquareFacebook  size={25}/>,
      href: 'https://www.facebook.com/wieczko565425/?locale=pl_PL',
    },
    {
      icon: <FiInstagram size={25}/>,
      href: 'https://www.instagram.com',
    },
    {
      icon: <FiGithub size={25} />,
      href: 'https://github.com/Wieczko55',
    },
    {
      icon: <FaLinkedin size={25}/>,
      href: 'https://www.linkedin.com/in/patrykwieczorek/',
    },
  ];
  
  // companies
  export const brands = [
    {
      img: FreelancerBrandIcon,
      href: '',
    },
    {
      img: UpworkBrandIcon,
      href: '',
    },
    {
      img: FiverBrandIcon,
      href: '',
    },
    {
      img: BehanceBrandIcon,
      href: '',
    },
    {
      img: DribbbleBrandIcon,
      href: '',
    },
  ];
  
  // projects
  export const projectsData = [
    {
      id: '1',
      image: Project1,
      name: 'Key Vpn app',
      category: 'web development',
      href: 'https://wieczko55.github.io/vpn-app/',
    },
    {
      id: '2',
      image: Project2,
      name: 'Modern bank app',
      category: 'web development',
      href: 'https://wieczko55.github.io/bank-app/',
    },
    {
      id: '3',
      image: Project3,
      name: 'Restaurant app',
      category: 'UI/UX design',
      href: 'https://wieczko55.github.io/Food-app/',
    },
    {
      id: '4',
      image: Project4,
      name: 'car-rental app',
      category: 'UI/UX design',
      href: 'https://wieczko55.github.io/CarRental-app/',
    },
    {
      id: '5',
      image: Project5,
      name: 'DataAnalytics app',
      category: 'web development',
      href: 'https://wieczko55.github.io/Data-app/',
    },
    {
      id: '6',
      image: Project6,
      name: 'Login screen project',
      category: 'web development',
      href: 'https://github.com/Wieczko55/login_screen',
    },
  ];
  
  // projects
  export const projectsNav = [
    {
      name: 'all',
    },
    {
      name: 'UI/UX Design',
    },
    {
      name: 'web development',
    },
    {
      name: 'branding',
    },
  ];
  
  // skill
  export const skills = [
    {
      image: SkillImg1,
    },
    {
      image: SkillImg2,
    },
    {
      image: SkillImg3,
    },
    {
      image: SkillImg4,
    },
    {
      image: SkillImg5,
    },
    {
      image: SkillImg6,
    },
    {
      image: SkillImg7,
    },
    {
      image: SkillImg8,
    },
  ];
  
  // services
  export const services = [
    {
      icon: <FiLayout />,
      name: 'Web Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
      icon: <FiSettings />,
      name: 'Web Development',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
      icon: <FiPenTool />,
      name: 'Branding',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
      icon: <FiTag />,
      name: 'SEO',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
  ];
  
  // testimonials
  export const testimonials = [
    {
      authorImg: TestiImage1,
      authorText:
        'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
      authorName: 'Olivia Doe',
      authorPosition: 'Head of Design, Google',
    },
    {
      authorImg: TestiImage2,
      authorText:
        'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
      authorName: 'Olivia Doe',
      authorPosition: 'Head of Design, Google',
    },
    {
      authorImg: TestiImage3,
      authorText:
        'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
      authorName: 'Olivia Doe',
      authorPosition: 'Head of Design, Google',
    },
  ];
  
  // contact
  export const contact = [
    {
      icon: <FiMail />,
      title: 'Have a question?',
      subtitle: 'I am here to answer you.',
      description: 'Email me at patrykwieczorek081@gmail.com',
    },
    {
      icon: <FiMapPin />,
      title: 'Current Location',
      subtitle: 'Choceń, Poland',
      description: 'Serving clients worldwide on-site or full remote',
    },
    {
      icon: <FaPhone />,
      title: 'Want to talk?',
      subtitle: 'i will be glad to help you!',
      description: '693-793-354 I am under my phone between 8:00 and 17:00'
    },
  ];