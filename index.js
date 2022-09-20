const today = new Date().toISOString().split("T")[0];
start_date.value = today;
start_date.min = today;

const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrowFormat = tomorrow.toISOString().split("T")[0];
end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;


start_date.addEventListener("change", (e) => {
    let day = new Date(e.target.value);
    if (start_date.value > end_date.value) {
        day.setDate(day.getDate() + 1);
        end_date.value  = day.toISOString().split("T")[0];
    }
    bookingCalc();
})

end_date.addEventListener("change", (e) => {
    let day = new Date(e.target.value);
    if(end_date.value < start_date.value) {
        day.setDate(day.getDate() - 1);
        start_date.value  = day.toISOString().split("T")[0];
    }
    bookingCalc();
})

const bookingCalc = () => {
    let diffTime = Math.abs(new Date(end_date.value) - new Date(start_date.value));
    let diffDay = diffTime / (24*3600*1000);
    
    total.textContent = diffDay * nightPrice.textContent;
}

bookingCalc()