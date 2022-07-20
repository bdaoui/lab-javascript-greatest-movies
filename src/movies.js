
// let movies = [
//   {
//     title: 'The Shawshank Redemption',
//     year: 1994,
//     director: 'Frank Darabont',
//     duration: '2h 22min',
//     genre: ['Crime', 'Drama'],
//     score: 9.3
//   },
//   {
//     title: 'The Godfather',
//     year: 1972,
//     director: 'Francis Ford Coppola',
//     duration: '2h 55min',
//     genre: ['Crime', 'Drama'],
//     score: 9.2
//   },
//   {
//     title: 'The Godfather: Part II',
//     year: 1974,
//     director: 'Francis Ford Coppola',
//     duration: '3h 22min',
//     genre: ['Crime', 'Drama'],
//     score: 9
//   },
//   {
//     title: 'The Dark Knight',
//     year: 2008,
//     director: 'Christopher Nolan',
//     duration: '2h 32min',
//     genre: ['Action', 'Crime', 'Drama', 'Thriller'],
//     score: 9
//   }
// ]



// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    return moviesArray.map(element => {
      howManyMovies(movies);

        return element.director;

    });
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
/*function howManyMovies(moviesArray) {
  let films = moviesArray.filter(movies => 
    
    
    movies.director === "Steven Spielberg")
    let genre = films.genre.filter(element => "drama")

  } */

  
  function howManyMovies(moviesArray) {
    counter = 0;
    let spielbergMovies = moviesArray.filter( movies => movies.director === "Steven Spielberg");
    spielbergMovies.forEach( element => {
      if(element.genre.includes("Drama")){
        counter++;
      }
    
      return counter;
    })   
    
    return counter;
   
    };





// Iteration 3: All scores average - Get the average of all scores with 2 decimals


function scoresAverage(moviesArray) {

  if(!moviesArray.length){
    return 0;
  }

  let sum = moviesArray.reduce( (previousV, CurrentV) => { return previousV + CurrentV.score}, 0)
  let result = sum/moviesArray.length;


  return Math.round(result * 100) / 100;
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

  let dramaMovies = moviesArray.filter( film => film.genre.includes("Drama"));
  let sumDrama;
  let result;
  if (dramaMovies.length > 0){
   sumDrama = dramaMovies.reduce( (previousV, currentV) => {return previousV + currentV.score}, 0)
   result = sumDrama/dramaMovies.length;
  }

  else{
    result = 0;
  }

  return Math.round(result * 100) / 100;

}

dramaMoviesScore(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Still not working but at least I tried
  
function orderByYear(moviesArray) {
  const moviesArray2 = [...moviesArray];
      let orderBY = moviesArray2.sort( (x, y) => x.year - y.year);
      let copyOrderBY = [...orderBY];      
      let orderByTitle = copyOrderBY.sort( (x, y) => x.title - y.title);

      return orderByTitle;
  }

  orderByYear(movies);


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
