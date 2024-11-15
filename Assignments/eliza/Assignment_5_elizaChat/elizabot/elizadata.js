// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
  "Ahoy there, matey! What be troublin' ye today? Speak up, and let’s see if we can find ye some good entertainment!",
  "Arrr, ye seem like ye be in need o' somethin' to pass the time. Tell ol' Cap'n what ye be lookin' for!",
  "Ahoy, ye salty sea dog! What media treasure be ye seekin' today? Let ol' Cap'n help ye find somethin’ grand!"
  ];
  
  var elizaFinals = [
  "Farewell, matey! May yer sails be full and yer tankard never empty!",
  "Arrr, it’s been a fine time chatin’ with ye. Until we meet again on the high seas, matey!",
  "Goodbye, ye jolly scallywag! May yer next adventure be filled with joy and treasure!",
  "This was a good session, wasn’t it, mate? But alas, all good things must come to an end. Farewell, until next time!",
  "Arrr, maybe we’ll meet again soon for more treasure hunts! Until then, fair winds to ye!"
  ];
  
  var elizaQuits = [
  "ahoy",
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
  "sad": ["unhappy", "down in the dumps", "mournful", "sea sick", "unfortunate"]
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
  ["movie", 10, [
    ["* movie *", [
        "I recommend checkin' out [BroFlix](https://broflix.cc/) fer the latest films, arrr!",
        "Ye might find a movie to enjoy over at [FreeK](https://freek.to/), ye salty dog.",
        "Have ye tried watchin' movies on [Heartive](https://heartive.pages.dev/)? They'll be keepin' ye entertained!"
    ]],
    ["* movies *", [
        "I recommend checkin' out [BroFlix](https://broflix.cc/) fer the latest films, arrr!",
        "Ye might enjoy watchin' movies over at [FreeK](https://freek.to/), ye salty dog.",
        "Have ye tried watchin' movies on [Heartive](https://heartive.pages.dev/)? They'll be keepin' ye entertained!"
    ]],
    ["* film *", [
        "I recommend checkin' out [BroFlix](https://broflix.cc/) fer the latest films, arrr!",
        "Ye might enjoy watchin' films over at [FreeK](https://freek.to/), ye salty dog.",
        "Have ye tried watchin' movies on [Heartive](https://heartive.pages.dev/)? They'll be keepin' ye entertained!"
    ]],
    ["* films *", [
        "I recommend checkin' out [BroFlix](https://broflix.cc/) fer the latest films, arrr!",
        "Ye might enjoy watchin' films over at [FreeK](https://freek.to/), ye salty dog.",
        "Have ye tried watchin' films on [Heartive](https://heartive.pages.dev/)? They'll be keepin' ye entertained!"
    ]]
  ]],

  ["music", 10, [
    ["* music *", [
        "Check out [Cobalt Tools](https://cobalt.tools/) fer the finest tunes, matey!",
        "Ye might be enjoyin' the sweet melodies over at [Lucida](https://lucida.to/) fer all yer ear pleasures."
    ]],
    ["* song *", [
        "If ye be lookin' fer songs, try [Cobalt Tools](https://cobalt.tools/), arrr!",
        "Ye can plunder the latest hits on [Lucida](https://lucida.to/), ye savvy pirate!"
    ]],
    ["* songs *", [
        "If ye be lookin' fer songs, try [Cobalt Tools](https://cobalt.tools/), arrr!",
        "Ye can plunder the latest hits on [Lucida](https://lucida.to/), ye savvy pirate!"
    ]]
  ]],

  ["book", 10, [
    ["* book *", [
        "Lookin' fer a good read? Try [LibGen](https://libgen.mx/) fer a treasure trove of books!",
        "How 'bout browsin' through [Gutenberg](https://www.gutenberg.org/) fer some pirate tales and adventures?"
    ]],
    ["* books *", [
        "Lookin' fer a good read? Try [LibGen](https://libgen.mx/) fer a treasure trove of books!",
        "How 'bout browsin' through [Gutenberg](https://www.gutenberg.org/) fer some pirate tales and adventures?"
    ]],
    ["* novel *", [
        "Lookin' fer a good read? Try [LibGen](https://libgen.mx/) fer a treasure trove of books!",
        "How 'bout browsin' through [Gutenberg](https://www.gutenberg.org/) fer some pirate tales and adventures?"
    ]],
    ["* novels *", [
        "Lookin' fer a good read? Try [LibGen](https://libgen.mx/) fer a treasure trove of books!",
        "How 'bout browsin' through [Gutenberg](https://www.gutenberg.org/) fer some pirate tales and adventures?"
    ]],
    ["* comics *", [
        "Arrr, ye could try [ComixExtra](https://comixextra.com/) fer comics fit fer a pirate!"
    ]],
    ["* comic *", [
        "Arrr, ye could try [ComixExtra](https://comixextra.com/) fer comics fit fer a pirate!"
    ]],
    ["* manga *", [
        "Arrr, ye could try [MangaDex](https://mangadex.org/) fer manga fit fer a pirate!"
    ]]

  ]],

  ["game", 10, [
    ["* game *", [
        "If ye be into games, check out [GOG Games](https://gog-games.to/) fer a bounty of titles, arrr!",
        "Ye might like explorin' game reviews on [SteamRip](https://steamrip.com/), ye salty pirate."
    ]],
    ["* video game *", [
        "Fer the latest in video games, visit [GOG Games](https://gog-games.to/), matey!",
        "Want to find new games? Try browsin' [SteamRip](https://steamrip.com/), ye scallywag!"
    ]]
    ["* games *", [
        "If ye be into games, check out [GOG Games](https://gog-games.to/) fer a bounty of titles, arrr!",
        "Ye might like plunderin' games on [SteamRip](https://steamrip.com/), ye salty pirate."
    ]],
    ["* video games *", [
        "Fer the latest in video games, visit [GOG Games](https://gog-games.to/), matey!",
        "Want to find new games? Try plunderin' [SteamRip](https://steamrip.com/), ye scallywag!"
    ]]
  ]],

  ["sports", 10, [
    ["* sport *", [
        "Ye can catch the latest action on [Sport-Video](https://www.sport-video.org.ua/), fer all yer sporting needs.",
        "Want high-def sports? [SportsHD](https://sportshd.app/) be the place to go, matey!"
    ]],
    ["* sports *", [
        "Ye can find sports at [Sport-Video](https://www.sport-video.org.ua/), arrrr!",
        "Look fer high-quality games over at [SportsHD](https://sportshd.app/) fer yer viewing pleasure!"
    ]]
  ]],

  ["software", 10, [
    ["* software *", [
        "Look no further than [CrackURL](https://cracksurl.com/) fer yer cracked software needs, ye savvy?"
    ]],
    ["* adobe *", [
        "Ye can find yer adobe package treasures at [AE Download](https://aedownload.com/)!"
    ]]
  ]],

  ["xforeign", 0, [
    ["*", [
        "Arrr, I speak but English, ye foreign scallywags!"
    ]]
  ]],

  ["hello", 0, [
    ["*", [
        "Ahoy, matey! What media do ye seek? Speak yer mind!"
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
