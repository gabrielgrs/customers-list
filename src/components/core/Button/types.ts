import type { ButtonHTMLAttributes } from 'react'
import type { Color } from 'types/shared'

export type Button = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Color
  fullWidth?: boolean
}
