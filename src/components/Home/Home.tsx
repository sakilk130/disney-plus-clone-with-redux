import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider/ImageSlider';
import Viewers from './Viewers/Viewers';
import Movies from './Movies/Movies';
import db from '../../firebase/firebase';
import { useDispatch } from 'react-redux';
import { setMovies } from '../../features/movie/movieSlice';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection('movies').onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      dispatch(setMovies(tempMovies));
    });
  }, []);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  overflow-x: hidden;

  &:before {
    background: url('/images/home-background.png') center center / cover
      no-repeat fixed;
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;
