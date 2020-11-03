"use strict";

let numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?","");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let answer1 = prompt("Один из последних посмотренных фильмов?", ""),
    answer2 = +prompt("На сколько оцените его?", ""),
    answer3 = prompt("Один из последних посмотренных фильмов?", ""),
    answer4 = +prompt("На сколько оцените его?", "");

    personalMovieDB.movies[answer1] = answer2;
    personalMovieDB.movies[answer3] = answer4;

    console.log(personalMovieDB);