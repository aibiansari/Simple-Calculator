function calc() {
  var inpt = document.getElementById('inp');
  var temp = inpt.value;
  inpt.value = eval(temp);
}

function btn(btndata) {
  document.getElementById('inp').value += btndata;
}

function clr() {
  document.getElementById('inp').value = '0';
}

function mover(btnid) {
  if (btnid == '/') {
    document.getElementById(btnid).style.borderColor = '#ff6600';
    document.getElementById(btnid).style.color = '#e65c00';
  }
  if (btnid == '*') {
    document.getElementById(btnid).style.borderColor = '#3366ff';
    document.getElementById(btnid).style.color = '#0040ff';
  }
  if (btnid == '-') {
    document.getElementById(btnid).style.borderColor = '#ff3333';
    document.getElementById(btnid).style.color = '#ff1a1a';
  }
  if (btnid == '+') {
    document.getElementById(btnid).style.borderColor = '#009900';
    document.getElementById(btnid).style.color = '#008000';
  }
  if (btnid == 'eqbtn') {
    document.getElementById(btnid).style.borderColor = '#661aff';
    document.getElementById(btnid).style.color = '#7733ff';
  }
  document.getElementById(btnid).style.backgroundColor = '#d9d9d9';
}

function mout(btnidd) {
  document.getElementById(btnidd).style.color = '#7733ff';
  document.getElementById(btnidd).style.backgroundColor = '#f2f2f2';
  document.getElementById(btnidd).style.borderColor = '#884dff';
}
