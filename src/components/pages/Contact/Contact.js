import React from "react";
import Resume from "../../assets/Resume.pdf";
import "./contact.style.css"

const Contact = () => {
  return (
    <main>
      <section>
        <div className="container">
          <div className="contact-content contact-info content" id="contact-info">
            <div className="row">
              <div className="col-lg-11 col-lg-10">
                <form>
                  <h1 className="content-text">Contact Info</h1>
                  <div>
                    <hr />
                    <ul></ul>
                    <li>
                      <a href={Resume}>Resume</a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/volodymyr-petrytsya-497317196/">
                        LinkedIn Profile
                        <i className="fa fa-linkedin fa-1x" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/Volodya1989">
                        GitHub Profile 
                        <i
                          className="fa fa-github fa-2x"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      Cell: <a href="#">224-400-0558</a>
                    </li>
                    <li>
                      E-mail:
                      <a href="mailto:vpetrytsia@gmail.com">
                        vpetrytsia@gmail.com
                      </a>
                    </li>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
