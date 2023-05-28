
const heroButton = document.querySelector('.hero button');


heroButton.addEventListener('click', () => {
    const featuredAnimalsSection = document.querySelector('.featured-animals');
    featuredAnimalsSection.scrollIntoView({ behavior: 'smooth' });
});


const adoptButtons = document.querySelectorAll('.animal button');

adoptButtons.forEach(button => {
    button.addEventListener('click', () => {
        const animalName = button.parentElement.querySelector('h3').textContent;
        const confirmationMessage = `Congratulations! You've adopted ${animalName}!`;
        alert(confirmationMessage);
    });
});
