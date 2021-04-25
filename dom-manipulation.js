/**
 * Add the following elements to the container using ONLY javascript - do not add any HTML 
 * or CSS code.

1. a <p> with red text that says “Hey I’m red!”
2. an <h3> with blue text that says “I’m a blue h3!”
3. a <div> with a black border and pink background color with the following elements 
inside of it:
    1. another <h1> that says “I’m in a div”
    2. a <p> that says “ME TOO!”
    3. Hint for this one: after creating the div with createElement, append the <h1> and 
    <p> to it before adding it to the container.
 */

// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//1. a <p> with red text that says “Hey I’m red!”
const paragraph = document.createElement('p');
paragraph.style.color = 'red'; 
paragraph.textContent = 'Hey I’m red!';
container.appendChild(paragraph);

//2. an <h3> with blue text that says “I’m a blue h3!”
const title3 = document.createElement('h3');
title3.style.color = 'blue'; 
title3.textContent = 'I’m a blue h3!';
container.appendChild(title3);

//3. a <div> with a black border and pink background color
const newContent = document.createElement('div');
newContent.style.backgroundColor = 'pink';
newContent.style.borderStyle = 'solid'; 
newContent.style.borderColor = 'black'; 


//    1. another <h1> that says “I’m in a div”
const title1 = document.createElement('h1');
title1.textContent = 'I’m in a div”';
newContent.appendChild(title1);

//    2. a <p> that says “ME TOO!”
const newParagraph = document.createElement('p');
newParagraph.textContent = 'ME TOO!';
newContent.appendChild(newParagraph);

container.appendChild(newContent);