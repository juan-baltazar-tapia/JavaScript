//DEBUGGING
let ladder = ''

const items = ['head', 'heal', 'teal', 'tell', 'tall', 'tail'];
items.forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

 ladder += word
});

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail