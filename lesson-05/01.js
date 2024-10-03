/*
Реализовать метод `addResource`, который будет добавлять указанное количество ресурсов к уже существующим ресурсам в объекте `game`.

Требования к методу:

1. Метод должен принимать два параметра:
  - `resource` (строка) — тип ресурса (`gold`, `lumber` и т.д.).
  - `amount` (число) — количество ресурса, которое нужно добавить.
2. Если тип ресурса не существует в объекте `game.resources`, метод должен выводить в консоль сообщение "Invalid resource".
3. Если ресурс существует, метод должен добавлять значение `amount` к текущему количеству этого ресурса в объекте.
*/

const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  addResource(resource, amount) {
    // Проверяем, существует ли указанный тип ресурса
    if (this.resources.hasOwnProperty(resource)) {
      // Проверяем, является ли amount положительным числом
      if (typeof amount === 'number' && amount > 0) {
        // Добавляем количество ресурса
        this.resources[resource] += amount;
      } else {
        console.log("Amount must be a positive number");
      }
    } else {
      console.log("Invalid resource");
    }
  }
}


