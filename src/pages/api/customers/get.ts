import type { NextApiRequest, NextApiResponse } from 'next'
import supabase from '../services/supabase'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { perPage = 10 } = req.query
    const { data, count, error } = await supabase
      .from('customers')
      .select('id, name, email', { count: 'exact' })
      .range(0, Number(perPage))

    if (error) throw error

    res.setHeader('total-items', String(count))

    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({ message: 'Failed to get customers' })
  }
}

export default handler
