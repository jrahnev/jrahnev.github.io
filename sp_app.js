document.addEventListener("DOMContentLoaded", function(){

  fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`)
    .then(response => response.json())
    .then(data => {
    console.log(data)

    let rate = "usd"

    let group_1 = [];
    let group_2 = [];
    let group_3 = [];

    const currencies = ["usd", "eur", "aud","cad","chf", "nzd", "bgn"]

    let pair;

    for (currency of currencies) {

    if (rate != currency) {

    {

      let num = data[rate][currency]

        if (num < 1) {
          pair = {"pair":`${rate.toUpperCase()}-${currency.toUpperCase()}`, "rate":num.toFixed(3)}
          group_1.push(pair)
        }
        else if (num >= 1 && num <= 1.5){
          pair = {"pair":`${rate.toUpperCase()}-${currency.toUpperCase()}`, "rate":num.toFixed(3)}
          group_2.push(pair)
        }
        else {
          pair = {"pair":`${rate.toUpperCase()}-${currency.toUpperCase()}`, "rate":num.toFixed(3)}
          group_3.push(pair)
        }
      }

    }

   }

      group_1.sort((a, b) => (a.rate) - (b.rate));
      group_2.sort((a, b) => (a.rate) - (b.rate));
      group_3.sort((a, b) => (a.rate) - (b.rate));

      for (i of group_1){
        let new_elem = document.createElement("li")
        new_elem.innerHTML = `${i.pair}:${i.rate}`
        document.querySelector("#gr1").appendChild(new_elem);
      }

      for (i of group_2){
        let new_elem = document.createElement("li")
        new_elem.innerHTML = `${i.pair}:${i.rate}`
        document.querySelector("#gr2").appendChild(new_elem);
      }

      for (i of group_3){
        let new_elem = document.createElement("li")
        new_elem.innerHTML = `${i.pair}:${i.rate}`
        document.querySelector("#gr3").appendChild(new_elem);
      }

      document.querySelector('#header_one').innerHTML = 'Group 1';
      document.querySelector('#count_1').innerHTML = `Count: ${group_1.length}`;

      document.querySelector('#header_two').innerHTML = 'Group 2';
      document.querySelector('#count_2').innerHTML = `Count: ${group_2.length}`;

      document.querySelector('#header_three').innerHTML = 'Group 3';
      document.querySelector('#count_3').innerHTML = `Count: ${group_3.length}`;

  document.querySelector("select").onchange = function () {

    document.querySelectorAll('li').forEach((elem) => elem.remove());

    rate = this.value;

    document.querySelector("h1").innerHTML = `${rate.toUpperCase()}`

    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${rate}.json`)
      .then(response => response.json())
      .then(data => {
      console.log(data)

      const currencies = ["usd", "eur", "aud","cad","chf", "nzd", "bgn"]

      let group_1 = [];
      let group_2 = [];
      let group_3 = [];

      let pair;

      for (currency of currencies) {

      if (rate != currency) {

      {

        let num = data[rate][currency]

          if (num < 1) {
            pair = {"pair":`${rate.toUpperCase()}-${currency.toUpperCase()}`, "rate":num.toFixed(3)}
            group_1.push(pair)
          }
          else if (num >= 1 && num <= 1.5){
            pair = {"pair":`${rate.toUpperCase()}-${currency.toUpperCase()}`, "rate":num.toFixed(3)}
            group_2.push(pair)
          }
          else {
            pair = {"pair":`${rate.toUpperCase()}-${currency.toUpperCase()}`, "rate":num.toFixed(3)}
            group_3.push(pair)
          }
        }

      }

     }

        group_1.sort((a, b) => (a.rate) - (b.rate));
        group_2.sort((a, b) => (a.rate) - (b.rate));
        group_3.sort((a, b) => (a.rate) - (b.rate));

        for (i of group_1){
          let new_elem = document.createElement("li")
          new_elem.innerHTML = `${i.pair}:${i.rate}`
          document.querySelector("#gr1").appendChild(new_elem);
        }

        for (i of group_2){
          let new_elem = document.createElement("li")
          new_elem.innerHTML = `${i.pair}:${i.rate}`
          document.querySelector("#gr2").appendChild(new_elem);
        }

        for (i of group_3){
          let new_elem = document.createElement("li")
          new_elem.innerHTML = `${i.pair}:${i.rate}`
          document.querySelector("#gr3").appendChild(new_elem);
        }

        document.querySelector('#header_one').innerHTML = 'Group 1';
        document.querySelector('#count_1').innerHTML = `Count: ${group_1.length}`;

        document.querySelector('#header_two').innerHTML = 'Group 2';
        document.querySelector('#count_2').innerHTML = `Count: ${group_2.length}`;

        document.querySelector('#header_three').innerHTML = 'Group 3';
        document.querySelector('#count_3').innerHTML = `Count: ${group_3.length}`;

      })
    }
});
})

