import type { NextApiRequest, NextApiResponse } from 'next'
import supabase from '../services/supabase'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { customerId } = req.query
    const { error } = await supabase.from('customers').delete().match({ id: customerId })

    if (error) throw error
    return res.status(200).json({ message: 'Customer deleted with success' })
  } catch (error) {
    return res.status(500).json({ message: 'Failed to update customer' })
  }
}

export default handler
