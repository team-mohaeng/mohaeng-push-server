import sequelize from './models';
import schedule from "node-schedule";
import alarm from './controller/alarm';
import dayjs from "dayjs";

//시퀄라이즈
sequelize.authenticate()
    .then(() => {
        console.log('DB Connected.');
    }).catch((err) => {
        console.error(err);
    });

let ex = new Date();
console.log('서버시간: ' + ex);

const morning = schedule.scheduleJob('0 50 13 * * *', async function () {
  let date = new Date();
  console.log(
    `시작 시각 ${dayjs(date.toLocaleString('en', { timeZone: 'Asia/Seoul' })).format(
      'YYYY-MM-DD hh:mm:ss'
    )} 입니다.`
  );

  await alarm.morning();

  console.log(
    `종료 시각 ${dayjs(date.toLocaleString('en', { timeZone: 'Asia/Seoul' })).format(
      'YYYY-MM-DD hh:mm:ss'
    )} 입니다.`
  );
});

const evening = schedule.scheduleJob('0 51 13 * * *', async function () {
  let date = new Date();
  console.log(
    `시작 시각 ${dayjs(date.toLocaleString('en', { timeZone: 'Asia/Seoul' })).format(
      'YYYY-MM-DD hh:mm:ss'
    )} 입니다.`
  );

  await alarm.evening();

  console.log(
    `종료 시각 ${dayjs(date.toLocaleString('en', { timeZone: 'Asia/Seoul' })).format(
      'YYYY-MM-DD hh:mm:ss'
    )} 입니다.`
  );
})
