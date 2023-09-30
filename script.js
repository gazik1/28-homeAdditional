function task1(time) {
  time = time / 100;
  time = time % 20;
  let element = document.getElementById("task1");
  element.style.borderRadius = time + "px";
  element.style.height = time + 20 + "px";
}

function task2(time) {
  time = time / 100;
  time = time % 50;
  let element = document.getElementById("task2");
  let left = Math.cos(time * 0.5);
  let top = Math.sin(time * 0.5);
  element.style.left = time * left + 50 + "px";
  element.style.top = time * top + 100 + "px";
}

function task3(time) {
    let synk=false
  let element = [
    document.querySelector(".box-task1"),
    document.querySelector(".box-task2")
  ];
  let leave = document.getElementById("task3-leave");
  let toReturn = document.getElementById("task3-toReturn");
  let anim = [
    {
      scale: "1",
      marginBottom: "0px"
    },
    {
      scale: "0",
      marginBottom: "-150px"
    }
  ];
  leave.addEventListener("click", () => {
    if(synk){return}
    synk=true
    element.forEach(ele => {
      ele.animate(anim, {
        duration: 1000,
        fill: "both"
      });
    });
  });

  toReturn.addEventListener("click", () => {
    if(!synk){return}
    synk=false

    element.forEach(ele => {
      console.log(ele);

      ele.animate([anim[1], anim[0]], {
        duration: 1000,
        fill: "both"
      });
    });
  });
}
task3();
function animation(time) {
  task1(time);
  task2(time);

  requestAnimationFrame(animation);
}
requestAnimationFrame(animation);
