import express from "express";
import path from "path";
import admin from "firebase-admin";
import schedule from "node-schedule";
import dayjs from "dayjs";
import axios from "axios";
import config from "./config";
import FCM from "fcm-node";

const firebaseAccount = require(path.join(__dirname, "../journey-firebase-admin.json"));

let fcm = new FCM(firebaseAccount);
const journeyMent = [
  '잘 잤어? 나의 아기 고양이?',
  '오늘 당신의 하루가 기대되지 않아?',
  '아침은 꼭 챙겨먹고 하루를 시작하길 바라',
  '오늘 컨디션은 어때?',
  '오늘 기분은 어때?',
  '오늘도 하루를 시작해보지 않겠어?'
];

<<<<<<< HEAD
// admin.initializeApp({
//   credential: admin.credential.cert(firebaseAccount),
// });

=======
>>>>>>> dc888d0e586d1c49a07d9fc18ee6078fe8a806c0
const journeyAlarm = schedule.scheduleJob('0 */1 * * * *', async function() {
  let date = new Date();
  console.log(
    `시작 시각 ${dayjs(date.toLocaleString('en', { timeZone: 'Asia/Seoul' })).format(
      'YYYY-MM-DD hh:mm:ss'
    )} 입니다.`
  );

  let randomMent = pickRandom(journeyMent);
  console.log('멘트: ', randomMent);

  // 전체 유저의 fcm token 값들을 가져온다.
  console.log(`${config.journeyURL}/api/users`);
  // const registration_ids = await axios.get(`${config.journeyURL}/api/users`);
  const registration_ids = [
<<<<<<< HEAD
    'fZBZtMtjk0pdqiyW-Qln7-:APA91bHFcZinM88tH7GJuMFCDdhKG4Nzd4m0uQNJjvXGQ-d4B6PAbO5X72VxzsEFjcoab8EEgN3CYlV82H58StIjfPdSvFhbO1xYRsnSGB7HHw-Bj4zb44NTxD6tT6b-bx1lKhSLOwG4',
    'e_0GyXigjUp_nEwlqJXf4y:APA91bGBRb9ID8GiBpyf495pg91MGU1vGKKbtLhPxwXXeIAPGh6fbLI0Td1YVLd-9tzBn__ruqGBkG-Kzfqyq9DoiPsgRcDB7JV0ju3Ad1O-02atOCcsHAim-7yt-acsB1Fek5I5DZ1H',
    'ecVV7Tk4DEXvra9nJyre19:APA91bEyokK8ly52zRJe9u5w9ma8Zhtc9uNO-L92ZKgvq2EUBnq9USCjo1r36TXCU8RppgfFbPsB2xoKghMnkThYyRzN1mmv_lYsH5y94yGKK_mGmJKOJRMTvBswN_EEnqVml2m88FZL',
    'ep4RhYrbTHOnhzARWNTSS1:APA91bHKZFvBnREutA-c41Jczt0HO5IBCr0Xs3EZv1EqFRV_ccNlzkClT-ilfOqFMAVNaOPV1iXHB22lxkpvIEcS5n-24-g66ITuwJ5ioZZRmaWyGT7_6bP8eGPNdwvJCpQlYoWZBXGT',
    'erP1Zcfsy0cvmMIWRJc2SY:APA91bGPtMxJ3NXZoJGTwxvQ1KV8mdMunK5qk2fzI8KjIe70p-xxjII2Uy6-VHB3dCDdeqU0_oQenLdD_dae3WG1Njdm_ZkC0brWenDWocUqbuAFoKLoO18gudcdn-4JXiBSknnPHsEJ',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNjI2MzY3NzEwfQ.uG4ef0NSaAl4OJSjg_UsR5EG6B-IJkXKAc3dR9LYgcQ',
    'dECshRlkeUGJv9iaWdlvj8:APA91bEA5exwcnj-BB2_3JWIfl29z8pPW6xwDSae5Gyy5slw5Y012CYDpr80xmj9Jo-Epu_XZyBPZSvqz6zs4mWhAiQPcC_5KyruANrAIW7GyBGlri7GAR9xrQGjAMexj_NMXYfkdpV8',
    'foI117BUTi-b_r47PMYZYz:APA91bHzyh3vdJnYECr0wMJ2n6SQdrZec1qFJasxozNMXOAAkQvXHU9SVy19qB6MSnP3LUFGwb_wl0a21UyI22-kQOFHJGR9y0VBreVLIAbMqlvINLU_zR2kt2CqSaQht6-LCXsWqDfX'
=======
    'cJ6mDN_UgEkhuUQA3oFHIh:APA91bFT5aQlSorSHspFrVEtPddePoFlwtiNgc_g_l7JR0DVnGADMyLhyjgQa9E7Twh4RfPdLOODbOn_2hqgLZrcZns2O4nKrnESCTICZaFZM-WBv4fDA-2WoBA4otm-9Y68rbdoRlBr'
>>>>>>> dc888d0e586d1c49a07d9fc18ee6078fe8a806c0
  ]
  console.log(registration_ids)
  
  const message = {
    registration_ids:  registration_ids,
    notification: {
<<<<<<< HEAD
      title: '작업하고있니 우리 아기 고양이?',
=======
      body: randomMent,
>>>>>>> dc888d0e586d1c49a07d9fc18ee6078fe8a806c0
    },
  };

  fcm.send(message, function(err, response){
    if (err) {
      console.log("FAIL");
      console.error(err.message);
    } else {
      console.log("SUCCESS");
      console.log(response);
    }
  });
  console.log(
    `종료 시각 ${dayjs(date.toLocaleString('en', { timeZone: 'Asia/Seoul' })).format(
      'YYYY-MM-DD hh:mm:ss'
    )} 입니다.`
  );
<<<<<<< HEAD
})
=======
});

function pickRandom(array: string[]) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
};
>>>>>>> dc888d0e586d1c49a07d9fc18ee6078fe8a806c0
