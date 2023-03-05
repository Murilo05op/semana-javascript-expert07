const { GestureDescription, Finger, FingerCurl } = window.fp;
  
const ScrollDownGesture = new GestureDescription('scroll-down'); // ✊️
const ScrollUpGesture = new GestureDescription('scroll-up'); // 🖐
const clickGesture = new GestureDescription('click') // 🫵 👈👆☝️

  
// Scroll Down
// -----------------------------------------------------------------------------
  
// thumb: half curled
// accept no curl with a bit lower confidence
ScrollDownGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
ScrollDownGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// all other fingers: curled
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  ScrollDownGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  ScrollDownGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}


// Scroll Up
// -----------------------------------------------------------------------------
// no finger should be curled
for(let finger of Finger.all) {
  ScrollUpGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}

// Click
// -----------------------------------------------------------------------------
clickGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.8)
clickGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 0.5)

clickGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
clickGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.4)

for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  clickGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
  clickGesture.addCurl(finger, FingerCurl.FullCurl, 0.9);
}
// clickGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0)
// clickGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.9)


const knowGestures = [
  ScrollDownGesture, 
  ScrollUpGesture, 
  clickGesture,
]

const gestureStrings = {
  'scroll-up': '🖐',
  'scroll-down': '✊️',
  'click': '🫵'
}
export {
  knowGestures,
  gestureStrings
}