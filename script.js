let aliceQueen = document.querySelector(".alice-queen img");
let aliceQueenMovement = aliceQueen.animate(
  [{ transform: "translateY(0%)" }, { transform: "translateY(-100%)" }],
  {
    duration: 600,
    iterations: Infinity,
    easing: "steps(7, end)",
  }
);

let backgroundMovement = document
  .querySelector(".background")
  .animate(
    [{ transform: "translateX(140rem)" }, { transform: "translateX(-380rem)" }],
    {
      duration: 15000,
      iterations: Infinity,
    }
  );

function moveFaster() {
  aliceQueenMovement.playbackRate *= 1.1;
  backgroundMovement.playbackRate *= 1.1;
}

setInterval(() => {
  if (aliceQueenMovement.playbackRate > 0.4) {
    aliceQueenMovement.playbackRate *= 0.9;
    backgroundMovement.playbackRate *= 0.9;
  }
}, 2000);

// backgroundMovement.pause();

document.addEventListener("click", moveFaster);
document.addEventListener("touchstart", moveFaster);

//-------- add raining clouds ------------------
for (let i = 0; i < 5; i++) {
  document.querySelector(".raining").innerHTML += `<img
  src="https://media.giphy.com/media/j3EExPtEdN2tbJL79M/giphy.gif"
  alt=""
/>`;
}
