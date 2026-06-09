// =========================================================
// 1. БАЗОВІ КЛАСИ (Згідно з варіантом 7)
// =========================================================

class Service {
  #code;
  #name;
  #cost;

  constructor(code, name, cost) {
    this.#code = code;
    this.#name = name;
    this.#cost = Number(cost);
  }

  get code() {
    return this.#code;
  }
  get name() {
    return this.#name;
  }
  get cost() {
    return this.#cost;
  }

  toString() {
    return `Послуга [Шифр: ${this.#code}, Назва: "${this.#name}", Базова вартість: ${this.#cost} грн]`;
  }
}

class Customer {
  #name;
  #address;
  #account;

  constructor(name, address, account) {
    this.#name = name;
    this.#address = address;
    this.#account = account;
  }

  get name() {
    return this.#name;
  }
  get address() {
    return this.#address;
  }
  get account() {
    return this.#account;
  }

  toString() {
    return `Замовник [Назва: "${this.#name}", Адреса: ${this.#address}, Рахунок: ${this.#account}]`;
  }
}

// =========================================================
// 2. КЛАСИ-СПАДКОЄМЦІ З НОВИМИ ВЛАСТИВОСТЯМИ ТА МЕТОДАМИ
// =========================================================

class UrgentService extends Service {
  #urgencyMarkup; // Нова властивість: націнка (коефіцієнт)
  #executionTime; // Нова властивість: час виконання в годинах

  constructor(code, name, cost, urgencyMarkup, executionTime) {
    super(code, name, cost); // Виклик конструктора Service
    this.#urgencyMarkup = Number(urgencyMarkup);
    this.#executionTime = Number(executionTime);
  }

  get urgencyMarkup() {
    return this.#urgencyMarkup;
  }
  get executionTime() {
    return this.#executionTime;
  }

  // Новий метод: Розрахунок термінової вартості
  calculateUrgentCost() {
    return this.cost * this.#urgencyMarkup;
  }

  toString() {
    return `${super.toString()} | ТЕРМІНОВА: Націнка x${this.#urgencyMarkup}, Час: ${this.#executionTime} год. Фінальна ціна: ${this.calculateUrgentCost()} грн`;
  }
}

class VIPCustomer extends Customer {
  #discount; // Нова властивість: знижка у %
  #personalManager; // Нова властивість: ПІБ менеджера

  constructor(name, address, account, discount, personalManager) {
    super(name, address, account); // Виклик конструктора Customer
    this.#discount = Number(discount);
    this.#personalManager = personalManager;
  }

  get discount() {
    return this.#discount;
  }
  get personalManager() {
    return this.#personalManager;
  }

  // Новий метод: Перевірка статусу лояльності
  isPremiumStatus() {
    return this.#discount > 10 ? " Преміум рівень" : "Стандартний VIP";
  }

  toString() {
    return `${super.toString()} | VIP СТАТУС: Знижка ${this.#discount}%, Менеджер: ${this.#personalManager} (${this.isPremiumStatus()})`;
  }
}

// =========================================================
// 3. СТВОРЕННЯ МАСИВІВ КЛАСІВ-СПАДКОЄМЦІВ
// =========================================================

const urgentServicesArray = [
  new UrgentService("URG-01", "Експрес-Аудит фінансів", 5000, 1.5, 24),
  new UrgentService("URG-02", "Аварійне відновлення серверу", 8000, 2.0, 4),
  new UrgentService("URG-03", "Термінова консультація юриста", 1500, 1.3, 2),
  new UrgentService("URG-04", "Швидкий кадровий підбір", 4000, 1.4, 48),
];

const vipCustomersArray = [
  new VIPCustomer(
    "АТ НафтоГазСнаб",
    "м. Київ, вул. Хрещатик, 1",
    "UA11111",
    15,
    "Олексій Коваленко",
  ),
  new VIPCustomer(
    "ТОВ Глобал АйТі",
    "м. Львів, вул. Наукова, 5",
    "UA22222",
    8,
    "Марія Petренко",
  ),
  new VIPCustomer(
    "ПП МедіаМаркет",
    "м. Одеса, вул. Морська, 12",
    "UA33333",
    12,
    "Дмитро Шевченко",
  ),
];

// =========================================================
// 4. КОНСОЛЬНЕ ВИВЕДЕННЯ
// =========================================================

console.log("\n==================================================");
console.log(" МАСИВ ТЕРМІНОВИХ ПОСЛУГ (UrgentService):");
console.log("==================================================");
urgentServicesArray.forEach((service, idx) => {
  console.log(`${idx + 1}. ${service.toString()}`);
});

console.log("\n==================================================");
console.log(" МАСИВ VIP ЗАМОВНИКІВ (VIPCustomer):");
console.log("==================================================");
vipCustomersArray.forEach((customer, idx) => {
  console.log(`${idx + 1}. ${customer.toString()}`);
});
console.log("==================================================\n");
