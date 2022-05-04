// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.

import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Spinner from './Spinner';

describe('Spinner Tests', () => {
  test('Spinner renders when passed prop is true', () => {
    const result = render(<Spinner on={true} />);
    const spinner = result.container.querySelector('#spinner');
    expect(spinner).toBeInTheDocument;
  })
  test('Spinner will not render when passed prop is false', () => {
    const result = render(<Spinner on={false} />)
    const spinner = result.container.querySelector('#spinner');
    expect(spinner).toBeUndefined;
  })
})