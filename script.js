const TRANSLATIONS = {
  ar: {
    code: "ar-EG",
    dir: "rtl",
    meta: {
      title: "عشانك - دايمًا"
    },
    controls: {
      musicPlay: "شغل الموسيقى",
      musicPlaying: "الموسيقى شغالة",
      musicMissing: "ضيف music.mp3"
    },
    intro: {
      lineTop: "رسالة كنت خايف اكتبها",
      typewriter: "قبل ما تمشي...\nاديني دقيقة واحدة.",
      start: "ابدأ",
      scrollHint: "انزل او اضغط عشان تبدأ"
    },
    hero: {
      pretext: "في كلام كان لازم اقوله من بدري.",
      title: "الدنيا <em>احلى</em><br>وانت فيها.",
      sub: "مش بس دنيتي انا.<br />الهوا بيبقى غير. والنور بيبقى غير.<br /><em>كل حاجة</em> بتتغير اول ما تكون هنا.",
      continue: "كمّل ↓"
    },
    flowers: {
      pre: "قطفت دول عشانك،",
      hint: "المس الورد",
      message: "كل مرة كنت بشوف فيها حاجة حلوة، اول حد بييجي في بالي كان انت.",
      continue: "ذكرياتنا ↓"
    },
    memories: {
      label: "لحظات عمري ما هنساها",
      title: "ذكرياتنا",
      subtitle: "كل واحدة فيهم عايشة جوايا. على طول.",
      continue: "رسايل حب ↓",
      items: [
        {
          img: "assets/images/memory1.jpg",
          date: "اول مرة",
          title: "لما كل حاجة اتغيرت",
          caption: "ماكنتش اعرف ان اليوم ده هيبقى احب ذكرى لقلبي.",
          msg: "لسه فاكر كنا واقفين فين، وفاكر احساس اللحظة دي كويس قوي. كان في حاجة جوايا بتقولي: هي دي اللحظة اللي هفضل ماسك فيها. ومن يومها وهي الذكرى اللي برجع لها كل ما الدنيا تعلى علي.",
          alt: "اول مرة لما كل حاجة اتغيرت"
        },
        {
          img: "assets/images/memory2.jpg",
          date: "بعد ضهر هادي",
          title: "انا وانت وبس",
          caption: "لا دوشة ولا دنيا. بس احنا وضحكتك اللي مالية المكان.",
          msg: "ماكانش في خطط كبيرة ولا اي حاجة استثنائية. بس كنت بتضحك على حاجة بسيطة، وانا وقتها فهمت اني نفسي افضل فاكر كل ضحكة منك... اللي تيجي فجأة، واللي تيجي بعد يوم طويل، وحتى اللي بتحاول تخبيها.",
          alt: "بعد ضهر هادي انا وانت وبس"
        },
        {
          img: "assets/images/memory3.jpg",
          date: "ليلة لسه بعيشها",
          title: "رقصة من غير كلام",
          caption: "ماكنتش تعرف اني كنت بحفظك لحظة بلحظة.",
          msg: "في الليلة دي كنت بتتحرك بهدوء والنور كان واخدك في حتة تانية خالص. كنت عايز اقول كلام كتير، بس الخوف سبقني. ففضلت ساكت، ومتمسك باللحظة دي كأنها سر محدش غيري يعرفه.",
          alt: "ليلة لسه بعيشها رقصة من غير كلام"
        },
        {
          img: "assets/images/memory4.jpg",
          date: "قبل العاصفة",
          title: "لما فضلت ماسك فينا",
          caption: "كان سهل تمشي، بس اخترت تفضل.",
          msg: "كان عندك كل الحق تبعد. ومع كده فضلت. من غير استعراض، ومن غير كلام كبير. القرار ده معناه عندي اكتر مما اقدر اوصف. كان معناه كل حاجة، ولسه معناه كل حاجة لحد دلوقتي.",
          alt: "قبل العاصفة لما فضلت ماسك فينا"
        },
        {
          img: "assets/images/memory5.jpg",
          date: "تلات شتا عادي",
          title: "حاجات صغيرة وكاملة",
          caption: "كنت بتخلي اليوم العادي يبقى هدية.",
          msg: "انت كنت بتعرف ازاي تخلي يوم عادي جدا يبقى اغلى يوم في الدنيا. ودي موهبة نادرة قوي. لحظات بسيطة معاك كانت بتبقى اغلى من حاجات كتير كبيرة، ولو اقدر ارجع خمس دقايق بس منها، هعمل ده من غير تردد.",
          alt: "تلات شتا عادي حاجات صغيرة وكاملة"
        }
      ]
    },
    loveNotes: {
      title: "حاجات ماقلتهاش<br /><em>بصوت عالي</em>",
      hint: "اضغط على القلوب عشان تسمعها",
      continue: "الجواب ↓",
      notes: [
        { msg: "بفكر فيك حتى في اكتر اللحظات العادية.", sz: 55, color: "#ff8fab" },
        { msg: "ضحكتك احلى صوت انا اعرفه.", sz: 45, color: "#ffb3c1" },
        { msg: "خلتني عايز ابقى احسن من غير ما تطلب ده.", sz: 60, color: "#d44b72" },
        { msg: "باخد بالي من كل حاجة فيك. حتى اصغر تفصيلة.", sz: 40, color: "#ff8fab" },
        { msg: "انت احلى احتمال في حياتي لما بقى حقيقي.", sz: 52, color: "#ffb3c1" },
        { msg: "كنت خايف من كتر اللي بحسه. ولسه شوية.", sz: 48, color: "#d44b72" },
        { msg: "الدنيا احلى لمجرد انك فيها.", sz: 44, color: "#ff6b91" }
      ]
    },
    apology: {
      label: "اعتذاري. وحقيقتي.",
      title: "انا اسف.<br /><em>من قلبي.</em>",
      paragraphs: [
        "انا عارف ان كلمة اسف لوحدها مش كفاية.<br />وعارف ان الكلام ساعات بيبقى خفيف قدام الوجع الحقيقي.<br />بس محتاجك تعرف -",
        "انا عمري ما كنت عايز ابقى سبب دموعك.<br />وعمري ما كنت عايز اكون الحاجة اللي كسرت اللي بينا.<br />انا خفت، واتعاملت غلط،<br />وانت دفعت تمن خوفي.",
        "انت ما تستاهلش الشك.<br />وما تستاهلش السكوت وقت ما كنت محتاج كلام.<br />انت تستاهل احسن من كده بكتير. وتستاهل كل حاجة حلوة.",
        "انا مش بطلب منك تنسى.<br />انا بس بطلب منك تصدق اني <em>بحاول بجد</em>.<br />وان كل ذكرى شاركتها هنا حقيقية.<br />وانك اهم حد في دنيتي.",
        "- وانا ليك، دايمًا. ❤️"
      ],
      buttons: {
        forgive: "سامحني ❤️",
        notYet: "لسه مش دلوقتي 💔"
      },
      responses: {
        happy: "شكرًا ليك.<br/>ده كل اللي كنت محتاجه - فرصة اقول اللي جوايا.<br/>وهفضل كل يوم اشتغل على نفسي عشان عمرك ما تحتاج تسامحني على نفس الوجع تاني.<br/>انا بحبك. اكتر من اي كلام اعرف اقوله.<br/><br/>❤️ &nbsp; ❤️ &nbsp; ❤️",
        sad: "تمام.<br/>انا فاهم، بجد.<br/>هفضل موجود - من غير ضغط، ومن غير طلبات.<br/>بس موجود. لحد ما تبقى جاهز.<br/><em>انا مش رايح في حتة.</em>",
        takeTime: "خد وقتك"
      }
    }
  },
  en: {
    code: "en",
    dir: "ltr",
    meta: {
      title: "For You - Always"
    },
    controls: {
      musicPlay: "Play Music",
      musicPlaying: "Now Playing",
      musicMissing: "Add music.mp3"
    },
    intro: {
      lineTop: "a letter I was afraid to write",
      typewriter: "Before you leave...\ngive me one minute.",
      start: "Begin",
      scrollHint: "scroll or click to begin"
    },
    hero: {
      pretext: "There are things I should have said sooner.",
      title: "The world is <em>better</em><br>with you in it.",
      sub: "Not just my world.<br />The air is different. The light is different.<br /><em>Everything</em> is different when you're here.",
      continue: "Continue ↓"
    },
    flowers: {
      pre: "I picked these for you,",
      hint: "touch the flowers",
      message: "Every time I saw something beautiful, my first thought was always you.",
      continue: "Our Memories ↓"
    },
    memories: {
      label: "moments I'll never forget",
      title: "Our Memories",
      subtitle: "Every one of these lives in me. Always.",
      continue: "Love Notes ↓",
      items: [
        {
          img: "assets/images/memory1.jpg",
          date: "The first time",
          title: "When everything changed",
          caption: "I didn't know that day would become my favorite memory.",
          msg: "I still remember where we were standing. I remember what you were wearing. I remember thinking - this is the moment. This is the one I'll keep. That day became the bookmark inside me I return to whenever the world gets too loud.",
          alt: "The first time, when everything changed"
        },
        {
          img: "assets/images/memory2.jpg",
          date: "A quiet afternoon",
          title: "Just the two of us",
          caption: "No noise. No world. Just you, and how you laughed.",
          msg: "No plans. No noise. Just you laughing at something small and me realizing I wanted to collect every version of your laugh - the surprised one, the tired one, the one you try to hide. I wanted all of them.",
          alt: "A quiet afternoon, just the two of us"
        },
        {
          img: "assets/images/memory3.jpg",
          date: "A night I replay",
          title: "Dancing in silence",
          caption: "You didn't know I was memorizing you.",
          msg: "You didn't know I was memorizing you. The way you moved, the way the light caught you, the way you looked up for a second. I was terrified to say anything. So I just stayed. I held on to that night like a secret.",
          alt: "A night I replay, dancing in silence"
        },
        {
          img: "assets/images/memory4.jpg",
          date: "Before the storm",
          title: "When you held on",
          caption: "You stayed when it would have been easier to leave.",
          msg: "You had every reason to walk away. You stayed. You chose - quietly, without a performance - to remain. I don't think you know how much that meant. It meant everything. It still does.",
          alt: "Before the storm, when you held on"
        },
        {
          img: "assets/images/memory5.jpg",
          date: "A Tuesday in winter",
          title: "Small, perfect things",
          caption: "The way you made ordinary days feel like gifts.",
          msg: "You made a Tuesday feel like the most important day of my life. That is a rare and impossible gift. You turned ordinary moments into the kind I'd trade anything to revisit - just for five minutes. Just to feel it again.",
          alt: "A Tuesday in winter, small, perfect things"
        }
      ]
    },
    loveNotes: {
      title: "Things I never said<br /><em>out loud</em>",
      hint: "tap the hearts to hear them",
      continue: "The Letter ↓",
      notes: [
        { msg: "I think about you in the middle of completely ordinary moments.", sz: 55, color: "#ff8fab" },
        { msg: "Your laugh is the best sound I know.", sz: 45, color: "#ffb3c1" },
        { msg: "You made me want to be better without ever asking me to.", sz: 60, color: "#d44b72" },
        { msg: "I notice everything about you. Every small thing.", sz: 40, color: "#ff8fab" },
        { msg: "You are my favorite what if that became real.", sz: 52, color: "#ffb3c1" },
        { msg: "I was afraid of how much I felt. I still am.", sz: 48, color: "#d44b72" },
        { msg: "The world is more beautiful because you exist in it.", sz: 44, color: "#ff6b91" }
      ]
    },
    apology: {
      label: "my apology. my truth.",
      title: "I'm Sorry.<br /><em>Deeply.</em>",
      paragraphs: [
        "I know sorry isn't enough.<br />I know words can be cheap when actions have hurt.<br />But I need you to know -",
        "I never wanted to be the reason you cried.<br />I never wanted to be the thing that broke what we had.<br />I was afraid, and I handled it badly,<br />and <em>you</em> paid the price for my fear.",
        "You are not someone who deserves to be doubted.<br />You are not someone who deserves silence when you needed words.<br />You deserved better. You deserve everything.",
        "I don't ask you to forget.<br />I only ask you to believe that <em>I am trying</em>.<br />That every memory I shared here is real.<br />That you are the most important person in my world.",
        "- yours, always. ❤️"
      ],
      buttons: {
        forgive: "Forgive me ❤️",
        notYet: "Not yet 💔"
      },
      responses: {
        happy: "Thank you.<br/>This is all I needed - the chance to say it.<br/>I will spend every day making sure you never have to forgive me for the same hurt again.<br/>I love you. More than I have ever known how to say.<br/><br/>❤️ &nbsp; ❤️ &nbsp; ❤️",
        sad: "That's okay.<br/>I understand. I truly do.<br/>I'll still be here - not pressuring, not demanding.<br/>Just here. Whenever you're ready.<br/><em>I'm not going anywhere.</em>",
        takeTime: "take your time"
      }
    }
  }
};

