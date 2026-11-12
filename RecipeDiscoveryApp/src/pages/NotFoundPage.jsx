import { useEffect } from "react"
import { useState } from "react"

export default function useFetch(url){
    const [data, setdata]=useState(null)
    const [loading, setLoading]=useState(true)
    const [error, setError]=useState(null)

    useEffect(()=>{
        setLoading(true);
        setError(null);
    }
    
    async function fetchData() {
        try{
            const reponse =await fetch(url)
            if (!response.ok) throw new Error("There is a problem ");
        } catch(err){
            setError
        }
    fetchData()
  }, [url]);
    return (
        <>
        
        
        </>
    )
}