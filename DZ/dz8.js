// ##1 Запросите у пользователя дату в формате
// ДД.ММ.ГГГГ. Напишите программу, выводящую день
// недели по введённой дате.

const userDate = prompt("Введите дату: ДД ММ ГГГГ");
const [day, month, year] = userDate.split(" ");
const formatedDate = new Date(`${year}-${month}-${day}`);
const dayIndex = formatedDate.getDay();
const weekArr = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
console.log(weekArr[dayIndex]);

// ##2.Написать программу, которая выводит в консоль
// количество минут, прошедшее с начала сегодняшнего
// дня.

const currentDate = new Date();
const hrs = currentDate.getHours();
const mins = currentDate.getMinutes();
console.log(`С начала дня прошло: ${hrs * 60 + mins} минут`);

// ##3.*В двух переменных хранятся даты рождения двух
// пользователей в формате ДД.ММ.ГГГГ. Написать
// программу, которая определяет более молодого пользователя.

const userBirth1 = "02 01 2020";
const userBirth2 = "03 01 2020";

function formatToTs(userBirth) {
  const [day, month, year] = userBirth.split(" ");
  const formatedBirth = new Date(`${year}-${month}-${day}`);
  const birthTs = Number(formatedBirth);
  return birthTs;
}

const userTs1 = formatToTs(userBirth1);
const userTs2 = formatToTs(userBirth2);

function compareDates(a, b) {
  let answer;
  if (a < b) {
    answer = "Второй пользователь моложе";
  } else {
    answer = "Первый пользователь моложе";
  }
  return answer;
}
console.log(compareDates(userTs1, userTs2));
