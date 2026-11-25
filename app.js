(function () {
  "use strict";

  const LETTERS = ["a", "b", "c", "d"];

  const state = {
    mode: null, // "full100" | "random20" | "mistakes"
    instantFeedback: false,
    shuffleFull100: false,
    activeQuestions: [],
    answers: {}, // { questionId: optionIndex }
    submitted: false,
    reviewFilter: "all" // "all" | "wrong" | "correct"
  };

  // DOM Elements
  const viewMenu = document.getElementById("view-menu");
  const viewQuiz = document.getElementById("view-quiz");
  const viewResults = document.getElementById("view-results");

  const btnStart100 = document.getElementById("btn-start-100");
  const btnStart20 = document.getElementById("btn-start-20");
  const toggleInstant = document.getElementById("toggle-instant");
  const toggleShuffle100 = document.getElementById("toggle-shuffle-100");

  const toolbarModeLabel = document.getElementById("toolbar-mode-label");
  const toolbarCountPill = document.getElementById("toolbar-count-pill");
  const progressFill = document.getElementById("progress-fill");
  const blockJumps = document.getElementById("block-jumps");
  const btnBackMenu = document.getElementById("btn-back-menu");
  const btnJumpBlank = document.getElementById("btn-jump-blank");

  const quizForm = document.getElementById("quiz-form");
  const submitHint = document.getElementById("submit-hint");
  const btnSubmitForm = document.getElementById("btn-submit-form");

  const modalConfirm = document.getElementById("modal-confirm");
  const modalUnansweredText = document.getElementById("modal-unanswered-text");
  const btnModalGoBlank = document.getElementById("btn-modal-go-blank");
  const btnModalSubmitAnyway = document.getElementById("btn-modal-submit-anyway");

  const gradeBadge = document.getElementById("grade-badge");
  const gradeScoreBig = document.getElementById("grade-score-big");
  const gradeScoreSub = document.getElementById("grade-score-sub");
  const statCorrect = document.getElementById("stat-correct");
  const statWrong = document.getElementById("stat-wrong");
  const statPercent = document.getElementById("stat-percent");

  const btnRetryMistakes = document.getElementById("btn-retry-mistakes");
  const btnNewRandom20 = document.getElementById("btn-new-random-20");
  const btnRetryFull100 = document.getElementById("btn-retry-full-100");
  const btnResultsMenu = document.getElementById("btn-results-menu");

  const filterTabs = document.querySelectorAll(".filter-tab");
  const reviewList = document.getElementById("review-list");

  // Fisher-Yates shuffle
  function shuffleArray(items) {
    const copy = items.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function showView(name) {
    viewMenu.classList.toggle("hidden", name !== "menu");
    viewQuiz.classList.toggle("hidden", name !== "quiz");
    viewResults.classList.toggle("hidden", name !== "results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startQuiz(mode, customQuestions) {
    state.mode = mode;
    state.instantFeedback = toggleInstant.checked;
    state.shuffleFull100 = toggleShuffle100.checked;
    state.answers = {};
    state.submitted = false;
    state.reviewFilter = "all";

    const bank = window.QUIZ_QUESTIONS;

    if (mode === "full100") {
      state.activeQuestions = state.shuffleFull100 ? shuffleArray(bank) : bank.slice();
      toolbarModeLabel.textContent = "Taza Grande · 100 Preguntas";
    } else if (mode === "random20") {
      state.activeQuestions = shuffleArray(bank).slice(0, 20);
      toolbarModeLabel.textContent = "Espresso Express · 20 Random";
    } else if (mode === "mistakes" && Array.isArray(customQuestions)) {
      state.activeQuestions = customQuestions.slice();
      toolbarModeLabel.textContent = `Repaso de Errores · ${customQuestions.length} Preguntas`;
    }

    renderBlockJumps();
    renderQuizForm();
    updateProgressUI();
    showView("quiz");
  }

  function renderBlockJumps() {
    blockJumps.innerHTML = "";
    if (state.mode !== "full100" || state.shuffleFull100) {
      return;
    }

    const blocks = [1, 2, 3, 4, 5];
    blocks.forEach((b) => {
      const firstIndex = state.activeQuestions.findIndex((q) => q.block === b);
      if (firstIndex === -1) return;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "jump-chip";
      btn.textContent = `Bloque ${b}`;
      btn.addEventListener("click", () => {
        const target = document.getElementById(`q-card-${state.activeQuestions[firstIndex].id}`);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });
      blockJumps.appendChild(btn);
    });
  }

  function buildQuestionCard(q, displayIndex, isReviewMode) {
    const card = document.createElement("article");
    card.className = "question-card";
    card.id = isReviewMode ? `rev-card-${q.id}` : `q-card-${q.id}`;

    const userAnswer = state.answers[q.id];
    const hasAnswered = typeof userAnswer === "number";
    const isCorrect = hasAnswered && userAnswer === q.correct;

    if (isReviewMode || (state.instantFeedback && hasAnswered)) {
      card.classList.add(isCorrect ? "is-correct" : "is-wrong");
    } else if (hasAnswered) {
      card.classList.add("is-answered");
    }

    // Header
    const header = document.createElement("div");
    header.className = "q-header";

    const badges = document.createElement("div");
    badges.className = "q-badges";

    const numSpan = document.createElement("span");
    numSpan.className = "q-num";
    numSpan.textContent = `Pregunta ${displayIndex + 1}`;
    badges.appendChild(numSpan);

    if (state.mode !== "full100" || state.shuffleFull100) {
      const origSpan = document.createElement("span");
      origSpan.className = "q-orig";
      origSpan.textContent = `#${q.id} del balotario`;
      badges.appendChild(origSpan);
    }

    const catSpan = document.createElement("span");
    catSpan.className = "q-cat";
    catSpan.textContent = `Bloque ${q.block} · ${q.category}`;
    badges.appendChild(catSpan);

    header.appendChild(badges);

    if (isReviewMode || (state.instantFeedback && hasAnswered)) {
      const statusTag = document.createElement("span");
      if (!hasAnswered) {
        statusTag.className = "q-status-tag q-status-tag--blank";
        statusTag.textContent = "Sin responder";
      } else if (isCorrect) {
        statusTag.className = "q-status-tag q-status-tag--ok";
        statusTag.textContent = "✓ Correcta";
      } else {
        statusTag.className = "q-status-tag q-status-tag--bad";
        statusTag.textContent = "✕ Incorrecta";
      }
      header.appendChild(statusTag);
    }

    card.appendChild(header);

    // Context Passage if any
    if (q.contextId && window.QUIZ_CONTEXTS[q.contextId]) {
      const ctx = window.QUIZ_CONTEXTS[q.contextId];
      const ctxBox = document.createElement("div");
      ctxBox.className = "context-box";

      const ctxTitle = document.createElement("div");
      ctxTitle.className = "context-title";
      ctxTitle.textContent = ctx.title;

      const ctxText = document.createElement("p");
      ctxText.className = "context-text";
      ctxText.textContent = ctx.text;

      ctxBox.appendChild(ctxTitle);
      ctxBox.appendChild(ctxText);
      card.appendChild(ctxBox);
    }

    // Question prompt
    const prompt = document.createElement("p");
    prompt.className = "q-prompt";
    prompt.textContent = q.question;
    card.appendChild(prompt);

    // Options
    const optionsList = document.createElement("div");
    optionsList.className = "options-list";

    const locked = isReviewMode || (state.instantFeedback && hasAnswered);

    q.options.forEach((optText, optIndex) => {
      const label = document.createElement("label");
      label.className = "option-label";

      const isUserChoice = hasAnswered && userAnswer === optIndex;
      const isRightOption = optIndex === q.correct;

      if (locked) {
        label.classList.add("is-locked");
        if (isRightOption) {
          label.classList.add("is-correct-choice");
        } else if (isUserChoice && !isRightOption) {
          label.classList.add("is-wrong-choice");
        }
      } else if (isUserChoice) {
        label.classList.add("is-selected");
      }

      const input = document.createElement("input");
      input.type = "radio";
      input.name = isReviewMode ? `rev-q-${q.id}` : `q-${q.id}`;
      input.value = String(optIndex);
      input.checked = isUserChoice;
      input.disabled = locked;

      if (!locked) {
        input.addEventListener("change", () => {
          state.answers[q.id] = optIndex;
          card.classList.remove("is-unanswered-highlight");
          updateCardInPlace(card, q, displayIndex);
          updateProgressUI();
        });
      }

      const dot = document.createElement("span");
      dot.className = "option-radio-dot";

      const letter = document.createElement("span");
      letter.className = "option-letter";
      letter.textContent = `${LETTERS[optIndex]})`;

      const textSpan = document.createElement("span");
      textSpan.className = "option-text";
      textSpan.textContent = optText;

      label.appendChild(input);
      label.appendChild(dot);
      label.appendChild(letter);
      label.appendChild(textSpan);
      optionsList.appendChild(label);
    });

    card.appendChild(optionsList);

    // Explanation box (shown in review mode or instant feedback after answering)
    if (isReviewMode || (state.instantFeedback && hasAnswered)) {
      const exp = document.createElement("div");
      exp.className = "explanation-box";
      exp.innerHTML = `<strong>Truco / Explicación:</strong> `;
      const expText = document.createTextNode(q.explanation);
      exp.appendChild(expText);
      card.appendChild(exp);
    }

    return card;
  }

  function updateCardInPlace(oldCard, q, displayIndex) {
    const newCard = buildQuestionCard(q, displayIndex, false);
    oldCard.replaceWith(newCard);
  }

  function renderQuizForm() {
    quizForm.innerHTML = "";
    state.activeQuestions.forEach((q, idx) => {
      const card = buildQuestionCard(q, idx, false);
      quizForm.appendChild(card);
    });
  }

  function updateProgressUI() {
    const total = state.activeQuestions.length;
    const answered = state.activeQuestions.filter(
      (q) => typeof state.answers[q.id] === "number"
    ).length;
    const remaining = total - answered;
    const pct = total > 0 ? Math.round((answered / total) * 100) : 0;

    toolbarCountPill.textContent = `${answered} / ${total}`;
    progressFill.style.width = `${pct}%`;

    if (remaining === 0) {
      submitHint.innerHTML = `<strong>¡Formulario completo!</strong> Listo para calificar tus ${total} respuestas.`;
      btnJumpBlank.classList.add("hidden");
    } else {
      submitHint.innerHTML = `Faltan <strong>${remaining}</strong> ${remaining === 1 ? "pregunta" : "preguntas"} por responder.`;
      btnJumpBlank.classList.remove("hidden");
    }
  }

  function scrollToFirstBlank() {
    const firstBlank = state.activeQuestions.find(
      (q) => typeof state.answers[q.id] !== "number"
    );
    if (!firstBlank) return;
    const card = document.getElementById(`q-card-${firstBlank.id}`);
    if (card) {
      card.classList.add("is-unanswered-highlight");
      card.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  function handleTrySubmit() {
    const total = state.activeQuestions.length;
    const answered = state.activeQuestions.filter(
      (q) => typeof state.answers[q.id] === "number"
    ).length;
    const remaining = total - answered;

    if (remaining > 0) {
      modalUnansweredText.textContent = `Todavía tienes ${remaining} ${
        remaining === 1 ? "pregunta sin responder" : "preguntas sin responder"
      }. Las preguntas en blanco contarán como incorrectas al calcular tu nota.`;
      modalConfirm.classList.remove("hidden");
    } else {
      finalizeResults();
    }
  }

  function finalizeResults() {
    modalConfirm.classList.add("hidden");
    state.submitted = true;

    const total = state.activeQuestions.length;
    let correctCount = 0;
    let wrongCount = 0;
    let blankCount = 0;

    state.activeQuestions.forEach((q) => {
      const ans = state.answers[q.id];
      if (typeof ans !== "number") {
        blankCount++;
        wrongCount++;
      } else if (ans === q.correct) {
        correctCount++;
      } else {
        wrongCount++;
      }
    });

    const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const grade20 = total > 0 ? (correctCount / total) * 20 : 0;
    const gradeFormatted = Number.isInteger(grade20) ? `${grade20}` : grade20.toFixed(1);

    gradeScoreBig.textContent = `${gradeFormatted} / 20`;
    gradeScoreSub.textContent =
      blankCount > 0
        ? `Acertaste ${correctCount} de ${total} preguntas (${blankCount} sin responder)`
        : `Acertaste ${correctCount} de ${total} preguntas`;

    statCorrect.textContent = String(correctCount);
    statWrong.textContent = String(wrongCount);
    statPercent.textContent = `${pct}%`;

    // Café Rank Badge
    gradeBadge.className = "grade-badge";
    if (grade20 >= 16) {
      gradeBadge.classList.add("grade-badge--pass");
      gradeBadge.textContent = "★ Barista Maestro · ¡Excelente!";
    } else if (grade20 >= 13) {
      gradeBadge.classList.add("grade-badge--pass");
      gradeBadge.textContent = "✓ Aprobado · Buen Tueste";
    } else if (grade20 >= 11) {
      gradeBadge.classList.add("grade-badge--mid");
      gradeBadge.textContent = "☕ Raspando · Repasa un poco más";
    } else {
      gradeBadge.classList.add("grade-badge--fail");
      gradeBadge.textContent = "☕ Necesita otro Espresso · Sigue practicando";
    }

    // Show/hide "Practicar solo las que fallé"
    btnRetryMistakes.classList.toggle("hidden", wrongCount === 0);

    // Default review filter: show wrong first if there are errors, or all
    state.reviewFilter = "all";
    updateFilterTabsUI();
    renderReviewList();
    showView("results");
  }

  function updateFilterTabsUI() {
    filterTabs.forEach((tab) => {
      tab.classList.toggle("is-active", tab.dataset.filter === state.reviewFilter);
    });
  }

  function renderReviewList() {
    reviewList.innerHTML = "";

    const filtered = state.activeQuestions
      .map((q, idx) => ({ q, idx }))
      .filter(({ q }) => {
        const ans = state.answers[q.id];
        const isCorrect = typeof ans === "number" && ans === q.correct;
        if (state.reviewFilter === "correct") return isCorrect;
        if (state.reviewFilter === "wrong") return !isCorrect;
        return true;
      });

    if (filtered.length === 0) {
      const empty = document.createElement("div");
      empty.className = "menu-card";
      empty.style.textAlign = "center";
      empty.innerHTML = `<p style="margin:0;color:var(--muted-bean);">No hay preguntas en esta categoría.</p>`;
      reviewList.appendChild(empty);
      return;
    }

    filtered.forEach(({ q, idx }) => {
      const card = buildQuestionCard(q, idx, true);
      reviewList.appendChild(card);
    });
  }

  // Event Listeners
  btnStart100.addEventListener("click", () => startQuiz("full100"));
  btnStart20.addEventListener("click", () => startQuiz("random20"));

  btnBackMenu.addEventListener("click", () => showView("menu"));
  btnResultsMenu.addEventListener("click", () => showView("menu"));

  btnJumpBlank.addEventListener("click", scrollToFirstBlank);
  btnSubmitForm.addEventListener("click", handleTrySubmit);

  btnModalGoBlank.addEventListener("click", () => {
    modalConfirm.classList.add("hidden");
    scrollToFirstBlank();
  });
  btnModalSubmitAnyway.addEventListener("click", finalizeResults);

  modalConfirm.addEventListener("click", (e) => {
    if (e.target === modalConfirm) {
      modalConfirm.classList.add("hidden");
    }
  });

  btnNewRandom20.addEventListener("click", () => startQuiz("random20"));
  btnRetryFull100.addEventListener("click", () => startQuiz("full100"));

  btnRetryMistakes.addEventListener("click", () => {
    const wrongQuestions = state.activeQuestions.filter((q) => {
      const ans = state.answers[q.id];
      return typeof ans !== "number" || ans !== q.correct;
    });
    if (wrongQuestions.length > 0) {
      startQuiz("mistakes", wrongQuestions);
    }
  });

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      state.reviewFilter = tab.dataset.filter;
      updateFilterTabsUI();
      renderReviewList();
    });
  });
})();
