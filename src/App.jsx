import { useEffect, useState } from "react"
import { GlobalStyles } from "./Global.styled"
import { useFetch } from "./Hook/useFetch"
import { Main, Wrapper, Slider, ContenedorImg, Img, Flechas, Button, Svg, Lightbox, ImgLightbox, Cerrar } from "./App.styled"

const App = () => {

  const photos = useFetch('https://jsonplaceholder.typicode.com/photos')

  const [listaLightbox, setListaLightbox] = useState([])
  
  let [inicio, setInicio] = useState(0)
  let [fin, setFin] = useState(50)
  
  const slice = photos.slice(inicio,fin)

  let [activo, setActivo] = useState(false)
  let cerrar = ()=>{
    setActivo(false)
  }

  let [posicion, setPosicion] = useState(0)
  let cambiarPosicion = (nuevoValor)=>{
    setPosicion(nuevoValor)
    setActivo(true)
  }

  useEffect(()=>{
    setListaLightbox( slice )
  },[posicion])

  
  // Calculos Slider
  let cuantosveo = 10
  let cantidadElementos = slice.length
  let vecesSlide = (cantidadElementos / cuantosveo)
  let anchoSlider = () => {
    return `calc(100% * ${vecesSlide})`
  }
  
  let [moverSlider, setMoverSlider] = useState(0)
  let aumentarMoverSlide = ()=>{
    setMoverSlider(moverSlider+1)
    if(moverSlider >= vecesSlide - 1){
      setMoverSlider(0)
    }
  }
  let disminuirMoverSlide = ()=>{
    setMoverSlider(moverSlider - 1)
    if(moverSlider == 0){
      setMoverSlider(vecesSlide - 1)
    }
  }
  let valorTranslate = ()=>{
    return `${moverSlider * (-100/ vecesSlide)}%`
  }


  return (
    <Main>
      <GlobalStyles />
      <Lightbox className={(activo == true)? 'activo' : ''}>
        <Cerrar onClick={()=>{cerrar()}}>
          <Svg className="cerrar" src="public/svg/close.svg"></Svg>
        </Cerrar>
      {(listaLightbox.length !== 0) ? <ImgLightbox src={listaLightbox[posicion].url}></ImgLightbox> : ''}
      </Lightbox>
      <Wrapper>
      {posicion}
      {(activo)?'true':'false'}
        <Slider width={anchoSlider()} mover={valorTranslate()}>
          {
            slice.map((eachPhoto, i)=>
              <ContenedorImg key={i}
              onClick={()=>{cambiarPosicion(i)}}>
                <Img src={eachPhoto.thumbnailUrl}></Img>
              </ContenedorImg>
            )
          }
        </Slider>
      </Wrapper>
        <Flechas>
          <Button onClick={()=>{disminuirMoverSlide()}}>
            <Svg src="public/svg/flechas/izq.svg"></Svg>
          </Button>
          <Button onClick={()=>{aumentarMoverSlide()}}>
            <Svg className="derecha" src="public/svg/flechas/drc.svg"></Svg>
          </Button>
        </Flechas>
    </Main>
  )

}

export default App
