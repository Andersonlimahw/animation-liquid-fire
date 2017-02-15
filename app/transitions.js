export default function(){
  this.transition(
    this.fromRoute('home'),
    this.toRoute('jobs'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('jobs'),
    this.toRoute('contact'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  //  transition delay
   this.transition(
    this.hasClass('wait-demo'),
    this.use('wait', 1000, { then: 'fade' })
  );



  this.transition(
    this.toValue(true),
    this.use('scale', { duration: 500 }),
    this.reverse('toUp', { duration: 500 })
  );

  let duration = 2000;
  this.transition(
    this.childOf('#explode-demo-1'),
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
