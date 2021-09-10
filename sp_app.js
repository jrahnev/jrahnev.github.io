document.addEventListener("DOMContentLoaded", function(){

  fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`)
    .then(response => response.json())
    .then(data => {
    console.log(data)

    let rate = "usd"

    document.querySelector("h1").innerHTML = `${rate.toUpperCase()}`;

    let group_1 = [];
    let group_2 = [];
    let group_3 = [];

    const currencies = ["usd", "eur", "aud","cad","chf", "nzd", "bgn"]

    let pair = {};

    let num;

    for (currency of currencies) {
    	num = data[rate][currency]
    	def_group(rate, num);
    }

	  sort_and_create(group_1,"group_1");
    sort_and_create(group_2,"group_2");
    sort_and_create(group_3,"group_3");

    displ_group(group_1,"group_1");
    displ_group(group_2,"group_2");
    displ_group(group_3,"group_3");

  	document.querySelector("select").onchange = function () {

    document.querySelectorAll('li').forEach((elem) => elem.remove());

    rate = this.value;

    document.querySelector("h1").innerHTML = `${rate.toUpperCase()}`

    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${rate}.json`)
      .then(response => response.json())
      .then(data => {
      console.log(data)

      group_1 = [];
      group_2 = [];
      group_3 = [];

    for (currency of currencies) {
    	num = data[rate][currency]
    	def_group(rate, num);
    	}

    sort_and_create(group_1,"group_1");
    sort_and_create(group_2,"group_2");
    sort_and_create(group_3,"group_3");

    displ_group(group_1,"group_1");
    displ_group(group_2,"group_2");
    displ_group(group_3,"group_3");

  })
}

	function sort_and_create(group,idName) {

		  group.sort((a, b) => (a.rate) - (b.rate));

		  for (i of group){
		    let new_elem = document.createElement("li")
		    new_elem.innerHTML = `${i.pair}:${i.rate}`
		    document.querySelector(`#${idName}`).appendChild(new_elem);
		  }
  }

	function displ_group(group,str){
        for (i of group){
		        document.querySelector(`#header_${str}`).innerHTML = `${i.group}`;
        }
		    document.querySelector(`#count_${str}`).innerHTML = `Count: ${group.length}`;
  }

	function def_group(rate, num){

		if (rate != currency) {

		    if (num < 1) {
		      pair = {"group":"Group 1","pair":`${rate.toUpperCase()}-${currency.toUpperCase()}`, "rate":num.toFixed(3)}
		      group_1.push(pair)
		    }
		    else if (num >= 1 && num <= 1.5){
		      pair = {"group":"Group 2","pair":`${rate.toUpperCase()}-${currency.toUpperCase()}`, "rate":num.toFixed(3)}
		      group_2.push(pair)
		    }
		    else {
		      pair = {"group":"Group 3","pair":`${rate.toUpperCase()}-${currency.toUpperCase()}`, "rate":num.toFixed(3)}
		      group_3.push(pair)
		    }
    }
   }
  })
});
