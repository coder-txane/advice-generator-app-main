const adviceText = document.getElementById('text');
const adviceNumber = document.getElementById('id-number');
const buttonElement = document.getElementById('btn');

async function getAdvice() {
    try {
        let res = await fetch('https://api.adviceslip.com/advice');
        let data = await res.json();

        adviceNumber.textContent = data.slip.id;
        adviceText.textContent = data.slip.advice;
        }
    catch (error) {
        console.error('Error fetching advice:', error);
    }
}

buttonElement.addEventListener('click', (getAdvice));