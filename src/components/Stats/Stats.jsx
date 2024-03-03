import './Stats.scss'

export default function Stats() {
    return (
        <section className="stats py-5 text-bg-secondary">
            <div className="container">
                <div className="row g-0">
                    <div className="col-md-4 col-lg-2">
                        <div className="stat text-center border-end border-dark">
                            <i className="fas fa-users fa-3x mb-3"></i>
                            <p className="fs-1">500+</p>
                            <h3 className="fs-6 text-uppercase">Clients</h3>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-2">
                        <div className="stat text-center border-end border-dark">
                            <i className="fas fa-project-diagram fa-3x mb-3"></i>
                            <p className="fs-1">700+</p>
                            <h3 className="fs-6 text-uppercase">Projects</h3>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-2">
                        <div className="stat text-center border-end border-dark">
                            <i className="fas fa-clock fa-3x mb-3"></i>
                            <p className="fs-1">16+</p>
                            <h3 className="fs-6 text-uppercase">Years</h3>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-2">
                        <div className="stat text-center border-end border-dark">
                            <i className="fas fa-book fa-3x mb-3"></i>
                            <p className="fs-1">25</p>
                            <h3 className="fs-6 text-uppercase">Publications</h3>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-2">
                        <div className="stat text-center border-end border-dark">
                            <i className="fas fa-youtube fa-3x mb-3"></i>
                            <p className="fs-1">2.06M</p>
                            <h3 className="fs-6 text-uppercase">Subscribers</h3>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-2">
                        <div className="stat text-center border-end border-dark">
                            <i className="fas fa-graduation-cap fa-3x mb-3"></i>
                            <p className="fs-1">1M+</p>
                            <h3 className="fs-6 text-uppercase">Students</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}