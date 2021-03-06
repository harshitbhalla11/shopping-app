import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase/firebase'
const AuthContext = React.createContext()

export function useAuth () {
  return useContext(AuthContext)
}

export function AuthProvider ({ children }) {
  const [currentUser, setCurrentUser] = useState({})
  // const [isAuth, setIsAuth] = useState({})
  const [loading, setLoading] = useState(true)

  function signup (email, password) {

    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login (email, password) {

    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout () {
    return auth.signOut()
  }

//     function userAuth () {
//     var user = auth().currentUser;
//     var isAuth=false;
//   if (user!==null && user!==undefined) {
//     isAuth=true;
// }
//     return isAuth;
//   }


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout

  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
