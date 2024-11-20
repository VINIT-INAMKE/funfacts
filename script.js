const facts = [
    "Did you know that honey never spoils?",
    "Bananas are berries, but strawberries aren't.",
    "A group of flamingos is called a 'flamboyance'.",
    "Octopuses have three hearts.",
    "The Eiffel Tower can be 15 cm taller during the summer."
];

function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}

document.getElementById('newFactBtn').addEventListener('click', () => {
    const factElement = document.getElementById('fact');
    factElement.textContent = getRandomFact();
});

// Load a random fact on initial page load
document.addEventListener('DOMContentLoaded', () => {
    const factElement = document.getElementById('fact');
    factElement.textContent = getRandomFact();
});
