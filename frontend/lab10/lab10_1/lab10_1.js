// ==========================================
// 1. КЛАС-ДОВІДНИК: Послуга (Service)
// ==========================================
class Service {
  // Інкапсульовані (приватні) властивості
  #code;
  #name;
  #cost;

  constructor(code, name, cost) {
    this.#code = code;
    this.#name = name;
    this.#cost = cost;
  }

  // Гетери та сетери
  get code() {
    return this.#code;
  }
  set code(value) {
    this.#code = value;
  }

  get name() {
    return this.#name;
  }
  set name(value) {
    this.#name = value;
  }

  get cost() {
    return this.#cost;
  }
  set cost(value) {
    if (value >= 0) this.#cost = value;
  }

  // Метод для виведення інформації
  toString() {
    return `Послуга [Шифр: ${this.#code}, Назва: "${this.#name}", Вартість: ${this.#cost} грн]`;
  }
}

// ==========================================
// 2. КЛАС-ДОВІДНИК: Замовник (Customer)
// ==========================================
class Customer {
  // Інкапсульовані (приватні) властивості
  #name;
  #address;
  #account;

  constructor(name, address, account) {
    this.#name = name;
    this.#address = address;
    this.#account = account;
  }

  // Гетери та сетери
  get name() {
    return this.#name;
  }
  set name(value) {
    this.#name = value;
  }

  get address() {
    return this.#address;
  }
  set address(value) {
    this.#address = value;
  }

  get account() {
    return this.#account;
  }
  set account(value) {
    this.#account = value;
  }

  // Метод для виведення інформації
  toString() {
    return `Замовник [Назва: "${this.#name}", Адреса: ${this.#address}, Розрахунковий рахунок: ${this.#account}]`;
  }
}

// ==========================================
// 3. ЗВ'ЯЗУВАЛЬНИЙ КЛАС: Договір (Contract)
// ==========================================
class Contract {
  // Інкапсульовані (приватні) властивості
  #serviceIndex; // Номер (індекс) у масиві послуг
  #customerIndex; // Номер (індекс) у масиві замовників
  #quantity;
  #deadline;
  #endDate;

  constructor(serviceIndex, customerIndex, quantity, deadline, endDate) {
    this.#serviceIndex = serviceIndex;
    this.#customerIndex = customerIndex;
    this.#quantity = quantity;
    this.#deadline = deadline;
    this.#endDate = endDate;
  }

  // Гетери та сетери
  get serviceIndex() {
    return this.#serviceIndex;
  }
  set serviceIndex(value) {
    this.#serviceIndex = value;
  }

  get customerIndex() {
    return this.#customerIndex;
  }
  set customerIndex(value) {
    this.#customerIndex = value;
  }

  get quantity() {
    return this.#quantity;
  }
  set quantity(value) {
    if (value > 0) this.#quantity = value;
  }

  get deadline() {
    return this.#deadline;
  }
  set deadline(value) {
    this.#deadline = value;
  }

  get endDate() {
    return this.#endDate;
  }
  set endDate(value) {
    this.#endDate = value;
  }

  // Метод для виведення інформації
  toString() {
    return `Договір [Індекс послуги: ${this.#serviceIndex}, Індекс замовника: ${this.#customerIndex}, Кількість: ${this.#quantity}, Термін: ${this.#deadline}, Дата закінчення: ${this.#endDate}]`;
  }
}

// ==========================================
// ГЕНЕРАЦІЯ ТЕСТОВИХ ДАНИХ (Не менше 20 елементів)
// ==========================================

// 1. Наповнення масиву Послуг (20 елементів)
const servicesArray = [];
const serviceTypes = [
  "Консалтинг",
  "Аудит",
  "IT-Підтримка",
  "Маркетинг",
  "Юридичний супровід",
  "Логістика",
];
for (let i = 1; i <= 20; i++) {
  const type = serviceTypes[i % serviceTypes.length];
  servicesArray.push(
    new Service(`SRV-${100 + i}`, `${type} Рівень ${i}`, 1500 + i * 250),
  );
}

// 2. Наповнення масиву Замовників (20 елементів)
const customersArray = [];
const companyNames = [
  "ТОВ Вектор",
  "ПП Світанок",
  "АТ Новація",
  "ФОП Іванов",
  "Корпорація Глобус",
];
for (let i = 1; i <= 20; i++) {
  const name = companyNames[i % companyNames.length];
  customersArray.push(
    new Customer(
      `${name} (${i})`,
      `вул. Головна, буд. ${i}`,
      `UA45300011000002600123${10 + i}`,
    ),
  );
}

// 3. Наповнення масиву Договорів (пов'язуємо через індекси 0..19)
const contractsArray = [];
for (let i = 0; i < 20; i++) {
  // Випадкові або послідовні індекси для зв'язку
  const srvIdx = i; // Індекс послуги
  const custIdx = (i + 3) % 20; // Індекс замовника

  contractsArray.push(
    new Contract(
      srvIdx,
      custIdx,
      2 + (i % 5),
      `10-${10 + i}-2026`,
      `25-${10 + i}-2026`,
    ),
  );
}

// ==========================================
// ДЕМОНСТРАЦІЯ В КОНСОЛІ РЕЗРОБНИКА
// ==========================================

console.log(
  "%c--- ПЕРЕЛІК ЕЛЕМЕНТІВ МАСИВУ ПОСЛУГ (КЛАС-ДОВІДНИК) ---",
  "color: blue; font-weight: bold;",
);
servicesArray.forEach((service, index) => {
  console.log(`[Індекс ${index}] ${service.toString()}`);
});

console.log(
  "\n%c--- ПЕРЕЛІК ЕЛЕМЕНТІВ МАСИВУ ЗАМОВНИКІВ (КЛАС-ДОВІДНИК) ---",
  "color: green; font-weight: bold;",
);
customersArray.forEach((customer, index) => {
  console.log(`[Індекс ${index}] ${customer.toString()}`);
});

console.log(
  "\n%c--- ПЕРЕЛІК ЕЛЕМЕНТІВ МАСИВУ ДОГОВОРІВ (ЗВ'ЯЗУВАЛЬНИЙ КЛАС) ---",
  "color: purple; font-weight: bold;",
);
contractsArray.forEach((contract, index) => {
  console.log(`[Договір №${index + 1}] ${contract.toString()}`);
});
