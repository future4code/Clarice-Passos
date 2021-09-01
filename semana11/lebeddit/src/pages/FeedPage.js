import React from "react"
import useProtectedPage from "../hooks/useProtectedPage";


const FeedPage = () => {
  useProtectedPage()
  
  return(
      <div>
        <h2>Feed</h2>
    </div>
  )
}

export default FeedPage;
