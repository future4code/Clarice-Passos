import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import dotenv from 'dotenv';



export const GetAllMovies = () => {

    const [movies, setMovies] = useState([])

    const getMovies = () => {
        axios
            .get('https://api.themoviedb.org/3/movie/popular?api_key=0eea3eb3c8fbe9525011d7bc4400e0b6&page=1')
            .then((res) => {
                setMovies(res.data.results)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    console.log(movies)

    useEffect(() => {
        getMovies()
    }, [])

    const renderMovies = movies && movies.map((i) => {
     return (
            <div>
            <img src={`https://image.tmdb.org/t/p/w500/${i.poster_path}`}/>
            <p>{i.original_title}</p>
            
            </div>
        )
    })

    return (
        <div>{renderMovies}</div>
    )
}



