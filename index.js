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

/*

NOTE, originally index.js had this code:

const titleCased = () => {
  return tutorials
}

Presumably we were supposed to just "add" to this bit of code.
However, map does not mutate the original array, it provides a new one.
The "tutorials" array was defined with const.

The assignment was this:

"Your job is to write the following function:

    titleCased(): returns an array with title case tutorial names. Note that this function takes no arguments and should use the global tutorials variable as data."

The says nothing about needing to mutate the "tutorials" array, only that we should use it.  There's also this part:

"Create a new array containing the names of the tutorials with proper title case formatting."

This also suggests new and do not mutate, but later there is this part:

"Once you've got that working, then figure out how to update the array itself."

So this suggests mutate!

Thus I am adding possibly unnecessary code to keep this "return tutorials" line,
e.g. assign from tutorialsUpperCased to tutorials and then return tutorials,
While I could easily simply "return tutorialsUpperCased".

*/


const titleCased = () => {
  const tutorialsUpperCased = tutorials.map(function (tutorialQuestion) {
    let lastCharater = " ";
    let tutorialQuestionUpperCased = ""; 
    for (let tutorialQuestionCharacter of tutorialQuestion) {
      if (lastCharater === " ") {
        tutorialQuestionUpperCased += tutorialQuestionCharacter.toUpperCase(); 
      } else {
        tutorialQuestionUpperCased += tutorialQuestionCharacter; 
      };
      lastCharater = tutorialQuestionCharacter;
    };
    return tutorialQuestionUpperCased;
  });
  Object.assign(tutorials,tutorialsUpperCased)
  return tutorials
};