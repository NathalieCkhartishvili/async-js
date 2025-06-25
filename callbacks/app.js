
// async + callback

// function user_info(email, pass, info, user_error) {
//         setTimeout(() => {
//             console.log('hi all');
//                if(email && pass) {
//                 info({
//                     user_email : email,
//                     user_pass : pass
//                 })
//                }
//                else {
//                  user_error('ასეთი მომხმარებელი არ მოიძებნა')
//                }

//         }, 2000)
// }

// const userInfo = user_info('nt@gmail.com', 1234, 
//     user => console.log(user),
//     err => console.log(err))


    // console.log(userInfo);


    function user_info(email, pass) {
      return new Promise((resolve, reject) => {
          setTimeout(()=> {
            resolve({
                user_email : email,
               user_pass : pass
            })

            reject(new Error('ასეთი მომხმარებელი არ მოიძებნა'))
          }, 2000)
      })
    }
    
  //  user_info('nt@gmail.com', 1234)
  //  .then(user => console.log(user))
  //  .catch(err => console.log(err))
    


  async function full_user_info() {
      const full_info = await user_info('nt@gmail.com', 1234)
      console.log(full_info); 
  }

  full_user_info()