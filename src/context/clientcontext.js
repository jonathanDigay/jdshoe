import { createContext, useContext, useState } from "react"

const SignInContext = createContext({})
export function useSignIn() {
  return useContext(SignInContext)
}
export function SignInProvider({ children }) {
  const [signIn, setSignIn] = useState(false)
  return (
    <SignInContext.Provider value={{ signIn, setSignIn }}>
      {children}
    </SignInContext.Provider>

  )
}


const SignUpContext = createContext({})
export function useSignUp() {
  return useContext(SignUpContext)
}
export function SignUpProvider({ children }) {
  const [signUp, setSignUp] = useState(false)
  return (
    <SignUpContext.Provider value={{ signUp, setSignUp }}>
      {children}
    </SignUpContext.Provider>

  )
}