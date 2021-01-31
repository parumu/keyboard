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
const noteKeys = new Set(['c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'a', 'A', 'b', 'B'])

let notesDiv = undefined

function handleKey(key) {
  if (key === key.toUpperCase()) { // if key is upper case, raise a half note
    key = key.toLowerCase() + "#"
  }
  if (key == "e#") key = "f"

  repeatGuard.add(key)
  notesDiv.textContent = [...repeatGuard.values()].join(" ")
  const osc = play(notes[key])
  document.body.addEventListener('keyup', event => {
    repeatGuard.delete(key)
    osc.stop()
    notesDiv.textContent = [...repeatGuard.values()].join(" ")
  })
}

function keyDown(event) {
  const key = event.key

  if (repeatGuard.has(key)) {
    return
  }
  if (noteKeys.has(key)) handleKey(key)
}

function start() {
  document.body.addEventListener('keydown', keyDown)
  notesDiv = document.getElementById('notes')
}

function play(freq) {
  const ctx = new AudioContext()
  const osc = new OscillatorNode(ctx)
  osc.frequency.value = freq
  osc.connect(ctx.destination)
  osc.start()
  return osc
}