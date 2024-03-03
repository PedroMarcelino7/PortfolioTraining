export default function Form() {
    return (
        <form name="contact" netlify="true">
            <div className="mb-5">
                <input
                    type="text"
                    className="form-control bg-transparent border-top-0 border-start-0 border-end-0 rounded-0 border-muted text-white"
                    name="name"
                    placeholder="Name"
                />
            </div>
            <div className="mb-5">
                <input
                    type="email"
                    className="form-control bg-transparent border-top-0 border-start-0 border-end-0 rounded-0 border-muted text-white"
                    name="email"
                    placeholder="Email"
                />
            </div>
            <div className="mb-5">
                <textarea
                    className="form-control bg-transparent border-top-0 border-start-0 border-end-0 rounded-0 border-muted text-white"
                    name="message"
                    placeholder="Message"
                ></textarea>
            </div>
            <div className="mb-5 d-grid">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}