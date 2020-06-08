import React from 'react';
import { Link } from 'react-router-dom';

import { RiShoppingBagLine, RiSearchLine } from 'react-icons/ri';
import { TiHeartOutline } from 'react-icons/ti';

import { Container, Bag, Search, Favorites } from './styles';

import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Fashionista" />
      </Link>
      <div className="content">
        <Search>
          <div className="search">
            <button type="button">
              <RiSearchLine size={24} />
            </button>
          </div>
        </Search>
        <Favorites to="/favorites">
          <div className="favorites">
            <TiHeartOutline size={30} color="black" />
            <div className="cart_number_favorites">
              <span>0</span>
            </div>
          </div>
        </Favorites>

        <Bag to="/bag">
          <div className="cart">
            <button type="button">
              <RiShoppingBagLine size={30} />
            </button>
          </div>
          <div className="cart_number">
            <span>1</span>
          </div>
        </Bag>
      </div>
    </Container>
  );
}
