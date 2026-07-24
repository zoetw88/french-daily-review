const studySets = {
  food: [
    { category: "VOCABULAIRE", skill: "冠詞", label: "請翻譯成法文", q: "我早餐吃麵包。", a: "Je mange du pain au petit déjeuner.", note: "食物前用 du；三餐前使用 au。" },
    { category: "VOCABULAIRE", skill: "冠詞", label: "請補上正確冠詞", q: "Nous mangeons ___ légumes.", a: "Nous mangeons des légumes.", note: "複數、肯定句使用 des。" },
    { category: "VOCABULAIRE", skill: "動詞", label: "請翻譯成法文", q: "他們午餐喝水。", a: "Au déjeuner, ils boivent de l’eau.", note: "boire 的 ils 變化是 boivent。" },
    { category: "EXPRESSION", skill: "句型", label: "請完整回答", q: "Qu’est-ce que vous mangez au dîner ?", a: "Au dîner, nous mangeons des légumes et du fromage.", note: "使用 au dîner，不是 pour dîner。" },
    { category: "GRAMMAIRE", skill: "否定句", label: "請改成否定句", q: "Je bois du café.", a: "Je ne bois pas de café.", note: "否定句中 du 變成 de。" },
  ],
  negative: [
    { category: "GRAMMAIRE", skill: "否定句", label: "請改成否定句", q: "J’ai un blouson.", a: "Je n’ai pas de blouson.", note: "否定句中 un 變成 de；母音前 ne 省音為 n’。" },
    { category: "GRAMMAIRE", skill: "否定句", label: "請改成否定句", q: "Vous avez des baskets.", a: "Vous n’avez pas de baskets.", note: "des 變成 de；avez 前使用 n’。" },
    { category: "GRAMMAIRE", skill: "否定句", label: "請改成否定句", q: "Ils portent des lunettes.", a: "Ils ne portent pas de lunettes.", note: "ne + 動詞 + pas，des 變成 de。" },
    { category: "CORRECTION", skill: "省音", label: "找出並修正錯誤", q: "Nous n’portons pas de tee-shirts.", a: "Nous ne portons pas de tee-shirts.", note: "portons 不是母音開頭，ne 不可省音。" },
    { category: "GRAMMAIRE", skill: "否定句", label: "請改成否定句", q: "Elle prend du dessert.", a: "Elle ne prend pas de dessert.", note: "否定句中部分冠詞 du 變成 de。" },
  ],
  speaking: [
    { category: "EXPRESSION", skill: "口說", label: "請先說，再寫下答案", q: "Qu’est-ce que vous mangez au petit déjeuner ?", a: "Je mange du pain, du beurre et de la confiture.", note: "答案可以換成你真正吃的食物。" },
    { category: "EXPRESSION", skill: "動詞", label: "請先說，再寫下答案", q: "Est-ce que vous buvez du café au déjeuner ?", a: "Non, je ne bois pas de café au déjeuner.", note: "je 的 boire 是 bois。" },
    { category: "EXPRESSION", skill: "頻率", label: "請先說，再寫下答案", q: "Combien de fois mangez-vous du poisson par semaine ?", a: "Je mange du poisson une fois par semaine.", note: "頻率用 une fois par semaine。" },
    { category: "EXPRESSION", skill: "動詞", label: "請先說，再寫下答案", q: "Est-ce que vous prenez du dessert ?", a: "Non, je ne prends pas de dessert.", note: "je 的 prendre 是 prends。" },
    { category: "EXPRESSION", skill: "省音", label: "請先說，再寫下答案", q: "Qu’est-ce qu’ils boivent au déjeuner ?", a: "Au déjeuner, ils boivent de l’eau.", note: "que + ils 要省音成 qu’ils。" },
  ],
  verbs: [
    { category: "CONJUGAISON", skill: "動詞", label: "請填入 boire 的正確變化", q: "Vous ___ du thé.", a: "Vous buvez du thé.", note: "vous buvez；nous buvons。" },
    { category: "CONJUGAISON", skill: "動詞", label: "請填入 boire 的正確變化", q: "Ils ___ de l’eau.", a: "Ils boivent de l’eau.", note: "ils boivent 是不規則變化。" },
    { category: "CONJUGAISON", skill: "拼字", label: "請修正動詞", q: "Nous mangons des crêpes.", a: "Nous mangeons des crêpes.", note: "為保留 g 的軟音，nous mangeons 要加 e。" },
    { category: "CONJUGAISON", skill: "動詞", label: "請填入 prendre 的正確變化", q: "Je ___ du riz.", a: "Je prends du riz.", note: "je prends，字尾有 s。" },
    { category: "CONJUGAISON", skill: "動詞", label: "請修正動詞", q: "Les enfants écrit.", a: "Les enfants écrivent.", note: "les enfants = ils，所以用 écrivent。" },
  ],
  questions: [
    { category: "QUESTIONS", skill: "句型", label: "請修正問句", q: "Qu’est-ce vous mangez au dîner ?", a: "Qu’est-ce que vous mangez au dîner ?", note: "固定結構是 Qu’est-ce que。" },
    { category: "QUESTIONS", skill: "句型", label: "請翻譯成法文", q: "你每週吃幾次魚？", a: "Combien de fois mangez-vous du poisson par semaine ?", note: "頻率問句用 combien de fois。" },
    { category: "QUESTIONS", skill: "疑問詞", label: "請選擇正確疑問詞", q: "___ est le prix ?", a: "Quel est le prix ?", note: "詢問價格可說 Quel est le prix ?" },
    { category: "QUESTIONS", skill: "句型", label: "請修正問句", q: "Combien est la robe ?", a: "Combien coûte la robe ?", note: "詢問多少錢需要動詞 coûter。" },
    { category: "QUESTIONS", skill: "指示詞", label: "請翻譯成法文", q: "你覺得這件襯衫如何？", a: "Comment tu trouves cette chemise ?", note: "chemise 是陰性，使用 cette。" },
  ],
  past: [
    { category: "PASSÉ COMPOSÉ", skill: "過去分詞", label: "請改成昨天發生的事", q: "Aujourd’hui, je travaille au bureau.", a: "Hier, j’ai travaillé au bureau.", note: "-er 動詞的過去分詞字尾是 -é。" },
    { category: "PASSÉ COMPOSÉ", skill: "過去分詞", label: "請改成複合過去式", q: "Je fais les magasins.", a: "J’ai fait les magasins.", note: "faire 的過去分詞是不規則的 fait。" },
    { category: "PASSÉ COMPOSÉ", skill: "過去分詞", label: "請翻譯成法文", q: "昨天中午，我吃了魚並喝了水。", a: "Hier midi, j’ai mangé du poisson et j’ai bu de l’eau.", note: "boire 的過去分詞是 bu。" },
    { category: "PASSÉ COMPOSÉ", skill: "否定句", label: "請改成否定句", q: "Sa sœur a pris de la viande.", a: "Sa sœur n’a pas pris de viande.", note: "pas 放在助動詞後；否定句的部分冠詞變成 de。" },
    { category: "PASSÉ COMPOSÉ", skill: "句型", label: "請回答完整句", q: "Qu’est-ce que tu as fait hier ?", a: "Hier, j’ai dîné avec des amis.", note: "用 hier + passé composé 描述完成的過去事件。" },
  ],
};

