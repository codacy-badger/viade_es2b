import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Language from '../src/components/Utils/LanguageDropdown/language-dropdown.component';

afterAll(cleanup);

const { container } = render(<Language t={key => key} />);

describe('Language', () => {
  it('renders without crashing', () => {
    expect(container).toBeTruthy();
  });
});
