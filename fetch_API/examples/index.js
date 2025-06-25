
                    fetch('users.json')
                    .then(response => response.json())
                    // .then(data => console.log(data)

                    .then(users => {
                        const row_box = document.querySelector('#card_space')
                        console.log(row_box);
                        users.forEach(user => {
                                const card = `
                                    <div class="col-4">
                                    <div class="card" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title">${user.name}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p class="card-text">${user.email}</p>
                                    <a href="#" class="card-link">Card link</a>
                                    <a href="#" class="card-link">Another link</a>
                                </div>
                                </div>
                                    </div>`
                                row_box.innerHTML += card
                            }) 
                    })
                    .catch(err => console.log('ინფორმაცია ვერ მოდის სწორად')
                    )


                    // input.value

                    // text()

                    // parseInt()