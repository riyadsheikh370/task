import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

let apiData = createContext

const ContextApi = ({ children }) => {

    let [info, setInfo] = useState([])

    let getData = () => axios.get("https://api.shope.com.bd/api/v1/public/hero-categories").then((response) => {
        setInfo(response.data.products)
    })

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <apiData.Provider value={info}>{children}</apiData.Provider>
        </>
    )
}

export default { ContextApi, apiData }
