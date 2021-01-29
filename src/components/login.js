import React, { useState } from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"

const Login = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  })

  const handleUpdate = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    handleLogin(state)
  }

  return (
    <>
      <h1>Login</h1>
      <form
        method="post"
        onSubmit={e => {
          handleSubmit(e)
          navigate("/app/profile")
        }}
      >
        <label>
          username
          <input type="text" name="username" onChange={handleUpdate} />
        </label>
        <label>
          password
          <input type="password" name="password" onChange={handleUpdate} />
        </label>
        <input type="submit" value="Login" />
      </form>
    </>
  )
}

export default Login
