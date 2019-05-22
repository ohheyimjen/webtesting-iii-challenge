// Test away!
import React from "react";
import Controls from "./Controls";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

//
describe("Controls", () => {
  it("should render on load", () => {
    render(<Controls />);
  });

  // displays 'lock gate' on button
  it('should display "lock gate" text on the button, if locked is false and closed is true', () => {
    const locked = false;
    const closed = true;

    const { getByText } = render(<Controls locked={locked} closed={closed} />);
    const text = getByText(/lock gate/i);
    expect(text).toBeInTheDocument();
  });

  // displays 'open gate' if the locked and closed props are false 
  it('should display "open gate" text on the button, if locked is false and closed is false', () => {
    const locked = false;
    const closed = false;

    const { getByText } = render(<Controls locked={locked} closed={closed} />);
    const text = getByText(/open gate/i);
    expect(text).toBeInTheDocument();
   })

   it('should match the snapshot', () => {
     const tree = renderer.create(<Controls />);
     expect(tree.toJSON()).toMatchSnapshot();
   })
   
});
