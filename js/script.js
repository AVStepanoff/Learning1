"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?","");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?","");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {

        let answer1 = prompt("Один из последних посмотренных фильмов?", ""),
            answer2 = +prompt("На сколько оцените его?", "");
    
        if (answer1 != null && answer2 != null && answer1 != '' && answer2 != '' && answer1.length < 50) {
            personalMovieDB.movies[answer1] = answer2;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

// То же самое, но используем другие виды циклов:

// работаем с циклом while

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

// работаем с циклом do - while

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

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Ошибка');
    }
}

detectPersonalLevel();

function showMyDB() {
    if(!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {     
            
        let answer = prompt(`Ваш любимый жанр под номером ${i}`,'');  
        if(answer != null || answer != '') {
            personalMovieDB.genres[i-1] = answer;
        } else {
            i--;
        }
                   
    }
}

writeYourGenres();

