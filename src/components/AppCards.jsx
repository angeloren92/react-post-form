import axios from "axios"
import { useEffect, useState } from "react";

export default function AppCards({ apiUrl }) {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(apiUrl)
            .then(function (response) {
                setData(response.data)
                console.log('dati inviati', data)
            })
            .catch(function (error) {
                console.log('errore caricamento')
            })
    }, [])

    const reversedData = [...data].reverse().map(element => element).slice(0, 25)

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 py-5">
            {
                reversedData.map(element => {
                    return (
                        <div key={element.id} className="col g-3">
                            <div className="card h-100">
                                <div className="card-body d-flex flex-column justify-content-start">
                                    <div className="card-header">
                                        <h2 className="h4 mb-0">
                                            {element.title}
                                        </h2>
                                        <small className="text-muted">
                                            {element.author}
                                        </small>
                                    </div>
                                    <div className="text-center">
                                        <p className="mt-3">
                                            {element.body}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}