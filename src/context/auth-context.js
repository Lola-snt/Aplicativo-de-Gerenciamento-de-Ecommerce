import { createContext, useState } from 'react'
import { createUser, login } from '../services/auth'

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    signin: () => {},
    signup:() => {},
    logout: () => {},
})

const AuthContextProvider = ({children}) => {
    const [token, setToken] = useState(null)

    const signin = async (email, senha) => {
        const userToken = await login(email, senha)
        setToken(userToken)
        console.log(userToken, !!token)
        return userToken
    }

    const signup = async (email, senha) => {
        const userToken = await createUser(email, senha)
        setToken(userToken)
        return userToken
    }

    const logout = () => {
        setToken(null)
    }


    return (
        <AuthContext.Provider value={{
            token: token,
            isAuthenticated: !!token,
            signin: signin,
            signup: signup,
            logout: logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider