export default class DateDisplay {
  public curr_date: Date;
  public curr_year: number;
  public curr_month: number;

  constructor() {
    this.curr_date = new Date();
    this.curr_year = this.curr_date.getFullYear();
    this.curr_month = this.curr_date.getMonth();
  }

  public get_weeks_data() {
    const week_values: string[] = [];
    let today = this.curr_date.getDay();
    if (!today) {
      today = 7;
    }
    for (let i = 0; i < 8; i++) {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - (today + 7 * i));
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + 6);
      const week = `${startDate.getMonth() + 1}/${startDate.getDate()} - ${
        endDate.getMonth() + 1
      }/${endDate.getDate()}`;
      week_values.push(week);
    }
    return week_values.reverse();
  }
  public get_months_data() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const current_month = months[this.curr_month];
    const sorted_months = [
      ...months.slice(this.curr_month, 11),
      ...months.slice(0, this.curr_month),
    ];
    console.log(sorted_months);
    return sorted_months;
  }

  public get_years_data() {
    const years: string[] = [];
    for (let i = 0; i < 20; i++) {
      const today = new Date();
      today.setFullYear(today.getFullYear() - i);
      years.push(`${today.getFullYear()}`);
    }
    //reverse this array
    console.log(years);
    return years;
  }
}
