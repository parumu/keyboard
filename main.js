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
}

function addHooks() {
  document.body.addEventListener('keydown',
    event => {
      const key = event.key
      const keyUpper = event.key.toUpperCase()
      if (key === 'c') {
        console.log(`${keyUpper} Down`)
        const osc = play(notes[key])
        document.body.addEventListener('keyup', event => {
          console.log(`${keyUpper} Up`)
          osc.stop()
        })
      }
      else if (key === 'd') {
        console.log(`${keyUpper} Down`)
        const osc = play(notes[key])
        document.body.addEventListener('keyup', event => {
          console.log(`${keyUpper} Up`)
          osc.stop()
        })
      }
      else if (key === 'e') {
        console.log(`${keyUpper} Down`)
        const osc = play(notes[key])
        document.body.addEventListener('keyup', event => {
          console.log(`${keyUpper} Up`)
          osc.stop()
        })
      }
      else if (key === 'f') {
        console.log(`${keyUpper} Down`)
        const osc = play(notes[key])
        document.body.addEventListener('keyup', event => {
          console.log(`${keyUpper} Up`)
          osc.stop()
        })
      }
      else if (key === 'g') {
        console.log(`${keyUpper} Down`)
        const osc = play(notes[key])
        document.body.addEventListener('keyup', event => {
          console.log(`${keyUpper} Up`)
          osc.stop()
        })
      }
      else if (key === 'a') {
        console.log(`${keyUpper} Down`)
        const osc = play(notes[key])
        document.body.addEventListener('keyup', event => {
          console.log(`${keyUpper} Up`)
          osc.stop()
        })
      }
      else if (key === 'b') {
        console.log(`${keyUpper} Down`)
        const osc = play(notes[key])
        document.body.addEventListener('keyup', event => {
          console.log(`${keyUpper} Up`)
          osc.stop()
        })
      }
    }
  )
}

function play(freq) {
  const ctx = new AudioContext()
  const osc = new OscillatorNode(ctx)
  osc.frequency.value = freq
  osc.connect(ctx.destination)
  osc.start()
  return osc
}