import { NextApiRequest, NextApiResponse } from 'next'

const Users = (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    {
      id: 1, name: "thiago"
    }
  ]

  return response.json(users)
}

export default Users;