const HEART_POSITIONS = [
  { top: "10%", left: "8%" },
  { top: "5%", left: "35%" },
  { top: "8%", left: "62%" },
  { top: "15%", left: "85%" },
  { top: "55%", left: "15%" },
  { top: "60%", left: "50%" },
  { top: "50%", left: "78%" }
];

const LANGUAGE_STORAGE_KEY = "love-letter-language";

let currentLang = "ar";
let typingDone = false;
let currentSlide = 0;
let musicPlaying = false;
let flowersInit = false;
let currentMemoryIndex = null;
let lastResponse = null;
let responseHintVisible = false;
let responseTimer = null;
let introTypingToken = 0;
let musicNoticeMode = null;
let musicNoticeTimer = null;

function getContent() {
  return TRANSLATIONS[currentLang];
}

function getInitialLanguage() {
  try {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (savedLanguage && TRANSLATIONS[savedLanguage]) {
      return savedLanguage;
    }
  } catch (error) {
    // Ignore storage issues and keep the default language.
  }

  return "ar";
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}

function setHTML(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.innerHTML = value;
  }
}

function formatWithBreaks(value) {
  return value.replace(/\n/g, "<br/>");
}

function applyLanguage(options = {}) {
  const { restartIntro = false } = options;
  const content = getContent();

  document.documentElement.lang = content.code;
  document.documentElement.dir = content.dir;
  document.body.classList.toggle("lang-ar", currentLang === "ar");
  document.title = content.meta.title;

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.langChoice === currentLang);
  });

  setText("introLineTop", content.intro.lineTop);
  setText("btnStart", content.intro.start);
  setText("introScrollHint", content.intro.scrollHint);

  setText("heroPretext", content.hero.pretext);
  setHTML("heroTitle", content.hero.title);
  setHTML("heroSub", content.hero.sub);
  setText("heroContinue", content.hero.continue);

  setText("flowersPre", content.flowers.pre);
  setText("bouquetHint", content.flowers.hint);
  setText("flowerMessageText", content.flowers.message);
  setText("flowersContinue", content.flowers.continue);

  setText("memoriesLabel", content.memories.label);
  setText("memoriesTitle", content.memories.title);
  setText("memoriesSubtitle", content.memories.subtitle);
  setText("memoriesContinue", content.memories.continue);

  setHTML("lovenotesTitle", content.loveNotes.title);
  setText("lovenotesHint", content.loveNotes.hint);
  setText("lovenotesContinue", content.loveNotes.continue);

  setText("apologyLabel", content.apology.label);
  setHTML("apologyTitle", content.apology.title);
  setHTML("apologyP1", content.apology.paragraphs[0]);
  setHTML("apologyP2", content.apology.paragraphs[1]);
  setHTML("apologyP3", content.apology.paragraphs[2]);
  setHTML("apologyP4", content.apology.paragraphs[3]);
  setHTML("apologySign", content.apology.paragraphs[4]);
  setText("btnForgive", content.apology.buttons.forgive);
  setText("btnNotYet", content.apology.buttons.notYet);

  renderMemoryCards();
  renderLoveNotesField();
  updateMusicLabel();
  updateResponseMessage();

  const modal = document.getElementById("memoryModal");
  if (modal && modal.classList.contains("open") && currentMemoryIndex !== null) {
    renderModal(currentMemoryIndex);
  }

  const intro = document.getElementById("intro");
  if (intro && intro.style.display !== "none") {
    if (typingDone) {
      const introText = document.getElementById("introText");
      const introCursor = document.getElementById("introCursor");
      const startButton = document.getElementById("btnStart");

      introText.innerHTML = formatWithBreaks(content.intro.typewriter);
      introCursor.style.display = "none";
      startButton.classList.add("visible");
    } else if (restartIntro) {
      typeWriter(true);
    }
  }
}

