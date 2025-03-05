import '../../styles/_home.scss'
import Logo from '../../assets/home/logo2.png';
import ImgTwo from '../../assets/home/pizza1.jpg'
import 'aos/dist/aos.css';

export default function Home() {
    return (
        <main className="home">
      <section className="inicio">
        <h1>Seja muito bem-vindo à Pizzaria</h1>
        <img src={Logo} className="logo" alt="Logo Code&Crust" />
      </section>
      <section className="historia">
        <h2>Conheça a Nossa História</h2>
        <div className="paragrafos">
          <p data-aos="fade-right">
            No coração de uma cidade vibrante, onde o amor pela tecnologia se
            encontrava com a paixão pela gastronomia, nasceu a Code&Crust
            Pizzaria. A história começa com dois amigos de infância, Lucas e
            Ana, que sempre sonharam em criar um espaço onde pudessem unir suas
            duas grandes paixões: a programação e a culinária.
          </p>
          <p data-aos="fade-left">
            Lucas, um talentoso desenvolvedor de software, sempre passava horas
            criando códigos e aplicativos em seu computador. Ana, por outro
            lado, era uma cozinheira excepcional, conhecida por suas receitas de
            pizza irresistíveis, que faziam todos na vizinhança voltarem por
            mais. Durante longas noites de programação, os dois se reuniam para
            compartilhar suas ideias, e foi em uma dessas noites que surgiu a
            ideia da Code&Crust.
          </p>
          <p data-aos="fade-right">
            A inspiração veio quando Lucas, em uma de suas madrugadas de
            programação, teve um insight sobre como poderia usar a tecnologia
            para melhorar a experiência de pedir pizzas. Ele começou a desenhar
            um aplicativo que permitisse aos clientes personalizar suas pizzas
            de maneira interativa, escolhendo ingredientes, tamanhos e até mesmo
            a crocância da massa. Ana, animada com a ideia, começou a
            experimentar novas receitas, combinando sabores tradicionais com
            toques modernos, sempre com o objetivo de oferecer pizzas de alta
            qualidade.
          </p>
          <p data-aos="fade-left">
            Com o plano em mente, eles decidiram abrir a
            <strong>Code&Crust Pizzaria</strong>, um lugar onde a tecnologia e a
            culinária se encontrariam. O conceito era simples: cada pizza seria
            uma obra de arte, assim como um código bem escrito. O nome
            "Code&Crust" simbolizava essa união entre a programação e a massa
            crocante das pizzas. Logo, a pizzaria se tornou um sucesso. Os
            clientes adoravam o aplicativo que Lucas desenvolveu, que não apenas
            permitia a personalização das pizzas, mas também oferecia sugestões
            baseadas em suas preferências anteriores. Enquanto isso, Ana
            continuava a inovar no cardápio, trazendo sabores de diferentes
            partes do mundo para suas criações.
          </p>
          <p data-aos="fade-right">
            O ambiente da Code&Crust era acolhedor, decorado com referências ao
            mundo da tecnologia, como murais de código e ilustrações de pizzas.
            A equipe era composta por amantes da tecnologia e da culinária, que
            compartilhavam a mesma visão de oferecer uma experiência única aos
            clientes. Com o passar dos anos, a Code&Crust Pizzaria se expandiu,
            abrindo filiais em outras cidades e sempre mantendo o compromisso
            com a qualidade e a inovação. Lucas e Ana continuaram a trabalhar
            juntos, inspirando-se mutuamente e criando uma comunidade de pessoas
            que não apenas amavam pizza, mas também a tecnologia.
          </p>
          <p data-aos="fade-left">
            Hoje, a <strong>Code&Crust Pizzaria</strong> é mais do que apenas um
            lugar para comer; é um espaço onde as pessoas se reúnem para
            celebrar a vida, a amizade e a paixão por sabores e códigos. E
            assim, a história de origem da Code&Crust continua a ser escrita,
            com cada pizza servida sendo uma nova linha de código na deliciosa
            história que os amigos construíram juntos.
          </p>
        </div>
      </section>
      <section className="img-final" data-aos="fade-right">
        <img src={ImgTwo} alt="" />
      </section>
    </main>
    )
};
