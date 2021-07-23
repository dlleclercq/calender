const baseURL = "https://calendarific.com/api/v2/countries/ISO&3166-2:US/holidays";
const key = "cb105ee55b5f128fe2b113d4ca0d37ae44665d81";

fetch (`${baseURL}?api_key=${key}`)
.then(response => response.json())
.then(json => calendar(json));

function calendar(holidays) {
    console.log(holidays);

    let div = document.getElementById("divPlease");
    let display = document.createElement("h1");
    let title = document.createElement("h1");
    title.innerText = "Country Randomizer"
    title.style.textAlign = "center";
    title.style.fontSize = "48px";
    title.style.position = "absolute";
    title.style.left = "37%";
    title.style.top = "35%";
    title.style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
    
    // holidays.response.countries[0].country_name
    for(let n of holidays.response.countries) {
        n = Math.floor(Math.random() * 230); // generate country
        display.innerText = country_name[n]; // assign country to html
          display.style.textAlign = "center";
          display.style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
            display.style.position = "absolute";
            display.style.left = "45%";
            display.style.top = "47%";
        }
      div.appendChild(title);
      div.appendChild(display);
}