"use strict";

let genre;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
        }
    },
    rememberMyFilms: function () {
            for (let i = 0; i < 2; i++) {
            let film = prompt("Один из последних просмотренных фильмов?");
            if (film.length < 1 || film.length > 50 || film == null) {
                i--;
            }
            personalMovieDB.movies[film] = +prompt("На сколько оцените его ?");
        }
    },
    detectPersonalLevel: function () {
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
    },
    showMyDB: function () {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        let i;
        for (i = 1; i < 4; i++) {
            genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre === '' || genre === null) {
                i--;
            }
            else {
                personalMovieDB.genres.push(genre);
            }
        }
        personalMovieDB.genres.forEach(function (currentValue, index) {
            console.log(`Любимый жанр #${index + 1} - это ` + currentValue);
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat === false) {
            personalMovieDB.privat = true;
        }
        else if (personalMovieDB.privat === true) {
            personalMovieDB.privat = false;
        }
    }
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
console.log(personalMovieDB);