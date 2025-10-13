// --- ELEMEN HTML ---
const langIdButton = document.getElementById('lang-id');
const langEnButton = document.getElementById('lang-en');
const langSwitcherEl = document.querySelector('.lang-switcher');
const categorySelectionEl = document.getElementById('category-selection');
const categorySelector = document.getElementById('category-selector');
const startGameButton = document.getElementById('start-game-button');
const gameAreaEl = document.getElementById('game-area');
const scrambledWordEl = document.getElementById('scrambled-word');
const wordInputEl = document.getElementById('word-input');
const checkButton = document.getElementById('check-button');
const resetButton = document.getElementById('reset-button');
const scoreEl = document.getElementById('score-value');
const timerEl = document.getElementById('timer-value');
const feedbackEl = document.getElementById('feedback');
const highScoreStartEl = document.getElementById('high-score-start');
const highScoreGameEl = document.getElementById('high-score-game');
const currentCategoryNameEl = document.getElementById('current-category-name')

// --- KAMUS TERJEMAHAN (BARU) ---
const translations = {
    id: {
        title: "Acak Kata Cepat",
        highScoreLabel: "🏆 Skor Tertinggi",
        highScoreLabelShort: "Tertinggi",
        categoryDescription: "Pilih kategori untuk memulai permainan!",
        selectCategoryOption: "-- Pilih Kategori --",
        startGameButton: "Mulai Game",
        scoreLabel: "Skor",
        timeLabel: "Waktu",
        inputPlaceholder: "Ketik jawabanmu di sini...",
        checkAnswerButton: "Periksa Jawaban",
        backToMenuButton: "Kembali ke Menu",
        feedbackCorrect: "Benar! +5 detik",
        feedbackWrong: "Coba lagi!",
        feedbackWrongPenalty: "Salah! -5 detik", // MODIFIED: Added new feedback for penalty
        gameOverTitle: "GAME OVER",
        newRecordFeedback: "SELAMAT! REKOR BARU: {score}",
        finalScoreFeedback: "Skor Akhir Kamu: {score}",
        alertChooseCategory: "Pilih kategori terlebih dahulu!",
        categoryCompleteTitle: "KATEGORI SELESAI",
        categoryCompleteFeedback: "Hebat! Kamu menyelesaikan semua kata di kategori ini. Skor Akhir: {score}"
    },
    en: {
        title: "Speed Scramble",
        highScoreLabel: "🏆 High Score",
        highScoreLabelShort: "Highest",
        categoryDescription: "Choose a category to start the game!",
        selectCategoryOption: "-- Select Category --",
        startGameButton: "Start Game",
        scoreLabel: "Score",
        timeLabel: "Time",
        inputPlaceholder: "Type your answer here...",
        checkAnswerButton: "Check Answer",
        backToMenuButton: "Back to Menu",
        feedbackCorrect: "Correct! +5 seconds",
        feedbackWrong: "Try again!",
        feedbackWrongPenalty: "Wrong! -5 seconds", // MODIFIED: Added new feedback for penalty
        gameOverTitle: "GAME OVER",
        newRecordFeedback: "CONGRATS! NEW HIGH SCORE: {score}",
        finalScoreFeedback: "Your Final Score: {score}",
        alertChooseCategory: "Please choose a category first!",
        categoryCompleteTitle: "CATEGORY COMPLETE",
        categoryCompleteFeedback: "Great! You finished all words in this category. Final Score: {score}"
    }
};

