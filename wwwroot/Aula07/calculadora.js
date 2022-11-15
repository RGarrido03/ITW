var start = true;
var controlo = 1;
var op1 = "";
var op2 = "";
var operacao = "";
var res = document.getElementById("res")

function addNumber() {
  var x = event.target.value;

  if (controlo == 1) {
    op1 += x;
  }
  else {
    op2 += x;
  }

  if (start == true) {
    res.innerText = "";
    start = false;
  }
  res.innerText += x;
}

function addOperation() {
  var x = event.target.value;
  if (operacao == "" && op1 != "") {
    operacao = x;
    res.innerText += x;
  }
  else {
    res.innerText = "ERRO AAAAAAA 🚨️";
  }
  controlo = 2;
}

function clearResult() {
  start = true;
  res.innerText = "0";
  op1 = "";
  operacao = "";
  op2 = "";
}

function calculate() {
  console.log(`operacao:${operacao}; type:${typeof(operacao)}`)
  switch (operacao) {
    case "+":
      res.innerText = parseFloat(op1) + parseFloat(op2);
      break;
    case "-":
      res.innerText = parseFloat(op1) - parseFloat(op2);
      break;
    case "*":
      res.innerText = parseFloat(op1) * parseFloat(op2);
      break;
    case "/":
      if (op2 == "0") {
        res.innerText = "Impossível dividir por zero";
      }
      else {
        res.innerText = parseFloat(op1) / parseFloat(op2);
      }
      break;
    default:
      res.innerText = "Não implementado";
      break;
  }

  controlo = 1;
  op1 = res.innerText;
  op2 = "";
  operacao = "";
}