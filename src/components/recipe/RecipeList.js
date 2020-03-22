import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../constants/api';
import RecipeItem from './RecipeItem';
import SearchRecipe from './SearchRecipe';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function RecipeList() {
	const [recipes, setRecipes] = useState([]);
	const [filteredRecipes, setFilteredRecipes] = useState([]);

	useEffect(function() {
		fetch(BASE_URL)
			.then(response => response.json())
			.then(json => {
				setRecipes(json.results);
				setFilteredRecipes(json.results);
			})
			.catch(error => console.log(error));
	}, []);

	const filterRecipes = function(e) {
		const searchValue = e.target.value.toLowerCase();

		const filteredArray = recipes.filter(function(rec) {
			const lowerCaseValue = rec.title.toLowerCase();

			if (lowerCaseValue.includes(searchValue)) {
				return true;
			}

			return false;
		});

		setFilteredRecipes(filteredArray);
	};

	return (
		<>
			<SearchRecipe handleSearch={filterRecipes} />
			<Row>
				{filteredRecipes.map(recipe => {
					const { title, thumbnail, ingredients } = recipe;

					return (
						<Col sm={6} md={3} key={title}>
							<RecipeItem title={title} thumbnail={thumbnail} ingredients={ingredients} />
						</Col>
					);
				})}
			</Row>
		</>
	);
}

export default RecipeList;