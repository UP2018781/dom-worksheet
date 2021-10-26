/*
 * This is index.js
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year shoudl use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
    return "Replace This With Your Student ID";
    // e.g. return "UP654321";
}

function fn() {
    return "Replace This With Your First Name";
}

function sn() {
    return "Replace This With Your Surname";
}

// add your functions here

function replaceText(elem,str){
    elem.textContent = str;
}

function addTextTo(elem,str){
    elem.append(str);
}

function moreBears(){
    const bearElem = document.querySelector("#animals");
    bearElem.src='http://placebear.com/400/200';
    bearElem.alt='A bear.';
    bearElem.title='A BEAR!';
}

function setId(elem,str){
    elem.id=str;
    return elem;
}

function setClass(elem,str){
    elem.classList = str;
    return elem;
}

function addAClass(elem,str){
    elem.classList.add(str);
    return elem;
}

function removeAClass(elem,str){
    elem.classList.remove(str);
    return elem;
}

function newElement(name){
    const a = document.createElement(name);
    return a;
}

function findElementById(id){
    return  document.getElementById(id);
}

function findElementsByQuery(query){
    return  document.querySelectorAll(query);
}

function reverseList(query){

    const listhold = document.querySelectorAll(query)[0];
    const L = listhold.children.length;
    for (let i = L; i<L; i--){
        console.log(listhold.append(listhold.children[i]));
        listhold.append(listhold.children[i]);
        
    }


}