function setLanguage(lang) {
  if (!TRANSLATIONS[lang] || lang === currentLang) {
    return;
  }

  currentLang = lang;

  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch (error) {
    // Ignore storage issues and continue.
  }

  applyLanguage({ restartIntro: true });
}

function typeWriter(restart = false) {
  const content = getContent();
  const introText = document.getElementById("introText");
  const introCursor = document.getElementById("introCursor");
  const startButton = document.getElementById("btnStart");
  const phrase = content.intro.typewriter;
  const token = ++introTypingToken;

  typingDone = false;
  introText.innerHTML = "";
  introCursor.style.display = "inline-block";
  startButton.classList.remove("visible");

  let index = 0;

  function typeNext() {
    if (token !== introTypingToken) {
      return;
    }

    if (index < phrase.length) {
      const character = phrase[index];
      if (character === "\n") {
        introText.innerHTML += "<br/>";
      } else {
        introText.innerHTML += character;
      }
      index += 1;

      const delay = character === "." ? 220 : character === "," ? 140 : 55 + Math.random() * 35;
      window.setTimeout(typeNext, delay);
      return;
    }

    typingDone = true;
    introCursor.style.display = "none";
    startButton.classList.add("visible");
  }

  window.setTimeout(typeNext, restart ? 120 : 800);
}

