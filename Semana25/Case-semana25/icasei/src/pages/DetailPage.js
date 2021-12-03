import axios from "axios"
import React, { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { useParams, useHistory } from "react-router-dom"
import { BASE_URL } from "../constants/url"
import { goToSearchPage } from "../route/coordinator"
import styled from "styled-components"

const Button = styled.button`
  background: "palevioletred";
  color:  "white";
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Conteiner = styled.div`
display: flex;
flex-direction: column;
margin-left: 400px;
padding: 10px;
max-width: 50vw;
`

const TextDiv = styled.div`
text-align: justify;
line-height: 1.5;
`

const likeConteiner = styled.div`
font-size: 13px;
line-height: ;

`

const DetailPage = () => {
    const [currentVideo, setCurrentVideo] = useState([])
    const { id } = useParams()
    const history = useHistory()


    useEffect(() => {
        const token = 'key=AIzaSyDHShX3S_tM38BKR-pVaWRh1eU20e-4p50'

        axios
            .get(`${BASE_URL}videos?id=${id}&part=snippet,statistics&${token}`)
            .then((res) => {
                setCurrentVideo(res.data.items)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const linkYoutube = `https://www.youtube.com/watch?v=${id}`

    return (
        <div>
                {currentVideo.map((i) => {
                    return (
                        <Conteiner>
                            <h4>{i.snippet.title}</h4>
                            <ReactPlayer url={linkYoutube} />
                            <div>
                                <h4>📺:{i.snippet.channelTitle}</h4>
                                <div>
                                    <p>👍{i.statistics.likeCount}</p>
                                    <p>👎{i.statistics.dislikeCount}</p>
                                </div>
                            </div>
                            <TextDiv>
                              <b>Descrição: </b>{i.snippet.description}
                            </TextDiv>
                            <p>👀{i.statistics.viewCount}</p>
                        </Conteiner>
                    )
                })}
            <Button onClick={() => goToSearchPage(history)}>Voltar</Button>
        </div>
    )
}

export default DetailPage