import { RecipesModel } from '@/store/models/recipes.model'

export const mockRecipesModel: RecipesModel = {
  recipes: [
    {
      id: 641586,
      title: 'Double Chocolate Brownie Semifreddo',
      image: 'https://img.spoonacular.com/recipes/641586-556x370.jpg',
      imageType: 'jpg',
      readyInMinutes: 45,
      servings: 10,
      sourceUrl: 'https://www.foodista.com/recipe/VXD737RM/double-chocolate-brownie-semifreddo',
      vegetarian: false,
      vegan: false,
      glutenFree: true,
      dairyFree: false,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      lowFodmap: false,
      weightWatcherSmartPoints: 29,
      gaps: 'no',
      preparationMinutes: null,
      cookingMinutes: null,
      aggregateLikes: 2,
      healthScore: 3.0,
      creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
      license: 'CC BY 3.0',
      sourceName: 'Foodista',
      pricePerServing: 169.31,
      extendedIngredients: [
        {
          id: 19904,
          aisle: 'Sweet Snacks',
          image: 'dark-chocolate-pieces.jpg',
          consistency: 'SOLID',
          name: 'chocolate',
          nameClean: 'chocolate',
          original: '9 ounces of good-quality dark chocolate, melted',
          originalName: 'good-quality dark chocolate, melted',
          amount: 9,
          unit: 'ounces',
          meta: ['dark', 'melted'],
          measures: {
            us: { amount: 9, unitShort: 'oz', unitLong: 'ounces' },
            metric: { amount: 255.146, unitShort: 'g', unitLong: 'grams' },
          },
        },
      ],
      summary:
        'Double Chocolate Brownie Semifreddo is a delicious dessert perfect for chocolate lovers. Rich, creamy, and gluten-free.',
      cuisines: ['American'],
      dishTypes: ['dessert'],
      diets: ['gluten free'],
      occasions: [],
      instructions:
        '1. Melt the chocolate using a double boiler.\n2. Whisk eggs with sugar and vanilla.\n3. Whip the cream until stiff peaks form.\n4. Gently fold all ingredients together.\n5. Freeze in molds for at least 6 hours.',
      analyzedInstructions: [
        {
          name: '',
          steps: [
            {
              number: 1,
              step: 'Place chocolate in a medium-sized heatproof bowl.',
              ingredients: [
                {
                  id: 19904,
                  name: 'chocolate',
                  localizedName: 'chocolate',
                  image: 'dark-chocolate-pieces.jpg',
                },
              ],
              equipment: [
                {
                  id: 404783,
                  name: 'bowl',
                  localizedName: 'bowl',
                  image: 'bowl.jpg',
                },
              ],
            },
          ],
        },
      ],
      originalId: null,
      spoonacularScore: 37.7,
      spoonacularSourceUrl: 'https://spoonacular.com/double-chocolate-brownie-semifreddo-641586',
    },
  ],
}
