var age = +prompt("Yoshingizni kiriting?")
if (age <= 18){
    alert("Yoshsiz.O'qishingiz kerak")
}
else if (age <= 50) {
    alert(`Ishlashingiz kerak`)
}
else if (age <= 59){
    alert(`Yaqinda pensiyaga chiqasiz`)
}
else if (age <= 150){
    alert(`Siz pensionersiz`)
}
else ( `Nimadir xato ketdi:`)

var son1 = +prompt(`1-Sonni kiriting?`)
var son2 = +prompt(`2-Sonni kiriting?`)
var son3 = +prompt(`3-Sonni kiriting?`)
if(son1 < son2 && son2 < son3 || son1 > son2 && son2 > son3){
    alert("O'rtacha son"+ son2)
}
else if (son2 < son1 && son1 < son3 || son3 < son1 && son1 < son2){
    alert(`O'rtacha son ${son1}`)
}
else if ( son1 < son3 && son3 < son2 || son2 < son3 && son3 < son1 ){
    alert(`O'rtacha son ${son3}`)
}

var name = prompt(`ismingizni kiriting`);
var bossname = "Mirjalol";
if ( name ===  bossname){
    alert(`Hello Boss`);
}
else {
  alert ( `Hello guest`); 
}

var vaqt = +prompt(`Vaqt kiriting?`)
if ( vaqt <= 12){
    alert(`Soat ertalabki ${vaqt}`)
}
else if ( vaqt <= 18){
    alert(`Soat Abedgi ${vaqt % 12}`)
}
else if ( vaqt <= 24){
    alert(`Soat kechki ${vaqt % 12}`)
}



