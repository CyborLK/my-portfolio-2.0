//Portfolio Section tumbnail images enter here
import PortfolioImg1 from '@/public/images/CareerPulse.jpg';
import PortfolioImg2 from '@/public/images/SparkChat.png';
import PortfolioImg3 from '@/public/images/portfolio-img-3.jpg';
import PortfolioImg4 from '@/public/images/portfolio-img-4.jpg';

//Portfolio Section main images enter here
import ProjectImage1 from '@/public/images/CareerPulse-main.jpg';
import ProjectImage2 from '@/public/images/SparkChat-main.png';
import ProjectImage3 from '@/public/images/project-3.png';
import ProjectImage4 from '@/public/images/project-4.jpg';

export const portfolioData = {
    mainData: {
        title: "Portfolio",
        title2: "My Latest Works",
        description: "Driven by a commitment to excellence, here’s a showcase of projects crafted to meet the highest standards."
    },

    navigationList: [
        {
            title: "Mobile Apps",
            classes: "mobile-apps",
            dataFilter: ".mobile-apps"
        },
        {
            title: "UI/UX Design",
            classes: "ui-ux",
            dataFilter: ".ui-ux"
        },
        {
            title: "Web Development",
            classes: "web-dev",
            dataFilter: ".web-dev"
        },
        {
            title: "Software Development",
            classes: "soft-dev",
            dataFilter: ".soft-dev"
        },
    ],


    projects: [
        {
            projectTitle: 'Career Pulse',
            slug: 'project-1', 
            description: 'CareerPulse is a mobile platform developed to support students and undergraduates in their internship journey by providing tailored insights and personalized guidance. With features that streamline the search process and enhance career readiness, CareerPulse empowers users to identify their strengths, improve essential skills, and find internships that align with their aspirations.',
            keywords: 'mobile app development, UI design, flutter',
            categories: ['mobile-apps', 'ui-ux'],
            tools: ['Flutter', 'Figma', 'Firebase'],
            services: 'Finding Internships, CV Suggetions',
            client: 'Universtiy Project',
            duration: '5 months',
            githubUrl: 'https://github.com/CyborLK/CareerPulse-Mobile-App',
            behanceUrl: 'https://www.behance.net/gallery/216843619/CareerPulse-Mobile-App',
            liveUrl: 'https://drive.google.com/drive/folders/1eTCEJDzN1jcXA8oYkQTLCrqS60lGPP3p?usp=sharing',
            imageSrc: PortfolioImg1, 
            mainImage: ProjectImage1,
            
            images: [
                { image: ProjectImage1 },
                { image: ProjectImage1 },
            ]
        },
        {
            projectTitle: 'SparkChat',
            slug: 'project-2', 
            description: 'An innovative real-time messaging platform utilizing React for the frontend and Ballerina for the backend. SparkChat addresses challenges in real-time communication with features like WebSocket-based instant messaging, JWT-secured authentication, and MongoDB for scalable data management. Developed as part of the Innovate with Ballerina event in collaboration with an amazing team.',
            keywords: 'web development, UI design, real-time messaging platform',
            categories: [ 'web-dev', 'ui-ux'],
            tools: ['React', 'Figma', 'Ballerina'],
            services: ' Real-time messaging platform',
            client: 'Competition Project',
            duration: '1 month',
            githubUrl: 'https://github.com/CyborLK/iwb083-code-alphaz',
            //behanceUrl: 'https://www.behance.net/gallery/project1',
            liveUrl: 'https://project1-demo.com',
            videoUrl: 'https://www.youtube.com/embed/TQBCvCmLzlk?si=JzsCo6YFjEsqs6ro',
            imageSrc: PortfolioImg2, 
            mainImage: ProjectImage2,
            
            images: [
                { image: ProjectImage2 },
                { image: ProjectImage2 },
            ]
        },
        {
            projectTitle: 'Certificate Generator',
            slug: 'project-3', 
            description: 'A Python script to automatically generate personalized certificates from a template image and a CSV file containing names. The script centers each name horizontally on the certificate for professional presentation.',
            keywords: 'python, python script, certificate generator',
            categories: [ 'soft-dev'],
            tools: ['Python 3', 'Pillow (PIL)', 'pandas', 'tqdm'],
            services: 'Certificate Name Generation',
            client: 'ICT Society USJP',
            duration: '24 hours',
            githubUrl: 'https://github.com/CyborLK/Certificate-Generator',
            //behanceUrl: 'https://www.behance.net/gallery/project1',
            //liveUrl: 'https://project1-demo.com',
            videoUrl: 'https://www.youtube.com/embed/EiWK1qi090M?si=MNEBGXXZW_CCKQS4',
            imageSrc: PortfolioImg3, 
            mainImage: ProjectImage3,
            
            images: [
                { image: ProjectImage3 },
                { image: ProjectImage3 },
            ]
        },
        {
            projectTitle: 'Project Title 4',
            slug: 'project-4', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            keywords: 'key1, key2, key3',
            categories: [ 'web-dev', 'ui-ux'],
            tools: ['React', 'Figma', 'Ballerina'],
            services: 'Branding, Photoshoot',
            client: 'FlaTheme',
            duration: '104 hours',
            githubUrl: 'https://github.com/username/project1',
            behanceUrl: 'https://www.behance.net/gallery/project1',
            liveUrl: 'https://project1-demo.com',
            videoUrl: 'https://www.youtube.com',
            imageSrc: PortfolioImg4, 
            mainImage: ProjectImage4,
            
            images: [
                { image: ProjectImage4 },
                { image: ProjectImage4 },
            ]
        },
        
    ]
};