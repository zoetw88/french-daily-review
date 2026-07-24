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
  etrePast: [
    { category: "PASSÉ COMPOSÉ", skill: "助動詞 être", label: "請翻譯成法文（以 Zoe 的身分回答）", q: "我昨天晚上去了餐廳。", a: "Hier soir, je suis allée au restaurant.", note: "aller 使用 être；Zoe 是女性，所以用 allée。" },
    { category: "CORRECTION", skill: "過去分詞", label: "找出並修正錯誤", q: "Ils sont tombent dan la rue.", a: "Ils sont tombés dans la rue.", note: "être 後使用過去分詞 tombés；拼作 dans。" },
    { category: "PASSÉ COMPOSÉ", skill: "性數配合", label: "請翻譯成法文（以 Zoe 的身分回答）", q: "我下午兩點到車站。", a: "Je suis arrivée à la gare à quatorze heures.", note: "arriver 使用 être；女性單數加 -e。" },
    { category: "PASSÉ COMPOSÉ", skill: "助動詞選擇", label: "請修正助動詞", q: "Je suis acheté un plan.", a: "J’ai acheté un plan.", note: "acheter 是一般動作，使用 avoir。" },
    { category: "PASSÉ COMPOSÉ", skill: "直接受詞", label: "請修正句子", q: "Il est monté les escaliers.", a: "Il a monté les escaliers.", note: "monter 後有直接受詞 les escaliers，因此使用 avoir。" },
    { category: "QUESTIONS", skill: "過去問句", label: "請根據答案提出問題", q: "Hier soir, je suis allée au cinéma.", a: "Où êtes-vous allée hier soir ?", note: "問地點用 où；hier soir 前不加 au。" },
    { category: "CORRECTION", skill: "省音", label: "找出並修正錯誤", q: "Quand est-ce elle est venuee ?", a: "Quand est-ce qu’elle est venue ?", note: "que + elle 要省音成 qu’elle；venir 的陰性過去分詞是 venue。" },
    { category: "EXPRESSION", skill: "旅行敘事", label: "請用三個事件完成巴黎行程", q: "到巴黎 → 買地圖 → 搭地鐵", a: "Je suis arrivée à Paris, j’ai acheté un plan et j’ai pris le métro.", note: "arriver 用 être；acheter、prendre 用 avoir。" },
    { category: "TEMPS", skill: "時間表達", label: "請翻譯成法文", q: "他們兩天後回來。", a: "Ils rentrent dans deux jours.", note: "dans + 一段時間表示多久以後。" },
  ],
  futureNear: [
    { id: "future-near-form", phase: "advance", category: "A2 · GRAMMAIRE", skill: "futur proche", label: "完成句子", q: "Je ___ visiter Montréal demain. (aller)", a: "Je vais visiter Montréal demain.", note: "近期計畫使用 aller 現在式 + 動詞原形。" },
    { id: "future-near-listen", phase: "input", listenOnly: true, audioText: "Ce soir, nous allons préparer le dîner ensemble.", category: "A2 · ÉCOUTE", skill: "futur proche", label: "點「聽題目」兩次後，寫出完整句子", q: "Ce soir, nous allons préparer le dîner ensemble.", a: "Ce soir, nous allons préparer le dîner ensemble.", note: "先抓時間 Ce soir，再辨認 allons + préparer。" },
    { id: "future-near-output", phase: "output", openEnded: true, category: "A2 · EXPRESSION", skill: "計畫表達", label: "用三句說明你明天的計畫；答案是參考範例", q: "明天早上 → 工作；下午 → 運動；晚上 → 學法文", a: "Demain matin, je vais travailler. L’après-midi, je vais faire du sport. Le soir, je vais étudier le français.", note: "每句都用時間詞 + aller + 動詞原形。" },
    { id: "future-near-fluency", phase: "fluency", openEnded: true, category: "A2 · FLUIDITÉ", skill: "即時回答", label: "先口說 30 秒，再輸入一個完整回答", q: "Qu’est-ce que tu vas faire ce week-end ?", a: "Ce week-end, je vais me reposer, voir des amis et préparer mes cours.", note: "不要逐字翻譯；連續說完再看參考答案。" },
  ],
  recentPast: [
    { id: "recent-past-form", phase: "advance", category: "A2 · GRAMMAIRE", skill: "passé récent", label: "完成句子", q: "Je ___ finir mon cours. (venir de)", a: "Je viens de finir mon cours.", note: "剛剛完成的事：venir de + 動詞原形。" },
    { id: "recent-past-listen", phase: "input", listenOnly: true, audioText: "Ils viennent d’arriver à la gare.", category: "A2 · ÉCOUTE", skill: "passé récent", label: "聽完寫下他們剛做完的事", q: "Ils viennent d’arriver à la gare.", a: "Ils viennent d’arriver à la gare.", note: "ils 的 venir 是 viennent；de 在母音前省音成 d’。" },
    { id: "recent-past-output", phase: "output", openEnded: true, category: "A2 · EXPRESSION", skill: "passé récent", label: "用三句說你剛做完的事", q: "吃完早餐 → 回完訊息 → 開始學法文", a: "Je viens de prendre mon petit déjeuner. Je viens de répondre à mes messages. Je viens de commencer à étudier le français.", note: "重複 venir de 的結構，讓它變成自動反應。" },
    { id: "recent-past-fluency", phase: "fluency", openEnded: true, category: "A2 · FLUIDITÉ", skill: "即時回答", label: "不準備，立即回答", q: "Qu’est-ce que tu viens de faire ?", a: "Je viens de terminer mon cours de français.", note: "回答一件真的剛發生的事即可。" },
  ],
  objectPronouns: [
    { id: "object-pronoun-form", phase: "advance", category: "A2 · GRAMMAIRE", skill: "COD 代名詞", label: "避免重複名詞", q: "Je prends le métro. → Je ___ prends.", a: "Je le prends.", note: "le 取代陽性單數 le métro，放在動詞前。" },
    { id: "object-pronoun-reading", phase: "input", category: "A2 · LECTURE", skill: "COD 代名詞", label: "閱讀後回答完整句", q: "Léa achète une carte. Ensuite, elle la regarde dans le métro. Que fait-elle avec la carte ?", a: "Elle la regarde dans le métro.", note: "la 指前面的 une carte。" },
    { id: "object-pronoun-output", phase: "output", openEnded: true, category: "A2 · EXPRESSION", skill: "COD 代名詞", label: "用代名詞回答三個問題", q: "Tu lis le livre ? Tu prends la voiture ? Tu connais ces personnes ?", a: "Oui, je le lis. Non, je ne la prends pas. Oui, je les connais.", note: "陽性 le、陰性 la、複數 les，都放在動詞前。" },
    { id: "object-pronoun-fluency", phase: "fluency", openEnded: true, category: "A2 · FLUIDITÉ", skill: "代名詞自動化", label: "快速回答，不要重複題目中的名詞", q: "Tu aimes le café ? Tu regardes la télévision ? Tu portes tes lunettes ?", a: "Oui, je l’aime. Non, je ne la regarde pas. Oui, je les porte.", note: "母音前 le / la 省音成 l’。" },
  ],
  comparatives: [
    { id: "comparative-form", phase: "advance", category: "A2 · GRAMMAIRE", skill: "比較級", label: "完成比較句", q: "Le train est ___ rapide ___ le bus.", a: "Le train est plus rapide que le bus.", note: "比較級：plus / moins / aussi + 形容詞 + que。" },
    { id: "comparative-reading", phase: "input", category: "A2 · LECTURE", skill: "比較級", label: "讀短文後回答", q: "Cet appartement est moins cher que l’autre, mais il est plus petit. Quel est son avantage ?", a: "Il est moins cher que l’autre.", note: "moins cher 表示比較便宜。" },
    { id: "comparative-output", phase: "output", openEnded: true, category: "A2 · EXPRESSION", skill: "比較級", label: "用三句比較台灣與加拿大", q: "天氣、城市大小、生活費", a: "Le Canada est plus grand que Taïwan. L’hiver y est plus froid. La vie au Canada peut être plus chère qu’à Taïwan.", note: "每句只比較一個面向，先求清楚再求複雜。" },
    { id: "comparative-fluency", phase: "fluency", openEnded: true, category: "A2 · FLUIDITÉ", skill: "比較表達", label: "連續說 45 秒，再輸入最完整的一句", q: "Tu préfères étudier seule ou avec un professeur ? Pourquoi ?", a: "Je préfère étudier avec un professeur parce que les échanges sont plus interactifs et qu’il est plus facile de corriger mes erreurs.", note: "用 préférence + 比較 + parce que 組成回答。" },
  ],
  imperativeDirections: [
    { id: "imperative-form", phase: "advance", category: "A2 · GRAMMAIRE", skill: "命令式", label: "把提示變成指示", q: "vous / tourner à gauche →", a: "Tournez à gauche.", note: "vous 的命令式通常保留現在式字尾 -ez，不寫主詞。" },
    { id: "imperative-listen", phase: "input", listenOnly: true, audioText: "Continuez tout droit, puis prenez la deuxième rue à droite.", category: "A2 · ÉCOUTE", skill: "問路", label: "聽完寫下完整路線", q: "Continuez tout droit, puis prenez la deuxième rue à droite.", a: "Continuez tout droit, puis prenez la deuxième rue à droite.", note: "先抓順序詞 puis，再抓方向 à droite。" },
    { id: "imperative-output", phase: "output", openEnded: true, category: "A2 · EXPRESSION", skill: "問路", label: "從車站指引朋友到咖啡館", q: "直走 → 左轉 → 咖啡館在銀行旁", a: "Allez tout droit, tournez à gauche et continuez cent mètres. Le café est à côté de la banque.", note: "指示用命令式，位置用 à côté de。" },
    { id: "imperative-fluency", phase: "fluency", openEnded: true, category: "A2 · FLUIDITÉ", skill: "生活任務", label: "模擬 45 秒問路對話", q: "Vous êtes perdue près de la gare. Demandez le chemin et vérifiez une direction.", a: "Excusez-moi, comment est-ce que je peux aller au musée ? Je tourne à droite après la banque, c’est bien ça ?", note: "這也是 TCF 口說第二題需要的主動問資訊能力。" },
  ],
  reflexivePast: [
    { id: "reflexive-past-form", phase: "advance", category: "A2 · GRAMMAIRE", skill: "反身動詞過去式", label: "改成昨天發生的事（Zoe）", q: "Je me lève à sept heures.", a: "Je me suis levée à sept heures.", note: "反身動詞的 passé composé 使用 être；女性加 e。" },
    { id: "reflexive-past-reading", phase: "input", category: "A2 · LECTURE", skill: "反身動詞過去式", label: "閱讀後回答", q: "Hier, Léa s’est réveillée tard, puis elle s’est habillée rapidement. Pourquoi s’est-elle habillée rapidement ?", a: "Parce qu’elle s’est réveillée tard.", note: "先找原因，再注意女性過去分詞的 -e。" },
    { id: "reflexive-past-output", phase: "output", openEnded: true, category: "A2 · EXPRESSION", skill: "日常敘事", label: "用 passé composé 串起四個動作", q: "起床 → 洗澡 → 穿衣 → 出門", a: "Je me suis levée, je me suis douchée, je me suis habillée et je suis sortie.", note: "同一主詞連續敘事，可以省略重複時間詞。" },
    { id: "reflexive-past-fluency", phase: "fluency", openEnded: true, category: "A2 · FLUIDITÉ", skill: "過去敘事", label: "連續說 60 秒，再寫下其中一句", q: "Raconte ta matinée d’hier.", a: "Hier matin, je me suis réveillée à sept heures et je me suis préparée rapidement.", note: "先按時間順序說，不要邊說邊翻譯每個字。" },
  ],
  imperfectIntro: [
    { id: "imperfect-form", phase: "advance", category: "B1 · PRÉVIEW", skill: "imparfait", label: "完成背景描述", q: "Quand j’étais petite, je ___ souvent au parc. (aller)", a: "Quand j’étais petite, j’allais souvent au parc.", note: "imparfait 描述過去習慣或背景；nous allons 去掉 -ons 再加 -ais。" },
    { id: "imperfect-reading", phase: "input", category: "B1 · LECTURE", skill: "imparfait", label: "找出過去背景", q: "Il faisait froid et les rues étaient calmes. Léa attendait le bus. Comment était la ville ?", a: "Il y faisait froid et la ville était calme.", note: "faisait、étaient、attendait 都在建立背景。" },
    { id: "imperfect-output", phase: "output", openEnded: true, category: "B1 · EXPRESSION", skill: "過去習慣", label: "用三項資訊描述小時候", q: "住哪裡、常做什麼、喜歡什麼", a: "Quand j’étais petite, j’habitais à Taïwan. Je jouais souvent avec mes amis et j’aimais beaucoup lire.", note: "使用 imparfait 說持續狀態與重複習慣。" },
    { id: "imperfect-fluency", phase: "fluency", openEnded: true, category: "B1 · FLUIDITÉ", skill: "背景描述", label: "看著房間，連續描述 45 秒", q: "Comment était ta chambre quand tu étais enfant ?", a: "Ma chambre était petite mais lumineuse. Il y avait un bureau près de la fenêtre.", note: "用 était、avait、il y avait 建立畫面。" },
  ],
  pastContrast: [
    { id: "past-contrast-form", phase: "advance", category: "B1 · PRÉVIEW", skill: "兩種過去式", label: "選擇正確時態", q: "Il ___ quand je ___. (pleuvoir / sortir)", a: "Il pleuvait quand je suis sortie.", note: "背景用 imparfait；突然完成的事件用 passé composé。" },
    { id: "past-contrast-reading", phase: "input", category: "B1 · LECTURE", skill: "兩種過去式", label: "閱讀後指出突發事件", q: "Je lisais tranquillement quand mon téléphone a sonné. Qu’est-ce qui a interrompu la lecture ?", a: "Mon téléphone a sonné.", note: "lisais 是進行中的背景；a sonné 是打斷它的事件。" },
    { id: "past-contrast-output", phase: "output", openEnded: true, category: "B1 · EXPRESSION", skill: "故事結構", label: "寫一段「背景＋事件＋結果」", q: "下雨 → 公車沒來 → 搭計程車", a: "Il pleuvait et j’attendais le bus. Comme il n’est pas arrivé, j’ai pris un taxi.", note: "背景用 imparfait，事件鏈用 passé composé。" },
    { id: "past-contrast-fluency", phase: "fluency", openEnded: true, category: "B1 · FLUIDITÉ", skill: "故事敘述", label: "連續說 60–90 秒", q: "Raconte un petit problème qui est arrivé pendant un voyage.", a: "Je visitais Montréal quand j’ai perdu mon téléphone. Heureusement, une personne l’a trouvé et me l’a rendu.", note: "這是從 A2 敘事走向 TCF 口說的關鍵能力。" },
  ],
  pronounsYEn: [
    { id: "pronouns-y-en-form", phase: "advance", category: "B1 · PRÉVIEW", skill: "y / en", label: "用代名詞避免重複", q: "Tu vas à Paris ? Oui, je ___ vais. Tu veux du café ? Oui, j’___ veux.", a: "Oui, j’y vais. Oui, j’en veux.", note: "y 取代 à + 地點；en 取代 de / du / de la / des + 名詞。" },
    { id: "pronouns-y-en-reading", phase: "input", category: "B1 · LECTURE", skill: "y / en", label: "找出代名詞指什麼", q: "Léa parle de son voyage et elle en montre des photos. Que montre-t-elle ?", a: "Elle montre des photos de son voyage.", note: "en 指 de son voyage。" },
    { id: "pronouns-y-en-output", phase: "output", openEnded: true, category: "B1 · EXPRESSION", skill: "y / en", label: "用 y 或 en 回答", q: "Tu vas souvent au marché ? Tu achètes des légumes ? Tu parles de tes cours ?", a: "Oui, j’y vais souvent. Oui, j’en achète. Oui, j’en parle.", note: "先辨認介系詞 à 或 de，再選 y / en。" },
    { id: "pronouns-y-en-fluency", phase: "fluency", openEnded: true, category: "B1 · FLUIDITÉ", skill: "代名詞自動化", label: "快速連答三題", q: "Tu habites à Taipei ? Tu rêves du Canada ? Tu bois beaucoup de café ?", a: "Oui, j’y habite. Oui, j’en rêve. Non, je n’en bois pas beaucoup.", note: "否定時代名詞仍放在動詞前。" },
  ],
  politeRequests: [
    { id: "polite-request-form", phase: "advance", category: "B1 · PRÉVIEW", skill: "conditionnel de politesse", label: "把要求變得有禮貌", q: "Je veux réserver une chambre.", a: "Je voudrais réserver une chambre.", note: "je voudrais 比 je veux 更適合服務情境與 TCF 互動題。" },
    { id: "polite-request-listen", phase: "input", listenOnly: true, audioText: "Pourriez-vous me dire si le petit déjeuner est inclus ?", category: "B1 · ÉCOUTE", skill: "禮貌問句", label: "聽完寫下問題", q: "Pourriez-vous me dire si le petit déjeuner est inclus ?", a: "Pourriez-vous me dire si le petit déjeuner est inclus ?", note: "Pourriez-vous… 是非常實用的禮貌問資訊句型。" },
    { id: "polite-request-output", phase: "output", openEnded: true, category: "TCF · ORAL", skill: "資訊詢問", label: "向旅館問四個問題", q: "價格、早餐、退房時間、交通", a: "Quel est le prix par nuit ? Est-ce que le petit déjeuner est inclus ? À quelle heure faut-il quitter la chambre ? Pourriez-vous m’expliquer comment aller à la gare ?", note: "TCF 口說第二題要主動取得資訊，不是只回答考官。" },
    { id: "polite-request-fluency", phase: "fluency", openEnded: true, category: "TCF · FLUIDITÉ", skill: "互動任務", label: "縮短版：準備 45 秒，互動 90 秒", q: "Vous téléphonez pour vous inscrire à un cours de français. Demandez les informations nécessaires.", a: "Je voudrais m’inscrire à votre cours. Quels sont les horaires ? Combien coûte la formation ? Quel est le niveau demandé ? Est-ce que les livres sont inclus ?", note: "正式 TCF 任務 2 是準備 2 分鐘、互動 3 分 30 秒；這裡先練主動問資訊。" },
  ],
  opinionBuilder: [
    { id: "opinion-builder-form", phase: "advance", category: "B1 · PRÉVIEW", skill: "意見架構", label: "把四部分排成完整回答", q: "例子 → 結論 → 意見 → 理由", a: "意見 → 理由 → 例子 → 結論", note: "TCF 口說與寫作需要清楚展開觀點，不只說 oui / non。" },
    { id: "opinion-builder-reading", phase: "input", category: "B1 · LECTURE", skill: "論證", label: "找出作者的理由", q: "À mon avis, les cours en ligne sont utiles parce qu’ils permettent d’étudier partout. Par exemple, on peut apprendre pendant un voyage. Pourquoi l’auteur les trouve-t-il utiles ?", a: "Parce qu’ils permettent d’étudier partout.", note: "parce que 後面通常就是理由；par exemple 引出證據。" },
    { id: "opinion-builder-output", phase: "output", openEnded: true, category: "TCF · EXPRESSION", skill: "表達意見", label: "用四部分回答：意見、理由、例子、結論", q: "Est-il préférable d’étudier une langue seul ou avec un professeur ?", a: "À mon avis, il est préférable d’étudier avec un professeur, car on reçoit des corrections précises. Par exemple, un professeur peut repérer des erreurs que l’on ne remarque pas soi-même. C’est pourquoi je préfère combiner les cours et la révision autonome.", note: "先用固定骨架建立連貫，再逐步增加細節。" },
    { id: "opinion-builder-fluency", phase: "fluency", openEnded: true, category: "TCF · FLUIDITÉ", skill: "即席論證", label: "縮短版：無準備說 90 秒，訂正後再說", q: "Les réseaux sociaux sont-ils utiles pour apprendre ?", a: "Ils peuvent être utiles si l’on choisit de bonnes sources, mais ils peuvent aussi distraire. Il faut donc les utiliser avec un objectif précis.", note: "正式 TCF 任務 3 是無準備表達 4 分 30 秒；第二次重說應更順。" },
  ],
  tcfMessage: [
    { id: "tcf-message-form", phase: "advance", category: "TCF · ÉCRIT", skill: "寫作任務 1", label: "記住官方格式", q: "TCF Canada 寫作任務 1 的字數範圍是？", a: "60 à 120 mots.", note: "必須完成題意並符合字數；少於最低字數可能被判為未達 A1。" },
    { id: "tcf-message-reading", phase: "input", category: "TCF · LECTURE", skill: "分析題目", label: "找出收件人與三個必寫資訊", q: "Vous écrivez à une amie pour l’inviter à Taipei. Indiquez les dates, proposez deux activités et expliquez où elle peut loger.", a: "收件人是朋友；必須寫日期、兩個活動和住宿安排。", note: "先圈出收件人、目的與所有指令，再開始寫。" },
    { id: "tcf-message-output", phase: "output", openEnded: true, category: "TCF · ÉCRIT", skill: "寫作任務 1", label: "寫 60–80 字；答案僅為結構範例", q: "邀請朋友來台北：日期、活動、住宿", a: "Salut Léa, je t’invite à venir à Taipei cet été, du 10 au 15 août. Nous pourrons visiter le Musée national du Palais, aller au marché de nuit et goûter des spécialités taïwanaises dans mon quartier. Tu peux rester chez moi, car j’ai une chambre libre. Dis-moi si ces dates te conviennent. J’espère vraiment que tu pourras venir ! À bientôt, Zoe", note: "檢查是否完成三項指令、稱呼與結尾，而不是逐字比對範例。" },
    { id: "tcf-message-fluency", phase: "fluency", openEnded: true, category: "TCF · ORAL", skill: "口說任務 1", label: "縮短版：無準備回答四個自我問題", q: "Comment vous appelez-vous ? Où habitez-vous ? Que faites-vous pendant votre temps libre ? Pourquoi apprenez-vous le français ?", a: "Je m’appelle Zoe et je vis à Taïwan. J’étudie le français parce que je prépare un projet au Canada. Pendant mon temps libre, j’aime faire du sport, visiter de nouveaux endroits et voir mes amis. Je prends des cours particuliers et je révise chaque jour. Mon objectif est de communiquer avec confiance et d’atteindre le niveau B2 au TCF Canada.", note: "正式 TCF 任務 1 是無準備、由考官引導的 2 分鐘訪談；不要背一篇固定稿。" },
  ],
  relativeReformulation: [
    { id: "relative-reformulation-form", phase: "advance", category: "B1 · GRAMMAIRE", skill: "關係代名詞", label: "用 dont 合併兩句，避免重複", q: "J’ai choisi un cours. Le professeur de ce cours corrige chaque erreur.", a: "J’ai choisi un cours dont le professeur corrige chaque erreur.", note: "dont 取代 de ce cours；後面可以接名詞主詞：dont le professeur…" },
    { id: "relative-reformulation-reading", phase: "input", category: "B1 · LECTURE", skill: "qui / que / dont / où", label: "找出四個關係代名詞分別指什麼", q: "Le cours que j’ai choisi se déroule dans une école qui propose des ateliers. La professeure dont je t’ai parlé y enseigne dans une salle où les élèves peuvent travailler en groupe.", a: "que = le cours ; qui = une école ; dont = la professeure ; où = une salle.", note: "先找先行詞，再判斷它在子句中是主詞、受詞、de 的補語或地點。" },
    { id: "relative-reformulation-output", phase: "output", openEnded: true, category: "B1 · EXPRESSION", skill: "句子改寫", label: "用關係代名詞改寫成連貫短文", q: "我選了一間朋友推薦、提供晚間課程的學校。我在那裡遇到一位會清楚解釋文法的老師。", a: "J’ai choisi une école qu’une amie m’a recommandée et où l’on propose des cours du soir. J’y ai rencontré une professeure qui explique clairement la grammaire.", note: "recommandée 要與前置的陰性先行詞 une école 配合；不要把每個資訊都拆成短句。" },
    { id: "relative-reformulation-fluency", phase: "fluency", openEnded: true, category: "B1 · FLUIDITÉ", skill: "即席改寫", label: "連續說 90 秒，至少使用 qui、que、dont、où 各一次", q: "Présente une expérience d’apprentissage qui t’a aidée à progresser.", a: "Le cours dont je me souviens le mieux est celui où j’ai commencé à parler sans traduire. La professeure qui l’animait proposait des activités que je pouvais réutiliser chez moi.", note: "目標是把資訊嵌入句子而不失去清楚度，不是一次堆很多從句。" },
  ],
  hypothesisNuance: [
    { id: "hypothesis-nuance-form", phase: "advance", category: "B1 · GRAMMAIRE", skill: "假設與條件式", label: "完成假設句", q: "Si les transports publics étaient plus fréquents, davantage de personnes les ___. (utiliser)", a: "Si les transports publics étaient plus fréquents, davantage de personnes les utiliseraient.", note: "現在不確定的假設：si + imparfait，主句用 conditionnel présent；si 子句不能用 conditionnel。" },
    { id: "hypothesis-nuance-listen", phase: "input", listenOnly: true, audioText: "Certes, le télétravail réduit les trajets. Toutefois, il peut isoler certains salariés. Il me semble donc utile, à condition qu’il soit limité à quelques jours par semaine.", category: "B1 · ÉCOUTE", skill: "語氣辨識", label: "聽完後，用一句話改述說話者的真正立場", q: "Certes, le télétravail réduit les trajets. Toutefois, il peut isoler certains salariés. Il me semble donc utile, à condition qu’il soit limité à quelques jours par semaine.", a: "La locutrice juge le télétravail utile s’il est encadré et limité à quelques jours par semaine.", note: "certes 承認優點，toutefois 引出限制，à condition que 表示有條件支持。" },
    { id: "hypothesis-nuance-output", phase: "output", openEnded: true, category: "B1+ · EXPRESSION", skill: "有條件立場", label: "寫出支持、限制與可行條件", q: "大眾運輸免費：優點是公平、減少開車；限制是成本；請提出有條件的立場。", a: "Je serais favorable à la gratuité des transports si son financement était durable. Certes, cette mesure pourrait réduire l’usage de la voiture et faciliter les déplacements des personnes aux revenus modestes. Toutefois, elle coûterait cher ; il faudrait donc l’expérimenter avant de la généraliser.", note: "B2 立場不必絕對；用假設、讓步和條件表達精確程度。" },
    { id: "hypothesis-nuance-fluency", phase: "fluency", openEnded: true, category: "B1+ · FLUIDITÉ", skill: "細緻論述", label: "無準備說 2 分鐘：立場、條件、限制、結論", q: "Faut-il autoriser le télétravail toute la semaine ?", a: "À première vue, cette solution semble flexible. Néanmoins, si le télétravail était généralisé sans limite, certains employés risqueraient de s’isoler. Je l’accepterais donc à condition que les équipes se réunissent régulièrement.", note: "避免只說 oui 或 non；加入 cela dépend、si、néanmoins、à condition que 等語言工具。" },
  ],
  viewpointSynthesis: [
    { id: "viewpoint-synthesis-form", phase: "advance", category: "B2 · REFORMULATION", skill: "換句話說", label: "改變詞彙與句型，不可照抄原句", q: "Document 1 : « Le téléphone aide les élèves à chercher rapidement une information. » Reformulez sans reprendre « aide » ni « rapidement ».", a: "Selon le premier document, le téléphone permet aux élèves d’accéder immédiatement à une information.", note: "真正的 reformulation 會同時改變句型與詞彙，而不是只替換一個同義詞。" },
    { id: "viewpoint-synthesis-reading", phase: "input", category: "B2 · LECTURE", skill: "雙觀點辨識", label: "指出共同主題與主要分歧", q: "Document 1 — Le téléphone permet de rechercher une information pendant une activité et de contacter sa famille en cas de besoin. Selon cet auteur, un usage encadré est plus utile qu’une interdiction générale. Document 2 — Les notifications interrompent la concentration et les élèves échangent moins lorsqu’ils gardent leur écran à portée de main. L’école devrait donc interdire le téléphone, sauf en cas d’urgence.", a: "Les deux documents traitent du téléphone à l’école. Le premier défend un usage encadré, tandis que le second recommande son interdiction, sauf en cas d’urgence.", note: "先找共同問題，再找立場、理由及兩者真正不同之處。" },
    { id: "viewpoint-synthesis-output", phase: "output", openEnded: true, category: "TCF · ÉCRIT", skill: "任務 3 第一部分", label: "只寫 40–60 字：中立綜合兩個觀點，不加入自己的意見", q: "Doc. 1：手機可用於查資料和聯絡家人，但需要規範。Doc. 2：手機妨礙專注與同學互動，除緊急情況外應禁止。", a: "Le premier document considère le téléphone comme un outil pratique pour rechercher des informations et contacter sa famille. Le second souligne cependant qu’il perturbe l’attention et les échanges entre élèves. Les deux textes s’intéressent donc à son usage scolaire, mais ils mettent l’accent sur des conséquences opposées.", note: "範例為 47 字；第一部分只能呈現來源觀點，不能提前寫 je pense 或 à mon avis。" },
    { id: "viewpoint-synthesis-fluency", phase: "fluency", openEnded: true, category: "B2 · MÉDIATION", skill: "口頭綜合", label: "先看 30 秒，再不看提示口頭改述 90 秒", q: "觀點一：受規範的手機可支援學習與聯絡。觀點二：手機傷害專注與人際互動，應原則禁止。", a: "Le premier auteur estime que le téléphone peut servir à apprendre et à joindre sa famille si son utilisation est encadrée. Le second considère au contraire que cet objet nuit à la concentration et aux relations entre élèves. Les deux documents évaluent donc le même outil, mais n’en retiennent pas les mêmes effets.", note: "這一輪只做中立綜合；刻意不加入自己的立場，避免混淆來源和個人意見。" },
  ],
  tcfTask3B2: [
    { id: "tcf-task3-b2-form", phase: "advance", category: "B2 · ARGUMENTATION", skill: "論證骨架", label: "排列一段 B2 論證的順序", q: "En conclusion → Par exemple → Certes → À mon avis → En effet", a: "À mon avis → En effet → Par exemple → Certes… mais… → En conclusion.", note: "先表明立場，再給理由和例子；之後承認反方並回應，最後才下結論。" },
    { id: "tcf-task3-b2-listen", phase: "input", listenOnly: true, audioText: "Certes, le télétravail offre plus de souplesse et réduit les déplacements. Cependant, il ne convient pas à tous les métiers et peut affaiblir les échanges informels. Je pense donc qu’un modèle hybride constitue un meilleur compromis, à condition que les salariés puissent choisir leurs jours de présence.", category: "B2 · ÉCOUTE", skill: "論證結構", label: "聽出主要立場、承認的優點與附帶條件", q: "Certes, le télétravail offre plus de souplesse et réduit les déplacements. Cependant, il ne convient pas à tous les métiers et peut affaiblir les échanges informels. Je pense donc qu’un modèle hybride constitue un meilleur compromis, à condition que les salariés puissent choisir leurs jours de présence.", a: "Thèse : le modèle hybride est préférable ; concession : le télétravail apporte de la souplesse et réduit les trajets ; condition : les salariés peuvent choisir leurs jours de présence.", note: "不要只抓關鍵字；要辨認哪一句是作者最後真正支持的主張。" },
    { id: "tcf-task3-b2-output", phase: "output", openEnded: true, category: "TCF · ÉCRIT", skill: "完整寫作任務 3", label: "25 分鐘內寫 120–180 字：先綜合，再表達並論證立場", q: "Document 1 — Une salariée affirme qu’en quatre jours elle accomplit le même travail, se repose davantage et revient plus concentrée. Document 2 — Un dirigeant craint des journées trop longues, une disponibilité réduite pour les clients et une organisation difficile dans les petites équipes. Rédigez les deux parties demandées.", a: "Le premier document présente la semaine de quatre jours comme un moyen d’améliorer l’équilibre entre vie professionnelle et vie privée sans réduire la productivité. Le second craint au contraire une intensification du travail et des difficultés d’organisation, surtout dans les petites entreprises.\n\nÀ mon avis, cette organisation mérite d’être testée, mais elle ne devrait pas être imposée partout de la même manière. Si une entreprise maintient ses objectifs tout en réduisant réellement le temps de travail, les salariés peuvent être plus reposés et mieux concentrés. Cependant, certains services doivent rester accessibles cinq jours sur sept. Il faudrait donc prévoir des équipes alternées et évaluer les résultats après plusieurs mois. Une expérimentation progressive permettrait de mesurer la satisfaction des employés, la qualité du service et la charge réelle de travail. Ainsi, la semaine de quatre jours peut être bénéfique à condition que son application soit adaptée au secteur et régulièrement révisée.", note: "範例共約 150 字；第一部分 40–60 字，第二部分 80–120 字，且必須清楚區分來源觀點與自己的立場。" },
    { id: "tcf-task3-b2-fluency", phase: "fluency", openEnded: true, category: "TCF · ORAL", skill: "口說任務 3", label: "不看範例、無準備，正式計時 4 分 30 秒", q: "À votre avis, faudrait-il interdire les voitures dans le centre des grandes villes ?", a: "Je suis favorable à une forte limitation, mais pas à une interdiction absolue. D’abord, réduire la circulation améliorerait la qualité de l’air et rendrait les rues plus sûres. Par exemple, les familles pourraient davantage marcher ou utiliser le vélo. Ensuite, les transports publics deviendraient plus attractifs si la ville renforçait leur fréquence. Certes, certaines personnes, notamment celles qui travaillent de nuit ou ont une mobilité réduite, ont besoin d’une voiture. Il faudrait donc prévoir des exceptions, des stationnements périphériques et une mise en œuvre progressive. En somme, la mesure serait efficace à condition d’offrir des alternatives fiables et abordables.", note: "正式任務 3 無準備、目標 4 分 30 秒。依序擴展立場、兩個理由與例子、讓步與回應、可行方案、結論；參考答案只示範骨架，不代表足夠長度。" },
  ],
  presentRegular: [
    { id: "present-regular-form", phase: "advance", category: "A2 · GRAMMAIRE", skill: "現在式規則動詞", label: "填入三種規則動詞的正確變化", q: "Nous ___ français, nous ___ nos exercices et nous ___ le professeur. (parler / finir / attendre)", a: "Nous parlons français, nous finissons nos exercices et nous attendons le professeur.", note: "nous 的規則字尾：-er → -ons、-ir → -issons、-re → -ons。" },
    { id: "present-regular-input", phase: "input", category: "A2 · LECTURE", skill: "現在式規則動詞", label: "閱讀後找出三個日常動作", q: "Élodie travaille dans une librairie. Elle répond aux clients et finit sa journée à dix-huit heures. Que fait-elle ?", a: "Elle travaille dans une librairie, répond aux clients et finit sa journée à dix-huit heures.", note: "先找主詞 elle，再辨認 travaille、répond、finit 的字尾。" },
    { id: "present-regular-output", phase: "output", openEnded: true, category: "A2 · EXPRESSION", skill: "現在式規則動詞", label: "各用一個 -er、-ir、-re 動詞描述日常生活", q: "工作或學習 → 結束時間 → 等待某人或交通工具", a: "Je travaille le matin. Je finis mes cours à dix-sept heures. Ensuite, j’attends le bus.", note: "答案可替換成真實生活；每句先確認主詞與動詞字尾。" },
    { id: "present-regular-fluency", phase: "fluency", openEnded: true, category: "A2 · FLUIDITÉ", skill: "現在式自動化", label: "不看提示連續說 45 秒", q: "Décris une journée habituelle : où travailles-tu, quand finis-tu et qu’est-ce que tu fais ensuite ?", a: "Je travaille à la maison le matin. Je finis vers midi, puis je déjeune. L’après-midi, j’étudie le français et j’attends parfois le début de mon cours.", note: "使用現在式描述固定習慣，不要改用 futur proche。" },
  ],
  presentIrregular: [
    { id: "present-irregular-form", phase: "advance", category: "A2 · GRAMMAIRE", skill: "現在式不規則動詞", label: "填入正確的不規則動詞", q: "Chaque matin, je ___ un café, je ___ au bureau et je ___ ma liste de tâches. (prendre / aller / faire)", a: "Chaque matin, je prends un café, je vais au bureau et je fais ma liste de tâches.", note: "je prends、je vais、je fais 必須整組記憶，不能套規則字尾。" },
    { id: "present-irregular-input", phase: "input", category: "A2 · LECTURE", skill: "現在式不規則動詞", label: "閱讀後重述他的早晨", q: "Lucas vient au bureau en métro, prend un café et va directement à son bureau. Comment commence-t-il sa journée ?", a: "Il vient au bureau en métro, prend un café et va directement à son bureau.", note: "venir、prendre、aller 的 il 形式分別是 vient、prend、va。" },
    { id: "present-irregular-output", phase: "output", openEnded: true, category: "A2 · EXPRESSION", skill: "現在式不規則動詞", label: "用四個不規則動詞說明今天的情況", q: "avoir、être、faire、venir 各使用一次", a: "Aujourd’hui, j’ai beaucoup de travail. Je suis à la maison, je fais mes exercices et une amie vient me voir ce soir.", note: "先說完整短句，再檢查 ai、suis、fais、vient。" },
    { id: "present-irregular-fluency", phase: "fluency", openEnded: true, category: "A2 · FLUIDITÉ", skill: "不規則動詞自動化", label: "立即回答並延伸兩個細節", q: "Que fais-tu avant et après ton cours de français ?", a: "Avant mon cours, je prends un café et je relis mes notes. Après le cours, je vais marcher ou je fais quelques exercices.", note: "刻意使用 prendre、faire、aller，不要只使用規則動詞。" },
  ],
  articlesGenderNumber: [
    { id: "articles-gender-number-form", phase: "advance", category: "A2 · GRAMMAIRE", skill: "冠詞與性數", label: "依性別、數量與上下文填冠詞", q: "Dans mon sac, il y a ___ livre, ___ trousse et ___ clés. ___ livre est neuf.", a: "Dans mon sac, il y a un livre, une trousse et des clés. Le livre est neuf.", note: "首次提到用 un、une、des；再次提到已知事物用 le、la、les。" },
    { id: "articles-gender-number-input", phase: "input", category: "A2 · LECTURE", skill: "冠詞與性數", label: "判斷哪些物品已經被提過", q: "Sur la table, il y a une pomme et des biscuits. La pomme est rouge et les biscuits sont au chocolat. Quels articles introduisent les objets, puis les reprennent ?", a: "Les articles « une » et « des » introduisent les objets ; « la » et « les » servent ensuite à les reprendre.", note: "冠詞不只表示性數，也表示聽者是否已經知道這個名詞。" },
    { id: "articles-gender-number-output", phase: "output", openEnded: true, category: "A2 · EXPRESSION", skill: "冠詞與性數", label: "描述房間並再次提到其中兩件物品", q: "至少使用 un、une、des，再使用 le、la 或 les", a: "Dans ma chambre, il y a un bureau, une chaise et des étagères. Le bureau est près de la fenêtre et les étagères sont blanches.", note: "第一次介紹物品用不定冠詞，後面再次描述時換成定冠詞。" },
    { id: "articles-gender-number-fluency", phase: "fluency", openEnded: true, category: "A2 · FLUIDITÉ", skill: "冠詞自動化", label: "環顧四周，連續說 45 秒", q: "Qu’est-ce qu’il y a autour de toi ? Décris ensuite deux objets.", a: "Il y a une table, un ordinateur et des livres. La table est grande et l’ordinateur est devant moi.", note: "說名詞時連冠詞一起記，不要只背孤立單字。" },
  ],
  adjectiveAgreementPosition: [
    { id: "adjective-agreement-position-form", phase: "advance", category: "A2 · GRAMMAIRE", skill: "形容詞性數與位置", label: "調整形容詞並放到自然位置", q: "Zoe porte une ___ robe ___ avec des chaussures ___. (beau / bleu / blanc)", a: "Zoe porte une belle robe bleue avec des chaussures blanches.", note: "beau 在陰性名詞前變 belle；顏色通常放名詞後，並配合陰性與複數。" },
    { id: "adjective-agreement-position-input", phase: "input", category: "A2 · LECTURE", skill: "形容詞性數與位置", label: "找出形容詞修飾的名詞", q: "Nous visitons un petit appartement lumineux avec une grande cuisine moderne. Quels adjectifs décrivent l’appartement et la cuisine ?", a: "Petit et lumineux décrivent l’appartement ; grande et moderne décrivent la cuisine.", note: "petit、grand 常放名詞前；lumineux、moderne 通常放名詞後。" },
    { id: "adjective-agreement-position-output", phase: "output", openEnded: true, category: "A2 · EXPRESSION", skill: "形容詞性數與位置", label: "用至少四個形容詞描述一套服裝", q: "長短、顏色、大小、風格", a: "Je porte une longue veste noire, un petit sac beige et des chaussures confortables.", note: "先判斷名詞性數，再決定形容詞字尾及前後位置。" },
    { id: "adjective-agreement-position-fluency", phase: "fluency", openEnded: true, category: "A2 · FLUIDITÉ", skill: "人物與服裝描述", label: "不準備描述一個人 45 秒", q: "Décris sa tenue, son apparence et deux qualités.", a: "Elle porte une jolie chemise blanche et un pantalon noir. Elle est souriante, calme et très organisée.", note: "避免每句只說 c’est bien；改用準確且配合正確的形容詞。" },
  ],
  possessiveDemonstrative: [
    { id: "possessive-demonstrative-form", phase: "advance", category: "A2 · GRAMMAIRE", skill: "所有詞與指示詞", label: "依名詞選擇正確限定詞", q: "Zoe cherche ___ écharpe et ___ chaussures, puis elle essaie ___ veste. (elle / ce)", a: "Zoe cherche son écharpe et ses chaussures, puis elle essaie cette veste.", note: "所有詞配合後面的物品，不配合擁有者；陰性母音開頭用 son écharpe。" },
    { id: "possessive-demonstrative-input", phase: "input", category: "A2 · LECTURE", skill: "所有詞與指示詞", label: "閱讀後找出物品與位置", q: "Paul cherche ses clés. Zoe lui montre cette table et dit : « Tes clés sont sous ce journal. » Où sont les clés de Paul ?", a: "Les clés de Paul sont sous ce journal.", note: "ses 表示 Paul 的複數物品；ce、cette 指向當下所說的東西。" },
    { id: "possessive-demonstrative-output", phase: "output", openEnded: true, category: "A2 · EXPRESSION", skill: "所有詞與指示詞", label: "介紹包裡的物品並指出其中兩件", q: "使用 mon、ma 或 mes，以及 ce、cet、cette 或 ces", a: "Dans mon sac, il y a mes clés, mon portefeuille et ma bouteille. Cette bouteille est vide et ces clés ouvrent la porte de chez moi.", note: "先看名詞的性數與開頭音，再選限定詞。" },
    { id: "possessive-demonstrative-fluency", phase: "fluency", openEnded: true, category: "A2 · FLUIDITÉ", skill: "購物情境", label: "在商店中比較並選擇商品", q: "Quelle veste préfères-tu et avec quoi veux-tu la porter ?", a: "Je préfère cette veste parce que sa couleur correspond à mon style. Ces chaussures vont aussi très bien avec mon pantalon.", note: "指眼前商品用 ce、cette、ces；談歸屬用 mon、ma、mes 或 son、sa、ses。" },
  ],
  contractionsPlaces: [
    { id: "contractions-places-form", phase: "advance", category: "A2 · GRAMMAIRE", skill: "地點介系詞與縮合", label: "填入正確的地點介系詞", q: "Je vais ___ musée, puis ___ gare ; je reviens ___ musée.", a: "Je vais au musée, puis à la gare ; je reviens du musée.", note: "à + le = au，de + le = du；à la、de la 不縮合。" },
    { id: "contractions-places-input", phase: "input", category: "A2 · LECTURE", skill: "城市與國家介系詞", label: "閱讀後重述完整行程", q: "Emma part de France, passe une semaine au Canada, puis va aux États-Unis. Elle séjourne à Montréal et à New York. Quel est son itinéraire ?", a: "Elle part de France, va au Canada, puis aux États-Unis ; elle séjourne à Montréal et à New York.", note: "城市前用 à；陰性國家多用 en，陽性國家用 au，複數國家用 aux。" },
    { id: "contractions-places-output", phase: "output", openEnded: true, category: "A2 · EXPRESSION", skill: "旅行路線", label: "用介系詞說明一段跨國行程", q: "台北出發 → 日本 → 法國巴黎 → 回台灣", a: "Je pars de Taipei, je vais au Japon, puis en France. Je passe deux jours à Paris avant de rentrer à Taïwan.", note: "來源用 de、du、des；目的地依城市或國家選 à、en、au、aux。" },
    { id: "contractions-places-fluency", phase: "fluency", openEnded: true, category: "A2 · FLUIDITÉ", skill: "居住與旅行", label: "連續回答三個地點問題", q: "Où habites-tu, d’où viens-tu et où aimerais-tu voyager ?", a: "J’habite à Taipei, à Taïwan. Je viens de Taïwan et j’aimerais aller au Canada, surtout à Montréal.", note: "把「住在哪裡、來自哪裡、要去哪裡」當成三組固定搭配練習。" },
  ],
  cEstIlEst: [
    { id: "c-est-il-est-form", phase: "advance", category: "A2 · GRAMMAIRE", skill: "c’est / il est / elle est", label: "選擇正確的介紹或描述句型", q: "Voici Léa : ___ une collègue française et ___ très organisée. Son cours ? ___ intéressant.", a: "C’est une collègue française, elle est très organisée et il est intéressant.", note: "c’est + 限定詞與名詞；il/elle est + 形容詞，或不加冠詞的職業。" },
    { id: "c-est-il-est-input", phase: "input", category: "A2 · LECTURE", skill: "c’est / il est / elle est", label: "分辨介紹資訊與後續描述", q: "C’est un hôtel familial. Il est calme, propre et proche de la gare. Quelle phrase présente l’hôtel et quelle phrase le décrit ?", a: "« C’est un hôtel familial » présente l’hôtel ; « Il est calme, propre et proche de la gare » le décrit.", note: "先用 c’est 指出「它是什麼」，再用 il/elle est 描述特徵。" },
    { id: "c-est-il-est-output", phase: "output", openEnded: true, category: "A2 · EXPRESSION", skill: "介紹人物與事物", label: "介紹一位老師並描述她的課", q: "身分、兩項個性、課程特色", a: "C’est ma professeure de français. Elle est patiente et très précise. Son cours est exigeant, mais il est utile.", note: "不要在 elle est professeure 中加入 une；有形容修飾時可說 c’est une excellente professeure。" },
    { id: "c-est-il-est-fluency", phase: "fluency", openEnded: true, category: "A2 · FLUIDITÉ", skill: "即席介紹", label: "選一個熟悉的地方介紹 45 秒", q: "Qu’est-ce que c’est, où est-ce et comment est cet endroit ?", a: "C’est un café près de chez moi. Il est petit, lumineux et généralement calme. C’est un endroit agréable pour étudier.", note: "交替使用 c’est 與 il/elle est，避免整段都用同一個句型。" },
  ],
  questionsRegisters: [
    { id: "questions-registers-form", phase: "advance", category: "A2 · GRAMMAIRE", skill: "三種問句語域", label: "把口語問句改成中性與正式形式", q: "Vous habitez où ?", a: "Où est-ce que vous habitez ? / Où habitez-vous ?", note: "語調問句較口語；est-ce que 中性常用；主詞倒裝較正式。" },
    { id: "questions-registers-input", phase: "input", category: "A2 · LECTURE", skill: "三種問句語域", label: "判斷三個問句的語域", q: "1. Vous partez quand ? 2. Quand est-ce que vous partez ? 3. Quand partez-vous ?", a: "1 是口語；2 是中性；3 是正式。", note: "三句意思相同，差別在情境與句型，不是時間不同。" },
    { id: "questions-registers-output", phase: "output", openEnded: true, category: "A2 · EXPRESSION", skill: "主動詢問資訊", label: "向語言中心提出四個完整問題", q: "上課時間、費用、教材、試聽課", a: "Quels sont les horaires ? Combien coûte le cours ? Est-ce que le matériel est inclus ? Puis-je suivre un cours d’essai ?", note: "TCF 互動題需要主動追問；混用自然的中性與正式問句即可。" },
    { id: "questions-registers-fluency", phase: "fluency", openEnded: true, category: "A2 · FLUIDITÉ", skill: "TCF 互動問句", label: "準備 30 秒後連續提出五個問題", q: "Vous téléphonez pour louer une chambre. Demandez les informations nécessaires.", a: "La chambre est-elle disponible en décembre ? Quel est le loyer ? Est-ce que les charges sont comprises ? Où se trouve l’appartement ? Pourrais-je le visiter samedi ?", note: "先準備疑問詞清單：quand、combien、où、comment、est-ce que。" },
  ],
  negationExpanded: [
    { id: "negation-expanded-form", phase: "advance", category: "A2 · GRAMMAIRE", skill: "延伸否定句", label: "使用 jamais、plus、personne 改寫", q: "Il travaille toujours le dimanche. / Il voit encore quelqu’un au bureau.", a: "Il ne travaille jamais le dimanche. Il ne voit plus personne au bureau.", note: "toujours ↔ jamais、encore ↔ plus、quelqu’un ↔ personne。" },
    { id: "negation-expanded-input", phase: "input", category: "A2 · LECTURE", skill: "延伸否定句", label: "閱讀後找出三項否定資訊", q: "Depuis son déménagement, Anna ne prend plus le bus, ne voit personne le matin et ne sort jamais le soir. Qu’est-ce qui a changé ?", a: "Elle ne prend plus le bus, ne voit personne le matin et ne sort jamais le soir.", note: "ne…plus 表示不再；ne…personne 表示沒有人；ne…jamais 表示從不。" },
    { id: "negation-expanded-output", phase: "output", openEnded: true, category: "A2 · EXPRESSION", skill: "延伸否定句", label: "各用一次 jamais、plus、rien、personne", q: "飲食、改變的習慣、一天中的空檔、人際活動", a: "Je ne bois jamais de soda. Je ne regarde plus la télévision le matin. Je ne prends rien entre les repas. Je ne vois personne avant mon premier cours.", note: "否定詞放在變化動詞兩側；rien、personne 不需要再加 pas。" },
    { id: "negation-expanded-fluency", phase: "fluency", openEnded: true, category: "A2 · FLUIDITÉ", skill: "否定表達自動化", label: "立即回答並補充原因", q: "Qu’est-ce que tu ne fais jamais ? Qu’est-ce que tu ne fais plus ?", a: "Je ne me couche jamais très tard parce que je travaille le matin. Je ne bois plus de café le soir, car je veux mieux dormir.", note: "用 parce que 或 car 補理由，避免只回答一個否定短句。" },
  ],
  quantityPartitives: [
    { id: "quantity-partitives-form", phase: "advance", category: "A2 · GRAMMAIRE", skill: "部分冠詞與數量", label: "填入部分冠詞或數量後的 de", q: "Au petit déjeuner, je bois ___ eau et je mange ___ pain, mais je ne prends pas beaucoup ___ sucre.", a: "Au petit déjeuner, je bois de l’eau et je mange du pain, mais je ne prends pas beaucoup de sucre.", note: "不可數食物用 du、de la、de l’；數量詞 beaucoup 後固定用 de。" },
    { id: "quantity-partitives-input", phase: "input", category: "A2 · LECTURE", skill: "部分冠詞與數量", label: "閱讀食譜後列出材料", q: "Pour la soupe, il faut des carottes, de l’oignon, un peu de crème et une cuillère d’huile. Quels ingrédients et quelles quantités faut-il ?", a: "Il faut des carottes, de l’oignon, un peu de crème et une cuillère d’huile.", note: "部分冠詞表示未指定數量；un peu de、une cuillère de 表示具體數量。" },
    { id: "quantity-partitives-output", phase: "output", openEnded: true, category: "A2 · EXPRESSION", skill: "餐點與數量", label: "描述一餐並加入兩個數量表達", q: "至少使用 du、de la、de l’或 des，以及 beaucoup de、un peu de 或 trop de", a: "Au dîner, je mange de la soupe, du riz et des légumes. Je bois beaucoup d’eau et je mets seulement un peu de sel.", note: "先說食物種類，再用數量詞讓回答更精確。" },
    { id: "quantity-partitives-fluency", phase: "fluency", openEnded: true, category: "A2 · FLUIDITÉ", skill: "飲食習慣", label: "連續說 45 秒，不列單字清單", q: "Qu’est-ce que tu manges et bois pendant une journée normale ?", a: "Le matin, je bois du thé et je mange du pain. À midi, je prends des légumes avec un peu de viande. Le soir, je bois beaucoup d’eau.", note: "用三餐或時間順序組織答案，並注意否定句與數量後的 de。" },
  ],
  modalInfinitive: [
    { id: "modal-infinitive-form", phase: "advance", category: "A2 · GRAMMAIRE", skill: "情態動詞＋原形", label: "填入 devoir 與 pouvoir", q: "Pour progresser, je ___ pratiquer chaque jour, mais je ___ aussi me reposer.", a: "Pour progresser, je dois pratiquer chaque jour, mais je peux aussi me reposer.", note: "devoir、pouvoir、vouloir 後直接接動詞原形，不加 à 或 de。" },
    { id: "modal-infinitive-input", phase: "input", category: "A2 · LECTURE", skill: "義務、許可與禁止", label: "分辨必須、可以與不可以做的事", q: "Pour entrer, vous devez présenter une pièce d’identité. Vous pouvez laisser votre sac à l’accueil, mais vous ne pouvez pas prendre de photos.", a: "Il faut présenter une pièce d’identité ; il est permis de laisser son sac à l’accueil ; il est interdit de prendre des photos.", note: "devoir 表義務；pouvoir 表能力或許可；本句中的 ne pas pouvoir 表示不允許，也可能在其他語境表示無法。" },
    { id: "modal-infinitive-output", phase: "output", openEnded: true, category: "A2 · EXPRESSION", skill: "計畫與義務", label: "用 vouloir、devoir、pouvoir 規劃旅行", q: "目的地、行前準備、抵達後可做的事", a: "Je veux visiter Montréal. Je dois réserver mon billet et préparer mes documents. Sur place, je peux utiliser le métro pour me déplacer.", note: "情態動詞負責表達態度，真正的動作維持原形。" },
    { id: "modal-infinitive-fluency", phase: "fluency", openEnded: true, category: "A2 · FLUIDITÉ", skill: "建議與規則", label: "給第一次來台北的朋友三項建議", q: "Que doit-il préparer, que peut-il faire et que veut-il peut-être découvrir ?", a: "Il doit préparer une carte de transport. Il peut prendre le métro pour visiter la ville et il veut peut-être découvrir les marchés de nuit et goûter leurs spécialités.", note: "每個情態動詞後接一個清楚的動作原形。" },
  ],
  compoundPastFoundations: [
    { id: "compound-past-foundations-form", phase: "advance", category: "A2 · GRAMMAIRE", skill: "passé composé 基礎", label: "選助動詞並完成過去分詞", q: "Hier, Zoe ___ au musée et elle ___ des photos. (aller / prendre)", a: "Hier, Zoe est allée au musée et elle a pris des photos.", note: "aller 使用 être，Zoe 是女性所以用 allée；prendre 使用 avoir，過去分詞是 pris。" },
    { id: "compound-past-foundations-input", phase: "input", category: "A2 · LECTURE", skill: "passé composé 基礎", label: "閱讀後依序重述四個事件", q: "Samedi, Zoe a quitté la maison à neuf heures. Elle a pris le métro, est arrivée au centre-ville et a retrouvé ses amis. Qu’a-t-elle fait ?", a: "Elle a quitté la maison, a pris le métro, est arrivée au centre-ville et a retrouvé ses amis.", note: "完成的事件用 passé composé；arriver 使用 être，其他三個動詞使用 avoir。" },
    { id: "compound-past-foundations-output", phase: "output", openEnded: true, category: "A2 · EXPRESSION", skill: "過去事件", label: "用四個完成事件描述昨天", q: "早上 → 移動到某地 → 一項活動 → 回家", a: "Hier, j’ai travaillé le matin. Ensuite, je suis allée au centre-ville, j’ai déjeuné avec une amie et je suis rentrée chez moi vers dix-huit heures.", note: "Zoe 使用 allée、rentrée；用 ensuite、puis 串起事件。" },
    { id: "compound-past-foundations-fluency", phase: "fluency", openEnded: true, category: "A2 · FLUIDITÉ", skill: "過去敘事", label: "不準備說一分鐘，再寫下最完整版本", q: "Raconte ta dernière sortie : où es-tu allée, avec qui et qu’est-ce que tu as fait ?", a: "La semaine dernière, je suis allée au marché de nuit avec une amie. Nous avons goûté plusieurs plats, puis nous avons pris le métro. Je suis rentrée chez moi assez tard.", note: "先建立事件順序，再檢查 être 動詞的女性配合。" },
  ],
  indirectObjectPronouns: [
    { id: "indirect-object-pronouns-form", phase: "advance", category: "A2 · GRAMMAIRE", skill: "COI 代名詞 lui / leur", label: "用代名詞避免重複 à＋人", q: "Je téléphone à mes parents. → Je ___ téléphone.", a: "Je leur téléphone.", note: "à une personne 用 lui；à plusieurs personnes用 leur，放在變化動詞前。" },
    { id: "indirect-object-pronouns-input", phase: "input", category: "A2 · LECTURE", skill: "COI 代名詞 lui / leur", label: "判斷 lui 與 leur 指的是誰", q: "Nora écrit à Paul chaque semaine. Elle lui raconte son travail. Elle téléphone aussi à ses parents et leur donne des nouvelles.", a: "« Lui » désigne Paul ; « leur » désigne les parents de Nora.", note: "lui、leur 不表示性別，只表示單數或複數的間接受詞。" },
    { id: "indirect-object-pronouns-output", phase: "output", openEnded: true, category: "A2 · EXPRESSION", skill: "COI 代名詞 lui / leur", label: "用 lui 或 leur 改寫三句", q: "Je parle à ma professeure. / J’envoie un message à mes amis. / Nous répondons à nos voisins.", a: "Je lui parle. Je leur envoie un message. Nous leur répondons.", note: "先確認動詞搭配 à quelqu’un，再把 à＋人換成 lui 或 leur。" },
    { id: "indirect-object-pronouns-fluency", phase: "fluency", openEnded: true, category: "A2 · FLUIDITÉ", skill: "人際互動", label: "回答後用代名詞延伸兩句", q: "Quand tu as une question, à qui demandes-tu de l’aide ?", a: "Je demande de l’aide à ma professeure. Je lui explique mon problème et je lui pose des questions précises. J’écris aussi à mes amis et je leur demande parfois leur avis.", note: "第一次說出人物，後續改用 lui 或 leur，讓表達不重複。" },
  ],
  adverbPosition: [
    { id: "adverb-position-form", phase: "advance", category: "A2 · GRAMMAIRE", skill: "副詞位置", label: "把副詞放到自然位置", q: "Je prends le métro. (souvent) / J’ai compris la consigne. (bien)", a: "Je prends souvent le métro. J’ai bien compris la consigne.", note: "簡短副詞通常放在變化動詞後；passé composé 中常放在助動詞與過去分詞之間。" },
    { id: "adverb-position-input", phase: "input", category: "A2 · LECTURE", skill: "副詞位置", label: "找出頻率與完成狀態", q: "Zoe révise souvent le soir. Elle travaille généralement une heure et elle a déjà terminé les exercices de cette semaine. Quand et comment étudie-t-elle ?", a: "Elle révise souvent le soir, travaille généralement une heure et a déjà terminé les exercices de la semaine.", note: "souvent、généralement 修飾習慣；déjà 放在助動詞與過去分詞之間。" },
    { id: "adverb-position-output", phase: "output", openEnded: true, category: "A2 · EXPRESSION", skill: "學習頻率", label: "使用四個副詞描述你的複習方式", q: "toujours、souvent、rarement、déjà 或 bien 任選四個", a: "Je révise toujours après mon cours. Je relis souvent mes notes et j’écris rarement une traduction complète. J’ai déjà commencé à enregistrer mes réponses et je comprends mieux les corrections.", note: "副詞要靠近它修飾的動詞；mieux 是 bien 的比較級。" },
    { id: "adverb-position-fluency", phase: "fluency", openEnded: true, category: "A2 · FLUIDITÉ", skill: "副詞自動化", label: "連續說一分鐘，至少使用四個副詞", q: "Comment révises-tu le français et qu’est-ce qui t’aide le plus ?", a: "Je révise généralement le soir. Je relis toujours mes notes et j’essaie souvent de parler à voix haute. J’ai déjà commencé à enregistrer mes réponses, et cela m’aide beaucoup.", note: "不要把所有副詞放句尾；依現在式或複合過去式選擇位置。" },
  ],
  futureSimple: [
    { id: "future-simple-form", phase: "advance", category: "B1 · GRAMMAIRE", skill: "futur simple", label: "完成兩個未來式動詞", q: "Demain, nous ___ plus tôt et nous ___ le train de huit heures. (partir / prendre)", a: "Demain, nous partirons plus tôt et nous prendrons le train de huit heures.", note: "futur simple 使用不定詞字幹；prendre 去掉最後的 e，再加 -ons：prendr-ons。" },
    { id: "future-simple-input", phase: "input", category: "B1 · LECTURE", skill: "futur simple", label: "讀預測後回答", q: "En 2030, davantage de salariés travailleront à distance, mais les bureaux ne disparaîtront pas. Que prévoit l’auteur ?", a: "Il prévoit que davantage de salariés travailleront à distance, mais que les bureaux ne disparaîtront pas.", note: "futur simple 可表達預測；travailleront、disparaîtront 都指未來。" },
    { id: "future-simple-output", phase: "output", openEnded: true, category: "B1 · EXPRESSION", skill: "未來計畫", label: "用三句描述未來幾個月的具體計畫", q: "持續上法文課 → 十二月考 TCF Canada → 每天練口說", a: "Dans les prochains mois, je continuerai à suivre des cours de français. Je passerai le TCF Canada en décembre et je pratiquerai l’oral tous les jours.", note: "已決定或較遠的未來計畫可用 futur simple；注意 passerai、pratiquerai 的字尾。" },
    { id: "future-simple-fluency", phase: "fluency", openEnded: true, category: "B1 · FLUIDITÉ", skill: "未來投射", label: "不看提示連續說 60 秒", q: "Comment votre vie changera-t-elle dans cinq ans ?", a: "Dans cinq ans, je parlerai français avec confiance. Je pourrai travailler dans un environnement international et je voyagerai plus facilement au Canada.", note: "先用 Dans cinq ans 定位時間，再連續使用 futur simple，不必逐字翻譯。" },
  ],
  conditionnelPresent: [
    { id: "conditionnel-present-form", phase: "advance", category: "B1 · GRAMMAIRE", skill: "conditionnel présent", label: "把建議改成條件式", q: "À ta place, je ___ conseil et je ne ___ rien aujourd’hui. (demander / signer)", a: "À ta place, je demanderais conseil et je ne signerais rien aujourd’hui.", note: "conditionnel présent 使用 futur simple 字幹＋imparfait 字尾：-ais、-ais、-ait、-ions、-iez、-aient。" },
    { id: "conditionnel-present-input", phase: "input", category: "B1 · LECTURE", skill: "conditionnel présent", label: "找出寄件人的兩項禮貌要求", q: "Nous aimerions louer l’appartement dès septembre. Pourriez-vous nous envoyer le contrat ?", a: "Les locataires aimeraient louer l’appartement dès septembre et demandent qu’on leur envoie le contrat.", note: "aimerions、pourriez-vous 以條件式降低要求的直接程度。" },
    { id: "conditionnel-present-output", phase: "output", openEnded: true, category: "B1 · EXPRESSION", skill: "提出建議", label: "用三種條件式句型給學法文的建議", q: "可以每天聽法文 → 最好記錄錯誤 → 換作是我會多說", a: "Tu pourrais écouter du français chaque jour. Il serait utile de noter tes erreurs. À ta place, je parlerais davantage pendant les cours.", note: "pourrais 提議、il serait utile de 表示建議、à ta place 表示個人意見。" },
    { id: "conditionnel-present-fluency", phase: "fluency", openEnded: true, category: "B1 · FLUIDITÉ", skill: "想像情境", label: "想像六個月假期並說 60–90 秒", q: "Vous disposez de six mois libres. Quels seraient vos projets ?", a: "Je voyagerais au Canada, je suivrais un cours intensif de français et je consacrerais du temps à un projet personnel.", note: "先設定想像情境，再用 conditionnel présent 列出會做的事情。" },
  ],
  siPatterns: [
    { id: "si-patterns-form", phase: "advance", category: "B1 · GRAMMAIRE", skill: "si 條件句", label: "完成真實與假設條件句", q: "Si j’ai le temps, je t’___. Si j’avais plus de temps, je ___ un cours intensif. (appeler / suivre)", a: "Si j’ai le temps, je t’appellerai. Si j’avais plus de temps, je suivrais un cours intensif.", note: "可能實現：si＋présent，主句用 futur；現在假設：si＋imparfait，主句用 conditionnel présent。" },
    { id: "si-patterns-input", phase: "input", category: "B1 · LECTURE", skill: "si 條件句", label: "讀通知後找出條件與結果", q: "Si vous réservez avant vendredi, vous bénéficierez d’une réduction. Si vous hésitez, appelez-nous. Que se passera-t-il en cas de réservation anticipée ?", a: "Le client bénéficiera d’une réduction s’il réserve avant vendredi.", note: "si＋présent 後可接 futur，也可用 impératif 提出指示。" },
    { id: "si-patterns-output", phase: "output", openEnded: true, category: "B1 · EXPRESSION", skill: "條件與假設", label: "依提示各寫一個 si 句", q: "明天天氣好／去爬山；累的時候／早點休息；有更多時間／每天閱讀", a: "S’il fait beau demain, j’irai faire une randonnée. Si je suis fatiguée, je me couche plus tôt. Si j’avais plus de temps, je lirais en français tous les jours.", note: "先判斷是具體可能、一般情況，還是與目前情況相反的假設，再選時態。" },
    { id: "si-patterns-fluency", phase: "fluency", openEnded: true, category: "B1 · FLUIDITÉ", skill: "即席假設", label: "用至少三個 si 句說 90 秒", q: "Si vous pouviez changer trois choses dans votre ville, que feriez-vous ?", a: "Si je pouvais changer ma ville, j’améliorerais les transports publics. S’ils étaient plus fréquents, davantage de personnes les utiliseraient. Je créerais aussi plus d’espaces verts si le budget le permettait.", note: "si 子句不用 conditionnel；維持 si＋imparfait、conditionnel présent 的配對。" },
  ],
  plusQueParfait: [
    { id: "plus-que-parfait-form", phase: "advance", category: "B1 · GRAMMAIRE", skill: "plus-que-parfait", label: "完成較早發生的過去事件", q: "Quand je suis arrivée à la gare, le train ___ déjà ___. (partir)", a: "Quand je suis arrivée à la gare, le train était déjà parti.", note: "plus-que-parfait＝avoir／être 的 imparfait＋過去分詞；表示另一過去事件之前已完成的事。" },
    { id: "plus-que-parfait-input", phase: "input", category: "B1 · LECTURE", skill: "plus-que-parfait", label: "讀故事後找出先發生的原因", q: "Léa n’a pas pu entrer chez elle parce qu’elle avait oublié ses clés à l’intérieur. Pourquoi est-elle restée dehors ?", a: "Elle est restée dehors parce qu’elle avait oublié ses clés à l’intérieur.", note: "avait oublié 先於 n’a pas pu entrer，說明後來問題的原因。" },
    { id: "plus-que-parfait-output", phase: "output", openEnded: true, category: "B1 · EXPRESSION", skill: "過去先後順序", label: "用一句話表達準備與出發的先後", q: "去蒙特婁以前：已訂旅館、已買車票；後來出發", a: "Quand je suis partie pour Montréal, j’avais déjà réservé mon hôtel et acheté mon billet.", note: "後發生的出發用 passé composé；更早完成的準備用 plus-que-parfait。" },
    { id: "plus-que-parfait-fluency", phase: "fluency", openEnded: true, category: "B1 · FLUIDITÉ", skill: "解釋過去問題", label: "說一個因為先前疏忽而發生的小問題", q: "Racontez un problème en utilisant déjà, parce que et le plus-que-parfait.", a: "Une fois, je suis arrivée au mauvais endroit parce que j’avais mal noté l’adresse. Cela faisait déjà dix minutes que j’attendais quand j’ai compris mon erreur.", note: "用 plus-que-parfait 補充另一過去事件之前已完成的原因或事件；持續到當時的狀態可用 cela faisait…que＋imparfait。" },
  ],
  pronounOrder: [
    { id: "pronoun-order-form", phase: "advance", category: "B1 · GRAMMAIRE", skill: "代名詞順序", label: "用兩個代名詞改寫", q: "Je donne les documents à ma professeure. → Je ___ ___ donne.", a: "Je les lui donne.", note: "陳述句中 COD le／la／les 放在 COI lui／leur 前：je les lui donne。" },
    { id: "pronoun-order-input", phase: "input", category: "B1 · LECTURE", skill: "代名詞順序", label: "找出兩個代名詞的指涉", q: "Zoe a besoin de ces informations. Son professeur les lui envoie par courriel. Qu’envoie-t-il, et à qui ?", a: "Il envoie les informations à Zoe.", note: "les＝ces informations；lui＝à Zoe。先還原名詞，再理解句意。" },
    { id: "pronoun-order-output", phase: "output", openEnded: true, category: "B1 · EXPRESSION", skill: "多重代名詞", label: "改寫三句，不重複名詞", q: "Je montre les photos à mes amis. / Tu prêtes ta voiture à Léa. / Nous parlons du projet à Paul.", a: "Je les leur montre. Tu la lui prêtes. Nous lui en parlons.", note: "基本順序是 me／te／se／nous／vous＋le／la／les＋lui／leur＋y＋en。" },
    { id: "pronoun-order-fluency", phase: "fluency", openEnded: true, category: "B1 · FLUIDITÉ", skill: "代名詞自動化", label: "立即回應，不重複「報告」與「主管」", q: "Votre collègue vous demande d’envoyer le rapport à sa responsable. Que répondez-vous ?", a: "Je vais le lui envoyer cet après-midi. Si certains points ne sont pas clairs, je les lui expliquerai demain.", note: "先想「什麼」與「給誰」，再依 COD＋COI 的順序說出來。" },
  ],
  precedingCodAgreement: [
    { id: "preceding-cod-agreement-form", phase: "advance", category: "B1 · GRAMMAIRE", skill: "前置 COD 配合", label: "完成過去分詞的性數配合", q: "Les lettres que j’ai ___ hier sont sur la table. (écrire)", a: "Les lettres que j’ai écrites hier sont sur la table.", note: "avoir 的過去分詞通常不配合；但 COD les lettres 位於過去分詞前，所以寫 écrites。" },
    { id: "preceding-cod-agreement-input", phase: "input", category: "B1 · LECTURE", skill: "前置 COD 配合", label: "解釋為什麼使用 prises", q: "J’ai retrouvé les photos que Zoe avait prises à Kyoto. Pourquoi écrit-on « prises » ?", a: "Parce que le COD « les photos » est placé avant le participe passé et qu’il est féminin pluriel.", note: "關係代名詞 que 是 prendre 的 COD，指向前面的 les photos。" },
    { id: "preceding-cod-agreement-output", phase: "output", openEnded: true, category: "B1 · CORRECTION", skill: "前置 COD 配合", label: "修正兩個過去分詞", q: "La robe que j’ai acheté est trop grande. Les erreurs que j’ai corrigé étaient fréquentes.", a: "La robe que j’ai achetée est trop grande. Les erreurs que j’ai corrigées étaient fréquentes.", note: "先找 que 取代的名詞，再依其陰陽性與單複數修改過去分詞。" },
    { id: "preceding-cod-agreement-fluency", phase: "fluency", openEnded: true, category: "B1 · FLUIDITÉ", skill: "自然使用配合", label: "介紹最近買的兩樣東西", q: "Parlez de deux choses que vous avez achetées ou choisies récemment.", a: "Les chaussures que j’ai achetées sont très confortables. Le livre que j’ai choisi présente des exercices utiles.", note: "口說時先確定先行詞，再讓 que 後面的過去分詞自然配合。" },
  ],
  gerundParticiple: [
    { id: "gerund-participle-form", phase: "advance", category: "B1 · GRAMMAIRE", skill: "gérondif", label: "用 gérondif 合併同主詞動作", q: "Elle répète chaque phrase et améliore sa prononciation.", a: "Elle améliore sa prononciation en répétant chaque phrase.", note: "gérondif＝en＋participe présent，通常表示同一主詞同時做的動作或採用的方法。" },
    { id: "gerund-participle-input", phase: "input", category: "B1 · LECTURE", skill: "gérondif／participe présent", label: "分辨兩種 -ant 結構", q: "En travaillant régulièrement, Léa progresse. Les étudiants vivant loin suivent le cours en ligne. Quel est le rôle de chaque forme ?", a: "« En travaillant » exprime la manière de progresser ; « vivant loin » décrit les étudiants.", note: "gérondif 前有 en；participe présent 可直接補充名詞資訊，且形式不變。" },
    { id: "gerund-participle-output", phase: "output", openEnded: true, category: "B1 · EXPRESSION", skill: "句子壓縮", label: "各用一個 gérondif 與 participe présent 改寫", q: "Je marche et j’écoute un podcast. / Les personnes qui souhaitent participer doivent s’inscrire.", a: "J’écoute un podcast en marchant. Les personnes souhaitant participer doivent s’inscrire.", note: "同主詞並行動作用 en＋-ant；關係子句可用 participe présent 精簡。" },
    { id: "gerund-participle-fluency", phase: "fluency", openEnded: true, category: "B1 · FLUIDITÉ", skill: "描述學習方法", label: "用至少兩個 gérondif 說 60 秒", q: "Comment apprenez-vous le français en dehors des cours ?", a: "J’apprends du vocabulaire en écoutant des podcasts. En répétant les phrases à voix haute, j’améliore aussi ma prononciation.", note: "每個 gérondif 的隱含主詞要與主句主詞相同。" },
  ],
  passiveVoice: [
    { id: "passive-voice-form", phase: "advance", category: "B1 · GRAMMAIRE", skill: "voix passive", label: "把主動句改成被動句", q: "La mairie organise le festival. →", a: "Le festival est organisé par la mairie.", note: "被動式＝être＋過去分詞；過去分詞與被動句主詞 le festival 配合。" },
    { id: "passive-voice-input", phase: "input", category: "B1 · LECTURE", skill: "voix passive", label: "分辨已完成與尚未發生的被動事件", q: "Une nouvelle bibliothèque a été inaugurée hier. Elle sera ouverte au public lundi. Que s’est-il déjà passé, et que se passera-t-il lundi ?", a: "La bibliothèque a déjà été inaugurée ; elle sera ouverte au public lundi.", note: "被動式的時態由 être 承擔：a été inaugurée 是過去，sera ouverte 是未來。" },
    { id: "passive-voice-output", phase: "output", openEnded: true, category: "B1 · EXPRESSION", skill: "主被動改寫", label: "把兩句改成被動式", q: "On a annulé la réunion. / La ville construira une piste cyclable.", a: "La réunion a été annulée. Une piste cyclable sera construite par la ville.", note: "施事者不重要時可以省略 par＋施事者；注意 réunion、piste 都是陰性。" },
    { id: "passive-voice-fluency", phase: "fluency", openEnded: true, category: "B1 · FLUIDITÉ", skill: "新聞式表達", label: "用兩個被動式口頭報導城市新措施", q: "市中心限制車流；增設接駁車", a: "La circulation sera limitée dans le centre-ville. Des navettes supplémentaires seront mises en service pour faciliter les déplacements.", note: "被動式適合把焦點放在措施或結果，而不是執行者。" },
  ],
  reportedSpeech: [
    { id: "reported-speech-form", phase: "advance", category: "B1 · GRAMMAIRE", skill: "discours rapporté", label: "把未來直述句改成間接引語", q: "Léa a dit : « Je viendrai demain. » →", a: "Léa a dit qu’elle viendrait le lendemain.", note: "轉述動詞在過去時，futur simple 通常後移為 conditionnel présent；demain 依情境變成 le lendemain。" },
    { id: "reported-speech-input", phase: "input", category: "B1 · LECTURE", skill: "discours rapporté", label: "轉述陳述與開放式問句", q: "Paul : « Je n’ai pas reçu le lien. Où dois-je me connecter ? » Que rapporte sa collègue ?", a: "Paul a expliqué qu’il n’avait pas reçu le lien et a demandé où il devait se connecter.", note: "陳述句用 que；保留疑問詞 où，但間接問句不再倒裝。" },
    { id: "reported-speech-output", phase: "output", openEnded: true, category: "B1 · EXPRESSION", skill: "三種間接引語", label: "轉述陳述、是非問句與原因問句", q: "Léa : « Je suis disponible. Le cours commence-t-il à neuf heures ? Pourquoi l’administration a-t-elle changé la salle ? »", a: "Léa a dit qu’elle était disponible. Elle a demandé si le cours commençait à neuf heures et pourquoi l’administration avait changé la salle.", note: "陳述用 que，是非問句用 si，有疑問詞時保留疑問詞；注意過去時態呼應。" },
    { id: "reported-speech-fluency", phase: "fluency", openEnded: true, category: "B1 · FLUIDITÉ", skill: "口頭轉述", label: "用三個轉述句重述一次談話", q: "Racontez une conversation récente avec votre professeure.", a: "Ma professeure a dit que ma prononciation s’améliorait. Elle m’a demandé si je révisais chaque jour, puis elle a expliqué pourquoi je devais parler davantage.", note: "依序使用 a dit que、a demandé si、a expliqué pourquoi，避免逐句模仿直接引語。" },
  ],
  subjunctiveFoundations: [
    { id: "subjunctive-foundations-form", phase: "advance", category: "B1 · GRAMMAIRE", skill: "subjonctif présent", label: "先從規則動詞建立變化規則", q: "Ils parlent → Il faut que je ___. Nous finissons / ils finissent → Il faut que nous ___.", a: "Il faut que je parle. Il faut que nous finissions.", note: "je／tu／il／ils 多取 ils 現在式去掉 -ent 的字幹；nous／vous 多取 nous 現在式去掉 -ons，再加 -ions／-iez。" },
    { id: "subjunctive-foundations-input", phase: "input", category: "B1 · LECTURE", skill: "subjonctif présent", label: "辨認觸發 subjonctif 的語意", q: "Je veux que tu parles davantage. Il est essentiel que nous finissions aujourd’hui. Je suis ravie que vous participiez.", a: "Les phrases expriment respectivement une volonté, une nécessité et une émotion.", note: "意願、必要性與情緒等主句表達會觸發 subjonctif；使用 subjonctif 不代表從句內容一定不真實。" },
    { id: "subjunctive-foundations-output", phase: "output", openEnded: true, category: "B1 · EXPRESSION", skill: "意願與必要性", label: "用三個觸發句型談學習", q: "我希望老師立即糾錯；每天練習很重要；我很高興進步看得見", a: "Je veux que mon professeur me corrige immédiatement. Il est important que je pratique chaque jour. Je suis contente que mes progrès soient visibles.", note: "兩個不同主詞常用 que＋subjonctif；同主詞時通常優先用不定詞。" },
    { id: "subjunctive-foundations-fluency", phase: "fluency", openEnded: true, category: "B1 · FLUIDITÉ", skill: "給考生建議", label: "用至少三個 subjonctif 句型說 60 秒", q: "Que faut-il faire pour progresser avant un examen ?", a: "Il faut que tu t’entraînes régulièrement. Il est essentiel que tu apprennes à gérer ton temps et je souhaite que tu gardes confiance pendant l’épreuve.", note: "先熟練 il faut que、il est essentiel que、je souhaite que，再擴充更多觸發語。" },
  ],
  causeConsequence: [
    { id: "cause-consequence-form", phase: "advance", category: "B1 · GRAMMAIRE", skill: "cause et conséquence", label: "補上原因與結果連接詞", q: "___ le métro était en panne, j’ai pris le bus ; je suis ___ arrivée en retard.", a: "Comme le métro était en panne, j’ai pris le bus ; je suis donc arrivée en retard.", note: "comme 常置於句首引出原因；donc 放在結果句中。" },
    { id: "cause-consequence-input", phase: "input", category: "B1 · LECTURE", skill: "cause et conséquence", label: "找出社會問題的原因與結果", q: "Puisque les loyers ont fortement augmenté, de nombreuses familles quittent le centre. C’est pourquoi les trajets quotidiens s’allongent. Quelle est la chaîne logique ?", a: "La hausse des loyers pousse les familles à quitter le centre ; leur éloignement allonge ensuite les trajets quotidiens.", note: "puisque 提出視為已知的原因；c’est pourquoi 明確引出結果。" },
    { id: "cause-consequence-output", phase: "output", openEnded: true, category: "B1 · EXPRESSION", skill: "邏輯連接", label: "依提示寫三種因果句", q: "課程取消／老師生病；圖書館提早關／讀者必須離開；大家已知道施工／改走別條路", a: "Le cours a été annulé parce que la professeure était malade. La bibliothèque ferme plus tôt ; par conséquent, les lecteurs doivent partir. Puisque tout le monde est au courant des travaux, nous emprunterons un autre itinéraire.", note: "parce que 回答原因；par conséquent 較正式地引出結果；puisque 表示原因已知或明顯。" },
    { id: "cause-consequence-fluency", phase: "fluency", openEnded: true, category: "B1 · FLUIDITÉ", skill: "因果論述", label: "以原因→影響→結論說 90 秒", q: "Pourquoi faut-il améliorer les transports publics ?", a: "Il faut les améliorer car ils réduisent la dépendance à la voiture. Des services plus fréquents faciliteraient les déplacements ; par conséquent, davantage de personnes abandonneraient leur véhicule.", note: "不要只列意見；用 car、par conséquent 或 c’est pourquoi 清楚呈現推論。" },
  ],
  purposeExpression: [
    { id: "purpose-expression-form", phase: "advance", category: "B1 · GRAMMAIRE", skill: "expression du but", label: "依主詞與肯否定選擇結構", q: "Je note les mots ___ les mémoriser. Je parle lentement ___ mon partenaire me comprenne. Je vérifie mon sac ___ oublier mon passeport.", a: "Je note les mots pour les mémoriser. Je parle lentement pour que mon partenaire me comprenne. Je vérifie mon sac pour ne pas oublier mon passeport.", note: "同主詞用 pour＋infinitif；主詞不同用 pour que＋subjonctif；避免某事可用 pour ne pas＋infinitif。" },
    { id: "purpose-expression-input", phase: "input", category: "B1 · LECTURE", skill: "expression du but", label: "找出城市措施的兩個目的", q: "La ville plante des arbres afin de réduire la chaleur et aménage des pistes pour que les habitants puissent circuler à vélo.", a: "Elle veut réduire la chaleur et permettre aux habitants de circuler à vélo.", note: "afin de＋infinitif 與 pour que＋subjonctif 都引出目的，不是已發生的結果。" },
    { id: "purpose-expression-output", phase: "output", openEnded: true, category: "B1 · EXPRESSION", skill: "行動與目的", label: "用三種目的結構說明備考計畫", q: "錄下口說／發現錯誤；計時寫作／提高速度；請老師模考／適應壓力", a: "J’enregistre mes réponses pour repérer mes erreurs. Je fais des rédactions chronométrées afin d’écrire plus vite. Je demande à ma professeure d’organiser des simulations pour que je m’habitue à la pression.", note: "輪流使用 pour、afin de、pour que，並確認 pour que 後使用 subjonctif。" },
    { id: "purpose-expression-fluency", phase: "fluency", openEnded: true, category: "B1 · FLUIDITÉ", skill: "提出方案", label: "用三個目的句說 90 秒", q: "Que pourrait faire une ville pour aider les nouveaux arrivants ?", a: "Elle pourrait créer un guichet unique pour les aider dans leurs démarches, organiser des rencontres afin qu’ils fassent connaissance avec leurs voisins et publier un guide multilingue pour faciliter leur installation.", note: "提出每項措施後立刻補充目的，使答案比單純列舉更完整。" },
  ],
  concessionOpposition: [
    { id: "concession-opposition-form", phase: "advance", category: "B1 · GRAMMAIRE", skill: "concession et opposition", label: "完成兩種讓步結構", q: "Bien que ce cours ___ exigeant, je continue. Même s’il ___ exigeant, je continue. (être)", a: "Bien que ce cours soit exigeant, je continue. Même s’il est exigeant, je continue.", note: "bien que 後用 subjonctif；même si 後用 indicatif，不能寫 même si＋conditionnel。" },
    { id: "concession-opposition-input", phase: "input", category: "B1 · LECTURE", skill: "concession et opposition", label: "找出承認的優點與真正立場", q: "Certes, le télétravail offre plus de liberté. Cependant, il peut isoler les salariés, tandis que le travail au bureau facilite les échanges. Quelle est la nuance ?", a: "L’auteur reconnaît la liberté offerte par le télétravail, mais insiste sur le risque d’isolement et l’avantage des échanges au bureau.", note: "certes 承認一點；cependant 轉折到主要限制；tandis que 對照兩種情況。" },
    { id: "concession-opposition-output", phase: "output", openEnded: true, category: "B1 · EXPRESSION", skill: "細緻立場", label: "用讓步、轉折與對照寫一小段", q: "線上課：彈性高但互動少；實體課時間固定但交流直接", a: "Bien que les cours en ligne soient flexibles, les échanges y sont parfois limités. Cependant, ce format convient aux personnes très occupées, alors que les cours en présentiel offrent un contact plus direct.", note: "讓步不是否定前半句，而是承認事實後提出仍然成立的主張。" },
    { id: "concession-opposition-fluency", phase: "fluency", openEnded: true, category: "B1 · FLUIDITÉ", skill: "TCF 細緻論述", label: "無準備說 2 分鐘：優點、限制、立場", q: "Les réseaux sociaux sont-ils utiles pour apprendre une langue ?", a: "Bien qu’ils puissent donner accès à beaucoup de contenus, leur qualité est inégale. En revanche, ils permettent d’entendre un français varié. Je les trouve donc utiles, même si une méthode structurée reste indispensable.", note: "使用 bien que、en revanche、même si 表達非黑即白的立場，為 TCF 任務 3 建立論證層次。" },
  ],
  subjunctiveChoice: [
    { id: "subjunctive-choice-form", phase: "advance", category: "B2 · GRAMMAIRE", skill: "indicatif / subjonctif", label: "依語意選擇正確語氣", q: "Il est certain qu’elle ___ disponible, mais je doute qu’elle ___ venir. (être / pouvoir)", a: "Il est certain qu’elle est disponible, mais je doute qu’elle puisse venir.", note: "確定事實通常用 indicatif；懷疑、必要、情感或未實現目的通常觸發 subjonctif。" },
    { id: "subjunctive-choice-input", phase: "input", category: "B2 · LECTURE", skill: "語氣與立場", label: "說明兩個動詞為何使用不同語氣", q: "Je pense que ce projet est utile, mais je ne pense pas qu’il suffise à résoudre tous les problèmes.", a: "est 使用 indicatif，因為說話者肯定項目的作用；suffise 使用 subjonctif，因為否定意見表達不確定或保留。", note: "關鍵不是背連接詞清單，而是辨認說話者把內容視為事實、可能、願望或疑問。" },
    { id: "subjunctive-choice-output", phase: "output", openEnded: true, category: "B2 · EXPRESSION", skill: "讓步與必要性", label: "用 bien que、je crois que、il faut que 回應", q: "城市準備改善大眾運輸。計畫很昂貴，但可能改善通勤；市府必須先諮詢居民。", a: "Bien que le projet soit coûteux, je crois qu’il améliorera les déplacements. Il faut toutefois que la ville consulte les habitants avant de le mettre en œuvre.", note: "合理變體都可接受；bien que 與 il faut que 後用 subjonctif，肯定的 je crois que 後通常用 indicatif。" },
    { id: "subjunctive-choice-fluency", phase: "fluency", openEnded: true, category: "TCF · ORAL", skill: "細緻立場", label: "連續說 90 秒，至少使用一個 indicatif 與兩個 subjonctifs", q: "Les villes doivent-elles limiter l’usage de la voiture ?", a: "Je crois qu’une limitation est nécessaire, bien qu’elle puisse compliquer certains trajets. Il faut que les transports publics soient renforcés pour que la mesure soit acceptable.", note: "參考答案只示範核心結構；正式練習需加入背景、細節、例子與結論，說滿 90 秒。" },
  ],
  compoundRelatives: [
    { id: "compound-relatives-form", phase: "advance", category: "B2 · GRAMMAIRE", skill: "lequel 系列", label: "補上正確的複合關係代名詞", q: "Le centre près ___ j’habite propose un programme ___ je participe.", a: "Le centre près duquel j’habite propose un programme auquel je participe.", note: "près de + lequel → près duquel；participer à + lequel → auquel。介系詞決定代名詞形式。" },
    { id: "compound-relatives-input", phase: "input", category: "B2 · LECTURE", skill: "先行詞與介系詞", label: "指出兩個關係代名詞的先行詞及其結構", q: "Le règlement auquel les employés doivent se conformer prévoit un comité au sein duquel chaque service sera représenté.", a: "auquel 指 le règlement，來自 se conformer à；au sein duquel 指 le comité，來自 au sein de。", note: "先找動詞或介系詞要求的 à／de，再依先行詞的性數選 lequel、laquelle、lesquels 或 lesquelles。" },
    { id: "compound-relatives-output", phase: "output", openEnded: true, category: "B2 · EXPRESSION", skill: "資訊整合", label: "合併四句並避免重複", q: "Nous avons visité un centre. Je travaille près de ce centre. Le centre mène un projet. Plusieurs associations participent à ce projet.", a: "Nous avons visité un centre près duquel je travaille et qui mène un projet auquel plusieurs associations participent.", note: "可有其他自然改寫；至少正確保留 près de 與 participer à 的介系詞關係。" },
    { id: "compound-relatives-fluency", phase: "fluency", openEnded: true, category: "B2 · FLUIDITÉ", skill: "複雜句自動化", label: "說 90 秒：介紹一個組織、活動與規則", q: "Présente une organisation, un projet auquel tu participes et une règle à laquelle les membres doivent se conformer.", a: "Je suis membre d’une association au sein de laquelle plusieurs ateliers sont organisés. Elle mène un projet auquel je participe et applique des règles auxquelles tous les membres doivent se conformer.", note: "參考答案只示範核心結構；正式練習需加入背景、細節、例子與結論，說滿 90 秒。" },
  ],
  tenseSequence: [
    { id: "tense-sequence-form", phase: "advance", category: "B2 · GRAMMAIRE", skill: "間接引語時態", label: "把直接引語改成過去的間接引語", q: "Elle a dit : « J’ai terminé le rapport et je présenterai les résultats demain. »", a: "Elle a dit qu’elle avait terminé le rapport et qu’elle présenterait les résultats le lendemain.", note: "過去敘述點之前用 plus-que-parfait；從過去看未來用 conditionnel présent；demain 改為 le lendemain。" },
    { id: "tense-sequence-input", phase: "input", category: "B2 · LECTURE", skill: "時間關係", label: "判斷三個事件相對於 expliquait 的時間", q: "Le responsable expliquait qu’il avait reçu les plaintes la veille, qu’il préparait une réponse et qu’il publierait sa décision le lendemain.", a: "avait reçu 發生得更早；préparait 與 expliquait 同時進行；publierait 是從當時看尚未發生的未來事件。", note: "以主要過去敘述點為中心判斷先前、同時與之後，不要只背時態名稱。" },
    { id: "tense-sequence-output", phase: "output", openEnded: true, category: "B2 · ÉCRIT", skill: "消息轉述", label: "改寫成正式報導句", q: "Hier, la directrice a annoncé : « Nous avons réduit les délais. Nous testons une nouvelle procédure et nous publierons les résultats le mois prochain. »", a: "Hier, la directrice a annoncé que son équipe avait réduit les délais, qu’elle testait une nouvelle procédure et qu’elle publierait les résultats le mois suivant.", note: "主詞可依上下文改寫；先前、同時、未來三層時間關係要保持清楚。" },
    { id: "tense-sequence-fluency", phase: "fluency", openEnded: true, category: "TCF · ORAL", skill: "轉述資訊", label: "不看提示說 90 秒：轉述老師最近告訴你的事", q: "Rapporte une information qu’un professeur t’a donnée sur tes progrès et tes prochaines étapes.", a: "Mon professeur m’a expliqué que j’avais progressé, que je devais encore travailler la fluidité et que je pourrais bientôt commencer des exercices de niveau B2.", note: "參考答案只示範核心結構；正式練習需加入背景、細節、例子與結論，說滿 90 秒。" },
  ],
  pastHypothesesRegret: [
    { id: "past-hypotheses-regret-form", phase: "advance", category: "B2 · GRAMMAIRE", skill: "過去非真實假設", label: "完成 Zoe 的過去假設句", q: "Si je ___ plus tôt, je ne ___ en retard. (partir / arriver)", a: "Si j’étais partie plus tôt, je ne serais pas arrivée en retard.", note: "未發生的過去條件：si + plus-que-parfait，結果用 conditionnel passé；Zoe 是女性，所以是 partie、arrivée。" },
    { id: "past-hypotheses-regret-input", phase: "input", category: "B2 · LECTURE", skill: "反事實推論", label: "根據句子說明實際發生了什麼", q: "Si la ville avait consulté les habitants, elle aurait évité une partie des critiques.", a: "La ville n’a pas consulté les habitants ; elle a donc fait face à des critiques qu’elle aurait pu éviter.", note: "第三類 si 句描述與過去事實相反的條件；理解時要還原真正發生的情況。" },
    { id: "past-hypotheses-regret-output", phase: "output", openEnded: true, category: "B2 · EXPRESSION", skill: "後悔與教訓", label: "說明錯誤、後悔與未來做法", q: "你因為沒有確認地址而走錯大樓，錯過了預約。", a: "Si j’avais vérifié l’adresse, je ne me serais pas trompée de bâtiment. J’aurais dû appeler avant de partir ; désormais, je confirmerai toujours l’adresse à l’avance.", note: "也可使用 j’aurais pu、je n’aurais pas dû；需區分過去反思與未來改進。" },
    { id: "past-hypotheses-regret-fluency", phase: "fluency", openEnded: true, category: "TCF · ORAL", skill: "經驗反思", label: "說 2 分鐘：事件、原因、不同可能與學到的事", q: "Raconte une situation qui se serait mieux passée si tu avais agi autrement.", a: "Lors d’un voyage, j’ai raté mon train parce que je suis partie trop tard. Si j’étais partie trente minutes plus tôt, je l’aurais pris sans difficulté. J’aurais aussi pu préparer mon billet la veille. Cette expérience m’a appris à prévoir davantage de temps.", note: "參考答案只示範核心結構；正式練習需加入事件背景、細節、其他可能與結論，說滿 2 分鐘。" },
  ],
  causativePassive: [
    { id: "causative-passive-form", phase: "advance", category: "B2 · GRAMMAIRE", skill: "faire + infinitif", label: "表示由別人替你完成動作", q: "Un technicien répare mon ordinateur. → Je ___ par un technicien.", a: "Je fais réparer mon ordinateur par un technicien.", note: "faire + infinitif 強調安排或促使別人做事；真正執行者可用 par 引出。" },
    { id: "causative-passive-input", phase: "input", category: "B2 · LECTURE", skill: "使役與被動", label: "比較兩句分別強調什麼", q: "La mairie a fait fermer la rue par une entreprise spécialisée. La rue a été rouverte trois jours plus tard.", a: "第一句強調市府安排企業封路；第二句是被動語態，焦點在道路及重新開放的結果。", note: "faire + infinitif 突出發起者；être + participe passé 突出承受動作的人、事物或結果。" },
    { id: "causative-passive-output", phase: "output", openEnded: true, category: "B2 · EXPRESSION", skill: "服務與結果", label: "同時使用使役與被動", q: "公寓漏水：房東請水管工修理；隔天損壞的管線被更換。", a: "Le propriétaire a fait réparer la fuite par un plombier, puis la canalisation endommagée a été remplacée le lendemain.", note: "可省略執行者或調整資訊順序；檢查被動過去分詞與主詞的性數配合。" },
    { id: "causative-passive-fluency", phase: "fluency", openEnded: true, category: "TCF · ORAL", skill: "公共措施描述", label: "說 90 秒：誰安排措施、什麼被改變、結果如何", q: "Décris des travaux réalisés récemment dans ton quartier.", a: "La ville a fait installer de nouveaux lampadaires dans notre rue. Les anciennes lampes ont été remplacées et plusieurs passages pour piétons ont été repeints. Ces travaux ont amélioré la visibilité le soir.", note: "參考答案只示範核心結構；正式練習需加入背景、工程細節、影響與結論，說滿 90 秒。" },
  ],
  nominalization: [
    { id: "nominalization-form", phase: "advance", category: "B2 · ÉCRIT", skill: "名詞化", label: "把兩個動詞改成正式名詞結構", q: "La ville interdit les voitures, ce qui contribue à améliorer la qualité de l’air.", a: "L’interdiction des voitures par la ville contribue à l’amélioration de la qualité de l’air.", note: "interdire → interdiction；améliorer → amélioration。名詞化能壓縮資訊，但仍需明確表達邏輯關係。" },
    { id: "nominalization-input", phase: "input", category: "B2 · LECTURE", skill: "正式資訊密度", label: "找出三個名詞化及其原始動詞", q: "La mise en œuvre du programme a entraîné une réduction des délais et une amélioration de l’accueil.", a: "mise en œuvre ← mettre en œuvre；réduction ← réduire；amélioration ← améliorer。", note: "TCF 正式文本常用名詞化承載資訊；閱讀時把它還原成動詞有助理解因果與責任主體。" },
    { id: "nominalization-output", phase: "output", openEnded: true, category: "TCF · ÉCRIT", skill: "正式改寫", label: "把三個短句整合成一句", q: "Les loyers augmentent. Cela inquiète les habitants. Ils demandent que la mairie intervienne.", a: "L’augmentation des loyers suscite l’inquiétude des habitants, qui demandent une intervention de la mairie.", note: "也可寫 réclament l’intervention de la mairie；評量重點是資訊完整、搭配自然，而非逐字一致。" },
    { id: "nominalization-fluency", phase: "fluency", openEnded: true, category: "B2 · MÉDIATION", skill: "政策摘要", label: "用三個名詞化口頭摘要，再改用動詞說一次", q: "市府擴建自行車道、減少停車位，因此部分居民反對。", a: "L’extension des pistes cyclables et la réduction du nombre de places de stationnement ont provoqué l’opposition d’une partie des habitants.", note: "可使用 développement、suppression、contestation 等變體；口說不要過度名詞化，以免顯得生硬。" },
  ],
  formalRegisterCorrection: [
    { id: "formal-register-correction-form", phase: "advance", category: "B2 · REGISTRE", skill: "正式改寫", label: "把口語句改成適合 TCF 寫作的句子", q: "Y a plein de gens qui sont pas d’accord avec ça.", a: "De nombreuses personnes ne sont pas d’accord avec cette mesure.", note: "正式文體恢復完整否定 ne…pas，並用 de nombreuses personnes、cette mesure 取代 plein de gens、ça；此處也省去口語的 y a 結構。" },
    { id: "formal-register-correction-input", phase: "input", category: "B2 · CORRECTION", skill: "語域辨識", label: "指出不適合正式郵件之處並改寫", q: "Je vous écris parce que votre service, il a encore annulé mon rendez-vous et ça m’énerve.", a: "Je vous écris au sujet de la nouvelle annulation de mon rendez-vous, qui me cause un réel désagrément.", note: "原句有主詞重複、口語代名詞 ça 與情緒化表達；正式並不等於複雜，而是精確、克制、合乎對象。" },
    { id: "formal-register-correction-output", phase: "output", openEnded: true, category: "TCF · ÉCRIT", skill: "正式申訴", label: "寫一封 60–120 字的正式郵件", q: "某服務單位兩次取消你的預約且未說明原因。要求說明並安排新時間。", a: "Madame, Monsieur,\nJe souhaite vous signaler que mon rendez-vous a été annulé à deux reprises sans explication. Le dernier rendez-vous était prévu pour le 22 juillet. Cette situation me cause un important désagrément. Je vous serais reconnaissante de bien vouloir m’en préciser la raison et de me proposer une nouvelle date dans les meilleurs délais. Je suis disponible tous les matins de la semaine prochaine, sauf mercredi.\nCordialement,\nZoe", note: "完整回答需達 60–120 字；其他禮貌且清楚的版本都可接受。Zoe 是女性，因此使用 reconnaissante。" },
    { id: "formal-register-correction-fluency", phase: "fluency", openEnded: true, category: "TCF · ORAL", skill: "精確口語", label: "先自然回答，再去掉模糊口語詞重說", q: "Les cours en ligne constituent-ils une bonne solution pour tous les étudiants ?", a: "À mon avis, les cours en ligne constituent une bonne solution — ou, plus précisément, ils peuvent l’être pour les étudiants autonomes. Toutefois, ils ne conviennent pas à tout le monde, car certaines personnes ont besoin d’un accompagnement direct et d’échanges réguliers.", note: "需要修正時可用 plus précisément、je veux dire 或 autrement dit；合理立場皆可，重點是精確詞彙、完整否定與清楚連接詞。" },
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
  ["07 / 24", "Chère Léa…", "être 助動詞 · 性數配合 · 旅行敘事", "etrePast"],
];

