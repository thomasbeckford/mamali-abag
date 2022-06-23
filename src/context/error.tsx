import { useState, createContext, ReactNode } from 'react'

interface ErrorContextInterface {
  error: string | null
  setError: (error: string | null) => void
}

export const ErrorContext = createContext<ErrorContextInterface>({
  error: null,
  setError: () => null,
})

export default function ErrorProvider({ children }: { children: ReactNode }) {
  const [error, setError] = useState<string | null>(null)

  const values = {
    error,
    setError,
  }

  return (
    <ErrorContext.Provider value={values}>{children}</ErrorContext.Provider>
  )
}
