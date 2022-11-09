let a = [];
let week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
 
let day = "Вторник";
let indexWeek = week.indexOf(day);
 
for (let i = 1; i < 32; i++) {
  a.push(i);
}
 
for (let elem of a) {
  const y = (indexWeek + elem - 1) % 7;
  console.log(`${elem} января, ${week[y]}`);
}