const LEARNER_PROFILE = Object.freeze({
  currentLevel: "A1 → A2",
  goal: "TCF Canada B2",
  dailyMinutes: 35,
});

const ADVANCE_MODULES = [
  { id: "present-regular", set: "presentRegular", stage: "A2", level: "A2.1", title: "現在式規則動詞", outcome: "能穩定變化 -er、-ir、-re 動詞" },
  { id: "present-irregular", set: "presentIrregular", stage: "A2", level: "A2.1", title: "高頻不規則現在式", outcome: "能正確使用 être、avoir、aller、faire 等高頻動詞" },
  { id: "articles-gender-number", set: "articlesGenderNumber", stage: "A2", level: "A2.1", title: "名詞性別、單複數與冠詞", outcome: "能依名詞性數選擇 le、la、les、un、une、des" },
  { id: "adjective-agreement-position", set: "adjectiveAgreementPosition", stage: "A2", level: "A2.1", title: "形容詞配合與位置", outcome: "能讓形容詞與名詞性數配合並放在自然位置" },
  { id: "possessive-demonstrative", set: "possessiveDemonstrative", stage: "A2", level: "A2.1", title: "所有與指示形容詞", outcome: "能區分 mon、ma、mes 與 ce、cet、cette、ces" },
  { id: "contractions-places", set: "contractionsPlaces", stage: "A2", level: "A2.1", title: "à／de 縮合與地點介系詞", outcome: "能正確表達去、在、來自城市與國家" },
  { id: "c-est-il-est", set: "cEstIlEst", stage: "A2", level: "A2.1", title: "c’est 與 il／elle est", outcome: "能自然介紹人事物並描述特徵" },
  { id: "questions-registers", set: "questionsRegisters", stage: "A2", level: "A2.1", title: "三種問句與疑問詞", outcome: "能用語調、est-ce que 與倒裝主動提問" },
  { id: "negation-expanded", set: "negationExpanded", stage: "A2", level: "A2.1", title: "進階否定句", outcome: "能使用 ne…jamais、plus、rien、personne" },
  { id: "quantity-partitives", set: "quantityPartitives", stage: "A2", level: "A2.1", title: "部分冠詞與數量", outcome: "能區分 du、de la、des 與數量後的 de" },
  { id: "modal-infinitive", set: "modalInfinitive", stage: "A2", level: "A2.2", title: "情態動詞＋不定詞", outcome: "能表達能力、義務、意願與建議" },
  { id: "object-pronouns", set: "objectPronouns", stage: "A2", level: "A2.1", title: "直接受詞 le / la / les", outcome: "避免反覆重複同一個名詞" },
  { id: "indirect-object-pronouns", set: "indirectObjectPronouns", stage: "A2", level: "A2.2", title: "間接受詞 lui／leur", outcome: "能取代 à＋人並避免重複" },
  { id: "adverb-position", set: "adverbPosition", stage: "A2", level: "A2.2", title: "頻率與方式副詞位置", outcome: "能把 souvent、déjà、bien 等放在自然位置" },
  { id: "comparatives", set: "comparatives", stage: "A2", level: "A2.1", title: "比較級與偏好", outcome: "能比較兩個地方或選擇" },
  { id: "imperative-directions", set: "imperativeDirections", stage: "A2", level: "A2.1", title: "命令式與問路", outcome: "能理解並給出簡單路線" },
  { id: "future-near", set: "futureNear", stage: "A2", level: "A2.1", title: "近期未來 futur proche", outcome: "能說明明天與週末計畫" },
  { id: "recent-past", set: "recentPast", stage: "A2", level: "A2.1", title: "剛剛發生 passé récent", outcome: "能說明剛完成的事情" },
  { id: "compound-past-foundations", set: "compoundPastFoundations", stage: "A2", level: "A2.2", title: "複合過去式總整理", outcome: "能選擇 avoir／être 並形成常見過去分詞" },
  { id: "reflexive-past", set: "reflexivePast", stage: "A2", level: "A2.2", title: "反身動詞的過去式", outcome: "能敘述昨天的日常流程" },
  { id: "imperfect-intro", set: "imperfectIntro", stage: "B1", level: "B1.1", title: "未完成過去式 imparfait", outcome: "能描述過去背景與習慣" },
  { id: "past-contrast", set: "pastContrast", stage: "B1", level: "B1.1", title: "passé composé vs imparfait", outcome: "能組成有背景與事件的故事" },
  { id: "future-simple", set: "futureSimple", stage: "B1", level: "B1.1", title: "簡單未來式 futur simple", outcome: "能說明較遠的計畫、預測與承諾" },
  { id: "conditionnel-present", set: "conditionnelPresent", stage: "B1", level: "B1.1", title: "現在條件式", outcome: "能禮貌請求、給建議並表達假想結果" },
  { id: "si-patterns", set: "siPatterns", stage: "B1", level: "B1.1", title: "si 條件句系統", outcome: "能區分真實條件與現在假設" },
  { id: "plus-que-parfait", set: "plusQueParfait", stage: "B1", level: "B1.1", title: "愈過去式 plus-que-parfait", outcome: "能交代另一件過去事件之前已完成的事" },
  { id: "pronouns-y-en", set: "pronounsYEn", stage: "B1", level: "B1.1", title: "代名詞 y／en", outcome: "能自然避免重複地點與數量" },
  { id: "pronoun-order", set: "pronounOrder", stage: "B1", level: "B1.1", title: "雙代名詞順序", outcome: "能正確排列 me、le、lui、y、en" },
  { id: "relative-reformulation", set: "relativeReformulation", stage: "B1", level: "B1.1", title: "關係代名詞與改寫", outcome: "能用 qui、que、dont、où 合併資訊並避免重複" },
  { id: "preceding-cod-agreement", set: "precedingCodAgreement", stage: "B1", level: "B1.1", title: "avoir 的前置 COD 配合", outcome: "能在 que 或直接受詞前置時正確配合過去分詞" },
  { id: "gerund-participle", set: "gerundParticiple", stage: "B1", level: "B1.1", title: "gérondif 與 participe présent", outcome: "能表達同時與方式，並精簡關係子句" },
  { id: "passive-voice", set: "passiveVoice", stage: "B1", level: "B1.1", title: "被動語態", outcome: "能把焦點放在事件結果或承受者" },
  { id: "reported-speech", set: "reportedSpeech", stage: "B1", level: "B1.2", title: "間接引語與間接問句", outcome: "能轉述別人的話、問題與指示" },
  { id: "subjunctive-foundations", set: "subjunctiveFoundations", stage: "B1", level: "B1.2", title: "虛擬式基礎", outcome: "能在意願、必要與情緒後使用 subjonctif" },
  { id: "cause-consequence", set: "causeConsequence", stage: "B1", level: "B1.2", title: "原因與結果", outcome: "能用 parce que、puisque、donc、par conséquent 組織理由" },
  { id: "purpose-expression", set: "purposeExpression", stage: "B1", level: "B1.2", title: "目的與避免", outcome: "能區分 pour＋不定詞、pour que＋虛擬式與否定目的" },
  { id: "concession-opposition", set: "concessionOpposition", stage: "B1", level: "B1.2", title: "讓步與對比", outcome: "能使用 cependant、même si、bien que 精確轉折" },
  { id: "polite-requests", set: "politeRequests", stage: "B1", level: "B1.2", title: "禮貌請求與主動問資訊", outcome: "能完成 TCF 互動型口說任務" },
  { id: "opinion-builder", set: "opinionBuilder", stage: "B1", level: "B1.2", title: "意見、理由、例子、結論", outcome: "能連續表達並支持自己的立場" },
  { id: "hypothesis-nuance", set: "hypothesisNuance", stage: "B1", level: "B1.2", title: "假設、條件與細緻語氣", outcome: "能提出有條件的立場，表達限制與可能結果" },
  { id: "tcf-message", set: "tcfMessage", stage: "B1", level: "B1.2", title: "TCF 訊息寫作與引導式訪談", outcome: "能完成 60–120 字訊息並應對兩分鐘訪談" },
  { id: "subjunctive-choice", set: "subjunctiveChoice", stage: "B2", level: "B2.1", title: "直陳式或虛擬式", outcome: "能依確定、懷疑、立場與連接詞選擇語氣" },
  { id: "compound-relatives", set: "compoundRelatives", stage: "B2", level: "B2.1", title: "複合關係代名詞", outcome: "能正確使用 lequel、auquel、duquel 及介系詞結構" },
  { id: "tense-sequence", set: "tenseSequence", stage: "B2", level: "B2.1", title: "時態呼應與觀點轉換", outcome: "能在敘事與轉述中維持清楚時間關係" },
  { id: "past-hypotheses-regret", set: "pastHypothesesRegret", stage: "B2", level: "B2.1", title: "過去假設與後悔", outcome: "能用 si＋愈過去式與條件式過去談未實現結果" },
  { id: "causative-passive", set: "causativePassive", stage: "B2", level: "B2.1", title: "faire＋不定詞與進階被動", outcome: "能表達使役、委託與責任焦點" },
  { id: "nominalization", set: "nominalization", stage: "B2", level: "B2.1", title: "名詞化與資訊密度", outcome: "能把動作改寫成名詞結構，提升正式書面表達" },
  { id: "formal-register-correction", set: "formalRegisterCorrection", stage: "B2", level: "B2.1", title: "正式語域與自我修正", outcome: "能避免口語贅詞並在口說中自然改正自己" },
  { id: "viewpoint-synthesis", set: "viewpointSynthesis", stage: "B2", level: "B2.1", title: "雙觀點綜合與 reformulation", outcome: "能用自己的話中立比較兩份來源，不混入個人意見" },
  { id: "tcf-task3-b2", set: "tcfTask3B2", stage: "B2", level: "TCF · B2", title: "任務 3：限時論證", outcome: "能完成 120–180 字雙觀點寫作與 4 分 30 秒即席口說" },
];

