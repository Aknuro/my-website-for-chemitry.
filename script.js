// Данные по темам: теория, видео, дополнительные картинки для теории
const topicsData = {
  proteins: {
    title: "Белки",
    theory: `
      <p class="theory-text">Что такое белки?
Белки — это крупные биополимеры, состоящие из аминокислот, связанных пептидными связями. Они являются основными строительными и функциональными молекулами живых организмов.

Структура белков:

Первичная структура — последовательность аминокислот в полипептидной цепи.

Вторичная структура — локальное упорядочение цепи (α-спираль, β-слой).

Третичная структура — трехмерная форма белка, сложное сворачивание.

Четвертичная структура — объединение нескольких полипептидных цепей.

Функции белков:

Катализ реакций (ферменты)

Транспорт веществ (гемоглобин)

Структурная (коллаген)

Защитная (антитела)

Регуляторная (гормоны)

</p>
      <div class="theory-images-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHAoQy3JfM-s347cTYS4d-ViEHCSd-gR1Cfg&s" alt="Структура белка" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Alpha_helix_neg60_neg45_sideview.png" alt="Альфа-спираль" />
      </div>
    `,
    video: `<iframe src="https://www.youtube.com/embed/YVtPQoXX88M?si=A9HZ-mJbebu26YVV" title="Видео о белках" frameborder="0" allowfullscreen></iframe>`
  },
  equilibrium: {
    title: "Химическое равновесие",
    theory: `
      <p class="theory-text">Что такое химическое равновесие?
Это состояние системы, в котором скорости прямой и обратной реакций равны, и концентрации веществ остаются постоянными.

Принцип Ле Шателье:
Если на систему в равновесии воздействовать изменением температуры, давления или концентрации, равновесие сместится в сторону, компенсирующую это изменение.


Константа равновесия (K):
𝐾
=
[
продукты
]
𝑚
[
реагенты
]
𝑛
K= 
[реагенты] 
n
 
[продукты] 
m
 
​
 , где степени — стехиометрические коэффициенты.

𝐾
>
1
K>1 — равновесие смещено к продуктам.

𝐾
<
1
K<1 — равновесие смещено к реагентам.</p>
      <div class="theory-images-container">
        <img src="https://lh6.googleusercontent.com/proxy/pqWBFU8bc4m_IHX7BXyhVYe-QnJ7RzFjf07kcwNGKgj4KQPkyNro0EuToZB9Xhu3lfDDEA" alt="Химическое равновесие" />
        <img src="https://cloudfront.jove.com/files/media/science-education/science-education-thumbs/11392.jpg" alt="Принцип Ле Шателье" />
      </div>
    `,
    video: `<iframe src="https://www.youtube.com/embed/d8p5wBNVUm4?si=6pQf7w8Jj42IMMBf" title="Видео о химическом равновесии" frameborder="0" allowfullscreen></iframe>`
  },
  redox: {
    title: "Окислительно-восстановительные реакции",
    theory: `
      <p class="theory-text">Что такое ОВР?
Реакции, при которых происходит перенос электронов между веществами: одно вещество теряет электроны (окисляется), другое — принимает (восстанавливается).

Окислитель и восстановитель:

Окислитель — принимает электроны.

Восстановитель — отдаёт электроны.


Пример реакции:
Z
n
+
C
u
2
+
→
Z
n
2
+
+
C
u
Zn+Cu 
2+
 →Zn 
2+
 +Cu

Zn окисляется (теряет 2e⁻)

Cu^{2+} восстанавливается (принимает 2e⁻)


Применение:

Биоэнергетика (дыхание клеток)


Металлургия


Коррозия </p>
      <div class="theory-images-container">
        <img src="https://lh5.googleusercontent.com/Goy78PZmdGwBqhsIydqSWoWTBoidMJBI-Tfu08deAJ0v8R1xNGAGizcxgxIgcMht0VrxS3qDWAcuOSNT89KEFJAJHYG3aI1TR5l1MobNa2WZjHCmADqCAX3ydylG_srMZSfqqVsuUrbCt53Dj5xjOMQ" alt="ОВР" />
        <img src="https://s3.studwork.ru/reference_page/galvanicheskie-elementy-e9c7c80440157d450e3aee97827d34fc.png" alt="Электрохимический элемент" />
      </div>
    `,
    video: `<iframe src="https://www.youtube.com/embed/_BpW31pcuOo?si=jhxfeac-5D7EI2vw" title="Видео об окислительно-восстановительных реакциях" frameborder="0" allowfullscreen></iframe>`
  }
};

