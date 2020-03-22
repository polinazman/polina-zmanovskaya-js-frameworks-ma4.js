import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

function IngredientList({ ingredients }) {

	const ingredientsArray = ingredients.split(',');
	const list = ingredientsArray.map((ingred, index) => {
			return <ListGroup.Item key={index}>{ingred}</ListGroup.Item>
	})

	return (
		<>{list}</>
	);
}


IngredientList.propTypes = {
	ingredients: PropTypes.string.isRequired
};

export default IngredientList;