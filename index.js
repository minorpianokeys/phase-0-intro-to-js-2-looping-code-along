for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy Birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];



function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);



function writeCards(names, event) {
    let newNames = [];

    for (let i = 0; i < names.length; i++) {
        newNames.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }

    return newNames;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");



function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }
}