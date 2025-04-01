'use strict';

function sortBySalary() {
  const listItems = Array.from(document.querySelectorAll('li'));

  listItems.sort((a, b) => {
    const salaryA = Number(a.dataset.salary.replace(/[$,]/g, ''));
    const salaryB = Number(b.dataset.salary.replace(/[$,]/g, ''));

    return salaryB - salaryA;
  });

  const listContainer = document.querySelector('ul');

  listItems.forEach((item) => listContainer.appendChild(item));
}

function getEmployees() {
  const listItems = Array.from(document.querySelectorAll('li'));

  return listItems.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: Number(item.dataset.salary.replace(/[$,]/g, '')),
    age: Number(item.dataset.age),
  }));
}

sortBySalary();
getEmployees();
