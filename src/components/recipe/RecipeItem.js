import React from 'react';
import PropTypes from 'prop-types';
import IngredientList from './IngredientList';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function RecipeItem({ title, thumbnail, ingredients }) {
	return (
		<Card>
			<Card.Img variant="top" src={thumbnail} alt="Prepared meal illustration" />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>Ingredients:</Card.Text>
				<ListGroup variant="flush">
					<IngredientList ingredients={ingredients} />
				</ListGroup>
			</Card.Body>
		</Card>
	);
}

RecipeItem.propTypes = {
	title: PropTypes.string.isRequired,
	thumbnail: PropTypes.string.isRequired,
	ingredients: PropTypes.string.isRequired
};

export default RecipeItem;