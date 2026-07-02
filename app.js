/* 퀴즈 페이지 로직 */

function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

const passageId = parseInt(getParam("passage"), 10);
const passage = passages.find((p) => p.id === passageId);

const form = document.getElementById("quiz-form");
const titleEl = document.getElementById("quiz-title");
const subtitleEl = document.getElementById("quiz-subtitle");
const passageTextEl = document.getElementById("passage-text");
const submitBtn = document.getElementById("submit-btn");
const retryBtn = document.getElementById("retry-btn");
const resultEl = document.getElementById("result");

if (!passage) {
  titleEl.textContent = "본문을 찾을 수 없어요";
  form.innerHTML = '<p class="sub">메인으로 돌아가 본문을 선택해주세요.</p>';
  submitBtn.style.display = "none";
} else {
  render();
}

function render() {
  titleEl.textContent = passage.title + " 퀴즈";
  subtitleEl.textContent = passage.subtitle;

  passageTextEl.innerHTML = passage.text
    .map((line) => `<p>${line}</p>`)
    .join("");

  passage.questions.forEach((q, i) => {
    const block = document.createElement("div");
    block.className = "question";
    block.dataset.index = i;

    const num = `<span class="qnum">Q${i + 1}</span>`;
    const tag =
      q.type === "blank"
        ? '<span class="qtag blank">빈칸</span>'
        : '<span class="qtag content">내용</span>';

    const prompt = q.type === "blank" ? q.sentence : q.question;
    const choices = q.choices
      .map(
        (c, ci) => `
      <label class="choice">
        <input type="radio" name="q${i}" value="${ci}" />
        <span>${c}</span>
      </label>`
      )
      .join("");

    block.innerHTML = `
      <div class="qhead">${num}${tag}</div>
      <p class="qtext">${prompt}</p>
      <div class="choices">${choices}</div>
      <p class="feedback"></p>
    `;

    form.appendChild(block);
  });

  // 답을 선택하면 자동으로 다음 문제로 스크롤
  const allBlocks = form.querySelectorAll(".question");
  allBlocks.forEach((block, idx) => {
    block.querySelectorAll('input[type="radio"]').forEach((radio) => {
      radio.addEventListener("change", () => {
        const next = allBlocks[idx + 1];
        const target = next || document.querySelector(".actions");
        // 선택 표시가 보인 뒤 부드럽게 이동
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 180);
      });
    });
  });
}

submitBtn.addEventListener("click", grade);
retryBtn.addEventListener("click", () => location.reload());

function grade() {
  let correct = 0;
  const blocks = form.querySelectorAll(".question");

  blocks.forEach((block) => {
    const i = parseInt(block.dataset.index, 10);
    const q = passage.questions[i];
    const feedback = block.querySelector(".feedback");
    let isCorrect = false;
    let correctText = "";

    const checked = block.querySelector('input[type="radio"]:checked');
    isCorrect = checked && parseInt(checked.value, 10) === q.answerIndex;
    correctText = q.choices[q.answerIndex];
    block.querySelectorAll('input[type="radio"]').forEach((r) => (r.disabled = true));

    if (isCorrect) {
      correct++;
      block.classList.add("correct");
      block.classList.remove("wrong");
      feedback.innerHTML = "✅ 정답!";
    } else {
      block.classList.add("wrong");
      block.classList.remove("correct");
      feedback.innerHTML = `❌ 정답: <b>${correctText}</b>` +
        (q.explain ? `<br><span class="explain">${q.explain}</span>` : "");
    }
  });

  const total = passage.questions.length;
  const pct = Math.round((correct / total) * 100);
  resultEl.style.display = "block";
  resultEl.innerHTML = `
    <h2>점수: ${correct} / ${total} (${pct}점)</h2>
    <div class="bar"><div class="bar-fill" style="width:${pct}%"></div></div>
    <p>${pct === 100 ? "완벽해요! 🎉" : pct >= 70 ? "잘했어요! 👍" : "다시 한 번 복습해봐요. 💪"}</p>
  `;
  resultEl.scrollIntoView({ behavior: "smooth" });

  submitBtn.style.display = "none";
  retryBtn.style.display = "inline-block";
}
