import React, { useEffect, useState} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../firebase'

const Detail = () => {

    const { id } = useParams();
    console.log(id)
    const [movie, setMovie] = useState()

 
    useEffect(() => {
        // Grab the movie into from db
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc) => {
            if(doc.exists){
                // save the Data
                setMovie(doc.data());
            }else {
                // redirect to home page 
            } 
        })
    }, [])

    console.log("movie is" , movie);

    return (
        <>
        <Container>

            {movie && (
                <>
                <Background>
                <img src={movie.backgroundImg} />
            </Background>
            <ImageTitle>
                <img src={movie.titleImg} />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                <img src="/images/play-icon-white.png" />
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png"/>
                </GroupWatchButton>
            </Controls>
            <SubTitle>
            {movie.subTitle}
            </SubTitle>
            <Description>
            {movie.description}
            </Description>
            
            
            </>
            )}
            
        </Container>
        </>
    )
}

export default Detail



const Container = styled.div`

min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;


`


const Background = styled.div`

position: fixed;
top: 0;
right:  0;
bottom: 0;
left:  0;
z-index: -1;
opacity: 0.8; 
 
img{


    width: 100%
    height: 100%
    object-fit: cover;
}


`

const ImageTitle = styled.div`
height: 30vh;
min-height: 170px;
width: 35vw;
min-width: 200px;
margin-top: 60px;
margin-bottom:21px;
img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
`


const Controls  =  styled.div`
display: flex;
align-items:center;


`

const PlayButton  =  styled.button`

border-radius: 4px;
display: flex;
font-size:15px;
height: 56px;
align-items:center;
border: none;
background : rgb(251, 251, 251);
padding: 0px 24px;
margin-right: 22px;
letter-spacing:1.8px;
cursor: pointer;

&:hover{
    background : rgb(201, 201, 201);
}
`

const TrailerButton  =  styled(PlayButton)`
color: rgb(251, 251, 251);
border: 1px solid rgb(251, 251, 251);
background : rgba( 0, 0, 0, 0.3);


&:hover{
    background : rgb(201, 201, 201);
}


`

const AddButton  =  styled.button`
margin-right: 21px;
height: 44px;
width: 44px;
display:  flex;
font-size: 25px;
align-items: center;
justify-content:center;
border-radius: 50%;
border: 2px solid white;
background-color: rgba(0, 0, 0, 0.6);
cursor: pointer;

span{
    font-size: 30px;
    color: rgb(251, 251, 251);
}
`

const GroupWatchButton  =  styled(AddButton)`
background: rgb(0, 0, 0);


`
const SubTitle  = styled.div`

color: rgb(251, 251, 251);
font-size: 15px;
min-height: 20px;
margin-top: 26px;

`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px;
`