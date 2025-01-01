//Portfolio Section tumbnail images enter here
import PortfolioImg1 from '@/public/images/portfolio-img-1.jpg';
import PortfolioImg2 from '@/public/images/portfolio-img-2.jpg';
import PortfolioImg3 from '@/public/images/portfolio-img-3.jpg';
import PortfolioImg4 from '@/public/images/portfolio-img-4.jpg';

//Portfolio Section main images enter here
import ProjectImage1 from '@/public/images/project-1.jpg';
import ProjectImage2 from '@/public/images/project-2.jpg';
import ProjectImage3 from '@/public/images/project-3.jpg';
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
    ],


    projects: [
        {
            projectTitle: 'Career Pulse',
            slug: 'project-1', // Unique slug for the project
            description: 'CareerPulse is a mobile platform developed to support students and undergraduates in their internship journey by providing tailored insights and personalized guidance. With features that streamline the search process and enhance career readiness, CareerPulse empowers users to identify their strengths, improve essential skills, and find internships that align with their aspirations.',
            keywords: 'mobile app development, UI design, flutter',
            categories: ['mobile-apps', 'ui-ux'],
            services: 'Branding, Photoshoot',
            client: 'FlaTheme',
            duration: '104 hours',
            imageSrc: PortfolioImg1, // Unique image for this project
            mainImage: ProjectImage1,
            
            images: [
                { image: ProjectImage1 },
                { image: ProjectImage1 },
            ]
        },
        {
            projectTitle: 'Project Title 2',
            slug: 'project-2', // Unique slug for the project
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            keywords: 'key1, key2, key3',
            categories: 'second',
            services: 'Branding, Photoshoot',
            client: 'FlaTheme',
            duration: '104 hours',
            githubUrl: 'https://github.com/username/project1',
            behanceUrl: 'https://www.behance.net/gallery/project1',
            liveUrl: 'https://project1-demo.com',
            imageSrc: PortfolioImg2, // Unique image for this project
            mainImage: ProjectImage2,
            
            images: [
                { image: ProjectImage2 },
                { image: ProjectImage2 },
            ]
        },
        {
            projectTitle: 'Project Title 3',
            slug: 'project-3', // Unique slug for the project
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            keywords: 'key1, key2, key3',
            categories: 'first',
            services: 'Branding, Photoshoot',
            client: 'FlaTheme',
            duration: '104 hours',
            githubUrl: 'https://github.com/username/project1',
            behanceUrl: 'https://www.behance.net/gallery/project1',
            liveUrl: 'https://project1-demo.com',
            imageSrc: PortfolioImg3, // Unique image for this project
            mainImage: ProjectImage3,
            
            images: [
                { image: ProjectImage3 },
                { image: ProjectImage3 },
            ]
        },
        {
            projectTitle: 'Project Title 4',
            slug: 'project-4', // Unique slug for the project
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            keywords: 'key1, key2, key3',
            categories: 'second',
            services: 'Branding, Photoshoot',
            client: 'FlaTheme',
            duration: '104 hours',
            githubUrl: 'https://github.com/username/project1',
            behanceUrl: 'https://www.behance.net/gallery/project1',
            liveUrl: 'https://project1-demo.com',
            imageSrc: PortfolioImg4, // Unique image for this project
            mainImage: ProjectImage4,
            
            images: [
                { image: ProjectImage4 },
                { image: ProjectImage4 },
            ]
        },
        
    ]
};