function spawnStars(containerId, count) {
  const container = document.getElementById(containerId);
  if (!container || container.children.length) {
    return;
  }

  for (let index = 0; index < count; index += 1) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty("--d", `${2 + Math.random() * 4}s`);
    star.style.setProperty("--dl", `${Math.random() * 4}s`);
    star.style.setProperty("--min", (0.05 + Math.random() * 0.2).toFixed(2));
    star.style.setProperty("--max", (0.5 + Math.random() * 0.5).toFixed(2));
    star.style.width = `${1 + Math.random() * 2}px`;
    star.style.height = star.style.width;
    container.appendChild(star);
  }
}

function startJourney() {
  const intro = document.getElementById("intro");
  intro.classList.add("exiting");

  window.setTimeout(() => {
    intro.style.display = "none";
    showSection("hero");
    spawnParticles("heroParticles", 30);
  }, 1400);
}

function showSection(id) {
  const section = document.getElementById(id);
  if (!section) {
    return;
  }

  section.classList.remove("hidden");
  section.classList.add("active");

  requestAnimationFrame(() => {
    section.classList.add("section-fade-in");
    section.querySelectorAll(".reveal").forEach((element, index) => {
      window.setTimeout(() => element.classList.add("visible"), index * 150);
    });
  });

  if (id === "flowers") {
    initFlowers();
  }
  if (id === "memories") {
    updateDots();
  }
  if (id === "lovenotes") {
    renderLoveNotesField();
  }
  if (id === "apology") {
    spawnApologyParticles();
  }
}

