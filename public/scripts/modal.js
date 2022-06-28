console.log('modal.js is gelinked')

const innerCard = document.querySelector('.flip-card-inner')
const openIssue = document.querySelector('.openIssue')
const closeIssue = document.querySelector('.closeIssue')

openIssue.addEventListener('click', () => {
    innerCard.classList.add("card-flip");
})

closeIssue.addEventListener('click', () => {
    innerCard.classList.remove("card-flip");
})