const container = document.querySelector('#game');
const start = document.createElement('button');
const header = document.createElement('h3');
header.textContent="WhoIsWiz";
header.setAttribute('id','header');
start.setAttribute('id','start');
container.prepend(header);
const instr = document.createElement('p');
instr.setAttribute('id','instr');
instr.textContent = "Test your math smarts!";
start.textContent="Begin";
container.appendChild(instr);
container.appendChild(start);
const oper = ['+','-','*','/'];
const gameObj={maxVal:10, questions:100,thisQ:0};
gameObj.thisQ =0;

start.addEventListener('click', begin)

function begin() {
    
    // start.style.display="none";
    qMaker(); 
    gameObj.thisQ++;
}

function qMaker() {
    if (gameObj.thisQ < gameObj.questions) {
        gameObj.thisQ++;
        let expression = [];
        let min = 1, max =10

        expression[0]= Math.floor(Math.random() * (max - min + 1) + min);
        let randOper = Math.floor(Math.random()*4);
        expression[1]= Math.floor(Math.random() * (max - min + 1) + min);

        //protect against decimal results
        while (!Number.isInteger(expression [0]/expression[1])) {
            expression[0]= Math.floor(Math.random() * (max - min + 1) + min);
            expression[1]= Math.floor(Math.random() * (max - min + 1) + min);
        }

        expression[3]= oper[randOper]; //value
        let missing = Math.floor(Math.random()*3);
        expression[2] = eval(expression[0] + expression[3]+expression[1]);
        expression[missing] = '__';
        instr.innerHTML = `${expression[0]} ${expression[3]} ${expression[1]} = ${expression[2]}`;
        gameObj.questions++;
    }
}