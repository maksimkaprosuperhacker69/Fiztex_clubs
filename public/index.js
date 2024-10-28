const letterButtonsDiv = document.getElementById("letter-buttons");
    const currentScheduleText = document.getElementById("current-schedule");
    let currentLetter = "A"; // Переменная для хранения текущей буквы

    document.querySelectorAll(".class-button").forEach(button => {
      button.addEventListener("click", () => {
        const selectedClass = button.dataset.class;
        letterButtonsDiv.innerHTML = ""; // Очищаем кнопки букв
        
        // Определяем буквы в зависимости от выбранного класса
        let letters;
        if (selectedClass === "7") {
          letters = ["A", "B"];
          currentLetter = "A"; // По умолчанию 7A
          currentScheduleText.innerText = `Расписание для: 7${currentLetter} класса`;
          document.getElementById("schedule-7A").classList.add("active");
          document.getElementById("schedule-7B").classList.remove("active");
        } else if (selectedClass === "8") {
          letters = ["A", "B", "C"];
          currentScheduleText.innerText = `Расписание для: 8${currentLetter} класса`;
          document.getElementById(`schedule-8${currentLetter}`).classList.add("active");
          document.getElementById("schedule-8B").classList.remove("active");
          document.getElementById("schedule-8C").classList.remove("active");
        }

        // Создание кнопок для букв
        letters.forEach(letter => {
          const letterButton = document.createElement("button");
          letterButton.className = "letter-button";
          letterButton.innerText = `${selectedClass}${letter}`;
          letterButton.addEventListener("click", () => {
            document.querySelectorAll(".schedule").forEach(schedule => schedule.classList.remove("active"));
            document.getElementById(`schedule-${selectedClass}${letter}`).classList.add("active");
            currentScheduleText.innerText = `Расписание для: ${selectedClass}${letter} класса`;
            currentLetter = letter; // Обновляем текущую букву
          });
          letterButtonsDiv.appendChild(letterButton);
        });
      });
    });