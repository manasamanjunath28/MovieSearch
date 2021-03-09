import { render, screen, fireEvent } from '@testing-library/react';
import Movie from "./index";

describe('Movie component', () => {
    test('Should render the component with correct props', () => {
        const movie = {
            poster_path: '/testPath',
            title: 'Test',
            id: 'TEST_ID'
        };
        const viewInfo= jest.fn();
        const expectedImgSrc=  `http://image.tmdb.org/t/p/w185${movie.poster_path}`;

        render(<Movie movie={movie} viewInfo = {viewInfo} />);
    
        expect(screen.getByRole('img')).toBeInTheDocument();
        expect(screen.getByAltText('The movie titled: Test')).toBeInTheDocument();
        expect(screen.getByRole('img').getAttribute('src')).toBe(expectedImgSrc);
        expect(screen.getByRole('link')).toHaveTextContent('View Details');
        expect(screen.getByRole('link')).toHaveAttribute('href');
        fireEvent.click(screen.getByText('View Details'));
        expect(viewInfo).toHaveBeenCalledWith('TEST_ID');
    })
})

