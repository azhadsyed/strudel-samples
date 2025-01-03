samples('github:azhadsyed/strudel-samples');
  
setcps(160/60/4)

// TODO add stutter bass effect
s("bags:1").loopAt(32).slice(64, "<[3!6 2!6 2.25!4]!2 [4!7 5!4 5.25!5] [6!9 7!4 7.25!3]>").slow(2).cut(1).speed(0.01)