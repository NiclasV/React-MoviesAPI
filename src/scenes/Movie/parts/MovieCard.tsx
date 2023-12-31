import { styled } from "styled-components";
import { useMovieContext } from "../../../context/MovieContext";
import { AddToWatchlist } from "../../../components/AddToWatchlist";
import { Container } from "../../../components/layout/Containers";
import { Loader } from "../../../components/ui/elements/Loader";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const MovieCardStyled = styled.div`
  background-color: ${props => props.theme.background[100]};
  display: grid;
  grid-template-columns: 0.75fr 1fr;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.05);
  border-bottom: 1px solid ${(props) => props.theme.background[300]};

  @media (max-width: 1024px) {
    grid-template-columns: 0.8fr 1.2fr;
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr 1.2fr;
  }

  @media (max-width: 560px) {
    display: flex;
    flex-direction: column; 
  }

  .text {
    width: 100%;
    padding: 40px;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 920px) {
      padding: 30px;
    }
  }

  .bottom {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 5px;
    padding-bottom: 5px;
    color: ${props => props.theme.primary[700]};
    font-size: 46px;
    line-height: 1.2;
    border-bottom: 2px solid ${props => props.theme.secondary[500]};

    @media (max-width: 1024px) {
      font-size: 36px;
    }
    @media (max-width: 560px) {
      font-size: 26 px;
    }
  }

  .tagline {
    color: ${props => props.theme.text[100]};
    font-size: 24px;
    margin: 0px 0 15px;

    @media (max-width: 1024px) {
      font-size: 20px;
    }
  }

  .overview {
    line-height: 1.8;
    font-size: 16px;
    color: ${props => props.theme.text[200]};

    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }

  .date {
    margin: 0;
    font-size: 16px;
    color: ${props => props.theme.text[200]}
  }

  .genres {
    display: flex;
    flex-wrap: wrap;

    a {
      text-decoration: none;
    }

    p {
      font-size: 12px;
      background-color: ${props => props.theme.secondary[500]};
      text-transform: uppercase; 
      color: ${props => props.theme.text[900]};
      padding: 3px 10px;
      font-weight: 700; 
      margin: 0;
      margin-right: 10px;
      border-radius: 10px;
      margin-bottom: 5px;

      @media (max-width: 1024px) {
        font-size: 11px;
        padding: 2px 8px;
      }
    }
  }

  .rating {
    margin: 0;
    line-height: 1;
    padding: 10px 15px;
    display: inline-flex;
    color: ${(props) => props.theme.text[900]};
    border-radius: 25px;
    font-size: 18px;
    background-color: ${(props) => props.theme.primary[500]};
    text-align: Center;
    align-self: flex-end;
    display: inline-flex;   
    align-items: flex-end;  

    @media (max-width: 1024px) {
      font-size: 14px;
      padding: 6px 10px;
    }

    strong {
      margin-right: 2px;
    }
  }

  .image {
    position: relative;

    img {
      max-width: 100%;
      border-right: 4px solid ${props => props.theme.primary[500]};
      display: block;
      @media (max-width: 1024px) {
        border-right: none;
        border-bottom: 4px solid ${props => props.theme.primary[500]};
 
      }
    }
    .addToWatchlist {
      position: absolute;
      left: 10px;
      top: 10px;
      z-index: 99;

      button {
          position: relative; 
          z-index: 1;
      }
    }
  }
`;

export const MovieCard = () => {
    const { movie, movieLoading } = useMovieContext();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollIntoView({
                block: 'start',   // Align with the top of the viewport
                inline: 'nearest', // Maintain horizontal alignment
            });
            window.scrollBy(0, -300)
        }
    }, [movieLoading])

    return (
        <div style={{minHeight: "400px"}}  ref={containerRef}>
            {(!movie || movieLoading) ? (
                <Container $margin="40px 0">
                    <Loader />
                </Container>
            ) : (
                <MovieCardStyled>
                    <div className="image">
                        <img src={"https://image.tmdb.org/t/p/w780/" + movie.poster_path} alt="" />
                        {movie?.id ? (
                            <AddToWatchlist movie={movie} />
                        ) : (<></>)}
                    </div>
                    <div className="text">
                        <div className="top">
                            <h1>{movie.title}</h1>
                            <p className="tagline">{movie?.tagline}</p>
                            <div className="genres">
                                {movie.genres?.map(genre => (
                                    <Link to={`/React-MoviesAPI/?with_genres=${genre.id}`} key={genre.id}><p key={genre.id}>{genre.name}</p></Link>
                                ))}
                            </div>
                            <p className="overview">{movie?.overview}</p>
                        </div>
                        <div className="bottom">
                            <p className="date">{movie.release_date}</p>
                            <p className="rating"><strong>{movie.vote_average ? movie.vote_average.toFixed(1) : ""}</strong>/10</p>
                        </div>
                    </div>
                </MovieCardStyled>
            )}
        </div>
    );
}