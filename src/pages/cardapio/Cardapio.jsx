import '../../styles/_cardapio.scss';
import PizzaFatiada from '../../assets/cardapio/image1.png';
import Drink from '../../assets/cardapio/image2.png';
import PizzaInteira from '../../assets/cardapio/image3.png';
import Pizza from '../../assets/cardapio/image-final.png';
import Logo from '../../assets/home/logo2.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function Cardapio() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className="cardapio">
      <img
        src={Logo}
        alt="Logo Pizzaria Code&Crust"
        className="logo-cardapio"
      />
      <h1>Cardápio</h1>

      <section className="menu-cardapio">
        <div className="item">
          <a href="#salgada">
            <img src={PizzaFatiada} alt="pizza salgada" />
          </a>
          <p>Salgadas</p>
        </div>
        <div className="item">
          <a href="#bebidas">
            <img src={Drink} alt="bebida" />
          </a>
          <p>Bebidas</p>
        </div>
        <div className="item">
          <a href="#doce">
            <img src={PizzaInteira} alt="pizza doce" />
          </a>
          <p>Doces</p>
        </div>
      </section>

      <section className="pizza-salgada" id="salgada">
        <div className="salgada">
          <h3>
            Pizza meio a meio será cobrada pela média com opções integral e sem
            glúten.
          </h3>

          <div className="sessao-pizza">
            <h3>Margherita</h3>
            <p>Molho de tomate especial, mozzarella e manjericão.</p>
            <p>Grande: R$ 106,00 | Pequeno: R$ 74,20</p>
          </div>

          <div className="sessao-pizza">
            <h3>Margherita Speciale</h3>
            <p>Molho de tomate, mozzarella de búfala e manjericão.</p>
            <p>Grande: R$ 114,00 | Pequeno: R$ 79,80</p>
          </div>

          <div className="sessao-pizza">
            <h3>Nostra Burrata</h3>
            <p>
              Queijo burrata, tomate-cereja marinado, nozes crocantes, lascas de
              parmesão e rúcula.
            </p>
            <p>Grande: R$ 112,00 | Pequeno: R$78,40</p>
          </div>

          <div className="sessao-pizza">
            <h3>Napoletana</h3>
            <p>
              Molho de tomate, parmesão ralado, alho cru, orégano e manjericão.
            </p>
            <p>Grande: R$ 106,00 | Pequeno: R$ 74,20</p>
          </div>

          <div className="sessao-pizza">
            <h3>Alici</h3>
            <p>Molho de tomate, filés de alici, alho cru e orégano.</p>
            <p>Grande: R$ 117,00 | Pequeno: R$ 81,90</p>
          </div>
        </div>
      </section>

      <section>
        <div className="bebidas" id="bebidas">
          <div className="sessao-bebida">
            <h3>Cerveja 600ml (Original/Serramalte)</h3>
            <p>R$ 19,90</p>
          </div>
          <div className="sessao-bebida">
            <h3>Água Prata sem gás</h3>
            <p>R$ 8,00</p>
          </div>
          <div className="sessao-bebida">
            <h3>Água Prata com gás</h3>
            <p>R$ 8,00</p>
          </div>
          <div className="sessao-bebida">
            <h3>Refrigerante lata</h3>
            <p>350ml</p>
            <p>R$ 10,00</p>
          </div>
          <div className="sessao-bebida">
            <h3>Suco Natural</h3>
            <p>340ml</p>
            <p>(Laranja, Abacaxi, Melancia, Maracujá, Morango e Limão)</p>
            <p>R$ 15,00</p>
          </div>
        </div>
      </section>

      <section>
        <div className="sessao-doce" id="doce">
          <div className="pizza-doce">
            <h3>Prestígio</h3>
            <p>Chocolate preto e côco ralado</p>
            <p>Grande: R$ 106,00 | Pequeno: R$ 74,20</p>
          </div>
          <div className="pizza-doce">
            <h3>Banana</h3>
            <p>Creme de leite, bananas, açúcar de confeiteiro e canela</p>
            <p>Grande: R$ 106,00 | Pequeno: R$ 74,20</p>
          </div>
          <div className="pizza-doce">
            <h3>Califórnia</h3>
            <p>Creme de leite, frutas em calda e banana</p>
            <p>Grande: R$ 112,00 | Pequeno: R$78,40</p>
          </div>
          <div className="pizza-doce">
            <h3>Chocolate com Morangos</h3>
            <p>
              Creme de leite, chocolate preto ou branco, morangos e fios de
              bisnaga
            </p>
            <p>Grande: R$ 112,00 | Pequeno: R$78,40</p>
          </div>
        </div>
      </section>

      <figure className="pessoal">
        <img className="img-final" src={Pizza} alt="Pessoas comendo Pizza" />
      </figure>

      {showButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </section>
  );
}
