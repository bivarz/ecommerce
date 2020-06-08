import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { Container } from './styles';

import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Fashionista" />
      </Link>
      <div className="footer_description">
        Fashionista é uma marca criada para o desafio do AceleraDev Codenation -
        Criado por Paulo Bivar Filho
      </div>
      <div className="links">
        <a href="https://www.linkedin.com/in/paulobivarfilho">
          <AiFillLinkedin size={18} />
        </a>
        <a href="https://github.com/bivarz/ecommerce">
          <AiOutlineGithub size={18} />
        </a>
        <a href="https://www.youtube.com/channel/UCqKUyp6o6-9THAWjew-K-pw/">
          <AiFillYoutube size={18} />
        </a>
      </div>
    </Container>
  );
}
