const soundContainer = document.getElementById("sound-container");
const header = document.getElementById("header");

const soundMap = {
    1: 'work_it',
    2: 'make_it',
    3: 'do_it',
    4: 'makes_us',
    q: 'harder',
    w: 'better',
    e: 'faster',
    r: 'stronger',
    a: 'more_than',
    s: 'hour',
    d: 'our',
    f: 'never',
    z: 'ever',
    x: 'after',
    c: 'work_is',
    v: 'over'
}

document.addEventListener('keydown', (e) => {
    const keyPressed = e.key;
    const sound = soundMap[keyPressed];
    if (sound) {
        playSound(sound);
    }
})

for (let key in soundMap) {
    const soundElement = document.createElement('div');
    soundElement.id = soundMap[key];
    soundElement.classList.add('sound-button');
    soundContainer.append(soundElement);

    const textElement = document.createElement('p');
    textElement.textContent = `${key} \> ${soundMap[key]}`
    soundElement.append(textElement);

    soundElement.addEventListener('click', () => playSound(soundMap[key]))
}

const playSound = (sound) => {
    const button = document.getElementById(sound);
    button.classList.add('active');
    header.classList.toggle('active');

    const audio= new Audio(`./sounds/${sound}.wav`);
    audio.volume = 0.3;
    audio.play();

    setTimeout(() => {
	button.classList.remove('active');
    }, 500);
}
