import { useNavigate } from 'react-router-dom';
import { IoArrowUndoSharp } from 'react-icons/io5';
import './ButtonVoltarStyles.scss';
import { useEffect, useState } from 'react';

export default function ButtonVoltar() {
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

  const navigate = useNavigate();

  const voltarParaHome = () => {
    navigate('/');
  };

  return (
    <>
      {showButton && (
        <a className="botaoFlutuante" onClick={voltarParaHome}>
          <IoArrowUndoSharp size={24} />
        </a>
      )}
    </>
  );
}
