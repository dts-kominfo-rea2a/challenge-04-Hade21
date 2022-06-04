// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];
const mockDates = ["2022-01-01 UTC+7", "2021-12-31 00:00:00 UTC+2"];

// TODO: Buatlah fungsi createDate
const createDate = (date, i) => {
  if (i === undefined) {
    const res = [];
    for (let j = 0; j < date.length; j++) {
      res.push(Date.parse(date[j]) / 1000);
    }
    return res
      .sort((a, b) => {
        return a - b;
      })
      .join("-");
  } else {
    return (Date.parse(date[i]) / 1000).toString();
  }
};

// ! JANGAN DIMODIFIKASI
(() => {
  // IIFE

  // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
  console.log(createDate?.(dates));

  // '1614841200' (dalam string)
  console.log(createDate?.(dates, 2));
})();

module.exports = {
  dates,
  createDate,
};
