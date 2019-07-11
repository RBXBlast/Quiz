// Quiz Assignment 

// Event Listener
document.getElementById('button').addEventListener('click', result);

// Function
function result() {

    // Answers Correct
    var total = 0;
    let basketball = document.getElementById('basketball').value.toLowerCase();
    let dingiso = document.getElementById('dingiso').checked;
    let birthday = document.getElementById('birthday').value.toLowerCase();
    let threesisfourbro = document.getElementById('threesisfourbro').value.toLowerCase();
    let july16 = document.getElementById('july16').value.toLowerCase();



    // Question 1
    if (basketball == 'basketball') {
        document.getElementById('q1').style.backgroundColor = 'rgba(152,251,152,0.5)';
        document.getElementById('correct1').style.visibility = 'visible';
        document.getElementById('correct1').innerHTML = '<em>Do not feel so proud, a trained monkey would have gotten it correct<em>';
        total = total + 1;

    } else {
        document.getElementById('q1').style.backgroundColor = 'rgba(220,20,60,0.5)';
        document.getElementById('correct1').style.visibility = 'visible';
        document.getElementById('correct1').innerHTML = '<em>You are an absolute idiot. How did you not know that this was a basketball?<em>';
    }

    //Question 2
    if (dingiso == true) {
        document.getElementById('q2').style.backgroundColor = 'rgba(152,251,152,0.5)';
        document.getElementById('correct2').style.visibility = 'visible';
        document.getElementById('correct2').innerHTML = '<em>Wow I am surprised<em>';
        total = total + 1;

    } else {
        document.getElementById('q2').style.backgroundColor = 'rgba(220,20,60,0.5)';
        document.getElementById('correct2').style.visibility = 'visible';
        document.getElementById('correct2').innerHTML = '<em>Fool. The Dingiso is very real but you however are a dingus<em>';
    }


    // Question 3
    if (birthday == 'birthday' || birthday == 'birthday song' || birthday == 'happy birthday') {
        document.getElementById('q3').style.backgroundColor = 'rgba(152,251,152,0.5)';
        document.getElementById('correct3').style.visibility = 'visible';
        document.getElementById('correct3').innerHTML = '<em>It seems you have good ears<em>';
        total = total + 1;

    } else {
        document.getElementById('q3').style.backgroundColor = 'rgba(220,20,60,0.5)';
        document.getElementById('correct3').style.visibility = 'visible';
        document.getElementById('correct3').innerHTML = '<em>Have you never had a celebration of age? it\'s the birthday song<em>';
    }

    // Question 4
    if (threesisfourbro == '4 brothers and 3 sisters' || threesisfourbro == 'four brothers and three sisters' || threesisfourbro == '3 sisters and 4 brothers' || threesisfourbro == 'three sisters and four brothers'||threesisfourbro == '3 sisters 4 brothers' || threesisfourbro == '4 brothers 3 sisters' ) {
        document.getElementById('q4').style.backgroundColor = 'rgba(152,251,152,0.5)';
        document.getElementById('correct4').style.visibility = 'visible';
        document.getElementById('correct4').innerHTML = '<em>Good, maybe you are not so dumb<em>';
        total = total + 1;

    } else {
        document.getElementById('q4').style.backgroundColor = 'rgba(220,20,60,0.5)';
        document.getElementById('correct4').style.visibility = 'visible';
        document.getElementById('correct4').innerHTML = '<em>It was a kinda hard question, but you still dissapoint me. The answer was 3 brothers and 4 sisters<em>';
    }

    // Question 5
    if (july16 == 'july 16') {
        document.getElementById('q5').style.backgroundColor = 'rgba(152,251,152,0.5)';
        document.getElementById('correct5').style.visibility = 'visible';
        document.getElementById('correct5').innerHTML = '<em>Holy shit that is actually very impressive! Nice job!<em>';
        total = total + 1;

    } else {
        document.getElementById('q5').style.backgroundColor = 'rgba(220,20,60,0.5)';
        document.getElementById('correct5').style.visibility = 'visible';
        document.getElementById('correct5').innerHTML = '<em>This was very hard, I am not mad at you. The answer was July 16<em>';
    }

    // Display Total 
    // No Correct
    if (total == 0) {
        document.getElementById('score').innerHTML = '0';
        document.getElementById('percent').innerHTML = '(0%)';
        document.getElementById('msg').innerHTML = 'A bag of bricks is smarter than you';
        document.getElementById('msg').style.visibility = 'visible';
        document.getElementById('msg').style.color = 'Yellow';
        document.getElementById('msg').style.fontFamily = 'Cagliostro', sans - serif;

    }
    // 1 Correct
    else if (total == 1) {
        document.getElementById('score').innerHTML = '1';
        document.getElementById('percent').innerHTML = '(20%)';
        document.getElementById('msg').innerHTML = 'That is just pathetic';
        document.getElementById('msg').style.visibility = 'visible';
        document.getElementById('msg').style.color = 'Yellow';
        document.getElementById('msg').style.fontFamily = 'Cagliostro', sans - serif;
    }
    // 2 Correct
    else if (total == 2) {
        document.getElementById('score').innerHTML = '2';
        document.getElementById('percent').innerHTML = '(40%)';
        document.getElementById('msg').innerHTML = 'Wow you almost passed. But you didn\'t';
        document.getElementById('msg').style.visibility = 'visible';
        document.getElementById('msg').style.color = 'Yellow';
        document.getElementById('msg').style.fontFamily = 'Cagliostro', sans - serif;
    }
    // 3 Correct
    else if (total == 3) {
        document.getElementById('score').innerHTML = '3';
        document.getElementById('percent').innerHTML = '(60%)';
        document.getElementById('msg').innerHTML = 'At least you passed. So good job I guess';
        document.getElementById('msg').style.visibility = 'visible';
        document.getElementById('msg').style.color = 'Yellow';
        document.getElementById('msg').style.fontFamily = 'Cagliostro', sans - serif;
    }
    // 4 Correct
    else if (total == 4) {
        document.getElementById('score').innerHTML = '4';
        document.getElementById('percent').innerHTML = '(80%)';
        document.getElementById('msg').innerHTML = 'Not bad! You got an A';
        document.getElementById('msg').style.visibility = 'visible';
        document.getElementById('msg').style.color = 'Yellow';
        document.getElementById('msg').style.fontFamily = 'Cagliostro', sans - serif;
    }
    // 5 Correct
    else if (total == 5) {
        document.getElementById('score').innerHTML = '5';
        document.getElementById('percent').innerHTML = '(100%)';
        document.getElementById('msg').innerHTML = 'Be proud of this. You did astounding! :)';
        document.getElementById('msg').style.visibility = 'visible';
        document.getElementById('msg').style.color = 'Yellow';
        document.getElementById('msg').style.fontFamily = 'Cagliostro', sans - serif;
    }

}