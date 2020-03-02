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
		name: "Spooky Salad",
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
