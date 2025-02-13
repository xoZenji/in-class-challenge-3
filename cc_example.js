//Task 5
let orders = [
    { id: 101, customer: "Alice", total: 300},
    { id: 102, customer: "Bob", total: 450},
    { id: 103, customer: "Charlie", total: 200}
];

function findOrders(orders, orderId) {
    return orders.find(order => order.id === orderId);
}
some_order = findOrders(orders, 101)
console.log(`${some_order.customer} has an order id: ${some_order.id}, with a total of $${some_order.total}`)

//Task 6
let inventory = {
    items: [],
    addItem(name, quantity) {
        this.items.push({ name, quantity })
    },
    removeLatestItem() {
        this.items.pop();
    },
    removeFirstItem() {
        this.items.shift();
    }
}; // Created an array then removed the latest item and first item.

inventory.addItem("Monitor", 5);
inventory.addItem("Keyboard", 10);
inventory.addItem("Mouse", 3);
console.log(inventory.items); // Expected output: [{ name:"Monitor", quantity: 5 }, {name: "Keyboard", quantity: }]
// Adds new items and prints it to the console.

//Task 7
let employees = [
    { name: "Alice", position: "Developer", salary: 70000},
    { name: "Bob", position: "Designer", salary: 60000},
    { name: "Charlie", position: "Manager", salary: 90000}
];

function findEmployee(employees, name) {
return employees.find(employee => employee.name === name)
};

console.log(findEmployee(employees, "Charlie"))

//Task 8

let orders1 = [
    { id: 1, customer: "Alice"},
    { id: 2, customer: "Bob"}
];

let orders2 = [
    { id: 3, customer: "Charlie"},
    { id: 4, customer: "David"}
];

function combineOrders(order1, order2) {
    return [...order1, ...order2]
}

console.log(combineOrders(orders1, orders2));