const mistakes = [
  ["Je buve du thé.", "Je bois du thé.", "boire 的 je 變化是 bois，不是 buve。"],
  ["Je prend le riz pour déjeuner.", "Je prends du riz au déjeuner.", "je prends 有 s；食物用 du，三餐前用 au。"],
  ["Ils mangent, ils buvevent.", "Ils mangent, ils boivent.", "boire 的 ils 形式是不規則的 boivent。"],
  ["Vous ne avez pas des baskets.", "Vous n’avez pas de baskets.", "avez 前需省音，否定句的 des 變成 de。"],
  ["Qu’est-ce vous mangez pour dîner ?", "Qu’est-ce que vous mangez au dîner ?", "不要漏掉 que；三餐前用 au。"],
  ["Ce robe est très jolie.", "Cette robe est très jolie.", "robe 是陰性名詞，指示形容詞用 cette。"],
  ["Tu tu reposes.", "Tu te reposes.", "反身動詞中 tu 對應 te。"],
  ["Il a un bus à la gare.", "Il y a un bus à la gare.", "表達『有』要用固定結構 il y a。"],
  ["J’ai fit les magasins.", "J’ai fait les magasins.", "faire 的過去分詞是 fait。"],
  ["Sa sœur n’a pris pas de viande.", "Sa sœur n’a pas pris de viande.", "複合過去式的 pas 放在助動詞後。"],
];

const classes = [
  ["06 / 28", "Se présenter", "自我介紹 · aimer · avoir", "speaking"],
  ["07 / 04", "Les vêtements", "衣著 · 顏色 · 否定句", "negative"],
  ["07 / 06", "Shopping", "quel · ce/cette/ces · 詢價", "questions"],
  ["07 / 08", "Appartement à louer", "房間 · 方位 · 樓層", "questions"],
  ["07 / 10", "La journée", "反身動詞 · faire · lire · écrire", "verbs"],
  ["07 / 16", "L’heure", "時間 · aller · il y a", "verbs"],
  ["07 / 20", "Les repas & les crêpes", "飲食 · 部分冠詞 · 問答", "food"],
  ["07 / 22", "Il est comment ?", "複合過去式 · 過去分詞 · 過去敘事", "past"],
];

const DAY = 86_400_000;
const NOW = () => Date.now();
const OPENROUTER_ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";
const OPENROUTER_MODEL = "mistralai/mistral-7b-instruct:free";
const PROGRESS_BACKUP_KEY = "encore-progress-backup";
const PROGRESS_EXPORT_VERSION = 2;
const PROGRESS_FILE_PREFIX = "french-review-progress";
const OPENROUTER_KEY_KEY = "encore-openrouter-key";
const GITHUB_SYNC_CONFIG_KEY = "encore-github-sync-config";
const GITHUB_SYNC_TOKEN_KEY = "encore-github-sync-token";
const GITHUB_API_ENDPOINT = "https://api.github.com";
const GITHUB_API_VERSION = "2022-11-28";
const GITHUB_SYNC_DELAY = 1_500;
const DEFAULT_GITHUB_SYNC_CONFIG = Object.freeze({
  owner: "zoetw88",
  repo: "french-review-progress-private",
  branch: "main",
  path: "progress.json",
});
let githubSyncTimer = null;
let githubSyncInFlight = false;
let githubSyncPending = false;
let githubSyncVerified = false;
const allCards = Object.entries(studySets).flatMap(([set, cards]) =>
  cards.map((card, index) => ({ ...card, set, id: `${set}-${index}` }))
);

function getTodayKey(date = new Date()) {
  return date.toLocaleDateString("en-CA");
}

function readJsonSafe(rawValue, fallback = null) {
  if (rawValue === null || rawValue === undefined) return fallback;
  try {
    return JSON.parse(rawValue);
  } catch {
    return fallback;
  }
}

function loadStateFromBackup() {
  const backup = readJsonSafe(localStorage.getItem(PROGRESS_BACKUP_KEY), null);
  if (!backup || typeof backup !== "object") return null;
  if (backup.state && typeof backup.state === "object") return backup.state;
  if (backup.completed || backup.reviews || backup.streak || backup.game) {
    return {
      completed: backup.completed,
      streak: backup.streak,
      reviews: backup.reviews,
      lastStudyDate: backup.lastStudyDate,
      game: backup.game,
    };
  }
  return null;
}

const backupState = loadStateFromBackup();

function getProgressSnapshot() {
  return {
    completed: state.completed,
    streak: state.streak,
    reviews: state.reviews,
    lastStudyDate: state.lastStudyDate,
    game: state.game,
  };
}

function normalizeReviewEntry(raw = {}) {
  if (!raw || typeof raw !== "object") return null;
  const attemptCount = Number(raw.attempts || 0);
  const correct = Number(raw.correct || 0);
  const wrong = Number(raw.wrong || 0);
  return {
    attempts: Math.max(0, attemptCount),
    correct: Math.max(0, correct),
    wrong: Math.max(0, wrong),
    streak: Number(raw.streak || 0),
    interval: Number(raw.interval || 0),
    nextReview: Number(raw.nextReview || 0),
    lastReviewed: raw.lastReviewed || 0,
    lastScore: Number(raw.lastScore || 0),
    skill: raw.skill || "",
  };
}

function normalizeProgressData(raw = {}) {
  const result = {
    completed: Array.isArray(raw.completed) ? [...new Set(raw.completed)] : [],
    streak: Number(raw.streak || 4),
    reviews: typeof raw.reviews === "object" && raw.reviews ? {} : {},
    lastStudyDate: typeof raw.lastStudyDate === "string" ? raw.lastStudyDate : "",
    game: normalizeGameState(raw.game || {}),
  };
  if (typeof raw.reviews === "object" && raw.reviews) {
    Object.entries(raw.reviews).forEach(([key, value]) => {
      const normalized = normalizeReviewEntry(value);
      if (normalized) result.reviews[key] = normalized;
    });
  }
  return result;
}

function buildExportPayload(exportedAt = NOW()) {
  return {
    app: "encore-french-review",
    schema: "french-review-progress",
    version: PROGRESS_EXPORT_VERSION,
    exportedAt,
    state: getProgressSnapshot(),
  };
}

function buildObsidianMarkdownPayload(payload) {
  const stamp = new Date(payload.exportedAt).toLocaleString("zh-TW", { hour12: false });
  const game = payload.state?.game || {};
  const reviews = Object.entries(payload.state?.reviews || {}).filter(([, item]) => item && item.attempts > 0);

  return `# 法語複習進度備份

- 匯出時間：${stamp}
- 連續天數：${payload.state?.streak ?? 0}
- 今日累積 XP：${game.xp ?? 0}
- 金幣：${game.coins ?? 0}
- 已完成課程：${(payload.state?.completed || []).length}

## 進度資料（可直接匯入）
\`\`\`json
${JSON.stringify(payload.state, null, 2)}
\`\`\`

## 錯誤較多題目 Top 8（含錯題數）
\`\`\`text
${reviews
    .sort((a, b) => (b[1].wrong || 0) - (a[1].wrong || 0))
    .slice(0, 8)
    .map(([cardId, info]) => `${cardId}: wrong=${info.wrong}, attempts=${info.attempts}, streak=${info.streak || 0}`)
    .join("\n") || "尚無題目紀錄"}
\`\`\`
`;
}

