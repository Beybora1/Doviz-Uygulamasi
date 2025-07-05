// Döviz Uygulaması

let key = "[your_key]";
let url = `https://v6.exchangerate-api.com/v6/${key}/latest/USD`;
let bölge1 = document.getElementById("fromCurrency");
let bölge2 = document.getElementById("toCurrency");
let amount = document.getElementById("amount");
let btn1 = document.getElementById("btn1");
let result = document.getElementById("result");

function Döviz(){

    fetch(url)
    .then(resp => resp.json())
    .then(data => {

        //console.log(data);
        let birimler = Object.keys(data.conversion_rates);

        birimler.forEach(birim => {
            //console.log(birim);
            let secenek1 = document.createElement("option");
            let secenek2 = document.createElement("option");
            secenek1.textContent = birim;
            secenek2.textContent = birim;
            bölge1.appendChild(secenek1);
            bölge2.appendChild(secenek2);
        })

        function DövizGetir(){
            let miktar = amount.value;
            let deger1 = bölge1.value;
            let deger2 = bölge2.value;
            //console.log(miktar);
            //console.log(data.conversion_rates[deger1]);
            //console.log(data.conversion_rates[deger2]);
            let sonuc = miktar * data.conversion_rates[deger2] / data.conversion_rates[deger1];
            //console.log(`${miktar} ${bölge1.value} ${sonuc} ${bölge2.value} değerinde`);
            result.textContent = `${miktar} ${bölge1.value} = ${sonuc.toFixed(2)} ${bölge2.value} değerinde.`;
        }

        btn1.addEventListener("click", () => {
            DövizGetir();
        })
    })
}


Döviz();



//let key = "e1a5b13a3d13f686b1cc9161";
//let url = `https://v6.exchangerate-api.com/v6/${key}/latest/USD`;
//let btn1 = document.getElementById("btn1");
//let result = document.getElementById("result");

//function Döviz(){

  //  fetch(url)
    //.then(resp => resp.json())
   // .then(data => {
  //      //console.log(data);
//        let degerler = Object.keys(data.conversion_rates)
   //     const fromCurrency = document.getElementById("fromCurrency");
    //    const toCurrency = document.getElementById("toCurrency");
  //      const miktar = document.getElementById("amount");
        

      //  degerler.forEach(deger => {
      //      //console.log(deger);
      //      let option1 = document.createElement("option");
      //      let option2 = document.createElement("option");
      //      option1.value = option2.value = deger;
      //      option1.textContent = option2.textContent = deger;
      //      fromCurrency.appendChild(option1);
      //      toCurrency.appendChild(option2);
      //     //console.log(miktar / deger1);
       // });

      //      let deger1 = fromCurrency.value;
      //      let deger2 = toCurrency.value;
      //      let deger3 = miktar.value;
    //     //console.log(data.conversion_rates[deger1]);
     //       //console.log(data.conversion_rates[deger2]);
     //       //console.log(deger3 * data.conversion_rates[deger2] / data.conversion_rates[deger1]);
     //       sonuc = deger3 * data.conversion_rates[deger2] / data.conversion_rates[deger1];
     //       result.textContent = sonuc.toFixed(2);
  //  })
//}

//btn1.addEventListener("click", () => {
//    Döviz();
//})

//Döviz();
