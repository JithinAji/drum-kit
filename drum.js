const soundToPlay = {
  a: "clap.wav",
  s: "hihat.wav",
  d: "kick.wav",
  f: "openhat.wav",
  g: "boom.wav",
  h: "ride.wav",
  j: "snare.wav",
  k: "tom.wav",
  l: "tink.wav",
};

document.addEventListener("keypress", (event) => {
  if (document.querySelector(`[data-key="${event.key}"]`)) {
    let element = document.querySelector(`[data-key="${event.key}"]`);
    element.classList.add("transform", "scale-125", "border-yellow-500");
    var audio = new Audio(`./asset/sounds/${soundToPlay[event.key]}`);
    audio.play();
    setTimeout(function () {
      element.classList.remove("transform", "scale-125", "border-yellow-500");
    }, 300);
  }
});
