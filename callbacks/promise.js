// ! new Date, Math


const promise = new Promise((resolve, reject) => {
        setTimeout(()=> {
            // resolve({
            //     user : 'Ana'
            // })

            reject(new Error('ასეთი მომხმარებელი არ მოიძებნა'))
        }, 2000)
})

promise
.then(user => console.log(user))
.catch(err => console.log(err))