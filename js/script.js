"use strict";

let numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?","");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {

    let answer1 = prompt("Один из последних посмотренных фильмов?", ""),
        answer2 = +prompt("На сколько оцените его?", "");

    if (answer1 != null && answer2 != null && answer1 != '' && answer2 != '' && answer1.length < 50) {
        personalMovieDB.movies[answer1] = answer2;
    } else {
        i--;
    }
}

// let i = 0;
// while (i < 2) {
//     let answer1 = prompt("Один из последних посмотренных фильмов?", ""),
//     answer2 = +prompt("На сколько оцените его?", "");

//     if (answer1 != null && answer2 != null && answer1 != '' && answer2 != '' && answer1.length < 50) {
//         personalMovieDB.movies[answer1] = answer2;
//     } else {
//         i--;
//     }

//     i++;
// }

// let i = 0;
// do {
//     let answer1 = prompt("Один из последних посмотренных фильмов?", ""),
//     answer2 = +prompt("На сколько оцените его?", "");

//     if (answer1 != null && answer2 != null && answer1 != '' && answer2 != '' && answer1.length < 50) {
//         personalMovieDB.movies[answer1] = answer2;
//     } else {
//         i--;
//     }

//     i++;
// } while (i < 2);

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
} else {
    alert('Ошибка');
}

    console.log(personalMovieDB);

