import  { CountUp }  from './countUp.js-master/countUp.js-master/dist/countUp.js';

window.onscroll = function() {
    var countUp = new CountUp('project', 71);
    countUp.start();

    var countUp2 = new CountUp('Clients', 245);
    countUp2.start();

    var countUp3 = new CountUp('Plan', 46);
    countUp3.start();

    var countUp4 = new CountUp('Likes', 72);
    countUp4.start();
  }