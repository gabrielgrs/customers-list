import type { NextApiRequest, NextApiResponse } from 'next'
import supabase from '../services/supabase'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { customerId } = req.query
    const { data, error } = await supabase
      .from('customers')
      .select('id, name, email')
      .match({ id: customerId })
      .single()

    if (error) throw error
    return res.status(200).json(data)
  } catch {
    return res.status(500).json({ message: 'Failed to get customer' })
  }
}

export default handler
