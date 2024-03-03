import './Contact.scss'
import Footer from './Footer'
import Form from './Form'

export default function Contact() {
    return (
        <section className="contact text-bg-dark bg-gradient py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="text-center mb-5">
                            <h4 className="text-uppercase fw-bold text-primary">Contact</h4>
                            <hr className="w-25 mx-auto" />
                            <h2 className="mb-4">I'd love to hear from you.</h2>
                            <p className="lead">
                                If you have any questions or would like to work together, please
                                contact me with the form below.
                            </p>
                        </div>

                        <Form />
                    </div>
                </div>

                <Footer />
            </div>
        </section>
    )
}