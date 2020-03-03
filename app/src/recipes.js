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
	{
		id: "kimchi",
		name: "Kimchi Pancakes (Kimchi Jeon)",
		author: "Colleen Ghe",
		thumbnailURL:
			"https://149366112.v2.pressablecdn.com/wp-content/uploads/2017/03/kimchi-pancake.jpg",
		tags: ["kimchi", "healthy", "easy"],
		cookTime: "15 minutes",
		serves: "1-2 people",
		ingredients: [
			"150g kimchi",
			"1 egg",
			"½ cup all purpose flour",
			"water",
			"2 tablespoons sesame oil",
			"1 tablespoon chopped green onions",
		],
		instructions: [
			"Use kitchen scissors to cut kimchi into bite sized pieces.",
			"Fully beat the egg in a bowl then mix in flour and kimchi with some of the kimchi juice. Add a little water if the mixture is too thick or some flour if it is too thin.",
			"Add half of the sesame oil to the pancake mixture. Add the other half to a non stick frying pan and place on medium heat.",
			"Pour roughly a ⅓ cup of the mixture into the heated pan and let fry. Flip pancake over once the edges begin to bubble and the underside is crispy. Repeat for all of the pancake mixture. Garnish cooked pancakes with the green onions and serve immediately. ",
		],
	},
	{
		id: "chocolatechip",
		name: "Chocolate Chip Cookies",
		author: "Rachel Farnsworth",
		thumbnailURL:
			"https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg",
		tags: ["dessert", "cookies", "sweet", "chocolate"],
		cookTime: "25 minutes",
		serves: "9 people",
		ingredients: [
			"3 to 4 cups of mix of milk and semi-sweet chocolate chips",
			"½ cups of milk",
			"½ cups of white sugar",
			"¾ cups of brown sugar",
			"1 ¾ cups of all-purpose flour",
			"1 cup of cake flour",
			"1 teaspoon of vanilla extract",
			"1 cup of soften unsalted butter in room temperature",
			"2 eggs",
			"1 teaspoon of baking soda",
			"1 teaspoon of baking power",
			"½ teaspoons of salt",
		],
		instructions: [
			"Preheat oven to 400 degrees Fahrenheit. Place the rack in the middle.",
			"In a mixing bowl,",
			"In a mixing bowl, put butter, white sugar, and brown sugar. Using a stand mixer or a hand mixer, mix them for 1 minute.",
			"Add eggs and vanilla extract to the butter-sugar mixture and mix them for 30 seconds.",
			"Add all-purpose flour, cake flour, salt, baking soda, and baking power. Mix them until well combined.",
			"When a dough is formed, add milk and dark chocolate chips.",
			"Place a parchment paper on the baking sheet.",
			"Equally divide the dough; each dough weighing 6 ounces or roughly 170 grams. And form them into a ball",
			"Place the dough balls on the baking sheet well spread apart.",
			"Bake them for 11-14 minutes",
			"Let them cool for 15 minutes",
		],
	},
	{
		id: "blt",
		name: "BLT Sandwich",
		author: "Magnolia Lalu",
		thumbnailURL:
			"https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/80f0c6f9-18a9-4faa-b8a3-777a76b16acf.jpg",
		tags: ["lunch", "sandwich"],
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
