/* ============================================================
   영어 시험 퀴즈 데이터
   ------------------------------------------------------------
   본문 3을 추가할 때는 아래 passages 배열에
   같은 형식으로 객체를 하나 더 넣기만 하면 됩니다.

   - 모든 문제는 문법 빈칸(객관식)
   - 한 문장에 시험에 나올 문법이 여러 개면 각각 문제로 만들고,
     같은 문장에서 나온 문제들은 서로 멀리 떨어뜨려 배치함.
   ============================================================ */

const passages = [
  {
    id: 1,
    title: "본문 1",
    subtitle: "Jogakbo (조각보) — Good things come in small packages",
    text: [
      "\"Good things come in small package,\" they say.",
      "Indeed, some cultures around the world appreciate the importance of small things, often putting them together to create amazing works of art.",
      "Often, practical need or creative desire plays a key role in such efforts.",
      "Patchwork, whose beauty has long been appreciated in many cultures across the globe, is a type of needlework that involves sewing scraps of fabric together to create a larger piece of art.",
      "Every culture is proud of its own patterns, including Koreans, who take pride in their unique style, jogakbo.",
      "Created during the Joseon dynasty, it is a type of traditional wrapping cloth made by stitching small pieces of fabric into a large square or rectangle.",
      "Frugal women did not want to waste any fabric and found ways to reuse it.",
      "However, jogakbo was much more than just repurposing fabric.",
      "It often told the creator's life story because a finished piece contained fabric scraps from her wedding skirt, her husband's skirt, and her children's clothes.",
      "The practical need to repurpose leftover patches gave birth to a novel art form.",
      "The beauty of jogakbo lies in its design which results from stitching together patches of various shapes, sizes, and colors in a seemingly improvised manner.",
      "Stitching such random patches into a perfect square or rectangle requires artistic sensitivity, a high level of skill, careful planning, and long hours stitching.",
      "The desire for creative excellence resulted in harmonious combinations of patches in various colors, shapes, and sizes, which have been compared to modern abstract paintings, such as those of Piet Mondrian or Paul Klee."
    ],
    questions: [
      /* ===== 라운드 1 : 문장별 첫 번째 문법 포인트 ===== */
      {
        type: "blank",
        sentence: "[문장 1] \"Good things ______ in small package,\" they say.",
        choices: ["comes", "come", "coming", "to come"],
        answerIndex: 1,
        explain: "복수주어 Good things + 일반적 사실(현재) → come."
      },
      {
        type: "blank",
        sentence: "[문장 2] Indeed, some cultures around the world appreciate the importance of small things, often ______ them together to create amazing works of art.",
        choices: ["put", "to put", "putting", "putted"],
        answerIndex: 2,
        explain: "분사구문(동시동작) — and they put → putting them together."
      },
      {
        type: "blank",
        sentence: "[문장 3] Often, practical need or creative desire ______ a key role in such efforts.",
        choices: ["play", "plays", "playing", "are playing"],
        answerIndex: 1,
        explain: "'A or B' 주어는 가까운 명사(creative desire, 단수)에 일치 → plays."
      },
      {
        type: "blank",
        sentence: "[문장 4] Patchwork, ______ beauty has long been appreciated in many cultures across the globe, is a type of needlework that involves sewing scraps of fabric together to create a larger piece of art.",
        choices: ["which", "whose", "who", "of that"],
        answerIndex: 1,
        explain: "소유격 관계대명사 whose — 'Patchwork의 beauty'."
      },
      {
        type: "blank",
        sentence: "[문장 5] Every culture is proud of its own patterns, including Koreans, ______ take pride in their unique style, jogakbo.",
        choices: ["which", "whom", "who", "whose"],
        answerIndex: 2,
        explain: "계속적 용법의 주격 관계대명사 who — 사람(Koreans) 선행사."
      },
      {
        type: "blank",
        sentence: "[문장 6] ______ during the Joseon dynasty, it is a type of traditional wrapping cloth made by stitching small pieces of fabric into a large square or rectangle.",
        choices: ["Creating", "To create", "Create", "Created"],
        answerIndex: 3,
        explain: "수동 분사구문 — As it was created → Created."
      },
      {
        type: "blank",
        sentence: "[문장 7] Frugal women did not want ______ any fabric and found ways to reuse it.",
        choices: ["waste", "to waste", "wasting", "wasted"],
        answerIndex: 1,
        explain: "want + to부정사 → want to waste."
      },
      {
        type: "blank",
        sentence: "[문장 8] However, jogakbo was ______ more than just repurposing fabric.",
        choices: ["very", "much", "many", "more"],
        answerIndex: 1,
        explain: "비교급(more) 강조는 much (very는 비교급 강조 불가)."
      },
      {
        type: "blank",
        sentence: "[문장 9] It often told the creator's life story ______ a finished piece contained fabric scraps from her wedding skirt, her husband's skirt, and her children's clothes.",
        choices: ["because of", "because", "despite", "due to"],
        answerIndex: 1,
        explain: "뒤에 '주어+동사' 절 → 접속사 because (because of/due to는 명사구)."
      },
      {
        type: "blank",
        sentence: "[문장 10] The practical need ______ leftover patches gave birth to a novel art form.",
        choices: ["repurposing", "repurpose", "to repurpose", "repurposed"],
        answerIndex: 2,
        explain: "to부정사 형용사적 용법 — need를 수식하는 to repurpose."
      },
      {
        type: "blank",
        sentence: "[문장 11] The beauty of jogakbo ______ in its design which results from stitching together patches of various shapes, sizes, and colors in a seemingly improvised manner.",
        choices: ["lie", "lies", "lying", "are lying"],
        answerIndex: 1,
        explain: "주어 The beauty(단수) → lies (of jogakbo는 수식어)."
      },
      {
        type: "blank",
        sentence: "[문장 12] ______ such random patches into a perfect square or rectangle requires artistic sensitivity, a high level of skill, careful planning, and long hours stitching.",
        choices: ["Stitch", "Stitched", "Stitching", "To stitching"],
        answerIndex: 2,
        explain: "동명사 주어 — Stitching ... requires."
      },
      {
        type: "blank",
        sentence: "[문장 13] The desire for creative excellence resulted in harmonious combinations of patches in various colors, shapes, and sizes, ______ have been compared to modern abstract paintings, such as those of Piet Mondrian or Paul Klee.",
        choices: ["that", "which", "what", "they"],
        answerIndex: 1,
        explain: "계속적 용법(콤마 뒤) → that 불가, 사물 선행사 받는 which."
      },

      /* ===== 라운드 2 : 문장별 두 번째 문법 포인트 ===== */
      {
        type: "blank",
        sentence: "[문장 2] Indeed, some cultures around the world appreciate the importance of small things, often putting them together ______ amazing works of art.",
        choices: ["create", "created", "to create", "creating"],
        answerIndex: 2,
        explain: "to부정사 부사적 용법(목적) — '~을 만들기 위해'."
      },
      {
        type: "blank",
        sentence: "[문장 4] Patchwork, whose beauty has long ______ appreciated in many cultures across the globe, is a type of needlework that involves sewing scraps of fabric together to create a larger piece of art.",
        choices: ["have", "being", "been", "be"],
        answerIndex: 2,
        explain: "현재완료 수동태 has + been + p.p. → has long been appreciated."
      },
      {
        type: "blank",
        sentence: "[문장 5] Every culture ______ proud of its own patterns, including Koreans, who take pride in their unique style, jogakbo.",
        choices: ["are", "is", "be", "being"],
        answerIndex: 1,
        explain: "Every + 단수명사 + 단수동사 → is."
      },
      {
        type: "blank",
        sentence: "[문장 6] Created during the Joseon dynasty, it is a type of traditional wrapping cloth ______ by stitching small pieces of fabric into a large square or rectangle.",
        choices: ["making", "made", "makes", "to make"],
        answerIndex: 1,
        explain: "과거분사 후치수식 — cloth [which is] made by ..."
      },
      {
        type: "blank",
        sentence: "[문장 7] Frugal women did not want to waste any fabric and found ways ______ it.",
        choices: ["reusing", "reuse", "to reuse", "reused"],
        answerIndex: 2,
        explain: "to부정사 형용사적 용법 — ways를 수식하는 to reuse."
      },
      {
        type: "blank",
        sentence: "[문장 8] However, jogakbo was much more than just ______ fabric.",
        choices: ["repurpose", "to repurpose", "repurposing", "repurposed"],
        answerIndex: 2,
        explain: "전치사 than 뒤에는 동명사 → repurposing."
      },
      {
        type: "blank",
        sentence: "[문장 10] The practical need to repurpose leftover patches ______ a novel art form.",
        choices: ["gave birth to", "was given birth", "giving birth to", "give birth to"],
        answerIndex: 0,
        explain: "단수주어 + 능동·과거 → gave birth to(~을 낳다)."
      },
      {
        type: "blank",
        sentence: "[문장 11] The beauty of jogakbo lies in its design ______ results from stitching together patches of various shapes, sizes, and colors in a seemingly improvised manner.",
        choices: ["what", "which", "it", "whose"],
        answerIndex: 1,
        explain: "주격 관계대명사 which — 사물(design)을 받아 results의 주어."
      },
      {
        type: "blank",
        sentence: "[문장 12] Stitching such random patches into a perfect square or rectangle ______ artistic sensitivity, a high level of skill, careful planning, and long hours stitching.",
        choices: ["require", "requires", "requiring", "are required"],
        answerIndex: 1,
        explain: "동명사구 주어는 단수 취급 → requires."
      },
      {
        type: "blank",
        sentence: "[문장 13] The desire for creative excellence resulted in harmonious combinations of patches in various colors, shapes, and sizes, which have ______ compared to modern abstract paintings, such as those of Piet Mondrian or Paul Klee.",
        choices: ["be", "been", "being", "was"],
        answerIndex: 1,
        explain: "현재완료 수동태 — have been compared."
      },

      /* ===== 라운드 3 : 문장별 세 번째 문법 포인트 ===== */
      {
        type: "blank",
        sentence: "[문장 4] Patchwork, whose beauty has long been appreciated in many cultures across the globe, is a type of needlework ______ involves sewing scraps of fabric together to create a larger piece of art.",
        choices: ["what", "that", "whom", "whose"],
        answerIndex: 1,
        explain: "주격 관계대명사 that(=which) — 선행사 needlework."
      },
      {
        type: "blank",
        sentence: "[문장 6] Created during the Joseon dynasty, it is a type of traditional wrapping cloth made by ______ small pieces of fabric into a large square or rectangle.",
        choices: ["stitch", "stitched", "stitching", "to stitch"],
        answerIndex: 2,
        explain: "전치사 by + 동명사 → by stitching."
      },
      {
        type: "blank",
        sentence: "[문장 11] The beauty of jogakbo lies in its design which results from ______ together patches of various shapes, sizes, and colors in a seemingly improvised manner.",
        choices: ["stitch", "stitching", "to stitch", "stitched"],
        answerIndex: 1,
        explain: "전치사 from + 동명사 → results from stitching."
      },
      {
        type: "blank",
        sentence: "[문장 13] The desire for creative excellence resulted in harmonious combinations of patches in various colors, shapes, and sizes, which have been compared to modern abstract paintings, such as ______ of Piet Mondrian or Paul Klee.",
        choices: ["that", "it", "those", "them"],
        answerIndex: 2,
        explain: "앞의 복수명사 paintings의 반복을 피하는 지시대명사 those."
      },

      /* ===== 라운드 4 : 문장별 네 번째 문법 포인트 ===== */
      {
        type: "blank",
        sentence: "[문장 4] Patchwork, whose beauty has long been appreciated in many cultures across the globe, is a type of needlework that involves ______ scraps of fabric together to create a larger piece of art.",
        choices: ["sew", "to sew", "sewing", "sewed"],
        answerIndex: 2,
        explain: "involve + 동명사 목적어 → involves sewing."
      }
    ]
  },

  {
    id: 2,
    title: "본문 2",
    subtitle: "Stained-Glass Windows — light, story, and craft",
    text: [
      "The Sainte-Chapelle in Paris, France and Nasir al-Mulk mosque in Shiraz, Iran amaze their visitors with brilliant glass window panels through which astonishing light of vigorous colors penetrates.",
      "These panels are called stained-glass windows and are made up of colored pieces of glass assembled together to form large windows.",
      "In Europe and the Middle East, the techniques for stained-glass windows advanced quickly during the Medieval period, when religious buildings got bigger to accommodate more worshipers and prayers.",
      "Small pieces of glass assembled next to one another were not only more practical for construction but also able to tell a story.",
      "Since most people were illiterate at that time, the images placed on the windows helped them understand religious messages that they might otherwise have been unable to grasp.",
      "Making a stained-glass window is a process in which intricacy is required.",
      "It involves creating durable glass sheets and staining them, cutting them into desired shapes, and assembling them into prepared designs.",
      "Each step requires expert craftspeople working together.",
      "Though originally used in religious structures, stained-glass windows found their way into a variety of modern buildings, including residential homes.",
      "These little pieces are now recognized worldwide as an important form of creative art, whose splendor wouldn't have been acknowledged without the glass artists' desire for beauty sparked by a practical need."
    ],
    questions: [
      /* ===== 라운드 1 : 문장별 첫 번째 문법 포인트 ===== */
      {
        type: "blank",
        sentence: "[문장 1] The Sainte-Chapelle in Paris, France and Nasir al-Mulk mosque in Shiraz, Iran amaze their visitors with brilliant glass window panels through ______ astonishing light of vigorous colors penetrates.",
        choices: ["that", "which", "whom", "where"],
        answerIndex: 1,
        explain: "전치사 + 관계대명사 — through which (전치사 뒤 that 불가)."
      },
      {
        type: "blank",
        sentence: "[문장 2] These panels are called stained-glass windows and are made up of colored pieces of glass ______ together to form large windows.",
        choices: ["assembling", "assembled", "assemble", "to assemble"],
        answerIndex: 1,
        explain: "과거분사 후치수식 — glass [which is] assembled."
      },
      {
        type: "blank",
        sentence: "[문장 3] In Europe and the Middle East, the techniques for stained-glass windows advanced quickly during the Medieval period, ______ religious buildings got bigger to accommodate more worshipers and prayers.",
        choices: ["which", "where", "when", "that"],
        answerIndex: 2,
        explain: "시간 선행사(the Medieval period) + 완전한 절 → 관계부사 when."
      },
      {
        type: "blank",
        sentence: "[문장 4] Small pieces of glass assembled next to one another were ______ more practical for construction but also able to tell a story.",
        choices: ["either", "not only", "neither", "as well"],
        answerIndex: 1,
        explain: "상관접속사 not only A but also B."
      },
      {
        type: "blank",
        sentence: "[문장 5] Since most people were illiterate at that time, the images placed on the windows helped them understand religious messages that they might otherwise have ______ unable to grasp.",
        choices: ["be", "been", "being", "was"],
        answerIndex: 1,
        explain: "가정법 — might (otherwise) have + p.p. → might have been."
      },
      {
        type: "blank",
        sentence: "[문장 6] ______ a stained-glass window is a process in which intricacy is required.",
        choices: ["Make", "Made", "Making", "To making"],
        answerIndex: 2,
        explain: "동명사 주어 — Making ... is."
      },
      {
        type: "blank",
        sentence: "[문장 7] It involves creating durable glass sheets and staining them, ______ them into desired shapes, and assembling them into prepared designs.",
        choices: ["cut", "cutting", "to cut", "cuts"],
        answerIndex: 1,
        explain: "병렬구조 — creating, staining, cutting, assembling."
      },
      {
        type: "blank",
        sentence: "[문장 8] Each step ______ expert craftspeople working together.",
        choices: ["require", "requires", "requiring", "are required"],
        answerIndex: 1,
        explain: "Each + 단수명사 + 단수동사 → requires."
      },
      {
        type: "blank",
        sentence: "[문장 9] ______ originally used in religious structures, stained-glass windows found their way into a variety of modern buildings, including residential homes.",
        choices: ["Despite", "Though", "Because", "Unless"],
        answerIndex: 1,
        explain: "양보 접속사 Though — Though (they were) originally used (Despite는 명사를 이끎)."
      },
      {
        type: "blank",
        sentence: "[문장 10] These little pieces are now recognized worldwide as an important form of creative art, ______ splendor wouldn't have been acknowledged without the glass artists' desire for beauty sparked by a practical need.",
        choices: ["which", "whose", "that", "what"],
        answerIndex: 1,
        explain: "소유격 관계대명사 whose — 뒤에 명사(splendor)."
      },

      /* ===== 라운드 2 : 문장별 두 번째 문법 포인트 ===== */
      {
        type: "blank",
        sentence: "[문장 1] The Sainte-Chapelle in Paris, France and Nasir al-Mulk mosque in Shiraz, Iran ______ their visitors with brilliant glass window panels through which astonishing light of vigorous colors penetrates.",
        choices: ["amazes", "amaze", "amazing", "to amaze"],
        answerIndex: 1,
        explain: "'A and B' 복수주어 → amaze."
      },
      {
        type: "blank",
        sentence: "[문장 2] These panels are ______ stained-glass windows and are made up of colored pieces of glass assembled together to form large windows.",
        choices: ["call", "called", "calling", "to call"],
        answerIndex: 1,
        explain: "수동태 be + p.p. → are called."
      },
      {
        type: "blank",
        sentence: "[문장 3] In Europe and the Middle East, the techniques for stained-glass windows advanced quickly during the Medieval period, when religious buildings got bigger ______ more worshipers and prayers.",
        choices: ["accommodate", "accommodated", "to accommodate", "accommodating"],
        answerIndex: 2,
        explain: "to부정사 부사적 용법(목적) — '~을 수용하기 위해'."
      },
      {
        type: "blank",
        sentence: "[문장 4] Small pieces of glass ______ next to one another were not only more practical for construction but also able to tell a story.",
        choices: ["assembling", "assembled", "assemble", "to assemble"],
        answerIndex: 1,
        explain: "과거분사 후치수식 — pieces [which were] assembled."
      },
      {
        type: "blank",
        sentence: "[문장 5] Since most people were illiterate at that time, the images ______ on the windows helped them understand religious messages that they might otherwise have been unable to grasp.",
        choices: ["placing", "placed", "place", "to place"],
        answerIndex: 1,
        explain: "과거분사 후치수식 — the images [which were] placed."
      },
      {
        type: "blank",
        sentence: "[문장 6] Making a stained-glass window is a process in ______ intricacy is required.",
        choices: ["that", "which", "where", "what"],
        answerIndex: 1,
        explain: "전치사 + 관계대명사 — in which (전치사 뒤 that 불가)."
      },
      {
        type: "blank",
        sentence: "[문장 7] It ______ creating durable glass sheets and staining them, cutting them into desired shapes, and assembling them into prepared designs.",
        choices: ["involve", "involves", "involving", "are involved"],
        answerIndex: 1,
        explain: "주어 It(단수) → involves."
      },
      {
        type: "blank",
        sentence: "[문장 8] Each step requires expert craftspeople ______ together.",
        choices: ["work", "worked", "working", "to work"],
        answerIndex: 2,
        explain: "현재분사 후치수식 — craftspeople [who are] working."
      },
      {
        type: "blank",
        sentence: "[문장 9] Though originally ______ in religious structures, stained-glass windows found their way into a variety of modern buildings, including residential homes.",
        choices: ["using", "used", "use", "to use"],
        answerIndex: 1,
        explain: "수동 분사구문 — Though (they were) originally used."
      },
      {
        type: "blank",
        sentence: "[문장 10] These little pieces are now recognized worldwide as an important form of creative art, whose splendor wouldn't have ______ acknowledged without the glass artists' desire for beauty sparked by a practical need.",
        choices: ["be", "been", "being", "was"],
        answerIndex: 1,
        explain: "가정법 + 수동 — wouldn't have been acknowledged."
      },

      /* ===== 라운드 3 : 문장별 세 번째 문법 포인트 ===== */
      {
        type: "blank",
        sentence: "[문장 1] The Sainte-Chapelle in Paris, France and Nasir al-Mulk mosque in Shiraz, Iran amaze their visitors with brilliant glass window panels through which astonishing light of vigorous colors ______.",
        choices: ["penetrate", "penetrates", "penetrating", "are penetrated"],
        answerIndex: 1,
        explain: "주어 astonishing light(단수) → penetrates."
      },
      {
        type: "blank",
        sentence: "[문장 2] These panels are called stained-glass windows and are made up of colored pieces of glass assembled together ______ large windows.",
        choices: ["form", "formed", "to form", "forming"],
        answerIndex: 2,
        explain: "to부정사 부사적 용법(목적) — '~을 이루기 위해'."
      },
      {
        type: "blank",
        sentence: "[문장 4] Small pieces of glass assembled next to one another ______ not only more practical for construction but also able to tell a story.",
        choices: ["was", "were", "is", "being"],
        answerIndex: 1,
        explain: "주어 Small pieces(복수) → were."
      },
      {
        type: "blank",
        sentence: "[문장 5] ______ most people were illiterate at that time, the images placed on the windows helped them understand religious messages that they might otherwise have been unable to grasp.",
        choices: ["Despite", "Since", "Unless", "Whether"],
        answerIndex: 1,
        explain: "이유 접속사 Since(=because) — '~이기 때문에'."
      },
      {
        type: "blank",
        sentence: "[문장 6] Making a stained-glass window is a process in which intricacy ______ required.",
        choices: ["is", "are", "be", "being"],
        answerIndex: 0,
        explain: "수동태 — intricacy(단수) is required."
      },
      {
        type: "blank",
        sentence: "[문장 10] These little pieces are now ______ worldwide as an important form of creative art, whose splendor wouldn't have been acknowledged without the glass artists' desire for beauty sparked by a practical need.",
        choices: ["recognize", "recognized", "recognizing", "to recognize"],
        answerIndex: 1,
        explain: "수동태 — are recognized."
      },

      /* ===== 라운드 4 : 문장별 네 번째 문법 포인트 ===== */
      {
        type: "blank",
        sentence: "[문장 10] These little pieces are now recognized worldwide as an important form of creative art, whose splendor wouldn't have been acknowledged without the glass artists' desire for beauty ______ by a practical need.",
        choices: ["sparking", "sparked", "sparks", "to spark"],
        answerIndex: 1,
        explain: "과거분사 후치수식 — desire for beauty [which was] sparked."
      }
    ]
  },

  {
    id: 3,
    title: "본문 3",
    subtitle: "Beadwork (비즈공예) — small beads, shared human nature",
    text: [
      "Throughout the ages and across all cultures, there have been small decorative objects with a hole for threading called beads.",
      "In its simplest form, beadwork can involve threading a few beads together on a single string to make a simple bracelet or necklace, or on a larger scale, to form beaded bags, clothing, or even wall-hangings.",
      "Beadwork is ancient, evidenced by the findings of beads dating back to the Stone Age.",
      "Back then, people strung bones, shells, or rocks together to hang around their neck.",
      "As cultures and societies evolved over time, beadwork became a form of personal expression, a symbol of social class, or even a talisman to drive away bad luck.",
      "Interestingly, some regions have particularly rich traditions.",
      "The Ndebele tribe of South Africa, for example, is famed for intricate dresses made of glass beads.",
      "Different designs serve as a means of marking different developmental stages of a woman's life.",
      "An unmarried girl may wear a square apron onto which thousands of glass beads were hand-sewn, while a married woman might wear a five-paneled apron, along with beaded necklaces and a beaded cape.",
      "Similarly, beadwork is an essential aspect of many Native American cultures.",
      "Beadwork powerfully expresses cultural identity, reflecting a sense of continuity across generations.",
      "Plato once remarked that \"our need will be the real creator.\" When need or desire arises, different communities willingly attach small, simple, insignificant everyday objects to one another to generate a new form of creative work that is more beautiful and more practical than the mere sum of its parts.",
      "The Greek philosopher may have recognized that the process for all things creative begins from within, from need and desire, to express artistic instincts or to maximize the utility of things available.",
      "Cultures may vary on the surface, but they all seem to share some common elements, often universal and essential, rooted deep in human nature."
    ],
    questions: [
      /* ===== 라운드 1 : 문장별 첫 번째 문법 포인트 ===== */
      {
        type: "blank",
        sentence: "[문장 1] Throughout the ages and across all cultures, there ______ been small decorative objects with a hole for threading called beads.",
        choices: ["has", "have", "having", "is"],
        answerIndex: 1,
        explain: "there + 복수주어(objects) → have been."
      },
      {
        type: "blank",
        sentence: "[문장 2] In its simplest form, beadwork can involve ______ a few beads together on a single string to make a simple bracelet or necklace, or on a larger scale, to form beaded bags, clothing, or even wall-hangings.",
        choices: ["thread", "to thread", "threading", "threaded"],
        answerIndex: 2,
        explain: "involve + 동명사 목적어 → involve threading."
      },
      {
        type: "blank",
        sentence: "[문장 3] Beadwork is ancient, ______ by the findings of beads dating back to the Stone Age.",
        choices: ["evidencing", "evidenced", "evidence", "to evidence"],
        answerIndex: 1,
        explain: "분사구문(수동) — (being) evidenced by ..."
      },
      {
        type: "blank",
        sentence: "[문장 4] Back then, people ______ bones, shells, or rocks together to hang around their neck.",
        choices: ["string", "strung", "stringing", "were strung"],
        answerIndex: 1,
        explain: "string의 과거형 strung (불규칙: string-strung-strung)."
      },
      {
        type: "blank",
        sentence: "[문장 5] ______ cultures and societies evolved over time, beadwork became a form of personal expression, a symbol of social class, or even a talisman to drive away bad luck.",
        choices: ["Despite", "As", "Unless", "Whether"],
        answerIndex: 1,
        explain: "접속사 As — '~함에 따라' (뒤에 절)."
      },
      {
        type: "blank",
        sentence: "[문장 6] Interestingly, some regions ______ particularly rich traditions.",
        choices: ["has", "have", "having", "to have"],
        answerIndex: 1,
        explain: "복수주어 some regions → have."
      },
      {
        type: "blank",
        sentence: "[문장 7] The Ndebele tribe of South Africa, for example, ______ famed for intricate dresses made of glass beads.",
        choices: ["are", "is", "be", "being"],
        answerIndex: 1,
        explain: "주어 The Ndebele tribe(단수) → is."
      },
      {
        type: "blank",
        sentence: "[문장 8] Different designs ______ as a means of marking different developmental stages of a woman's life.",
        choices: ["serves", "serve", "serving", "to serve"],
        answerIndex: 1,
        explain: "복수주어 Different designs → serve."
      },
      {
        type: "blank",
        sentence: "[문장 9] An unmarried girl may wear a square apron onto ______ thousands of glass beads were hand-sewn, while a married woman might wear a five-paneled apron, along with beaded necklaces and a beaded cape.",
        choices: ["that", "which", "where", "what"],
        answerIndex: 1,
        explain: "전치사 + 관계대명사 — onto which (전치사 뒤 that 불가)."
      },
      {
        type: "blank",
        sentence: "[문장 10] Similarly, beadwork ______ an essential aspect of many Native American cultures.",
        choices: ["are", "is", "be", "being"],
        answerIndex: 1,
        explain: "beadwork(단수·불가산) → is."
      },
      {
        type: "blank",
        sentence: "[문장 11] Beadwork powerfully ______ cultural identity, reflecting a sense of continuity across generations.",
        choices: ["express", "expresses", "expressing", "are expressed"],
        answerIndex: 1,
        explain: "주어 Beadwork(단수) → expresses."
      },
      {
        type: "blank",
        sentence: "[문장 12] Plato once remarked ______ \"our need will be the real creator.\" When need or desire arises, different communities willingly attach small, simple, insignificant everyday objects to one another to generate a new form of creative work that is more beautiful and more practical than the mere sum of its parts.",
        choices: ["what", "that", "which", "it"],
        answerIndex: 1,
        explain: "명사절 접속사 that — remarked의 목적어 절을 이끎."
      },
      {
        type: "blank",
        sentence: "[문장 13] The Greek philosopher may have recognized that the process for all things creative ______ from within, from need and desire, to express artistic instincts or to maximize the utility of things available.",
        choices: ["begin", "begins", "beginning", "are begun"],
        answerIndex: 1,
        explain: "주어 the process(단수) → begins."
      },
      {
        type: "blank",
        sentence: "[문장 14] Cultures may ______ on the surface, but they all seem to share some common elements, often universal and essential, rooted deep in human nature.",
        choices: ["varies", "vary", "varying", "to vary"],
        answerIndex: 1,
        explain: "조동사 may + 동사원형 → may vary."
      },

      /* ===== 라운드 2 : 문장별 두 번째 문법 포인트 ===== */
      {
        type: "blank",
        sentence: "[문장 1] Throughout the ages and across all cultures, there have been small decorative objects with a hole for threading ______ beads.",
        choices: ["calling", "called", "call", "to call"],
        answerIndex: 1,
        explain: "과거분사 후치수식 — objects [which are] called beads."
      },
      {
        type: "blank",
        sentence: "[문장 2] In its simplest form, beadwork can involve threading a few beads together on a single string ______ a simple bracelet or necklace, or on a larger scale, to form beaded bags, clothing, or even wall-hangings.",
        choices: ["make", "made", "to make", "making"],
        answerIndex: 2,
        explain: "to부정사 부사적 용법(목적) — '~을 만들기 위해'."
      },
      {
        type: "blank",
        sentence: "[문장 3] Beadwork is ancient, evidenced by the findings of beads ______ back to the Stone Age.",
        choices: ["date", "dated", "dating", "to date"],
        answerIndex: 2,
        explain: "현재분사 후치수식 — beads [which date] back to ..."
      },
      {
        type: "blank",
        sentence: "[문장 4] Back then, people strung bones, shells, or rocks together ______ around their neck.",
        choices: ["hang", "hung", "to hang", "hanging"],
        answerIndex: 2,
        explain: "to부정사 부사적 용법(목적) — '~에 걸기 위해'."
      },
      {
        type: "blank",
        sentence: "[문장 5] As cultures and societies evolved over time, beadwork became a form of personal expression, a symbol of social class, or even a talisman ______ away bad luck.",
        choices: ["drive", "drove", "to drive", "driven"],
        answerIndex: 2,
        explain: "to부정사 형용사적 용법 — talisman을 수식."
      },
      {
        type: "blank",
        sentence: "[문장 7] The Ndebele tribe of South Africa, for example, is famed for intricate dresses ______ of glass beads.",
        choices: ["making", "made", "make", "to make"],
        answerIndex: 1,
        explain: "과거분사 후치수식 — dresses [which are] made of glass beads."
      },
      {
        type: "blank",
        sentence: "[문장 8] Different designs serve as a means of ______ different developmental stages of a woman's life.",
        choices: ["mark", "marked", "marking", "to mark"],
        answerIndex: 2,
        explain: "전치사 of + 동명사 → a means of marking."
      },
      {
        type: "blank",
        sentence: "[문장 9] An unmarried girl may wear a square apron onto which thousands of glass beads ______ hand-sewn, while a married woman might wear a five-paneled apron, along with beaded necklaces and a beaded cape.",
        choices: ["was", "were", "is", "being"],
        answerIndex: 1,
        explain: "thousands of glass beads(복수) + 수동 → were hand-sewn."
      },
      {
        type: "blank",
        sentence: "[문장 11] Beadwork powerfully expresses cultural identity, ______ a sense of continuity across generations.",
        choices: ["reflect", "reflected", "reflecting", "to reflect"],
        answerIndex: 2,
        explain: "분사구문(동시상황) — and it reflects → reflecting."
      },
      {
        type: "blank",
        sentence: "[문장 12] Plato once remarked that \"our need will be the real creator.\" When need or desire ______, different communities willingly attach small, simple, insignificant everyday objects to one another to generate a new form of creative work that is more beautiful and more practical than the mere sum of its parts.",
        choices: ["arise", "arises", "arising", "are arisen"],
        answerIndex: 1,
        explain: "'need or desire' 주어는 가까운 desire(단수)에 일치 → arises."
      },
      {
        type: "blank",
        sentence: "[문장 13] The Greek philosopher may have recognized ______ the process for all things creative begins from within, from need and desire, to express artistic instincts or to maximize the utility of things available.",
        choices: ["what", "that", "which", "it"],
        answerIndex: 1,
        explain: "명사절 접속사 that — recognized의 목적어 절을 이끎."
      },
      {
        type: "blank",
        sentence: "[문장 14] Cultures may vary on the surface, but they all seem to share some common elements, often universal and essential, ______ deep in human nature.",
        choices: ["rooting", "rooted", "root", "to root"],
        answerIndex: 1,
        explain: "과거분사 후치수식 — elements [which are] rooted deep."
      },

      /* ===== 라운드 3 : 문장별 세 번째 문법 포인트 ===== */
      {
        type: "blank",
        sentence: "[문장 1] Throughout the ages and across all cultures, there have been small decorative objects with a hole for ______ called beads.",
        choices: ["thread", "threading", "to thread", "threaded"],
        answerIndex: 1,
        explain: "전치사 for + 동명사 → a hole for threading."
      },
      {
        type: "blank",
        sentence: "[문장 2] In its simplest form, beadwork can involve threading a few beads together on a single string to make a simple bracelet or necklace, or on a larger scale, ______ beaded bags, clothing, or even wall-hangings.",
        choices: ["form", "formed", "to form", "forming"],
        answerIndex: 2,
        explain: "to부정사 부사적 용법(목적) — '~을 이루기 위해'."
      },
      {
        type: "blank",
        sentence: "[문장 9] An unmarried girl may wear a square apron onto which thousands of glass beads were hand-sewn, ______ a married woman might wear a five-paneled apron, along with beaded necklaces and a beaded cape.",
        choices: ["during", "while", "despite", "because of"],
        answerIndex: 1,
        explain: "대조의 접속사 while — '반면에' (뒤에 절)."
      },
      {
        type: "blank",
        sentence: "[문장 12] Plato once remarked that \"our need will be the real creator.\" When need or desire arises, different communities willingly attach small, simple, insignificant everyday objects to one another ______ a new form of creative work that is more beautiful and more practical than the mere sum of its parts.",
        choices: ["generate", "generated", "to generate", "generating"],
        answerIndex: 2,
        explain: "to부정사 부사적 용법(목적) — '~을 만들어내기 위해'."
      },
      {
        type: "blank",
        sentence: "[문장 13] The Greek philosopher may have recognized that the process for all things creative begins from within, from need and desire, ______ artistic instincts or to maximize the utility of things available.",
        choices: ["express", "expressed", "to express", "expressing"],
        answerIndex: 2,
        explain: "to부정사 부사적(목적) — to maximize와 병렬 구조."
      },

      /* ===== 라운드 4 : 문장별 네 번째 문법 포인트 ===== */
      {
        type: "blank",
        sentence: "[문장 12] Plato once remarked that \"our need will be the real creator.\" When need or desire arises, different communities willingly attach small, simple, insignificant everyday objects to one another to generate a new form of creative work ______ is more beautiful and more practical than the mere sum of its parts.",
        choices: ["what", "that", "whom", "whose"],
        answerIndex: 1,
        explain: "주격 관계대명사 that(=which) — 선행사 creative work."
      }
    ]
  }
];
