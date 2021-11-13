import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <Link to="">
          <img src="/images/home-icon.svg" alt="HOME" />
          <span>HOME</span>
        </Link>
        <Link to="">
          <img src="/images/search-icon.svg" alt="SEARCH" />
          <span>SEARCH</span>
        </Link>
        <Link to="">
          <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
          <span>WATCHLIST</span>
        </Link>
        <Link to="">
          <img src="/images/original-icon.svg" alt="ORIGINALS" />
          <span>ORIGINALS</span>
        </Link>
        <Link to="">
          <img src="/images/movie-icon.svg" alt="MOVIES" />
          <span>MOVIES</span>
        </Link>
        <Link to="">
          <img src="/images/series-icon.svg" alt="SERIES" />
          <span>SERIES</span>
        </Link>
      </NavMenu>
      <UserImage src="https://avatars.githubusercontent.com/u/44520484?v=4" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  cursor: pointer;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      object-fit: contain;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: '';
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
`;

const UserImage = styled.img`
  object-fit: contain;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
