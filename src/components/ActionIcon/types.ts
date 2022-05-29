import type { ReactNode } from 'react'
import { Color } from 'types/shared'

export type Action = {
  children: ReactNode
  onClick?: () => void
  backgroundColor?: Color
}
