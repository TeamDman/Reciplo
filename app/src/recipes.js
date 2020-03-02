export const recipes = [
	{
		id: "spaghetti",
		name: "Super Spaghet",
	},
	{
		id: "meatball",
		name: "Mean Meatballs",
	},
	{
		id: "salad",
		name: "Greek Salad",
		author: "Kay Eulmery",
		tags: ["salad", "summer", "cucumber"],
		time: "15 minutes",
		serves: "6-8",
		ingredients: [
			"3 cucumbers",
			"1 green pepper",
			"1 cup cherry tomatoes",
			"1 small red onion",
			"1 cup kalamata olives",
			"½ cup feta cheese",
			"¼ cup olive oil",
			"1 tablespoon red wine vinegar",
			"2 tablespoons lemon juice",
			"salt",
		],
		instructions: [
			"Cut cucumbers into 1 inch cubes and cut green pepper into bite sized pieces. Slice cherry tomatoes in half. Cut red onion into thin slices. Combine all ingredients in a large serving bowl.",
			"Slice olives if desired and add to the bowl. Cut feta cheese into small cubes and add to the bowl as well. ",
			"In a separate small bowl combine olive oil, red wine vinegar and lemon juice for the dressing. Mix well with a fork until fully incorporated. Add salt to taste.",
			"Pour the dressing over the vegetables and toss salad until the dressing fully coats it. Refrigerate for at least 2 hours then serve.",
		],
	},
];

export function getRecipe(id) {
	return recipes.find(x => x.id === id);
}

export function getAllRecipes() {
	return recipes.map(x => x.id);
}

export function searchRecipes(query) {
	return recipes
		.filter(x => {
			if (x.id.match(query)) return true;
			if (x.name.match(query)) return true;
			return false;
		})
		.map(x => x.id);
}