function scrollToSection(id) {
  showSection(id);
  window.setTimeout(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 100);
}

function spawnParticles(containerId, count) {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }

  for (let index = 0; index < count; index += 1) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = `${5 + Math.random() * 90}%`;
    particle.style.top = `${10 + Math.random() * 80}%`;
    particle.style.setProperty("--dur", `${4 + Math.random() * 6}s`);
    particle.style.setProperty("--dl", `${Math.random() * 6}s`);
    container.appendChild(particle);
  }
}

function initFlowers() {
  if (flowersInit) {
    return;
  }

  flowersInit = true;
  spawnFallingPetals(20);
  window.setTimeout(() => {
    document.querySelectorAll(".flower").forEach((flower) => flower.classList.add("bloomed"));
  }, 300);
}

function spawnFallingPetals(count) {
  const container = document.getElementById("petalsContainer");
  if (!container) {
    return;
  }

  for (let index = 0; index < count; index += 1) {
    const petal = document.createElement("div");
    petal.className = "petal-fall";
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.setProperty("--d", `${5 + Math.random() * 8}s`);
    petal.style.setProperty("--dl", `${Math.random() * 8}s`);
    petal.style.setProperty("--dx", `${(Math.random() - 0.5) * 100}px`);
    petal.style.transform = `rotate(${Math.random() * 360}deg)`;
    container.appendChild(petal);
  }
}

