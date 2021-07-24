const baseURL = "https://calendarific.com/api/v2/countries/ISO&3166-2:US/holidays";
const key = "66fe0e2ac9dcc450ac217d3ff238c82c20d70d91";

fetch (`${baseURL}?api_key=${key}`)
.then(response => response.json())
.then(json => calendar(json));

let div = document.getElementById("divPlease");
let title = document.createElement("h1");
title.innerText = "Country Randomizer"
title.style.textAlign = "center";
title.style.fontSize = "48px";
title.style.position = "absolute";
title.style.left = "37%";
title.style.top = "35%";
title.style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"

function calendar(holidays) {
    let display = document.createElement("h1");

    for(let i = 0; i < 1; i++) {
      let n = Math.floor(Math.random() * 230); // generate country
      display.innerText = holidays.response.countries[n].country_name;

      display.style.textAlign = "center";
      display.style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
      display.style.position = "absolute";
      display.style.left = "45%";
      display.style.top = "47%";
    }
      div.appendChild(display);
}
div.appendChild(title);