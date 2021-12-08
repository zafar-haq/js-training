var enterOnce = false;
var enterOnce2 = false;
var enterOnce3 = false;
const input1 = document.querySelector('.input-1');
var operaterInput = null;
var input2 = null;

input1.addEventListener('keydown', checkEnter1);


function checkEnter1(e){
    if(e.keyCode == 13 && enterOnce == false){
        enterOnce = true;
        lineBreak = document.createElement('br');
        document.body.append(lineBreak);

        operaterlabel = document.createElement('label');
        operaterlabel.textContent = 'Enter your operater: (press enter to continue)';
        operaterlabel.className = 'operaterlabel';
        document.body.append(operaterlabel);

        operaterInput = document.createElement('input');
        operaterInput.className = 'operater';
        document.body.append(operaterInput);

        operaterInput.addEventListener('keydown', checkEnter2);

    }

    function checkEnter2(e){
        let allowedOperaters = ['*', '+', '-', '/'];
        if(e.keyCode == 13 && enterOnce2 == false){

            if(allowedOperaters.includes(operaterInput.value)){
                enterOnce2 = true;
                lineBreak = document.createElement('br');
                document.body.append(lineBreak);

                operaterlabel = document.createElement('label');
                operaterlabel.textContent = 'Enter your second input: (press enter to calculate)';
                operaterlabel.className = 'label-2';
                document.body.append(operaterlabel);

                input2 = document.createElement('input');
                input2.className = 'input-2';
                input2.setAttribute('type', 'number');
                document.body.append(input2);
                input2.addEventListener('keydown', checkEnter3);

            }else{
                alert("invalid operater, you can use only from the following (*, +, -, /)");
            }
        }
    }

    function checkEnter3(e){
        if(e.keyCode == 13 && enterOnce3 == false){
            enterOnce2 = true;
            lineBreak = document.createElement('br');
            document.body.append(lineBreak);

            let answer = eval(input1.value + operaterInput.value + input2.value);
            displayAnswer = document.createElement('p');
            displayAnswer.textContent = 'The Answer is: ' + answer;
            document.body.append(displayAnswer);

            resetButton = document.createElement('button');
            resetButton.textContent = 'Refresh';
            document.body.append(resetButton);
            resetButton.addEventListener('click', refresh);

        }
    }

    function refresh(){
        location.reload();
    }

}