import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faReact,
  faJs,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import Web1 from "../assets/web1.png";
import Web2 from "../assets/web2.png";
import Foto1 from "../assets/foto1.jpeg";
import Foto2 from "../assets/foto2.jpeg";
import Foto3 from "../assets/foto3.jpg";
import Profile from "../assets/profile.jpg";

function Home() {
  return (
    <>
      <section id="header" className="pt-5">
        <div className="container py-md-5">
          <div className="row">
            <div className="col-md-6 d-flex flex-column align-items-start justify-content-center mt-5 mt-md-0">
              <h3>Hola, me llamo Diego Aparicio Vela</h3>
              <h1 className="text-uppercase text-start">
                Front End Web Developer
              </h1>
              <a href="#projects">
                <button className="btn btn-dark mt-3">Proyectos</button>
              </a>
            </div>
            <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
              <img
                className="img-fluid w-75 shadow my-5 rounded-circle"
                src={Profile}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="bg-dark text-light py-5">
        <div className="container">
          <div className="flex-column-reverse flex-md-row row">
            <div className="col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center">
              <div className="about-fotos">
                <div
                  id="carouselExampleRide"
                  className="carousel slide"
                  data-bs-ride="true"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={Foto1} className="" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={Foto2} className="" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={Foto3} className="" alt="..." />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleRide"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleRide"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h2 className="mx-auto mb-5 text-uppercase">Sobre mi</h2>
              <p className="text-start">
                Soy Diego, bachiller en Arte Culinario y estudiante de <strong>Desarrollo de Software en ISIL</strong>. Descubrí mi
                pasión por la tecnología durante mi primera carrera, lo que me
                llevó a especializarme en herramientas modernas como <strong>React,
                JavaScript, Tailwind CSS y Bootstrap</strong> para crear soluciones que
                mejoren la experiencia del usuario.
                <br />
                <br />
                He trabajado en dos ocasiones en los Estados Unidos, lo que me
                permitió desarrollar un <strong>manejo avanzado del inglés</strong> y habilidades
                interculturales. Mi experiencia en cocina me ha brindado una
                base sólida en <strong>comunicación, trabajo en equipo y resolución de
                problemas bajo presión</strong>, cualidades que aplico en el desarrollo
                de software.
                <br />
                <br />
                Soy <strong>apasionado del ciclismo y la fotografía</strong>, actividades que
                fomentan mi <strong>disciplina y creatividad</strong>. Siempre busco aprender y
                superar desafíos para crecer profesional y personalmente.
              </p>
              <div>
                <h4 className="mb-3">Educacion</h4>
                <div>
                  <h5>CS50x: CS50's Introduction to Computer Science</h5>
                  <p>
                    HarvardX
                    <br />
                    Enero 2025 - Actualidad
                  </p>
                </div>
                <div>
                  <h5>Desarrollo de Software</h5>
                  <p>
                    Instituto San Ignacio de Loyola
                    <br />
                    Agosto 2023 - Actualidad (4to ciclo técnico)
                  </p>
                </div>
                <div>
                  <h5>IT Essentials</h5>
                  <p>
                    Cisco Networking Academy
                    <br />
                    Julio 2024
                  </p>
                </div>
                <div>
                  <h5>Curso de programación básica</h5>
                  <p>
                    Platzi
                    <br />
                    Marzo 2023
                  </p>
                </div>
                <div>
                  <h5>Bachiller en Arte Culinario</h5>
                  <p>
                    Universidad San Ignacio de Loyola
                    <br />
                    Marzo 2015 - Diciembre 2021
                  </p>
                </div>
                <a
                  href="https://drive.google.com/file/d/1pe27eluMansG5gP_2Wyr-E-YclRUsnbc/view?usp=drive_link"
                  target="_blank"
                >
                  <button className="btn btn-light mt-3">Ver CV</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="mb-5 text-center">Mis Proyectos</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 text-center">
              <div className="h-100 shadow card">
                <img className="card-img-top" src={Web1} alt="" />
                <div className="p-5 card-body">
                  <div className="fw-bold text-uppercase mb-4 fs-3 card-title h5">
                    Web Polyphia
                  </div>
                  <ul className="list-unstyled d-flex justify-content-center">
                    <li className="mx-2">
                      <FontAwesomeIcon
                        icon={faHtml5}
                        style={{ color: "#ffa742" }}
                        size="2xl"
                      />
                    </li>
                    <li className="mx-2">
                      <FontAwesomeIcon
                        icon={faReact}
                        style={{ color: "#0f7dd2" }}
                        size="2xl"
                      />
                    </li>
                    <li className="mx-2">
                      <FontAwesomeIcon
                        icon={faJs}
                        style={{ color: "#FFD43B" }}
                        size="2xl"
                      />
                    </li>
                  </ul>
                  <a
                    href="https://dvoxgd.github.io/polyphia-react/"
                    target="_blank"
                  >
                    <button
                      type="button"
                      className="shadow text-capitalize btn btn-outline-secondary"
                    >
                      Ver Proyecto
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="h-100 shadow card">
                <img className="card-img-top" src={Web2} alt="" />
                <div className="p-5 card-body">
                  <div className="fw-bold text-uppercase mb-4 fs-3 card-title h5">
                    Web Ideas Digitales
                  </div>
                  <ul className="list-unstyled d-flex justify-content-center">
                    <li className="mx-2">
                      <FontAwesomeIcon
                        icon={faHtml5}
                        style={{ color: "#ffa742" }}
                        size="2xl"
                      />
                    </li>
                    <li className="mx-2">
                      <FontAwesomeIcon
                        icon={faReact}
                        style={{ color: "#0f7dd2" }}
                        size="2xl"
                      />
                    </li>
                    <li className="mx-2">
                      <FontAwesomeIcon
                        icon={faJs}
                        style={{ color: "#FFD43B" }}
                        size="2xl"
                      />
                    </li>
                    <li className="mx-2">
                      <FontAwesomeIcon
                        icon={faBootstrap}
                        size="2xl"
                        style={{ color: "#a31aff" }}
                      />
                    </li>
                  </ul>
                  <a
                    href="https://dvoxgd.github.io/Sistema1573/"
                    target="_blank"
                  >
                    <button
                      type="button"
                      className="shadow text-capitalize btn btn-outline-secondary"
                    >
                      Ver Proyecto
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="h-100 shadow card">
                <div className="col iframe-container">
                  <iframe
                    src={`https://drive.google.com/file/d/1I_4bunn4DLpK0V3MW3MDmnSqy7XSEpVY/preview`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Google Drive Video"
                  ></iframe>
                </div>

                <div className="p-5 card-body">
                  <div className="fw-bold text-uppercase mb-4 fs-3 card-title h5">
                    Web Bike Shop
                  </div>
                  <ul className="list-unstyled d-flex justify-content-center">
                    <li className="mx-2">
                      <FontAwesomeIcon
                        icon={faHtml5}
                        style={{ color: "#ffa742" }}
                        size="2xl"
                      />
                    </li>
                    <li className="mx-2">
                      <FontAwesomeIcon
                        icon={faReact}
                        style={{ color: "#0f7dd2" }}
                        size="2xl"
                      />
                    </li>
                    <li className="mx-2">
                      <FontAwesomeIcon
                        icon={faJs}
                        style={{ color: "#FFD43B" }}
                        size="2xl"
                      />
                    </li>
                    <li className="mx-2">
                      <FontAwesomeIcon
                        icon={faBootstrap}
                        size="2xl"
                        style={{ color: "#a31aff" }}
                      />
                    </li>
                  </ul>
                  <a
                    href="https://drive.google.com/file/d/1I_4bunn4DLpK0V3MW3MDmnSqy7XSEpVY/view"
                    target="_blank"
                  >
                    <button
                      type="button"
                      className="shadow text-capitalize btn btn-outline-secondary"
                    >
                      Ver Proyecto
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="h-100 shadow card">
                <div className="col iframe-container">
                  <iframe
                    src={`https://drive.google.com/file/d/18eCIGLwuOxqBJgXE22vIrbOH5gBWZLfY/preview`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Google Drive Video"
                  ></iframe>
                </div>
                <div className="p-5 card-body">
                  <div className="fw-bold text-uppercase mb-4 fs-3 card-title h5">
                    Bike Shop App
                  </div>
                  <div className="row align-items-center justify-content-center">
                    <img
                      className="img-fluid w-50 mb-3"
                      src="https://developer.android.com/static/codelabs/basic-android-kotlin-compose-first-program/img/840cee8b164c10b.png"
                      alt=""
                    />
                    <a
                      href="https://drive.google.com/file/d/18eCIGLwuOxqBJgXE22vIrbOH5gBWZLfY/view?usp=drive_link"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="shadow text-capitalize btn btn-outline-secondary"
                      >
                        Ver Proyecto
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="h-100 shadow card">
                <div className="col iframe-container">
                  <iframe
                    src={`https://drive.google.com/file/d/1HCZY_XP2bUTEZMwm4VAAWg3DOYmvLlEt/preview`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Google Drive Video"
                  ></iframe>
                </div>
                <div className="p-5 card-body">
                  <div className="fw-bold text-uppercase mb-4 fs-3 card-title h5">
                    Sistema1043 App
                  </div>
                  <div className="row align-items-center justify-content-center">
                    <img
                      className="img-fluid w-50 mb-3"
                      src="https://developer.android.com/static/codelabs/basic-android-kotlin-compose-first-program/img/840cee8b164c10b.png"
                      alt=""
                    />
                    <a
                      href="https://drive.google.com/file/d/1HCZY_XP2bUTEZMwm4VAAWg3DOYmvLlEt/view?usp=drive_link"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="shadow text-capitalize btn btn-outline-secondary"
                      >
                        Ver Proyecto
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="bg-dark text-light py-5">
        <div className="container">
          <div className="row">
            <div className="text-center">
              <h2 className="mb-5">Contáctame</h2>
              <p>diegoaparicio46@gmail.com</p>
              <p>+51 960 251 264</p>
              <hr className="w-50 mx-auto" />
              <ul className="list-unstyled d-flex justify-content-center">
                <li className="mx-2">
                  <a
                    href="https://www.instagram.com/diego_aparicio_v/"
                    target="_blank"
                  >
                    <i class="bi bi-instagram"></i>
                  </a>
                </li>
                <li className="mx-2">
                  <a
                    href="https://www.youtube.com/@diegoaparicio.trabajos4265/featured"
                    target="_blank"
                  >
                    <i class="bi bi-youtube"></i>
                  </a>
                </li>
                <li className="mx-2">
                  <a
                    href="https://www.linkedin.com/in/diego-aparicio-vela-7998b626a/"
                    target="_blank"
                  >
                    <i class="bi bi-linkedin"></i>
                  </a>
                </li>
                <li className="mx-2">
                  <a href="https://github.com/Dvoxgd" target="_blank">
                    <i class="bi bi-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
