// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
  "Ahoy there, matey! What be troublin' ye today? Speak up, and let’s see if we can find ye some good entertainment!",
  "Arrr, ye seem like ye be in need o' somethin' to pass the time. Tell ol' Bootleg Bonnie what ye be lookin' for!",
  "Ahoy, ye salty sea dog! What media treasure be ye seekin' today? Let ol' Bootleg Bonnie help ye find somethin’ grand!"
  ];
  
  var elizaFinals = [
  "Farewell, matey! May yer sails be full and yer tankard never empty!",
  "Arrr, it’s been a fine time chatin’ with ye. Until we meet again on the high seas, matey!",
  "Goodbye, ye jolly scallywag! May yer next adventure be filled with joy and treasure!",
  "Arrr, maybe we’ll meet again soon for more treasure hunts! Until then, fair winds to ye!"
  ];
  
  var elizaQuits = [
  "farewell",
  "be off",
  "set sail",
  "exit",
  "quit"
  ];
  
  var elizaPres = [
  "don’t", "don’t",
  "can’t", "can’t",
  "won’t", "won’t",
  "recollect", "remember",
  "recall", "remember",
  "dreamt", "dreamed",
  "dreams", "dream",
  "maybe", "perhaps",
  "certainly", "aye",
  "machine", "ship",
  "ships", "ship",
  "computers", "ship's wheel",
  "were", "was",
  "ye're", "ye are",
  "i’m", "i am",
  "same", "alike",
  "identical", "alike",
  "equivalent", "alike"
  ];
  
  var elizaPosts = [
  "am", "be",
  "your", "me",
  "me", "ye",
  "myself", "yerself",
  "yerself", "myself",
  "i", "ye",
  "ye", "I",
  "my", "yer",
  "i’m", "ye are"
  ];
  
  var elizaSynons = {
  "be": ["am", "is", "are", "was", "be", "arr", "aye"],
  "belief": ["feel", "think", "believe", "wish", "suspect", "think yer ship’s sailin’ smooth"],
  "cannot": ["can't", "can’t", "shiver me timbers", "nay"],
  "desire": ["want", "need", "crave", "yearn"],
  "everyone": ["everybody", "no one", "every pirate", "the crew"],
  "family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child", "shipmates", "crew"],
  "happy": ["elated", "glad", "better", "filled with rum", "cheerful", "feelin’ lucky"],
  "sad": ["unhappy", "down in the dumps", "mournful", "sea sick", "unfortunate"],
  "book": ["books", "novel", "novels", "comic", "comics"],
  "movie": ["movies", "film", "films"],
  "music": ["songs", "tunes", "song"],
  "game": ["games", "video games"],
  "sport": ["sports"]
  };
