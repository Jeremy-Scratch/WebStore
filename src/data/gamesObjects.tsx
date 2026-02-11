import type { GameInfo } from "../components/carousel/hero/heroCard"
import type { DeepGameInfo } from "../components/carousel/feature/featureCard"
import type { CategoryInfo } from "../components/carousel/categories/categoryCard"

export const Games: GameInfo[] = [

    {
        ImgUrl: "src/assets/hero_capsule_doom.jpg",
        BgUrl: "src/assets/doom_bg.jpg",
        VideoUrl: "src/assets/doom_dark_ages.webm",
        Title: "DOOM: The Dark Ages",
        ReviewSumary: "Very Positive",
        ReviewStat: 14262,
        Genres: ["Action", "FPS", "Demons", "Dark Fantasy", "Singleplayer"],
        Discount: 50,
        BeforePrice: 69.99,
        AfterPrice: 34.99,
    },

    {
        ImgUrl: "src/assets/hero_capsule_persona.jpg",
        BgUrl: "src/assets/persona_bg.jpg",
        VideoUrl: "src/assets/persona_5.webm",
        Title: "Persona 5 Royal",
        ReviewSumary: "Overwhelmingly Positive",
        ReviewStat: 29865,
        Genres: ["JRPG", "Story Rich", "Great Soundtrack", "Turn-Based Combat", "Anime"],
        Discount: 70,
        BeforePrice: 59.99,
        AfterPrice: 17.99,
    },

    {
        ImgUrl: "src/assets/hero_capsule_battlefield.jpg",
        BgUrl: "src/assets/battlefield_bg.jpg",
        VideoUrl: "src/assets/battlefield_6.webm",
        Title: "Battlefield™ 6",
        ReviewSumary: "Mostly Positive",
        ReviewStat: 123508,
        Genres: ["FPS", "Multiplayer", "Action", "Military", "Singleplayer"],
        Discount: 30,
        BeforePrice: 69.99,
        AfterPrice: 48.99,
    },

    {
        ImgUrl: "src/assets/hero_capsule_silksong.jpg",
        BgUrl: "src/assets/silksong_bg.jpg",
        VideoUrl: "src/assets/silk_song.webm",
        Title: "Hollow Knight: Silksong",
        ReviewSumary: "Very Positive",
        ReviewStat: 128018,
        Genres: ["Metroidvania", "Difficult", "Indie", "Great Soundtrack", "Souls-like"],
        Discount: 20,
        BeforePrice: 19.99,
        AfterPrice: 15.99,
    },

    {
        ImgUrl: "src/assets/hero_capsule_hades2.jpg",
        BgUrl: "src/assets/hades2_bg.jpg",
        VideoUrl: "src/assets/hades_2.webm",
        Title: "Hades II",
        ReviewSumary: "Overwhelmingly Positive",
        ReviewStat: 57704,
        Genres: ["Action", "Roguelike", "Roguelite", "Hack and Slash", "Mythology"],
        Discount: 25,
        BeforePrice: 29.99,
        AfterPrice: 24.49,
    },

    {
        ImgUrl: "src/assets/hero_capsule_rrr2.jpg",
        BgUrl: "src/assets/rrr2_bg.jpg",
        VideoUrl: "src/assets/rrr_2.webm",
        Title: "Red Dead Redemption 2",
        ReviewSumary: "Very Positive",
        ReviewStat: 274170,
        Genres: ["Open World", "Story Rich", "Western", "Multiplayer", "Adventure"],
        Discount: 75,
        BeforePrice: 59.99,
        AfterPrice: 14.99,
    },

    {
        ImgUrl: "src/assets/hero_capsule_2k26.jpg",
        BgUrl: "src/assets/2k26_bg.jpg",
        VideoUrl: "src/assets/nba_2k26.webm",
        Title: "NBA 2K26",
        ReviewSumary: "Mostly Positive",
        ReviewStat: 3677,
        Genres: ["Gambling", "Sports", "Basketball", "Simulation", "eSports"],
        Discount: 60,
        BeforePrice: 69.99,
        AfterPrice: 27.99,
    },

    {
        ImgUrl: "src/assets/hero_capsule_blackops7.jpg",
        BgUrl: "src/assets/blackops7_bg.jpg",
        VideoUrl: "src/assets/cod_blackops_7.webm",
        Title: "Call of Duty®: Black Ops 7",
        ReviewSumary: "Mostly Negative",
        ReviewStat: 1597,
        Genres: ["Action", "FPS", "Shooter", "Multiplayer", "Singleplayer"],
        Discount: 30,
        BeforePrice: 69.99,
        AfterPrice: 48.99,
    },

    {
        ImgUrl: "src/assets/hero_capsule_mhwild.jpg",
        BgUrl: "src/assets/mhwild_bg.jpg",
        VideoUrl: "src/assets/monster_hunter_wild.webm",
        Title: "Monster Hunter Wilds",
        ReviewSumary: "Mixed",
        ReviewStat: 76522,
        Genres: ["Hunting", "Action", "Multiplayer", "Online Co-Op", "Co-op"],
        Discount: 45,
        BeforePrice: 69.99,
        AfterPrice: 38.49,
    }
]
export const deepGames: DeepGameInfo[] = [
    {                  
        Name:"PAYDAY2",
        Discount: 90,
        BeforePrice: 9.99,
        AfterPrice: 0.99,
        VideoUrl:"https://video.fastly.steamstatic.com/store_trailers/218620/834105061/2d7c8f7b8a0a705cc5bbf4ccc720f29b61e876d9/1750481367/microtrailer.webm?t=1747224986", 
        Img:"src/assets/capsule_616x353.jpg"
    },
    {   
        Name:"ICARUS",
        Discount: 90,
        BeforePrice: 34.99,
        AfterPrice: 3.49,
        VideoUrl:"https://video.fastly.steamstatic.com/store_trailers/1149460/351075938/a7a0c966ff56875676dcce09e3f810643d452a98/1753055228/microtrailer.webm?t=1753056808" ,
        Img:'src/assets/capsule_616x353(1).jpg'
    },
    {   
        Name:"DEADISLAND2",
        Discount: 90,
        BeforePrice: 49.99,
        AfterPrice: 4.99,
        VideoUrl:"https://video.akamai.steamstatic.com/store_trailers/934700/772874/2b9a66eedd5f57b6934b700b41404ac40ccc8e12/1750597891/microtrailer.webm?t=1729610163",
        Img:'src/assets/capsule_616x353(2).jpg'
    },
    {   
        Name:"DARKSIDERS3",
        Discount: 90,
        BeforePrice: 39.99,
        AfterPrice: 3.99,
        VideoUrl:"https://video.fastly.steamstatic.com/store_trailers/606280/100841/ac926393614dbd644670fa581afb8fa25330de99/1750561300/microtrailer.webm?t=1498220875",
        Img:'src/assets/capsule_616x353(3).jpg'
    },
    {   
        Name:"NIOH",
        Discount: 90,
        BeforePrice: 49.99,
        AfterPrice: 4.99,
        VideoUrl:"https://video.fastly.steamstatic.com/store_trailers/485510/131812/89af21ae4188b96860383d8f6061a07574a68d6b/1750536695/microtrailer.webm?t=1509956277",
        Img:'src/assets/capsule_616x353(4).jpg'
    },
    {   
        Name:"LEGOSTARWARS",
        Discount: 90,
        BeforePrice: 49.99,
        AfterPrice: 4.99,
        VideoUrl:"https://video.fastly.steamstatic.com/store_trailers/920210/510576/f1a07979227ba5c5a4592888deadc7aba83953f1/1750596268/microtrailer.webm?t=1667432123",
        Img:'src/assets/capsule_616x353(5).jpg'
    },
    {   
        Name:"ASSASSINSCREEDVALHALLA",
        Discount: 90,
        BeforePrice: 59.99,
        AfterPrice: 5.99,
        VideoUrl:"https://video.fastly.steamstatic.com/store_trailers/2208920/515678/08b6d5b1267d155673daea051094ee1046ddfff7/1750809553/microtrailer.webm?t=1693577111",
        Img:'src/assets/capsule_616x353(6).jpg'
    },
    {   
        Name:"BENDY",
        Discount: 90,
        BeforePrice: 19.99,
        AfterPrice: 1.99,
        VideoUrl:"https://video.akamai.steamstatic.com/store_trailers/622650/567000514/b1ac45121f429341b8f0f0f9accd138570ec6d83/1750563536/microtrailer.webm?t=1746814531",
        Img:'src/assets/capsule_616x353(7).jpg'
    },
    {   
        Name:"FALLOUT76",
        Discount: 90,
        BeforePrice: 39.99,
        AfterPrice: 3.99,
        VideoUrl:"https://video.fastly.steamstatic.com/store_trailers/1151340/664076456/5e6404afc7c8d33767cbca13f27299652030d711/1756316590/microtrailer.webm?t=1756832424",
        Img:'src/assets/capsule_616x353(8).jpg'
    }
]
export const fGames: DeepGameInfo[] = [
    {
        Name:"Devil May Cry5",
        Discount: 75,
        BeforePrice: 29.99,
        AfterPrice: 7.49, 
        Img:"src/assets/capsule_616x353(18).jpg"
    },
    {
        Name:"Metaphor: ReFantazio",
        Discount: 50,
        BeforePrice: 69.99,
        AfterPrice: 34.99, 
        Img:"src/assets/capsule_616x353(19).jpg"
    },
    {
        Name:"NieR:Automata™",
        Discount: 60,
        BeforePrice: 39.99,
        AfterPrice: 15.49, 
        Img:"src/assets/capsule_616x353(20).jpg"
    },
    {
        Name:"VEIN",
        Discount: 15,
        BeforePrice: 19.99,
        AfterPrice: 16.99, 
        Img:"src/assets/capsule_616x353(21).jpg"
    },
    {
        Name:"Tom Clancy's Ghost Recon® Breakpoint",
        Discount: 90,
        BeforePrice: 59.99,
        AfterPrice: 5.99, 
        Img:"src/assets/capsule_616x353(22).jpg"
    },
    {
        Name:"GUILTY GEAR STRIVE",
        Discount: 50,
        BeforePrice: 39.99,
        AfterPrice: 19.99, 
        Img:"src/assets/capsule_616x353(23).jpg"
    },
    {
        Name:"SnowRunner",
        Discount: 60,
        BeforePrice: 29.99,
        AfterPrice: 11.99, 
        Img:"src/assets/capsule_616x353(24).jpg"
    },
    {
        Name:"Wildgate",
        Discount: 50,
        BeforePrice: 29.99,
        AfterPrice: 14.99, 
        Img:"src/assets/capsule_616x353(25).jpg"
    },
    {
        Name:"Broken Arrow",
        Discount: 15,
        BeforePrice: 49.99,
        AfterPrice: 42.49, 
        Img:"src/assets/capsule_616x353(26).jpg"
    },
    {
        Name:"Overcooked! 2",
        Discount: 75,
        BeforePrice: 24.99,
        AfterPrice: 6.29, 
        Img:"src/assets/capsule_616x353(27).jpg"
    },
    {
        Name:"Planet Coaster 2",
        Discount: 50,
        BeforePrice: 49.99,
        AfterPrice: 24.99, 
        Img:"src/assets/capsule_616x353(28).jpg"
    },
    {
        Name:"Witchfire",
        Discount: 20,
        BeforePrice: 39.99,
        AfterPrice: 31.99, 
        Img:"src/assets/capsule_616x353(29).jpg"
    },
    {
        Name:"Oxygen Not Included",
        Discount: 70,
        BeforePrice: 24.99,
        AfterPrice: 7.49, 
        Img:"src/assets/capsule_616x353(30).jpg"
    },
    {
        Name:"FINAL FANTASY VII REBIRTH",
        Discount: 50,
        BeforePrice: 69.99,
        AfterPrice: 34.99, 
        Img:"src/assets/capsule_616x353(31).jpg"
    },
    {
        Name:"Sea of Thieves: 2025 Edition",
        Discount: 65,
        BeforePrice: 39.99,
        AfterPrice: 13.99, 
        Img:"src/assets/capsule_616x353(32).jpg"
    },
    {
        Name:"Valheim",
        Discount: 50,
        BeforePrice: 19.99,
        AfterPrice: 9.99, 
        Img:"src/assets/capsule_616x353(33).jpg"
    }
    
]
export const CategoriesData:CategoryInfo[] = [
    {
        Name:"Anime",
        Img: "src/assets/anime.webp"
    },
    {
        Name:"City & Settlement",
        Img: "src/assets/strategy_cities_settlements.webp"
    },
    {
        Name:"Casual",
        Img: "src/assets/casual.webp"
    },
    {
        Name:"Role-Playing",
        Img: "src/assets/rpg.webp"
    },
    {
        Name:"Horror",
        Img: "src/assets/horror.webp"
    },
    {
        Name:"Adventure",
        Img: "src/assets/adventure.webp"
    },
    {
        Name:"Visual Novel",
        Img: "src/assets/visual_novel.webp"
    },
    {
        Name:"Story-Rich",
        Img: "src/assets/story_rich.webp"
    },
    {
        Name:"All Sports",
        Img: "src/assets/sports.webp"
    },
    {
        Name:"Survival",
        Img: "src/assets/survival.webp"
    },
    {
        Name:"Puzzle",
        Img: "src/assets/puzzle_matching.webp"
    },
    {
        Name:"Strategy",
        Img: "src/assets/strategy.webp"
    },
    {
        Name:"Co-operative",
        Img: "src/assets/multiplayer_coop.webp"
    },
    {
        Name:"Free to Play",
        Img: "src/assets/freetoplay.webp"
    },
    {
        Name:"VR Titles",
        Img: "src/assets/vr.webp"
    },
    {
        Name:"Action",
        Img: "src/assets/action.webp"
    },
    {
        Name:"Racing",
        Img: "src/assets/racing.webp"
    },
    {
        Name:"Rogue-like",
        Img: "src/assets/rogue_like_rogue_lite.webp"
    },
    {
        Name:"Fighting",
        Img: "src/assets/fighting_martial_arts.webp"
    },
    {
        Name:"Sci-fi & Cyberpunk",
        Img: "src/assets/science_fiction.webp"
    },
]
export const CategoryGradient = [
"[background:linear-gradient(155deg,rgba(0,0,0,0.00)15.03%,rgba(74,14,15,0.45)48.83%,rgba(61,8,9,0.60)84.73%),linear-gradient(135deg,rgba(0,0,0,0.00)9.72%,rgba(115,11,13,0.26)30.04%,rgba(238,23,27,0.38)51.69%,rgba(255,0,4,0.50)92.99%)]",

"[background:linear-gradient(155deg,rgba(0,0,0,0.00)15.03%,rgba(74,55,14,0.45)48.83%,rgba(61,38,8,0.60)84.73%),linear-gradient(135deg,rgba(0,0,0,0.00)9.72%,rgba(115,75,11,0.26)30.04%,rgba(238,149,23,0.38)51.69%,rgba(255,94,0,0.50)92.99%)]",

"[background:linear-gradient(155deg,rgba(0,0,0,0.00)15.03%,rgba(41,143,25,0.45)48.83%,rgba(86,85,33,0.60)84.73%),linear-gradient(135deg,rgba(0,0,0,0.00)9.72%,rgba(243,240,19,0.26)30.04%,rgba(124,114,178,0.38)51.69%,rgba(251,255,0,0.50)92.99%)]",

"[background:linear-gradient(155deg,rgba(0,0,0,0.00)15.03%,rgba(14,59,74,0.45)48.83%,rgba(88,155,165,0.60)84.73%),linear-gradient(135deg,rgba(0,0,0,0.00)9.72%,rgba(11,74,115,0.26)30.04%,rgba(23,217,238,0.38)51.69%,rgba(54,159,170,0.50)92.99%)]",

"[background:linear-gradient(155deg,rgba(0,0,0,0.00)15.03%,rgba(22,14,74,0.45)48.83%,rgba(20,8,61,0.6)84.73%),linear-gradient(135deg,rgba(0,0,0,0)9.72%,rgba(41,16,101,0.26)30.04%,rgba(90,42,221,0.38)51.69%,rgba(113,38,243,0.5)92.99%)]"
]