function downloadText(filename, content, type = "application/json") {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function normalizeGameState(raw = {}) {
  const today = getTodayKey();
  return {
    xp: 0,
    level: 1,
    coins: 0,
    runStreak: 0,
    sessionsDone: 0,
    bossDefeated: 0,
    achievements: [],
    logs: [],
    daily: {
      date: today,
      completedQuests: [],
    },
    ...raw,
    daily: raw.daily && raw.daily.date === today
      ? { ...raw.daily }
      : { date: today, completedQuests: [] },
  };
}

const QUEST_DEFS = [
  { id: "review-any", title: "完成 1 場複習", target: 1, rewardXp: 18, rewardCoins: 2 },
  { id: "review-5", title: "完成 5 題以上", target: 5, rewardXp: 20, rewardCoins: 3 },
  { id: "accuracy-4", title: "本場至少 4 題正確", target: 4, rewardXp: 30, rewardCoins: 4 },
  { id: "boss-win", title: "BOSS 戰全對", target: 1, rewardXp: 40, rewardCoins: 5 },
];

const ACHIEVEMENTS = [
  { id: "first-session", label: "首次上線", icon: "🎯", condition: (g) => g.sessionsDone >= 1 },
  { id: "first-boss", label: "首次斬獲 BOSS", icon: "⚔️", condition: (g) => g.bossDefeated >= 1 },
  { id: "streak-3", label: "連勝 3 次", icon: "🔥", condition: (g) => g.runStreak >= 3 },
  { id: "xp-100", label: "勇士初階", icon: "🌟", condition: (g) => g.xp >= 100 },
  { id: "xp-300", label: "熟練者", icon: "🏆", condition: (g) => g.xp >= 300 },
];

const XP_LEVEL_STEP = 120;

if (backupState) {
  if (localStorage.getItem("encore-completed") === null && backupState.completed) {
    localStorage.setItem("encore-completed", JSON.stringify(backupState.completed));
  }
  if (localStorage.getItem("encore-streak") === null && backupState.streak !== undefined) {
    localStorage.setItem("encore-streak", String(backupState.streak));
  }
  if (localStorage.getItem("encore-reviews-v2") === null && backupState.reviews) {
    localStorage.setItem("encore-reviews-v2", JSON.stringify(backupState.reviews));
  }
  if (localStorage.getItem("encore-last-study-date") === null && backupState.lastStudyDate) {
    localStorage.setItem("encore-last-study-date", backupState.lastStudyDate);
  }
  if (localStorage.getItem("encore-game-state") === null && backupState.game) {
    localStorage.setItem("encore-game-state", JSON.stringify(backupState.game));
  }
}

const state = {
  set: "due",
  session: [],
  index: 0,
  results: [],
  completed: JSON.parse(localStorage.getItem("encore-completed") || "[]"),
  streak: Number(localStorage.getItem("encore-streak") || 4),
  reviews: JSON.parse(localStorage.getItem("encore-reviews-v2") || "{}"),
  lastStudyDate: localStorage.getItem("encore-last-study-date") || "",
  sessionMode: "normal",
  sessionSource: "due",
  game: normalizeGameState(JSON.parse(localStorage.getItem("encore-game-state") || "{}")),
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function reviewFor(card) {
  return state.reviews[card.id] || {
    attempts: 0,
    correct: 0,
    wrong: 0,
    streak: 0,
    interval: 0,
    nextReview: 0,
    lastScore: 0,
  };
}

function getLocalProgressUpdatedAt() {
  return Number(readJsonSafe(localStorage.getItem(PROGRESS_BACKUP_KEY), {})?.updatedAt || 0);
}

function saveAllProgress({ syncCloud = true, updatedAt = NOW() } = {}) {
  localStorage.setItem("encore-completed", JSON.stringify(state.completed));
  localStorage.setItem("encore-streak", String(state.streak));
  localStorage.setItem("encore-reviews-v2", JSON.stringify(state.reviews));
  localStorage.setItem("encore-last-study-date", state.lastStudyDate || "");
  localStorage.setItem("encore-game-state", JSON.stringify(state.game));
  const backup = {
    version: PROGRESS_EXPORT_VERSION,
    updatedAt,
    state: getProgressSnapshot(),
  };
  localStorage.setItem(PROGRESS_BACKUP_KEY, JSON.stringify(backup));
  if (syncCloud) scheduleGitHubSync();
}

function exportProgressAsJson() {
  const payload = buildExportPayload();
  const filename = `${PROGRESS_FILE_PREFIX}-${new Date().toISOString().replace(/[:.]/g, "-")}.json`;
  downloadText(filename, JSON.stringify(payload, null, 2), "application/json");
  return payload;
}

function exportProgressAsMarkdown() {
  const payload = buildExportPayload();
  const stamp = new Date(payload.exportedAt).toISOString().slice(0, 10);
  const filename = `${PROGRESS_FILE_PREFIX}-${stamp}.md`;
  downloadText(filename, buildObsidianMarkdownPayload(payload), "text/markdown; charset=utf-8");
  return payload;
}

function importProgressPayload(rawPayload, options = {}) {
  const normalized = normalizeProgressData(rawPayload?.state || rawPayload || {});
  state.completed = normalized.completed;
  state.streak = normalized.streak;
  state.reviews = normalized.reviews;
  state.lastStudyDate = normalized.lastStudyDate;
  state.game = normalized.game;
  saveAllProgress(options);
  renderProgress();
  renderGameDashboard();
  renderMemoryStats();
  renderErrorDashboard();
  setDate();
}

function importProgressFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (event) => {
    const payload = readJsonSafe(event.target.result, null);
    if (!payload || (typeof payload !== "object")) {
      setProgressBackupStatus("備份格式不正確，請選擇正確的進度 JSON 檔。");
      return;
    }
    if (!payload.state && !payload.completed && !payload.reviews && !payload.game && !payload.lastStudyDate) {
      setProgressBackupStatus("備份缺少必要欄位，請確認是法語複習進度檔。");
      return;
    }
    importProgressPayload(payload);
    setProgressBackupStatus("已還原備份，進度同步完成。");
    showToast("已還原備份。");
  };
  reader.onerror = () => {
    setProgressBackupStatus("檔案讀取失敗，請再試一次。");
  };
  reader.readAsText(file);
}

function setProgressBackupStatus(text) {
  $("#progressBackupStatus").textContent = text;
}

async function copyTextToClipboard(text, label) {
  if (!text) return;
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      setProgressBackupStatus(`${label}，已複製到剪貼簿。`);
      showToast(`${label}已複製`);
      return;
    }
  } catch (error) {
    // fallback below
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  const success = document.execCommand("copy");
  textarea.remove();
  setProgressBackupStatus(success ? `${label}，已複製到剪貼簿。` : `${label}，請手動複製。`);
  if (success) showToast(`${label}已複製`);
}

function parseProgressPayloadFromText(rawText) {
  const trimmed = (rawText || "").trim();
  if (!trimmed) return null;
  const direct = readJsonSafe(trimmed, null);
  if (direct && typeof direct === "object") return direct;

  const markdownJsonMatch = trimmed.match(/```json\\s*([\\s\\S]*?)\\s*```/i);
  if (markdownJsonMatch?.[1]) {
    const fromBlock = readJsonSafe(markdownJsonMatch[1], null);
    if (fromBlock && typeof fromBlock === "object") return fromBlock;
  }
  return null;
}

