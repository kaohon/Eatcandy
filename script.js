var candyhtml = document.getElementById("candy");

let candy = 0;
let count = 0;
const countUp = () => {
    console.log(candy++);
    console.log(count++);
    candyhtml.innerHTML = candy + " キャンディー";
    floormin = count / 60;
    countmin = Math.floor(floormin);
    floorhour = countmin / 60;
    counthour = Math.floor(floorhour);
    countmin = countmin - counthour * 60 

    countsec = count - (countmin * 60 + counthour * 60 * 60)
    elapsedsec.innerHTML = countsec;
    elapsedmin.innerHTML = countmin;
    elapsedhour.innerHTML = counthour;
    text = btoa(`${candy}\n${count}\n${countsec}\n${countmin}\n${counthour}\n${invalue}\n${stick_if}\n${ecube_if}\n${wand_if}\n${dcwand_if}\n${bwand_if}\n${twand_if}\n${lastwand_if}\n${sword_if}\n${dsword_if}\n${tsword_if}\n${lastsword_if}`);
  }
  setInterval(countUp, 1000);

stick_if = "false";
ecube_if = "false";

wand_if = "false";
dcwand_if = "false";
bwand_if = "false";
twand_if = "false";
lastwand_if = "false";

sword_if = "false";
dsword_if = "false";
tsword_if = "false";
lastsword_if = "false";

stick.addEventListener("click", stickfunc);
function stickfunc() {
  if (candy < 10000) {
    alert("キャンディが不足しています!");
  } else {
    stick_if = "true";
    stick.classList.add("bought");
    candy -= 10000;
    stick.removeEventListener("click", stickfunc);
  }
}

ecube.addEventListener("click", ecubefunc);

function ecubefunc() {
  if (candy < 50000) {
    alert("キャンディが不足しています!");
  } else if (stick_if == "false") {
    alert("先にキャンディスティックを取得してください!");
  } else {
    ecube_if = "true";
    ecube.classList.add("bought");
    candy -= 50000;
    ecube.removeEventListener("click", ecubefunc);
    const ecubeeffect = () => {
      console.log(candy++);
      candyhtml.innerHTML = candy + " キャンディー";
    }
    setInterval(ecubeeffect, 10000);
  }
}

wand.addEventListener("click", wandfunc); 
function wandfunc() {
  if (candy < 60000) {
    alert("キャンディが不足しています!");
  } else if (ecube_if == "false") {
    alert("先にエナジーキューブを取得してください!");
  } else if (sword_if = "true") {
    alert("キャンディワンドとキャンディソードはどちらかしか選択できません!");
  } else {
    wand_if = "true";
    wand.classList.add("bought");
    candy -= 60000;
    wand.removeEventListener("click", wandfunc);
    const wandeffect = () => {
      console.log(candy++);
      candyhtml.innerHTML = candy + " キャンディー";
    }
    setInterval(wandeffect, 10000);
  }
}

dcwand.addEventListener("click", dcwandfunc);
function dcwandfunc() {
  if (candy < 110000) {
    alert("キャンディが不足しています!");
  } else if (wand_if == "false") {
    alert("先にキャンディワンドを取得してください!");
  } else {
    dcwand_if = "true";
    dcwand.classList.add("bought");
    candy -= 110000;
    dcwand.removeEventListener("click", dcwandfunc);
    const dcwandeffect = () => {
      console.log(candy++);
      candyhtml.innerHTML = candy + " キャンディー";
    }
    setInterval(dcwandeffect, 5000);
  }
}

bwand.addEventListener("click", bwandfunc);
function bwandfunc() {
  if (candy < 180000) {
    alert("キャンディが不足しています!");
  } else if (dcwand_if == "false") {
    alert("先にダブルキューブ・キャンディワンドを取得してください!");
  } else {
    bwand = "true";
    bwand.classList.add("bought");
    candy -= 180000;
    bwand.removeEventListener("click", bwandfunc);
    const bwandeffect = () => {
      console.log(candy++);
      candyhtml.innerHTML = candy + " キャンディー";
    }
    setInterval(bwandeffect, 3333);
  }
}

