import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PortfolioItem = ({ imageSrc, category, projectTitle, slug }) => {
    return (
        <div className={`col-12 col-xl-4 portfolio-item ${category}`}>
            <div className="portfolio-box">
                <Link href={`/portfolio/${slug}`}>
                    <Image
                        src={imageSrc || '/images/default.jpg'} // Fallback to a default image
                        alt={projectTitle}
                        placeholder={imageSrc ? 'blur' : 'empty'} // Blur effect only if valid
                    />
                </Link>
                <span className="portfolio-category">{category}</span>
                <div className="portfolio-caption">
                    <h1>
                        <Link href={`/portfolio/${slug}`}>{projectTitle}</Link>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;
