export default function Footer() {
    return (
        <div className="d-flex mt-5">
            <p className="flex-grow-1">
                Copyright &copy; 2023 | Design By StyleShout
            </p>
            <div className="hstack gap-3">
                <a href="#">
                    <i className="fab fa-facebook fa-2x text-white"></i>
                </a>
                <a className="text-decoration-none" href="#">
                    <i className="fab fa-twitter fa-2x text-white"></i>
                </a>
                <a className="text-decoration-none" href="#">
                    <i className="fab fa-instagram fa-2x text-white"></i>
                </a>
                <a className="text-decoration-none" href="#">
                    <i className="fab fa-linkedin fa-2x text-white"></i>
                </a>
                <a className="text-decoration-none" href="#">
                    <i className="fab fa-dribbble fa-2x text-white"></i>
                </a>
            </div>
        </div>
    )
}