const CURRICULUM_CHAPTERS = [
  {
    id: "a2-present-system",
    level: "A2",
    title: "現在式與名詞系統",
    description: "先穩定日常動詞、名詞冠詞、形容詞與指稱方式。",
    moduleIds: ["present-regular", "present-irregular", "articles-gender-number", "adjective-agreement-position", "possessive-demonstrative"],
  },
  {
    id: "a2-reference-questions",
    level: "A2",
    title: "地點、描述與提問",
    description: "描述人事物與地點，主動提問，並把否定與數量說準確。",
    moduleIds: ["contractions-places", "c-est-il-est", "questions-registers", "negation-expanded", "quantity-partitives"],
  },
  {
    id: "a2-sentence-tools",
    level: "A2",
    title: "句子工具與生活互動",
    description: "用情態動詞、受詞代名詞、副詞、比較與命令式處理生活互動。",
    moduleIds: ["modal-infinitive", "object-pronouns", "indirect-object-pronouns", "adverb-position", "comparatives"],
  },
  {
    id: "a2-time-and-directions",
    level: "A2",
    title: "指路、計畫與過去",
    description: "從給路線、近期計畫與剛發生的事，走到完整過去敘事。",
    moduleIds: ["imperative-directions", "future-near", "recent-past", "compound-past-foundations", "reflexive-past"],
  },
  {
    id: "b1-time-hypothesis",
    level: "B1",
    title: "時間與假設",
    description: "在過去、未來與條件之間建立清楚時間線。",
    moduleIds: ["imperfect-intro", "past-contrast", "future-simple", "conditionnel-present", "si-patterns"],
  },
  {
    id: "b1-pronoun-rewrite",
    level: "B1",
    title: "敘事層次與句子改寫",
    description: "用愈過去式、代名詞與關係句提高連貫度。",
    moduleIds: ["plus-que-parfait", "pronouns-y-en", "pronoun-order", "relative-reformulation", "preceding-cod-agreement"],
  },
  {
    id: "b1-complex-sentences",
    level: "B1",
    title: "複句與轉述",
    description: "表達同時、被動、轉述、必要與原因。",
    moduleIds: ["gerund-participle", "passive-voice", "reported-speech", "subjunctive-foundations", "cause-consequence"],
  },
  {
    id: "b1-argumentation",
    level: "B1",
    title: "目的、讓步與互動論述",
    description: "在口說與寫作中加入目的、限制、例子與細緻立場。",
    moduleIds: ["purpose-expression", "concession-opposition", "polite-requests", "opinion-builder", "hypothesis-nuance"],
  },
  {
    id: "b1-tcf-to-b2",
    level: "B1 → B2",
    title: "從任務輸出進入 B2",
    description: "先完成實用訊息，再掌握 B2 語氣、關係句、時態與過去反事實。",
    moduleIds: ["tcf-message", "subjunctive-choice", "compound-relatives", "tense-sequence", "past-hypotheses-regret"],
  },
  {
    id: "b2-tcf",
    level: "B2",
    title: "正式改寫與 TCF 論證",
    description: "控制資訊焦點與正式語域，完成雙觀點綜合及限時論證。",
    moduleIds: ["causative-passive", "nominalization", "formal-register-correction", "viewpoint-synthesis", "tcf-task3-b2"],
  },
];

