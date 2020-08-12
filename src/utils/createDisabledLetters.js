export default function createDisabledLetters(selectedWord) {
  const numberOfDisabledLetters = 10 - selectedWord.length;

  return Array.from({ length: numberOfDisabledLetters }, () => '');
}
