import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { RiSearchLine, RiShoppingBagLine } from 'react-icons/ri';
import { TiHeartOutline } from 'react-icons/ti';

import SideDrawer from '../SideDrawer';

import { Container, Bag, Search, Favorites } from './styles';

import logo from '../../assets/images/logo.png';

export default function Header() {
  const [active, setActive] = useState(false);
  const handleClose = () => {
    setActive(false);
  };
  const handleOpen = () => {
    setActive(true);
  };
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Fashionista" />
      </Link>
      <div className="content">
        <Link to="/search" style={{ textDecoration: 'none' }}>
          <Search>
            <div className="search">
              <button type="button">
                <RiSearchLine size={28} />
              </button>
            </div>
          </Search>
        </Link>
        <Link to="/favorites" style={{ textDecoration: 'none' }}>
          <Favorites>
            <div className="favorites">
              <TiHeartOutline size={30} color="black" />
              <div className="bag_number_favorites">
                <span>0</span>
              </div>
            </div>
          </Favorites>
        </Link>
        <div>
          <Link to="/bag" style={{ textDecoration: 'none' }}>
            <Bag>
              <div className="bag">
                <button
                  type="button"
                  onMouseOver={handleOpen}
                  onFocus={() => null}
                  onClick={() => setActive(false)}
                >
                  <RiShoppingBagLine size={30} />
                </button>
              </div>
              <div className="bag_number">
                <span>1</span>
              </div>
            </Bag>
          </Link>
          <SideDrawer open={active} onClose={handleClose} />
        </div>
      </div>
    </Container>
  );
}
