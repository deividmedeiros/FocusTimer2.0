import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countdown()
  sounds.buttonPressAudio.play()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
  sounds.buttonPressAudio.play()

}

export function timerPlus() {
  sounds.buttonPressAudio.play()

  timer.updateDisplay(Number(el.minutes.textContent) + 5);
}

export function timerMinus() {
  sounds.buttonPressAudio.play()

  if(Number(el.minutes.textContent) >= 5){
    timer.updateDisplay(Number(el.minutes.textContent) - 5);
    return
  }
}

export function forest() {
  state.isMusic = document.documentElement.classList.toggle('music-on')
  
  if(state.isMusic == true){
    sounds.Floresta.play()
  } 
  else{
    sounds.Floresta.pause()
  }
  
}

export function coffeShop() {
  state.isMusic = document.documentElement.classList.toggle('music-on')
  
  if(state.isMusic === true){
    sounds.Cafeteria.play()
  } 
  else{
    sounds.Cafeteria.pause()
  }
  
}

export function campFire() {
  state.isMusic = document.documentElement.classList.toggle('music-on')
  
  if(state.isMusic === true){
    sounds.Lareira.play()
  } 
  else{
    sounds.Lareira.pause()
  }
  
}

export function rain() {
  state.isMusic = document.documentElement.classList.toggle('music-on')
  
  if(state.isMusic === true){
    sounds.Chuva.play()
  } 
  else{
    sounds.Chuva.pause()
  }
  
}