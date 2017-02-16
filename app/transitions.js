// refernce,  http://ember-animation.github.io/liquid-fire/

export default function(transition){
 
//  set a default transition 
  this.transition (
    this.use('scale'),
    this.reverse('fade')
  );

// The text below is the example to specify the effect for a specific route

  this.transition(
    this.fromRoute('home'),
    this.toRoute('jobs'),
    this.use('fade'),
    this.reverse('fade')
  );

  
  
  //  transition delay
  this.transition(
    this.hasClass('wait-demo'),
    this.use('wait', 1000, { then: 'fade' })
  );

  //  to se a default transition use , the block below. using this.toValue(true);

  // this.transition(
  //   this.toValue(true),
  //   this.use('scale', { duration: 500 }),
  //   this.reverse('toUp', { duration: 500 })
  // );
  
  this.transition(
    this.childOf('.animate-scale'),
    this.use('scale', { duration: 500 }),
    this.reverse('toUp', { duration: 500 })
  );

   this.transition(
    this.childOf('.animate-fade'),
    this.use('fade', { duration: 500 }),
    this.reverse('toUp', { duration: 500 })
  );

  this.transition(
    this.childOf('.animate-crossFade'),
    this.use('crossFade', { duration: 1000 }),
    this.reverse('toLeft', { duration: 1000 })
  );


  this.transition(
    this.childOf('.animate-wait'),
    this.use('wait', 500, { then: 'fade' })
  );

  let duration = 2000;
  this.transition(
    this.childOf('.explode-demo-1'),
    this.use('explode', {
      pickOld: 'h3',                // Find an "h3" in the old template. This
                                    // can be any CSS selector.

      use: ['toUp', {duration}]   // And animate it upward. This can
                                  // be any arbitrary transition, and
                                  // its optional parameters.

    }, {
      pickNew: 'h3',                // Find an "h3" in the new template

      use: ['toDown', {duration}] // And animate it downward.

    }, {
      // For everything else that didn't match the above, use a
      // fade. I'm giving the fade half as much duration because fade
      // includes both fading out and fading in steps, each of which
      // spends `duration` milliseconds.
      use: ['fade', {duration: duration / 2}]
    })
  );
  

}
