var candyhtml = document.getElementById("candy");

const autosave = () => {
    localStorage.setItem("candyvalue", candy);
    localStorage.setItem("elapsedtime", count);
    localStorage.setItem("elapsedsec", countsec);
    localStorage.setItem("elapsedmin", countmin);
    localStorage.setItem("elapsedhour", counthour);
    localStorage.setItem("storagevalue", invalue);
    localStorage.setItem("stick_if", stick_if);
    localStorage.setItem("ecube_if", ecube_if);
    localStorage.setItem("wand_if", wand_if);
    localStorage.setItem("dcwand_if", dcwand_if);
    localStorage.setItem("bwand_if", bwand_if);
    localStorage.setItem("twand_if", twand_if);
    localStorage.setItem("lastwand_if", lastwand_if);
    localStorage.setItem("sword_if", sword_if);
    localStorage.setItem("dsword_if", dsword_if);
    localStorage.setItem("tsword_if", tsword_if);
    localStorage.setItem("lastsword_if", lastsword_if);
  }
  setInterval(autosave, 30000);

  function save() {
    localStorage.setItem("candyvalue", candy);
    localStorage.setItem("elapsedtime", count);
    localStorage.setItem("elapsedsec", countsec);
    localStorage.setItem("elapsedmin", countmin);
    localStorage.setItem("elapsedhour", counthour);
    localStorage.setItem("storagevalue", invalue);
    localStorage.setItem("stick_if", stick_if);
    localStorage.setItem("ecube_if", ecube_if);
    localStorage.setItem("wand_if", wand_if);
    localStorage.setItem("dcwand_if", dcwand_if);
    localStorage.setItem("bwand_if", bwand_if);
    localStorage.setItem("twand_if", twand_if);
    localStorage.setItem("sword_if", sword_if);
    localStorage.setItem("lastwand_if", lastwand_if);
    localStorage.setItem("sword_if", sword_if);
    localStorage.setItem("dsword_if", dsword_if);
    localStorage.setItem("tsword_if", tsword_if);
    localStorage.setItem("lastsword_if", lastsword_if);
  }

  window.onload = function(){
    var input1 = localStorage.getItem("candyvalue");
    var input0 = localStorage.getItem("elapsedtime");
    var input2 = localStorage.getItem("elapsedsec");
    var espmin = localStorage.getItem("elapsedmin");
    var esphour = localStorage.getItem("elapsedhour");
    var input3 = localStorage.getItem("storagevalue");
    var input4 = localStorage.getItem("stick_if");
    var input5 = localStorage.getItem("ecube_if");
    var input6 = localStorage.getItem("wand_if");
    var input7 = localStorage.getItem("dcwand_if");
    var input8 = localStorage.getItem("bwand_if");
    var input9 = localStorage.getItem("twand_if");
    var input10 = localStorage.getItem("lastwand_if");
    var input11 = localStorage.getItem("sword_if");
    var input12 = localStorage.getItem("dsword_if");
    var input13 = localStorage.getItem("tsword_if");
    var input14 = localStorage.getItem("lastsword_if");
    candyhtml.innerHTML = input1;
    elapsedsec.innerHTML = input2;
    elapsedmin.innerHTML = espmin;
    elapsedhour.innerHTML = esphour;
    candy_storage.innerHTML = input3;
    invalue = input3;
    count = input0;
    countsec = input2;
    countmin = espmin;
    counthour = esphour;
    candy = input1;
    if (input4 == "true") {
      stick_if = "true";
      stick.classList.add("bought");
      stick.removeEventListener("click", stickfunc);
    } else {

    }

    if (input5 == "true") {
      ecube_if = "true";
      ecube.classList.add("bought");
      ecube.removeEventListener("click", ecubefunc);
      const ecubeeffect = () => {
        console.log(candy++);
        candyhtml.innerHTML = candy + " キャンディー";
      }
      setInterval(ecubeeffect, 10000);
    } else {
      
    }

    if (input6 == "true") {
      wand_if = "true";
      wand.classList.add("bought");
      wand.removeEventListener("click", wandfunc);
      const wandeffect = () => {
        console.log(candy++);
        candyhtml.innerHTML = candy + " キャンディー";
      }
      setInterval(wandeffect, 10000);
    } else {
      
    }

    if (input7 == "true") {
      dcwand_if = "true";
      dcwand.classList.add("bought");
      dcwand.removeEventListener("click", dcwandfunc);
      const dcwandeffect = () => {
        console.log(candy++);
        candyhtml.innerHTML = candy + " キャンディー";
      }
      setInterval(dcwandeffect, 5000);
    } else {
      
    }

    if (input8 == "true") {
      bwand_if = "true";
      bwand.classList.add("bought");
      bwand.removeEventListener("click", bwandfunc);
      const bwandeffect = () => {
        console.log(candy++);
        candyhtml.innerHTML = candy + " キャンディー";
      }
      setInterval(bwandeffect, 3333);
    } else {
      
    }

    if (input9 == "true") {
      twand_if = "true";
      twand.classList.add("bought");
      twand.removeEventListener("click", twandfunc);
      const twandeffect = () => {
        console.log(candy++);
        candyhtml.innerHTML = candy + " キャンディー";
      }
      setInterval(twandeffect, 2500);
    } else {
      
    }
    
    if (input10 == "true") {
        lastwand_if = "true";
        lastwand.classList.add("bought");
        lastwand.removeEventListener("click", lastwandfunc);
        const lastwandeffect = () => {
          console.log(candy++);
          candyhtml.innerHTML = candy + " キャンディー";
        }
        setInterval(lastwandeffect, 1250);
      } else {
        
      }

    if (input11 == "true") {
      sword_if = "true";
      sword.classList.add("bought");
      sword.removeEventListener("click", swordfunc);
      const swordeffect = () => {
        console.log(candy++);
        candyhtml.innerHTML = candy + " キャンディー";
      }
      setInterval(swordeffect, 10000);
    } else {
      
    }

    if (input12 == "true") {
        dsword_if = "true";
        dsword.classList.add("bought");
        dsword.removeEventListener("click", dswordfunc);
        const dswordeffect = () => {
          console.log(candy++);
          candyhtml.innerHTML = candy + " キャンディー";
        }
        setInterval(dswordeffect, 5000);
      } else {
        
      }

      if (input13 == "true") {
        tsword_if = "true";
        tsword.classList.add("bought");
        tsword.removeEventListener("click", tswordfunc);
        const tswordeffect = () => {
          console.log(candy++);
          candyhtml.innerHTML = candy + " キャンディー";
        }
        setInterval(tswordeffect, 2500);
      } else {
        
      }

      if (input14 == "true") {
        lastsword_if = "true";
        lastsword.classList.add("bought");
        lastsword.removeEventListener("click", lastswordfunc);
        const lastswordeffect = () => {
          console.log(candy++);
          candyhtml.innerHTML = candy + " キャンディー";
        }
        setInterval(lastswordeffect, 625);
      } else {
        
      }
  }

  function download() {
  var blob = new Blob(
    [text],
    { "type": "text/plain" })
  var url = window.URL.createObjectURL(blob)
  document.getElementById('link1').href = url
  }

  function reset() {
    localStorage.removeItem("candyvalue");
    localStorage.removeItem("elapsedtime");
    localStorage.removeItem("elapsedsec");
    localStorage.removeItem("elapsedmin");
    localStorage.removeItem("elapsedhour");
    localStorage.removeItem("storagevalue");
    localStorage.removeItem("stick_if");
    localStorage.removeItem("ecube_if");
    localStorage.removeItem("wand_if");
    localStorage.removeItem("dcwand_if");
    localStorage.removeItem("bwand_if");
    localStorage.removeItem("twand_if");
    localStorage.removeItem("lastwand_if");
    localStorage.removeItem("sword_if");
    localStorage.removeItem("dsword_if");
    localStorage.removeItem("tsword_if");
    localStorage.removeItem("lastsword_if");
  }


  document.addEventListener("DOMContentLoaded", function() {
    var obj = document.getElementById("selfile");
    obj.addEventListener("change", function(evt) {
        var file = evt.target.files;
        var reader = new FileReader();

        // dataURL形式でファイルを読み込む
        reader.readAsDataURL(file[0]);

        // ファイルの読込が終了した時の処理
        reader.onload = function() {
          var base64Data = reader.result.split(';base64,')[1];
          var decodedData = atob(base64Data);
          data = atob(decodedData);
          // 2行目を取得する
          candy = data.split(/\r\n|\r|\n/)[0]
          count = data.split(/\r\n|\r|\n/)[1]
          countsec = data.split(/\r\n|\r|\n/)[2]
          countmin = data.split(/\r\n|\r|\n/)[3]
          counthour = data.split(/\r\n|\r|\n/)[4]
          invalue = data.split(/\r\n|\r|\n/)[5]
          stick_if = data.split(/\r\n|\r|\n/)[6]
          ecube_if = data.split(/\r\n|\r|\n/)[7]
          wand_if = data.split(/\r\n|\r|\n/)[8]
          dcwand_if = data.split(/\r\n|\r|\n/)[9]
          bwand_if = data.split(/\r\n|\r|\n/)[10]
          twand_if = data.split(/\r\n|\r|\n/)[11]
          lastwand_if = data.split(/\r\n|\r|\n/)[12]
          sword_if = data.split(/\r\n|\r|\n/)[13]
          dsword_if = data.split(/\r\n|\r|\n/)[14]
          tsword_if = data.split(/\r\n|\r|\n/)[15]
          lastsword_if = data.split(/\r\n|\r|\n/)[16]
        }
    }, false);
});