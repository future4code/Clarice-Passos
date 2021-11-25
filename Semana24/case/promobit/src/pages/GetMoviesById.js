import React from "react"
import { useState, useEffect, useHistory } from "react"
import axios from "axios"
import { useParams } from "react-router"

export const GetMoviesById = () => {
    const params = useParams()

    const [movieDetail, setMovieDetail] = useState({})

    const getDetails = () => {
        axios
            .get(`
        https://api.themoviedb.org/3/movie/${params.id}?api_key=0eea3eb3c8fbe9525011d7bc4400e0b6&language=en-US
            `)
            .then((res) => {
                setMovieDetail(res.data)
            }).catch((err) => {
                console.log("Erro", err.response)
            });
    }

    console.log(movieDetail)

    useEffect(() => {
        getDetails()
    }, []);

/*     const history = useHistory()
 */
 /*    const voltar = () => {
        history.goBack()
    } */

 /*    const renderMovieDetails = movieDetail && movieDetail.map((i) => {
        return (
            <div>
                <img src={`https://image.tmdb.org/t/p/w500/${i.poster_path}`} />
                <p>{i.original_title}</p>
            </div>
        )
    }) */

    return (
        <div>
                {movieDetail.title}
                {movieDetail.original_title}
{/*             <button onClick={voltar}>Voltar</button>
 */}        </div>
    )
}