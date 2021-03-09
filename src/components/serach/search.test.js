import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from "./index";

describe('Search component', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    test('Should call `onSearch` with correct value on submit', () => {
        const onSearchMock = jest.fn();
        
        render(<Search onSearch = {onSearchMock} />);

        const input = screen.getByPlaceholderText('Search here');
        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
        fireEvent.change(input, { target: { value: 'iron' } })
        expect(input.value).toBe('iron');
        fireEvent.click(button);
        expect(onSearchMock).toHaveBeenCalledWith('iron');
    });
    
    test('Should set the state with correct value on input', () => {
        const onSearchMock = jest.fn();
        const setState = jest.fn();
        const useStateSpy = jest.spyOn(React, 'useState')
        useStateSpy.mockImplementation((init) => [init, setState]);

        render(<Search onSearch = {onSearchMock} />);


        const input = screen.getByPlaceholderText('Search here');
        const button = screen.getByRole('button');
        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();

        fireEvent.change(input, { target: { value: 'iron' } })
        expect(setState).toHaveBeenCalledWith('iron');
    });
})

