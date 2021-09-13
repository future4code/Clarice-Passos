import React from "react"
import axios from "axios"
import { BASE_URL } from "../constants/urls"

const createPost = (body, clean) => {
    axios.post(`${BASE_URL}/posts`, body, {
      headers:
      {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("token")
      }
    })
      .then((res) => {
        alert(res.data)
        clean()
      })
      .catch((err) => {
        alert(err.response.message)
      })
  }
  export default createPost


