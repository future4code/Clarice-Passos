import React, { useLayoutEffect } from "react"
import { useHistory } from "react-router"
import { goToFeedPage, goToLogin} from "../routes/coordinator"

const useUnprotectedPage = () => {
const history = useHistory ()
useLayoutEffect (()=>{
    const token = localStorage.getItem('token')
    if(token){
        goToFeedPage(history)
        }
}, (history))
}
export default useUnprotectedPage