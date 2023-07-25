setTimeout(function timer1() {
  console.log("This is first log");
  setTimeout(function timer2() {
    console.log("This is second log");
    setTimeout(function timer3() {
      console.log("This is third log");
      setTimeout(function timer4() {
        console.log("This is fourth log");
        setTimeout(function timer5() {
          console.log("This is fifth log");
          setTimeout(function timer6() {
            console.log("This is sixth log");
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);
