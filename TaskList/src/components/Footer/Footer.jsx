import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="text-center text-lg-start bg-body-tertiary text-muted" style={{ backgroundColor: 'black' }}>
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span className="text-light">Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href="" className="me-4 text-reset" >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4 text-light" >
                                    <i className="fas fa-gem me-3">Tasks Storage</i>
                                </h6>
                                <p className="text-light">
                                Task Storage: An online platform for creating, organizing, and storing tasks efficiently. Simplify task management, collaborate seamlessly, and meet deadlines with ease.
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4 text-light">
                                    Useful links
                                </h6>
                                <p className="text-light">
                                    <a href="#!" className="text-reset text-light">About</a>
                                </p>
                                <p className="text-light">
                                    <a href="#!" className="text-reset text-light">Tasks</a>
                                </p>
                                <p className="text-light">
                                    <a href="#!" className="text-reset text-light">Search</a>
                                </p>
                                <p className="text-light">
                                    <a href="#!" className="text-reset">Communication</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4"></h6>
                                <p className = "text-light"><i className="fas fa-home me-3 "></i>Address</p>
                                <p className="text-light"><i className="fas fa-phone me-3 text-light"></i>+998 (97) 407-44-98</p>
                                <p className="text-light"><i className="fas fa-print me-3 text-light"></i>+998 (93) 575-44-98</p>
                            </div>

                        </div>

                    </div>
                </section>
            </footer>
        </>
    )
}
