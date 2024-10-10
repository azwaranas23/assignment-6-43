// Card.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

const el = {
  image: 'https://via.placeholder.com/150',
  name: 'Test Recipe',
  rating: 4.5,
  tags: ['Tag1', 'Tag2', 'Tag3'],
  id: 1
};

test('renders the Card component with given props', () => {
  render(<Card el={el} />);
  
  // Test gambar (img)
  const recipeImage = screen.getByTestId(`img-recipe-${el.id}`);
  expect(recipeImage).toBeInTheDocument();
  expect(recipeImage).toHaveAttribute('src', el.image);
  expect(recipeImage).toHaveAttribute('alt', el.name);

  // Test judul resep
  const recipeTitle = screen.getByTestId(`title-recipe-${el.id}`);
  expect(recipeTitle).toBeInTheDocument();
  expect(recipeTitle).toHaveTextContent(el.name);

  // Test rating
  const recipeRating = screen.getByTestId(`rating-recipe-${el.id}`);
  expect(recipeRating).toBeInTheDocument();
  expect(recipeRating).toHaveTextContent(el.rating.toString());

  // Test tag (hanya dua tag pertama)
  el.tags.slice(0, 2).forEach(tag => {
    const recipeTag = screen.getByTestId(`tag-recipe-${tag}`);
    expect(recipeTag).toBeInTheDocument();
    expect(recipeTag).toHaveTextContent(tag);
  });

  // Test link READ MORE
  const recipeLink = screen.getByTestId(`link-recipe-${el.id}`);
  expect(recipeLink).toBeInTheDocument();
  expect(recipeLink).toHaveAttribute('href', `https://dummyjson.com/recipes/${el.id}`);
});
