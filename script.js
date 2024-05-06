
let selectednum;
let randomnumber;
let newitem;
let resultcontainer = document.querySelector('#CompPick');
let myscore = document.getElementById('myscore');
let compscore = document.getElementById('compscore');
let uscore = 0;
let cscore = 0;
let msg = document.getElementById('msg');
let selecteditems = ['rock', 'paper', 'scissors'];
let restartbtn = document.getElementsByClassName('reset');
function restart() {
    resultcontainer.innerHTML = '';
    uscore = 0;
    cscore = 0;
    restartbtn[0].classList.add('hide');
    myscore.textContent = uscore;
    compscore.textContent = cscore;
}
function scoredecision(usernum1, compnum2) {
    if (usernum1 == compnum2) {
        console.log("Draw");
        msg.innerText = "It was a Draw";
    } else {
        restartbtn[0].classList.remove('hide');
        if (usernum1 == 0 && compnum2 == 1) {
            cscore++;
            console.log("Computer win");

            msg.innerText = `You lost,${selecteditems[1]} beats ${selecteditems[0]}`;

        }
        else if (usernum1 == 1 && compnum2 == 0) {
            uscore++;
            console.log("User win");
            msg.innerText = `You win,${selecteditems[1]} beats ${selecteditems[0]}`;
        } else if (usernum1 == 0 && compnum2 == 2) {
            uscore++;
            console.log("User win");
            msg.innerText = `You win,${selecteditems[0]} beats ${selecteditems[2]}`;
        } else if (usernum1 == 2 && compnum2 == 0) {
            cscore++;
            msg.innerText = `You lost,${selecteditems[0]} beats ${selecteditems[2]}`;
        } else if (usernum1 == 1 && compnum2 == 2) {
            cscore++;
            msg.innerText = `You lost,${selecteditems[2]} beats ${selecteditems[1]}`;
        } else if (usernum1 == 2 && compnum2 == 1) {
            uscore++;
            msg.innerText = `You win,${selecteditems[2]} beats ${selecteditems[1]}`;
        }

        myscore.textContent = uscore;
        compscore.textContent = cscore;

    }
}
function getRandom() {
    const floatRandom = Math.random()
    let max = 2;
    let min = 0;
    const difference = max - min

    // random between 0 and the difference
    const random = Math.round(difference * floatRandom)

    const randomWithinRange = random + min

    return randomWithinRange
}


let items = document.querySelectorAll(".choice");
items.forEach(item => {
    item.addEventListener('click', () => {
        randomnumber = getRandom();
        if (item.children[0].getAttribute('src') === 'assets/images/rock.png') {
            selectednum = 0;
        } else if (item.children[0].getAttribute('src') === 'assets/images/paper.png') {
            selectednum = 1;
        } else {
            selectednum = 2;
        }
        console.log(randomnumber);
        if (randomnumber == 0) {

            newitem = document.createElement('div');
            newitem.style.backgroundImage = "url('assets/images/rock.png')"; // Wrap the URL in quotes
            newitem.setAttribute('class', "result_item");
            resultcontainer.innerHTML = ''; // Clear existing content
            resultcontainer.appendChild(newitem);
        } else if (randomnumber == 1) {
            newitem = document.createElement('div');
            newitem.style.backgroundImage = "url('assets/images/paper.png')"; // Wrap the URL in quotes
            newitem.setAttribute('class', "result_item");
            resultcontainer.innerHTML = ''; // Clear existing content
            resultcontainer.appendChild(newitem);
        }
        else {
            newitem = document.createElement('div');
            newitem.style.backgroundImage = "url('assets/images/scissors.png')"; // Wrap the URL in quotes
            newitem.setAttribute('class', "result_item");
            resultcontainer.innerHTML = ''; // Clear existing content
            resultcontainer.appendChild(newitem);
        }
        scoredecision(selectednum, randomnumber);
    })
})