async function importProgressFromText(rawText) {
  const payload = parseProgressPayloadFromText(rawText);
  if (!payload) {
    setProgressBackupStatus("貼上內容不是合法 JSON 或備份檔格式。");
    showToast("還原失敗：貼上內容格式不符");
    return;
  }
  if (!payload.state && !payload.completed && !payload.reviews && !payload.game && !payload.lastStudyDate) {
    setProgressBackupStatus("貼上資料缺少必要欄位，請確認是法語複習進度備份。");
    return;
  }
  importProgressPayload(payload);
  setProgressBackupStatus("已從剪貼簿還原備份，進度同步完成。");
  showToast("已還原備份。");
}

async function pasteProgressFromClipboard() {
  if (!navigator.clipboard?.readText) {
    setProgressBackupStatus("目前環境無法直接讀取剪貼簿，請改用「還原備份」選擇 JSON 檔。");
    showToast("無法直接貼上，請改用還原備份檔。");
    return;
  }
  try {
    const text = await navigator.clipboard.readText();
    await importProgressFromText(text);
  } catch (error) {
    setProgressBackupStatus("讀取剪貼簿失敗，請稍後再試或改用匯入檔案。");
    showToast("讀取剪貼簿失敗");
  }
}

function getGitHubSyncConfig() {
  const saved = readJsonSafe(localStorage.getItem(GITHUB_SYNC_CONFIG_KEY), {});
  return { ...DEFAULT_GITHUB_SYNC_CONFIG, ...(saved && typeof saved === "object" ? saved : {}) };
}

function getGitHubSyncToken() {
  return sessionStorage.getItem(GITHUB_SYNC_TOKEN_KEY) || "";
}

function setGitHubSyncStatus(message, status = "idle") {
  const output = $("#githubSyncStatus");
  if (!output) return;
  output.textContent = message;
  output.dataset.status = status;
}

function validateGitHubSyncConfig(config) {
  const ownerRepoPattern = /^[A-Za-z0-9_.-]+$/;
  const branchPattern = /^[A-Za-z0-9._/-]+$/;
  if (!ownerRepoPattern.test(config.owner) || !ownerRepoPattern.test(config.repo)) {
    throw new Error("GitHub 帳號或 repo 名稱格式不正確。");
  }
  if (!branchPattern.test(config.branch) || config.branch.includes("..")) {
    throw new Error("分支名稱格式不正確。");
  }
  if (!config.path || config.path.startsWith("/") || config.path.includes("..")) {
    throw new Error("進度檔路徑格式不正確。");
  }
}

