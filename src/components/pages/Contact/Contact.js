import React from "react";
import Resume from "../../assets/Resume.pdf";
import "./contact.style.css";
import resumeIcon from "../../assets/resumeIcon.png";
import inl from "../../assets/inl.png";
import github from "../../assets/github.png";
import ScrollUp from "../../ScrollUp/ScrollUp";
import mail from "../../assets/mail.png";
import mobile from "../../assets/mobile.png";


const Contact = () => {
  return (
    <main>
      <section>
        <div className="container">
          <div
            className="contact-content contact-info content"
            id="contact-info"
          >
            <div className="row">
              <div className="col-lg-11 col-lg-10">
                <form>
                  <h1 className="content-text">Contact Info</h1>
                  <div>
                    <hr />
                    <ul></ul>
                    <li>
                      <a href={Resume} target="_blank">
                        <img className="logo" src={resumeIcon} alt="CV"></img>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/Volodya1989" target="_blank">
                        <img className="logo" src={github} alt="CV"></img>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/volodymyr-petrytsya-497317196/"
                        target="_blank"
                      >
                        <img className="logo" src={inl} alt="CV"></img>
                      </a>
                    </li>
                    <li>
                    <a href="#" >
                      <img className="logo" src={mobile} alt="CV"></img>
                      </a> <a href="#">224-400-0558</a>
                    </li>
                    <li>
                      <a href="mailto:vpetrytsia@gmail.com" target="_blank">
                      <img className="logo" src={mail} alt="CV"></img>
                      </a>
                      <a href="mailto:vpetrytsia@gmail.com" target="_blank">
                        vpetrytsia@gmail.com
                      </a>
                    </li>
                    <ScrollUp/>

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
