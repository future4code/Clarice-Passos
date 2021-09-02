import axios from "axios";
import { BASE_URL } from "../constants/urls"
import { useHistory } from "react-router";
import { goToFeedPage } from "../routes/coordinator";

export const doLogin = (body, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/login`, body,
      {
        headers:
          { 'Content-Type': 'application/json' }
      })
      .then((res) =>{
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeedPage(history)
        setRightButtonText("Logout")

      })

      .catch((err) =>{
        alert("Erro no Login!", err.response.data.message)
      })
  }

  export const doSignUp = (body, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/signup`, body,
      {
        headers:
          { 'Content-Type': 'application/json' }
      })
      .then((res) =>{
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeedPage(history)
        setRightButtonText("Logout")
      })

      .catch((err) =>{
        alert("Erro no Login!")
      })
  }