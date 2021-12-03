import './App.css';
import "react-bootstrap";

import me from './assets/images/photo-of-me.jpeg';
import kanye from "./assets/images/Kanwaye.png";
import jsCode from "./assets/images/Coding Quiz.png";
import workDay from "./assets/images/Work-day-scheduler.png";
import persist from "./assets/images/26CE43A5-3519-4DB0-AD15-08429FC62AA2.jpeg";
import employeeTracker from "./assets/images/Screen Shot 2021-10-17 at 9.00.56 PM.png";
import teamProfile from "./assets/images/Screen Shot 2021-10-17 at 9.03.49 PM.png";


function App() {
  return (
    <div className="App">
      <header className="row header">
        {/* Header and Nav */}
        <h1 className="col-12, col-md-4">Tyler Smith</h1>
        <nav className="col-12, col-md-8 nav-bar">
          <ul>
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#contact-me">Contact Me</a>
            </li>
            <li>
              <a href="./assets/Resume-TylerSmith.pdf" download>Resume</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Banner photo and quote */}
      <figure className="banner">
        <p className="subtitle">Have you tried turning it off and back on again?</p>
      </figure>

      {/* About me */}
      <article className="about-me row" id="about-me">
        <h1 className="col-12 col-md-3 chapter">About <br></br>Me</h1>
        <img src={me} alt="Tyler Smith" className="col-2" />
        <p className="col-7 col-sm-6">I currently live in Southern NH. In High School I took part in SkillsUSA and
          competed in Technical Computer Applications. I competed in the State and National levels, in 2014 I won the National Competition.
          I attended NHTI for IT-Networking, shortly after I realized my true passion was in Software Development!
          So here I am now learning how to become a Web Developer! </p>

      </article>

      {/* Work completed */}
      <article className="work row" id="work">
        <h1 className="col-12 col-md-3 chapter">Work</h1>
        <div className="col-9">
          {/* Image blocks for work */}
          <div className="row justify-content-center">
            <div className="col-md-12 offset-4 offset-md-0 imgblock">
              <a href="https://kelley-mcd.github.io/STANK-Music/">
                <img src={kanye} alt="Kan(way)e" id="mainImg" />
              </a>
              <div className="text-block">
                <h4>Kan(way)e (A group collaboration)</h4>
              </div>
            </div>
            <div className="col-12 col-md-6 offset-6 offset-md-0 imgblock">
              <a href="https://mrtbird539.github.io/Javascript-Coding-Assesment/">
                <img src={jsCode} alt="JS Coding Quiz" className="subImg"/>
              </a>
              <div className="text-block">
                <h4>JS Coding Quiz</h4>
              </div>
            </div>
            <div className="col-12 col-md-6 offset-6 offset-md-0 imgblock">
              <a href="https://mrtbird539.github.io/Daily-Work-Planner/">
                <img src={workDay} alt="Work Day Scheduler" className="subImg" />
              </a>
              <div className="text-block">
                <h4>Work Day Scheduler</h4>
              </div>
            </div>
            <div className="col-12 col-md-6 offset-6 offset-md-0 imgblock">
              <a href="https://github.com/OneFJef/Persist">
                <img src={persist} alt="Persist" className="subImg"/>
              </a>
              <div className="text-block">
                <h4>Persist</h4>
              </div>
            </div>
            <div className="col-12 col-md-6 offset-6 offset-md-0 imgblock">
              <a href="https://github.com/mrtbird539/Employee-Tracker">
                <img src={employeeTracker} alt="Employee-Tracker" className="subImg" />
              </a>
              <div className="text-block">
                <h4>Employee-Tracker</h4>
              </div>
            </div>
            <div className="col-12 col-md-6 offset-6 offset-md-0 imgblock">
              <a href="https://github.com/mrtbird539/Team-profile-generator">
                <img src={teamProfile} alt="Team Profile Generator" className="subImg" />
              </a>
              <div className="text-block">
                <h4>Team Profile Generator</h4>
              </div>
            </div>
          </div>
        </div>
      </article>
      {/* Contact Me */}
      <article className="contact-me row" id="contact-me">
        <h1 className="col-12 col-md-3 chapter">Contact<br></br>Me</h1>
        <section className="col-md-3 col-4">
          <a href="tel:603-845-7468">603-845-7468</a>
        </section>
        <section className="col-md-3 col-4">
          <a href="mailto:mrtbird539@gmail.com">Email Me!</a>
        </section>
        <section className="col-md-3 col-4">
          <a href="https://github.com/mrtbird539">GitHub</a>
        </section>
      </article>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;