import React from 'react';
import { render, screen } from '@testing-library/react';
import ImageCarousel from './ImageCarousel';

// Mock react-slick to a simple passthrough
jest.mock('react-slick', () => {
  return ({ children }) => <div data-testid="mock-slick">{children}</div>;
});

describe('ImageCarousel', () => {
  test('duplicates slides when fewer than 5 images', () => {
    const imgs = ['img1.png', 'img2.png', 'img3.png'];
    render(<ImageCarousel title="T" images={imgs} altPrefix="Img" metadata={[]} isActive={true} />);

    const rendered = screen.getAllByRole('img');
    // Should duplicate to at least 6 images (3 * 2)
    expect(rendered.length).toBeGreaterThanOrEqual(6);
  });

  test('uses metadata title for alt text when available', () => {
    const imgs = ['a.png', 'b.png'];
    const metadata = [{ title: 'Project A' }, { title: '' }];
    render(<ImageCarousel title="T" images={imgs} altPrefix="Img" metadata={metadata} isActive={true} />);

    const alts = screen.getAllByRole('img').map((el) => el.getAttribute('alt'));
    expect(alts.some((a) => a === 'Project A')).toBe(true);
  });
});