const LEGACY_CURRICULUM_MODULE_IDS = Object.freeze([
  "future-near",
  "recent-past",
  "object-pronouns",
  "comparatives",
  "imperative-directions",
  "reflexive-past",
  "imperfect-intro",
  "past-contrast",
  "pronouns-y-en",
  "polite-requests",
  "opinion-builder",
  "tcf-message",
  "relative-reformulation",
  "hypothesis-nuance",
  "viewpoint-synthesis",
  "tcf-task3-b2",
]);

const CURRICULUM_VERSION = 2;
const CURRICULUM_REPETITIONS = 3;
const DAILY_TASK_IDS = Object.freeze(["recall", "weakness", "advance", "output"]);
const DAILY_TASK_ID_SET = new Set(DAILY_TASK_IDS);

const DAY = 86_400_000;
const NOW = () => Date.now();
const OPENROUTER_ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";
const OPENROUTER_MODEL = "openrouter/free";
const OPENROUTER_TIMEOUT_MS = 20_000;
const OPENROUTER_MAX_ATTEMPTS = 2;
const OPENROUTER_RETRYABLE_STATUS = new Set([408, 425, 500, 502, 503, 504]);
const PROGRESS_BACKUP_KEY = "encore-progress-backup";
const STUDY_HISTORY_KEY = "encore-study-history-v1";
const PROGRESS_EXPORT_VERSION = 3;
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
localStorage.removeItem(OPENROUTER_KEY_KEY);
let githubSyncTimer = null;
let githubSyncInFlight = false;
let githubSyncPending = false;
let githubSyncVerified = false;
let activeAiReviewRun = 0;
let dailyTransitionTimer = null;
const allCards = Object.entries(studySets).flatMap(([set, cards]) =>
  cards.map((card, index) => ({ ...card, set, id: card.id || `${set}-${index}` }))
);

