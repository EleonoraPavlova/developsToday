export type RecipesRandomRequest = {
  includeNutrition?: boolean
  includeTags?: string
  excludeTags?: string
  number: number
  sort?: SortOption
}

export type RecipesFilterRequest = {
  query?: string
  cuisine?: string
  maxReadyTime?: number
  sort?: SortOption
  sortDirection?: 'asc' | 'desc'
}

export const SORT_OPTIONS = [
  { label: 'Popularity', value: 'popularity' },
  { label: 'Price', value: 'price' },
  { label: 'Time', value: 'time' },
  { label: 'Healthiness', value: 'healthiness' },
] as const

export type SortOption = (typeof SORT_OPTIONS)[number]['value']

export type RecipesModel = {
  recipes: Recipe[]
}

export type Recipe = {
  id: number
  title: string
  image: string
  imageType: string
  readyInMinutes: number
  servings: number
  sourceUrl: string
  vegetarian: boolean
  vegan: boolean
  glutenFree: boolean
  dairyFree: boolean
  veryHealthy: boolean
  cheap: boolean
  veryPopular: boolean
  sustainable: boolean
  lowFodmap: boolean
  weightWatcherSmartPoints: number
  gaps: string
  preparationMinutes: number | null
  cookingMinutes: number | null
  aggregateLikes: number
  healthScore: number
  creditsText: string
  license: string
  sourceName: string
  pricePerServing: number
  extendedIngredients: Ingredient[]
  summary: string
  cuisines: string[]
  dishTypes: string[]
  diets: string[]
  occasions: string[]
  instructions: string
  analyzedInstructions: AnalyzedInstruction[]
  originalId: number | null
  spoonacularScore: number
  spoonacularSourceUrl: string
}

export type RecipesResponse = {
  offset: number
  number: number
  results: RecipesResponseResult[]
  totalResults: number
}

export type RecipesResponseResult = Pick<Recipe, 'id' | 'title' | 'image' | 'imageType'>

export type Ingredient = {
  id: number
  aisle: string
  image: string
  consistency: 'SOLID' | 'LIQUID'
  name: string
  nameClean: string
  original: string
  originalName: string
  amount: number
  unit: string
  meta: string[]
  measures: {
    us: Measure
    metric: Measure
  }
}

export type Measure = {
  amount: number
  unitShort: string
  unitLong: string
}

export type AnalyzedInstruction = {
  name: string
  steps: InstructionStep[]
}

export type InstructionStep = {
  number: number
  step: string
  ingredients: {
    id: number
    name: string
    localizedName: string
    image: string
  }[]
  equipment: {
    id: number
    name: string
    localizedName: string
    image: string
  }[]
  length?: {
    number: number
    unit: string
  }
}
