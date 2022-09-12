const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];
const ANIMATION_SPEED = 750;
export default () => {
  let letter_count = 0;
  const headingEl = document.getElementById("hacker_anim_h1") as HTMLDivElement;
  const word = headingEl.innerHTML.trim();
  let finished = false;

  headingEl.innerHTML = "";

  for (var i = 0; i < word.length; i++) {
    const el = document.createElement("span");
    el.innerText = word.charAt(i);
    el.classList.add("hacker_anim");
    headingEl.append(el);
  }

  setTimeout(write, 75);
  setTimeout(inc, ANIMATION_SPEED);

  function write() {
    for (var i = letter_count; i < word.length; i++) {
      if (word[i] == " ") continue;

      var c = Math.floor(Math.random() * 36);
      const a = document.querySelectorAll<HTMLSpanElement>("span.hacker_anim");

      a[i].innerHTML = alphabet[c];
    }
    if (!finished) {
      setTimeout(write, 75);
    }
  }

  function inc() {
    document.querySelectorAll<HTMLSpanElement>("span.hacker_anim")[
      letter_count
    ].innerHTML = word[letter_count];
    letter_count++;
    document
      .querySelector<HTMLSpanElement>(
        "span.hacker_anim:nth-child(" + letter_count + ")"
      )
      ?.classList.add("hacker_anim_glow");

    if (letter_count >= word.length) {
      finished = true;
      //   setTimeout(reset, 1500);
    } else {
      setTimeout(inc, ANIMATION_SPEED);
    }
  }

  // function reset() {
  //   letter_count = 0;
  //   finished = false;
  //   setTimeout(inc, ANIMATION_SPEED);
  //   setTimeout(write, 75);
  //   document
  //     .querySelectorAll<HTMLSpanElement>("span.hacker_anim")
  //     .forEach((el) => el.classList.remove("hacker_anim_glow"));
  // }
};
