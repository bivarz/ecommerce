import React from 'react';
import { Link } from 'react-router-dom';

import { RiSearchLine, RiShoppingBagLine } from 'react-icons/ri';
import { TiHeartOutline } from 'react-icons/ti';
import { useClose } from '../../context/Close';

import SideDrawer from '../SideDrawer';

import { Container, Bag, Search, Favorites } from './styles';

import logo from '../../assets/images/logo.png';

export default function Header() {
  const { active, setActive } = useClose();

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Fashionista" />
      </Link>
      <div className="content">
        <Search>
          <div className="search">
            <button type="button">
              <RiSearchLine size={28} />
            </button>
          </div>
        </Search>
        <Favorites to="/favorites">
          <div className="favorites">
            <TiHeartOutline size={30} color="black" />
            <div className="bag_number_favorites">
              <span>0</span>
            </div>
          </div>
        </Favorites>
        <div>
          <Bag to="/bag">
            <div className="bag">
              <button type="button" onClick={setActive(!active)}>
                <RiShoppingBagLine size={30} />
              </button>
            </div>
            <div className="bag_number">
              <span>1</span>
            </div>
          </Bag>
          <SideDrawer />
        </div>
      </div>
    </Container>
  );
}
