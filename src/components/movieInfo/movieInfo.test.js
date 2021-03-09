import { render, screen, fireEvent } from '@testing-library/react';
import MovieInfo from "./index";

describe('MovieInfo component', () => {
    test('Should render the component with correct props', () => {
        const movie = {
            poster_path: '/testPath',
            title: 'Test',
            overview: 'test overview',
            release_date: '08/03/2021'
        };
        const closeMovieInfo = jest.fn();
        const expectedImgSrc=  `http://image.tmdb.org/t/p/w185${movie.poster_path}`;

        render(<MovieInfo currentMovie={movie} closeMovieInfo = {closeMovieInfo} />);
    
        // image
        expect(screen.getByRole('img')).toBeInTheDocument();
        expect(screen.getByAltText('The movie titled: Test')).toBeInTheDocument();
        expect(screen.getByRole('img').getAttribute('src')).toBe(expectedImgSrc);

        // info
        expect(screen.getByText('Test')).toBeInTheDocument();
        expect(screen.getByText('test overview')).toBeInTheDocument();
        expect(screen.getByText('08/03/2021')).toBeInTheDocument();

        // go back
        expect(screen.getByText('Go Back')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('closeMovie'));
        expect(closeMovieInfo).toHaveBeenCalled();
        
    })
})

