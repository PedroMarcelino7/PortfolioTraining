import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './Header.scss';

export default function Header() {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const phrases = ["I am Pedro Marcelino."];

    useEffect(() => {
        const timer = setTimeout(() => {
            setText(prevText => {
                const currentIndex = prevText.length >= phrases[index].length ? (index + 1) % phrases.length : index;
                return phrases[currentIndex].substring(0, prevText.length + 1);
            });
        }, 150);
    
        return () => clearTimeout(timer);
    }, [text, index, phrases]);

    return (
        <header className="header vh-100 text-center position-relative">
            <div className="text-container position-relative d-flex flex-column justify-content-center align-items-center h-100">
                <h5 className="text-primary fs-3 fw-bold text-uppercase">
                    Hello, World.
                </h5>

                <h1 id="typing-text" className="fw-bold text-white">
                    {text}
                </h1>

                <p className="roles text-white text-uppercase fs-4">
                    <span>Frontend Web Developer</span>
                </p>

                <a href="#" className="btn btn-outline-light btn-lg mt-3">
                    <div className="d-flex">
                        <div className="me-3">
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>

                        <div className="text-start">
                            <span>More About Me</span>
                        </div>
                    </div>
                </a>

                <div className="social d-flex gap-3 position-absolute">
                    <a href="">
                        <FontAwesomeIcon icon={fab.faTwitter} className='fa-3x text-white' />
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={fab.faInstagram} className='fa-3x text-white' />
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={fab.faLinkedin} className='fa-3x text-white' />
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={fab.faFacebook} className='fa-3x text-white' />
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={fab.faYoutube} className='fa-3x text-white' />
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={fab.faGithub} className='fa-3x text-white' />
                    </a>
                </div>
            </div>
        </header>
    );
}
