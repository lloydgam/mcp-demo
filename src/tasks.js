const tasks = [
  { id: 1, title: "Buy milk", completed: false },
  { id: 2, title: "Finish report", completed: false },
  { id: 3, title: "Book flight", completed: true },
];

function getTasks() {
  return tasks;
}

module.exports = { getTasks, tasks };