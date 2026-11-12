import { useEffect } from "react"
import { useState } from "react"

export default function useFetch(url){
    const [data, setData]=useState(null)
    const [loading, setLoading]=useState(true)
    const [error, setError]=useState(null)

    useEffect(()=>{
        setLoading(true);
        setError(null);

    async function fetchData() {
        try{
            const response =await fetch(url)
            if (!response.ok) throw new Error("There is a problem ");

            const json = await response.json();
            setData(json);
        } catch(err){
            setError(err.message)
        }finally {
            setLoading(false)
        }
    }
    fetchData()
  }, [url]);

    return ({data, loading, error})
}