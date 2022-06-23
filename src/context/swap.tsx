import {
  useState,
  createContext,
  ReactNode,
  useEffect,
  useContext,
} from 'react'
import { tokens } from '../components/Swap/tokens'
import { IToken } from '../types/token'
import { AuthContext } from './auth'

interface SwapContextInterface {
  swapSelections: boolean
  setSwapSelections: (value: boolean) => void
  token1: {
    name: string
    amount: number
  }
  setToken1: ({ name, amount }: IToken) => void

  token2: {
    name: string
    amount: number
  }
  setToken2: ({ name, amount }: IToken) => void
  handleSwapSelections: () => void
}

export const SwapContext = createContext<SwapContextInterface>({
  swapSelections: false,
  setSwapSelections: () => null,
  token1: {
    name: '',
    amount: 0,
  },
  setToken1: () => null,
  token2: {
    name: '',
    amount: 0,
  },
  setToken2: () => null,
  handleSwapSelections: () => null,
})

export default function SwapProvider({ children }: { children: ReactNode }) {
  const [swapSelections, setSwapSelections] = useState<boolean>(false)
  const [token1, setToken1] = useState<IToken>({
    name: tokens[0].name,
    amount: 0,
  })
  const [token2, setToken2] = useState<IToken>({
    name: tokens[1].name,
    amount: 0,
  })
  const { isConnected } = useContext(AuthContext)

  useEffect(() => {
    if (!isConnected) setSwapSelections(false)
  }, [isConnected])

  const handleSwapSelections = () => {
    setSwapSelections(true)

    // set token1 to token2 and token2 to token1
    setToken1({
      name: token2.name,
      amount: token2.amount,
    })
    setToken2({
      name: token1.name,
      amount: token1.amount,
    })
  }

  const values = {
    swapSelections,
    token1,
    setToken1,
    token2,
    setToken2,
    handleSwapSelections,
    setSwapSelections,
  }

  return <SwapContext.Provider value={values}>{children}</SwapContext.Provider>
}
