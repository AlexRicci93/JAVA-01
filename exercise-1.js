
let personName = 'Paul';


function canPlay() {
  if (true) {
    personName;
  }

  personName += ' plays football'; // Argh! personName is not defined

  console.log(personName);
}

canPlay();