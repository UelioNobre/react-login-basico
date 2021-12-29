import { createContext, useState } from 'react' 


const LoginContext = createContext({});

function doSubmit() {

  }



function LoginProvider({ children }) {

  const [a, setA] = useState(0)

  return(
  <LoginContext.Provider value={a}>
    {children}
    </LoginContext.Provider>
  )
}


export { LoginProvider, doSubmit }