import React from "react"
import { useHistory } from "react-router"

export const goToLogin = (history) =>{
    history.push ("/login")
}

export const goToFeedPage = (history) =>{
    history.push ("/feed")
}

export const goToPostPage = (history) =>{
    history.push ("/")
}

export const SignUpPage = (history) =>{
    history.push ("/signup")
}

export const goToDetailPage = (history, id) =>{
    history.push (`/feed/${id}`)
}