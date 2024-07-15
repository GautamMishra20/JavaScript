# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/stackblitz-starters-xkxtao?file=1-colorChanger%2Findex.html)

# Solution code

## project 1:-
```javascript
console.log("Gautam Mishra")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'pink') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'greenyellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
 ```