twand.addEventListener("click", twandfunc);
function twandfunc() {
  if (candy < 260000) {
    alert("キャンディが不足しています!");
  } else if (bwand_if == "false") {
    alert("先にダブルキューブ・キャンディワンドを取得してください!");
  } else {
    twand = "true";
    twand.classList.add("bought");
    candy -= 260000;
    twand.removeEventListener("click", twandfunc);
    const twandeffect = () => {
      console.log(candy++);
      candyhtml.innerHTML = candy + " キャンディー";
    }
    setInterval(twandeffect, 2500);
  }
}

lastwand.addEventListener("click", lastwandfunc);
function lastwandfunc() {
  if (candy < 660000) {
    alert("キャンディが不足しています!");
  } else if (bwand_if == "false") {
    alert("先に超絶キャンディワンド改・ターボを取得してください!");
  } else {
    lastwand = "true";
    lastwand.classList.add("bought");
    candy -= 660000;
    lastwand.removeEventListener("click", lastwandfunc);
    const lastwandeffect = () => {
      console.log(candy++);
      candyhtml.innerHTML = candy + " キャンディー";
    }
    setInterval(lastwandeffect, 1250);
  }
}

sword.addEventListener("click", swordfunc);
function swordfunc() {
  if (candy < 60000) {
    alert("キャンディが不足しています!");
  } else if (ecube_if == "false") {
    alert("先にエナジーキューブを取得してください!");
  } else if (wand_if = "true") {
    alert("キャンディワンドとキャンディソードはどちらかしか選択できません!");
  } else {
    sword_if = "true";
    sword.classList.add("bought");
    candy -= 60000;
    sword.removeEventListener("click", swordfunc);
    const swordeffect = () => {
      console.log(candy++);
      candyhtml.innerHTML = candy + " キャンディー";
    }
    setInterval(swordeffect, 10000);
  }
}

dsword.addEventListener("click", dswordfunc);
function dswordfunc() {
  if (candy < 120000) {
    alert("キャンディが不足しています!");
  } else if (sword_if == "false") {
    alert("先にキャンディソードを取得してください!");
  } else {
    dsword_if = "true";
    dsword.classList.add("bought");
    candy -= 120000;
    dsword.removeEventListener("click", dswordfunc);
    const dswordeffect = () => {
      console.log(candy++);
      candyhtml.innerHTML = candy + " キャンディー";
    }
    setInterval(dswordeffect, 5000);
  }
}

tsword.addEventListener("click", tswordfunc);
function tswordfunc() {
  if (candy < 220000) {
    alert("キャンディが不足しています!");
  } else if (dsword_if == "false") {
    alert("先にデュアル・キャンディソードを取得してください!");
  } else {
    tsword_if = "true";
    tsword.classList.add("bought");
    candy -= 220000;
    tsword.removeEventListener("click", tswordfunc);
    const tswordeffect = () => {
      console.log(candy++);
      candyhtml.innerHTML = candy + " キャンディー";
    }
    setInterval(tswordeffect, 2500);
  }
}

lastsword.addEventListener("click", lastswordfunc);
function lastswordfunc() {
  if (candy < 860000) {
    alert("キャンディが不足しています!");
  } else if (tsword_if == "false") {
    alert("先に超絶キャンディソード改・ターボを取得してください!");
  } else {
    lastsword_if = "true";
    lastsword.classList.add("bought");
    candy -= 860000;
    lastsword.removeEventListener("click", lastswordfunc);
    const lastswordeffect = () => {
      console.log(candy++);
      candyhtml.innerHTML = candy + " キャンディー";
    }
    setInterval(lastswordeffect, 625);
  }
}