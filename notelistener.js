let notesArr = [
  "C",
  "D♭",
  "D",
  "E♭",
  "E",
  "F",
  "F#",
  "G",
  "A♭",
  "A",
  "B♭",
  "B"
];

class Notes {
  constructor() {}

  //loops to determine note
  noteListener() {
    just.forEach((j, jIdx) => {
      if (j < 16.34) {
        notes[jIdx] = "Ferret";
        return;
      }
      for (let i = 0; i < justRef.length - 1; i++) {
        if (
          (j >= justRef[i] / 2 ** 3 && j <= (justRef[i + 1] - 0.01) / 2 ** 3) ||
          (j >= justRef[i] / 2 ** 2 && j <= (justRef[i + 1] - 0.01) / 2 ** 2) ||
          (j >= justRef[i] / 2 && j <= (justRef[i + 1] - 0.01) / 2) ||
          (j >= justRef[i] && j < justRef[i + 1] - 0.01) ||
          (j >= justRef[i] * 2 && (j <= justRef[i + 1] - 0.01) * 2) ||
          (j >= justRef[i] * 2 ** 3 && j <= (justRef[i + 1] - 0.01) * 2 ** 3) ||
          (j >= justRef[i] * 2 ** 4 && j <= (justRef[i + 1] - 0.01) * 2 ** 4) ||
          (j >= justRef[i] * 2 ** 5 && j <= (justRef[i + 1] - 0.01) * 2 ** 5)
        ) {
          notes[jIdx] = notesArr[i];
          return;
        }
      }
      if (j > 7902.14) notes[jIdx] = "Flipper";
    });
  }
}