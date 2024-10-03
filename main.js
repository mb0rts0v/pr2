// Завдання 1: Підрахунок літер у рядках
function countLetterInRow(row, letter) {
    let count = 0;
    for (let i = 0; i < row.length; i++) {
        if (row.charAt(i).toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

function getRow(firstRow, secondRow, letter) {
    const countFirst = countLetterInRow(firstRow, letter);
    const countSecond = countLetterInRow(secondRow, letter);

    if (countFirst > countSecond) {
        return firstRow;
    } else if (countSecond > countFirst) {
        return secondRow;
    } else {
        return 'Кількість літер однакова в обох рядках';
    }
}

function task1() {
    const firstRow = 'Slow and steady wins the race';
    const secondRow = 'You can say that again';
    const letter = prompt('Введіть літеру для підрахунку:');
    
    if (letter && letter.length === 1) {
        const result = getRow(firstRow, secondRow, letter);
        alert(`Більше літер "${letter}" у рядку: "${result}"`);
    } else {
        alert('Введіть одну літеру!');
    }
}

// Завдання 2: Форматування номеру телефону
function formattedPhone(phone) {
    // Видаляємо всі зайві символи
    const digits = phone.replace(/\D/g, '');

    if (digits.length === 10) {
        // Формат для 10-значного номера, наприклад: 0671234567
        return `+38 (${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 8)}-${digits.slice(8)}`;
    } else if (digits.length === 11 && digits.startsWith('8')) {
        // Формат для 11-значного номера, наприклад: 80671234567
        return `+38 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9)}`;
    } else if (digits.length === 12 && digits.startsWith('38')) {
        // Формат для 12-значного номера, наприклад: +380671234567
        return `+${digits.slice(0, 2)} (${digits.slice(2, 5)}) ${digits.slice(5, 8)}-${digits.slice(8, 10)}-${digits.slice(10)}`;
    } else {
        return 'Неправильний формат номера';
    }
}

function task2() {
    const phone = prompt('Введіть номер телефону у форматі +380, 8 або 067:');
    const result = formattedPhone(phone);
    alert(result);
}
