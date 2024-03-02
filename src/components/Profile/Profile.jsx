import './Profile.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCalendar, faEnvelope, faUser, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Profile() {
    return (
        <section className="profile my-6">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="text-uppercase fw-bold">Profile</h3>
                        <p>Here is some more info about myself to help you get to know me
                            better.</p>

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item mb-3">
                                <h5 className="text-transform">
                                    <FontAwesomeIcon icon={faUser} className='text-primary' /> Full Name:
                                </h5>
                                <p>Pedro Paulo Marcelino</p>
                            </li>

                            <li className="list-group-item mb-3">
                                <h5 className="text-transform">
                                    <FontAwesomeIcon icon={faCalendar} className='text-primary' /> Birth Date
                                </h5>
                                <p>June 11, 2004</p>
                            </li>

                            <li className="list-group-item mb-3">
                                <h5 className="text-transform">
                                    <FontAwesomeIcon icon={faBuilding} className='text-primary' /> Current Position
                                </h5>
                                <p>Studying | System Development and Analysis</p>
                            </li>

                            <li className="list-group-item mb-3">
                                <h5 className="text-transform">
                                    <FontAwesomeIcon icon={faEnvelope} className='text-primary' /> Email
                                </h5>
                                <p>pedropmarcelino2004@gmail.com</p>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-6">
                        <h3 className="text-uppercase fw-bold">Skills</h3>
                        <p>
                            Here is a list of my skills with these dumb percentages that don't
                            mean anything 😉
                        </p>
                        <h5>
                            <FontAwesomeIcon icon={faCheck} />
                            HTML 5
                        </h5>
                        <div
                            className="progress mb-4"
                            role="progressbar"
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            <div className="progress-bar" style={{ width: '100%' }}>100%</div>
                        </div>

                        <h5>
                            <FontAwesomeIcon icon={faCheck} />
                            CSS
                        </h5>
                        <div
                            className="progress mb-4"
                            role="progressbar"
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            <div className="progress-bar" style={{ width: '90%' }}>90%</div>
                        </div>

                        <h5>
                            <FontAwesomeIcon icon={faCheck} />
                            JavaScript
                        </h5>
                        <div
                            className="progress mb-4"
                            role="progressbar"
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            <div className="progress-bar" style={{ width: '90%' }}>90%</div>
                        </div>

                        <h5>
                            <FontAwesomeIcon icon={faCheck} />
                            Bootstrap
                        </h5>
                        <div
                            className="progress mb-4"
                            role="progressbar"
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            <div className="progress-bar" style={{ width: '100%' }}>100%</div>
                        </div>

                        <h5>
                            <FontAwesomeIcon icon={faCheck} />
                            PHP
                        </h5>
                        <div
                            className="progress mb-4"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            <div className="progress-bar" style={{ width: '75%' }}>75%</div>
                        </div>

                        <h5>
                            <FontAwesomeIcon icon={faCheck} />
                            Python
                        </h5>
                        <div
                            className="progress mb-4"
                            role="progressbar"
                            aria-valuenow="70"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            <div className="progress-bar" style={{ width: '70%' }}>70%</div>
                        </div>

                        <h5>
                            <FontAwesomeIcon icon={faCheck} />
                            UI/UX
                        </h5>
                        <div
                            className="progress mb-4"
                            role="progressbar"
                            aria-valuenow="70"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            <div className="progress-bar" style={{ width: '70%' }}>70%</div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5 text-center">
                    <div className="col-12">
                        <a href="#" className="btn btn-outline-dark btn-lg text-uppercase px-5 mx-3 my-2">
                            Hire Me Now
                        </a>

                        <a href="#" className="btn btn-dark btn-lg text-uppercase px-5 mx-3 my-2">
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}