import React from 'react';
import ReactDOM, { render, unmountComponentAtNode} from 'react-dom';
import { act } from "react-dom/test-utils";
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './components/routes';


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it('renders without crashing', () => {
  act(() => {
    render(<App />, container);
  });
});

it(`starts in a secure state`, () => {
  const mockCB = () => {
    return true;
  }
  act(() => {
    render(<Router><Routes user={null} updateUser={mockCB} /></Router>, container);
  });
})

it(`renders even when API results haven't been received`, () => {
  const mockCB = () => {
    return true;
  }
  act(() => {
    render(<Router><Routes user={null} updateUser={mockCB} astronauts={[]} issLocationArray={[]} /></Router>, container);
  });
})