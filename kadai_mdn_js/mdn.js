// 今日の日付をnew Dateに格納
const today = new Date();

// 年・月・日を取得する
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();

// 年月日を出力する
console.log(year + '年' + month + '月' + date + '日');
