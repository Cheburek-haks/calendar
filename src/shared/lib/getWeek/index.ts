import moment from "moment";

export function getCurrentWeek() {
    let currentDate = moment();
    let weekStart = currentDate.clone().startOf("isoWeek");

    let days = [];

    for (let i = 0; i <= 30; i++) {
        const date = moment(weekStart)
            .add(i, "days")
            .format("MMMM Do,dddd")
            .split(" ");

        const count = Number(date[1].split(",")[0].slice(0, -2));
        days.push({
            date: count,
            day: date[1].split(",")[1][0],
            active: currentDate.date() === count,
            month: date[0],
        });
    }
    return { days };
}