function getTodayKey(date = new Date()) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
}

function readJsonSafe(rawValue, fallback = null) {
  if (rawValue === null || rawValue === undefined) return fallback;
  try {
    return JSON.parse(rawValue);
  } catch {
    return fallback;
  }
}

function normalizeStudyHistoryEntry(raw = {}) {
  const safeRaw = raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};
  const answered = Math.max(0, Math.floor(Number(safeRaw.answered) || 0));
  return {
    answered,
    correct: Math.min(answered, Math.max(0, Math.floor(Number(safeRaw.correct) || 0))),
    sessions: Math.max(0, Math.floor(Number(safeRaw.sessions) || 0)),
    updatedAt: Math.max(0, Number(safeRaw.updatedAt) || 0),
  };
}

function isDateKey(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value || ""))) return false;
  const [year, month, day] = value.split("-").map(Number);
  const parsed = new Date(Date.UTC(year, month - 1, day));
  return parsed.getUTCFullYear() === year
    && parsed.getUTCMonth() === month - 1
    && parsed.getUTCDate() === day;
}

function shiftDateKey(dateKey, dayOffset) {
  if (!isDateKey(dateKey)) return "";
  const [year, month, day] = dateKey.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day + dayOffset));
  return [
    date.getUTCFullYear(),
    String(date.getUTCMonth() + 1).padStart(2, "0"),
    String(date.getUTCDate()).padStart(2, "0"),
  ].join("-");
}

