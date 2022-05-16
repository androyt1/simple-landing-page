import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar'

test('Displays navigation link', () => {
  render(<Navbar/>);
  const MyNav = screen.getByRole('navigation');
  expect(MyNav).toBeInTheDocument();
});
 
it('Expects LaShoes to be in document',()=>{
    render(<Navbar/>)
    const navbrand=screen.getByText(/shoes/i)
    expect(navbrand).toBeInTheDocument();
})

it('Expects la to be in document',()=>{
    render(<Navbar/>)
    const la=screen.getByText(/la/i)
    expect(la).toBeInTheDocument()
})

it('It expects button to be in document',()=>{
    render(<Navbar/>)
    const link=screen.getByRole('link')
    expect(link).toBeInTheDocument()
})