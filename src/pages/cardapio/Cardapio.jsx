import '../../styles/_cardapio.scss';
import PizzaFatiada from '../../assets/cardapio/image1.png'
import Drink from '../../assets/cardapio/image2.png'
import PizzaInteira from '../../assets/cardapio/image3.png'
import Pizza from '../../assets/cardapio/image-final.png'
import Logo from '../../assets/home/logo2.png';

export default function Cardapio() {
  return (
    <section>
      <img src={Logo} alt="Logo Pizzaria Code&Crust" className='logo-cardapio' />
    </section>
  );
}
