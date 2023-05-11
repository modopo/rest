import { render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import Form from '../Form';

describe('Test form features', ()=>{
  test('Should call handle submit function when submit button is clicked', ()=>{
    
    const getParams = jest.fn();
    
    render(
      <Form getParams={getParams}/>
    )

    let submitButton = screen.getByText(/GO/);
    fireEvent.click(submitButton);
    expect(getParams).toHaveBeenCalled();
  });

  test('Should have URL input and submit button to be visible', ()=>{
    render(
      <Form />
    )
    let testUrl = screen.getByTestId('url-test');
    expect(testUrl).toBeVisible();
    let submitButton = screen.getByText(/GO/);
    expect(submitButton).toBeVisible();
  });
});