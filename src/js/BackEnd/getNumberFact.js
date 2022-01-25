

async function getNumberFact(type, min , max){
  var data = null;

  const response = await fetch(`https://numbersapi.p.rapidapi.com/random/${type}/?min=${min}&max=${max}&fragment=true&json=true`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "numbersapi.p.rapidapi.com",
      "x-rapidapi-key": 
    }
    }).catch(err => {
      data = "Sorry unable to fetch data";
    });
  if (data === null){
    var data = await response.json();
    // capitalize the first letter of the fact
    data.text = data.text.charAt(0).toUpperCase() + data.text.slice(1);
    var result = data.number + ": " + data.text +".";
    return result
  }

  return data;
   
}

export default getNumberFact;