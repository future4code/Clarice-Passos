import React from "react"
import { useProtectedPage } from "../customHooks/UseProtectePage"

export const AreaAdministrativa = () => {
    useProtectedPage()
return(
<div>area admnistativa</div>
)
}