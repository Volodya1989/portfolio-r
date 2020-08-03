import React from "react";
import personal from "../images/personal.png";
function About() {
  return (
    <div>
      <main>
        <section>
          <div class="container about-container">
            <div id="about-info">
              <div class="row">
                <div class="col-sm-12">
                  <h1 class="content-text">About Me</h1>
                  <hr />
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12">
                  <img src={personal} class="card-img" alt="personal image" />

                  <p>
                    Who am I? I would say that I am the person who believe that
                    we become smarter people by resolving prolems, but not by
                    escaping from them out of fear. Having said this I would say
                    that I really enjoy coding. Why? Because of at least three
                    reasons. First, I just love it. Secondly, being Software
                    Developer always pushes me to learn and develop myself as
                    personality. Thirdly, there is no way to escape from
                    problems while coding, but the only way to success is to
                    resolve them.
                  </p>
                  <p>
                    Now a few words about my background. Originally I'm from
                    Ukraine. Having moved to the US more than 8 years ago.
                    Started my career as QA Engineer and worked for a while.
                    However, I felt that it was not enough for me. So, then I
                    decided to become Software Developer and now enjoy by being
                    whom I am. Now, I'm looking for new opportunities as Full
                    Stack Developer.
                  </p>
                  <hr />

                  <a href="./assets/images/Resume_Vol_Petrytsya.pdf">
                    <h3>My Resume</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
