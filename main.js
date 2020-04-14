const jeopardyQuestions = [{
    questions: 'What is HTML stands for?',
    options: ['Hyper Text Markup Language', 'Holding Text Marker Language', 'Hyperlink Text Management Language', 'Holding Text Modal Language'],
    theRightAnswer: 'Hyper Text Markup Language',
    prize: 100
},
{
    questions: 'What is the current version of HTML?',
    options: ['HTMLv5.1', 'HTML5', 'HTML2016', 'HTMLC'],
    theRightAnswer: 'HTML5',
    prize: 200
},
{
    questions: 'What seperate language has largely replaced use of <style></style> elements?',
    options: ['HTMLS Code', 'Style Sheet Language', 'CSS or Central Style Sheet', 'CSS or Cascading Style Sheets'],
    theRightAnswer: 'CSS or Cascading Style Sheets',
    prize: 300
},
{
    questions: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    options: ['Semantic Tags', 'PseudoDivs', 'DivisionIDs', 'Division Notation'],
    theRightAnswer: 'Semantic Tags',
    prize: 400
},
{
    questions: 'What is the expansion of CSS?',
    options: ['Cascading Style Sheets', 'Central Style Server', 'Control Set Styles', 'C Safe Server'],
    theRightAnswer: 'Cascading Style Sheets',
    prize: 100
},

{
    questions: 'The * selector applies to what?',
    options: ['Everything', 'Wildcard elements', 'Multiplication Functions', 'Elements with the Id of *'],
    theRightAnswer: 'Everything',
    prize: 200
},
{
    questions: 'What feature recently introduced in CSS 3 addresses issues with "floats"?',
    theRightAnswer: 'Flexbox',
    prize: 300
},
{
    questions: 'CSS is hard. What is one feature that makes it hard compared to other languages? ',
    theRightAnswer: 'No Error Output',
    prize: 400
},
// javascript
{
    questions: 'Inside which HTML element do we put the JavaScript?',
    theRightAnswer: 'script',
    prize: 100
},

{
    questions: 'How can you add a comment in a JavaScript?',
    theRightAnswer: '//This is a comment',
    prize: 200
},
{
    questions: 'JavaScript is the same as Java.',
    theRightAnswer: 'False',
    prize: 300
},
{
    questions: 'CSS is hard. What is one feature that makes it hard compared to other languages? ',
    theRightAnswer: 'No Error Output',
    prize: 400
},

];

let score = 0;

//const htmlBtnA = document.getElementById('htmlBtnA');
const queDisplay = document.querySelector('.queDisplay');
const ansDisplay = document.querySelector('.displayAnswer')
const ansBtnDisplay = document.getElementById('ansBtnDisplay')
const backDisplay = document.getElementById('backBtnDisplay')
const htmlBtnA = document.getElementById('htmlBtnA');
const htmlBtnB = document.getElementById('htmlBtnB');
const choices = document.querySelector('.multiple-choice')
const score1 = document.querySelector('span')
console.log(ansDisplay);

//*****creating the Answer button******
//function answerButton(){
let ansBtn = document.createElement('button')
ansBtn.classList = 'ansButton';
let ansNode = document.createTextNode('Answer')
ansBtn.appendChild(ansNode);
//}
//*******creating the back button*******
let backBtn = document.createElement('button');
backBtn.classList = 'backBtn';
let backNode = document.createTextNode('Back');
backBtn.appendChild(backNode);
backBtn.style.backgroundColor = 'purple'
backBtn.style.height = '35px'
backBtn.style.fontSize = '15px'
console.log(backBtn);
// The event listener for the first question
htmlBtnA.addEventListener('click', () => {
    let htmlQueA = jeopardyQuestions[0].questions
    queDisplay.textContent = htmlQueA;
    for (let i = 0; i < jeopardyQuestions[0].options.length; i++) {
        //et htmlChoicesA = jeopardyQuestions[0].options.join('<br>')
        let htmlMultChoA = document.createElement('div')
        htmlMultChoA.classList = 'optionsA'
        htmlMultChoA.innerHTML = jeopardyQuestions[0].options[i]
        choices.appendChild(htmlMultChoA);
        //ansBtnDisplay.appendChild(ansBtn);
        backDisplay.appendChild(backBtn)
        htmlBtnA.style.backgroundColor = 'lightgray'
        htmlBtnA.disabled = true
        htmlMultChoA.addEventListener('click', () => {
            if (jeopardyQuestions[0].options[i] === jeopardyQuestions[0].theRightAnswer) {
                const audio = new Audio('audio/correct-answer.mp3');
                audio.play();
                score += jeopardyQuestions[0].prize
                score1.innerHTML = score
                return score
            }
            else {
                const audio = new Audio('audio/wrong-answer.mp3');
                audio.play();
                //add wrong answer button
                score -= jeopardyQuestions[0].prize
                score1.innerHTML = score
                //return score 
            }
        })
    };

});

//Back botton functionalities
backBtn.addEventListener('click', () => {
    queDisplay.style.visibility = "hidden"
    ansDisplay.style.visibility = "hidden"
    backDisplay.style.visibility = "hidden"
    choices.style.visibility = "hidden"
});











