import { ReactNode } from 'react'
import { IToken } from '../../types/token'

export interface AmountNumberFieldProps {
  onChange: ({ name, amount }: IToken) => void
  value: IToken
  infoLabel?: ReactNode
  hasMax?: boolean
}
