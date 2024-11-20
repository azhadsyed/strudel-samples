samples({
    bags: 'bags/0_16.wav',
  }, 'https://raw.githubusercontent.com/azhadsyed/strudel-samples/main/');
  
  stack(
    s("bags").loopAt(16).slice(32, "[11 11 . 11 11 . 10 10 . 10 10 . 12 12 . 12 12 . 14 14 . 13]/8").hpf(250).cut(1),
  ).cpm(136/2);