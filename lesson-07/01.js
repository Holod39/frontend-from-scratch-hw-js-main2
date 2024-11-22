/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(inputString) {
  // Разбиваем строку на слова
  const words = inputString.split(' ');
  // Создаем пустой массив для хранения заглавных слов
  const capitalizedWords = [];

  // Проходим по каждому слову в массиве
  for (let i = 0; i < words.length; i++) {
      // Делаем первое слово заглавным и добавляем в массив
      const capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
      capitalizedWords.push(capitalizedWord);
  }

  // Объединяем слова обратно в строку
  return capitalizedWords.join(' ');
}