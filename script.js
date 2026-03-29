console.log("JS Connected!");
const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyper Tool Multi Language"],
    answer: 1
  },
  {
    question: "Which language is used for styling?",
    options: ["HTML", "Python", "CSS", "Java"],
    answer: 2
  },
  {
    question: "Which is a JavaScript framework?",
    options: ["React", "Django", "Flask", "Laravel"],
    answer: 0
  },
  {
    question: "Which symbol is used for comments in JS?",
    options: ["//", "#", "<!-- -->", "**"],
    answer: 0
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: 1
  },
  {
    question: "Which HTML tag is used to insert an image?",
    options: ["<img>", "<image>", "<pic>", "<src>"],
    answer: 0
  },
  {
    question: "Which HTML tag is used for the largest heading?",
    options: ["<h6>", "<h1>", "<head>", "<heading>"],
    answer: 1
  },
  {
    question: "Which HTML tag creates a line break?",
    options: ["<lb>", "<break>", "<br>", "<line>"],
    answer: 2
  },
  {
    question: "Which attribute is used for image path?",
    options: ["src", "href", "link", "path"],
    answer: 0
  },
  {
    question: "Which tag is used to create a list item?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: 2
  },
  {
    question: "Which HTML element is used for paragraphs?",
    options: ["<text>", "<p>", "<para>", "<pg>"],
    answer: 1
  },
  {
    question: "Which input type is used for passwords?",
    options: ["text", "password", "secure", "pass"],
    answer: 1
  },
  {
    question: "Which tag is used for tables?",
    options: ["<table>", "<tab>", "<tr>", "<td>"],
    answer: 0
  },
  {
    question: "Which tag is used for table rows?",
    options: ["<td>", "<tr>", "<th>", "<row>"],
    answer: 1
  },

  // CSS
  {
    question: "Which CSS property changes background color?",
    options: ["color", "background-color", "bgcolor", "background"],
    answer: 1
  },
  {
    question: "Which CSS property sets text size?",
    options: ["font-size", "text-size", "font-style", "size"],
    answer: 0
  },
  {
    question: "Which CSS property makes text bold?",
    options: ["font-weight", "text-bold", "bold", "weight"],
    answer: 0
  },
  {
    question: "Which CSS property is used for spacing inside elements?",
    options: ["margin", "padding", "border", "spacing"],
    answer: 1
  },
  {
    question: "Which CSS property controls outer spacing?",
    options: ["margin", "padding", "gap", "space"],
    answer: 0
  },
  {
    question: "Which CSS property is used to align text?",
    options: ["text-align", "align", "font-align", "position"],
    answer: 0
  },
  {
    question: "Which CSS display value makes elements inline?",
    options: ["block", "inline", "flex", "grid"],
    answer: 1
  },
  {
    question: "Which CSS property adds shadow to text?",
    options: ["box-shadow", "text-shadow", "shadow", "font-shadow"],
    answer: 1
  },
  {
    question: "Which CSS property controls element transparency?",
    options: ["visibility", "opacity", "display", "transparent"],
    answer: 1
  },
  {
    question: "Which CSS property is used to round corners?",
    options: ["border-radius", "corner-radius", "round", "radius"],
    answer: 0
  },

  // JavaScript
  {
    question: "Which keyword declares a variable?",
    options: ["var", "int", "string", "define"],
    answer: 0
  },
  {
    question: "Which function prints to console?",
    options: ["print()", "console.log()", "log()", "display()"],
    answer: 1
  },
  {
    question: "Which operator is used for addition?",
    options: ["+", "-", "*", "/"],
    answer: 0
  },
  {
    question: "Which keyword is used for conditional statements?",
    options: ["if", "loop", "check", "when"],
    answer: 0
  },
  {
    question: "Which loop is used in JavaScript?",
    options: ["for", "repeat", "loop", "iterate"],
    answer: 0
  },
  {
    question: "Which symbol is used for equality check?",
    options: ["=", "==", "!=", "+"],
    answer: 1
  },
  {
    question: "Which method selects element by ID?",
    options: ["getElementById()", "query()", "selectId()", "getId()"],
    answer: 0
  },
  {
    question: "Which event occurs when button is clicked?",
    options: ["onhover", "onclick", "onchange", "onpress"],
    answer: 1
  },
  {
    question: "Which data type is used for text?",
    options: ["number", "string", "boolean", "object"],
    answer: 1
  },
  {
    question: "Which value represents true/false?",
    options: ["string", "boolean", "number", "null"],
    answer: 1
  },
  {
    question: "Which function is used to show alert?",
    options: ["alert()", "prompt()", "confirm()", "notify()"],
    answer: 0
  },
  {
    question: "Which method adds element to HTML?",
    options: ["appendChild()", "addElement()", "insert()", "push()"],
    answer: 0
  },
  {
    question: "Which keyword defines a function?",
    options: ["function", "func", "define", "method"],
    answer: 0
  },
  {
    question: "Which array method adds item at end?",
    options: ["push()", "pop()", "shift()", "add()"],
    answer: 0
  },
  {
    question: "Which array method removes last item?",
    options: ["pop()", "push()", "shift()", "remove()"],
    answer: 0
  },
  {
    question: "Which symbol is used for comments (multi-line)?",
    options: ["//", "/* */", "#", "<!-- -->"],
    answer: 1
  },
  {
    question: "Which object represents browser window?",
    options: ["document", "window", "screen", "browser"],
    answer: 1
  },
   {
    question: "Which tag is used to define a form?",
    options: ["<form>", "<input>", "<label>", "<fieldset>"],
    answer: 0
  },
  {
    question: "Which tag is used for user input field?",
    options: ["<input>", "<textbox>", "<field>", "<text>"],
    answer: 0
  },
  {
    question: "Which attribute specifies placeholder text?",
    options: ["value", "placeholder", "hint", "text"],
    answer: 1
  },
  {
    question: "Which tag is used to create a dropdown?",
    options: ["<select>", "<option>", "<dropdown>", "<list>"],
    answer: 0
  },
  {
    question: "Which tag defines an option in dropdown?",
    options: ["<item>", "<option>", "<select>", "<choice>"],
    answer: 1
  },
  {
    question: "Which tag is used to group form elements?",
    options: ["<group>", "<fieldset>", "<formgroup>", "<section>"],
    answer: 1
  },
  {
    question: "Which tag is used for labels?",
    options: ["<label>", "<text>", "<span>", "<caption>"],
    answer: 0
  },
  {
    question: "Which tag is used for bold text?",
    options: ["<b>", "<bold>", "<strong>", "<text>"],
    answer: 0
  },
  {
    question: "Which tag is used for italic text?",
    options: ["<i>", "<italic>", "<em>", "<style>"],
    answer: 0
  },
  {
    question: "Which tag is used to define metadata?",
    options: ["<meta>", "<head>", "<data>", "<info>"],
    answer: 0
  },

  // CSS
  {
    question: "Which CSS property is used for flexbox?",
    options: ["display", "flex", "grid", "box"],
    answer: 0
  },
  {
    question: "Which value enables flexbox layout?",
    options: ["block", "inline", "flex", "grid"],
    answer: 2
  },
  {
    question: "Which property aligns items horizontally in flexbox?",
    options: ["align-items", "justify-content", "align-content", "flex-align"],
    answer: 1
  },
  {
    question: "Which property aligns items vertically in flexbox?",
    options: ["justify-content", "align-items", "vertical-align", "flex-direction"],
    answer: 1
  },
  {
    question: "Which CSS property sets border?",
    options: ["border", "outline", "line", "stroke"],
    answer: 0
  },
  {
    question: "Which property sets element width?",
    options: ["size", "width", "length", "w"],
    answer: 1
  },
  {
    question: "Which property sets element height?",
    options: ["height", "size", "length", "h"],
    answer: 0
  },
  {
    question: "Which CSS property controls overflow?",
    options: ["overflow", "scroll", "hidden", "display"],
    answer: 0
  },
  {
    question: "Which value hides overflow content?",
    options: ["scroll", "hidden", "auto", "visible"],
    answer: 1
  },
  {
    question: "Which CSS property is used for font style?",
    options: ["font-style", "text-style", "style", "font"],
    answer: 0
  },

  // JavaScript
  {
    question: "Which keyword creates a constant?",
    options: ["var", "let", "const", "static"],
    answer: 2
  },
  {
    question: "Which method converts string to number?",
    options: ["Number()", "parseInt()", "parseFloat()", "All of these"],
    answer: 3
  },
  {
    question: "Which operator checks strict equality?",
    options: ["==", "===", "!=", "="],
    answer: 1
  },
  {
    question: "Which function asks user input?",
    options: ["alert()", "prompt()", "confirm()", "input()"],
    answer: 1
  },
  {
    question: "Which function shows confirmation box?",
    options: ["alert()", "prompt()", "confirm()", "verify()"],
    answer: 2
  },
  {
    question: "Which keyword stops a loop?",
    options: ["stop", "break", "exit", "end"],
    answer: 1
  },
  {
    question: "Which keyword skips one iteration?",
    options: ["continue", "skip", "next", "pass"],
    answer: 0
  },
  {
    question: "Which method joins array elements?",
    options: ["join()", "merge()", "concat()", "combine()"],
    answer: 0
  },
  {
    question: "Which method removes first element?",
    options: ["shift()", "pop()", "remove()", "delete()"],
    answer: 0
  },
  {
    question: "Which keyword is used for loops?",
    options: ["for", "while", "do", "All of these"],
    answer: 3
  },
  {
    question: "Which operator is used for NOT?",
    options: ["!", "not", "~", "!="],
    answer: 0
  },
  {
    question: "Which method finds length of array?",
    options: ["length()", "size()", "count()", "length"],
    answer: 3
  },
  {
    question: "Which method converts JSON to object?",
    options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "toObject()"],
    answer: 0
  },
  {
    question: "Which method converts object to JSON?",
    options: ["JSON.parse()", "JSON.stringify()", "toJSON()", "convert()"],
    answer: 1
  },
  {
    question: "Which function delays execution?",
    options: ["setTimeout()", "delay()", "wait()", "pause()"],
    answer: 0
  },
  {
    question: "Which function repeats execution?",
    options: ["setInterval()", "repeat()", "loop()", "timer()"],
    answer: 0
  },
  {
    question: "Which DOM method selects all elements?",
    options: ["querySelector()", "getElement()", "querySelectorAll()", "selectAll()"],
    answer: 2
  },
  {
    question: "Which property changes HTML content?",
    options: ["innerHTML", "textContent", "value", "All of these"],
    answer: 3
  },
  {
    question: "Which event triggers on page load?",
    options: ["onload", "onstart", "onready", "onopen"],
    answer: 0
  },
  {
    question: "Which keyword defines block-scoped variable?",
    options: ["var", "let", "const", "Both let and const"],
    answer: 3
  },

  // Mixed frontend
  {
    question: "Which CSS property is used for grid layout?",
    options: ["display", "grid", "flex", "layout"],
    answer: 0
  },
  {
    question: "Which value enables grid layout?",
    options: ["grid", "flex", "block", "inline"],
    answer: 0
  },
  {
    question: "Which tag is used for navigation links?",
    options: ["<nav>", "<menu>", "<links>", "<ul>"],
    answer: 0
  },
  {
    question: "Which tag is used for footer?",
    options: ["<footer>", "<bottom>", "<end>", "<foot>"],
    answer: 0
  },
  {
    question: "Which tag is used for header?",
    options: ["<header>", "<head>", "<top>", "<title>"],
    answer: 0
  },
  {
    question: "Which CSS property controls position?",
    options: ["position", "align", "display", "float"],
    answer: 0
  },
  {
    question: "Which value fixes element on screen?",
    options: ["absolute", "relative", "fixed", "static"],
    answer: 2
  },
  {
    question: "Which property controls stacking order?",
    options: ["z-index", "index", "order", "stack"],
    answer: 0
  },
  {
    question: "Which HTML tag is used for video?",
    options: ["<video>", "<media>", "<movie>", "<play>"],
    answer: 0
  },
  {
    question: "Which tag is used for audio?",
    options: ["<audio>", "<sound>", "<music>", "<media>"],
    answer: 0
  },
  {
    question: "Which HTML tag is used to embed external JavaScript?",
    options: ["<js>", "<script>", "<javascript>", "<code>"],
    answer: 1
  },
  {
    question: "Which attribute is used to open a link in a new tab?",
    options: ["target", "new", "open", "blank"],
    answer: 0
  },
  {
    question: "Which value of target opens link in new tab?",
    options: ["_self", "_parent", "_top", "_blank"],
    answer: 3
  },
  {
    question: "Which CSS property is used to change cursor style?",
    options: ["pointer", "cursor", "mouse", "hover"],
    answer: 1
  },
  {
    question: "Which CSS property controls element visibility?",
    options: ["display", "opacity", "visibility", "show"],
    answer: 2
  },
  {
    question: "Which JavaScript method is used to remove an element?",
    options: ["delete()", "remove()", "pop()", "shift()"],
    answer: 1
  },
  {
    question: "Which JavaScript method adds event listener?",
    options: ["addEvent()", "attachEvent()", "addEventListener()", "listenEvent()"],
    answer: 2
  },
  {
    question: "Which operator is used for multiplication?",
    options: ["*", "x", "+", "%"],
    answer: 0
  },
  {
    question: "Which JavaScript keyword is used to return a value from function?",
    options: ["return", "give", "output", "result"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const progressEl = document.getElementById("progress");

function loadQuestion() {
  answered = false;
  feedbackEl.textContent = "";
  nextBtn.style.display = "none";

  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  progressEl.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;

  optionsEl.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;

    btn.onclick = () => selectAnswer(btn, index);

    optionsEl.appendChild(btn);
  });
}

function selectAnswer(button, index) {
  if (answered) return;
  answered = true;

  const correctIndex = questions[currentQuestion].answer;
  const buttons = optionsEl.querySelectorAll("button");

  buttons.forEach((btn, i) => {
    if (i === correctIndex) {
      btn.classList.add("correct");
    } else if (i === index) {
      btn.classList.add("wrong");
    }
  });

  if (index === correctIndex) {
    feedbackEl.textContent = "Correct! 🎉";
    score++;
  } else {
    feedbackEl.textContent = "Incorrect! ❌";
  }

  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  document.getElementById("score").textContent =
    `You scored ${score} out of ${questions.length}`;

  let performanceText = "";

  let percentage = (score / questions.length) * 100;

  if (percentage >= 80) {
    performanceText = "Excellent performance! 🔥";
  } else if (percentage >= 50) {
    performanceText = "Good job! 👍";
  } else {
    performanceText = "Keep practicing 💪";
  }

  document.getElementById("performance").textContent = performanceText;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;

  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("result").classList.add("hidden");

  loadQuestion();
}

// Start quiz
loadQuestion();