var elizaKeywords = [
  ["xnone", 0, [
    ["*", [
        "Arrr! I be not sure I understand ye fully, matey.",
        "Aye, keep talkin' if ye wish, I'll listen.",
        "What does that suggest to ye, ye scallywag?",
        "Arrr, does talkin' 'bout this trouble ye?"
    ]]
  ]],

  // Adding media-related responses with pirate speech
  ["movies", 10, [
    ["* movies *", [
        "I recommend checkin' out [BroFlix](https://broflix.cc/) fer the latest films, arrr!",
        "Ye might enjoy watchin' movies over at [FreeK](https://freek.to/), ye salty dog.",
        "Have ye tried watchin' movies on [Heartive](https://heartive.pages.dev/)? They'll be keepin' ye entertained!"
    ]]
  ]],
  ["movie", 10, [
    ["* movie *", [
        "I recommend checkin' out [BroFlix](https://broflix.cc/) fer the latest films, arrr!",
        "Ye might enjoy watchin' movies over at [FreeK](https://freek.to/), ye salty dog.",
        "Have ye tried watchin' movies on [Heartive](https://heartive.pages.dev/)? They'll be keepin' ye entertained!"
    ]]
  ]],
  ["film", 10, [
    ["* film *", [
        "I recommend checkin' out [BroFlix](https://broflix.cc/) fer the latest films, arrr!",
        "Ye might enjoy watchin' movies over at [FreeK](https://freek.to/), ye salty dog.",
        "Have ye tried watchin' movies on [Heartive](https://heartive.pages.dev/)? They'll be keepin' ye entertained!"
    ]]
  ]],
  ["films", 10, [
    ["* movies *", [
        "I recommend checkin' out [BroFlix](https://broflix.cc/) fer the latest films, arrr!",
        "Ye might enjoy watchin' movies over at [FreeK](https://freek.to/), ye salty dog.",
        "Have ye tried watchin' movies on [Heartive](https://heartive.pages.dev/)? They'll be keepin' ye entertained!"
    ]]
  ]],
  ["TV", 10, [
    ["* TV *", [
        "I recommend checkin' out [BroFlix](https://broflix.cc/) fer the latest films, arrr!",
        "Ye might enjoy watchin' movies over at [FreeK](https://freek.to/), ye salty dog.",
        "Have ye tried watchin' movies on [Heartive](https://heartive.pages.dev/)? They'll be keepin' ye entertained!"
    ]]
  ]],
  ["shows", 10, [
    ["* shows *", [
        "I recommend checkin' out [BroFlix](https://broflix.cc/) fer the latest films, arrr!",
        "Ye might enjoy watchin' movies over at [FreeK](https://freek.to/), ye salty dog.",
        "Have ye tried watchin' movies on [Heartive](https://heartive.pages.dev/)? They'll be keepin' ye entertained!"
    ]]
  ]],
  ["episodes", 10, [
    ["* episodes *", [
        "I recommend checkin' out [BroFlix](https://broflix.cc/) fer the latest films, arrr!",
        "Ye might enjoy watchin' movies over at [FreeK](https://freek.to/), ye salty dog.",
        "Have ye tried watchin' movies on [Heartive](https://heartive.pages.dev/)? They'll be keepin' ye entertained!"
    ]]
  ]],

  ["music", 10, [
    ["* music *", [
        "Check out [Cobalt Tools](https://cobalt.tools/) fer the finest tunes, matey!",
        "Ye might be enjoyin' the sweet melodies over at [Lucida](https://lucida.to/) fer all yer ear pleasures."
    ]]
  ]],
  ["song", 10, [
    ["* song *", [
        "Check out [Cobalt Tools](https://cobalt.tools/) fer the finest tunes, matey!",
        "Ye might be enjoyin' the sweet melodies over at [Lucida](https://lucida.to/) fer all yer ear pleasures."
    ]]
  ]],
  ["songs", 10, [
    ["* songs *", [
        "Check out [Cobalt Tools](https://cobalt.tools/) fer the finest tunes, matey!",
        "Ye might be enjoyin' the sweet melodies over at [Lucida](https://lucida.to/) fer all yer ear pleasures."
    ]]
  ]],

  ["book", 10, [
    ["* book *", [
        "Lookin' fer a good read? Try [LibGen](https://libgen.mx/) fer a treasure trove of books!",
         "How 'bout browsin' through [Gutenberg](https://www.gutenberg.org/) fer some pirate tales and adventures?"
    ]]
  ]],
  ["books", 10, [
    ["* books *", [
        "Lookin' fer a good read? Try [LibGen](https://libgen.mx/) fer a treasure trove of books!",
         "How 'bout browsin' through [Gutenberg](https://www.gutenberg.org/) fer some pirate tales and adventures?"
    ]]
  ]],

  ["novel", 10, [
    ["* novel *", [
        "Lookin' fer a good read? Try [LibGen](https://libgen.mx/) fer a treasure trove of books!",
         "How 'bout browsin' through [Gutenberg](https://www.gutenberg.org/) fer some pirate tales and adventures?"
    ]]
  ]],
  ["novels", 10, [
    ["* novels *", [
        "Lookin' fer a good read? Try [LibGen](https://libgen.mx/) fer a treasure trove of books!",
         "How 'bout browsin' through [Gutenberg](https://www.gutenberg.org/) fer some pirate tales and adventures?"
    ]]
  ]],
  ["comic", 10, [
    ["* comic *", [
        "How 'bout browsin' through [ComixExtra](https://comixextra.com/) fer comics fit fer a pirate!",
        "Arrr, ye could try [ComixExtra](https://comixextra.com/) fer comics fit fer a pirate!"
    ]]
  ]],
  ["comics", 10, [
    ["* comics *", [
        "Lookin' fer a good read? Try [LibGen](https://libgen.mx/) fer a treasure trove of books!",
        "Arrr, ye could try [ComixExtra](https://comixextra.com/) fer comics fit fer a pirate!"
    ]]
  ]],

  ["manga", 10, [
    ["* manga *", [
        "Arrr, ye could try [MangaDex](https://mangadex.org/) fer a treasure trove of manga!",
        "Arrr, ye could try [MangaDex](https://mangadex.org/) fer manga fit fer a pirate!"
    ]]
  ]],
  ["game", 10, [
    ["* game *", [
        "If ye be into games, check out [GOG Games](https://gog-games.to/) fer a bounty of titles, arrr!",
        "Ye might like explorin' game reviews on [SteamRip](https://steamrip.com/), ye salty pirate."
    ]]
  ]],
  ["games", 10, [
    ["* games *", [
        "If ye be into games, check out [GOG Games](https://gog-games.to/) fer a bounty of titles, arrr!",
        "Ye might like explorin' game reviews on [SteamRip](https://steamrip.com/), ye salty pirate."
    ]]
  ]],

  ["sports", 10, [
    ["* sports *", [
        "Ye can catch the latest action on [Sport-Video](https://www.sport-video.org.ua/), fer all yer sporting needs.",
        "Want high-def sports? [SportsHD](https://sportshd.app/) be the place to go, matey!"
    ]]
  ]],
  ["sport", 10, [
    ["* sport *", [
        "Ye can catch the latest action on [Sport-Video](https://www.sport-video.org.ua/), fer all yer sporting needs.",
        "Want high-def sports? [SportsHD](https://sportshd.app/) be the place to go, matey!"
    ]]
  ]],

  ["software", 10, [
    ["* software *", [
        "Look no further than [CrackURL](https://cracksurl.com/) fer yer cracked software needs, ye savvy?"
    ]]
  ]],
  ["adobe", 10, [
    ["* adobe *", [
        "Ye can find yer software treasures at [AE Download](https://aedownload.com/)!"
    ]]
  ]],

  ["xforeign", 0, [
    ["*", [
        "Arrr, I speak but English, ye foreign scallywags!"
    ]]
  ]],

  ["hello", 0, [
    ["*", [
        "Ahoy, matey! What be yer problem? Speak yer mind!"
    ]]
  ]]
];


// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof
