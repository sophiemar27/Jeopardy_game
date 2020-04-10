const htmlCatagory = [
    'What is HTML stands for?',
    'What are tags?',
    'How do you insert a comment in HTML?',
    'How do you insert a copyright symbol on a browser page?',
    'Name two new tags included in the HTML 5'
];
const cssCatagory = [];

const jsCatagory = [];

const comandLineCatagory = [];

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
    
    console.log(box);
    
    box.addEventListener('click', () => {
        box.disabled = true;
        document.body.textContent = htmlCatagory[0]

        stylingTheBody()
    })
