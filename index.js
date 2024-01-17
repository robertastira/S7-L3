const getBooks = function () {
    fetch(
      'https://striveschool-api.herokuapp.com/books'
    )
      .then((response) => {
        console.log('response', response)
        if (response.ok) {
          return response.json()
        } else {
          if (response.status === 404) {
            throw new Error('404 - Pagina non trovata')
          } else if (response.status === 500) {
            throw new Error('500 - Internal server error')
          } else {
            throw new Error('Errore generico')
          }
        }
      })
      .catch((err) => {
            console.log('errore!', err)
        })
    
        .then((Books) => {
            console.log('Books', Books)
            console.log(Books[0].title)
            console.log(Books[0].category)

        const row = document.getElementById('bookCard')
        Books.forEach((Books) => {
        const newCol = document.createElement('div')
        newCol.classList.add('col-4') 
        newCol.innerHTML = `
        <div class="card" style="width: 20rem; height:42rem">
        <img src="${Books.img}" class="card-img-top" alt="..." style>
        <div class="card-body">
        <h5 class="card-title">${Books.title}</h5>
        <p class="card-text">Category: ${Books.category} Price: ${Books.price}</p>
        <a href="#" class="btn btn-primary">Scarta</a>
        </div>
        </div>
          `
        row.appendChild(newCol)

    })
        })
    }
    
    
    getBooks()


    const removeBook = function (button) {
      const card = button.closest(".card");
      card.remove();
    };

    
  