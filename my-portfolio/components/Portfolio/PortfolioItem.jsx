import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MyImage from '@/public/images/portfolio-img.jpg'; // Adjust this to your actual image path

const PortfolioItem = ({ imageSrc, category, projectTitle, slug }) => {
    return (
        <div className={`col-12 col-xl-4 portfolio-item ${category}`}>
            <div className="portfolio-box">
                <Image src={MyImage} alt={projectTitle} placeholder="blur" />
                <span className="portfolio-category">{category}</span>
                <div className="portfolio-caption">
                    <h1>
                        <Link href={`portfolio/${slug}`}>{projectTitle}</Link>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;
