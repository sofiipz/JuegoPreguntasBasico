// Preguntas del juego
const questions = [
    {
        question: "¿En qué continente se encuentra el desierto del Sahara?",
        options: ["África", "Asia", "América", "Australia"],
        answer: "África"
    },
    {
        question: "¿Qué inventó Alexander Graham Bell?",
        options: ["Teléfono", "Radio", "Bombilla", "Avión"],
        answer: "Teléfono"
    },
    {
        question: "¿Cuál es el metal más ligero?",
        options: ["Litio", "Aluminio", "Hierro", "Plata"],
        answer: "Litio"
    },
    {
        question: "¿Qué animal es conocido como el 'rey de la selva'?",
        options: ["León", "Tigre", "Elefante", "Gorila"],
        answer: "León"
    },
    {
        question: "¿Qué planeta es el más cercano al Sol?",
        options: ["Mercurio", "Venus", "Marte", "Tierra"],
        answer: "Mercurio"
    }
];

// Variables de estado
let currentQuestionIndex = 0;
let score = 0;

// Función para cargar la pregunta actual
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = ""; // Limpia las opciones anteriores

    // Generar botones para cada opción
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => selectAnswer(option);
        optionsContainer.appendChild(button);
    });
}

// Función para manejar la selección de respuestas
function selectAnswer(option) {
    const currentQuestion = questions[currentQuestionIndex];
    if (option === currentQuestion.answer) {
        score++;
        alert("¡Correcto!");
    } else {
        alert("Incorrecto. La respuesta correcta era: " + currentQuestion.answer);
    }

    // Pasar a la siguiente pregunta o mostrar la puntuación
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

// Función para mostrar la puntuación final
function showScore() {
    document.getElementById("quiz-container").innerHTML = `
        <h2>¡Juego terminado!</h2>
        <p>Tu puntuación es: ${score} de ${questions.length}</p>
        <button onclick="restartGame()">Jugar de nuevo</button>
    `;
}

// Función para reiniciar el juego
function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

// Inicialización del juego
document.getElementById("next-button").onclick = loadQuestion;
loadQuestion();
