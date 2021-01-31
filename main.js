const notes = {
  "c": 261.626,
  "C#": 277.183,
  "d": 293.665,
  "D#": 311.127,
  "e": 329.628,
  "f": 349.228,
  "F#": 369.994,
  "g": 391.995,
  "G#": 415.305,
  "a": 440.000,
  "A#": 466.164,
  "b": 493.883,
  "B#": 523.251,
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
      else if (key === 'C') {
        console.log(`${keyUpper}# Down`)
        const osc = play(notes[key + "#"])
        document.body.addEventListener('keyup', event => {
          console.log(`${keyUpper}# Up`)
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
      else if (key === 'D') {
        console.log(`${keyUpper}# Down`)
        const osc = play(notes[key + "#"])
        document.body.addEventListener('keyup', event => {
          console.log(`${keyUpper}# Up`)
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
      else if (key === 'E') {
        console.log(`${keyUpper} Down`)
        const osc = play(notes['f'])
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
      else if (key === 'F') {
        console.log(`${keyUpper}# Down`)
        const osc = play(notes[key + "#"])
        document.body.addEventListener('keyup', event => {
          console.log(`${keyUpper}# Up`)
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
      else if (key === 'G') {
        console.log(`${keyUpper}# Down`)
        const osc = play(notes[key + "#"])
        document.body.addEventListener('keyup', event => {
          console.log(`${keyUpper}# Up`)
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
      else if (key === 'A') {
        console.log(`${keyUpper}# Down`)
        const osc = play(notes[key + "#"])
        document.body.addEventListener('keyup', event => {
          console.log(`${keyUpper}# Up`)
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
      else if (key === 'B') {
        console.log(`${keyUpper}# Down`)
        const osc = play(notes[key + "#"])
        document.body.addEventListener('keyup', event => {
          console.log(`${keyUpper}# Up`)
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