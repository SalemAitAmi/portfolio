// Navigation icons
import {
    HiHome,
    HiMiniUserCircle,
    HiAcademicCap,
    HiMiniCommandLine
  } from "react-icons/hi2";

// Project images
import FATFileSystemImg from "./img/FAT-file-system.png";
import TLCBreadboardImg from "./img/tlc-breadboard.png";
import FreqResLCDImg from "./img/display-freq-res-lcd.png";
import RaytraceImg from "./img/raytrace.png";
import HuffmanTreeImg from "./img/huffman-tree.png";
import ChatAppImg from "./img/chat-app.png";
import BETHDataSetImg from "./img/beth-dataset-data-mining.png";

// Skills icons
import Python from "./public/svg/python.svg";
import C from "./public/svg/C.svg";
import Cpp from "./public/svg/cpp.svg";
import Matlab from "./public/svg/matlab.svg";
import Bash from "./public/svg/bash.svg";
import MySQL from "./public/svg/mysql.svg";
import Git from "./public/svg/git.svg";
import Java from "./public/svg/java.svg";
import Docker from "./public/svg/docker.svg";
import JavaScript from "./public/svg/javascript.svg";
import HTML from "./public/svg/html.svg";
import CSS from "./public/svg/css.svg";


export const navItems = [
    {
        name: "Home",
        href: "#home",
        icon: HiHome,
      },
      {
        name: "Skills",
        href: "#skills",
        icon: HiAcademicCap,
      },
      {
        name: "Projects",
        href: "#projects",
        icon: HiMiniCommandLine,
      },
      {
        name: "Contact",
        href: "#contact",
        icon: HiMiniUserCircle,
      }
];

export const projectItems = [
    {
        title: "BETH Dataset Data Mining",
        description: "Executed anomaly detection using real-world cybersecurity data from 23 honeypots. Carried out a comprehensive data mining workflow, achieving outstanding F-scores with a fine-tuned decision tree classifier, showcasing high accuracy in predicting suspicious and malicious activities.",
        image: BETHDataSetImg,
        link : "https://github.com/SalemAitAmi/Beth-dataset-data-mining",
    },
    {
        title: "Huffman Coder",
        description: "Developed a program that compresses and decompresses data using Huffman Coding, a lossles compression algorithm. Optimized the program for a specific type of computer (32-bit ARM), and compared different ways to decode the data to find the fastest and most efficient method. Created scripts to automatically compile and test the program to ensure functionality throughout the development process.",
        image: HuffmanTreeImg,
        link : "https://github.com/SalemAitAmi/HuffmanCoder",
    },
    {
        title: "Secure Chat App",
        description: "Developed a secure GUI chat application using customTKinter and Diffie-Hellman Key Exchange for encryption. Utilized cryptographic tools, Python modules (socket, threading, sqlite3) for enhanced functionality, readability, and database management.",
        image: ChatAppImg,
        link : "https://github.com/SalemAitAmi/Secure-GUI-Chat",
    },
    {
        title: "FAT File System",
        description: "This project utilizes the FAT file system structure to implement essential file system functionality. The implementation comprises four files that parse metadata and execute designated functions. These files act like commands, incorporating familiar operations such as stat, ls, and cat, which function as expected, along with stor, a command with no Linux counterpart that writes a file to the disk.",
        image: FATFileSystemImg,
        link : "https://github.com/SalemAitAmi/FAT-file-system",
    },
    {
        title: "Traffic Light System",
        description: "This project involves using an STM32F405 microcontroller in conjunction with FreeRTOS to simulate a single-lane traffic intersection. The system is physically simulated on a breadboard with 19 small green LEDs as the lane, 3 large LEDs (green, amber, red) as the traffic light, a potentiometer, 3 shift registers, and several wires and resistors. The potentiometer's variable voltage is used to implement variable traffic flow and traffic light timings. FreeRTOS APIs are used to facilitate inter-task communication and simplify the hardware-softawre co-design.",
        image: TLCBreadboardImg,
        link : "https://github.com/SalemAitAmi/Traffic-light-system",
    },
    {
        title: "Display Frequency & Resistance on LCD",
        description: "This project involves designing an embedded system using an STM32F051 microcontroller, focusing on configuring components like a potentiometer, optocoupler, 555 timer, ADC, DAC, and LCD screen. The task includes measuring and displaying frequency and resistance by setting up external interrupts, timers, and SPI communication. Each component is configured individually and then integrated, providing a thorough understanding of embedded system design and hardware interfaces. The setup of each component ensures accurate data measurement and display on the LCD screen.",
        image: FreqResLCDImg,
        link : "https://github.com/SalemAitAmi/Embedded-systems-intro",
    },
    {
        title: "Simple Ray Tracer",
        description: "Created a basic program that simulates how light interacts with objects to produce realistic images. Implemented different camera views to accurately calculate how light rays hit objects like spheres and planes. Added advanced techniques like shading, shadows, and reflections to make the images look more lifelike and visually appealing. Leveraged mathematical concepts to generate textures that resemble natural patterns.",
        image: RaytraceImg,
        link : "https://github.com/SalemAitAmi/Simple-ray-tracer",
    },
]

export const skillItemsTop = [
    {
        name: "Python",
        logo: Python,
    },
    {
        name: "C",
        logo: C,
    },
    {
        name: "Bash",
        logo: Bash,
    },
    {
        name: "MySQL",
        logo: MySQL,
    },
    {
        name: "Git",
        logo: Git,
    },
];

export const skillItemsFrontend = [
    {
        name: "JavaScript",
        logo: JavaScript,
    },
    {
        name: "HTML",
        logo: HTML,
    },
    {
        name: "CSS",
        logo: CSS,
    },
];
export const skillItemsBackend = [
    {
        name: "C++",
        logo: Cpp,
    },
    {
        name: "Java",
        logo: Java,
    },
];
export const skillItemsMisc = [
    {
        name: "MATLAB",
        logo: Matlab,
    },
    {
        name: "Docker",
        logo: Docker,
    },
];