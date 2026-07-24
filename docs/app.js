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
  { id: "future-near", set: "futureNear", level: "A2.1", title: "近期未來 futur proche", outcome: "能說明明天與週末計畫" },
  { id: "recent-past", set: "recentPast", level: "A2.1", title: "剛剛發生 passé récent", outcome: "能說明剛完成的事情" },
  { id: "object-pronouns", set: "objectPronouns", level: "A2.1", title: "直接受詞 le / la / les", outcome: "避免反覆重複同一個名詞" },
  { id: "comparatives", set: "comparatives", level: "A2.1", title: "比較級與偏好", outcome: "能比較兩個地方或選擇" },
  { id: "imperative-directions", set: "imperativeDirections", level: "A2.1", title: "命令式與問路", outcome: "能理解並給出簡單路線" },
  { id: "reflexive-past", set: "reflexivePast", level: "A2.2", title: "反身動詞的過去式", outcome: "能敘述昨天的日常流程" },
  { id: "imperfect-intro", set: "imperfectIntro", level: "B1 預習", title: "未完成過去式 imparfait", outcome: "能描述過去背景與習慣" },
  { id: "past-contrast", set: "pastContrast", level: "B1 預習", title: "passé composé vs imparfait", outcome: "能組成有背景與事件的故事" },
  { id: "pronouns-y-en", set: "pronounsYEn", level: "B1 預習", title: "代名詞 y / en", outcome: "能自然避免重複地點與數量" },
  { id: "polite-requests", set: "politeRequests", level: "B1／TCF", title: "禮貌請求與主動問資訊", outcome: "能完成 TCF 互動型口說任務" },
  { id: "opinion-builder", set: "opinionBuilder", level: "B1／B2 預習", title: "意見、理由、例子、結論", outcome: "能連續表達並支持自己的立場" },
  { id: "tcf-message", set: "tcfMessage", level: "TCF 預習", title: "TCF 訊息寫作與引導式訪談", outcome: "能完成 60–120 字訊息並應對兩分鐘訪談" },
];

const CURRICULUM_REPETITIONS = 3;
const DAILY_TASK_IDS = Object.freeze(["recall", "weakness", "advance", "output"]);
const DAILY_TASK_ID_SET = new Set(DAILY_TASK_IDS);

const etrePastMatchingPairs = [
  ["aller", "allé"],
  ["venir", "venu"],
  ["partir", "parti"],
  ["descendre", "descendu"],
  ["sortir", "sorti"],
  ["devenir", "devenu"],
  ["naître", "né"],
  ["mourir", "mort"],
  ["avoir", "eu"],
].map(([infinitive, participle], id) => ({ id: String(id), infinitive, participle }));

