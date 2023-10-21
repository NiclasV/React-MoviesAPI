import { ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import MovieItem from "./MovieItem";
import { Movie } from "../models/MovieModel";
import { Loader } from "./ui/elements/Loader";


interface MovieGridProps {
    children?: ReactNode,
    movies: Movie[]| null, 
}

const MovieGridStyled = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    grid-gap: 10px;
    row-gap: 15px;

    > div {
        flex: 1 0 1;
        min-width: 220px;
        max-width: 300px;
    }
`

const MovieGrid = ({ movies }: MovieGridProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const page = searchParams.get('page');
    
        if (containerRef.current && page) {
            containerRef.current.scrollIntoView({ 
                block: 'start',   
                inline: 'nearest', 
            });
            window.scrollBy(0, -240)
          }
    }, [window.location.search])
    
    if (!movies) {
        return (<Loader/>);
    } else {
        return (
            <MovieGridStyled ref={containerRef}>
                {movies?.map((movie) => (
                    <MovieItem key={movie.id} movie={movie}></MovieItem>
                ))}
            </MovieGridStyled>
        ); 
    }

}

export default MovieGrid;