function githubHeaders(token) {
  return {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${token}`,
    "X-GitHub-Api-Version": GITHUB_API_VERSION,
  };
}

async function readGitHubError(response) {
  const body = await response.json().catch(() => ({}));
  return body?.message || `GitHub API 回傳 ${response.status}`;
}

async function verifyPrivateGitHubRepo(config, token) {
  const response = await fetch(
    `${GITHUB_API_ENDPOINT}/repos/${encodeURIComponent(config.owner)}/${encodeURIComponent(config.repo)}`,
    { headers: githubHeaders(token) }
  );
  if (!response.ok) throw new Error(await readGitHubError(response));
  const repo = await response.json();
  if (!repo.private) throw new Error("同步已停止：指定的 GitHub repo 不是 private。");
  if (!repo.permissions?.push) throw new Error("Token 沒有寫入這個 private repo 的權限。");
}

function encodeGitHubFilePath(path) {
  return path.split("/").map((part) => encodeURIComponent(part)).join("/");
}

function decodeBase64Utf8(content) {
  const binary = atob((content || "").replace(/\s/g, ""));
  const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function encodeBase64Utf8(content) {
  const bytes = new TextEncoder().encode(content);
  let binary = "";
  const chunkSize = 0x8000;
  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }
  return btoa(binary);
}

async function fetchGitHubProgress(config, token) {
  const url = `${GITHUB_API_ENDPOINT}/repos/${encodeURIComponent(config.owner)}/${encodeURIComponent(config.repo)}/contents/${encodeGitHubFilePath(config.path)}?ref=${encodeURIComponent(config.branch)}`;
  const response = await fetch(url, { headers: githubHeaders(token) });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error(await readGitHubError(response));
  const file = await response.json();
  const payload = readJsonSafe(decodeBase64Utf8(file.content), null);
  if (!payload?.state) throw new Error("雲端 progress.json 格式不正確。");
  return { payload, sha: file.sha };
}

async function writeGitHubProgress(config, token, payload, sha = "") {
  const url = `${GITHUB_API_ENDPOINT}/repos/${encodeURIComponent(config.owner)}/${encodeURIComponent(config.repo)}/contents/${encodeGitHubFilePath(config.path)}`;
  const body = {
    message: `sync: update French progress ${new Date(payload.exportedAt).toISOString()}`,
    content: encodeBase64Utf8(`${JSON.stringify(payload, null, 2)}\n`),
    branch: config.branch,
  };
  if (sha) body.sha = sha;
  const response = await fetch(url, {
    method: "PUT",
    headers: { ...githubHeaders(token), "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    const error = new Error(await readGitHubError(response));
    error.status = response.status;
    throw error;
  }
  return response.json();
}

function mergeReviewMaps(localReviews, cloudReviews) {
  const merged = {};
  const keys = new Set([...Object.keys(localReviews || {}), ...Object.keys(cloudReviews || {})]);
  keys.forEach((key) => {
    const local = normalizeReviewEntry(localReviews?.[key]);
    const cloud = normalizeReviewEntry(cloudReviews?.[key]);
    if (!local) merged[key] = cloud;
    else if (!cloud) merged[key] = local;
    else {
      const localOrder = [Number(local.lastReviewed || 0), local.attempts];
      const cloudOrder = [Number(cloud.lastReviewed || 0), cloud.attempts];
      merged[key] = localOrder[0] > cloudOrder[0] || (localOrder[0] === cloudOrder[0] && localOrder[1] >= cloudOrder[1])
        ? local
        : cloud;
    }
  });
  return merged;
}

function mergeGameStates(localGame, cloudGame, preferLocal) {
  const local = normalizeGameState(localGame || {});
  const cloud = normalizeGameState(cloudGame || {});
  const newest = preferLocal ? local : cloud;
  const older = preferLocal ? cloud : local;
  return normalizeGameState({
    ...older,
    ...newest,
    xp: Math.max(local.xp || 0, cloud.xp || 0),
    level: Math.max(local.level || 1, cloud.level || 1),
    coins: Math.max(local.coins || 0, cloud.coins || 0),
    runStreak: Math.max(local.runStreak || 0, cloud.runStreak || 0),
    sessionsDone: Math.max(local.sessionsDone || 0, cloud.sessionsDone || 0),
    bossDefeated: Math.max(local.bossDefeated || 0, cloud.bossDefeated || 0),
    achievements: [...new Set([...(local.achievements || []), ...(cloud.achievements || [])])],
    logs: [...new Set([...(newest.logs || []), ...(older.logs || [])])].slice(0, 12),
  });
}

function mergeProgressPayloads(localPayload, cloudPayload) {
  if (!cloudPayload?.state) return localPayload;
  const local = normalizeProgressData(localPayload?.state || {});
  const cloud = normalizeProgressData(cloudPayload.state);
  const localTime = Number(localPayload.exportedAt || 0);
  const cloudTime = Number(cloudPayload.exportedAt || 0);
  const preferLocal = localTime >= cloudTime;
  const latestStudyDate = local.lastStudyDate >= cloud.lastStudyDate ? local.lastStudyDate : cloud.lastStudyDate;
  const latestStreak = local.lastStudyDate === cloud.lastStudyDate
    ? Math.max(local.streak, cloud.streak)
    : latestStudyDate === local.lastStudyDate ? local.streak : cloud.streak;

  return {
    app: "encore-french-review",
    schema: "french-review-progress",
    version: PROGRESS_EXPORT_VERSION,
    exportedAt: Math.max(localTime, cloudTime),
    state: {
      completed: [...new Set([...local.completed, ...cloud.completed])],
      streak: latestStreak,
      reviews: mergeReviewMaps(local.reviews, cloud.reviews),
      lastStudyDate: latestStudyDate,
      game: mergeGameStates(local.game, cloud.game, preferLocal),
    },
  };
}

async function syncGitHubProgress({ push = true, verify = false } = {}) {
  const token = getGitHubSyncToken();
  const config = getGitHubSyncConfig();
  if (!token) {
    setGitHubSyncStatus("尚未連線。Token 只保留到關閉這個分頁。");
    return false;
  }
  if (githubSyncInFlight) {
    githubSyncPending = githubSyncPending || push;
    return false;
  }

  githubSyncInFlight = true;
  setGitHubSyncStatus(push ? "正在安全同步到 GitHub…" : "正在讀取 GitHub 雲端進度…", "working");
  try {
    validateGitHubSyncConfig(config);
    if (verify || !githubSyncVerified) {
      await verifyPrivateGitHubRepo(config, token);
      githubSyncVerified = true;
    }
    const cloudFile = await fetchGitHubProgress(config, token);
    const localPayload = buildExportPayload(getLocalProgressUpdatedAt() || NOW());
    const merged = mergeProgressPayloads(localPayload, cloudFile?.payload);
    const syncedAt = NOW();
    merged.exportedAt = syncedAt;
    importProgressPayload(merged, { syncCloud: false, updatedAt: syncedAt });
    if (push) {
      try {
        await writeGitHubProgress(config, token, merged, cloudFile?.sha);
      } catch (error) {
        if (error.status !== 409) throw error;
        const latestCloudFile = await fetchGitHubProgress(config, token);
        const retryPayload = mergeProgressPayloads(merged, latestCloudFile?.payload);
        retryPayload.exportedAt = NOW();
        importProgressPayload(retryPayload, { syncCloud: false, updatedAt: retryPayload.exportedAt });
        await writeGitHubProgress(config, token, retryPayload, latestCloudFile?.sha);
      }
    }
    setGitHubSyncStatus(
      `${push ? "已同步" : "已載入"}：${new Date(syncedAt).toLocaleString("zh-TW", { hour12: false })}`,
      "success"
    );
    return true;
  } catch (error) {
    githubSyncVerified = false;
    setGitHubSyncStatus(`同步失敗：${error.message}`, "error");
    return false;
  } finally {
    githubSyncInFlight = false;
    if (githubSyncPending) {
      githubSyncPending = false;
      scheduleGitHubSync();
    }
  }
}

function scheduleGitHubSync() {
  if (!getGitHubSyncToken() || !githubSyncVerified) return;
  clearTimeout(githubSyncTimer);
  githubSyncTimer = setTimeout(() => syncGitHubProgress({ push: true }), GITHUB_SYNC_DELAY);
  setGitHubSyncStatus("本機已儲存，等待同步…", "working");
}

async function connectGitHubSync() {
  const config = {
    owner: $("#githubOwner").value.trim(),
    repo: $("#githubRepo").value.trim(),
    branch: $("#githubBranch").value.trim(),
    path: $("#githubProgressPath").value.trim(),
  };
  const token = $("#githubToken").value.trim();
  try {
    validateGitHubSyncConfig(config);
    if (!token) throw new Error("請輸入 fine-grained GitHub Token。");
    localStorage.setItem(GITHUB_SYNC_CONFIG_KEY, JSON.stringify(config));
    sessionStorage.setItem(GITHUB_SYNC_TOKEN_KEY, token);
    $("#githubToken").value = "";
    githubSyncVerified = false;
    const success = await syncGitHubProgress({ push: true, verify: true });
    if (success) showToast("GitHub 私有進度同步已連線");
  } catch (error) {
    setGitHubSyncStatus(`連線失敗：${error.message}`, "error");
  }
}

function disconnectGitHubSync() {
  clearTimeout(githubSyncTimer);
  sessionStorage.removeItem(GITHUB_SYNC_TOKEN_KEY);
  githubSyncVerified = false;
  setGitHubSyncStatus("已登出。Token 已從這個分頁清除。");
  showToast("GitHub 同步已登出");
}

function initializeGitHubSyncUi() {
  const config = getGitHubSyncConfig();
  $("#githubOwner").value = config.owner;
  $("#githubRepo").value = config.repo;
  $("#githubBranch").value = config.branch;
  $("#githubProgressPath").value = config.path;
  if (getGitHubSyncToken()) {
    syncGitHubProgress({ push: false, verify: true });
  } else {
    setGitHubSyncStatus("尚未連線。Token 只保留到關閉這個分頁。");
  }
}

function saveReviews() {
  localStorage.setItem("encore-reviews-v2", JSON.stringify(state.reviews));
  saveAllProgress();
}

function saveGameState() {
  localStorage.setItem("encore-game-state", JSON.stringify(state.game));
  saveAllProgress();
}

function resetDailyIfNeeded() {
  const today = getTodayKey();
  if (state.game.daily.date !== today) {
    state.game.daily = { date: today, completedQuests: [] };
  }
}

function buildSession(setName, options = {}) {
  if (options.cards) return options.cards.map((card, index) => ({ ...card, id: `${card.set || setName}-${index}` }));
  if (setName !== "due") {
    return studySets[setName]
      ? studySets[setName].map((card, index) => ({ ...card, set: setName, id: `${setName}-${index}` }))
      : [];
  }

  const now = NOW();
  return [...allCards]
    .sort((a, b) => {
      const ar = reviewFor(a);
      const br = reviewFor(b);
      const aDue = ar.nextReview <= now ? 1 : 0;
      const bDue = br.nextReview <= now ? 1 : 0;
      const aWeak = ar.attempts ? ar.wrong / ar.attempts : 0.35;
      const bWeak = br.attempts ? br.wrong / br.attempts : 0.35;
      return bDue - aDue || bWeak - aWeak || ar.nextReview - br.nextReview;
    })
    .slice(0, 7);
}

function getBossSkill() {
  const stats = allCards.reduce((acc, card) => {
    const review = reviewFor(card);
    if (!review.attempts) return acc;
    const rate = review.wrong / review.attempts;
    acc[card.skill] = (acc[card.skill] || 0) + rate;
    return acc;
  }, {});

  const [dominantSkill] = Object.entries(stats)
    .sort((a, b) => b[1] - a[1])
    .map(([skill]) => skill);
  return dominantSkill || "動詞";
}

function awardAchievement(id) {
  if (!state.game.achievements.includes(id)) {
    state.game.achievements.push(id);
  }
}

function refreshAchievements() {
  ACHIEVEMENTS.forEach((achievement) => {
    if (achievement.condition(state.game)) awardAchievement(achievement.id);
  });
  saveGameState();
}

function logRun(entry) {
  state.game.logs.unshift(`${getTodayKey()} ${entry}`);
  state.game.logs = state.game.logs.slice(0, 6);
  saveGameState();
}

function evaluateAndUnlockQuests({ totalCards, goodCount, isBossWin }) {
  const newlyCompleted = [];
  if (!state.game.daily.completedQuests.includes("review-any") && totalCards > 0) {
    state.game.daily.completedQuests.push("review-any");
    newlyCompleted.push("review-any");
  }
  if (!state.game.daily.completedQuests.includes("review-5") && totalCards >= 5) {
    state.game.daily.completedQuests.push("review-5");
    newlyCompleted.push("review-5");
  }
  if (!state.game.daily.completedQuests.includes("accuracy-4") && goodCount >= 4) {
    state.game.daily.completedQuests.push("accuracy-4");
    newlyCompleted.push("accuracy-4");
  }
  if (!state.game.daily.completedQuests.includes("boss-win") && isBossWin) {
    state.game.daily.completedQuests.push("boss-win");
    newlyCompleted.push("boss-win");
  }

  const rewardTotal = newlyCompleted.reduce((sum, questId) => {
    const quest = QUEST_DEFS.find((item) => item.id === questId);
    if (!quest) return sum;
    state.game.coins += quest.rewardCoins;
    return sum + quest.rewardXp;
  }, 0);
  if (newlyCompleted.length > 0) {
    logRun(`完成任務 ${newlyCompleted.join("、")}，獲得 ${rewardTotal} XP`);
  }
  return rewardTotal;
}

function addXp(points) {
  const prevLevel = Math.floor(state.game.xp / XP_LEVEL_STEP) + 1;
  state.game.xp += points;
  const nextLevel = Math.floor(state.game.xp / XP_LEVEL_STEP) + 1;
  if (nextLevel > prevLevel) state.game.level = nextLevel;
  return points;
}

function updateStreakForToday() {
  const today = getTodayKey();
  const yesterday = getTodayKey(new Date(NOW() - DAY));
  if (state.lastStudyDate === today) return;
  state.streak = state.lastStudyDate === yesterday ? state.streak + 1 : 1;
  state.lastStudyDate = today;
  saveAllProgress();
  $("#streakCount").textContent = state.streak;
}

function showView(name) {
  $$(".view").forEach((view) => view.classList.remove("active"));
  $$(".nav-link").forEach((link) => link.classList.toggle("active", link.dataset.view === name));
  $(`#${name}-view`).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startSession(setName = "due") {
  resetDailyIfNeeded();
  state.set = setName;
  state.index = 0;
  state.results = [];
  state.sessionMode = setName === "boss" ? "boss" : "normal";
  state.sessionSource = setName;
  if (setName === "boss") {
    state.session = buildBossSession();
    if (!state.session.length) {
      state.sessionMode = "normal";
      state.sessionSource = "due";
      state.session = buildSession("due");
    }
  } else {
    state.session = buildSession(setName);
  }
  if (!state.session.length) return showToast("這次暫無題目，先做一次一般複習吧。");
  renderQuestion();
  showView("review");
}

function buildBossSession() {
  const targetSkill = getBossSkill();
  const picked = [...allCards]
    .filter((card) => card.skill === targetSkill)
    .sort((a, b) => {
      const ar = reviewFor(a);
      const br = reviewFor(b);
      const aRate = ar.attempts ? ar.wrong / ar.attempts : 0;
      const bRate = br.attempts ? br.wrong / br.attempts : 0;
      return bRate - aRate;
    })
    .slice(0, 3);
  if (picked.length) {
    state.sessionMode = "boss";
    state.sessionSource = `boss:${targetSkill}`;
    return picked;
  }
  return [];
}

function renderQuestion() {
  const item = state.session[state.index];
  const review = reviewFor(item);
  $("#questionNumber").textContent = state.index + 1;
  $("#sessionTotal").textContent = state.session.length;
  $("#questionCategory").textContent = `${item.category} · ${item.skill}`;
  $("#promptLabel").textContent = item.label;
  $("#questionText").textContent = item.q;
  $("#answerText").textContent = item.a;
  $("#answerNote").textContent = item.note;
  $("#answerArea").classList.remove("visible");
  $("#grading").classList.remove("visible");
  $("#responseBox").style.display = "block";
  $("#typedAnswer").value = "";
  $("#typedAnswer").disabled = false;
  $("#checkAnswer").disabled = true;
  $("#aiReviewButton").disabled = true;
  setAiReviewStatus("先核對完答案，再點 AI 判別。");
  $("#inputHint").textContent = "輸入後才能核對答案";
  $("#goodInterval").textContent = `${nextGoodInterval(review.streak)} 天`;
  $("#sessionDots").innerHTML = state.session.map((_, i) =>
    `<span class="session-dot ${i < state.index ? "done" : i === state.index ? "current" : ""}"></span>`
  ).join("");
  setTimeout(() => $("#typedAnswer").focus(), 120);
}

function normalizeAnswer(text) {
  return text
    .toLocaleLowerCase("fr")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "'")
    .replace(/[.,!?;:()[\]"]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function levenshtein(a, b) {
  const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i]);
  for (let j = 0; j <= a.length; j += 1) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i += 1) {
    for (let j = 1; j <= a.length; j += 1) {
      matrix[i][j] = b[i - 1] === a[j - 1]
        ? matrix[i - 1][j - 1]
        : Math.min(matrix[i - 1][j - 1], matrix[i][j - 1], matrix[i - 1][j]) + 1;
    }
  }
  return matrix[b.length][a.length];
}

