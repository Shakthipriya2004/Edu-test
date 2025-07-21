
    const questions = [
      { q: "What is JavaScript?", a: "JavaScript is a programming language used for web development." }, 
      { q: "What is CSS?", a: "CSS is used to style HTML content." },
      { q: "What is HTML?", a: "HTML is the structure of web pages." },
      { q: "What is React?", a: "React is a JavaScript library for building user interfaces." },
      { q: "What is an API?", a: "API stands for Application Programming Interface." },
      { q: "What is a variable?", a: "A container to store values in programming." },
      { q: "What is DOM?", a: "DOM is Document Object Model used to interact with HTML via JS." },
      { q: "What is a function?", a: "A reusable block of code to perform a task." },
      { q: "What is a loop?", a: "A sequence of instructions that is executed repeatedly." },
      { q: "What is a conditional statement?", a: "A statement that controls the flow of a program based on a condition." },
      { q: "What is a closure?", a: "A function that has access to variables in its outer scope, even after it has finished executing." },
      { q: "What is console.log?", a: "A method used to display information in the console of a web page."},
      { q: "What is JSON?", a: "JSON is a text-based format for storing and transporting data."},
      { q: "What is a promise?", a: "A JavaScript object that represents the eventual completion or failure of an asynchronous operation."},
      { q:"What is const in js?", a:"const is a keyword used to declare a constant variable in JavaScript."},
      { q:"What is append?", a:"The append method is used to add new elements to the end of the list."},
      { q:"What is render?", a:"The render method is used to update the UI based on the state of the component."}
    ];

    let viewMode = 'full';
    let visibleCount = 5;

    function renderQuestions() {
      const container = document.getElementById('questionContainer');
      container.innerHTML = '';
      const searchValue = document.querySelector('.search-bar').value.toLowerCase();
      const filtered = questions.filter(q => q.q.toLowerCase().includes(searchValue) || q.a.toLowerCase().includes(searchValue));
      filtered.slice(0, visibleCount).forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `question ${viewMode === 'full' ? 'full-view show-answer' : ''}`;
        div.innerHTML = `
          <label>
            <input type="checkbox" class="qCheck">
            <span class="qText">${item.q}</span>
          </label>
          <div class="answer">${item.a}</div>
        `;
        div.addEventListener('dblclick', () => {
          div.classList.toggle('show-answer');
        });
        container.appendChild(div);
      });
    }

    function filterQuestions() {
      renderQuestions();
    }

    function setViewMode(mode) {
      viewMode = mode;
      document.getElementById('fullBtn').classList.toggle('active', mode === 'full');
      document.getElementById('viewBtn').classList.toggle('active', mode === 'question');
      renderQuestions();
    }

    function selectAllQuestions(checkbox) {
      document.querySelectorAll('.qCheck').forEach(cb => cb.checked = checkbox.checked);
    }

  let isExpanded = false;

function toggleLoad() {
  isExpanded = !isExpanded;
  visibleCount = isExpanded ? questions.length : 5;
  renderQuestions();
}

  setViewMode('question');
