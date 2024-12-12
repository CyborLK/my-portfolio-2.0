import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navigation = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [activeLink, setActiveLink] = useState('about');

    // Define an array of navigation items with their corresponding IDs
    const navItems = [
        { label: 'About Me', id: 'about' },
        { label: 'Services', id: 'services' },
        { label: 'Portfolio', id: 'portfolio' },
        { label: 'Education', id: 'education' },
        { label: 'Achievements', id: 'achievements' },
        { label: 'Testimonial', id: 'testimonial' },
        { label: 'Blog', id: 'blog' },
        { label: 'Contact', id: 'contact' },
    ];

    // Social media links
    const socialMediaLinks = [
        { label: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://facebook.com' },
        { label: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://linkedin.com' },
        { label: 'X', icon: 'fab fa-twitter', url: 'https://twitter.com' },
        { label: 'Behance', icon: 'fab fa-behance', url: 'https://behance.net' },
        { label: 'Medium', icon: 'fab fa-medium', url: 'https://medium.com' },
        { label: 'YouTube', icon: 'fab fa-youtube', url: 'https://youtube.com' },
    ];

    // Define a function to handle the scroll event
    const handleScroll = () => {
        const scrollY = window.scrollY;

        // Determine which link is active based on the scroll position
        for (const item of navItems) {
            const element = document.getElementById(item.id);
            if (element && scrollY >= element.offsetTop) {
                setActiveLink(item.id);
            }
        }

        // Calculate headerHeight and update isFixed
        const headerHeight = document.getElementById('header').clientHeight;
        const windowWidth = window.innerWidth;

        if (windowWidth < 992) {
            if (scrollY >= headerHeight) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        }
    };

    // Add a scroll event listener when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Get the initial headerHeight
        const initialHeaderHeight = document.getElementById('header').clientHeight;

        // Check and update isFixed initially
        const windowWidth = window.innerWidth;
        if (windowWidth < 992) {
            if (window.scrollY >= initialHeaderHeight) {
                setIsFixed(true);
            }
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="nav-wrapper">
            {/* Social Media Icons Section */}
            <div className="social-media-icons">
                {socialMediaLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        aria-label={social.label}
                    >
                        <i className={social.icon}></i>
                    </a>
                ))}
            </div>

            {/* Navigation Section */}
            <div className={`section-nav ${isFixed ? 'fixed' : ''}`}>
                <ul className="nav">
                    {navItems.map((item) => (
                        <li className="nav-item" key={item.id}>
                            <Link
                                href={`#${item.id}`}
                                className={`nav-link ${activeLink === item.id ? 'active' : ''}`}
                            >
                                <span className="nav-link-desktop">{item.label}</span>
                                <span className="nav-link-mobile">{item.label.charAt(0)}</span>
                                <span className="nav-circle"></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navigation;
