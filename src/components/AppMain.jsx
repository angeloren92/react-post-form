function AppMain() {

  return (
    <main>
      <div className="container">
        <form className="row g-3">
          <div className="col-12">
            <label for="author" className="form-label">Autore</label>
            <input type="text" className="form-control" id="author" name="author" placeholder="Nome Autore" />
          </div>
          <div className="col-12">
            <label for="title" className="form-label">Titolo</label>
            <input type="text" className="form-control" id="title" name="title" placeholder="Titolo Post" />
          </div>
          <div className="col-12">
            <label for="body" className="form-label">Testo</label>
            <textarea type="text" className="form-control" id="body" name="body" />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Aggiungi</button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default AppMain
