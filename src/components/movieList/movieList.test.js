import { render, screen, fireEvent } from '@testing-library/react';
import MovieList from "./index";

describe('MovieList component', () => {
    test('Should render the component with correct props', () => {
        const movieList = [
            {
                id: 'ONE',
                poster_path: '/testPath',
                title: 'Test one',
                overview: 'test overview one',
                release_date: '08/03/2021'
            },
            {
                id: 'TWO',
                poster_path: '/testPath',
                title: 'Test two',
                overview: 'test overview two',
                release_date: '09/03/2021'
            },
        ];
        const viewMovieInfo = jest.fn();

        render(<MovieList movies={movieList} closeMovieInfo = {viewMovieInfo} />);

        movieList.forEach((movie) => {
            const title = `The movie titled: ${movie.title}`;
            expect(screen.getByAltText(`The movie titled: ${movie.title}`)).toBeInTheDocument();
          });
    })
})

