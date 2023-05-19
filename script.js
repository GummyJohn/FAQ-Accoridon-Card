function button(text){
  const button = document.createElement('button');
  button.setAttribute('id','button');
  button.innerHTML = `
    <div class='boldText'>${text}</div>
    <img src='./images/icon-arrow-down.svg' class='arrow'>
  `;

  return button;
}

function answer(text){
  const p = document.createElement('p');
  p.className = 'subtext';
  p.innerText = text;

  return p;
}

const content = document.querySelector('.content');
const title = document.createElement('h1');
title.className = 'title';
title.innerText = 'FAQ';
content.prepend(title);

const questionOne = document.querySelector('.question-one');
const questionTwo= document.querySelector('.question-two');
const questionThree = document.querySelector('.question-three');
const questionFour = document.querySelector('.question-four');
const questionFive = document.querySelector('.question-five');

questionOne.appendChild(
  button('How many team members can I invite?')
)
questionTwo.appendChild(
  button('What is the maximum file upload size?')
)
questionThree.appendChild(
  button('How do I reset my password?')
)
questionFour.appendChild(
  button('Can I cancel my subscription?')
)
questionFive.appendChild(
  button('Do you provide additional support?')
)

const answerOne = document.querySelector('.answer-one');
const answerTwo = document.querySelector('.answer-two');
const answerThree = document.querySelector('.answer-three');
const answerFour = document.querySelector('.answer-four');
const answerFive = document.querySelector('.answer-five');

answerOne.appendChild(
  answer('You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.')
)
answerTwo.appendChild(
  answer('No more than 2GB. All files in your account must fit your allotted storage space.')
)
answerThree.appendChild(
  answer('Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.')
)
answerFour.appendChild(
  answer('Yes! Send us a message and we’ll process your request no questions asked.')
)
answerFive.appendChild(
  answer(' Chat and email support is available 24/7. Phone lines are open during normal business hours.')
)


const buttonOpen = document.querySelectorAll('#button');
const arrows = document.querySelectorAll('.arrow');
const subText = document.querySelector('.subtext');
const buttonArray = new Array(buttonOpen.length);

console.log(buttonArray)

function openClose(place) {
  if(buttonArray[place] === 1){
    console.log(place);
  }
}
















































// function createPElement(text){
//   const p = document.createElement('p');
//   p.className = 'question color';
//   p.innerText = text;
//   return p;
// }
  
// function createSubText(text) {
//   const p = document.createElement('p');
//   p.className = 'hide subtext';
//   p.innerText = text;
//   return p;
// }

// const content = document.querySelector('.content');
// const innerContainer = document.querySelector('.inner-container')
// const arrowDown = document.querySelector('.arrow');
// const arrowUp = document.querySelector('.up');


// const firstQuestion = document.querySelector('.first')
// const secondQuestion = document.querySelector('.second')
// const thirdQuestion = document.querySelector('.third')
// const fourthQuestion = document.querySelector('.fourth')
// const fifthQuestion = document.querySelector('.fifth')


// const title = document.createElement('div');
// title.className = 'title';
// title.innerText = 'FAQ';
// content.prepend(title);

// firstQuestion.prepend(
//   createPElement('How many team members can I invite?')
// )
  
// secondQuestion.prepend(
//   createPElement('What is the maximum file upload size?')
// )
    
// thirdQuestion.prepend(
//   createPElement('How do I reset my password?')
// )
      
// fourthQuestion.prepend(
//   createPElement('Can I cancel my subscription?')
// )
        
// fifthQuestion.prepend(
//   createPElement('Do you provide additional support?')
// )
          
// const firstContainer = document.querySelector('.first-container')
// const secondContainer = document.querySelector('.second-container')
// const thirdContainer = document.querySelector('.third-container')
// const fourthContainer = document.querySelector('.fourth-container')
// const fifthContainer = document.querySelector('.fifth-container')


// firstQuestion.addEventListener('click', () => {
//   firstContainer.appendChild(
//     createSubText('You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.')
//   )
 
//   document.querySelector('.subtext').classList.remove('hide');
//   arrowDown.classList.add('hide');
//   arrowUp.classList.remove('hide');
// })

// secondQuestion.addEventListener('click', () => {
//   secondContainer.appendChild(
//     createSubText('No more than 2GB. All files in your account must fit your allotted storage space.')
//   )

//   document.querySelector('.subtext').classList.remove('hide');
//   arrowDown.classList.add('hide');
//   arrowUp.classList.remove('hide');
// })
