import styled from "styled-components"

export const Main = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #1f1f1f;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    position: relative;
`
export const Lightbox = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    background-color: #000000cf;
    display: none;
    z-index: 5;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    &.activo{
        display: flex;
    }
`

export const ImgLightbox = styled.img`
    width: 750px;
    border-radius: 1rem;
    box-shadow: 0 0 0 10px black;
    margin-top: 2rem;
    /* filter: drop-shadow(0 0 20px white); */
    /* background-color: pink; */
`

export const Cerrar = styled.button`
    width: 5rem;
    height: 5rem;
`
export const Wrapper = styled.div`
    width: 1500px;
    min-height: 30rem;
    /* background-color: blue; */
    overflow: hidden;
    position: relative;
    @media screen and (max-width:1600px){
        width: 80%;
    }
`
export const Slider = styled.div`
    width: ${({ width }) => width};
    transform: translateX(${({ mover }) => mover});
    /* width: 200%; */
    transition: 2s;
    height: 100%;
    /* background-color: orange; */
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    `
export const ContenedorImg = styled.div`
    /* width: ${({ widthImg }) => widthImg}; */
    width: 10rem;
    height: 100%;
    /* background-color: black; */
    margin: 0 1rem;
    transition: .5s;
    cursor: pointer;
    &:hover{
        width: 30rem;
    }
`
export const Img = styled.img`
    height: 100%;
    object-fit: cover;
`
export const Flechas =  styled.div`
    position: absolute;
    bottom: 20vh;
    width: 50%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    `
export const Button = styled.button`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    /* background-color: black; */
    display:flex;
    flex-flow:column nowrap;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    `
export const Svg = styled.img`
    width: 100%;
    filter: drop-shadow(0 0 0px transparent);
    transition: all.5s;
    &:hover{
        transform: scale(1.2) rotate(-10deg) translateY(1rem);
        filter: drop-shadow(0 0 10px white);
    }
    &.derecha{
        &:hover{
            transform: scale(1.2) rotate(10deg) translateY(1rem);
        }
    }
    &.cerrar{
        width: 60%;
        cursor: pointer;
        opacity: .5;
        &:hover{
            opacity: 1;
            transform: scale(1.1) rotate(90deg);
        }
    }
`