"use strict";


const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


const film = prompt("Один из последних просмотренных фильмов?");
personalMovieDB.movies[film] = prompt("На сколько оцените его ?");

const film2 = prompt("Один из последних просмотренных фильмов?");
personalMovieDB.movies[film2] = prompt("На сколько оцените его ?");

console.log(personalMovieDB);