function button(text){
  const button = document.createElement('button');
  button.className = 'button'
  button.innerHTML = `
    <div class='boldText'>${text}</div>
    <img src='./images/icon-arrow-down.svg' class='arrow'>
  `;

  return button;
}

function answer(text){
  const p = document.createElement('p');
  p.className = 'subtext hide';
  p.innerText = text;

  return p;
}

const content = document.querySelector('.content');
const title = document.createElement('h1');
title.className = 'title';
title.innerText = 'FAQs';
content.prepend(title);

let questionObj = {
  0: 'How many team members can I invite?',
  1: 'What is the maximum file upload size?',
  2: 'How do I reset my password?',
  3: 'Can I cancel my subscription?',
  4: 'Do you provide additional support?'
}

let answersObj = {
  0:'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',

  1:'No more than 2GB. All files in your account must fit your allotted storage space.',

  2:'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',

  3:'Chat and email support is available 24/7. Phone lines are open during normal business hours.',

  4:'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
}

const containers = document.querySelectorAll('.container');

for(let i = 0; i < containers.length; i++){
  let index = i;
  
  if(index in questionObj){
    containers[i].prepend(
      button(questionObj[index])
    )
  }

  if(index in answersObj){
    containers[index].appendChild(
      answer(answersObj[index])
    )
  }
}

containers.forEach((contain) => {
  contain.addEventListener('click', function(){
    contain.classList.toggle('active');
  })
})

.content.addEventListener('click', () => {
  
})

















