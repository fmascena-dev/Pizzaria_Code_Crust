import '../../styles/_localizacao.scss';
import Logo from '../../assets/home/logo2.png';
import Mapa from '../../assets/localizacao/mapa.png';
import ImgLeft from '../../assets/localizacao/imagem-esquerda.png';
import ImgRight from '../../assets/localizacao/imagem-direita.png';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import ButtonScroll from '../../components/button-scroll/ButtonScroll';

export default function Localizacao() {
  const { register, handleSubmit } = useForm();
  const [resultado, setResultado] = useState('');

  const getBairroFromCep = (cep) => {
    if (cep.startsWith('79002')) return 'Centro';
    if (cep.startsWith('79021')) return 'Jardim dos Estados';
    return 'Fora da área de atendimento';
  };

  const onSubmit = (data) => {
    const bairro = getBairroFromCep(data.cep);

    if (bairro === 'Centro') {
      setResultado('Loja Centro: Av. Afonso Pena, 2024.');
    } else if (bairro === 'Jardim dos Estados') {
      setResultado('Loja Jardim dos Estados: Rua Euclides da Cunha, 3600.');
    } else {
      setResultado('Por enquanto não atendemos sua região.');
    }
  };

  return (
    <section className="localizacao">
      <img src={Logo} alt="logo da pizzaria" className="logo-localizacao" />

      <section className="container-principal">
        <section className="search">
          <h1>Localização</h1>
          <h3>TEM UMA CODE & CRUST PERTO DE VOCÊ</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Digite seu CEP"
              {...register('cep', { required: true })}
            />
            <button type="submit" className="encontre-loja">
              Encontre uma loja
            </button>
          </form>
          {resultado && <div className="resultados">{resultado}</div>}
        </section>

        <figure className="map">
          <img src={Mapa} alt="Mapa de Localização" />
        </figure>
      </section>

      <figure className="pictures">
        <img src={ImgLeft} alt="Parte externa da pizzaria" />
        <img src={ImgRight} alt="Parte interna da pizzaria" />
      </figure>

      <ButtonScroll />
    </section>
  );
}
