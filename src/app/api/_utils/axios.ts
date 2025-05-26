import axios from 'axios'

export const spoonacular = axios.create({
  baseURL: 'https://api.spoonacular.com/',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.NEXT_PUBLIC_SPOON_API_KEY,
  },
})
