function solve() {

   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let bestRestaurantOutput = document.querySelector('#bestRestaurant p');
      let workersOutput = document.querySelector('#workers p');

      let list = {};

      for (let line of input) {
         let [restaurantName, workersData] = line.split(' - ');
         let workerInput = workersData.split(', ').map(el => {
            let [name, salary] = el.split(' ');
            return {name, salary: Number(salary)};
         });

         if (!list[restaurantName]) {
            list[restaurantName] = {
               workers: [],
               getAverageSalary: function () {
                  return this.workers.reduce((a, b) => a + b.salary, 0) / this.workers.length;
               }
            };
         }

            list[restaurantName].workers = list[restaurantName].workers.concat(workerInput);
         }

         let bestAverageSalary = Object.entries(list).sort((a, b) => b[1].getAverageSalary() - a[1].getAverageSalary());
         let bestSalary = Object.values(bestAverageSalary[0][1].workers).sort((a, b) => b.salary - a.salary);

         bestRestaurantOutput.textContent = `Name: ${bestAverageSalary[0][0]} Average Salary: ${(bestAverageSalary[0][1].getAverageSalary().toFixed(2))} Best Salary: ${bestSalary[0].salary.toFixed(2)}`;
         workersOutput.textContent = Object.values(bestSalary).map(el => `Name: ${el.name} With Salary: ${el.salary}`).join(' ');
      }
   }