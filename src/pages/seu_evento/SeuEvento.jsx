import '../../styles/_seu-evento.scss';
import { useForm } from 'react-hook-form';
import Logo from '../../assets/home/logo2.png';
import ButtonScroll from '../../components/button-scroll/ButtonScroll';

export default function SeuEvento() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(
      `Reserva agendada com sucesso!\nNome: ${data.nome}\nE-mail: ${data.email}\nTelefone: ${data.telefone}\nData: ${data.dataEvento}\nPessoas: ${data.pessoas}`,
    );
    reset();
  };

  return (
    <section className="seu-evento">
      <div className="logo-evento">
        <img src={Logo} alt="Logomarca da pizzaria" />
      </div>

      <section className="inicio_seu-evento">
        <h1>Celebre com Sabor na Pizzaria Code & Crust!</h1>
      </section>

      <section className="bem-vindo">
        <div>
          <p>
            Na <span>Pizzaria Code & Crust</span>, cada fatia conta uma história
            e cada evento se transforma em uma experiência especial. Nosso
            ambiente acolhedor e cardápio irresistível de pizzas artesanais são
            o cenário perfeito para comemorar momentos importantes com amigos e
            família.
          </p>
        </div>
      </section>

      <section className="eventos">
        <div className="div-eventos">
          <h2>Eventos Especiais na Pizzaria Code & Crust</h2>
          <p>
            Planejando uma festa de aniversário, uma reunião entre amigos ou até
            mesmo uma comemoração íntima em família? Nosso espaço foi pensado
            para acolher todos os tipos de celebrações! Oferecemos um ambiente
            agradável, atendimento dedicado e um cardápio de dar água na boca.
          </p>
          <h3>O que oferecemos para seus eventos:</h3>
          <ul>
            <li>Espaço exclusivo para festas e reuniões;</li>
            <li>Cardápios personalizados com pizzas, massas e bebidas;</li>
            <li>Decoração especial (sob consulta);</li>
            <li>Equipe pronta para atender suas necessidades;</li>
            <li>Área infantil (opcional).</li>
          </ul>
          <p>
            Seja qual for a ocasião, estamos prontos para fazer dela um momento
            memorável com as melhores pizzas da cidade!
          </p>
        </div>
      </section>

      <section className="form-container">
        <div className="div-form">
          <h3>Formulário de Reserva de Evento</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Nome Completo"
              {...register('nome', { required: 'O nome é obrigatório' })}
            />
            {errors.nome && (
              <span className="error">{errors.nome.message}</span>
            )}

            <input
              type="email"
              placeholder="E-mail"
              {...register('email', {
                required: 'O e-mail é obrigatório',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Digite um e-mail válido',
                },
              })}
            />
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}

            <input
              type="text"
              placeholder="Telefone para contato"
              {...register('telefone', {
                required: 'O telefone é obrigatório',
              })}
            />
            {errors.telefone && (
              <span className="error">{errors.telefone.message}</span>
            )}

            <input
              type="date"
              {...register('dataEvento', {
                required: 'A data é obrigatória',
              })}
            />
            {errors.dataEvento && (
              <span className="error">{errors.dataEvento.message}</span>
            )}

            <input
              type="number"
              placeholder="Quantas pessoas?"
              {...register('pessoas', {
                required: 'Informe o número de pessoas',
                min: { value: 1, message: 'Deve ser pelo menos 1 pessoa' },
              })}
            />
            {errors.pessoas && (
              <span className="error">{errors.pessoas.message}</span>
            )}

            <button type="submit" className="btn-reserva">
              RESERVAR
            </button>
          </form>
        </div>
      </section>

      <div className="paragrafo">
        <p>
          Assim que o formulário for enviado, nossa equipe entrará em contato
          para confirmar todos os detalhes e garantir que sua festa seja
          inesquecível.
        </p>
      </div>

      <ButtonScroll />
    </section>
  );
}
