// ! async-js
// ! setTimeout()
// ! setInterval()

console.log('hello');

// setTimeout(()=> {
//     console.log('hi all');
    
// }, 1000)

// setInterval(()=> {
//     console.log('hi all');
    
// }, 2500)

// console.log('bye');


function getRecipes() {
    setTimeout(()=> {
        console.log('hi all');
        
        const recipeId = [1, 2, 3, 4, 5]
        console.log(recipeId);
        
        setTimeout((id)=> {
            const recipe_authors ={
                author : 'Ana',
                recipe : 'fresh juice'
            }
            
                console.log(recipe_authors);
                
                setTimeout((author)=> {
                    const recipes2 = {
                        author : author,
                        recipe : 'hot chocolate'
                    }

                    console.log(recipes2);
                    console.log(`${recipes2.recipe} also made by ${recipes2.author}`);
                    
                    
                }, 2000,  recipe_authors.author) 

           }, 1500, recipeId[2],)

    }, 2500)
}

getRecipes()