// --- STRUKTUR DATA BARU DENGAN DUA BAHASA ---
const wordData = {
    id: {
        "Benda di Sekitar Kita 🌍": [
            "MEJA", "KURSI", "LAMPU", "PINTU", "JENDELA", "LEMARI", "SOFA", "TELEVISI", "KOMPOR", "KASUR",
            "BANTAL", "GULING", "SELIMUT", "EMBER", "SAPU", "PIRING", "GELAS", "SENDOK", "GARPU", "PISAU",
            "MANGKOK", "BOTOL", "JAM", "CERMIN", "HANDUK", "SABUN", "SIKAT", "VAS", "LUKISAN", "GORDEN",
            "KARPET", "RAK", "KIPAS", "RADIO", "BUKU", "PENSIL", "PULPEN", "PENGHAPUS", "PENGGARIS", "TAS",
            "PAPAN", "SPIDOL", "KOMPUTER", "PRINTER", "MOUSE", "KEYBOARD", "KERTAS", "MAP", "GUNTING", "STAPLER",
            "MOBIL", "MOTOR", "SEPEDA", "BATU", "POHON", "RUMPUT", "TANAH", "JALAN", "TIANG", "PAGAR",
            "BANGKU", "PAYUNG", "TOPI", "SEPATU", "SANDAL", "KACAMATA", "DOMPET", "KUNCI", "TELEPON", "BOLA",
            "BAJU", "CELANA", "KEMEJA", "ROK", "GAUN", "JAKET", "KAOS", "DASI", "CINCIN", "KALUNG",
            "GELANG", "ANTING", "WAJAN", "PANCI", "OVEN", "KULKAS", "BLENDER", "TEKO", "GAYUNG", "SERBET",
            "BENDERA", "KOPER", "GITAR", "PIANO", "DRUM", "MIKROFON", "KAMERA", "LILIN", "KOREK", "KABEL"
        ],
        "Hewan 🐾": [
            "ANJING", "KUCING", "KELINCI", "KUDA", "SAPI", "KAMBING", "DOMBA", "BABI", "AYAM", "BEBEK",
            "ANGSA", "BURUNG", "MERPATI", "ELANG", "GAGAK", "KAKAKTUA", "IKAN", "HIU", "PAUS", "LUMBA-LUMBA",
            "GURITA", "CUMI-CUMI", "KEPITING", "UDANG", "KERANG", "ULAR", "BUAYA", "KOMODO", "BIAWAK", "KADAL",
            "KURA-KURA", "PENYU", "KATAK", "KODOK", "SEMUT", "LEBAH", "NYAMUK", "LALAT", "KUPU-KUPU", "CAPUNG",
            "BELALANG", "JANGKRIK", "KECOA", "LABA-LABA", "KALAJENGKING", "GAJAH", "HARIMAU", "SINGA", "MACAN", "CHEETAH",
            "SERIGALA", "RUBAH", "BERUANG", "PANDA", "KOALA", "KANGURU", "MONYET", "GORILA", "ORANGUTAN", "SIMPANSE",
            "JERAPAH", "ZEBRA", "BADAK", "KUDA NIL", "UNTA", "TIKUS", "HAMSTER", "TUPAI", "LANDAK", "MUSANG",
            "RAKUN", "KELELAWAR", "BURUNG HANTU", "PENGUIN", "FLAMINGO", "MERAK", "PELIKAN", "ANJING LAUT", "SINGA LAUT", "WALRUS",
            "BERANG-BERANG", "BUNGLON", "CICAK", "TOKEK", "CACING", "SIPUT", "UBUR-UBUR", "BINTANG LAUT", "KUDA LAUT", "TRENGGILING",
            "TAPIR", "BINTURONG", "RUSA", "KIJANG", "BANTENG", "KERBAU", "ULAT", "RAYAP", "KUMBANG", "BELUT"
        ],
        "Buah-buahan 🍓": [
            "APEL", "JERUK", "PISANG", "MANGGA", "ANGGUR", "STROBERI", "NANAS", "SEMANGKA", "MELON", "PEPAYA",
            "JAMBU", "RAMBUTAN", "DURIAN", "MANGGIS", "SALAK", "LECI", "KELENGKENG", "ALPUKAT", "NAGA", "KIWI",
            "PIR", "CERI", "PERSIK", "PLUM", "APRIKOT", "DELIMA", "BELIMBING", "SIRSAK", "SAWO", "DUKU",
            "NANGKA", "CEMPEDAK", "MARKISA", "JAMBU AIR", "KEDONDONG", "KELAPA", "KURMA", "ZAITUN", "TIN", "BLACKBERRY",
            "RASPBERRY", "BLUEBERRY", "CRANBERRY", "GOJI BERRY", "LIMAU", "LEMON", "NIPIS", "JERUK BALI", "SRIKAYA", "MURBEI",
            "JAMBU BOL", "GANDARIA", "MATOA", "ASAM", "BENGKUANG", "KESEMEK", "BIDARA", "CERMAI", "CIPLUKAN", "TOMAT",
            "MENTIMUN", "LABU", "SUKUN", "TERONG", "JAGUNG", "TALAS", "UBI", "SINGKONG", "KENTANG", "WORTEL",
            "BIT", "LOBAK", "KISMIS", "PRUNES", "NEKTARIN", "POMELO", "KUMQUAT", "FEIJOA", "GUAVA", "LANGSAT",
            "KWENI", "BACANG", "BUNI", "CARICA", "DUWET", "KAWISTA", "KEPEL", "KOKOSAN", "LONTAR", "NAMNAM",
            "RUKEM", "BISBUL", "MENTENG", "MUNDU", "KERSEN", "PALA", "VANILI", "COKELAT", "KOPI", "AREN"
        ],
        "Negara 🗺️": [
            "INDONESIA", "MALAYSIA", "SINGAPURA", "THAILAND", "VIETNAM", "FILIPINA", "BRUNEI", "KAMBOJA", "LAOS", "MYANMAR",
            "TIMOR LESTE", "TIONGKOK", "JEPANG", "KOREA", "INDIA", "PAKISTAN", "BANGLADESH", "NEPAL", "SRI LANKA", "ARAB SAUDI",
            "EMIRAT", "QATAR", "KUWAIT", "TURKI", "IRAN", "IRAK", "MESIR", "AUSTRALIA", "SELANDIA BARU", "FIJI",
            "RUSIA", "JERMAN", "INGGRIS", "PRANCIS", "ITALIA", "SPANYOL", "PORTUGAL", "BELANDA", "BELGIA", "SWISS",
            "AUSTRIA", "POLANDIA", "SWEDIA", "NORWEGIA", "FINLANDIA", "DENMARK", "YUNANI", "RUMANIA", "HUNGARIA", "CEKO",
            "UKRAINA", "AMERIKA", "KANADA", "MEKSIKO", "BRASIL", "ARGENTINA", "KOLOMBIA", "PERU", "CHILI", "VENEZUELA",
            "KUBA", "JAMAIKA", "NIGERIA", "AFRIKA SELATAN", "KENYA", "ETIOPIA", "GHANA", "MAROKO", "ALJAZAIR", "LIBYA",
            "SUDAN", "TANZANIA", "MADAGASKAR", "ZIMBABWE", "MONAKO", "VATIKAN", "LUKSEMBURG", "ISLANDIA", "IRLANDIA", "KROASIA",
            "SERBIA", "SLOVENIA", "ISRAEL", "PALESTINA", "YORDANIA", "LEBANON", "SURIAH", "AFGHANISTAN", "KAZAKHSTAN", "UZBEKISTAN",
            "MONGOLIA", "KOSTA RIKA", "PANAMA", "EKUADOR", "URUGUAY", "PARAGUAY", "BOLIVIA", "BAHAMA", "ISLANDIA", "YAMAN"
        ],
        "Profesi 🧑‍💼": [
            "DOKTER", "GURU", "INSINYUR", "ARSITEK", "PENGACARA", "AKUNTAN", "PROGRAMMER", "DESAINER", "PENULIS", "JURNALIS",
            "FOTOGRAFER", "VIDEOGRAFER", "ANIMATOR", "MUSISI", "PENYANYI", "AKTOR", "SUTRADARA", "PRODUSER", "POLISI", "TENTARA",
            "PILOT", "PRAMUGARI", "MASINIS", "NAHKODA", "SOPIR", "KOKI", "BARISTA", "PELAYAN", "MANAJER", "DIREKTUR",
            "SEKRETARIS", "RESEPSIONIS", "PETANI", "NELAYAN", "PETERNAK", "MONTIR", "TUKANG KAYU", "TUKANG BANGUNAN", "TUKANG LISTRIK", "TUKANG LEDENG",
            "PENJAHIT", "PERANCANG BUSANA", "MODEL", "PERAWAT", "BIDAN", "APOTEKER", "PSIKOLOG", "PSIKIATER", "TERAPIS", "ILMUWAN",
            "PENELITI", "DOSEN", "PUSTAKAWAN", "KURATOR", "ARKEOLOG", "SEJARAWAN", "SOSIOLOG", "EKONOM", "ANALIS", "PEMASAR",
            "ATLET", "PELATIH", "WASIT", "KOREOGRAFER", "PENARI", "PELUKIS", "PEMATUNG", "PEMADAM", "SATPAM", "HAKIM",
            "JAKSA", "NOTARIS", "KONSULTAN", "PENERJEMAH", "PRAMUWISATA", "AGEN", "TELLER", "KASIR", "BARBER", "PENATA RAMBUT",
            "AHLI GIZI", "DOKTER HEWAN", "GEOLOG", "ASTRONOM", "OPERATOR", "KURIR", "CLEANER", "TUKANG CUKUR", "TUKANG LAS", "PENERBIT",
            "EDITOR", "DIPLOMAT", "POLITISI", "PRAMUSAJI", "PENGUSAHA", "RELAWAN"
        ],
        "Tumbuhan & Tanaman 🌿": [
            "MAWAR", "MELATI", "ANGGREK", "TULIP", "MATAHARI", "KAMBOJA", "TERATAI", "LIDAH BUAYA", "KAKTUS", "PALEM",
            "BAMBU", "BERINGIN", "JATI", "MAHONI", "PINUS", "CEMARA", "KELAPA", "PADI", "JAGUNG", "GANDUM",
            "TEBU", "KOPI", "TEH", "COKELAT", "CENGKEH", "LADA", "PALA", "KUNYIT", "JAHE", "LENGKUAS",
            "KENCUR", "SERAI", "KEMANGI", "SELEDRI", "PETERSELI", "MINT", "ROSEMARY", "THYME", "OREGANO", "LAVENDER",
            "BOUGENVILLE", "ASOKA", "ALAMANDA", "KENANGA", "SEDAP MALAM", "DAHLIA", "KRISAN", "ANYELIR", "BAKUNG", "LILI",
            "SIRIH", "PAKIS", "LUMUT", "JAMUR", "ALANG-ALANG", "RUMPUT", "PUTRI MALU", "ECENG GONDOK", "KANGKUNG", "BAYAM",
            "SAWI", "SELADA", "BROKOLI", "KEMBANG KOL", "KUBIS", "TOMAT", "CABAI", "TERONG", "TIMUN", "PARE",
            "LABU", "BAWANG MERAH", "BAWANG PUTIH", "KENTANG", "WORTEL", "SINGKONG", "UBI JALAR", "TALAS", "KACANG TANAH", "KEDELAI",
            "KACANG HIJO", "KACANG PANJANG", "BUNCIS", "PETAI", "JENGKOL", "LIDAH MERTUA", "MONSTERA", "AGLAONEMA", "CALADIUM", "BEGONIA",
            "SIRIH GADING", "WIJAYAKUSUMA", "KEMBANG SEPATU", "POHON ASAM", "POHON MANGGA", "POHON RAMBUTAN", "POHON DURIAN", "BAKAU", "EDELWEISS", "KANTONG SEMAR"
        ]
    },
    en: {
        "Things Around Us 🌍": [
            "TABLE", "CHAIR", "LAMP", "DOOR", "WINDOW", "CABINET", "SOFA", "TELEVISION", "STOVE", "MATTRESS",
            "PILLOW", "BOLSTER", "BLANKET", "BUCKET", "BROOM", "PLATE", "GLASS", "SPOON", "FORK", "KNIFE",
            "BOWL", "BOTTLE", "CLOCK", "MIRROR", "TOWEL", "SOAP", "BRUSH", "VASE", "PAINTING", "CURTAIN",
            "CARPET", "SHELF", "FAN", "RADIO", "BOOK", "PENCIL", "PEN", "ERASER", "RULER", "BAG",
            "BOARD", "MARKER", "COMPUTER", "PRINTER", "MOUSE", "KEYBOARD", "PAPER", "FOLDER", "SCISSORS", "STAPLER",
            "CAR", "MOTORCYCLE", "BICYCLE", "STONE", "TREE", "GRASS", "SOIL", "ROAD", "POLE", "FENCE",
            "BENCH", "UMBRELLA", "HAT", "SHOES", "SANDALS", "GLASSES", "WALLET", "KEY", "TELEPHONE", "BALL",
            "SHIRT", "PANTS", "SHIRT", "SKIRT", "DRESS", "JACKET", "T-SHIRT", "TIE", "RING", "NECKLACE",
            "BRACELET", "EARRING", "PAN", "POT", "OVEN", "REFRIGERATOR", "BLENDER", "KETTLE", "DIPPER", "NAPKIN",
            "FLAG", "SUITCASE", "GUITAR", "PIANO", "DRUM", "MICROPHONE", "CAMERA", "CANDLE", "LIGHTER", "CABLE"
        ],
        "Animals 🐾": [
            "DOG", "CAT", "RABBIT", "HORSE", "COW", "GOAT", "SHEEP", "PIG", "CHICKEN", "DUCK",
            "SWAN", "BIRD", "DOVE", "EAGLE", "CROW", "COCKATOO", "FISH", "SHARK", "WHALE", "DOLPHIN",
            "OCTOPUS", "SQUID", "CRAB", "SHRIMP", "CLAM", "SNAKE", "CROCODILE", "KOMODO", "MONITOR LIZARD", "LIZARD",
            "TURTLE", "TORTOISE", "FROG", "TOAD", "ANT", "BEE", "MOSQUITO", "FLY", "BUTTERFLY", "DRAGONFLY",
            "GRASSHOPPER", "CRICKET", "COCKROACH", "SPIDER", "SCORPION", "ELEPHANT", "TIGER", "LION", "LEOPARD", "CHEETAH",
            "WOLF", "FOX", "BEAR", "PANDA", "KOALA", "KANGAROO", "MONKEY", "GORILLA", "ORANGUTAN", "CHIMPANZEE",
            "GIRAFFE", "ZEBRA", "RHINO", "HIPPO", "CAMEL", "RAT", "HAMSTER", "SQUIRREL", "PORCUPINE", "WEASEL",
            "RACCOON", "BAT", "OWL", "PENGUIN", "FLAMINGO", "PEACOCK", "PELICAN", "SEAL", "SEA LION", "WALRUS",
            "OTTER", "CHAMELEON", "GECKO", "LIZARD", "WORM", "SNAIL", "JELLYFISH", "STARFISH", "SEAHORSE", "PANGOLIN",
            "TAPIR", "BINTURONG", "DEER", "DOE", "BULL", "BUFFALO", "CATERPILLAR", "TERMITE", "BEETLE", "EEL"
        ],
        "Fruits 🍓": [
            "APPLE", "ORANGE", "BANANA", "MANGO", "GRAPE", "STRAWBERRY", "PINEAPPLE", "WATERMELON", "MELON", "PAPAYA",
            "GUAVA", "RAMBUTAN", "DURIAN", "MANGOSTEEN", "SNAKE FRUIT", "LYCHEE", "LONGAN", "AVOCADO", "DRAGON FRUIT", "KIWI",
            "PEAR", "CHERRY", "PEACH", "PLUM", "APRICOT", "POMEGRANATE", "STARFRUIT", "SOURSOP", "SAPODILLA", "DUKU",
            "JACKFRUIT", "CEMPEDAK", "PASSION FRUIT", "WATER APPLE", "AMBARELLA", "COCONUT", "DATE", "OLIVE", "FIG", "BLACKBERRY",
            "RASPBERRY", "BLUEBERRY", "CRANBERry", "GOJI BERRY", "LIME", "LEMON", "KEY LIME", "POMELO", "SUGAR APPLE", "MULBERRY",
            "MALAY APPLE", "GANDARIA", "MATOA", "TAMARIND", "JICAMA", "PERSIMMON", "JUJUBE", "CERMAI", "PHYSALIS", "TOMATO",
            "CUCUMBER", "PUMPKIN", "BREADFRUIT", "EGGPLANT", "CORN", "TARO", "SWEET POTATO", "CASSAVA", "POTATO", "CARROT",
            "BEET", "RADISH", "RAISIN", "PRUNE", "NECTARINE", "GRAPEFRUIT", "KUMQUAT", "FEIJOA", "GUAVA", "LANGSAT",
            "KWENI", "BACANG", "BUNI", "CARICA", "JAMUN", "WOOD APPLE", "KEPEL", "KOKOSAN", "PALMYRA", "NAMNAM",
            "RUKAM", "VELVET APPLE", "MENTENG", "MUNDU", "KERSEN", "NUTMEG", "VANILLA", "CACAO", "COFFEE", "ARENGA"
        ],
        "Countries 🗺️": [
            "INDONESIA", "MALAYSIA", "SINGAPORE", "THAILAND", "VIETNAM", "PHILIPPINES", "BRUNEI", "CAMBODIA", "LAOS", "MYANMAR",
            "TIMOR-LESTE", "CHINA", "JAPAN", "KOREA", "INDIA", "PAKISTAN", "BANGLADESH", "NEPAL", "SRI LANKA", "SAUDI ARABIA",
            "EMIRATES", "QATAR", "KUWAIT", "TURKEY", "IRAN", "IRAQ", "EGYPT", "AUSTRALIA", "NEW ZEALAND", "FIJI",
            "RUSSIA", "GERMANY", "ENGLAND", "FRANCE", "ITALY", "SPAIN", "PORTUGAL", "NETHERLANDS", "BELGIUM", "SWITZERLAND",
            "AUSTRIA", "POLAND", "SWEDEN", "NORWAY", "FINLAND", "DENMARK", "GREECE", "ROMANIA", "HUNGARY", "CZECH",
            "UKRAINE", "AMERICA", "CANADA", "MEXICO", "BRAZIL", "ARGENTINA", "COLOMBIA", "PERU", "CHILE", "VENEZUELA",
            "CUBA", "JAMAICA", "NIGERIA", "SOUTH AFRICA", "KENYA", "ETHIOPIA", "GHANA", "MOROCCO", "ALGERIA", "LIBYA",
            "SUDAN", "TANZANIA", "MADAGASCAR", "ZIMBABWE", "MONACO", "VATICAN", "LUXEMBOURG", "ICELAND", "IRELAND", "CROATIA",
            "SERBIA", "SLOVENIA", "ISRAEL", "PALESTINE", "JORDAN", "LEBANON", "SYRIA", "AFGHANISTAN", "KAZAKHSTAN", "UZBEKISTAN",
            "MONGOLIA", "COSTA RICA", "PANAMA", "ECUADOR", "URUGUAY", "PARAGUAY", "BOLIVIA", "BAHAMAS", "ICELAND", "YEMEN"
        ],
        "Professions 🧑‍💼": [
            "DOCTOR", "TEACHER", "ENGINEER", "ARCHITECT", "LAWYER", "ACCOUNTANT", "PROGRAMMER", "DESIGNER", "WRITER", "JOURNALIST",
            "PHOTOGRAPHER", "VIDEOGRAPHER", "ANIMATOR", "MUSICIAN", "SINGER", "ACTOR", "DIRECTOR", "PRODUCER", "POLICE", "SOLDIER",
            "PILOT", "FLIGHT ATTENDANT", "ENGINE DRIVER", "CAPTAIN", "DRIVER", "CHEF", "BARISTA", "WAITER", "MANAGER", "DIRECTOR",
            "SECRETARY", "RECEPTIONIST", "FARMER", "FISHERMAN", "BREEDER", "MECHANIC", "CARPENTER", "CONSTRUCTION WORKER", "ELECTRICIAN", "PLUMBER",
            "TAILOR", "FASHION DESIGNER", "MODEL", "NURSE", "MIDWIFE", "PHARMACIST", "PSYCHOLOGIST", "PSYCHIATRIST", "THERAPIST", "SCIENTIST",
            "RESEARCHER", "LECTURER", "LIBRARIAN", "CURATOR", "ARCHAEOLOGIST", "HISTORIAN", "SOCIOLOGIST", "ECONOMIST", "ANALYST", "MARKETER",
            "ATHLETE", "COACH", "REFEREE", "CHOREOGRAPHER", "DANCER", "PAINTER", "SCULPTOR", "FIREFIGHTER", "SECURITY GUARD", "JUDGE",
            "PROSECUTOR", "NOTARY", "CONSULTANT", "TRANSLATOR", "TOUR GUIDE", "AGENT", "TELLER", "CASHIER", "BARBER", "HAIRSTYLIST",
            "NUTRITIONIST", "VETERINARIAN", "GEOLOGIST", "ASTRONOMER", "OPERATOR", "COURIER", "CLEANER", "BARBER", "WELDER", "PUBLISHER",
            "EDITOR", "DIPLOMAT", "POLITICIAN", "WAITER", "ENTREPRENEUR", "VOLUNTEER"
        ],
        "Plants & Flora 🌿": [
            "ROSE", "JASMINE", "ORCHID", "TULIP", "SUNFLOWER", "FRANGIPANI", "LOTUS", "ALOE VERA", "CACTUS", "PALM",
            "BAMBOO", "BANYAN", "TEAK", "MAHOGANY", "PINE", "SPRUCE", "COCONUT", "RICE", "CORN", "WHEAT",
            "SUGARCANE", "COFFEE", "TEA", "CACAO", "CLOVE", "PEPPER", "NUTMEG", "TURMERIC", "GINGER", "GALANGAL",
            "AROMATIC GINGER", "LEMONGRASS", "BASIL", "CELERY", "PARSLEY", "MINT", "ROSEMARY", "THYME", "OREGANO", "LAVENDER",
            "BOUGAINVILLEA", "ASOKA", "ALLAMANDA", "YLANG-YLANG", "TUBEROSE", "DAHLIA", "CHRYSANTHEMUM", "CARNATION", "LILY", "LILIUM",
            "BETEL", "FERN", "MOSS", "MUSHROOM", "IMPERATA", "GRASS", "MIMOSA", "WATER HYACINTH", "WATER SPINACH", "SPINACH",
            "MUSTARD GREENS", "LETTUCE", "BROCCOLI", "CAULIFLOWER", "CABBAGE", "TOMATO", "CHILI", "EGGPLANT", "CUCUMBER", "BITTER GOURD",
            "PUMPKIN", "ONION", "GARLIC", "POTATO", "CARROT", "CASSAVA", "SWEET POTATO", "TARO", "PEANUT", "SOYBEAN",
            "MUNG BEAN", "YARDLONG BEAN", "GREEN BEAN", "STINK BEAN", "JENGKOL", "SNAKE PLANT", "MONSTERA", "AGLAONEMA", "CALADIUM", "BEGONIA",
            "POTHOS", "QUEEN OF THE NIGHT", "HIBISCUS", "TAMARIND TREE", "MANGO TREE", "RAMBUTAN TREE", "DURIAN TREE", "MANGROVE", "EDELWEISS", "PITCHER PLANT"
        ]
    }
};

