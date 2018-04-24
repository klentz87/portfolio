window.onload = function() {
  var emailE = 'ztnel.e.sirk'.split('');
  emailE.reverse();
  emailE = emailE.join("");
  emailE = emailE + '@' + 'gmail.com';

  var address = document.querySelector('.electronicMail a')
  address.innerHTML = emailE;
  address.href = "mailto:" + emailE
  //address.style.color = '#4ebed3'
  address.style.color = '#d3d3d3'
  
     
}

/*
$( "#clickme" ).click(function() {
  $( "#book" ).animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
  }, 5000, function() {
    // Animation complete.
  });
});
*/