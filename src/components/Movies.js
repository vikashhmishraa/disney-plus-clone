import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { selectMovies} from '../features/movies/movieSlice'

const Movies = () => {
  const movies = useSelector(selectMovies);

  console.log(movies)
  console.log("this is movires" , movies)
  return (
    <>
      <Container>
        <h4>Recommended For You</h4>
        <Content>
          {movies &&
            movies.map((movie) => (

              <Wrap key={movie.id}>
                <Link to={`/detail/${movie.id}`}>
                <img src={movie.cardImg} />
                </Link>
              </Wrap>
            ))}
          
        </Content>
      </Container>
    </>
  );
};

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hiddenl;
  border: 3px solid rgba(251, 251, 251, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.97) 0s;

  img {
    width: 100%;
    border-radius: 7px;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    border-color: rgba(251, 251, 251, 0.8);
  }
`;