console.log('htmlBtnB', htmlBtnB);
htmlBtnB.addEventListener('click', () => {
    console.log('htmlBtnB clicked')
    let htmlQueB = jeopardyQuestions[1].questions
    queDisplay.textContent = htmlQueB;
    for (let i = 0; i < jeopardyQuestions[1].options.length; i++) {
        //et htmlChoicesA = jeopardyQuestions[0].options.join('<br>')
        let htmlMultChoB = document.createElement('div')
        htmlMultChoB.classList = 'optionsA'
        htmlMultChoB.innerHTML = jeopardyQuestions[1].options[i]
        choices.appendChild(htmlMultChoB);
        console.log(`${jeopardyQuestions[1].options[i]}`)
        //ansBtnDisplay.appendChild(ansBtn);
        backDisplay.appendChild(backBtn)
        htmlBtnB.style.backgroundColor = 'lightgray'
        queDisplay.style.visibility = "visible"
        backDisplay.style.visibility = "visible"
        choices.style.visibility = "visible"
        htmlBtnB.disabled = true
        htmlMultChoB.addEventListener('click', () => {
            if (jeopardyQuestions[1].options[i] === jeopardyQuestions[1].theRightAnswer) {
                const audio = new Audio('audio/correct-answer.mp3');
                audio.play();
                score += jeopardyQuestions[1].prize
                score1.innerHTML = score
                return score
            }
            else {
                const audio = new Audio('audio/wrong-answer.mp3');
                audio.play();
                //add wrong answer button
                score -= jeopardyQuestions[1].prize
                score1.innerHTML = score
                //return score 
            }
        })
    };

});
queDisplay.style.visibility = "visible"
backDisplay.style.visibility = "visible"
choices.style.visibility = "visible"



















// let displaingQuestions = document.querySelector('.displing-questions')
//            //Jeopardy Questions and Answers
// const htmlQuestions = [
//     'What is HTML stands for?',
//     'What are tags?',
//     'How do you insert a comment in HTML?',
//     'How do you insert a copyright symbol on a browser page?',
//     'Name two new tags included in the HTML 5'
// ];
// const htmlAnswer = ['HyperText Markup Language', 'Content is placed in between HTML tags in order to properly format it' ]

// const cssCatagory = [];

// const jsCatagory = [];

// const comandLineCatagory = [];

// //for(i = 0; i < htmlAnswer.length; i++){
//     let answerBtn = document.createElement('button');
//     let nodeBtn = document.createTextNode('Answer')
//     answerBtn.classList = 'answerBtn'
//     answerBtn.appendChild(nodeBtn)
//     let body = document.getElementsByTagName("body")[0];
//     //body.appendChild(answerBtn);
//     //console.log(answerBtn);
// //}

//        //question button
//     let questionBtn = document.createElement('button');
//     let nodeQueBtn = document.createTextNode('Back');
//     questionBtn.classList = 'questionBtn'
//     let bodyQue = document.getElementsByTagName("body")[0];
//     questionBtn.appendChild(nodeQueBtn);
//     //bodyQue.appendChild(questionBtn)

//     //console.log(questionBtn)




// function stylingTheBody(){
//     document.body.style.backgroundColor = 'blue';
//     document.body.style.color = 'white';
//     document.body.style.fontSize = 'xx-Large';
// }

//     //  ********* Catagories*********
//     let catagory1 = document.createElement('div');
//     let html = document.createTextNode('HTML')
//     catagory1.classList = 'catagory'
//     catagory1.appendChild(html)
//     document.body.appendChild(catagory1);

//     let catagory2 = document.createElement('div');
//     let css = document.createTextNode('CSS')
//     catagory2.classList = 'catagory'
//     catagory2.appendChild(css)
//     document.body.appendChild(catagory2);

//     let catagory3 = document.createElement('div');
//     let js = document.createTextNode('JS')
//     catagory3.classList = 'catagory'
//     catagory3.appendChild(js)
//     document.body.appendChild(catagory3);

//     let catagory4 = document.createElement('div');
//     let comandLine = document.createTextNode('Comand Line')
//     catagory4.classList = 'catagory'
//     catagory4.appendChild(comandLine)
//     document.body.appendChild(catagory4);

//     console.log(catagory1);
//     console.log(catagory2);
//     console.log(catagory3);
//     console.log(catagory4);



//     // let box = document.createElement('div');
//     // let htmlPrizeA = document.createTextNode('100')
//     // box.classList = 'boxes'
//     // box.appendChild(htmlPrizeA)
//     // document.body.appendChild(box);
//     // let answerHtmlA = document.createElement('div');



//     //console.log(box);

//     // box.addEventListener('click', () => {
//     //     box.disabled = true;
//     //     document.body.textContent = htmlQuestions[0]
//     //     body.appendChild(answerBtn);
//     //     //bodyQue.appendChild(questionBtn)

//     //     stylingTheBody()
//     // })

//     answerBtn.addEventListener('click', () => {
//         document.body.textContent = htmlAnswer[0];
//         bodyQue.appendChild(questionBtn)
//     })

//     questionBtn.addEventListener('click', () => {

//     })


