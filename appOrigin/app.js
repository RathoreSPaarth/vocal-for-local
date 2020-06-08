let inp = document.getElementById("txt")
let res = document.getElementById('name')
let button = document.getElementById("btn")
let flag = document.getElementById("flag")
let img = document.getElementById("flag-img")

button.addEventListener("click",checkValue)
let comp = [
    {
        company : "paytm",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "google",
        country : "USA",
        src : "https://restcountries.eu/data/usa.svg"
    },
    {
        company : "ola",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "patanjali",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "tata",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "himalaya",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "flipkart",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "byjus",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "guvi",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "lotus",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "biotiq",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "real",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "paper boat",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "godrej",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "bisleri",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "santoor",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "dabur",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "amul",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "ananda",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "havmor",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "vadilal",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "nirma",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "ujala",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "ghadi",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "infosys",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "mahindra",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "ongc",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "bharat petroleum",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "bajaj group",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "bajaj",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "itc",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "icici bank",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "idea",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "hero",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "hdfc",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "britannia",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "gail",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "zee",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "gail",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "bsnl",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "ntpc",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "parle",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "yes bank",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "axis bank",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "aditya birla",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "birla",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "asian paints",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "mrf",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "royal enfield",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "mother dairy",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "nandini",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "indigo",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "tvs",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "saffola",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "emami",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "sail",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "sun pharma",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "nerolac",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "idbi bank",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "voltas",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "air india",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "dlf",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "eicher",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "pidilite",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    }
    //electronic-usa
    ,
    {
        company : "dell",
        country : "USA",
        src :     "https://restcountries.eu/data/usa.svg"
    },
    {
        company : "apple",
        country : "USA",
        src :     "https://restcountries.eu/data/usa.svg"
    },
    {
        company : "hp",
        country : "USA",
        src :     "https://restcountries.eu/data/usa.svg"
    },
    {
        company : "whirlpool",
        country : "USA",
        src :     "https://restcountries.eu/data/usa.svg"
    },
    //electronics-china
    {
        company : "lenovo",
        country : "China",
        src :     "https://restcountries.eu/data/chn.svg"
    },
    {
        company : "xiaomi",
        country : "China",
        src :     "https://restcountries.eu/data/chn.svg"
    },
    {
        company : "huawei",
        country : "China",
        src :     "https://restcountries.eu/data/chn.svg"
    },
    {
        company : "razer",
        country : "China",
        src :     "https://restcountries.eu/data/chn.svg"
    },
    {
        company : "oppo",
        country : "china",
        src : "https://restcountries.eu/data/chn.svg"
    },
    {
        company : "10.or",
        country : "china",
        src : "https://restcountries.eu/data/chn.svg"
    },{
        company : "amoi",
        country : "china",
        src : "https://restcountries.eu/data/chn.svg"
    },{
        company : "bbk",
        country : "china",
        src : "https://restcountries.eu/data/chn.svg"
    },{
        company : "coolpad",
        country : "china",
        src : "https://restcountries.eu/data/chn.svg"
    },{
        company : "cubot",
        country : "china",
        src : "https://restcountries.eu/data/chn.svg"
    },{
        company : "gfive",
        country : "china",
        src : "https://restcountries.eu/data/chn.svg"
    },{
        company : "haier",
        country : "china",
        src : "https://restcountries.eu/data/chn.svg"
    },{
        company : "hisense",
        country : "china",
        src : "https://restcountries.eu/data/chn.svg"
    },{
        company : "honor",
        country : "china",
        src : "https://restcountries.eu/data/chn.svg"
    },{
        company : "konka",
        country : "china",
        src : "https://restcountries.eu/data/chn.svg"
    },{
        company : "oneplus",
        country : "china",
        src : "https://restcountries.eu/data/chn.svg"
    },{
        company : "realme",
        country : "china",
        src : "https://restcountries.eu/data/chn.svg"
    },{
        company : "tcl",
        country : "china",
        src : "https://restcountries.eu/data/chn.svg"
    },{
        company : "vivo",
        country : "china",
        src : "https://restcountries.eu/data/chn.svg"
    },{
        company : "zte",
        country : "china",
        src : "https://restcountries.eu/data/chn.svg"
    },{
        company : "zuk",
        country : "china",
        src : "https://restcountries.eu/data/chn.svg"
    },
    //electronics-taiwan
    {
        company : "msi",
        country : "Taiwan",
        src :     "https://restcountries.eu/data/twn.svg"
    },
    {
        company : "acer",
        country : "Taiwan",
        src :     "https://restcountries.eu/data/twn.svg"
    },
    {
        company : "asus",
        country : "Taiwan",
        src :     "https://restcountries.eu/data/twn.svg"
    },
    {
        company : "htc",
        country : "Taiwan",
        src :     "https://restcountries.eu/data/twn.svg"
    },
    {
        company : "gigabyte",
        country : "Taiwan",
        src :     "https://restcountries.eu/data/twn.svg"
    },
    {
        company : "foxconn",
        country : "Taiwan",
        src :     "https://restcountries.eu/data/twn.svg"
    },
    {
        company : "benq",
        country : "Taiwan",
        src :     "https://restcountries.eu/data/twn.svg"
    },
    {
        company : "dbtel",
        country : "Taiwan",
        src :     "https://restcountries.eu/data/twn.svg"
    },
    //electronics-korea
    {
        company : "samsung",
        country : "South Korea",
        src :     "https://restcountries.eu/data/kor.svg"
    },
    {
        company : "lg",
        country : "South Korea",
        src :     "https://restcountries.eu/data/kor.svg"
    },
    {
        company : "pantech",
        country : "South Korea",
        src :     "https://restcountries.eu/data/kor.svg"
    },
    {
        company : "kt tech",
        country : "South Korea",
        src :     "https://restcountries.eu/data/kor.svg"
    },
    //electronics-japan
    {
        company : "sony",
        country : "Japan",
        src :     "https://restcountries.eu/data/jpn.svg"
    },
    {
        company : "toshiba",
        country : "Japan",
        src :     "https://restcountries.eu/data/jpn.svg"
    },
    {
        company : "panasonic",
        country : "Japan",
        src :     "https://restcountries.eu/data/jpn.svg"
    },
    {
        company : "akai",
        country : "Japan",
        src :     "https://restcountries.eu/data/jpn.svg"
    },{
        company : "fujitsu",
        country : "Japan",
        src :     "https://restcountries.eu/data/jpn.svg"
    },{
        company : "casio",
        country : "Japan",
        src :     "https://restcountries.eu/data/jpn.svg"
    },{
        company : "hitachi",
        country : "Japan",
        src :     "https://restcountries.eu/data/jpn.svg"
    },{
        company : "jrc",
        country : "Japan",
        src :     "https://restcountries.eu/data/jpn.svg"
    },
    {
        company : "kyocera",
        country : "Japan",
        src :     "https://restcountries.eu/data/jpn.svg"
    },
    {
        company : "mitsubishi",
        country : "Japan",
        src :     "https://restcountries.eu/data/jpn.svg"
    },
    {
        company : "nec",
        country : "Japan",
        src :     "https://restcountries.eu/data/jpn.svg"
    },
    {
        company : "sansui",
        country : "Japan",
        src :     "https://restcountries.eu/data/jpn.svg"
    },
    {
        company : "sharp",
        country : "Japan",
        src :     "https://restcountries.eu/data/jpn.svg"
    },
    //electronics-india
    {
        company : "avita",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "i ball",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "hcl",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "micromax",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "lava",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "karbonn",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "spice",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "intex",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "celkon",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "lyf",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "onida",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "xolo",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "creo",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "wipro",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "reliance",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    {
        company : "jio",
        country : "India",
        src :     "https://restcountries.eu/data/ind.svg"
    },
    //electronics-uk
    {
        company : "rdp",
        country : "UK",
        src :     "https://restcountries.eu/data/gbr.svg"
    },
    //electronics-finland
    {
        company : "nokia",
        country : "Finland",
        src :     "https://restcountries.eu/data/fin.svg"
    },
    {
        company : "hmd global",
        country : "Finland",
        src :     "https://restcountries.eu/data/fin.svg"
    },
    {
        company : "jolla",
        country : "Finland",
        src :     "https://restcountries.eu/data/fin.svg"
    },
   
]
function checkValue(){
   let key = txt.value.toLowerCase()
   for(let i = 0; i<comp.length; i++){
    if(comp[i].company==key)
    {
        res.innerHTML = comp[i].country
        img.src = comp[i].src
        break
    }
    else
    {res.innerHTML = "not found!"
    img.src = ""}
   }
   
   
}


