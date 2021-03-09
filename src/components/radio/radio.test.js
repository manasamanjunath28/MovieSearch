import { render, queryByAttribute, fireEvent } from '@testing-library/react';
import Radio from "./index";

describe('Radio component', () => {
    test('Should render the component with correct props', () => {
        const getById = queryByAttribute.bind(null, 'id');
        const onSelectTypeMock = jest.fn();

        const dom = render(<Radio onSelectType = {onSelectTypeMock} />);

        const MoviesInput = getById(dom.container, 'movies');
        const personInput = getById(dom.container, 'person');
        const tvShowsInput = getById(dom.container, 'tvShows');

        // movies input
        expect(MoviesInput).toBeInTheDocument();
        fireEvent.click(MoviesInput);
        expect(onSelectTypeMock).toHaveBeenCalledWith('movie');

        // person input
        expect(personInput).toBeInTheDocument();
        fireEvent.click(personInput);
        expect(onSelectTypeMock).toHaveBeenCalledWith('person');

        // tv shows input
        expect(tvShowsInput).toBeInTheDocument();
        fireEvent.click(tvShowsInput);
        expect(onSelectTypeMock).toHaveBeenCalledWith('tv');
        

    })
})

