import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { List } from "../components";
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it("renders Rockstars App title in header", () => {
    render(<App />);
    const headerTitle = screen.getByText(/Rockstars App/i);
    expect(headerTitle).toBeInTheDocument();
  });

  it('snapshot renders', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the songs list', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<List onClick={onClick} />);
    const element = getByTestId('songs-list')
    expect(element).toBeInTheDocument();
  });
})