function answerScore(input, answer) {
  const a = normalizeAnswer(input);
  const b = normalizeAnswer(answer);
  if (!a || !b) return 0;
  return Math.max(0, Math.round((1 - levenshtein(a, b) / Math.max(a.length, b.length)) * 100));
}

function checkTypedAnswer() {
  const item = state.session[state.index];
  const input = $("#typedAnswer").value.trim();
  const score = answerScore(input, item.a);
  $("#userAnswerText").textContent = input;
  $("#matchScore").textContent = `${score}%`;
  $("#resultLabel").textContent = score >= 90 ? "非常接近" : score >= 70 ? "大致正確" : "需要再看一次";
  $("#answerArea").classList.add("visible");
  $("#grading").classList.add("visible");
  $("#typedAnswer").disabled = true;
  $("#checkAnswer").disabled = true;
  $("#aiReviewButton").disabled = false;
  $("#aiReviewOutput").textContent = "可點選 AI 判別錯誤，或先挑選複習頻率。";
  $("#inputHint").textContent = score >= 90 ? "很好，檢查冠詞與拼字" : `重點檢查：${item.skill}`;
  state.results[state.index] = { score, input };
}

function getOpenRouterApiKey() {
  const keyInput = $("#openRouterApiKey").value.trim();
  if (keyInput) {
    localStorage.setItem(OPENROUTER_KEY_KEY, keyInput);
    return keyInput;
  }
  return localStorage.getItem(OPENROUTER_KEY_KEY) || "";
}

function setAiReviewStatus(message) {
  $("#aiReviewOutput").textContent = message;
}

