import type { NextApiRequest, NextApiResponse } from 'next'
import type { Customer } from 'types/shared'
import supabase from '../services/supabase'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, name } = req.body as Customer
    const { error } = await supabase.from('customers').insert({ email, name })
    if (error) throw error
    return res.status(201).json({ message: 'Customer created with success' })
  } catch {
    return res.status(500).json({ message: 'Failed to create customer' })
  }
}

export default handler