// --- STATE GAME ---
let currentLanguage = 'id';
let currentWord = "";
let selectedCategory = "";
let score = 0;
let timer;
let timerInterval;
let highScore = 0;
let usedWords = []; // MODIFIED: To track used words in a game session
const HIGH_SCORE_KEY = 'acakKataHighScore';
const LANG_KEY = 'acakKataLang';

// --- FUNGSI-FUNGSI UTAMA ---

// FUNGSI BARU: Mengubah bahasa UI dan data
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem(LANG_KEY, lang); // Simpan pilihan bahasa

    // Perbarui semua elemen dengan atribut data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        el.textContent = translations[lang][key];
    });

    // Perbarui placeholder secara spesifik
    document.querySelectorAll('[data-lang-key-placeholder]').forEach(el => {
        const key = el.getAttribute('data-lang-key-placeholder');
        el.placeholder = translations[lang][key];
    });

    // Perbarui bendera yang aktif
    document.querySelectorAll('.lang-flag').forEach(flag => flag.classList.remove('active'));
    document.getElementById(`lang-${lang}`).classList.add('active');

    populateCategories();
}

function populateCategories() {
    const categories = Object.keys(wordData[currentLanguage]);
    categorySelector.innerHTML = `<option value="" data-lang-key="selectCategoryOption">${translations[currentLanguage].selectCategoryOption}</option>`;
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelector.appendChild(option);
    });
}