async function runOpenRouterReview() {
  const item = state.session[state.index];
  const current = state.results[state.index] || { score: 0, input: "" };
  if (!current.input) {
    checkTypedAnswer();
    return;
  }
  const key = getOpenRouterApiKey();
  if (!key) {
    setAiReviewStatus("請先在下方輸入 OpenRouter API Key 再使用 AI 判斷。");
    return;
  }

  setAiReviewStatus("AI 判斷中…");
  $("#aiReviewButton").disabled = true;

  try {
    const response = await fetch(OPENROUTER_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
        "HTTP-Referer": "https://encore-french-review.local",
        "X-Title": "Encore French Review",
      },
      body: JSON.stringify({
        model: OPENROUTER_MODEL,
        messages: [
          {
            role: "system",
            content: "你是法語學習助教。請用繁體中文回覆，只指出學生答案的錯誤點、正確寫法與一句可直接記憶的重點。",
          },
          {
            role: "user",
            content: `題目: ${item.q}\n建議答案: ${item.a}\n學生答案: ${current.input}\n題目類型: ${item.category} · ${item.skill}。請用以下格式回覆：\n1) 判斷（正確/有錯）\n2) 為什麼錯/哪裡不精準\n3) 建議修改後答案`,
          },
        ],
        temperature: 0.2,
        max_tokens: 350,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`OpenRouter API 錯誤：${response.status} ${errorText}`);
    }
    const data = await response.json();
    const suggestion = data?.choices?.[0]?.message?.content;
    if (!suggestion) throw new Error("回傳內容異常，請稍後再試。");
    setAiReviewStatus(suggestion);
  } catch (error) {
    setAiReviewStatus(`AI 判別失敗：${error.message}`);
  } finally {
    $("#aiReviewButton").disabled = false;
  }
}

function nextGoodInterval(streak) {
  return [3, 7, 14, 30][Math.min(streak, 3)];
}

function gradeAnswer(grade) {
  const item = state.session[state.index];
  const result = state.results[state.index] || { score: 0, input: "" };
  const current = reviewFor(item);
  const now = NOW();
  const correct = result.score >= 75;
  let nextReview;
  let interval;
  let streak;

  if (grade === "again") {
    interval = 0;
    nextReview = now + 10 * 60_000;
    streak = 0;
  } else if (grade === "hard") {
    interval = 1;
    nextReview = now + DAY;
    streak = Math.max(0, current.streak - 1);
  } else {
    interval = nextGoodInterval(current.streak);
    nextReview = now + interval * DAY;
    streak = current.streak + 1;
  }

  state.reviews[item.id] = {
    attempts: current.attempts + 1,
    correct: current.correct + (correct ? 1 : 0),
    wrong: current.wrong + (correct ? 0 : 1),
    streak,
    interval,
    nextReview,
    lastReviewed: now,
    lastScore: result.score,
    skill: item.skill,
  };
  saveReviews();
  renderMemoryStats();
  renderErrorDashboard();

  if (state.index < state.session.length - 1) {
    state.index += 1;
    renderQuestion();
    return;
  }

  const good = state.results.filter((resultItem) => resultItem?.score >= 75).length;
  const total = state.results.length;
  const isBossWin = state.sessionMode === "boss" && good === total;
  const baseXp = total * 10 + good * 4;
  addXp(baseXp);
  addXp(evaluateAndUnlockQuests({
    totalCards: total,
    goodCount: good,
    isBossWin,
  }));
  state.game.sessionsDone += 1;
  if (isBossWin) state.game.bossDefeated += 1;
  state.game.runStreak = good >= Math.max(1, Math.floor(total / 2)) ? state.game.runStreak + 1 : 0;
  updateStreakForToday();
  const title = isBossWin ? "BOSS 戰全勝" : "完成一般練習";
  state.game.logs = [`${title}：${good}/${total} 題，+${baseXp} XP`, ...state.game.logs].slice(0, 6);
  refreshAchievements();
  saveGameState();
  logRun(title);
  renderGameDashboard();
  renderErrorDashboard();
  renderMemoryStats();
  setTimeout(() => showView("today"), 900);
  showToast(`完成本回合：${good} / ${total} 題達到 75% 以上`);
}

function markCompleted(task) {
  if (!state.completed.includes(task)) state.completed.push(task);
  saveAllProgress();
  renderProgress();
}

function renderProgress() {
  $$(".task-card").forEach((card) =>
    card.classList.toggle("completed", state.completed.includes(card.dataset.task))
  );
  $("#completedCount").textContent = state.completed.length;
  $("#progressBar").style.width = `${(state.completed.length / 3) * 100}%`;
}

function renderGameDashboard() {
  const xpLevel = Math.max(1, Math.floor(state.game.xp / XP_LEVEL_STEP) + 1);
  const nextLevelXp = xpLevel * XP_LEVEL_STEP;
  const base = (xpLevel - 1) * XP_LEVEL_STEP;
  const current = state.game.xp - base;
  const left = nextLevelXp - state.game.xp;
  $("#gameLevel").textContent = xpLevel;
  $("#xpValue").textContent = state.game.xp;
  $("#xpNextText").textContent = left > 0 ? `距離下一級還有 ${left} XP` : "已達本級門檻";
  $("#xpBar").style.width = `${(current / XP_LEVEL_STEP) * 100}%`;
  $("#gameViewXp").textContent = state.game.xp;
  $("#gamesDone").textContent = state.game.sessionsDone;
  $("#bossDefeated").textContent = state.game.bossDefeated;
  $("#runStreak").textContent = `當前連勝：${state.game.runStreak}`;
  $("#goldCount").textContent = `金幣：${state.game.coins}`;
  $("#bossDefeated").textContent = state.game.bossDefeated;
  $("#bossSkill").textContent = getBossSkill();
  $("#bossHint").textContent = state.set === "boss" ? "你正在進行 BOSS 戰" : "回到弱點題目可解鎖";
  $("#bossBadge").textContent = state.game.bossDefeated > 0 ? "已解鎖" : "未解鎖";

  const streakText = state.streak
    ? `連續 ${state.streak} 天完成任務`
    : "開始你的第一次連續記錄";
  $("#dailyRunStatus").textContent = streakText;

  if ($("#questList")) {
    const completed = new Set(state.game.daily.completedQuests || []);
    $("#questList").innerHTML = QUEST_DEFS.map((quest) => {
      const done = completed.has(quest.id);
      const progress = done ? "完成" : `未完成`;
      return `<li class=\"quest-item\"><span class=\"quest-title\">${quest.title}</span><span class=\"quest-progress\">${progress}</span></li>`;
    }).join("");
  }

  if ($("#achievementList")) {
    $("#achievementList").innerHTML = ACHIEVEMENTS.map((achievement) => {
      const unlocked = state.game.achievements.includes(achievement.id);
      return `<span class=\"badge ${unlocked ? "unlocked" : ""}\">${achievement.icon} ${achievement.label}</span>`;
    }).join("");
  }

  if ($("#runLog")) {
    $("#runLog").innerHTML = state.game.logs.length
      ? state.game.logs.map((log) => `<p class=\"game-log-entry\">${log}</p>`).join("")
      : "<p>尚未有戰鬥紀錄</p>";
  }
}

