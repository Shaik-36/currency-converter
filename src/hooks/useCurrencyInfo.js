import {useEffect, useState} from "react"


function useCurrencyInfo(currency){

    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
     // .then((res) => setData(res[usd]))

        // ----------  JSON Response Example  -----------
        // {
        //     "date": "2024-10-20",
        //     "usd": {
                    // "1000sats": 3539.75922694,
                    // "1inch": 3.69634794,
                    // "aave": 0.0063595105,
        //          }
        // }
        //  ------------------------------------------------
  
    }, [currency])

    
    return data
}

export default useCurrencyInfo;