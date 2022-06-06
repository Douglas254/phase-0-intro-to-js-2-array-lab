// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

// insert to end of an array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// insert to beginning of an array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// removes last item in an array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// removes first item in an array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

/* appends a cat to the cats array and returns a new array, leaving the cats array unchanged */

function appendCat(name) {
  return [...cats, name];
}

/* prepends a cat to the cats array and returns a new array, leaving the cats array unchanged: */

function prependCat(name) {
  return [name, ...cats];
}

/* removes the last cat in the cats array and returns a new array, leaving the cats array unchange */

function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

/* removes the first cat from the cats array and returns a new array, leaving the cats array unchanged */
function removeFirstCat() {
  return cats.slice(1);
}
