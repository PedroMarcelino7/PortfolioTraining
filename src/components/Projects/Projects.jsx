import './Projects.scss';

import { useState } from 'react';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Project1 from '../../images/project1.jpg'
import Project2 from '../../images/project2.jpg'
import Project3 from '../../images/project3.jpg'
import Project4 from '../../images/project4.jpg'
import Project5 from '../../images/project5.jpg'
import Project6 from '../../images/project6.jpg'

export default function Projects() {
    const [lightboxIndex, setLightboxIndex] = useState(null)

    const openLightbox = (index) => {
        setLightboxIndex(index)
    }

    const closeLightbox = () => {
        setLightboxIndex(null)
    }

    const projects = [
        Project1,
        Project2,
        Project3,
        Project4,
        Project5,
        Project6
    ]

    return (
        <section className="projects py-5 bg-light">
            <div className="container">
                <div className="text-center my-5">
                    <h4 className="text-uppercase fw-bold text-primary">
                        Projects
                    </h4>

                    <hr className="w-25 mx-auto" />

                    <h2 className="mb-4">Check out my work</h2>
                    <p className="lead">Here is a small sample of my projects</p>
                </div>

                <div className="row">
                    {projects.map((project, index) => (
                        <div className="col-md-6 mb-4" key={index}>
                            <div className="project">
                                <img
                                    src={project}
                                    alt=""
                                    className="img-fluid rounded-3 project-img shadow"
                                    onClick={() => openLightbox(index)}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {lightboxIndex !== null && (
                    <Lightbox
                        open={true}
                        close={closeLightbox}
                        slides={[{ src: projects[lightboxIndex] }]}
                    />
                )}
            </div>
        </section>
    )
}
