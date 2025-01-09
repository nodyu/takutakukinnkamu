let maxDate = new Date();
maxDate.setMonth(maxDate.getMonth() + 3); // 3ヶ月後の日付を計算
maxDate = maxDate.toISOString().split('T')[0]; // YYYY-MM-DD 形式に変換

flatpickr('#fromCheckinDateToCheckoutDate', {
    mode: "range",
    locale: 'ja',
    minDate: 'today',
    maxDate: maxDate
});