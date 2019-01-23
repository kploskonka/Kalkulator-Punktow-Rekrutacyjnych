"use strict";

let pointsForm = document.forms.points;

pointsForm.addEventListener('submit', (event) => {
    countPoints();
    event.preventDefault();
});

function countPoints(selector = '.result__text') {
    let basicExamPoints = +pointsForm.basicExam.value;
    let extendedExamPoints = +pointsForm.extendedExam.value;
    let pkRecrutationPoints;
    let aghRecrutationPoints;

    //PK
    if (basicExamPoints > extendedExamPoints * 2) {
        pkRecrutationPoints = basicExamPoints;
    } else {
        pkRecrutationPoints = extendedExamPoints * 2
    }
    //AGH
    if (extendedExamPoints < 30) {
        aghRecrutationPoints = 4 * extendedExamPoints + 2 * basicExamPoints;
    } else if (extendedExamPoints <= 80) {
        aghRecrutationPoints = 4 * (extendedExamPoints + 2 * (extendedExamPoints - 30)) + 2 * basicExamPoints;
    } else {
        aghRecrutationPoints = 4 * (extendedExamPoints + 100) + 2 * basicExamPoints;
    }

    document.querySelector(selector).innerHTML = `Twoje punkty: AGH: ${aghRecrutationPoints} PK: ${pkRecrutationPoints}`;
}