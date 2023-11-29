const ads = [
  { name: "ad1", price: 1.8, weight: 37, show: 0 },
  { name: "ad2", price: 1.55, weight: 32, show: 0 },
  { name: "ad3", price: 1.13, weight: 22, show: 0 },
  { name: "ad4", price: 0.48, weight: 9, show: 0 },
];

// function spreadTrafficByPrice(banners) {}

////////////////////////////////////////////////////////////////
// 1. Виконати цю задачу за допомогою BinarySearch - ні яких рекурсій в BinarySearch і в загалі
// const prices = [];
// const defaultWeights = [];
// let index = 0;
// for (let i = 0; i < ads.length; i++) {
//   prices.push(ads[i].price);
//   defaultWeights.push(ads[i].weight);
// }

// const binarySearch = (arr, target) => {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);

//     if (target === arr[mid].price) return mid;

//     if (target > arr[mid].price) {
//       right = mid - 1;
//     } else left = mid + 1;
//   }
//   return -1;
// };

// function spreadTrafficByPrice(banners) {
//   const targetIndex = binarySearch(banners, prices[index]);

//   banners[targetIndex].show++;
//   if (--banners[targetIndex].weight === 0) {
//     banners[targetIndex].weight = defaultWeights[targetIndex];
//     index === banners.length - 1 ? (index = 0) : index++;
//   }
// }
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// 2. Виконати цю задачу за допомогою 2 циклів for
// function spreadTrafficByPrice(banners) {
//   banners[0].show++;
//   let totalShows = 0;
//   let totalWeight = 0;

//   for (let i = 0; i < banners.length; i++) {
//     totalShows += banners[i].show;
//     totalWeight += banners[i].price;
//   }

//   for (let i = 0; i < banners.length; i++) {
//     const adPercentage = (banners[i].price * 100) / totalWeight;
//     const adShows = (totalShows * adPercentage) / 100;
//     banners[i].show = adShows;
//   }
// }
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// 3. виконати цю задачу за допомогою 3 найшвидших методів балансування. Знайти три найшвидших методи балансування
// Weighted Round Robin

// function spreadTrafficByPrice(banners) {
//   let maxWeight = 0;
//   let candidate = null;
//   const weight = [37, 32, 22, 9];

//   for (let i = 0; i < banners.length; i++) {
//     banners[i].weight--;

//     if (banners[i].weight <= 0) {
//       banners[i].weight = weight[i];
//     }

//     if (banners[i].weight >= maxWeight) {
//       maxWeight = banners[i].weight;
//       candidate = banners[i];
//     }
//   }

//   candidate.show++;
// }
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// 3. виконати цю задачу за допомогою 3 найшвидших методів балансування. Знайти три найшвидших методи балансування
// Resource based
// let index = 0;
// const weights = [];
// for (let i = 0; i < ads.length; i++) {
//   weights.push(ads[i].weight);
// }

// function spreadTrafficByPrice(banners) {
//   banners[index].show++;
//   if (--banners[index].weight === 0) {
//     banners[index].weight = weights[index];
//     index === banners.length - 1 ? (index = 0) : index++;
//   }
// }
////////////////////////////////////////////////////////////////

for (let i = 0; i < 1000000; i++) {
  spreadTrafficByPrice(ads);
}

console.log(ads);

// Нам не відомо скільки всього користувачів побачать наші банери, для нас це 100%
// Знаючи ціну за кожен перегляд, ми повинні розподілити рекламу пропорційно ціні, чим вище ціна за показ тим більше показів у відсотковому співвідношенні повинно бути
