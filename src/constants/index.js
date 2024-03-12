import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  carrent,
  threejs,
} from "../assets";

import genpact from "../assets/genpact.gif";
import shore from "../assets/shore.jpeg";
import careerpedia from "../assets/careerpedia.jpeg";
import wordpress from "../assets/wordpress.jpg";
import bootstrap from "../assets/bootstrap.jpg";

import bookReading from "../assets/bookreading.webp";
import biking from "../assets/biking.jpeg";
import badminton from "../assets/badminton.jpg";
import camping from "../assets/camp.jpeg";
import hiking from "../assets/treck1.jpeg";
import traveling from "../assets/riding.jpg";
import painting from "../assets/painting.jpg";
import movie from "../assets/mania.png";
import Book from "../assets/book.png";
import bill from "../assets/bill.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "JavaScript Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "Word Press",
    icon: wordpress,
  },

  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Frontend Developer- React JS",
    company_name: "Careerpedia",
    icon: careerpedia,
    iconBg: "#383E56",
    date: "Oct 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Learnt and applied HTML, CSS, and JavaScript to create visually appealing and responsive web pages.",
      "Developed websites that adapt gracefully to different screen sizes, enhancing the user experience on both desktop and mobile platforms.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Engaged in code reviews with peers and mentors to receive feedback, improve coding standards, and foster a collaborative development environment.",
    ],
  },

  {
    title: "Research Analyst",
    company_name: "Shore Info Tech Ind Pvt Ltd",
    icon: shore,
    iconBg: "#E6DEDD",
    date: "July 2021 - May 2023",
    points: [
      "Engaging with the overseas suppliers and requesting for quotations (RFQ's) and keeping track of the requests and follow ups made.",
      "Accumulating the data received and Analyzing it.",
      "Using operations data to develop pricing models.",
      "Training the new joiners according to the project requirement.",
    ],
  },

  {
    title: "Process Associate",
    company_name: "Genpact Ind Pvt Ltd",
    icon: genpact,
    iconBg: "#383E56",
    date: "June 2019 - June 2021",
    points: [
      "Member of Risk Management team.",
      "Gathers and compiles data related to risk from internal and external resources. Identifies potential risks by analyzing data, observing processes, and talking to staff.",
      "Was also a member of Deal,Renewals team.",
      "Preparing the renewal letters, quotations, and notifications to the clients",
      "Contacting overseas customer directly to negotiate terms and conditions and render renewal contracts and updating the same to the clients.",
    ],
  },
];

const hobbies = [
  {
    name: "Book Reading",
    description:
      "Reading is not just a hobby for me; it's a journey into different worlds and perspectives. I enjoy exploring various genres, from fiction to non-fiction, and find that it enhances my creativity and critical thinking. Some of my favorite books include 'Roots', 'To kill a mocking bird' and 'You and me on a vacation' and many more.",

    image: bookReading,
  },
  {
    name: "Solo Traveling",
    description:
      "Solo traveling is a declaration of independence—a conscious choice to venture into the world alone, free from the constraints of companionship. It is an empowering experience that allows me to make decisions solely based on my preferences, interests, and curiosity. From choosing destinations to planning itineraries, every aspect of the journey becomes a personal expression of freedom.",

    image: traveling,
  },
  {
    name: "Biking",
    description:
      "Biking isn't merely a hobby for me; it's a passion that weaves through the fabric of my life, providing not only a means of transportation but a source of exhilaration, exploration, and a deep connection with the world around me.",

    image: biking,
  },
  {
    name: "Badminton",
    description:
      "Badminton as a dynamic and fast-paced sport, it not only keeps me physically fit through intense rallies and agile footwork but also sharpens my mind with its strategic demands. Beyond the health benefits, badminton fosters social connections, offering opportunities for camaraderie and friendly competition with like-minded individuals.",

    image: badminton,
  },
  {
    name: "Camping",
    description:
      "Camping, for me, is an intentional break from the digital world. Leaving behind the constant notifications and screens allows me to fully appreciate the sounds of nature, the rustling of leaves, and the crackling of a campfire. It's a chance to be present in the moment, fostering a deep sense of mindfulness and reconnection with the simplicity of life.",

    image: camping,
  },
  {
    name: "Hiking",
    description:
      "Hiking is not just a form of exercise for me; it's a way to connect with nature and recharge. Exploring trails and reaching new summits provides a sense of accomplishment and helps me appreciate the beauty of the outdoors.",

    image: hiking,
  },
  {
    name: "Painting",
    description:
      "Painting has been a deeply enriching and fulfilling hobby for me, serving as a means to express my creativity and connect with the world in a unique way. I find solace and joy in the act of bringing a blank canvas to life, whether through the strokes of a brush or the careful application of colors.",

    image: painting,
  },
];

const projects = [
  {
    name: "Movie Mania Nexus",
    description:
      "Web-based platform that show cases the best directors, performers, and producers in each field, with a selection of their works displayed when you click on each person.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Java Script",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://ravishankar5777.github.io/MovieManiaNexus/",
  },
  {
    name: " Book Record Creator",
    description:
      "Web application that enables users to User to create multiple records of books. Once the record is created user can edit, save and can even delete the existing records.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Java Script",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
    ],
    image: Book,
    source_code_link: "https://ravishankar5777.github.io/Book-Store/",
  },
  {
    name: "Restaurant Billing",
    description:
      "A comprehensive Restaurant billing platform that allows Restaurant owners to generate the total bill of the items ordered with just a click including GST.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Html 5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bill,
    source_code_link: "https://ravishankar5777.github.io/Billing/",
  },
];

export { services, technologies, experiences, hobbies, projects };