function normalizeStudyHistory(raw = {}, legacy = {}) {
  const safeRaw = raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};
  const normalized = {};
  Object.keys(safeRaw)
    .filter(isDateKey)
    .sort()
    .forEach((dateKey) => {
      normalized[dateKey] = normalizeStudyHistoryEntry(safeRaw[dateKey]);
    });

  if (!Object.keys(normalized).length) {
    const lastStudyDate = isDateKey(legacy?.lastStudyDate) ? legacy.lastStudyDate : "";
    const streak = Math.max(0, Math.floor(Number(legacy?.streak) || 0));
    for (let offset = streak - 1; lastStudyDate && offset >= 0; offset -= 1) {
      normalized[shiftDateKey(lastStudyDate, -offset)] = {
        answered: 0,
        correct: 0,
        sessions: 1,
        updatedAt: 0,
      };
    }
  }
  return normalized;
}

function recordStudyActivity(history, dateKey, activity = {}) {
  const normalized = normalizeStudyHistory(history);
  if (!isDateKey(dateKey)) return normalized;
  const current = normalizeStudyHistoryEntry(normalized[dateKey]);
  const answeredIncrement = activity.session ? 0 : 1;
  const correctIncrement = !activity.session && activity.correct ? 1 : 0;
  normalized[dateKey] = {
    answered: current.answered + answeredIncrement,
    correct: current.correct + correctIncrement,
    sessions: current.sessions + (activity.session ? 1 : 0),
    updatedAt: Math.max(current.updatedAt, Number(activity.updatedAt) || 0),
  };
  return normalized;
}

function mergeStudyHistories(localHistory, cloudHistory) {
  const local = normalizeStudyHistory(localHistory);
  const cloud = normalizeStudyHistory(cloudHistory);
  const merged = {};
  [...new Set([...Object.keys(local), ...Object.keys(cloud)])]
    .sort()
    .forEach((dateKey) => {
      const localEntry = normalizeStudyHistoryEntry(local[dateKey]);
      const cloudEntry = normalizeStudyHistoryEntry(cloud[dateKey]);
      merged[dateKey] = {
        answered: Math.max(localEntry.answered, cloudEntry.answered),
        correct: Math.max(localEntry.correct, cloudEntry.correct),
        sessions: Math.max(localEntry.sessions, cloudEntry.sessions),
        updatedAt: Math.max(localEntry.updatedAt, cloudEntry.updatedAt),
      };
    });
  return merged;
}

function calculateStudyStreak(history, endDateKey) {
  const normalized = normalizeStudyHistory(history);
  if (!isDateKey(endDateKey) || !normalized[endDateKey]) return 0;
  let streak = 0;
  let cursor = endDateKey;
  while (normalized[cursor]) {
    streak += 1;
    cursor = shiftDateKey(cursor, -1);
  }
  return streak;
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

function mergeReviewMaps(localReviews, cloudReviews) {
  const merged = {};
  const keys = new Set([...Object.keys(localReviews || {}), ...Object.keys(cloudReviews || {})]);
  keys.forEach((key) => {
    const local = normalizeReviewEntry(localReviews?.[key]);
    const cloud = normalizeReviewEntry(cloudReviews?.[key]);
    if (!local) {
      merged[key] = cloud;
      return;
    }
    if (!cloud) {
      merged[key] = local;
      return;
    }
    const localOrder = [Number(local.lastReviewed || 0), local.attempts];
    const cloudOrder = [Number(cloud.lastReviewed || 0), cloud.attempts];
    const localIsNewest = localOrder[0] > cloudOrder[0]
      || (localOrder[0] === cloudOrder[0] && localOrder[1] >= cloudOrder[1]);
    const newest = localIsNewest ? local : cloud;
    const correct = Math.max(local.correct, cloud.correct);
    const wrong = Math.max(local.wrong, cloud.wrong);
    merged[key] = {
      ...newest,
      attempts: Math.max(local.attempts, cloud.attempts, correct + wrong),
      correct,
      wrong,
    };
  });
  return merged;
}

function dailyPlansMatch(a, b) {
  if (!a || !b || a.moduleId !== b.moduleId || a.round !== b.round) return false;
  return a.dueCardIds.join("\u0000") === b.dueCardIds.join("\u0000")
    && a.weakCardIds.join("\u0000") === b.weakCardIds.join("\u0000");
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
    studyHistory: state.studyHistory,
    game: state.game,
  };
}

function normalizeProgressData(raw = {}) {
  const result = {
    completed: Array.isArray(raw.completed) ? [...new Set(raw.completed)] : [],
    streak: Math.max(0, Number(raw.streak) || 0),
    reviews: typeof raw.reviews === "object" && raw.reviews ? {} : {},
    lastStudyDate: typeof raw.lastStudyDate === "string" ? raw.lastStudyDate : "",
    studyHistory: normalizeStudyHistory(raw.studyHistory, raw),
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
    updatedAt: getLocalProgressUpdatedAt(),
    state: getProgressSnapshot(),
  };
}

