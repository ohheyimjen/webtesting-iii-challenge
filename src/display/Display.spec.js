// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import Display from './Display';
import 'jest-dom/extend-expect';

const testData = {
  closed: true,
  locked: false
}
// displays if gate is open/closed and if it is locked/unlocked
describe('Display', () => {
  it('should render on load', () => {
    render(<Display />);
  })

// displays 'Closed' if the closed prop is true and 'Open' if otherwise
  it('should receive "closed" prop', () => {
    const { closed } = testData;

    const { getByText } = render(<Display closed={closed} />);
    const text = getByText(/closed/i);
    expect(text).toBeInTheDocument();
  })

  it('should receive locked prop', () => {
    const { locked } = testData;

    const { getByText } = render(<Display locked={locked}/>);
    const text = getByText(/locked/i);
    expect(text).toBeInTheDocument();
  })

  it('should return "gate open" when locked is false and closed if false', () => {
    const test = {
      closed: false,
      locked: false
    }

    const { getByText } = render(<Display isOpened={test} />);
    const text = getByText(/open/i);
    expect(text).toBeInTheDocument();
  })

  it('should return "locked" when both closed and locked are true', () => {
    const test = {
      closed: true,
      locked: true
    }

    const { getByText } = render(<Display isLocked={test} />);
    const text= getByText(/locked/i);
    expect(text).toBeInTheDocument();
  })

  it('should return "unlocked" when closed is true and locked is false', () => {
    const test = {
      closed: true,
      locked: false
    }

    const { getByText } = render(<Display isUnlocked={test} />);
    const text = getByText(/unlocked/i);
    expect(text).toBeInTheDocument();
  })
})