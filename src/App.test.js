import { render, screen } from '@testing-library/react';
import App from './App';


const mockResponse = [
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
  {
    id: 'THREE',
    poster_path: '/testPath',
    title: 'Test three',
    overview: 'test overview three',
    release_date: '08/03/2021'
  },
  {
    id: 'FOUR',
    poster_path: '/testPath',
    title: 'Test four',
    overview: 'test overview four',
    release_date: '09/03/2021'
  },
];

describe('App', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse)
    })
  });
  
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Movie Search/i);
    expect(linkElement).toBeInTheDocument();
  });
});


