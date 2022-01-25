import getNumberFact from "../BackEnd/getNumberFact.js";
async function CalculatorTab(){
    var responseJson = await getNumberFact("math", 1, 100);
    console.log(responseJson);

}

export default CalculatorTab;