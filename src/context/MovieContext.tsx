import React, { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { MovieFull } from '../models/MovieModel';


// Define the initial context value
interface MovieContextType {
    movie: MovieFull| null;
    movies?: any;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const useMovieContext = () => {
    const context = useContext(MovieContext);

    if (!context) {
        throw new Error('useMoviesContext must be used within a MoviesProvider');
    }
    return context;
};

export const MovieProvider = ({ children }: PropsWithChildren) => {
    const [movie, setMovie] = useState<MovieFull | null>(null);
    const [movies, setMovies ] = useState();
    const { id } = useParams();
    const baseUrl = "https://api.themoviedb.org/3/movie/";
    const fetchUrl = baseUrl + id;
  
    const { data } = useFetch(fetchUrl);
  
    // Update the movie state when the data changes
    useEffect(() => {
      if (data) {
        setMovie(data);
      }
    }, [data]);

    useEffect(() => {
        if(movie) {
            console.log(movie?.genres)
        }
    }, [movie])
  
    return (
        <MovieContext.Provider value={{ movie, movies }}>
            {children}
        </MovieContext.Provider>
    );
};