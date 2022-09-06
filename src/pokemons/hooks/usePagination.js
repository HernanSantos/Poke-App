import { useState } from "react"


export const usePagination = (initialState = 0) => {

    const [pagine, setPagine] = useState(initialState);

    const next = () =>{
        setPagine((page)=> page + 10)
    }

    const previous = () =>{
        if(pagine === 0) return;
        setPagine((page)=> page - 10)
    }

    return{
        pagine,
        next,
        previous,
    }
}
