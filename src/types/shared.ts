import lightTheme from 'styles/theme'

export type Customer = {
  id: number
  email: string
  name: string
}

export type Color = keyof typeof lightTheme.colors
