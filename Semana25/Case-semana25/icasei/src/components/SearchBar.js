import React, { useEffect } from "react";
import { BASE_URL } from "../constants/url";
import axios from 'axios'
import { useState } from "react";


export const SearchBar = () => {
    const [videoName, setVideoName] = useState([])
    const [searchTerm, setSeachTerm] = useState('')

    const getResults = () => {

        const token = "key=AIzaSyDHShX3S_tM38BKR-pVaWRh1eU20e-4p50"
        const part = 'search?part=snippet&'
        const query = `q=${searchTerm}&`
        const maxResults = 'maxResults=9&'
        const type = 'type=video&'

        axios
            .get(`${BASE_URL}${part}${query}${maxResults}${type}${token}`)
            .then((res) => {
                setVideoName(res.data.items)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    useEffect(() => {
        getResults();
    }, [])

    const handleFormChange = (event) => {
        setSeachTerm(event.target.value)
    }

    const cleanFields = () => {
        setSeachTerm('')
    }

    const sendForm = (event) => {
        event.preventDefault()
        console.log('formulario enviado', searchTerm)
        cleanFields()
    }


    return (
        <div>
            <form onSubmit={sendForm}>
                <input
                    type={"text"}
                    value={searchTerm}
                    onChange={handleFormChange}
                    placeholder={'Termo buscado'}></input>
                <button onClick={() => getResults()}>Pesquisar</button>
            </form>
            <div>
                {videoName.map((i) => {
                    return <div key={i.videoId}>
                        {i.snippet.title}
                    </div>
                })
                }
            </div>

        </div>

    )
}