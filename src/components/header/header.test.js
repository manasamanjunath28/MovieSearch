import { render, screen } from '@testing-library/react';
import Header from "./index";

describe('Header component', () => {
    test('Should render the text', () => {
        render(<Header text="hello" />);
        const headerElement = screen.getByTestId('header');
    
        expect(headerElement).toBeInTheDocument();
        expect(headerElement).toHaveTextContent('hello');
    })
})