let flowerRevealed = false;
function revealFlowerMessage() {
  if (flowerRevealed) {
    return;
  }

  flowerRevealed = true;
  const message = document.getElementById("flowerMessage");
  const hint = document.getElementById("bouquetHint");
  const bouquet = document.getElementById("bouquetWrapper");

  message.classList.remove("hidden");
  if (hint) {
    hint.style.opacity = "0";
  }

  bouquet.style.transform = "scale(1.1)";
  window.setTimeout(() => {
    bouquet.style.transform = "";
  }, 300);
}

function renderMemoryCards() {
  const items = getContent().memories.items;
  document.querySelectorAll(".memory-card").forEach((card, index) => {
    const item = items[index];
    if (!item) {
      return;
    }

    const image = card.querySelector(".memory-img");
    card.querySelector(".memory-date").textContent = item.date;
    card.querySelector(".memory-title-card").textContent = item.title;
    card.querySelector(".memory-caption").textContent = item.caption;

    if (image) {
      image.alt = item.alt || item.title;
    }
  });
}

function slideMemories(direction) {
  const track = document.getElementById("memoriesTrack");
  const cards = track ? track.querySelectorAll(".memory-card") : [];
  const total = cards.length;

  if (!total) {
    return;
  }

  currentSlide = Math.max(0, Math.min(total - 1, currentSlide + direction));
  const cardWidth = cards[0].offsetWidth + 24;
  track.scrollLeft = currentSlide * cardWidth;
  updateDots();
}

function goToMemory(index) {
  const track = document.getElementById("memoriesTrack");
  const cards = track ? track.querySelectorAll(".memory-card") : [];

  if (!cards.length) {
    return;
  }

  currentSlide = index;
  const cardWidth = cards[0].offsetWidth + 24;
  track.scrollLeft = currentSlide * cardWidth;
  updateDots();
}

