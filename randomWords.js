let arr = ['Sad', 'Mad', 'Bad', 'Glad']

function randomWords() {
  return arr[Math.floor(Math.random() * 4)];
}

console.log(randomWords());