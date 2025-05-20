'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/name/portugal');
request.send();

/*
request.addEventListener('load', function () {
    console.log(this.responseText);
})

const html =
    `<article className="country">
        <img className="country__img" src=""/>
        <div className="country__data">
            <h3 className="country__name">COUNTRY</h3>
            <h4 className="country__region">REGION</h4>
            <p className="country__row"><span>👫</span>POP people</p>
            <p className="country__row"><span>🗣️</span>LANG</p>
            <p className="country__row"><span>💰</span>CUR</p>
        </div>
    </article>`;
    */

console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Esolved promise 1').then(res => console.log(res));
console.log('Test end')