function updateDots() {
  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function renderModal(index) {
  const item = getContent().memories.items[index];
  if (!item) {
    return;
  }

  const image = document.getElementById("modalImg");
  const placeholder = document.getElementById("modalImgPlaceholder");

  document.getElementById("modalDate").textContent = item.date;
  document.getElementById("modalTitle").textContent = item.title;
  document.getElementById("modalMsg").textContent = item.msg;

  placeholder.style.display = "none";
  image.alt = item.alt || item.title;
  image.src = item.img;
  image.style.display = "";
  image.onerror = () => {
    image.style.display = "none";
    placeholder.style.display = "block";
  };
}

function openMemory(index) {
  currentMemoryIndex = index;
  renderModal(index);

  const modal = document.getElementById("memoryModal");
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeMemory(event) {
  const modal = document.getElementById("memoryModal");
  if (!modal) {
    return;
  }

  const clickedBackdrop = event && event.target === modal;
  const clickedCloseButton = event && event.target.classList && event.target.classList.contains("modal-close");

  if (event && !clickedBackdrop && !clickedCloseButton) {
    return;
  }

  modal.classList.remove("open");
  document.body.style.overflow = "";
  currentMemoryIndex = null;
}

function renderLoveNotesField() {
  const field = document.getElementById("heartsField");
  const notes = getContent().loveNotes.notes;

  if (!field) {
    return;
  }

  field.innerHTML = "";

  notes.forEach((note, index) => {
    const position = HEART_POSITIONS[index] || {
      top: `${20 + index * 10}%`,
      left: `${10 + index * 12}%`
    };

    const noteElement = document.createElement("div");
    noteElement.className = "heart-note";
    noteElement.style.top = position.top;
    noteElement.style.left = position.left;
    noteElement.style.setProperty("--d", `${3 + Math.random() * 3}s`);
    noteElement.style.setProperty("--dl", `${Math.random() * 2}s`);
    noteElement.style.setProperty("--sz", `${note.sz}px`);
    noteElement.innerHTML = `
      <svg class="heart-svg" viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M50 80 C50 80 10 55 10 30 C10 15 20 5 35 5 C42 5 48 9 50 13 C52 9 58 5 65 5 C80 5 90 15 90 30 C90 55 50 80 50 80Z"
          fill="${note.color}" fill-opacity="0.85"/>
      </svg>
      <div class="heart-bubble">${note.msg}</div>
    `;
    noteElement.onclick = () => toggleNote(noteElement);
    field.appendChild(noteElement);
  });
}

function toggleNote(noteElement) {
  const isOpen = noteElement.classList.contains("revealed");
  document.querySelectorAll(".heart-note.revealed").forEach((note) => note.classList.remove("revealed"));
  if (!isOpen) {
    noteElement.classList.add("revealed");
  }
}

function spawnApologyParticles() {
  const container = document.getElementById("apologyParticles");
  if (!container || container.children.length > 0) {
    return;
  }

  for (let index = 0; index < 20; index += 1) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = `${5 + Math.random() * 90}%`;
    particle.style.top = `${10 + Math.random() * 80}%`;
    particle.style.setProperty("--dur", `${5 + Math.random() * 7}s`);
    particle.style.setProperty("--dl", `${Math.random() * 7}s`);
    particle.style.background = Math.random() > 0.5 ? "#c9a96e" : "#ffb3c1";
    container.appendChild(particle);
  }
}

function updateResponseMessage() {
  const message = document.getElementById("responseMessage");
  const buttonRow = document.querySelector(".apology-buttons");
  const responses = getContent().apology.responses;

  if (!lastResponse) {
    message.className = "response-message hidden";
    message.innerHTML = "";
    buttonRow.style.display = "";
    return;
  }

  message.className = `response-message ${lastResponse === "happy" ? "happy" : "sad"}`;
  message.innerHTML = lastResponse === "happy" ? responses.happy : responses.sad;

  if (lastResponse === "sad" && responseHintVisible) {
    message.innerHTML += `<br/><br/><small class="response-tip">${responses.takeTime}</small>`;
  }

  message.classList.remove("hidden");
  buttonRow.style.display = lastResponse === "happy" ? "none" : "";
}

function chooseForgive() {
  window.clearTimeout(responseTimer);
  lastResponse = "happy";
  responseHintVisible = false;
  updateResponseMessage();
  launchConfetti();
}

function chooseNotYet() {
  window.clearTimeout(responseTimer);
  lastResponse = "sad";
  responseHintVisible = false;
  updateResponseMessage();

  responseTimer = window.setTimeout(() => {
    if (lastResponse !== "sad") {
      return;
    }
    responseHintVisible = true;
    updateResponseMessage();
  }, 3000);
}

function launchConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  const context = canvas.getContext("2d");
  canvas.style.display = "block";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#ffb3c1", "#ff8fab", "#c9a96e", "#e8c98a", "#ffffff", "#d44b72", "#3a9e9f"];
  const pieces = [];

  for (let index = 0; index < 160; index += 1) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * canvas.height * 0.5,
      w: 6 + Math.random() * 8,
      h: 3 + Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 3,
      vy: 2 + Math.random() * 4,
      rot: Math.random() * 360,
      vr: (Math.random() - 0.5) * 6,
      alpha: 1
    });
  }

  let frame = 0;

  function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach((piece) => {
      piece.x += piece.vx;
      piece.y += piece.vy;
      piece.rot += piece.vr;
      if (piece.y > canvas.height * 0.8) {
        piece.alpha -= 0.01;
      }

      context.save();
      context.globalAlpha = Math.max(0, piece.alpha);
      context.translate(piece.x, piece.y);
      context.rotate((piece.rot * Math.PI) / 180);
      context.fillStyle = piece.color;
      context.fillRect(-piece.w / 2, -piece.h / 2, piece.w, piece.h);
      context.restore();
    });

    frame += 1;
    if (frame < 300) {
      window.requestAnimationFrame(draw);
    } else {
      canvas.style.display = "none";
    }
  }

  draw();
}

