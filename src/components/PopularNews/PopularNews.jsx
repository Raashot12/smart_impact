import React from "react"
import CenterContent from "../../Utilities/CenterContent"

const PopularNews = () => {
  return (
    <div>
      <CenterContent>
        <h3 className="ourservice">GENERAL NEWS</h3>
        <div className="underline"></div>
      </CenterContent>
    </div>
  )
}

export default PopularNews
function User() {
  var username, password

  function doLogin(user, pw) {
    username = user
    password = pw
    return {
      username,
      password,
    }
  }
  var publicAPI = {
    login: doLogin,
  }
  return publicAPI
}
// create a `User` module instance
var fred = User()
fred.login("fred", "12Battery34!")