const DAY = 86_400_000;
const NOW = () => Date.now();
const OPENROUTER_ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";
const OPENROUTER_MODEL = "openrouter/free";
const OPENROUTER_TIMEOUT_MS = 20_000;
const OPENROUTER_MAX_ATTEMPTS = 2;
const OPENROUTER_RETRYABLE_STATUS = new Set([408, 425, 500, 502, 503, 504]);
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
    streak: Math.max(0, Number(raw.streak) || 0),
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
        curriculumAdvanced: normalizedPlan
          && DAILY_TASK_IDS.every((taskId) => completedTaskIds.includes(taskId))
          && Boolean(rawDaily.curriculumAdvanced),
      }
    : {
        date: today,
        completedQuests: [],
        completedTaskIds: [],
        plan: null,
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
    achievements: [],
    logs: [],
    daily: {
      date: today,
      completedQuests: [],
      completedTaskIds: [],
      plan: null,
    },
    ...safeRaw,
    curriculumIndex: Math.max(0, Math.floor(Number(safeRaw.curriculumIndex) || 0)),
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
};
const matchingState = {
  infinitives: [],
  participles: [],
  selectedInfinitive: null,
  selectedParticiple: null,
  matchedIds: new Set(),
  mistakes: 0,
  resolving: false,
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

function dailyPlansMatch(a, b) {
  if (!a || !b || a.moduleId !== b.moduleId || a.round !== b.round) return false;
  return a.dueCardIds.join("\u0000") === b.dueCardIds.join("\u0000")
    && a.weakCardIds.join("\u0000") === b.weakCardIds.join("\u0000");
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
  if (curriculumIndexesDiffer) {
    planOwner = local.curriculumIndex > cloud.curriculumIndex ? local : cloud;
    planFallback = planOwner === local ? cloud : local;
  }
  if (!curriculumIndexesDiffer && !planOwner.daily.plan && planFallback.daily.plan) {
    [planOwner, planFallback] = [planFallback, planOwner];
  }
  const samePlan = dailyPlansMatch(local.daily.plan, cloud.daily.plan);
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
    const localPayload = buildExportPayload(getLocalProgressUpdatedAt());
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
  const moduleIndex = Math.floor(completedDays / CURRICULUM_REPETITIONS) % ADVANCE_MODULES.length;
  return {
    module: ADVANCE_MODULES[moduleIndex],
    round: (completedDays % CURRICULUM_REPETITIONS) + 1,
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

function finishDailyTask(taskId) {
  if (!taskId) return;
  resetDailyIfNeeded();
  const completed = new Set(state.game.daily.completedTaskIds || []);
  completed.add(taskId);
  state.game.daily.completedTaskIds = [...completed];

  const allDone = getDailyTasks().every((task) => completed.has(task.id));
  if (allDone && !state.game.daily.curriculumAdvanced) {
    const curriculum = getCurriculumPosition();
    const readyForNextModule = curriculum.round < CURRICULUM_REPETITIONS
      || isModuleReady(curriculum.module);
    state.game.daily.curriculumAdvanced = true;
    if (readyForNextModule) {
      state.game.curriculumIndex = Math.max(0, Number(state.game.curriculumIndex) || 0) + 1;
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
        ? "今日課表完成：+30 XP、+3 金幣"
        : "今日完成；新主題尚未穩定，明天再練一輪。"
    );
  }
  saveAllProgress();
  renderProgress();
  renderGameDashboard();
}

function getNextDailyTask() {
  resetDailyIfNeeded();
  const completed = new Set(state.game.daily.completedTaskIds || []);
  return getDailyTasks().find((task) => !completed.has(task.id)) || null;
}

function launchDailyTask(task) {
  if (!task) return;
  if (task.action === "cards") {
    startSession("daily", {
      cards: cardsByIds(task.cardIds),
      dailyTaskId: task.id,
    });
    return;
  }
  startSession(task.set, {
    phase: task.phase,
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
  if (name !== "review" && dailyTransitionTimer) {
    clearTimeout(dailyTransitionTimer);
    dailyTransitionTimer = null;
  }
  $$(".view").forEach((view) => view.classList.remove("active"));
  $$(".nav-link").forEach((link) => link.classList.toggle("active", link.dataset.view === name));
  $(`#${name}-view`).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function shuffleItems(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function renderMatchingGame() {
  const renderColumn = (side, items) => items.map((item) => {
    const isMatched = matchingState.matchedIds.has(item.id);
    const isSelected = matchingState[`selected${side === "infinitive" ? "Infinitive" : "Participle"}`] === item.id;
    const label = side === "infinitive" ? item.infinitive : item.participle;
    return `
      <button
        class="match-tile${isSelected ? " selected" : ""}${isMatched ? " matched" : ""}"
        type="button"
        data-match-side="${side}"
        data-match-id="${item.id}"
        ${isMatched ? "disabled" : ""}
      >${label}</button>
    `;
  }).join("");

  $("#matchingInfinitives").innerHTML = renderColumn("infinitive", matchingState.infinitives);
  $("#matchingParticiples").innerHTML = renderColumn("participle", matchingState.participles);
  $("#matchingProgress").textContent = `${matchingState.matchedIds.size} / ${etrePastMatchingPairs.length}`;
  $("#matchingMistakes").textContent = matchingState.mistakes;
}

function startMatchingGame() {
  matchingState.infinitives = shuffleItems(etrePastMatchingPairs);
  matchingState.participles = shuffleItems(etrePastMatchingPairs);
  matchingState.selectedInfinitive = null;
  matchingState.selectedParticiple = null;
  matchingState.matchedIds = new Set();
  matchingState.mistakes = 0;
  matchingState.resolving = false;
  $("#matchingFeedback").textContent = "先選左邊的動詞原形，再選右邊的過去分詞。";
  $("#matchingFeedback").className = "matching-feedback";
  renderMatchingGame();
  showView("matching");
}

function finishMatchingGame() {
  const matchCard = { id: "etrePast-match" };
  const current = reviewFor(matchCard);
  const now = NOW();
  const perfect = matchingState.mistakes === 0;
  const earnedXp = perfect ? 45 : Math.max(15, 36 - matchingState.mistakes * 3);

  state.reviews[matchCard.id] = {
    attempts: current.attempts + 1,
    correct: current.correct + etrePastMatchingPairs.length,
    wrong: current.wrong + matchingState.mistakes,
    streak: perfect ? current.streak + 1 : Math.max(0, current.streak),
    interval: perfect ? nextGoodInterval(current.streak) : 1,
    nextReview: now + (perfect ? nextGoodInterval(current.streak) : 1) * DAY,
    lastReviewed: now,
    lastScore: Math.round(100 * etrePastMatchingPairs.length / (etrePastMatchingPairs.length + matchingState.mistakes)),
    skill: "過去分詞配對",
  };
  addXp(earnedXp);
  state.game.sessionsDone += 1;
  state.game.runStreak = perfect ? state.game.runStreak + 1 : 0;
  updateStreakForToday();
  state.game.logs = [`完成過去分詞連連看：錯 ${matchingState.mistakes} 次，+${earnedXp} XP`, ...state.game.logs].slice(0, 6);
  refreshAchievements();
  saveAllProgress();
  renderGameDashboard();
  renderMemoryStats();
  $("#matchingFeedback").textContent = `完成！錯 ${matchingState.mistakes} 次，獲得 ${earnedXp} XP。`;
  $("#matchingFeedback").className = "matching-feedback success";
  showToast(`連連看完成：+${earnedXp} XP`);
}

function selectMatchingTile(button) {
  if (matchingState.resolving || button.disabled) return;
  const side = button.dataset.matchSide;
  const id = button.dataset.matchId;
  if (side === "infinitive") matchingState.selectedInfinitive = id;
  if (side === "participle") matchingState.selectedParticiple = id;
  renderMatchingGame();

  if (matchingState.selectedInfinitive === null || matchingState.selectedParticiple === null) return;
  if (matchingState.selectedInfinitive === matchingState.selectedParticiple) {
    matchingState.matchedIds.add(id);
    matchingState.selectedInfinitive = null;
    matchingState.selectedParticiple = null;
    $("#matchingFeedback").textContent = "配對正確！";
    $("#matchingFeedback").className = "matching-feedback success";
    renderMatchingGame();
    if (matchingState.matchedIds.size === etrePastMatchingPairs.length) finishMatchingGame();
    return;
  }

  matchingState.mistakes += 1;
  matchingState.resolving = true;
  $("#matchingFeedback").textContent = "還不對，再看一次兩個字的尾巴。";
  $("#matchingFeedback").className = "matching-feedback error";
  $("#matchingMistakes").textContent = matchingState.mistakes;
  setTimeout(() => {
    matchingState.selectedInfinitive = null;
    matchingState.selectedParticiple = null;
    matchingState.resolving = false;
    renderMatchingGame();
  }, 450);
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
  saveReviews();
  renderMemoryStats();
  renderErrorDashboard();

  if (state.index < state.session.length - 1) {
    state.index += 1;
    renderQuestion();
    return;
  }

  const good = state.results.filter((resultItem) => resultItem?.correct ?? resultItem?.score >= 75).length;
  const total = state.results.length;
  const isBossWin = state.sessionMode === "boss" && good === total;
  const baseXp = total * 10 + good * 4;
  addXp(baseXp);
  addXp(evaluateAndUnlockQuests({
    totalCards: total,
    goodCount: good,
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
  const completedDailyTask = state.dailyTaskId;
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
  const nextTaskIndex = tasks.findIndex((task) => !completed.has(task.id));
  $("#startReview").disabled = locked;
  $("#startReviewLabel").textContent = locked
    ? "今日複習已完成"
    : completed.size
      ? `繼續今日複習 · ${completed.size} / ${tasks.length}`
      : `開始今日 ${LEARNER_PROFILE.dailyMinutes} 分鐘複習`;

  $("#dailyPlanIntro").innerHTML = `今天先修補 <strong>${weakSkill}</strong>，再超前 <strong>${module.title}</strong>。`;
  $("#dailyPrescription").innerHTML = `
    <div>
      <span>目前定位</span>
      <strong>${LEARNER_PROFILE.currentLevel}</strong>
      <small>依最近作答動態調整</small>
    </div>
    <div>
      <span>今日超前</span>
      <strong>${module.level}</strong>
      <small>${module.title} · 第 ${plan.round}/${CURRICULUM_REPETITIONS} 輪</small>
    </div>
    <div>
      <span>考試目標</span>
      <strong>${LEARNER_PROFILE.goal}</strong>
      <small>四項能力分開準備</small>
    </div>
    <div>
      <span>今日時間</span>
      <strong>${LEARNER_PROFILE.dailyMinutes} 分</strong>
      <small>回想 → 回饋 → 新知 → 輸出</small>
    </div>`;

  $("#dailyTaskGrid").innerHTML = tasks.map((task, index) => `
    <article class="task-card ${task.tone} ${completed.has(task.id) ? "completed" : ""}">
      <div class="task-topline">
        <span class="task-index">0${index + 1} / 04</span>
        <span class="task-status">${completed.has(task.id) ? "✓ 完成" : index === nextTaskIndex ? "下一段" : "待完成"}</span>
      </div>
      <div class="card-glyph ${task.id === "output" ? "sound-glyph" : ""}">${task.glyph}</div>
      <p class="task-kicker">${task.kicker}</p>
      <h3>${task.title}</h3>
      <p>${task.description}</p>
    </article>
  `).join("");

  $("#completedCount").textContent = completed.size;
  $("#dailyTaskTotal").textContent = tasks.length;
  $("#progressBar").style.width = `${(completed.size / tasks.length) * 100}%`;
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
  $("#bossHint").textContent = "弱點題會自動排入今日複習";
  $("#bossBadge").textContent = "自動追蹤";

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
    const runLog = $("#runLog");
    runLog.replaceChildren();
    const logs = state.game.logs.length ? state.game.logs : ["尚未有戰鬥紀錄"];
    logs.forEach((log) => {
      const entry = document.createElement("p");
      if (state.game.logs.length) entry.className = "game-log-entry";
      entry.textContent = log;
      runLog.append(entry);
    });
  }
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
}

function setDate() {
  const date = new Date();
  const weekdays = ["DIM.", "LUN.", "MAR.", "MER.", "JEU.", "VEN.", "SAM."];
  const months = ["JAN.", "FÉV.", "MAR.", "AVR.", "MAI", "JUIN", "JUIL.", "AOÛT", "SEPT.", "OCT.", "NOV.", "DÉC."];
  $("#monthLabel").textContent = months[date.getMonth()];
  $("#dayLabel").textContent = String(date.getDate()).padStart(2, "0");
  $("#weekdayLabel").textContent = weekdays[date.getDay()];
  $("#todayNoteDate").textContent = `${String(date.getMonth() + 1).padStart(2, "0")} / ${String(date.getDate()).padStart(2, "0")}`;
  $("#streakCount").textContent = state.streak;
}

$$(".nav-link").forEach((link) => link.addEventListener("click", () => showView(link.dataset.view)));
$("#startReview").addEventListener("click", startDailyReview);
$("#exitReview").addEventListener("click", () => {
  activeAiReviewRun += 1;
  showView("today");
});
$("#exitMatching").addEventListener("click", () => showView("classes"));
$("#restartMatching").addEventListener("click", startMatchingGame);
$("#matchingBoard").addEventListener("click", (event) => {
  const tile = event.target.closest("button[data-match-side]");
  if (tile) selectMatchingTile(tile);
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
  if (!("speechSynthesis" in window)) return showToast("此瀏覽器不支援語音播放");
  speechSynthesis.cancel();
  const item = state.session[state.index];
  const utterance = new SpeechSynthesisUtterance(item.audioText || item.q);
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

renderContent();
renderProgress();
renderMemoryStats();
renderErrorDashboard();
refreshAchievements();
renderGameDashboard();
setDate();
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
