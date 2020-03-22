import React from 'react';
import Heading from './components/layout/Heading';
import RecipeList from './components/recipe/RecipeList';
import Container from 'react-bootstrap/Container';
import './components/sass/style.scss';

function App() {
  return (
    <Container>
      <Heading title="Recipe Puppy" />
      <RecipeList />
    </Container>
  );
}

export default App;
