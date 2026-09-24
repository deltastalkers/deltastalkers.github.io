const snd = {
    menumove: new Howl({ src: ["audio/snd_menumove.wav"] }),
    select: new Howl({ src: ["audio/snd_select.wav"] }),
    pombark: new Howl({ src: ["audio/snd_pombark.wav"] }),
};
document.querySelectorAll(".link").forEach(e => {
    e.addEventListener("mouseenter", () => snd.menumove.play());
    e.addEventListener("click", () => snd.select.play());
});
document.getElementById("trickytony").addEventListener("click", () => {
    snd.pombark.rate(Math.random() * (1.9 - 0.6) + 0.6);
    snd.pombark.play();
});