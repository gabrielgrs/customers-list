import type { NextApiRequest, NextApiResponse } from 'next'
import supabase from '../services/supabase'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { customerId } = req.query
    const { email, name } = req.body
    const { error } = await supabase
      .from('customers')
      .update({ email, name })
      .match({ id: customerId })

    if (error) throw error
    return res.status(201).json({ message: 'Customer updated with success' })
  } catch (error) {
    return res.status(500).json({ message: 'Failed to update customer' })
  }
}

export default handler
