"use strict";


let numberOfFilms, genre, number;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
        let film = prompt("Один из последних просмотренных фильмов?");
        if (film.length < 1 || film.length > 50 || film == null) {
            i--;
        }
        personalMovieDB.movies[film] = +prompt("На сколько оцените его ?");
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        alert("Вы классический зритель");
    }
    else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
    }
    else {
        alert("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        genre = prompt(`Ваш любимый жанр под номером + ${i}`);
        personalMovieDB.genres.push(genre);
    }
}

writeYourGenres();

console.log(personalMovieDB);