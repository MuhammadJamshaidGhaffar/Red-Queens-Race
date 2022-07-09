let aliceQueen = document.querySelector(".alice-queen img");
let aliceQueenMovement = aliceQueen.animate(
  [{ transform: "translateY(0%)" }, { transform: "translateY(-100%)" }],
  {
    duration: 600,
    iterations: Infinity,
    easing: "steps(7, end)",
  }
);

function moveFaster() {
  aliceQueenMovement.playbackRate *= 1.1;
}

document.addEventListener("click", moveFaster);
document.addEventListener("touchstart", moveFaster);
