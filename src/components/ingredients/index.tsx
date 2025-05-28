import { ReactElement } from 'react'

import { Ingredient } from '@/types/recipes.model'

interface Props {
  ingredients: Ingredient[]
}

const IngredientsList = ({ ingredients }: Props): ReactElement => {
  return (
    <ul className='list-disc list-inside space-y-1'>
      {ingredients.map((item) => (
        <li key={item.id}>
          {item.name} — {item.amount} {item.unit}
        </li>
      ))}
    </ul>
  )
}

export default IngredientsList
