//This is my Shepard.js tutorial test
//https://javascript.info/hello-world
//http://github.hubspot.com/shepherd/
//https://code.tutsplus.com/tutorials/how-to-build-a-user-tour-with-shepherd-in-javascript--cms-28509


/*
<link rel="stylesheet" href="shepard/css/shepherd-theme-arrows.css" />
<script src="shepard/js/tether.min.js"></script>
<script src="shepard/js/shepherd.min.js"></script>
<script src="tutorial.js"></script>
*/

//window.alert("Hello!");

var tour = new Shepherd.Tour({
  defaults: {
    classes: 'shepherd-theme-arrows',
    scrollTo: true
  }
});

tour.addStep('tut-1', {
  text: 'This is where you can change your user settings!',
  attachTo: '.tut-1 bottom',
  classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
  buttons: [
    {
      text: 'Next',
      action: tour.next
    },
    {
      text: 'Stop',
      action: tour.cancel
    }
  ]
});

tour.addStep('tut-2', {
  text: 'This is a new dashboard panel, it tells cool things!',
  attachTo: '.tut-2 bottom',
  classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
  buttons: [
    {
      text: 'done!',
      action: tour.complete
    }
  ]
});

tour.start();
