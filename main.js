const htmlCatagory = [
    'What is HTML?',
    'What are tags?',
    'How do you insert a comment in HTML?',
    'How do you insert a copyright symbol on a browser page?',
    'Name two new tags included in the HTML 5'
];
const cssCatagory = [];

const jsCatagory = [];

const comandLineCatagory = [];


//for(let i = 0; i < 4; i++){
    let catagory = document.createElement('div');
    let node = document.createTextNode('HTML')
    catagory.classList = 'catagory'
    catagory.appendChild(node)
    document.body.appendChild(catagory);
    
    console.log(catagory);
//}

let box = document.createElement('div');
    let node2 = document.createTextNode('100')
    box.classList = 'boxes'
    box.appendChild(node2)
    document.body.appendChild(box);
    
    //console.log(box);
    

    box.addEventListener('click', () => {
        document.body.textContent = htmlCatagory[0]
    
        })
