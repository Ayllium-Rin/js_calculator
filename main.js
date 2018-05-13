//DOM Interface Section:
document.getElementById('no1').addEventListener('click', ()=> {input("1");});
document.getElementById('no2').addEventListener('click', ()=> {input("2");});
document.getElementById('no3').addEventListener('click', ()=> {input("3");});
document.getElementById('no4').addEventListener('click', ()=> {input("4");});
document.getElementById('no5').addEventListener('click', ()=> {input("5");});
document.getElementById('no6').addEventListener('click', ()=> {input("6");});
document.getElementById('no7').addEventListener('click', ()=> {input("7");});
document.getElementById('no8').addEventListener('click', ()=> {input("8");});
document.getElementById('no9').addEventListener('click', ()=> {input("9");});
document.getElementById('no0').addEventListener('click', ()=> {input("0");});
document.getElementById('decimal').addEventListener('click', ()=> {input(".");});

document.getElementById('x').addEventListener('click', ()=> {operator(1);});
document.getElementById('add').addEventListener('click', ()=> {operator(2);});
document.getElementById('subtract').addEventListener('click', ()=> {operator(3);});
document.getElementById('divide').addEventListener('click', ()=> {operator(4);});
document.getElementById('equal').addEventListener('click',()=> {operator(5);});

document.getElementById('clear').addEventListener('click', clickClear);
document.getElementById('store').addEventListener('click', clickStore);
document.getElementById('recall').addEventListener('click', clickRecall);
document.getElementById('memClear').addEventListener('click', clickMemClear);
//Variables:
const output = document.getElementById('output');

let valueX = [],
    valueY = [],
    arith = 0,
    display = "",
    mem = 0;
//Function to display and assign inputs from UI:
function input(val){
  if(arith > 0 && arith < 5){valueY.push(val);}
  else if(arith === 5){
    valueX=[];
    valueX.push(val);
    arith = 0;
    }
  else{valueX.push(val);}
  display += val;
  output.innerHTML = display;
}//Function to assign mathmatical operator:
function operator(val){
  display="";
  if(valueY.length!==0){selector();}
  arith=0;
  arith=val;
}//Function to carry out mathmatical operation and return result:
function selector(){
  let x = Number(valueX.join("")*1000000),
      y = Number(valueY.join("")*1000000),
      z = 0,
      sigFig = 1;

  valueX=[];
  valueY=[];

  if(arith===1){
      z = x * y;
      z = z / 1000000 / 1000000;
      valueX.push(z);
  }else if(arith===2){
    z = x + y;
    z = z / 1000000;
    valueX.push(z);
  }else if(arith===3){
    z = x - y;
    z = z / 1000000;
    valueX.push(z);
  }else if(arith===4){
    z = x / y;
    valueX.push(z);
  }else{valueX.push(x);}

  display = valueX;
  output.innerHTML = display;
  display="";
  arith = 5;
}//Function to clear fields:
function clickClear(){
  arith = 0;
  valueX=[];
  valueY=[];
  display = "";
  output.innerHTML = display;
}//Function to store input/result (Bonus):
function clickStore(){
  mem=0;
  if(valueX.length === 0){mem = 0; }
  else if(valueY.length===0){mem=valueX;}
  else{mem=valueY;}
  store.style.background='#7777ff';
}//Function to recall stored value:
function clickRecall(){
  if(valueX>0 || valueX.length>0){valueY = mem;}
  else{valueX = mem;}
  if(typeof mem === "object"){display = mem.join("");}
  else{display = mem;}
  output.innerHTML = display;
}//Function to clear stored value:
function clickMemClear(){
  mem=0;
  store.style.background='#ededcc';
}