function loadHighScore() {
    const savedHighScore = localStorage.getItem(HIGH_SCORE_KEY);
    highScore = savedHighScore ? parseInt(savedHighScore) : 0;
    updateHighScoreDisplay();
}

function updateHighScoreDisplay() {
    highScoreStartEl.textContent = highScore;
    highScoreGameEl.textContent = highScore;
}

function scrambleWord(word) {
    let scrambled = word.split('').sort(() => Math.random() - 0.5).join('');
    if (word.length > 2 && scrambled === word) {
        return scrambleWord(word);
    }
    return scrambled;
}

function newRound() {
    // MODIFIED: Logic to ensure words are unique
    const wordsInCategory = wordData[currentLanguage][selectedCategory];
    const availableWords = wordsInCategory.filter(word => !usedWords.includes(word));

    if (availableWords.length === 0) {
        // Handle category completion
        clearInterval(timerInterval);
        scrambledWordEl.textContent = translations[currentLanguage].categoryCompleteTitle;
        feedbackEl.textContent = translations[currentLanguage].categoryCompleteFeedback.replace('{score}', score);
        if (score > highScore) {
            highScore = score;
            localStorage.setItem(HIGH_SCORE_KEY, highScore);
            updateHighScoreDisplay();
            feedbackEl.textContent = translations[currentLanguage].newRecordFeedback.replace('{score}', score);
        }
        wordInputEl.disabled = true;
        checkButton.classList.add('hidden');
        resetButton.classList.remove('hidden');
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableWords.length);
    currentWord = availableWords[randomIndex];
    usedWords.push(currentWord); // Add word to the used list

    scrambledWordEl.textContent = scrambleWord(currentWord);
    wordInputEl.value = "";
    feedbackEl.textContent = "";
    wordInputEl.focus();
}

