import Spline from '@splinetool/react-spline';
import './styles/main.scss';
import Logo from "./images/logoa.png";
import p4 from './images/p4.jpg'
import Instagram from "./images/instagram.svg";
import Facebook from "./images/facebook.svg";
import Linkedin from "./images/linkedin.svg";
import { useState } from "react";
import './App.css';
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function App() {

    const [toggleMenu, setToggleMenu] = useState(true);

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    };
    return (
        <div className="App">
           <Spline scene="https://prod.spline.design/hW8H7gyxSvZvt5EX/scene.splinecode" />
            <nav className={toggleMenu === true ? "" : "active"}>
                <div className="itemsContainer">
                    <div className="logo">
                        <img src="https://media.istockphoto.com/id/1307651181/vector/the-word-portfolio-on-colorful-background.jpg?s=170667a&w=0&k=20&c=7FjcId1e_IceTEpNmtNl07MiY5-GB6zG6ERGz1K8G5M=" alt="logo" />
                    </div>
                    <div className="navList">
                        <ul>
                            <li>
                                <a href="/">home</a>
                            </li>
                            <li>
                                <a href="#about">about</a>
                            </li>
                            <li>
                                <a href="#projects">projects</a>
                            </li>
                            <li>
                                <a href="#contact">contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="burgerContainer">

                        <div
                            className="burgerTrigger"
                            onClick={() => {
                                handleToggleMenu();
                            }}

                        > </div>
                        <div className="burgerMenu"></div>

                    </div>

                </div>

            </nav>
            <section>
                <div className="itemsContainer">
                    <div className="contents">
                        <h1>
                            Let's build <span>something epic.</span>
                        </h1>
                        <p>
                            --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                        </p>
                    </div>
                    <div className="buttons">
                        <button className="one" ><a href="#about">Get started.</a></button>
                        <button className="two" ><a href="#about">My Story.</a></button>
                    </div>
                </div>

            </section>

            <section id="about">
                <div class="container" className="itemsContainer">
                    <div className="contents">
                        <h1 className='form'>ABOUT</h1>
                        <center>
                        <div class="image">
                            <img src="https://www.linkpicture.com/q/p4_4.jpg" alt="profile" height="400px" />
                        </div></center>
                        <div class="details">
                            <h2>Santhosh</h2>
                            <p>Web Developer (UI)</p>
                            <ul class="social-icons">
                                <li><a href="https://twitter.com/santhoshgg5"><h1><FaFacebookF /></h1></a></li>
                                <li><a href="https://twitter.com/santhoshgg5"><h1><FaTwitter /></h1></a></li>
                                <li><a href="https://www.linkedin.com/in/santhosh-gg-a808461a0"><h1><FaLinkedin /></h1></a></li>
                                <li><a href="https://github.com/santhoshsandan"><h1><FaGithub /></h1></a></li>
                            </ul>
                            <h5>Hi, I'm santhosh, a web developer and I have developed some responsive websites.</h5><br />
                            <h5>experience in HTML,CSS,JavaScript,and React.</h5>
                            <h5>Name: Gajam santhosh</h5>
                            <h5>mail-id: gajamsanthoshg@gmail.com</h5>
                            <h5>phone: 7396181785</h5>
                            <h5>Qualification:B-tech</h5>
                            <h5>(Electronics and Communication Engineering)</h5>
                            <h5>percentage: 6.5 cgpa </h5>
                            <p>I have developed some responsive websites.</p><br />
                        </div>
                    </div>
                </div>
            </section>
            <section id="projects">
                <div class="container" className="itemsContainer">
                    <center><h2>Projects</h2></center>
                    <div class="card" className="contents">
                        <div class="card">
                            <img src="https://images.pexels.com/photos/2882566/pexels-photo-2882566.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Project 1" />
                            <h3>Project 1</h3>
                            <p>login and register page .</p>
                            <a href="https://firebase-authorisation.netlify.app/">View Project</a>
                        </div>
                        <div class="card">
                            <img src="https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Project 3" />
                            <h3>Project 2</h3>
                            <p>E-commerce website.</p>
                            <a href="https://ecom-portal.netlify.app/">View Project</a>
                        </div>
                        <div class="card">
                            <img src="https://images.pexels.com/photos/13061469/pexels-photo-13061469.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Project 2" />
                            <h3>Project 3</h3>
                            <p>whether forcast website statewise.</p>
                            <a href="https://weather.iondrimbafilho.me/?ref=morioh.com&utm_source=morioh.com">View Project</a>
                        </div>
                        <div class="card">
                            <img src="https://images.pexels.com/photos/1178684/pexels-photo-1178684.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Project 3" />
                            <h3>Project 4</h3>
                            <p>Countdown Timer</p>
                            <a href="https://santhoshsandan.github.io/timer/">View Project</a>
                        </div>
                        <div class="card">
                            <img src="https://images.pexels.com/photos/3643925/pexels-photo-3643925.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Project 3" />
                            <h3>Project 5</h3>
                            <p>signup page.</p>
                            <a href="https://zippy-pasca-2d859b.netlify.app/Register">View Project</a>
                        </div>
                        <div class="card">
                            <img src="https://images.pexels.com/photos/6963030/pexels-photo-6963030.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Project 3" />
                            <h3>Project 6</h3>
                            <p>calculator website.</p>
                            <a href="https://tuanpham-dev.github.io/calculator-react-typescript/?ref=morioh.com&utm_source=morioh.com">View Project</a>
                        </div>
                        <div class="card">
                            <img src="https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Project 3" />
                            <h3>Project 7</h3>
                            <p>movies website.</p>
                            <a href="https://shigatsuflix.netlify.app/movie">View Project</a>
                        </div>
                        <div class="card">
                            <img src="https://images.pexels.com/photos/3699921/pexels-photo-3699921.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Project 3" />
                            <h3>Project 8</h3>
                            <p>state wise wikipedia.</p>
                            <a href="https://state-info0.netlify.app/">View Project</a>
                        </div>
                    </div>
                </div>
            </section>
            <section id='contact'>
                <div className="cont">
                    <div className="cat">

                        <div><a href="https://twitter.com/santhoshgg5"><h1><FaFacebookF /></h1></a></div>
                        <div><a href="https://twitter.com/santhoshgg5"><h1><FaTwitter /></h1></a></div>
                        <div><a href="https://www.linkedin.com/in/santhosh-gg-a808461a0"><h1><FaLinkedin /></h1></a></div>
                        <div><a href="https://github.com/santhoshsandan"><h1><FaGithub /></h1></a></div>

                    </div>
                    <div className='form'>
                        <h1>Contact</h1>

                        <form target="_blank" action="https://formsubmit.co/gajamsanthosh839@gmail.com" method="POST">
                            <div class="form-group">
                                <div class="form-row">
                                    <div class="col">
                                        <input type="text" name="name" class="form-control" placeholder="Your Name" required />
                                    </div>
                                    <div class="col">
                                        <input type="email" name="email" class="form-control" placeholder="Your Email Address" required />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
                            </div>

                            <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
                        </form>
                    </div>
                </div>

            </section>


            <footer>
                <div className="contents">
                   
                    <div className="creator">
                        
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
