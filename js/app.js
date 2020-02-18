'use strict';
var grade = 0;
var question = prompt('are my mobile samsung').toLowerCase();

question === 'yes' || question === 'y' ? grade++ : null;

question = prompt('do i study software engneer in university').toLowerCase();

question === 'no' || question === 'n' ? grade++ : null;

question = prompt('do i love mansaf').toLowerCase();

question === 'yes' || question === 'y' ? grade++ : null;

question = prompt('do i love developer').toLowerCase();

question === 'yes' || question === 'y' ? grade++ : null;

question = prompt('do i love the TAs').toLowerCase();
question === 'yes' || question === 'y' ? grade++ : null;

var age = prompt('how old I am you have 4 chansses');
var count = 1;
do {
  if (age == 24) {
    console.log('jlklj');
    alert("yes I'm 24 years old");
    grade++;
    break;
  } else if (age < 24) {
    if (age < 22) {
      age = prompt('ops to low guss again');
    } else {
      age = prompt('almost there up a little');
    }
  } else if (age > 24) {
    if (age > 26) {
      age = prompt('ops to high guss again');
    } else {
      age = prompt('almost there dowwn a little');
    }
  }
  if (count === 3) {
    alert('sorry you finsh your gisses I am 24 years old');
  }
  console.log(count);
  count++;
} while (count !== 4);

var array = ['kfc', 'burger king', 'pizza hut', 'mcdonalds'];
var restrunt = prompt('guss one of my faverot restaurants').toLowerCase();
var count2 = 7;

while (!(array.indexOf(restrunt) + 1)) {
  if (count2 === 0) {
    alert(
      'sorry you didnt answer here is my best restrunt here is my best restrunts'
    );
    for (let i = 0; i < array.length; i++) {
      alert(array[i]);
    }
    grade++;
    break;
  }
  restrunt = prompt(`Ops not crocet try again you have ${count2} gusses`);
  console.log(array.indexOf(restrunt) + 1)
  if (array.indexOf(restrunt) + 1) {
    array.splice(array.indexOf(restrunt),1)
    console.log('sdf')
    alert(`good yes I love ${restrunt} and also love ${array.join(' and ')}`); 
    
    grade++;
    break;
  }
  count2--;
}
alert(`you grade is ${grade} of 7`);
