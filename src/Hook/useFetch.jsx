import { useEffect, useState } from "react"

export const useFetch = (url)=>{

    const [info, setInfo] = useState([])

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then( data =>{
            setInfo(data)
        })
    },[])
    return info
}