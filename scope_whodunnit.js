
// Episode 1

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// Prediction: undefined, as the info is contained as a constant only in the scenario
// Answer: Miss Scarlet, because still have access to contents of scenario when calling function

// Episode 2

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Prediction: Won't work as Mrs Peacock being murderer, as the const has been defined, can't reassign
// Answer: TypeError: Assignment to constant variable.

// Episode 3
//
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

Prediction: First Verdict will be Mrs Peacock, as a result of calling the declareMurderer function and the second is Professor Plum, as he has assigned to murderer at the start
Answer: Correct

//Episode 4

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// Prediction: Mrs. Peacock because Colonel Mustard was suspectThree just in the context of setting up the declareAllSuspects function intially.  When it calls it again, I predict it will look back to the inital list of suspects.
// Answer: Correct

// Episode 5
//
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

// Prediction: Revolver - const has been assigned to changeWeapon - although it's now being provided in brackets, rather than drawing on scenario.weapon, it doesn't seem to try to change the assignment of the constant itself
// Answer: Correct

// Episode 6
//
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Prediction: Colonel Mustard, because he's outside the other functions and so can be used by changeMurderer when it is called
// Answer: Mrs White - her details have been used when plotTwist was called, as so was used when calling declareMurderer and so it was the value that pulled through when trying to get the verdict

// Episode 7
//
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Prediction: Mr Green, because his details are called most reccently before declareMurderer and so his details would be used
// Answer: Correct

// Episode 8

const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

// Prediction: lead Pipe
// Answer: Candlestick - unexpected outcome was called with Colonel Mustard, which meant that the weapon was a candle stick; because the argument passed in was dininig room, that made the murderer Colonel Mustard, so the choice of weapon still stood as candle stick. Change scenario was called, but that does not mean calling a weapon, so candle stick remained the weapon

// Episode 9
//
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// Prediction: Professor Plum, as not accessing info from inside if statement when calling declareMurderer
// Answer: Correct

// Extensions

// Make up your own episode!

let murderer = 'Miss Scarlet'
if (murderer === 'Colonel Mustard') {
  let murderer = "Reverend Green";
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}
const verdict = declareMurderer();
console.log(verdict);
//
// Answer: Miss Scarlett
