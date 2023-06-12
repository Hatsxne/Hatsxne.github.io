'use strict';
console.log('reached script');

const toggler = document.getElementById('buttonID');

toggler.addEventListener('click', function()
{
    document.body.classList.toggle('epic-theme');
    document.body.classList.toggle('hacker-theme');

    console.log('successfully toggled to ' + document.body.className);
});

console.log('finished script');