// script.js
document.addEventListener("DOMContentLoaded", function () {
    // ... (Código anterior)
  
    // Función para obtener la opción seleccionada
    function getSelectedOption(optionsContainer) {
      let selectedOption;
      optionsContainer.querySelectorAll("input").forEach(function (input) {
        if (input.checked) {
          selectedOption = input.value;
        }
      });
      return selectedOption;
    }
  
    // --- Ejercicio 1 ---
    let optionsContainer1 = document.getElementById("options-1");
    let exerciseResult1 = document.getElementById("exercise-result-1");
  
    document.getElementById("exercise-btn-1").addEventListener("click", function () {
      checkAnswer(optionsContainer1, exerciseResult1, "b");
    });
  
    // --- Ejercicio 2 ---
    let optionsContainer2 = document.getElementById("options-2");
    let exerciseResult2 = document.getElementById("exercise-result-2");
  
    document.getElementById("exercise-btn-2").addEventListener("click", function () {
      checkAnswer(optionsContainer2, exerciseResult2, "c");
    });
  
    // --- Ejercicio 3 ---
    let optionsContainer3 = document.getElementById("options-3");
    let exerciseResult3 = document.getElementById("exercise-result-3");
  
    document.getElementById("exercise-btn-3").addEventListener("click", function () {
      checkAnswer(optionsContainer3, exerciseResult3, "c");
    });
  
    // --- Ejercicio 4 ---
    let optionsContainer4 = document.getElementById("options-4");
    let exerciseResult4 = document.getElementById("exercise-result-4");
  
    document.getElementById("exercise-btn-4").addEventListener("click", function () {
      checkAnswer(optionsContainer4, exerciseResult4, "b");
    });
  
    // --- Ejercicio 5 ---
    let optionsContainer5 = document.getElementById("options-5");
    let exerciseResult5 = document.getElementById("exercise-result-5");
  
    document.getElementById("exercise-btn-5").addEventListener("click", function () {
      checkAnswer(optionsContainer5, exerciseResult5, "a");
    });
  
    // Función para verificar la respuesta
    function checkAnswer(optionsContainer, resultContainer, correctAnswer) {
      let selectedOption = getSelectedOption(optionsContainer);
  
      if (selectedOption === correctAnswer) {
        resultContainer.innerText = "¡Correcto!";
      } else {
        resultContainer.innerText = `Incorrecto. La respuesta correcta es '${correctAnswer})'.`;
      }
    }
  });
  