// import { useState, useCallback } from "react"
import { useCallback, useState } from "react"



function Login() {

  const [user, setUser] = useState({
    mail: 'gatinha17@gmail.com',
    pass: 'gatinhasecreta'
  })

  const doChangeCallback = useCallback((e) => {
    try {
      var newUser = user;
      newUser[e.target.name] = e.target.value;
      setUser(newUser)
    } catch (err) {
      console.error("deu erro!")
    }
  }, [user])

  function doSubmit(e) {
    e.preventDefault();
    console.log(user)
  }

  return (
    <form onSubmit={doSubmit}>
          <input type="email" name="mail" onChange={(e) => doChangeCallback(e)}  placeholder="Insira o e-mail" />
          <input type="password" name="pass" onChange={e => doChangeCallback(e)} placeholder="Insira a senha" />
          <button type="submit">Entrar</button>
        </form>
  )
}

export { Login }