function checkAnswer() {
    if (wordInputEl.value.trim() === '') return;

    const playerAnswer = wordInputEl.value.toUpperCase();
    if (playerAnswer === currentWord) {
        score += 10;
        // MODIFIED: Timer caps at 20 seconds
        timer = Math.min(20, timer + 5);
        scoreEl.textContent = score;
        timerEl.textContent = timer;
        feedbackEl.textContent = translations[currentLanguage].feedbackCorrect;
        feedbackEl.className = "feedback correct";
        setTimeout(newRound, 500);
    } else {
        // MODIFIED: Penalty for wrong answer
        timer -= 5;
        if (timer < 0) timer = 0; // Prevent negative timer
        timerEl.textContent = timer;
        feedbackEl.textContent = translations[currentLanguage].feedbackWrongPenalty;
        feedbackEl.className = "feedback wrong";
        if (timer <= 0) {
            gameOver();
        }
    }
}

function startTimer() {
    // MODIFIED: Initial timer is 20 seconds
    timer = 20;
    timerEl.textContent = timer;
    timerInterval = setInterval(() => {
        timer--;
        timerEl.textContent = timer;
        if (timer <= 0) {
            timer = 0;
            timerEl.textContent = timer;
            gameOver();
        }
    }, 1000);
}

function gameOver() {
    clearInterval(timerInterval);
    scrambledWordEl.textContent = translations[currentLanguage].gameOverTitle;

    if (score > highScore) {
        highScore = score;
        localStorage.setItem(HIGH_SCORE_KEY, highScore);
        updateHighScoreDisplay();
        feedbackEl.textContent = translations[currentLanguage].newRecordFeedback.replace('{score}', score);
        feedbackEl.className = "feedback correct";
    } else {
        feedbackEl.textContent = translations[currentLanguage].finalScoreFeedback.replace('{score}', score);
        feedbackEl.className = "feedback";
    }

    wordInputEl.disabled = true;
    checkButton.classList.add('hidden');
    resetButton.classList.remove('hidden');
}

