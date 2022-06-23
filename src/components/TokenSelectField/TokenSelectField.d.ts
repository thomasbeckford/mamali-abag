import { IToken } from '../../types/token'

export interface TokenSelectFieldProps {
  onChange: ({ name, amount }: IToken) => void
  token: IToken
}