function renderMemoryStats() {
  const now = NOW();
  const reviews = allCards.map((card) => reviewFor(card));
  const due = reviews.filter((review) => review.nextReview <= now).length;
  const mastered = reviews.filter((review) => review.streak >= 3).length;
  const weak = reviews.filter((review) => review.attempts >= 2 && review.wrong / review.attempts > 0.5).length;
  const scheduled = reviews.filter((review) => review.nextReview > now).sort((a, b) => a.nextReview - b.nextReview);

  $("#dueCount").textContent = due;
  $("#masteredCount").textContent = mastered;
  $("#weakCount").textContent = weak;
  $("#nextReviewText").textContent = scheduled.length
    ? `下一張將於 ${new Date(scheduled[0].nextReview).toLocaleDateString("zh-TW", { month: "numeric", day: "numeric" })} 到期`
    : "尚未開始作答，所有卡片今天到期";
}

function renderErrorDashboard() {
  const skills = ["動詞", "冠詞", "否定句", "句型", "拼字"];
  const totals = Object.values(state.reviews).reduce((acc, review) => {
    if (review.skill) acc[review.skill] = (acc[review.skill] || 0) + review.wrong;
    return acc;
  }, {});
  $("#errorDashboard").innerHTML = skills.map((skill) => `
    <div class="error-stat">
      <span>${skill}</span>
      <strong>${totals[skill] || 0}</strong>
      <small>累積需要再練次數</small>
    </div>
  `).join("");
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function renderContent() {
  $("#mistakeList").innerHTML = mistakes.map((item, index) => `
    <article class="mistake-row" tabindex="0">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <div>
        <p class="wrong">${item[0]}</p>
        <p class="correct">${item[1]}</p>
        <p class="reason">${item[2]}</p>
      </div>
      <b>＋</b>
    </article>
  `).join("");

  $("#classTimeline").innerHTML = classes.map((item) => `
    <article class="class-entry">
      <span class="class-date">${item[0]}</span>
      <div>
        <h3>${item[1]}</h3>
        <p>${item[2]}</p>
      </div>
      <button data-set="${item[3]}">複習 →</button>
    </article>
  `).join("");
}

function setDate() {
  const date = new Date();
  const weekdays = ["DIM.", "LUN.", "MAR.", "MER.", "JEU.", "VEN.", "SAM."];
  const months = ["JAN.", "FÉV.", "MAR.", "AVR.", "MAI", "JUIN", "JUIL.", "AOÛT", "SEPT.", "OCT.", "NOV.", "DÉC."];
  $("#monthLabel").textContent = months[date.getMonth()];
  $("#dayLabel").textContent = String(date.getDate()).padStart(2, "0");
  $("#weekdayLabel").textContent = weekdays[date.getDay()];
  $("#streakCount").textContent = state.streak;
}

$$(".nav-link").forEach((link) => link.addEventListener("click", () => showView(link.dataset.view)));
$("#startReview").addEventListener("click", () => startSession("due"));
$("#bossStart").addEventListener("click", () => startSession("boss"));
$("#exitReview").addEventListener("click", () => showView("today"));
$("#typedAnswer").addEventListener("input", (event) => {
  const hasText = event.target.value.trim().length > 0;
  $("#checkAnswer").disabled = !hasText;
  $("#inputHint").textContent = hasText ? "完成後核對，不要求重音完全一致" : "輸入後才能核對答案";
});
$("#typedAnswer").addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter" && !$("#checkAnswer").disabled) checkTypedAnswer();
});
$("#checkAnswer").addEventListener("click", checkTypedAnswer);
$("#aiReviewButton").addEventListener("click", runOpenRouterReview);
$("#exportProgressJson").addEventListener("click", () => {
  exportProgressAsJson();
  setProgressBackupStatus(`已下載 JSON 備份（${new Date().toLocaleString("zh-TW", { hour12: false })}）。`);
});
$("#copyProgressJson").addEventListener("click", async () => {
  const payload = buildExportPayload();
  await copyTextToClipboard(JSON.stringify(payload, null, 2), "法語進度 JSON");
});
$("#exportProgressMarkdown").addEventListener("click", () => {
  exportProgressAsMarkdown();
  setProgressBackupStatus("已下載 Obsidian 用的 .md 備份，直接貼到「LLM使用情況.md」即可。");
});
$("#copyProgressMarkdown").addEventListener("click", async () => {
  const payload = buildExportPayload();
  await copyTextToClipboard(buildObsidianMarkdownPayload(payload), "Obsidian 進度文字");
});
$("#importProgressBtn").addEventListener("click", () => {
  $("#progressBackupFile").click();
});
$("#progressBackupFile").addEventListener("change", (event) => {
  const [file] = event.target.files || [];
  if (!file) return;
  importProgressFile(file);
  event.target.value = "";
});
$("#pasteProgressBtn").addEventListener("click", pasteProgressFromClipboard);
$("#connectGithubSync").addEventListener("click", connectGitHubSync);
$("#syncGithubNow").addEventListener("click", () => syncGitHubProgress({ push: true, verify: true }));
$("#loadGithubProgress").addEventListener("click", () => syncGitHubProgress({ push: false, verify: true }));
$("#disconnectGithubSync").addEventListener("click", disconnectGitHubSync);
$("#saveOpenRouterKey").addEventListener("click", () => {
  const key = getOpenRouterApiKey();
  if (!key) {
    setAiReviewStatus("請先輸入 OpenRouter API Key。");
    return;
  }
  setAiReviewStatus("已儲存金鑰，現在可用 AI 判別。");
  localStorage.setItem(OPENROUTER_KEY_KEY, key);
});

$$("[data-grade]").forEach((button) =>
  button.addEventListener("click", () => gradeAnswer(button.dataset.grade))
);

$$(".task-launch, .weakness-chip").forEach((button) =>
  button.addEventListener("click", () => startSession(button.dataset.set))
);

$$(".task-check").forEach((button) =>
  button.addEventListener("click", () => {
    const task = button.closest(".task-card").dataset.task;
    if (state.completed.includes(task)) {
      state.completed = state.completed.filter((item) => item !== task);
      saveAllProgress();
      renderProgress();
    } else {
      markCompleted(task);
      showToast("已記錄今天的複習進度");
    }
  })
);

$("#speakPrompt").addEventListener("click", () => {
  if (!("speechSynthesis" in window)) return showToast("此瀏覽器不支援語音播放");
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance($("#questionText").textContent);
  utterance.lang = "fr-FR";
  speechSynthesis.speak(utterance);
});

$("#mistakeList").addEventListener("click", (event) => {
  const row = event.target.closest(".mistake-row");
  if (!row) return;
  row.classList.toggle("open");
  row.querySelector("b").textContent = row.classList.contains("open") ? "−" : "＋";
});

$("#mistakeList").addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") event.target.click();
});

$("#classTimeline").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-set]");
  if (button) startSession(button.dataset.set);
});

renderContent();
renderProgress();
renderMemoryStats();
renderErrorDashboard();
refreshAchievements();
renderGameDashboard();
setDate();
$("#openRouterApiKey").value = localStorage.getItem(OPENROUTER_KEY_KEY) || "";
if (!localStorage.getItem(PROGRESS_BACKUP_KEY)) saveAllProgress({ syncCloud: false });
initializeGitHubSyncUi();
setProgressBackupStatus("每次完成題目都會寫入本機，同步可用複製/貼上備份跨設備還原。");