function startGame() {
    selectedCategory = categorySelector.value;
    if (!selectedCategory) {
        alert(translations[currentLanguage].alertChooseCategory);
        return;
    }

    currentCategoryNameEl.textContent = selectedCategory;

    categorySelectionEl.classList.add('hidden');
    gameAreaEl.classList.remove('hidden');
    langSwitcherEl.classList.add('disabled');

    // MODIFIED: Reset the used words array for the new game
    usedWords = [];
    score = 0;
    scoreEl.textContent = score;
    wordInputEl.disabled = false;
    checkButton.classList.remove('hidden');
    resetButton.classList.add('hidden');
    clearInterval(timerInterval);
    startTimer();
    newRound();
}

function backToMenu() {
    gameAreaEl.classList.add('hidden');
    categorySelectionEl.classList.remove('hidden');
    langSwitcherEl.classList.remove('disabled');
}

// --- EVENT LISTENERS ---
langIdButton.addEventListener('click', () => setLanguage('id'));
langEnButton.addEventListener('click', () => setLanguage('en'));
startGameButton.addEventListener('click', startGame);
checkButton.addEventListener('click', checkAnswer);
wordInputEl.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});
resetButton.addEventListener('click', backToMenu);

// --- INISIALISASI GAME ---
document.addEventListener('DOMContentLoaded', () => {
    // Muat bahasa pilihan terakhir, atau default ke 'id'
    const savedLang = localStorage.getItem(LANG_KEY) || 'id';
    setLanguage(savedLang);
    loadHighScore();
});