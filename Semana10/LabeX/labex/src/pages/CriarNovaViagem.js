import React from "react"
import { useProtectedPage } from "../customHooks/UseProtectePage"

export const CriarNovaViagem = () => {
    useProtectedPage()
return(
<div>Criar Nova viagem</div>
)
}