function updateMusicLabel() {
  const label = document.getElementById("musicLabel");
  const controls = getContent().controls;

  if (!label) {
    return;
  }

  if (musicNoticeMode === "missing") {
    label.textContent = controls.musicMissing;
    return;
  }

  label.textContent = musicPlaying ? controls.musicPlaying : controls.musicPlay;
}

function showMusicMissingNotice() {
  musicNoticeMode = "missing";
  window.clearTimeout(musicNoticeTimer);
  updateMusicLabel();

  musicNoticeTimer = window.setTimeout(() => {
    musicNoticeMode = null;
    updateMusicLabel();
  }, 2000);
}

function toggleMusic() {
  const audio = document.getElementById("bgMusic");
  const button = document.getElementById("musicBtn");

  if (!audio || !audio.getAttribute("src")) {
    showMusicMissingNotice();
    return;
  }

  if (musicPlaying) {
    audio.pause();
    musicPlaying = false;
    button.classList.remove("playing");
    updateMusicLabel();
    return;
  }

  audio.volume = 0.35;
  audio.play().then(() => {
    musicPlaying = true;
    button.classList.add("playing");
    musicNoticeMode = null;
    updateMusicLabel();
  }).catch(() => {
    button.classList.remove("playing");
    musicPlaying = false;
    showMusicMissingNotice();
  });
}

function observeReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const modal = document.getElementById("memoryModal");
    if (modal && modal.classList.contains("open")) {
      closeMemory({ target: modal });
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("memoriesTrack");
  if (track) {
    track.addEventListener("scroll", () => {
      const cards = track.querySelectorAll(".memory-card");
      if (!cards.length) {
        return;
      }
      const cardWidth = cards[0].offsetWidth + 24;
      currentSlide = Math.round(track.scrollLeft / cardWidth);
      updateDots();
    });
  }

  currentLang = getInitialLanguage();
  spawnStars("introStars", 160);
  applyLanguage();
  typeWriter();
  updateDots();
  observeReveal();

  document.addEventListener("click", () => {
    const audio = document.getElementById("bgMusic");
    const button = document.getElementById("musicBtn");

    if (!audio || musicPlaying || !audio.getAttribute("src")) {
      return;
    }

    audio.volume = 0.35;
    audio.play().then(() => {
      musicPlaying = true;
      button.classList.add("playing");
      musicNoticeMode = null;
      updateMusicLabel();
    }).catch(() => {
      // Browsers may block autoplay until another interaction; that's okay.
    });
  }, { once: true });
});
