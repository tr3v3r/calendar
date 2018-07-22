const initialObject = {
    date: new Date(),
    getDates() {
        const [result, currentDate] = [[], new Date(this.date.getFullYear(), this.date.getMonth())];
        const currentDay = currentDate.getDay() ? currentDate.getDay() : 7;
        currentDay !== 1 ? currentDate.setDate(2 - currentDay) : currentDate.setDate(-6);

        for (let i = 1; i <= 6; i++) {
            const row = [];
            for (let j = 1; j <= 7; j++) {
                const isCurrentMonth = this.date.getMonth() === currentDate.getMonth();
                const currentYear = this.date.getFullYear();
                const currentMonth = currentDate.getMonth();
                const dateKey = currentDate.toLocaleString('en-us', { year: 'numeric',
                    month: 'numeric',
                    day: 'numeric' });
                const date = {
                    date: currentDate.getDate(),
                    isCurrentMonth,
                    currentYear,
                    currentMonth,
                    dateKey,
                };

                row.push(date);
                currentDate.setDate(date.date + 1);
            }
            result.push(row);
        }
        return result;
    },
    weekStartDate: null,
    setWeekStartDate() {
        let currentDate;

        if (this.date.getMonth() === new Date().getMonth()) currentDate = new Date();
        else currentDate = new Date(this.date.getFullYear(), this.date.getMonth());

        const currentDay = currentDate.getDay() ? currentDate.getDay() : 7;

        if (currentDay !== 1) currentDate.setDate(currentDate.getDate() + (1 - currentDay));
        return currentDate;
    },
    currentWeek: [],
    getDatesForWeek() {
        const result = [];
        const weekStartDate = new Date();
        weekStartDate.setTime(this.weekStartDate.getTime());
        for (let j = 1; j <= 7; j++) {
            const isCurrentMonth = this.date.getMonth() === weekStartDate.getMonth();
            const currentYear = this.date.getFullYear();
            const currentMonth = weekStartDate.getMonth();
            const dateKey = weekStartDate.toLocaleString('en-us', { year: 'numeric',
                month: 'numeric',
                day: 'numeric' });
            const date = {
                date: weekStartDate.getDate(),
                isCurrentMonth,
                currentYear,
                currentMonth,
                dateKey,
            };

            result.push(date);
            weekStartDate.setDate(date.date + 1);
        }

        return result;
    },
    events: [],
    currentView: 'Month',
    nextView: 'Week',
};

export default initialObject;
