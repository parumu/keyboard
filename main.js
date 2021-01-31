const notes = {
  "c": 261.626,
  "c#": 277.183,
  "d": 293.665,
  "d#": 311.127,
  "e": 329.628,
  "f": 349.228,
  "f#": 369.994,
  "g": 391.995,
  "g#": 415.305,
  "a": 440.000,
  "a#": 466.164,
  "b": 493.883,
  "b#": 523.251,
}

const repeatGuard = new Set()

function keyDown(event) {
  const key = event.key

  if (repeatGuard.has(key)) {
    return
  }

  const handleKey = (key) => {
    if (key === key.toUpperCase()) { // if key is upper case
      key = key.toLowerCase() + "#"
    }
    if (key == "e#") key = "f"
    
    console.log(`${key.toUpperCase()} Down`)
    repeatGuard.add(key)
    const osc = play(notes[key])
    document.body.addEventListener('keyup', event => {
      console.log(`${key.toUpperCase()} Up`)
      repeatGuard.delete(key)
      osc.stop()
    })
  }

  if (key === 'c') handleKey(key)
  else if (key === 'C') handleKey(key)
  else if (key === 'd') handleKey(key)
  else if (key === 'D') handleKey(key)
  else if (key === 'e') handleKey(key)
  else if (key === 'E') handleKey(key)
  else if (key === 'f') handleKey(key)
  else if (key === 'F') handleKey(key)
  else if (key === 'g') handleKey(key)
  else if (key === 'G') handleKey(key)
  else if (key === 'a') handleKey(key)
  else if (key === 'A') handleKey(key)
  else if (key === 'b') handleKey(key)
  else if (key === 'B') handleKey(key)


}

function start() {
  document.body.addEventListener('keydown', keyDown)
}

function play(freq) {
  const ctx = new AudioContext()
  const osc = new OscillatorNode(ctx)
  osc.frequency.value = freq
  osc.connect(ctx.destination)
  osc.start()
  return osc
}