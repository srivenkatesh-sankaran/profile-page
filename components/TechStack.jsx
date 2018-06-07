import React from 'react';

import '../assets/css/TechStack.css';

const revealAll = (event) => {
  const { currentTarget } = event;
  const ratings = document.getElementsByClassName('ratings');
  if (ratings) {
    [].forEach.call(ratings, (rating, index) => {
      rating.classList.toggle(`reveal-all-${index + 1}`);
    });
  }

  if (currentTarget) {
    if (currentTarget.value === 'Reveal') {
      console.log(currentTarget.innerText);
      currentTarget.previousSibling.style.display = 'none';
      currentTarget.innerText = 'Close All';
      currentTarget.value = 'Close';
    } else {
      currentTarget.previousSibling.style.display = 'inline';
      currentTarget.innerText = 'Reveal All';
      currentTarget.value = 'Reveal';
    }
  }
};

const TechStack = () => (
  <div>
    <div className="reveal-all-text">
      <span> Hover each image to reveal details or just click, </span>
      <button value="Reveal" onClick={event => revealAll(event)}> Reveal All </button>
    </div>
    <div className="tech-stack">
      <div className="tech-stack-section">
        <div className="ratings">
          <img className="img-circle" alt="html" height="120" width="150" src="../assets/techstack/html.png" />
          <span className="reveal-text">
            <p> HTML5 </p>
            <p> (5 Years) </p>
            <span className="five-stars" />
          </span>
        </div>
        <div className="ratings">
          <img className="img-circle" alt="css" height="120" width="150" src="../assets/techstack/css.png" />
          <span className="reveal-text">
            <p> CSS3 </p>
            <p> (5 Years) </p>
            <span className="four-stars" />
          </span>
        </div>
        <div className="ratings">
          <img className="img-circle" alt="react" height="120" width="150" src="../assets/techstack/react.png" />
          <span className="reveal-text">
            <p> React </p>
            <p> (1 Year) </p>
            <span className="four-stars" />
          </span>
        </div>
        <div className="ratings">
          <img className="img-circle" alt="javascript" height="120" width="150" src="../assets/techstack/javascript.png" />
          <span className="reveal-text">
            <p> JavaScript </p>
            <p> (5 Years) </p>
            <span className="four-stars" />
          </span>
        </div>
        <div className="ratings">
          <img className="img-circle" alt="java" height="120" width="150" src="../assets/techstack/java.png" />
          <span className="reveal-text">
            <p> Java </p>
            <p> (5 Years) </p>
            <span className="five-stars" />
          </span>
        </div>
        <div className="ratings">
          <img className="img-circle" alt="ruby" height="120" width="150" src="../assets/techstack/ruby.png" />
          <span className="reveal-text">
            <p> Ruby </p>
            <p> (3 Years) </p>
            <span className="four-stars" />
          </span>
        </div>
      </div>
      <div className="tech-stack-section">
        <div className="ratings">
          <img className="img-circle" alt="jquery" height="120" width="150" src="../assets/techstack/jquery.png" />
          <span className="reveal-text">
            <p> jQuery </p>
            <p> (5 Years) </p>
            <span className="four-stars" />
          </span>
        </div>
        <div className="ratings">
          <img className="img-circle" alt="ios" height="120" width="150" src="../assets/techstack/ios.png" />
          <span className="reveal-text">
            <p> Objective-C  </p>
            <p> (2 Years) </p>
            <span className="two-stars" />
          </span>
        </div>
        <div className="ratings">
          <img className="img-circle" alt="rails" height="120" width="150" src="../assets/techstack/rails.png" />
          <span className="reveal-text">
            <p> Rails </p>
            <p> (3 Years) </p>
            <span className="four-stars" />
          </span>
        </div>
        <div className="ratings">
          <img className="img-circle" alt="git" height="120" width="150" src="../assets/techstack/git.png" />
          <span className="reveal-text">
            <p> GitHub </p>
            <p> (3 Years) </p>
            <span className="five-stars" />
          </span>
        </div>
        <div className="ratings">
          <img className="img-circle" alt="spring" height="120" width="150" src="../assets/techstack/spring.png" />
          <span className="reveal-text">
            <p> Spring </p>
            <p> (2 Years) </p>
            <span className="four-stars" />
          </span>
        </div>
        <div className="ratings">
          <img className="img-circle" alt="struts" height="120" width="150" src="../assets/techstack/struts.jpeg" />
          <span className="reveal-text">
            <p> Struts </p>
            <p> (1 Year) </p>
            <span className="two-stars" />
          </span>
        </div>
      </div>
      <div className="tech-stack-section">
        <div className="ratings">
          <img className="img-circle" alt="jasmine" height="120" width="150" src="../assets/techstack/jasmine.png" />
          <span className="reveal-text">
            <p> Jasmine </p>
            <p> (3 Years) </p>
            <span className="four-stars" />
          </span>
        </div>
        <div className="ratings">
          <img className="img-circle" alt="webdriverio" height="120" width="150" src="../assets/techstack/webdriverio.png" />
          <span className="reveal-text">
            <p> WebdriverIO </p>
            <p> (1 Year) </p>
            <span className="four-stars" />
          </span>
        </div>
        <div className="ratings">
          <img className="img-circle" alt="junit" height="120" width="150" src="../assets/techstack/junit.png" />
          <span className="reveal-text">
            <p> JUnit </p>
            <p> (3 Years) </p>
            <span className="four-stars" />
          </span>
        </div>
        <div className="ratings">
          <img className="img-circle" alt="splunk" height="120" width="150" src="../assets/techstack/splunk.png" />
          <span className="reveal-text">
            <p> Splunk </p>
            <p> (2 Years) </p>
            <span className="four-stars" />
          </span>
        </div>
        <div className="ratings">
          <img className="img-circle" alt="bootstrap" height="120" width="150" src="../assets/techstack/bootstrap.png" />
          <span className="reveal-text">
            <p> Bootstrap </p>
            <p> (2 Years) </p>
            <span className="three-stars" />
          </span>
        </div>
        <div className="ratings">
          <img className="img-circle" alt="mysql" height="120" width="150" src="../assets/techstack/mysql.png" />
          <span className="reveal-text">
            <p> MySQL </p>
            <p> (2 Years) </p>
            <span className="three-stars" />
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default TechStack;
