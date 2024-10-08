/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findUniqueElements(arr) {
    const uniqueElements = [];
    
    for (let i = 0; i < arr.length; i++) {
        // Если элемент еще не был добавлен в uniqueElements, добавляем его
        if (!includesElement(uniqueElements, arr[i])) {
            uniqueElements.push(arr[i]);
        }
    }
    
    return uniqueElements;
}

