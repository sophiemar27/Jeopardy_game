const jeopardyQuestions = [{
    questions: 'What is HTML stands for?',
    //mulchoice: ['HyperText Markup Language',],
    rightAnswer: 'HyperText Markup Language',
    prize: 100
},
{
    questions: 'What are tags?',
    miulChoice: ['HyperText Markup Language',],
    rightAnswer: "Content is placed in between HTML tags in order to properly format it'",
    prize: 200
},
{
    questions: 'How do you insert a comment in HTML?',
    miulChoice: ['comment', 'HyperText Markup Language',],
    rightAnswer: "<!-- -->",
    prize: 300
},
{
    questions: 'Name two new tags included in the HTML 5',
    miulChoice: ['HyperText Markup Language',],
    rightAnswer: "",
    prize: 400
},

];



const htmlBtnA = document.getElementById('htmlBtnA');
const queDisplay = document.querySelector('.queDisplay');
const ansDisplay = document.querySelector('.displayAnswer')
const ansBtnDisplay = document.getElementById('ansBtnDisplay')
const backDisplay = document.getElementById('backBtnDisplay')
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
    console.log(backBtn);

htmlBtnA.addEventListener('click', () => {
    let htmlQueA = jeopardyQuestions[0].questions
    queDisplay.textContent = htmlQueA;
    ansBtnDisplay.appendChild(ansBtn);
    backDisplay.appendChild(backBtn)
    htmlBtnA.disabled = true
    //htmlBtnA.style.backgroundColor = 'red'
})

ansBtn.addEventListener('click', () => {
    let htmlAnsA = jeopardyQuestions[0].rightAnswer
    ansDisplay.textContent = htmlAnsA;

})

backBtn.addEventListener('click', () => {
    queDisplay.style.visibility = "hidden"
    ansDisplay.style.visibility = "hidden"
    backDisplay.style.visibility = "hidden"
    ansBtnDisplay.style.visibility = "hidden"
});

    
    
  













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


