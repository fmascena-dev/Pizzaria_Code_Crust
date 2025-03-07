import '../../styles/_reservas.scss';
import Logo from '../../assets/home/logo2.png';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ButtonScroll from '../../components/button-scroll/ButtonScroll';

export default function Reservas() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [mensagem, setMensagem] = useState('');

  const onSubmit = (data) => {
    if (
      window.confirm(
        `Confirmar reserva com os seguintes dados?\n\nNome: ${data.nome}\nEmail: ${data.email}\nTelefone: ${data.telefone}\nData: ${data.data}\nHorário: ${data.horario}\nPessoas: ${data.pessoas}`,
      )
    ) {
      setMensagem(
        'Reserva agendada com sucesso! Aguarde o contato de nossa equipe!',
      );
      reset();
    }
  };

  return (
    <section className="reservas">
      <img className="logo-reservas" src={Logo} alt="Logo Code&Crust" />
      <h1>Agende sua reserva</h1>
      <section>
        <div className="formulario-container">
          {mensagem && <p className="success-message">{mensagem}</p>}
          <form className="form-reservas" onSubmit={handleSubmit(onSubmit)}>
            
              <input
                type="text"
                placeholder="Nome completo"
                {...register('nome', {
                  required: 'O nome é obrigatório.',
                  maxLength: 50,
                })}
              />
              {errors.nome && (
                <p className="error-message">{errors.nome.message}</p>
              )}
            

            
              <input
                type="email"
                placeholder="E-mail"
                {...register('email', {
                  required: 'O e-mail é obrigatório.',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Digite um e-mail válido.',
                  },
                  maxLength: 50,
                })}
              />
              {errors.email && (
                <p className="error-message">{errors.email.message}</p>
              )}
            

            
              <input
                type="tel"
                placeholder="Telefone"
                {...register('telefone', {
                  required: 'O telefone é obrigatório.',
                  minLength: {
                    value: 10,
                    message: 'O telefone deve ter pelo menos 10 dígitos.',
                  },
                })}
              />
              {errors.telefone && (
                <p className="error-message">{errors.telefone.message}</p>
              )}
            

            
              <input
                type="date"
                min={new Date().toISOString().split('T')[0]}
                // max="2025-12-31"
                {...register('data', { required: 'A data é obrigatória.' })}
              />
              {errors.data && (
                <p className="error-message">{errors.data.message}</p>
              )}
            

            
              <input
                type="time"
                step="900"
                min="18:00"
                max="22:00"
                {...register('horario', {
                  required: 'O horário é obrigatório.',
                })}
              />
              {errors.horario && (
                <p className="error-message">{errors.horario.message}</p>
              )}
            

            
              <input
                type="number"
                min="1"
                max="10"
                placeholder="Número de pessoas"
                {...register('pessoas', {
                  required: 'Informe o número de pessoas.',
                })}
              />
              {errors.pessoas && (
                <p className="error-message">{errors.pessoas.message}</p>
              )}
            

            <div className="button-container">
              <button type="submit" className="button-confirmar">
                CONFIRMAR RESERVA
              </button>
            </div>
          </form>
        </div>
      </section>

      <ButtonScroll />
    </section>
  );
}
