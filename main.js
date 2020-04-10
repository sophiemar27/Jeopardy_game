let displaingQuestions = document.querySelector('.displing-questions')
           //Jeopardy Questions and Answers
const htmlQuestions = [
    'What is HTML stands for?',
    'What are tags?',
    'How do you insert a comment in HTML?',
    'How do you insert a copyright symbol on a browser page?',
    'Name two new tags included in the HTML 5'
];
const htmlAnswer = ['HyperText Markup Language', 'Content is placed in between HTML tags in order to properly format it' ]

const cssCatagory = [];

const jsCatagory = [];

const comandLineCatagory = [];

//for(i = 0; i < htmlAnswer.length; i++){
    let answerBtn = document.createElement('button');
    let nodeBtn = document.createTextNode('Answer')
    answerBtn.classList = 'answerBtn'
    answerBtn.appendChild(nodeBtn)
    let body = document.getElementsByTagName("body")[0];
    body.appendChild(answerBtn);

    //console.log(answerBtn);
//}



function stylingTheBody(){
    document.body.style.backgroundColor = 'blue';
    document.body.style.color = 'white';
    document.body.style.fontSize = 'xx-Large';
}

//for(let i = 0; i < 4; i++){
    let catagory = document.createElement('div');
    let html = document.createTextNode('HTML')
    catagory.classList = 'catagory'
    catagory.appendChild(html)
    document.body.appendChild(catagory);
    
    console.log(catagory);
//}

    let box = document.createElement('div');
    let htmlPrizeA = document.createTextNode('100')
    box.classList = 'boxes'
    box.appendChild(htmlPrizeA)
    document.body.appendChild(box);
    let answerHtmlA = document.createElement('div');


    //console.log(box);
    
    box.addEventListener('click', () => {
        box.disabled = true;
        document.body.textContent = htmlQuestions[0]
        body.appendChild(answerBtn);

        stylingTheBody()
    })

    answerBtn.addEventListener('click', () => {
        document.body.textContent = htmlAnswer[0];
    })
