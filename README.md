# Recipe Search App 🍝

## Description

An application to search for recipes using Next.js and the Spoonacular API.  
Allows you to search recipes by name, cuisine, and preparation time, view recipe lists, and see detailed recipe information.

---

### Link:
> [Recipe-App](https://develops-today-pi.vercel.app/) - web application

## Installation and Running

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd <repo-folder>

2. Install dependencies:
   ```bash
    npm install
    # or
    yarn

3. Run the development server:
   ```bash
    npm run dev
    # or
    yarn dev

## Features

### Home Page ( / )


- SSR fetching recipes from Spoonacular API for random recipes
- Input field for recipe query
- Dropdown to select cuisine
- Numeric input for max preparation time
- Sort Popover for sort by cuisine
- "Next" button enabled only if at least one field is filled
- Navigates to `/recipes` page with query parameters on button click


### Recipes Page (`/recipes`)

- SSR fetching recipes from Spoonacular API
- Displays list of recipes with images and titles
- Click on a recipe navigates to the recipe detail page

### Recipe Details Page (`/recipes/[id]`)

- SSR fetches detailed recipe information by ID
- Displays recipe title, ingredients list, and other data




## Technical Details

- Built with Next.js using the App Router
- Used React Suspense to handle loading states (both for components and data)
- Styled with Tailwind CSS for responsive design and accessibility
- Implemented UI components using Radix UI for accessibility and composability
- Added Husky for Git hooks to ensure code quality (e.g., linting/prettier checks on commit)
- Proper error handling for all API requests



## Resources

- Spoonacular API Documentation: https://spoonacular.com/food-api/docs#Authentication
- Next.js App Router Docs: https://nextjs.org/docs/app
- Tailwind CSS: https://tailwindcss.com/docs