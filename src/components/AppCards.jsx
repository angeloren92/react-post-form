import axios from "axios"
import { useEffect, useState } from "react";

export default function AppCards({ apiUrl }) {

    const [data, setData] = useState([])
    const [pages, setPages] = useState([0, 20])
    const reversedData = [...data].reverse()
    const currentPage = reversedData.slice(pages[0], pages[1])

    useEffect(() => {
        axios.get(apiUrl)
            .then(function (response) {
                setData(response.data)
                console.log('dati inviati', data)
            })
            .catch(function (error) {
                console.log('errore caricamento')
            })
    }, [apiUrl])

    function setNextPages() {
        setPages([pages[0] +20, pages[1] + 20])
    }
    function setPrevPages() {
        setPages([pages[0] -20, pages[1] - 20])
    }

    console.log(pages)

    return (
        <>
            <div className="mt-5 d-flex justify-content-between">
                <button onClick={setPrevPages} className="btn btn-warning" disabled={pages[0] <= 0}>PREV</button>
                <button onClick={setNextPages} className="btn btn-warning" disabled={pages[1] >= data.length}>NEXT</button>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 py-3">
                {
                    currentPage.map(element => {
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
        </>
    )
}