function buildObsidianMarkdownPayload(payload) {
  const stamp = new Date(payload.exportedAt).toLocaleString("zh-TW", { hour12: false });
  const reviews = Object.entries(payload.state?.reviews || {}).filter(([, item]) => item && item.attempts > 0);

  return `# 法語複習進度備份

- 匯出時間：${stamp}
- 連續天數：${payload.state?.streak ?? 0}
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

function normalizeStringArray(raw, allowedValues = null) {
  if (!Array.isArray(raw)) return [];
  return [...new Set(raw.filter((value) => (
    typeof value === "string" && (!allowedValues || allowedValues.has(value))
  )))];
}

function normalizeDailyPlan(raw) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
  const module = ADVANCE_MODULES.find((item) => item.id === raw.moduleId);
  if (!module) return null;
  const knownCardIds = new Set(allCards.map((card) => card.id));
  return {
    moduleId: module.id,
    round: Math.min(
      CURRICULUM_REPETITIONS,
      Math.max(1, Math.floor(Number(raw.round) || 1))
    ),
    dueCardIds: normalizeStringArray(raw.dueCardIds, knownCardIds),
    weakCardIds: normalizeStringArray(raw.weakCardIds, knownCardIds),
    createdAt: Number.isFinite(Number(raw.createdAt)) ? Number(raw.createdAt) : 0,
  };
}

function getDailyPlanKey(plan) {
  if (!plan) return "";
  return [
    plan.moduleId,
    plan.round,
    ...(plan.dueCardIds || []),
    "|",
    ...(plan.weakCardIds || []),
  ].join("\u0000");
}

function normalizeTaskCheckpoint(raw = {}) {
  const safeRaw = raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};
  const results = {};
  if (safeRaw.results && typeof safeRaw.results === "object" && !Array.isArray(safeRaw.results)) {
    Object.entries(safeRaw.results).forEach(([cardId, result]) => {
      if (typeof cardId !== "string" || !result || typeof result !== "object") return;
      results[cardId] = {
        score: Math.max(0, Math.min(100, Number(result.score) || 0)),
        correct: Boolean(result.correct),
        updatedAt: Math.max(0, Number(result.updatedAt) || 0),
      };
    });
  }
  return {
    planKey: typeof safeRaw.planKey === "string" ? safeRaw.planKey : "",
    cardIds: normalizeStringArray(safeRaw.cardIds),
    answeredCardIds: normalizeStringArray(safeRaw.answeredCardIds),
    results,
    rewarded: Boolean(safeRaw.rewarded),
    updatedAt: Math.max(0, Number(safeRaw.updatedAt) || 0),
  };
}

function normalizeTaskCheckpoints(raw = {}) {
  const safeRaw = raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};
  const checkpoints = {};
  Object.entries(safeRaw).forEach(([taskId, checkpoint]) => {
    if (!DAILY_TASK_ID_SET.has(taskId)) return;
    checkpoints[taskId] = normalizeTaskCheckpoint(checkpoint);
  });
  return checkpoints;
}

function mergeTaskCheckpoints(localRaw, cloudRaw) {
  const local = normalizeTaskCheckpoints(localRaw);
  const cloud = normalizeTaskCheckpoints(cloudRaw);
  const merged = {};
  new Set([...Object.keys(local), ...Object.keys(cloud)]).forEach((taskId) => {
    const localCheckpoint = local[taskId];
    const cloudCheckpoint = cloud[taskId];
    if (!localCheckpoint) {
      merged[taskId] = cloudCheckpoint;
      return;
    }
    if (!cloudCheckpoint) {
      merged[taskId] = localCheckpoint;
      return;
    }
    if (localCheckpoint.planKey !== cloudCheckpoint.planKey) {
      merged[taskId] = localCheckpoint.updatedAt >= cloudCheckpoint.updatedAt
        ? localCheckpoint
        : cloudCheckpoint;
      return;
    }
    const results = { ...localCheckpoint.results };
    Object.entries(cloudCheckpoint.results).forEach(([cardId, cloudResult]) => {
      const localResult = results[cardId];
      if (!localResult || cloudResult.updatedAt > localResult.updatedAt) results[cardId] = cloudResult;
    });
    merged[taskId] = {
      planKey: localCheckpoint.planKey,
      cardIds: localCheckpoint.cardIds.length >= cloudCheckpoint.cardIds.length
        ? localCheckpoint.cardIds
        : cloudCheckpoint.cardIds,
      answeredCardIds: [...new Set([
        ...localCheckpoint.answeredCardIds,
        ...cloudCheckpoint.answeredCardIds,
      ])],
      results,
      rewarded: localCheckpoint.rewarded || cloudCheckpoint.rewarded,
      updatedAt: Math.max(localCheckpoint.updatedAt, cloudCheckpoint.updatedAt),
    };
  });
  return merged;
}

function migrateCurriculumIndex(rawIndex, rawVersion = 1) {
  const index = Math.max(0, Math.floor(Number(rawIndex) || 0));
  const currentCap = ADVANCE_MODULES.length * CURRICULUM_REPETITIONS;
  if (Number(rawVersion) >= CURRICULUM_VERSION) return Math.min(index, currentCap);

  const legacyCap = LEGACY_CURRICULUM_MODULE_IDS.length * CURRICULUM_REPETITIONS;
  if (index >= legacyCap) return currentCap;

  const legacyModuleIndex = Math.floor(index / CURRICULUM_REPETITIONS);
  const roundOffset = index % CURRICULUM_REPETITIONS;
  const moduleId = LEGACY_CURRICULUM_MODULE_IDS[legacyModuleIndex];
  const currentModuleIndex = ADVANCE_MODULES.findIndex((module) => module.id === moduleId);
  if (currentModuleIndex < 0) return Math.min(index, currentCap);
  return currentModuleIndex * CURRICULUM_REPETITIONS + roundOffset;
}

function normalizeGameState(raw = {}) {
  const today = getTodayKey();
  const safeRaw = raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};
  const rawDaily = safeRaw.daily && typeof safeRaw.daily === "object" && !Array.isArray(safeRaw.daily)
    ? safeRaw.daily
    : null;
  const normalizedPlan = normalizeDailyPlan(rawDaily?.plan);
  const completedTaskIds = normalizedPlan
    ? normalizeStringArray(rawDaily?.completedTaskIds, DAILY_TASK_ID_SET)
    : [];
  const daily = rawDaily?.date === today
    ? {
        date: today,
        completedQuests: normalizeStringArray(rawDaily.completedQuests),
        completedTaskIds,
        plan: normalizedPlan,
        taskCheckpoints: normalizeTaskCheckpoints(rawDaily.taskCheckpoints),
        updatedAt: Math.max(0, Number(rawDaily.updatedAt) || 0),
        curriculumAdvanced: normalizedPlan
          && DAILY_TASK_IDS.every((taskId) => completedTaskIds.includes(taskId))
          && Boolean(rawDaily.curriculumAdvanced),
      }
    : {
        date: today,
        completedQuests: [],
        completedTaskIds: [],
        plan: null,
        taskCheckpoints: {},
        updatedAt: 0,
        curriculumAdvanced: false,
      };
  return {
    xp: 0,
    level: 1,
    coins: 0,
    runStreak: 0,
    sessionsDone: 0,
    bossDefeated: 0,
    curriculumIndex: 0,
    curriculumVersion: CURRICULUM_VERSION,
    achievements: [],
    logs: [],
    daily: {
      date: today,
      completedQuests: [],
      completedTaskIds: [],
      plan: null,
      taskCheckpoints: {},
      updatedAt: 0,
    },
    ...safeRaw,
    curriculumIndex: migrateCurriculumIndex(
      safeRaw.curriculumIndex,
      safeRaw.curriculumVersion,
    ),
    curriculumVersion: CURRICULUM_VERSION,
    achievements: normalizeStringArray(safeRaw.achievements),
    logs: normalizeStringArray(safeRaw.logs),
    daily,
  };
}

const QUEST_DEFS = [
  { id: "review-any", title: "完成 1 場複習", target: 1, rewardXp: 18, rewardCoins: 2 },
  { id: "review-5", title: "完成 5 題以上", target: 5, rewardXp: 20, rewardCoins: 3 },
  { id: "accuracy-4", title: "本場至少 4 題正確", target: 4, rewardXp: 30, rewardCoins: 4 },
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
  if (localStorage.getItem(STUDY_HISTORY_KEY) === null && backupState.studyHistory) {
    localStorage.setItem(STUDY_HISTORY_KEY, JSON.stringify(backupState.studyHistory));
  }
}

const state = {
  set: "due",
  session: [],
  index: 0,
  results: [],
  completed: JSON.parse(localStorage.getItem("encore-completed") || "[]"),
  streak: Math.max(0, Number(localStorage.getItem("encore-streak")) || 0),
  reviews: JSON.parse(localStorage.getItem("encore-reviews-v2") || "{}"),
  lastStudyDate: localStorage.getItem("encore-last-study-date") || "",
  sessionMode: "normal",
  sessionSource: "due",
  dailyTaskId: null,
  canGrade: false,
  game: normalizeGameState(JSON.parse(localStorage.getItem("encore-game-state") || "{}")),
  studyHistory: normalizeStudyHistory(
    readJsonSafe(localStorage.getItem(STUDY_HISTORY_KEY), backupState?.studyHistory || {}),
    {
      streak: Math.max(0, Number(localStorage.getItem("encore-streak")) || 0),
      lastStudyDate: localStorage.getItem("encore-last-study-date") || "",
    },
  ),
};
state.studyHistory = mergeStudyHistories(
  state.studyHistory,
  normalizeStudyHistory(backupState?.studyHistory || {}, backupState || {}),
);
const initialStudyDates = Object.keys(state.studyHistory).filter(isDateKey).sort();
if (initialStudyDates.length) {
  state.lastStudyDate = initialStudyDates.at(-1);
  state.streak = calculateStudyStreak(state.studyHistory, state.lastStudyDate);
}
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

function getLocalProgressSyncedAt() {
  return Number(readJsonSafe(localStorage.getItem(PROGRESS_BACKUP_KEY), {})?.syncedAt || 0);
}

function saveAllProgress({
  syncCloud = true,
  updatedAt = NOW(),
  syncedAt = getLocalProgressSyncedAt(),
} = {}) {
  localStorage.setItem("encore-completed", JSON.stringify(state.completed));
  localStorage.setItem("encore-streak", String(state.streak));
  localStorage.setItem("encore-reviews-v2", JSON.stringify(state.reviews));
  localStorage.setItem("encore-last-study-date", state.lastStudyDate || "");
  localStorage.setItem("encore-game-state", JSON.stringify(state.game));
  localStorage.setItem(STUDY_HISTORY_KEY, JSON.stringify(state.studyHistory));
  const backup = {
    version: PROGRESS_EXPORT_VERSION,
    updatedAt,
    syncedAt,
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
  state.studyHistory = normalized.studyHistory;
  state.game = normalized.game;
  const latestHistoryDate = Object.keys(state.studyHistory).filter(isDateKey).sort().at(-1);
  if (latestHistoryDate) {
    state.lastStudyDate = latestHistoryDate;
    state.streak = calculateStudyStreak(state.studyHistory, latestHistoryDate);
  }
  saveAllProgress(options);
  renderProgress();
  renderStreakMotivation();
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
  const dot = $("#settingsSyncDot");
  if (dot) dot.dataset.status = status;
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
  if (response.status === 401) {
    throw new Error("Token 無效或已過期。請重新建立 fine-grained Token。");
  }
  if (response.status === 404) {
    throw new Error("Token 無法讀取這個 private repo。請確認 Token 已選取 french-review-progress-private，並開啟 Contents：Read and write。");
  }
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

function mergeGameStates(localGame, cloudGame, preferLocal) {
  const local = normalizeGameState(localGame || {});
  const cloud = normalizeGameState(cloudGame || {});
  const newest = preferLocal ? local : cloud;
  const older = preferLocal ? cloud : local;
  const curriculumIndex = Math.max(local.curriculumIndex, cloud.curriculumIndex);
  let planOwner = newest;
  let planFallback = older;
  const curriculumIndexesDiffer = local.curriculumIndex !== cloud.curriculumIndex;
  const samePlan = dailyPlansMatch(local.daily.plan, cloud.daily.plan);
  if (curriculumIndexesDiffer) {
    planOwner = local.curriculumIndex > cloud.curriculumIndex ? local : cloud;
    planFallback = planOwner === local ? cloud : local;
  } else if (!samePlan && local.daily.plan && cloud.daily.plan) {
    planOwner = local.daily.updatedAt >= cloud.daily.updatedAt ? local : cloud;
    planFallback = planOwner === local ? cloud : local;
  }
  if (!curriculumIndexesDiffer && !planOwner.daily.plan && planFallback.daily.plan) {
    [planOwner, planFallback] = [planFallback, planOwner];
  }
  const mergedDaily = {
    ...planOwner.daily,
    completedQuests: [...new Set([
      ...(local.daily?.completedQuests || []),
      ...(cloud.daily?.completedQuests || []),
    ])],
    completedTaskIds: samePlan
      ? [...new Set([
          ...(local.daily?.completedTaskIds || []),
          ...(cloud.daily?.completedTaskIds || []),
        ])]
      : [...(planOwner.daily.completedTaskIds || [])],
    plan: planOwner.daily.plan || null,
    taskCheckpoints: samePlan
      ? mergeTaskCheckpoints(local.daily.taskCheckpoints, cloud.daily.taskCheckpoints)
      : normalizeTaskCheckpoints(planOwner.daily.taskCheckpoints),
    updatedAt: Math.max(local.daily.updatedAt || 0, cloud.daily.updatedAt || 0),
    curriculumAdvanced: samePlan
      ? Boolean(local.daily?.curriculumAdvanced || cloud.daily?.curriculumAdvanced)
      : Boolean(planOwner.daily.curriculumAdvanced),
  };
  return normalizeGameState({
    ...older,
    ...newest,
    xp: Math.max(local.xp || 0, cloud.xp || 0),
    level: Math.max(local.level || 1, cloud.level || 1),
    coins: Math.max(local.coins || 0, cloud.coins || 0),
    runStreak: Math.max(local.runStreak || 0, cloud.runStreak || 0),
    sessionsDone: Math.max(local.sessionsDone || 0, cloud.sessionsDone || 0),
    bossDefeated: Math.max(local.bossDefeated || 0, cloud.bossDefeated || 0),
    curriculumIndex,
    achievements: [...new Set([...(local.achievements || []), ...(cloud.achievements || [])])],
    logs: [...new Set([...(newest.logs || []), ...(older.logs || [])])].slice(0, 12),
    daily: mergedDaily,
  });
}

function mergeProgressPayloads(localPayload, cloudPayload) {
  if (!cloudPayload?.state) return localPayload;
  const local = normalizeProgressData(localPayload?.state || {});
  const cloud = normalizeProgressData(cloudPayload.state);
  const localTime = Number(localPayload.updatedAt || localPayload.exportedAt || 0);
  const cloudTime = Number(cloudPayload.updatedAt || cloudPayload.exportedAt || 0);
  const preferLocal = localTime >= cloudTime;
  const latestStudyDate = local.lastStudyDate >= cloud.lastStudyDate ? local.lastStudyDate : cloud.lastStudyDate;
  const latestStreak = local.lastStudyDate === cloud.lastStudyDate
    ? Math.max(local.streak, cloud.streak)
    : latestStudyDate === local.lastStudyDate ? local.streak : cloud.streak;

  return {
    app: "encore-french-review",
    schema: "french-review-progress",
    version: PROGRESS_EXPORT_VERSION,
    exportedAt: Math.max(
      Number(localPayload.exportedAt || 0),
      Number(cloudPayload.exportedAt || 0),
    ),
    updatedAt: Math.max(localTime, cloudTime),
    state: {
      completed: [...new Set([...local.completed, ...cloud.completed])],
      streak: latestStreak,
      reviews: mergeReviewMaps(local.reviews, cloud.reviews),
      lastStudyDate: latestStudyDate,
      studyHistory: mergeStudyHistories(local.studyHistory, cloud.studyHistory),
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
    const localPayload = buildExportPayload();
    const merged = mergeProgressPayloads(localPayload, cloudFile?.payload);
    const syncedAt = NOW();
    merged.exportedAt = syncedAt;
    importProgressPayload(merged, { syncCloud: false, updatedAt: merged.updatedAt, syncedAt });
    if (push) {
      try {
        await writeGitHubProgress(config, token, merged, cloudFile?.sha);
      } catch (error) {
        if (error.status !== 409) throw error;
        const latestCloudFile = await fetchGitHubProgress(config, token);
        const retryPayload = mergeProgressPayloads(merged, latestCloudFile?.payload);
        const retrySyncedAt = NOW();
        retryPayload.exportedAt = retrySyncedAt;
        importProgressPayload(retryPayload, {
          syncCloud: false,
          updatedAt: retryPayload.updatedAt,
          syncedAt: retrySyncedAt,
        });
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

let settingsPreviousFocus = null;

function openSettings() {
  settingsPreviousFocus = document.activeElement;
  $("#settingsShell").hidden = false;
  $(".topbar").inert = true;
  $("main").inert = true;
  document.body.classList.add("settings-open");
  $("#settingsButton").setAttribute("aria-expanded", "true");
  $("#settingsClose").focus();
}

function closeSettings() {
  $("#settingsShell").hidden = true;
  $(".topbar").inert = false;
  $("main").inert = false;
  document.body.classList.remove("settings-open");
  $("#settingsButton").setAttribute("aria-expanded", "false");
  if (settingsPreviousFocus?.focus) settingsPreviousFocus.focus();
}

function trapSettingsFocus(event) {
  if (event.key !== "Tab" || $("#settingsShell").hidden) return;
  const focusable = $$(
    'button:not([disabled]):not([tabindex="-1"]), a[href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
    $("#settingsPanel"),
  ).filter((element) => element.offsetParent !== null);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
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
    state.game.daily = {
      date: today,
      completedQuests: [],
      completedTaskIds: [],
      plan: null,
      taskCheckpoints: {},
      updatedAt: 0,
    };
  }
}

function cardsFromSet(setName, limit = Infinity) {
  return allCards.filter((card) => card.set === setName).slice(0, limit);
}

function getDueCards(limit = 7) {
  const now = NOW();
  const due = allCards
    .filter((card) => {
      const review = reviewFor(card);
      return review.attempts > 0 && review.nextReview <= now;
    })
    .sort((a, b) => {
      const ar = reviewFor(a);
      const br = reviewFor(b);
      const aWeak = ar.wrong / Math.max(1, ar.attempts);
      const bWeak = br.wrong / Math.max(1, br.attempts);
      return bWeak - aWeak || ar.nextReview - br.nextReview;
    });
  return (due.length ? due : cardsFromSet("etrePast", 5)).slice(0, limit);
}

function getWeakCards(limit = 4) {
  const weak = allCards
    .filter((card) => {
      const review = reviewFor(card);
      return review.attempts >= 2 && review.wrong > 0;
    })
    .sort((a, b) => {
      const ar = reviewFor(a);
      const br = reviewFor(b);
      return (br.wrong / br.attempts) - (ar.wrong / ar.attempts) || br.wrong - ar.wrong;
    });
  return (weak.length ? weak : cardsFromSet("etrePast", 4)).slice(0, limit);
}

function getCurriculumPosition(index = state.game.curriculumIndex) {
  const completedDays = Math.max(0, Math.floor(Number(index) || 0));
  const rawModuleIndex = Math.floor(completedDays / CURRICULUM_REPETITIONS);
  const moduleIndex = Math.min(rawModuleIndex, ADVANCE_MODULES.length - 1);
  const complete = rawModuleIndex >= ADVANCE_MODULES.length;
  return {
    module: ADVANCE_MODULES[moduleIndex],
    moduleIndex,
    round: complete ? CURRICULUM_REPETITIONS : (completedDays % CURRICULUM_REPETITIONS) + 1,
    complete,
  };
}

function ensureDailyPlan() {
  resetDailyIfNeeded();
  const existing = state.game.daily.plan;
  const curriculum = getCurriculumPosition();
  const knownModule = existing && ADVANCE_MODULES.some((module) => module.id === existing.moduleId);
  const hasKnownCards = existing
    && cardsByIds(existing.dueCardIds).length
    && cardsByIds(existing.weakCardIds).length;
  const matchesCurriculum = existing && (
    state.game.daily.curriculumAdvanced
    || (existing.moduleId === curriculum.module.id && existing.round === curriculum.round)
  );
  if (knownModule && hasKnownCards && matchesCurriculum) return existing;

  const { module, round } = curriculum;
  const dueCards = getDueCards();
  const weakCards = getWeakCards();
  state.game.daily.plan = {
    moduleId: module.id,
    round,
    dueCardIds: dueCards.map((card) => card.id),
    weakCardIds: weakCards.map((card) => card.id),
    createdAt: NOW(),
  };
  state.game.daily.taskCheckpoints = {};
  state.game.daily.updatedAt = state.game.daily.plan.createdAt;
  saveAllProgress({
    syncCloud: false,
    updatedAt: getLocalProgressUpdatedAt(),
  });
  return state.game.daily.plan;
}

function getDailyModule() {
  const plan = ensureDailyPlan();
  return ADVANCE_MODULES.find((module) => module.id === plan.moduleId) || ADVANCE_MODULES[0];
}

function getDailyTasks() {
  const plan = ensureDailyPlan();
  const module = getDailyModule();
  const weakSkill = cardsByIds(plan.weakCardIds)[0]?.skill || "助動詞 être";
  return [
    {
      id: "recall",
      tone: "coral",
      glyph: "↺",
      kicker: "8 MIN · ACTIVE RECALL",
      title: "今日回想，先不看提示",
      description: `${plan.dueCardIds.length} 題依到期與最近課程排序；未接觸的新題不列入到期統計。`,
      action: "cards",
      cardIds: plan.dueCardIds,
    },
    {
      id: "weakness",
      tone: "blue",
      glyph: "△",
      kicker: "8 MIN · FEEDBACK",
      title: `修補弱點：${weakSkill}`,
      description: "混入相似句型，答錯後先辨認錯誤類型，再自己改一次。",
      action: "cards",
      cardIds: plan.weakCardIds,
    },
    {
      id: "advance",
      tone: "yellow",
      glyph: "＋1",
      kicker: `9 MIN · ${module.level} · ${plan.round}/${CURRICULUM_REPETITIONS}`,
      title: `超前：${module.title}`,
      description: module.outcome,
      action: "module",
      set: module.set,
      phase: "learn",
    },
    {
      id: "output",
      tone: "green",
      glyph: ")))",
      kicker: "10 MIN · OUTPUT + FLUENCY",
      title: "完整輸出，再說第二次",
      description: "先說或寫完整答案；看過回饋後，再用同一內容說得更順。",
      action: "module",
      set: module.set,
      phase: "output",
    },
  ];
}

function cardsByIds(ids = []) {
  const wanted = new Set(Array.isArray(ids) ? ids : []);
  return allCards.filter((card) => wanted.has(card.id));
}

function isModuleReady(module) {
  const cards = cardsFromSet(module.set);
  return cards.length > 0 && cards.every((card) => {
    const review = reviewFor(card);
    return review.attempts >= 2 && review.streak >= 2 && review.lastScore >= 75;
  });
}

function getDailyTaskCheckpoint(taskId) {
  if (!taskId) return null;
  const checkpoint = normalizeTaskCheckpoint(state.game.daily.taskCheckpoints?.[taskId]);
  if (!checkpoint.planKey || checkpoint.planKey !== getDailyPlanKey(state.game.daily.plan)) return null;
  return checkpoint;
}

function recordDailyTaskAnswer(item, { score, correct, updatedAt }) {
  const taskId = state.dailyTaskId;
  if (!taskId || !item?.id) return;
  const planKey = getDailyPlanKey(state.game.daily.plan);
  const current = getDailyTaskCheckpoint(taskId) || normalizeTaskCheckpoint({
    planKey,
    cardIds: state.session.map((card) => card.id),
  });
  current.planKey = planKey;
  current.cardIds = [...new Set([...current.cardIds, ...state.session.map((card) => card.id)])];
  current.answeredCardIds = [...new Set([...current.answeredCardIds, item.id])];
  current.results[item.id] = {
    score,
    correct,
    updatedAt,
  };
  current.updatedAt = Math.max(current.updatedAt, Number(updatedAt) || 0);
  state.game.daily.taskCheckpoints[taskId] = current;
  state.game.daily.updatedAt = Math.max(state.game.daily.updatedAt || 0, current.updatedAt);
}

function dailyTaskCards(task) {
  if (!task) return [];
  if (task.action === "cards") return cardsByIds(task.cardIds);
  const cards = buildSession(task.set);
  if (task.phase === "learn") {
    return cards.filter((card) => card.phase === "advance" || card.phase === "input");
  }
  if (task.phase === "output") {
    return cards.filter((card) => card.phase === "output" || card.phase === "fluency");
  }
  return cards;
}

function checkpointResults(taskId) {
  const checkpoint = getDailyTaskCheckpoint(taskId);
  return checkpoint ? Object.values(checkpoint.results) : [];
}

function rewardDailyCheckpointIfNeeded(taskId) {
  const checkpoint = getDailyTaskCheckpoint(taskId);
  if (!checkpoint || checkpoint.rewarded) return;
  const results = checkpointResults(taskId);
  if (!results.length) return;
  const good = results.filter((result) => result.correct ?? result.score >= 75).length;
  const total = results.length;
  const baseXp = total * 10 + good * 4;
  const now = NOW();
  checkpoint.rewarded = true;
  checkpoint.updatedAt = Math.max(checkpoint.updatedAt, now);
  state.game.daily.taskCheckpoints[taskId] = checkpoint;
  state.game.daily.updatedAt = Math.max(state.game.daily.updatedAt || 0, now);
  addXp(baseXp);
  addXp(evaluateAndUnlockQuests({ totalCards: total, goodCount: good }));
  state.game.sessionsDone += 1;
  state.game.runStreak = good >= Math.max(1, Math.floor(total / 2))
    ? state.game.runStreak + 1
    : 0;
  recordStudySession(now);
  const title = "完成一般練習";
  state.game.logs = [`${title}：${good}/${total} 題，+${baseXp} XP`, ...state.game.logs].slice(0, 6);
  refreshAchievements();
  saveGameState();
  logRun(title);
}

function finishDailyTask(taskId) {
  if (!taskId) return;
  resetDailyIfNeeded();
  const completed = new Set(state.game.daily.completedTaskIds || []);
  completed.add(taskId);
  state.game.daily.completedTaskIds = [...completed];
  delete state.game.daily.taskCheckpoints[taskId];
  state.game.daily.updatedAt = NOW();

  const allDone = getDailyTasks().every((task) => completed.has(task.id));
  if (allDone && !state.game.daily.curriculumAdvanced) {
    const curriculum = getCurriculumPosition();
    const readyForNextModule = curriculum.round < CURRICULUM_REPETITIONS
      || isModuleReady(curriculum.module);
    state.game.daily.curriculumAdvanced = true;
    if (readyForNextModule) {
      state.game.curriculumIndex = Math.min(
        Math.max(0, Number(state.game.curriculumIndex) || 0) + 1,
        ADVANCE_MODULES.length * CURRICULUM_REPETITIONS,
      );
    }
    addXp(30);
    state.game.coins += 3;
    state.game.logs = [
      readyForNextModule
        ? `完成每日四段訓練：${getDailyModule().title}，+30 XP`
        : `${getDailyModule().title} 尚未穩定，明天再練第 ${CURRICULUM_REPETITIONS} 輪`,
      ...state.game.logs,
    ].slice(0, 6);
    updateStreakForToday();
    showToast(
      readyForNextModule
        ? "今天的複習完成，學習路線已更新。"
        : "今日完成；新主題尚未穩定，明天再練一輪。"
    );
  }
  saveAllProgress();
  renderProgress();
  renderStreakMotivation();
}

function getNextDailyTask() {
  resetDailyIfNeeded();
  const completed = new Set(state.game.daily.completedTaskIds || []);
  return getDailyTasks().find((task) => !completed.has(task.id)) || null;
}

function launchDailyTask(task) {
  if (!task) return;
  const cards = dailyTaskCards(task);
  const checkpoint = getDailyTaskCheckpoint(task.id);
  const answeredCardIds = new Set(checkpoint?.answeredCardIds || []);
  const remainingCards = cards.filter((card) => !answeredCardIds.has(card.id));
  if (!remainingCards.length && cards.length) {
    rewardDailyCheckpointIfNeeded(task.id);
    finishDailyTask(task.id);
    const nextTask = getNextDailyTask();
    if (nextTask) launchDailyTask(nextTask);
    return;
  }
  startSession("daily", {
    cards: remainingCards,
    dailyTaskId: task.id,
  });
}

function startDailyReview() {
  const nextTask = getNextDailyTask();
  if (!nextTask) {
    showToast("今天的複習已完成，明天會接續下一輪。");
    return;
  }
  launchDailyTask(nextTask);
}

function buildSession(setName, options = {}) {
  if (options.cards) {
    return options.cards.map((card, index) => ({
      ...card,
      id: card.id || `${card.set || setName}-${index}`,
    }));
  }
  if (setName !== "due") {
    return studySets[setName]
      ? studySets[setName].map((card, index) => ({
          ...card,
          set: setName,
          id: card.id || `${setName}-${index}`,
        }))
      : [];
  }

  return getDueCards();
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
    return true;
  }
  return false;
}

function refreshAchievements() {
  let changed = false;
  ACHIEVEMENTS.forEach((achievement) => {
    if (achievement.condition(state.game)) changed = awardAchievement(achievement.id) || changed;
  });
  if (changed) saveGameState();
  return changed;
}

function logRun(entry) {
  state.game.logs.unshift(`${getTodayKey()} ${entry}`);
  state.game.logs = state.game.logs.slice(0, 6);
  saveGameState();
}

function evaluateAndUnlockQuests({ totalCards, goodCount }) {
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

function syncLegacyStreakFromHistory(dateKey = getTodayKey()) {
  const historyDates = Object.keys(state.studyHistory).filter(isDateKey).sort();
  const latestDate = historyDates.at(-1) || "";
  state.lastStudyDate = latestDate;
  state.streak = latestDate ? calculateStudyStreak(state.studyHistory, latestDate) : 0;
  if (dateKey && state.studyHistory[dateKey]) {
    state.lastStudyDate = dateKey;
    state.streak = calculateStudyStreak(state.studyHistory, dateKey);
  }
}

function recordStudyAnswer({ correct, updatedAt }) {
  const today = getTodayKey();
  state.studyHistory = recordStudyActivity(state.studyHistory, today, { correct, updatedAt });
  syncLegacyStreakFromHistory(today);
}

function recordStudySession(updatedAt = NOW()) {
  const today = getTodayKey();
  state.studyHistory = recordStudyActivity(state.studyHistory, today, {
    session: true,
    updatedAt,
  });
  syncLegacyStreakFromHistory(today);
}

function updateStreakForToday() {
  const today = getTodayKey();
  if (!state.studyHistory[today]) {
    state.studyHistory = recordStudyActivity(state.studyHistory, today, {
      session: true,
      updatedAt: NOW(),
    });
  }
  syncLegacyStreakFromHistory(today);
  $("#streakCount").textContent = state.streak;
}

function showView(name) {
  if (name !== "review" && dailyTransitionTimer) {
    clearTimeout(dailyTransitionTimer);
    dailyTransitionTimer = null;
  }
  $$(".view").forEach((view) => view.classList.remove("active"));
  $$(".nav-link").forEach((link) => link.classList.toggle("active", link.dataset.view === name));
  $(`#${name}-view`).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startSession(setName = "due", options = {}) {
  resetDailyIfNeeded();
  state.set = setName;
  state.index = 0;
  state.results = [];
  state.dailyTaskId = options.dailyTaskId || null;
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
    state.session = buildSession(setName, { cards: options.cards });
    if (options.phase === "learn") {
      state.session = state.session.filter((card) => card.phase === "advance" || card.phase === "input");
    }
    if (options.phase === "output") {
      state.session = state.session.filter((card) => card.phase === "output" || card.phase === "fluency");
    }
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
  activeAiReviewRun += 1;
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  state.canGrade = false;
  $$("[data-grade]").forEach((button) => {
    button.disabled = false;
  });
  const item = state.session[state.index];
  const review = reviewFor(item);
  $("#questionNumber").textContent = state.index + 1;
  $("#sessionTotal").textContent = state.session.length;
  $("#questionCategory").textContent = `${item.category} · ${item.skill}`;
  $("#promptLabel").textContent = item.label;
  $("#questionText").textContent = item.listenOnly
    ? "🎧 題目不顯示。請點右上角「聽題目」。"
    : item.q;
  $("#answerText").textContent = item.a;
  $("#answerNote").textContent = item.note;
  $("#answerArea").classList.remove("visible");
  $("#grading").classList.remove("visible");
  $("#responseBox").style.display = "block";
  $("#typedAnswer").value = "";
  $("#typedAnswer").disabled = false;
  $("#checkAnswer").disabled = true;
  $("#aiReviewButton").disabled = true;
  $("#speakAnswer").hidden = !/[A-Za-zÀ-ÖØ-öø-ÿŒœÆæ]/.test(item.a);
  $("#speakAnswer").disabled = true;
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
  const score = item.openEnded ? 75 : answerScore(input, item.a);
  $("#userAnswerText").textContent = input;
  $("#matchScore").textContent = item.openEnded ? "自評" : `${score}%`;
  $("#resultLabel").textContent = item.openEnded
    ? "參考答案"
    : score >= 90 ? "非常接近" : score >= 70 ? "大致正確" : "需要再看一次";
  $("#answerArea").classList.add("visible");
  $("#grading").classList.add("visible");
  $("#typedAnswer").disabled = true;
  $("#checkAnswer").disabled = true;
  $("#aiReviewButton").disabled = false;
  $("#speakAnswer").disabled = $("#speakAnswer").hidden;
  $("#aiReviewOutput").textContent = "可點選 AI 判別錯誤，或先挑選複習頻率。";
  $("#inputHint").textContent = item.openEnded
    ? "開放題不逐字評分；可用 AI 檢查文法與是否切題"
    : score >= 90 ? "很好，檢查冠詞與拼字" : `重點檢查：${item.skill}`;
  state.results[state.index] = { score, input };
  state.canGrade = true;
}

