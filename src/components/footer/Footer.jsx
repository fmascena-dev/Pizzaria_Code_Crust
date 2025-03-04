import '../../styles/_footer.scss';
// import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { IoLogoWhatsapp } from 'react-icons/io';
import { RiInstagramFill } from 'react-icons/ri';
import ButtonCriadores from '../button_criadores/ButtonCriadores';

export default function Footer() {
  return (
    <footer className="footer">
      <section className="siga">
        <p>Siga nossas redes</p>
        <div className="redes-sociais">
          <a href="#" className="instagram">
            <RiInstagramFill />
          </a>
          <a href="#" className="facebook">
            <FaFacebook />
          </a>
          <a href="#" className="twitter">
            <FaSquareXTwitter />
          </a>
        </div>
      </section>

      <section className='abertura'>
        <p>Aberto de Terça à Domingo, das 18h às 23h.</p>
        <p>Todos os direitos reservados.</p>
        <p>
          Site desenvolvido por: <ButtonCriadores />
        </p>
      </section>

      <section className='contato'>
        <IoLogoWhatsapp />
        <p>67 99876-0003</p>
      </section>
    </footer>
  );
}
