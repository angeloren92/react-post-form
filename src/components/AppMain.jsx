import { useState } from "react"
import axios from "axios"
import AppCards from './AppCards'

function AppMain() {

  const apiUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"

  const [formInput, setFormInput] = useState({
    author: '',
    title: '',
    body: '',
    gridCheck: false
  })

  async function handleFormSubmit(e) {
    e.preventDefault()

      const response = await axios({
      method: "post",
      url: apiUrl,
      data: formInput
    })
    console.log(response.data)
  }

  function handleInputData(e) {
    const inputValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormInput({...formInput, [e.target.name] : inputValue})

  }

  return (
    <main className="bg-light vh-100">
      <div className="container">
        <form className="row g-3 pt-3" onSubmit={handleFormSubmit}>
          <div className="col-12">
            <label htmlFor="author" className="form-label">Autore</label>
            <input type="text" className="form-control" id="author" name="author" placeholder="Nome Autore" onChange={handleInputData} value={formInput.author}/>
          </div>
          <div className="col-12">
            <label htmlFor="title" className="form-label">Titolo</label>
            <input type="text" className="form-control" id="title" name="title" placeholder="Titolo Post" onChange={handleInputData} value={formInput.title}/>
          </div>
          <div className="col-12">
            <label htmlFor="body" className="form-label">Testo</label>
            <textarea type="text" className="form-control" id="body" name="body" onChange={handleInputData} value={formInput.body}/>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" name="gridCheck" onChange={handleInputData} checked={formInput.gridCheck}/>
              <label className="form-check-label" htmlFor="gridCheck">
                Post Pubblico
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Aggiungi</button>
          </div>
        </form>
        <AppCards apiUrl={apiUrl}/>
      </div>
    </main>
  )
}

export default AppMain
