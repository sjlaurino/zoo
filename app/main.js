import Armadillo from "./zoo/armadillo.js";
import Bat from "./zoo/bat.js";
import Cougar from "./zoo/cougar.js";
import Dingo from "./zoo/dingo.js";
import Emu from "./zoo/emu.js";
import Falcon from "./zoo/falcon.js";
import Giraffe from "./zoo/giraffe.js";
import Heron from "./zoo/heron.js";
import Igret from "./zoo/igret.js";
import Jackel from "./zoo/jackel.js";
import Kakapo from "./zoo/kakapo.js";
import Lemur from "./zoo/lemur.js";
import Manowar from "./zoo/manowar.js";
import Narwhal from "./zoo/narwhal.js";
import Orangutan from "./zoo/orangutan.js";
import Penguin from "./zoo/penguin.js"
import Quail from "./zoo/quail.js";
import Reindeer from "./zoo/reindeer.js";
import Seahorse from "./zoo/seahorse.js";
import Toucan from "./zoo/toucan.js";
import Urchin from "./zoo/urchin.js";
import Vulture from "./zoo/vulture.js";
import Walrus from "./zoo/walrus.js";
import Xenops from "./zoo/xenops.js";
import Yak from "./zoo/yak.js";
import Zebra from "./zoo/zebra.js";

let armadillo = new Armadillo('Andy', 4, false)
let bat = new Bat('Bob', 2, true)
let cougar = new Cougar('Cindy', 4, false)
let dingo = new Dingo('Donny', 4, false)
let emu = new Emu('Earl', 4, false)
let falcon = new Falcon('Frank', 0, true)
let giraffe = new Giraffe('Geoff', 4, false)
let heron = new Heron('Hank', 2, true)
let igret = new Igret('Ike', 2, true)
let jackel = new Jackel('Jake', 4, false)
let kakapo = new Kakapo('Katie', 2, true)
let lemur = new Lemur('Liz', 2, false)
let manowar = new Manowar('Mongo', 0, false)
let narwhal = new Narwhal('Nosie', 0, false)
let orangutan = new Orangutan('Oliver', 2, false)
let penguin = new Penguin('Paul', 2, false)
let quail = new Quail('Quazi', 2, true)
let reindeer = new Reindeer('Rudolph', 4, true)
let seahorse = new Seahorse('Sally', 0, false)
let toucan = new Toucan('Tim', 2, true)
let urchin = new Urchin('Url', 0, false)
let vulture = new Vulture('Veronica', 2, true)
let walrus = new Walrus('Willy', 2, false)
let xenops = new Xenops('Xena', 2, true)
let yak = new Yak('Yusef', 4, false)
let zebra = new Zebra('Zander', 4, false)

let animals = [armadillo, bat, cougar, dingo, emu, falcon, giraffe, heron, igret, jackel, kakapo, lemur, manowar, narwhal, orangutan, penguin, quail, reindeer, seahorse, toucan, urchin, vulture, walrus, xenops, yak, zebra]

function draw(arr) {
  let template = ''
  for (let i = 0; i < arr.length; i++) {
    template += `<li>${arr[i].name} the ${arr[i].constructor.name} has ${arr[i].legs} legs and its ability to fly is ${arr[i].flight} </li>`
  }
  document.getElementById('zoo').innerHTML = template
}

draw(animals)
