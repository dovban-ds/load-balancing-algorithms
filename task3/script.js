const data = [
  {
    from: "2023-05-30T05:56:28+00:00",
    to: "2023-05-30T05:57:10+00:00",
  },
  {
    from: "2023-05-30T06:01:01+00:00",
    to: "2023-05-30T06:49:31+00:00",
  },
  {
    from: "2023-05-30T07:04:21+00:00",
    to: "2023-05-30T07:05:26+00:00",
  },
  {
    from: "2023-05-30T08:27:42+00:00",
    to: "2023-05-30T08:28:52+00:00",
  },
  {
    from: "2023-05-30T08:29:43+00:00",
    to: "2023-05-30T08:31:28+00:00",
  },
  {
    from: "2023-05-30T10:19:15+00:00",
    to: "2023-05-30T10:21:02+00:00",
  },
  {
    from: "2023-05-30T16:50:26+00:00",
    to: "2023-05-30T16:50:49+00:00",
  },
  {
    from: "2023-05-30T17:03:12+00:00",
    to: "2023-05-30T17:04:24+00:00",
  },
  {
    from: "2023-05-30T17:05:11+00:00",
    to: "2023-05-30T17:05:55+00:00",
  },
  {
    from: "2023-05-30T19:29:46+00:00",
    to: "2023-05-30T19:31:04+00:00",
  },
  {
    from: "2023-05-30T20:42:28+00:00",
    to: "2023-05-30T20:43:31+00:00",
  },
];

const days = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};
const months = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

const container = document.createElement("div");
container.classList.add("container");
document.body.append(container);

const dataBox = document.createElement("div");
dataBox.classList.add("data-box");
container.append(dataBox);

const date = document.createElement("div");
const actualDate = new Date();
date.innerHTML = `${days[actualDate.getDay()]} ${actualDate.getDate()} ${
  months[actualDate.getMonth()]
}`;
dataBox.append(date);

const visits = document.createElement("div");
visits.innerHTML = `${data.length} visits`;
dataBox.append(visits);

const greenLine = document.createElement("div");
greenLine.classList.add("line");
container.append(greenLine);

const fullDay = 2700;
// у меня в системе gmt +03:00 пояс, в условии +00:00, поэтому 2700, а не 2400

// функция для составления числа из часов и минут
const getTimeNumber = (index, key) => {
  return (
    new Date(data[index][key]).getHours() * 100 +
    new Date(data[index][key]).getMinutes()
  );
};

for (let i = 0; i < data.length; i++) {
  if (i === 0) {
    const firstFromHours = getTimeNumber(i, "from");
    let spacePercent = (firstFromHours * 100) / fullDay;
    const space = document.createElement("div");
    space.style.width = `${spacePercent}%`;
    space.classList.add("space");
    greenLine.append(space);

    const ball = document.createElement("div");
    ball.classList.add("ball");
    const fromPercent = (firstFromHours * 100) / fullDay;
    const firstToHours = getTimeNumber(i, "to");
    const toPercent = (firstToHours * 100) / fullDay;
    const ballWidth = toPercent - fromPercent;
    ball.style.width = `${ballWidth}%`;
    greenLine.append(ball);
    continue;
  }

  const hoursTo = getTimeNumber(i - 1, "to");

  const hoursFrom = getTimeNumber(i, "from");

  const toPercent = (hoursTo * 100) / fullDay;
  const fromPercent = (hoursFrom * 100) / fullDay;
  spacePercent = fromPercent - toPercent;

  if (i !== 0 && spacePercent > 2) {
    const space = document.createElement("div");
    space.style.width = `${spacePercent}%`;
    space.classList.add("space");
    greenLine.append(space);
  }

  const ball = document.createElement("div");
  ball.classList.add("ball");
  // рассчитываем ширину шарика
  const currHoursFrom = getTimeNumber(i, "from");
  const currFromPercent = (currHoursFrom * 100) / fullDay;
  const ballWidth = toPercent - currFromPercent;
  ball.style.width = `${ballWidth}%`;
  greenLine.append(ball);
  if (i !== 0 && spacePercent < 2) ball.style.marginLeft = `-${spacePercent}%`;

  if (i === data.length - 1) {
    const lastToHours = getTimeNumber(i, "to");
    spacePercent = 100 - (lastToHours * 100) / fullDay;
    const space = document.createElement("div");
    space.style.width = `${spacePercent}%`;
    space.classList.add("space");
    greenLine.append(space);
  }
}
