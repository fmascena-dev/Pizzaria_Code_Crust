import '../../styles/_para-empresas.scss';
import { useForm } from 'react-hook-form';
import Logo from '../../assets/para-empresas/logo2.png';
import ImageOne from '../../assets/para-empresas/pizza1.png';
import ImageTwo from '../../assets/para-empresas/pizza2.png';
import { Button } from '@mui/material';

export default function ParaEmpresas() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Dados enviados:', data);
    alert('Cadastro enviado com sucesso!');
  };

  return (
    <section className="para-empresas">
      <section className="partecima">
        <div className="logo-empresas">
          <img src={Logo} alt="Logo da empresa" />
        </div>
        <div>
          <img
            className="img1"
            src={ImageOne}
            alt="Pizza com uma fatia sobre ela"
          />
        </div>
      </section>

      <section className="partecentral">
        <div>
          <h1>
            "Cadastre sua empresa e ofereça benefícios incríveis aos seus
            funcionários! Aproveite descontos exclusivos em nossas pizzas
            deliciosas e transforme o dia a dia do seu time! 🍕✨"
          </h1>
        </div>
        <div className="formulario">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Cadastro</h2>

            {/* Campo Empresa */}
            <label>
              Empresa: <span>*</span>
            </label>
            <input
              type="text"
              placeholder="Nome da Empresa"
              {...register('empresa', {
                required: 'O nome da empresa é obrigatório',
              })}
            />
            {errors.empresa && (
              <span className="helper-text">{errors.empresa.message}</span>
            )}

            {/* Campo Responsável */}
            <label>
              Responsável: <span>*</span>
            </label>
            <input
              type="text"
              placeholder="Responsável pelo cadastro"
              {...register('responsavel', {
                required: 'O nome do responsável é obrigatório',
              })}
            />
            {errors.responsavel && (
              <span className="helper-text">{errors.responsavel.message}</span>
            )}

            {/* Campo Telefone */}
            <label>
              Telefone: <span>*</span>
            </label>
            <input
              type="tel"
              placeholder="Telefone"
              {...register('telefone', {
                required: 'O telefone é obrigatório',
              })}
            />
            {errors.telefone && (
              <span className="helper-text">{errors.telefone.message}</span>
            )}

            {/* Campo Email */}
            <label>
              E-mail: <span>*</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              {...register('email', {
                required: 'O email é obrigatório',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'E-mail inválido',
                },
              })}
            />
            {errors.email && (
              <span className="helper-text">{errors.email.message}</span>
            )}

            {/* Campo Benefícios */}
            <label>
              Benefícios: <span>*</span>
            </label>
            <input
              type="text"
              placeholder="Descrição dos benefícios"
              {...register('beneficios', {
                required: 'A descrição dos benefícios é obrigatória',
              })}
            />
            {errors.beneficios && (
              <span className="helper-text">{errors.beneficios.message}</span>
            )}
          </form>
          {/* Botão de Envio */}
          <button className="btn-submit" type="submit">
            ENVIAR
          </button>
          <div className="preenchimento">
            <span>*</span>
            <p>Preenchimento obrigatório</p>
          </div>
        </div>
      </section>

      <div>
        <img className="img2" src={ImageTwo} alt="Pizza caindo" />
      </div>
    </section>
  );
}
