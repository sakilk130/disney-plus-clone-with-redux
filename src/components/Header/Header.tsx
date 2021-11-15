import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from '../../features/user/userSlice';
import { auth, provider } from '../../firebase/firebase';

function Header() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user?.displayName,
            email: user?.email,
            photo: user?.photoURL,
          })
        );
        navigate('/');
      } else {
        dispatch(setSignOut());
        navigate('/login');
      }
    });
  }, []);

  const SignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        let user = result.user;
        dispatch(
          setUserLogin({
            name: user?.displayName,
            email: user?.email,
            photo: user?.photoURL,
          })
        );
        navigate('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const SignOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      navigate('/login');
    });
  };

  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      {!userName ? (
        <LoginContainer>
          <Login onClick={SignIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
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
          <UserImage src={userPhoto} onClick={SignOut} />
        </>
      )}
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

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
