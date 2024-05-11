const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = tutorials.map((tutorial) => {
  const lowerCased = tutorial.toLowerCase(); 
  const strSplit = lowerCased.split(' ');

  const toUpper = strSplit.map((word) => {
    return word;
  })
  return toUpper;
});

console.log(titleCased);

// function splitTutorials() {
//   for (let i = 0; i < tutorials.length; i++) {
//     console.log(tutorials[i]); 
//   }
// } 

// splitTutorials();
