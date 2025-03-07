import '../../styles/_criadores.scss';
import Antonio from '../../assets/criadores/Antonio.jpg'
import Felipe from '../../assets/criadores/Felipe.jpg'
import Francisco from '../../assets/criadores/Francisco.jpg'
import LuisFelipe from '../../assets/criadores/LuisFelipe.jpg'
import Priscila from '../../assets/criadores/Priscila.jpg'
import AOS from 'aos';
import { MdOutlineEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Criadores() {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });

    return (
      <section className='criadores'>
        <h1>Criadores da Página</h1>
        <p class="creators-intro">
          Durante o curso de Desenvolvimento Front-End pela Proz Educação, demos
          início ao nosso projeto do curso, começamos pelo Figma, tivemos um
          prazo para tirar o projeto do "papel" e montar toda a estrutura HTMl,
          posteriormente fizemos a implementação da estilização com o CSS e, por
          fim, tivemos um prazo para fazer o nosso site ter interação com o
          usuário através da linguagem de programação JavaScript. Nos dedicamos
          bastante a este projeto, aonde colocamos em prática todo o aprendizado
          que obtivemos durante as aulas online e gravadas na plataforma.
        </p>
        <section class="creators-section" data-aos="fade-right">
          <figure class="creators-cards">
            <img
              class="creators-img"
              src={Priscila}
              alt="foto da Priscila"
            />
            <figcaption>
              <h2>Priscila Veloso Silva</h2>
              <p class="contato">Telefone: (67) 99237-4670</p>
              <a
                href="mailto:priscilavelosoconsultoria@gmail.com"
                target="_blank"
              >
                <MdOutlineEmail />
                <p>EMAIL</p>
              </a>
              <a
                href="https://www.linkedin.com/in/priscila-veloso-8a763036"
                target="_blank"
              >
                <FaLinkedin />
                <p>LINKEDIN</p>
              </a>
              <a href="https://github.com/privelosos" target="_blank">
                <FaGithub />
                <p>GITHUB</p>
              </a>
            </figcaption>
          </figure>
        </section>
        <section class="creators-section" data-aos="fade-left">
          <figure class="creators-cards">
            <figcaption>
              <h2>Felipe Mascena Seabra</h2>
              <p class="contato">Telefone: (21) 97929-8951</p>
              <a href="mailto:felipe.mascena.dev@gmail.com" target="_blank">
                <MdOutlineEmail />
                <p>EMAIL</p>
              </a>
              <a
                href="https://www.linkedin.com/in/felipe-mascena"
                target="_blank"
              >
                <FaLinkedin />
                <p>LINKEDIN</p>
              </a>
              <a href="https://github.com/fmascena-dev" target="_blank">
                <FaGithub />
                <p>GITHUB</p>
              </a>
            </figcaption>
            <img
              class="creators-img"
              src={Felipe}
              alt="foto do Felipe"
            />
          </figure>
        </section>
        <section class="creators-section" data-aos="fade-right">
          <figure class="creators-cards">
            <img
              class="creators-img"
              src={Francisco}
              alt="foto da Priscila"
            />
            <figcaption>
              <h2>Francisco Inácio Paiva Ferreira</h2>
              <p class="contato">Telefone: (19) 98841-1373</p>
              <a href="mailto:francisco.ferreira@unesp.br" target="_blank">
                <MdOutlineEmail />
                <p>EMAIL</p>
              </a>
              <a
                href="https://www.linkedin.com/in/francisco-inacio-paiva-ferreira-3733a0174/"
                target="_blank"
              >
                <FaLinkedin />
                <p>LINKEDIN</p>
              </a>
              <a href="https://github.com/franciscoinacioo" target="_blank">
                <FaGithub />
                <p>GITHUB</p>
              </a>
            </figcaption>
          </figure>
        </section>
        <section class="creators-section" data-aos="fade-left">
          <figure class="creators-cards">
            <figcaption>
              <h2>Antonio Melo</h2>
              <p class="contato">Telefone: (XX) XXXXX-XXXX</p>
              <a href="mailto:antoniohfmelo@outlook.com" target="_blank">
                <MdOutlineEmail />
                <p>EMAIL</p>
              </a>
              <a href="https://www.linkedin.com/in/antonmelo/" target="_blank">
                <FaLinkedin />
                <p>LINKEDIN</p>
              </a>
              <a href="https://github.com/antonmelo" target="_blank">
                <FaGithub />
                <p>GITHUB</p>
              </a>
            </figcaption>
            <img
              class="creators-img"
              src={Antonio}
              alt="foto da Priscila"
            />
          </figure>
        </section>
        <section class="creators-section" data-aos="fade-right">
          <figure class="creators-cards">
            <img
              class="creators-img"
              src={LuisFelipe}
              alt="foto da Priscila"
            />
            <figcaption>
              <h2>Luis Felipe de Souza Campos</h2>
              <p class="contato">Telefone: (31) 99969-7882</p>
              <a href="mailto:luis.souza@estudante.iftm.edu.br" target="_blank">
                <MdOutlineEmail />
                <p>EMAIL</p>
              </a>
              <a
                href="https://www.linkedin.com/in/luis-felipe-de-souza-campos-8666521b7/"
                target="_blank"
              >
                <FaLinkedin />
                <p>LINKEDIN</p>
              </a>
              <a href="https://github.com/LuisFelipeSc" target="_blank">
                <FaGithub />
                <p>GITHUB</p>
              </a>
            </figcaption>
          </figure>
        </section>
      </section>
    );
};