const homePage = document.getElementById("home-page");
const topicPage = document.getElementById("topic-page");
const topicTitle = document.getElementById("topic-title");
const tabTheory = document.getElementById("tab-theory");
const tabVideo = document.getElementById("tab-video");
const tabChat = document.getElementById("tab-chat");
const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
const chatSendBtn = document.getElementById("chat-send-btn");
const btnBackHome = document.getElementById("btn-back-home");
const topicTabs = document.querySelectorAll(".topic-tab-btn");

let currentTopic = null;

// Показать страницу темы с данными
function openTopic(topicKey) {
  currentTopic = topicKey;
  topicTitle.textContent = topicsData[topicKey].title;
  tabTheory.innerHTML = topicsData[topicKey].theory;
  tabVideo.innerHTML = topicsData[topicKey].video;
  chatMessages.innerHTML = '';
  chatInput.value = '';

  // Переключаем вкладки на "Теория"
  setActiveTab('tab-theory');

  homePage.classList.add("hidden");
  topicPage.classList.remove("hidden");
}

// Возврат на главную страницу
btnBackHome.addEventListener("click", () => {
  homePage.classList.remove("hidden");
  topicPage.classList.add("hidden");
  currentTopic = null;
});

// Обработчик кнопок "Перейти" на главной странице
document.querySelectorAll(".btn-open-topic").forEach(btn => {
  btn.addEventListener("click", () => {
    const topicKey = btn.closest(".topic-card").dataset.topic;
    openTopic(topicKey);
  });
});

// Обработчик переключения вкладок темы
topicTabs.forEach(tabBtn => {
  tabBtn.addEventListener("click", () => {
    setActiveTab(tabBtn.dataset.tab);
  });
});

function setActiveTab(tabId) {
  topicTabs.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });

  tabTheory.classList.toggle("active", tabId === "tab-theory");
  tabVideo.classList.toggle("active", tabId === "tab-video");
  tabChat.classList.toggle("active", tabId === "tab-chat");
}

// Логика чат-бота: простой ответ по ключевым словам
function getChatBotAnswer(message, topic) {
  const msg = message.toLowerCase();

  if (!topic) return "Пожалуйста, выберите тему.";

  if (topic === "proteins") {
    if (msg.includes("что такое белки")) return "Белки — это макромолекулы, состоящие из аминокислот, важные для строения и функций клеток.";
    if (msg.includes("функции")) return "Белки выполняют структурные, ферментативные, транспортные и защитные функции.";
  }

  if (topic === "equilibrium") {
    if (msg.includes("равновесие")) return "Химическое равновесие — состояние, когда скорость прямой и обратной реакций равны.";
    if (msg.includes("принцип ле шателье")) return "Принцип Ле Шателье говорит, что система смещается в сторону устранения изменения.";
  }

  if (topic === "redox") {
    if (msg.includes("окисление")) return "Окисление — процесс потери электронов.";
    if (msg.includes("восстановление")) return "Восстановление — процесс приобретения электронов.";
  }

  return "Извините, я не могу ответить на этот вопрос. Попробуйте переформулировать.";
}

// Отправка сообщений чата
chatSendBtn.addEventListener("click", () => {
  const message = chatInput.value.trim();
  if (message === "") return;

  const userMessageElem = document.createElement("div");
  userMessageElem.classList.add("chat-message", "user-message");
  userMessageElem.textContent = message;
  chatMessages.appendChild(userMessageElem);

  // Задержка для имитации "думания" бота
  setTimeout(() => {
    const botAnswer = getChatBotAnswer(message, currentTopic);
    const botMessageElem = document.createElement("div");
    botMessageElem.classList.add("chat-message", "bot-message");
    botMessageElem.textContent = botAnswer;
    chatMessages.appendChild(botMessageElem);

    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 500);

  chatInput.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Отправка по Enter
chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    chatSendBtn.click();
  }
});
