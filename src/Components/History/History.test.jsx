import Results from '.';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Testing the History component', () => {
  xtest('Should render history buttons', () => {
    const data = {
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
    };
    const { getByRole } = render(<Results data={data}/>);
    const preElement = getByRole

    expect(preElement).toBeInTheDocument();
  });
})