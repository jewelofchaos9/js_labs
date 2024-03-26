function addToCalcExpression(n) {
  let expr = localStorage.getItem("calcExpression")
  if (expr == null) {
    localStorage.setItem("calcExpression", n)
  } else {
    localStorage.setItem("calcExpression", expr + n)
  }

  updateCalcExpression()
}

function updateCalcExpression() {
  prevPar = document.getElementById("calcExpression")
  if (prevPar != null) {
    prevPar.remove()
  }

  const par = document.createElement("p")
  par.id = "calcExpression"
  let expr = localStorage.getItem("calcExpression")
  if (expr == null) {
    expr = ""
  }

  const node = document.createTextNode(expr)

  par.appendChild(node)
  var elem = document.getElementById("calc_expression")
  elem.appendChild(par)
}

function popFromCalcExpression() {
  let expr = localStorage.getItem("calcExpression")
  if (expr == null) {
    return
  }

  expr = expr.substring(0, expr.length - 1)
  localStorage.setItem("calcExpression", expr)
  updateCalcExpression()
}

function clearCalcExpression() {
  localStorage.setItem("calcExpression", "")
  updateCalcExpression()
}

function computeCalcExpression() {
  let expr = localStorage.getItem("calcExpression")
  if (expr == null || expr == "") {
    expr = "0"
  }
  let regexp = "[0-9\+\-\=\*\(\)\%]+"
  if (expr.match(regexp) == null) {
    return updateCalcResult("Strange expression")
  }

  try {
    updateCalcResult(String(eval(expr)))
  } catch (err) {
    updateCalcResult("Wrong expression")
  }

}

function updateCalcResult(res) {
  prevPar = document.getElementById("calcResult")
  if (prevPar != null) {
    prevPar.remove()
  }

  const par = document.createElement("p")
  par.id = "calcResult"
  const node = document.createTextNode(res)

  par.appendChild(node)
  var elem = document.getElementById("calc_res")
  elem.appendChild(par)
}
