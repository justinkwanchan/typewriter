// W02D2 - Animated Sentence
// In this activity we'll take a sentence and display it as an animation.
const sentence = "hello there from lighthouse labs";

const delayLetter = phrase => {
  setTimeout(() => {
    process.stdout.write(phrase[0]);
    phrase.length > 1 ? delayLetter(phrase.slice(1)) : console.log();
    return;
  }, 50);
};
delayLetter(sentence);