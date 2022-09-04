import { useState } from "react"


export const usePagination = (page) => {

    const [pagine, setPagine] = useState(page);
    const [numRotation, setNumRotation] = useState([1,2,3])

    const next = () =>{
        setPagine(pagine + 10)
    }

    const previous = () =>{
        if(pagine === 0) return;
        setPagine(pagine - 10)
    }

    const rotation = () =>{
        if(numRotation <= 3) return;
        const modif = numRotation.map((num)=>{
            num+1
        })
        setNumRotation(modif)
    }

    return{
        next,
        previous,
        rotation,
        setPagine,
        numRotation,
        pagine
    }
}
