import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';

export default function ButtonScroll() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
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

  const BtnScroll = styled.button`
    position: fixed;
    bottom: 70px;
    right: 20px;
    background-color: var(--bg-color-one);
    color: var(--text-color-four);
    border: 1px solid var(--text-color-four);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: opacity 0.3s, transform 0.3s ease-in-out, all 0.3s ease-in-out;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: var(--bg-color-two);
      color: var(--bg-color-one);
      border: 1px solid var(--bg-color-one);
      animation: translateY 0.6s infinite alternate ease-in-out;
    }

    @keyframes translateY {
      from {
        transform: translateY(0) scale(1);
      }
      to {
        transform: translateY(-0.8rem) scale(1.1);
      }
    }
  `;

  return (
    <>
      {showButton && (
        <BtnScroll className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </BtnScroll>
      )}
    </>
  );
}
