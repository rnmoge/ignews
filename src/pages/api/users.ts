import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Reinaldo'},
    { id: 2, name: 'Diego'},
    { id: 3, name: 'Marcela'},
  ]

  return response.json(users);
}