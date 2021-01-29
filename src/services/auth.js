export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
  if (username === "root" && password === "root") {
    return setUser({
      username: "root",
      name: "Root User",
      email: "root@mail.com",
    })
  }
  return false
}

export const isLoggedIn = () => {
  const user = getUser()

  return !!user.username
}

console.log(isLoggedIn)

export const logout = callback => {
  setUser({})
  callback()
}
