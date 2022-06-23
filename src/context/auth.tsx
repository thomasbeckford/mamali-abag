import { useState, createContext, ReactNode } from 'react'

interface AuthContextInterface {
  isConnected: boolean
  setIsConnected: (val: boolean) => void
  walletAddress: string | null
  setWalletAddress: (val: string | null) => void
  handleConnect: () => void
  handleDisconnect: () => void
}

export const AuthContext = createContext<AuthContextInterface>({
  isConnected: false,
  setIsConnected: () => null,
  walletAddress: null,
  setWalletAddress: () => null,
  handleConnect: () => null,
  handleDisconnect: () => null,
})

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState<boolean>(false)
  const [walletAddress, setWalletAddress] = useState<string | null>(null)

  const handleDisconnect = () => {
    setIsConnected(false)
    setWalletAddress(null)
  }

  const handleConnect = () => {
    setIsConnected(true)
    setWalletAddress('0x3452...3d27')
  }

  const values = {
    isConnected,
    setIsConnected,
    walletAddress,
    setWalletAddress,
    handleConnect,
    handleDisconnect,
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