function getOpenRouterApiKey() {
  return sessionStorage.getItem(OPENROUTER_KEY_KEY) || "";
}

function setAiReviewStatus(message) {
  $("#aiReviewOutput").textContent = message;
}

function speakFrench(text) {
  const phrase = String(text || "").trim();
  if (!phrase) return showToast("目前沒有可播放的法文");
  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
    return showToast("此瀏覽器不支援語音播放");
  }

  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(phrase);
  utterance.lang = "fr-FR";
  utterance.rate = 0.92;
  const voices = speechSynthesis.getVoices();
  const frenchVoice =
    voices.find((voice) => String(voice.lang || "").toLowerCase().replace("_", "-") === "fr-fr") ||
    voices.find((voice) => String(voice.lang || "").toLowerCase().startsWith("fr"));
  if (frenchVoice) utterance.voice = frenchVoice;
  speechSynthesis.speak(utterance);
}

function setOpenRouterKeyStatus(message) {
  $("#openRouterKeyStatus").textContent = message;
}

function getLocalAiFallback(item) {
  return `先不用等 AI：對照參考答案，自評「${item.skill}」、動詞變位、冠詞／介系詞與拼字，再選下方的複習頻率。稍後可重新點 AI 判別。`;
}

async function requestOpenRouterReview(key, item, current) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), OPENROUTER_TIMEOUT_MS);
  try {
    const response = await fetch(OPENROUTER_ENDPOINT, {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
        "HTTP-Referer": "https://zoetw88.github.io/french-daily-review/",
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
    const data = await response.json().catch(() => null);
    if (!response.ok || data?.error) {
      const requestError = new Error("OpenRouter request failed");
      requestError.status = Number(data?.error?.code || response.status || 500);
      requestError.errorType = data?.error?.metadata?.error_type || "";
      const retryAfterSeconds = Number(response.headers.get("Retry-After"));
      requestError.retryAfterMs = Number.isFinite(retryAfterSeconds)
        ? Math.max(0, retryAfterSeconds * 1_000)
        : 800;
      throw requestError;
    }
    const suggestion = data?.choices?.[0]?.message?.content;
    if (!suggestion) {
      const emptyError = new Error("OpenRouter returned no content");
      emptyError.status = 502;
      throw emptyError;
    }
    return suggestion;
  } catch (error) {
    if (error.name === "AbortError") {
      const timeoutError = new Error("OpenRouter timeout");
      timeoutError.status = 408;
      timeoutError.isTimeout = true;
      throw timeoutError;
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
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
    setAiReviewStatus("請先到右上角小齒輪設定本分頁使用的 OpenRouter 金鑰。");
    openSettings();
    setTimeout(() => $("#openRouterApiKey").focus(), 150);
    return;
  }

  const reviewRun = ++activeAiReviewRun;
  $("#aiReviewButton").disabled = true;
  let lastError = null;
  try {
    for (let attempt = 1; attempt <= OPENROUTER_MAX_ATTEMPTS; attempt += 1) {
      if (reviewRun !== activeAiReviewRun) return;
      setAiReviewStatus(
        attempt === 1
          ? "AI 判斷中；20 秒沒有回覆會自動重試一次…"
          : "免費模型目前較忙，正在自動重試最後一次…"
      );
      try {
        const suggestion = await requestOpenRouterReview(key, item, current);
        if (reviewRun !== activeAiReviewRun) return;
        setAiReviewStatus(suggestion);
        return;
      } catch (error) {
        if (reviewRun !== activeAiReviewRun) return;
        lastError = error;
        const retryable = error instanceof TypeError
          || error.isTimeout
          || OPENROUTER_RETRYABLE_STATUS.has(Number(error.status));
        if (!retryable || attempt === OPENROUTER_MAX_ATTEMPTS) break;
        if (Number(error.retryAfterMs) > 5_000) break;
        const retryDelay = Math.min(5_000, Math.max(800, Number(error.retryAfterMs) || 800));
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
      }
    }

    const status = Number(lastError?.status || 0);
    const reason = status === 401 || status === 403
      ? "金鑰無效或權限不足，請到小齒輪重新設定。"
      : status === 429
        ? "免費模型已達流量限制，請稍後再試。"
        : lastError?.isTimeout
          ? "AI 連續兩次都超過 20 秒，已停止等待。"
          : "AI 目前沒有回覆，可能是免費模型暫時忙碌。";
    setAiReviewStatus(`${reason}\n${getLocalAiFallback(item)}`);
  } finally {
    if (reviewRun === activeAiReviewRun) $("#aiReviewButton").disabled = false;
  }
}

function nextGoodInterval(streak) {
  return [3, 7, 14, 30][Math.min(streak, 3)];
}

function gradeAnswer(grade) {
  if (!state.canGrade) return;
  state.canGrade = false;
  activeAiReviewRun += 1;
  $$("[data-grade]").forEach((button) => {
    button.disabled = true;
  });
  const item = state.session[state.index];
  const result = state.results[state.index] || { score: 0, input: "" };
  const current = reviewFor(item);
  const now = NOW();
  const assessedScore = item.openEnded
    ? grade === "good" ? 100 : grade === "hard" ? 60 : 0
    : result.score;
  const correct = assessedScore >= 75;
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
    lastScore: assessedScore,
    skill: item.skill,
  };
  state.results[state.index] = { ...result, score: assessedScore, correct };
  recordStudyAnswer({ correct, updatedAt: now });
  recordDailyTaskAnswer(item, { score: assessedScore, correct, updatedAt: now });
  saveReviews();
  renderMemoryStats();
  renderErrorDashboard();

  if (state.index < state.session.length - 1) {
    state.index += 1;
    renderQuestion();
    return;
  }

  const completedDailyTask = state.dailyTaskId;
  const dailyCheckpoint = completedDailyTask ? getDailyTaskCheckpoint(completedDailyTask) : null;
  const summaryResults = dailyCheckpoint ? Object.values(dailyCheckpoint.results) : state.results;
  const good = summaryResults.filter((resultItem) => resultItem?.correct ?? resultItem?.score >= 75).length;
  const total = summaryResults.length;
  const isBossWin = state.sessionMode === "boss" && good === total;
  const baseXp = total * 10 + good * 4;
  const shouldRewardSession = !dailyCheckpoint?.rewarded;
  if (shouldRewardSession) {
    if (dailyCheckpoint) {
      dailyCheckpoint.rewarded = true;
      dailyCheckpoint.updatedAt = Math.max(dailyCheckpoint.updatedAt, now);
      state.game.daily.taskCheckpoints[completedDailyTask] = dailyCheckpoint;
      state.game.daily.updatedAt = Math.max(state.game.daily.updatedAt || 0, now);
    }
    addXp(baseXp);
    addXp(evaluateAndUnlockQuests({
      totalCards: total,
      goodCount: good,
    }));
    state.game.sessionsDone += 1;
    if (isBossWin) state.game.bossDefeated += 1;
    state.game.runStreak = good >= Math.max(1, Math.floor(total / 2)) ? state.game.runStreak + 1 : 0;
    recordStudySession(now);
    updateStreakForToday();
  }
  const title = isBossWin ? "BOSS 戰全勝" : "完成一般練習";
  if (shouldRewardSession) {
    state.game.logs = [`${title}：${good}/${total} 題，+${baseXp} XP`, ...state.game.logs].slice(0, 6);
  }
  refreshAchievements();
  saveGameState();
  if (shouldRewardSession) logRun(title);
  renderStreakMotivation();
  renderErrorDashboard();
  renderMemoryStats();
  state.dailyTaskId = null;
  if (completedDailyTask) {
    finishDailyTask(completedDailyTask);
    const nextTask = getNextDailyTask();
    if (nextTask) {
      showToast(`完成 ${good} / ${total} 題；接著進入「${nextTask.title}」`);
      dailyTransitionTimer = setTimeout(() => {
        dailyTransitionTimer = null;
        launchDailyTask(nextTask);
      }, 900);
      return;
    }
  }
  dailyTransitionTimer = setTimeout(() => {
    dailyTransitionTimer = null;
    showView("today");
  }, 900);
  showToast(
    completedDailyTask
      ? `今日四段複習完成：${good} / ${total} 題達到 75% 以上`
      : `完成本回合：${good} / ${total} 題達到 75% 以上`
  );
}

function renderProgress() {
  const plan = ensureDailyPlan();
  const module = getDailyModule();
  const tasks = getDailyTasks();
  const completed = new Set(state.game.daily.completedTaskIds || []);
  const weakSkill = cardsByIds(plan.weakCardIds)[0]?.skill || "助動詞 être";
  const locked = Boolean(state.game.daily.curriculumAdvanced);
  const answeredToday = normalizeStudyHistoryEntry(state.studyHistory[getTodayKey()]).answered;
  $("#startReview").disabled = locked;
  $("#startReviewLabel").textContent = locked
    ? `今日複習已完成 · 已答 ${answeredToday} 題`
    : completed.size
      ? `繼續今日複習 · 已答 ${answeredToday} 題 · ${completed.size} / ${tasks.length}`
      : answeredToday
        ? `繼續今日複習 · 已答 ${answeredToday} 題`
        : `開始今日 ${LEARNER_PROFILE.dailyMinutes} 分鐘複習`;

  $("#dailyPlanIntro").innerHTML = `今天先修補 <strong>${weakSkill}</strong>，再超前 <strong>${module.title}</strong>。`;
  renderCurriculumRoadmap();
}

function renderCurriculumRoadmap() {
  const position = getCurriculumPosition();
  const completedModuleCount = position.complete ? ADVANCE_MODULES.length : position.moduleIndex;
  const currentModuleIndex = position.moduleIndex;

  $("#curriculumProgressText").textContent = position.complete
    ? `${ADVANCE_MODULES.length} 課完成 · 已抵達 B2／TCF 訓練`
    : `第 ${currentModuleIndex + 1} / ${ADVANCE_MODULES.length} 課 · ${position.module.level} · 第 ${position.round}/${CURRICULUM_REPETITIONS} 輪`;

  $("#curriculumChapterList").innerHTML = CURRICULUM_CHAPTERS.map((chapter, chapterIndex) => {
    const moduleIndexes = chapter.moduleIds
      .map((moduleId) => ADVANCE_MODULES.findIndex((module) => module.id === moduleId))
      .filter((moduleIndex) => moduleIndex >= 0);
    const chapterComplete = moduleIndexes.every((moduleIndex) => moduleIndex < completedModuleCount);
    const chapterCurrent = !position.complete && moduleIndexes.includes(currentModuleIndex);
    const chapterState = chapterComplete ? "completed" : chapterCurrent ? "current" : "upcoming";
    const stateLabel = chapterComplete ? "完成" : chapterCurrent ? "目前章節" : "稍後";

    return `
      <article class="curriculum-chapter ${chapterState}">
        <header>
          <div class="chapter-index">${String(chapterIndex + 1).padStart(2, "0")}</div>
          <div class="chapter-copy">
            <p>${chapter.level} · ${stateLabel}</p>
            <h3>${chapter.title}</h3>
            <span>${chapter.description}</span>
          </div>
        </header>
        <ol class="curriculum-module-list">
          ${chapter.moduleIds.map((moduleId) => {
            const moduleIndex = ADVANCE_MODULES.findIndex((module) => module.id === moduleId);
            const module = ADVANCE_MODULES[moduleIndex];
            const moduleState = moduleIndex < completedModuleCount
              ? "completed"
              : !position.complete && moduleIndex === currentModuleIndex
                ? "current"
                : "upcoming";
            const moduleMark = moduleState === "completed" ? "✓" : String(moduleIndex + 1).padStart(2, "0");
            return `
              <li class="${moduleState}"${moduleState === "current" ? ' aria-current="step"' : ""}>
                <span>${moduleMark}</span>
                <div>
                  <strong>${module.title}</strong>
                  <small>${module.outcome}</small>
                </div>
              </li>`;
          }).join("")}
        </ol>
      </article>`;
  }).join("");
}

function parseLocalDateKey(dateKey) {
  const [year, month, day] = String(dateKey || "").split("-").map(Number);
  if (!year || !month || !day) return null;
  const parsed = new Date(year, month - 1, day);
  parsed.setHours(0, 0, 0, 0);
  return parsed;
}

function renderStreakMotivation() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const lastStudyDate = parseLocalDateKey(state.lastStudyDate);
  const dayGap = lastStudyDate ? Math.round((today - lastStudyDate) / DAY) : Number.POSITIVE_INFINITY;
  const history = state.studyHistory && typeof state.studyHistory === "object"
    ? state.studyHistory
    : null;
  const storedStreak = Math.max(0, Number(state.streak) || 0);
  const chainIsCurrent = (dayGap === 0 || dayGap === 1) && storedStreak > 0;
  const currentStreak = chainIsCurrent ? storedStreak : 0;
  const chainEnd = chainIsCurrent ? lastStudyDate : null;
  const chainStart = chainEnd ? new Date(chainEnd) : null;
  if (chainStart) chainStart.setDate(chainEnd.getDate() - Math.max(0, currentStreak - 1));
  const localDateKey = (date) => [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");

  const days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (6 - index));
    const active = history
      ? Boolean(history[localDateKey(date)])
      : Boolean(chainStart && date >= chainStart && date <= chainEnd);
    const isToday = date.getTime() === today.getTime();
    return { date, active, isToday };
  });
  const activeDays = days.filter((day) => day.active).length;

  $("#streakCount").textContent = currentStreak;
  $("#streakHeroCount").textContent = currentStreak;
  $("#streakWeekScore").textContent = `${activeDays} / 7`;
  $("#streakMessage").textContent = currentStreak > 0 && dayGap === 0
    ? `今天已完成；你正在延續 ${currentStreak} 天的連續紀錄。`
    : currentStreak > 0 && dayGap === 1
      ? `完成今天的複習，就能把紀錄延續到 ${currentStreak + 1} 天。`
      : state.lastStudyDate && dayGap > 1
        ? "上一段連續紀錄已中斷；今天可以重新開始第 1 天。"
        : "完成今天的複習，開始第一段連續紀錄。";

  $("#streakChart").innerHTML = days.map(({ date, active, isToday }) => {
    const label = date.toLocaleDateString("zh-TW", { weekday: "short" }).replace("週", "");
    const dateLabel = `${date.getMonth() + 1} 月 ${date.getDate()} 日`;
    const stateLabel = active ? "已完成" : isToday && dayGap === 1 ? "今天待完成" : "未列入目前連續";
    return `
      <div class="streak-day${active ? " active" : ""}${isToday ? " today" : ""}" aria-label="${dateLabel}，${stateLabel}">
        <span class="streak-bar"><i></i></span>
        <strong>${label}</strong>
        <small>${date.getDate()}</small>
      </div>`;
  }).join("");
}

function renderMemoryStats() {
  const now = NOW();
  const reviews = allCards
    .map((card) => reviewFor(card))
    .filter((review) => review.attempts > 0);
  const due = reviews.filter((review) => review.nextReview <= now).length;
  const mastered = reviews.filter((review) => review.streak >= 3).length;
  const weak = reviews.filter((review) => review.attempts >= 2 && review.wrong / review.attempts > 0.5).length;
  const scheduled = reviews.filter((review) => review.nextReview > now).sort((a, b) => a.nextReview - b.nextReview);

  $("#dueCount").textContent = due;
  $("#masteredCount").textContent = mastered;
  $("#weakCount").textContent = weak;
  $("#nextReviewText").textContent = scheduled.length
    ? `下一張將於 ${new Date(scheduled[0].nextReview).toLocaleDateString("zh-TW", { month: "numeric", day: "numeric" })} 到期`
    : reviews.length ? "目前沒有排定中的卡片" : "完成第一回合後，系統會安排複習";
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
        <button
          class="mistake-audio"
          type="button"
          data-mistake-index="${index}"
          aria-label="播放第 ${index + 1} 題參考答案"
        >♪ 聽答案</button>
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
      <div class="class-actions">
        <span>已納入每日複習</span>
      </div>
    </article>
  `).join("");
  $("#classCount").textContent = classes.length;
}

function setDate() {
  const date = new Date();
  const weekdays = ["DIM.", "LUN.", "MAR.", "MER.", "JEU.", "VEN.", "SAM."];
  const months = ["JAN.", "FÉV.", "MAR.", "AVR.", "MAI", "JUIN", "JUIL.", "AOÛT", "SEPT.", "OCT.", "NOV.", "DÉC."];
  $("#monthLabel").textContent = months[date.getMonth()];
  $("#dayLabel").textContent = String(date.getDate()).padStart(2, "0");
  $("#weekdayLabel").textContent = weekdays[date.getDay()];
  $("#todayNoteDate").textContent = `${String(date.getMonth() + 1).padStart(2, "0")} / ${String(date.getDate()).padStart(2, "0")}`;
}

$$(".nav-link").forEach((link) => link.addEventListener("click", () => showView(link.dataset.view)));
$("#streakButton").addEventListener("click", () => {
  showView("today");
  requestAnimationFrame(() => $("#streakSection").scrollIntoView({ behavior: "smooth", block: "start" }));
});
$("#startReview").addEventListener("click", startDailyReview);
$("#exitReview").addEventListener("click", () => {
  activeAiReviewRun += 1;
  showView("today");
});
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
$("#settingsButton").addEventListener("click", openSettings);
$("#settingsClose").addEventListener("click", closeSettings);
$("#settingsScrim").addEventListener("click", closeSettings);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !$("#settingsShell").hidden) closeSettings();
  trapSettingsFocus(event);
});
$("#connectGithubSync").addEventListener("click", connectGitHubSync);
$("#syncGithubNow").addEventListener("click", () => syncGitHubProgress({ push: true, verify: true }));
$("#loadGithubProgress").addEventListener("click", () => syncGitHubProgress({ push: false, verify: true }));
$("#disconnectGithubSync").addEventListener("click", disconnectGitHubSync);
$("#saveOpenRouterKey").addEventListener("click", () => {
  const key = $("#openRouterApiKey").value.trim();
  if (!key) {
    setOpenRouterKeyStatus("請先輸入 OpenRouter API Key。");
    return;
  }
  sessionStorage.setItem(OPENROUTER_KEY_KEY, key);
  $("#openRouterApiKey").value = "";
  setOpenRouterKeyStatus("已供本分頁使用；關閉分頁後會自動清除。");
  showToast("AI 金鑰已供本分頁使用。");
});
$("#clearOpenRouterKey").addEventListener("click", () => {
  sessionStorage.removeItem(OPENROUTER_KEY_KEY);
  localStorage.removeItem(OPENROUTER_KEY_KEY);
  $("#openRouterApiKey").value = "";
  setOpenRouterKeyStatus("已清除本分頁的 OpenRouter 金鑰。");
  showToast("AI 金鑰已清除。");
});

$$("[data-grade]").forEach((button) =>
  button.addEventListener("click", () => gradeAnswer(button.dataset.grade))
);

$("#speakPrompt").addEventListener("click", () => {
  const item = state.session[state.index];
  if (item) speakFrench(item.audioText || item.q);
});

$("#speakAnswer").addEventListener("click", () => {
  const item = state.session[state.index];
  if (item) speakFrench(item.a);
});

$("#mistakeList").addEventListener("click", (event) => {
  const audioButton = event.target.closest(".mistake-audio");
  if (audioButton) {
    const mistakeIndex = Number(audioButton.dataset.mistakeIndex);
    speakFrench(mistakes[mistakeIndex][1]);
    return;
  }
  const row = event.target.closest(".mistake-row");
  if (!row) return;
  row.classList.toggle("open");
  row.querySelector("b").textContent = row.classList.contains("open") ? "−" : "＋";
});

$("#mistakeList").addEventListener("keydown", (event) => {
  if (event.target.closest(".mistake-audio")) return;
  if (event.key === "Enter" || event.key === " ") event.target.click();
});

renderContent();
renderProgress();
renderMemoryStats();
renderErrorDashboard();
refreshAchievements();
setDate();
renderStreakMotivation();
const hasSessionOpenRouterKey = Boolean(sessionStorage.getItem(OPENROUTER_KEY_KEY));
$("#openRouterApiKey").value = "";
setOpenRouterKeyStatus(
  hasSessionOpenRouterKey
    ? "本分頁已有金鑰；關閉分頁後會自動清除。"
    : "尚未設定。本功能在 20 秒逾時後會自動重試一次。"
);
if (!localStorage.getItem(PROGRESS_BACKUP_KEY)) saveAllProgress({ syncCloud: false });
initializeGitHubSyncUi();
setProgressBackupStatus("每次完成題目都會寫入本機，同步可用複製/貼上備份跨設備還原。");
