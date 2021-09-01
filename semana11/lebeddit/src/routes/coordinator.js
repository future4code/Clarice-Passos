import React from "react"
import { useHistory } from "react-router"

export const goToLogin = (history) =>{
    history.push ("/login")
}

export const goToFeedPage = (history) =>{
    history.push ("/")
}

export const goToPostPage = (history) =>{
    history.push ("/post")
}

export const SignUpPage = (history) =>{
    history.push ("/signup")
}