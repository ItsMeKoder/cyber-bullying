const synth = window.speechSynthesis;

const textToSpeech = (string,toSpeak=false) => {
  if (!toSpeak){
    return
  }
  let voice = new SpeechSynthesisUtterance(string);
  voice.text = string;
  voice.lang = "en-US";
  voice.volume = 1;
  voice.rate = 2;
  voice.pitch = 1; // Can be 0, 1, or 2
  synth.speak(voice);
}
