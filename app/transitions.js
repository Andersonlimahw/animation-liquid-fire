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

  this.transition(
    this.toValue(true),
    this.use('scale', { duration: 1000 }),
    this.reverse('toUp', { duration: 1000 })
  );


};
