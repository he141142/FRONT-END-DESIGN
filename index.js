import { CountUp } from "./node_modules/countup.js/dist/countUp.js"


window.onscroll = function() {
    var countUp = new CountUp('Graduates', 45);
    countUp.start();
    var countUp2 = new CountUp('Certified', 165);
    countUp2.start();
    var countUp3 = new CountUp('Student', 563);
    countUp3.start();
    var countUp4 = new CountUp('Awards', 245);
    countUp4.start();
  }