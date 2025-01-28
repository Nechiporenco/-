// script.js
const buttons = document.querySelectorAll('button');
const sections = document.querySelectorAll('section');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.id + '-section';
        sections.forEach(section => section.classList.remove('active'));
        document.getElementById(sectionId).classList.add('active');
    });
});

// Show the first section by default
document.getElementById('education-section').classList.add('active');
