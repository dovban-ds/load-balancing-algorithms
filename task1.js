const ads = [
  { name: "ad1", price: 1.8, weight: 1.8, show: 0 },
  { name: "ad2", price: 1.55, weight: 1.55, show: 0 },
  { name: "ad3", price: 1.13, weight: 1.13, show: 0 },
  { name: "ad4", price: 0.48, weight: 0.48, show: 0 },
];

////////////////////////////////////////////////////////////////
// 1. Виконати шляхом Math.random() - 2 строчки кода
// function spreadTrafficEvenly(banners) {
//   banners[Math.floor(Math.random() * banners.length)].show++;
// }
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// 1. Виконати шляхом Math.random() - 2 строчки кода
// let index = 0;

// function spreadTrafficEvenly(banners) {
//   banners[Math.floor(Math.random()) + index].show++;
//   index = ++index % banners.length;
// }
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// 2. Виконати простим циклом for. Всього 1 for більше нічного
// function spreadTrafficEvenly(banners) {
//   for (let i = 0; i < banners.length; i++) {
//     if (i === banners.length - 1) {
//       banners[i].show++;
//       break;
//     }
//     if (banners[i + 1].show > banners[i].show) {
//       banners[i].show++;
//       break;
//     }
//   }
// }
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// 3. Виконати цю задачу алгоритмами балансування, знайти 3 самих швидких алгоритми.
// Least Connections
// function spreadTrafficEvenly(banners) {
//   for (let i = banners.length - 1; i >= 0; i--) {
//     if (i === 0) {
//       banners[i].show++;
//       break;
//     }
//     if (banners[i].show < banners[i - 1].show) {
//       banners[i].show++;
//       break;
//     }
//   }
// }
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// 3. Виконати цю задачу алгоритмами балансування, знайти 3 самих швидких алгоритми.
// Chained Failover
// function spreadTrafficEvenly(banners) {
//   const maxRequests = 250000;
//   for (let i = 0; i < banners.length; i++) {
//     while (banners[i].show !== maxRequests) banners[i].show++;
//   }
// }
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// 3. Виконати цю задачу алгоритмами балансування, знайти 3 самих швидких алгоритми.
// Round Robin
// let index = 0;

// function spreadTrafficEvenly(banners) {
//   banners[index].show++;
//   index = ++index % banners.length;
// }
////////////////////////////////////////////////////////////////

for (let i = 0; i < 1000000; i++) {
  spreadTrafficEvenly(ads);
}

console.log(ads);

// [
//    { name: 'ad1', price: 1.8, show: 250000 },
//    { name: 'ad2', price: 1.55, show: 250000 },
//    { name: 'ad3', price: 1.13, show: 250000 },
//    { name: 'ad4', price: 0.48, show: 250000 },
//];

// За одни виклик функції spreadTrafficEvenly треба збільшити parameter show на 1 у одного з банерів. В кінці коли ми виведемо console.log(ads) у всіх повинно бути порівно show

// допускається похибка до 2%
