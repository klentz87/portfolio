window.onload = function() {
  var emailE = 'ztnel.e.sirk'.split('');
  emailE.reverse();
  emailE = emailE.join("");
  emailE = emailE + '@' + 'gmail.com';

  var address = document.querySelector('.electronicMail a')
  address.innerHTML = emailE;
  address.href = "mailto:" + emailE
  //address.style.color = '#4ebed3'// Keep this commented out 
  address.style.color = '#d3d3d3'
 
  $('ul').on('click', function(e){

      var clicked = e.target
      var sectionId = clicked.innerHTML.toLowerCase()
      var currentDisplay = '#' + ($('.current').attr('id'));
      console.log(sectionId);
      console.log(currentDisplay)
      if (currentDisplay != ('#' + sectionId)) {
        if (sectionId == 'about') {
          $(currentDisplay).animate(
              {left: "-200%"}, 500,
              function() {
                $('#about').animate(
                {left: '50%'})
              });
            $(currentDisplay).removeClass('current');
            $('#about').addClass('current');
            currentDisplay = '#' + ($('.current').attr('id'))
          };

        if (sectionId == 'education') {
          $(currentDisplay).animate(
              {left: "-200%"}, 500,
                function() {
                  $('#education').animate(
                  {left: '50%'})
                });
            $(currentDisplay).removeClass('current');
            $('#education').addClass('current');
            currentDisplay = '#' + ($('.current').attr('id'))
        };  

        if (sectionId == 'experience') {
          $(currentDisplay).animate(
              {left: "-200%"}, 500,
                function() {
                  $('#experience').animate(
                  {left: '50%'})
                });
            $(currentDisplay).removeClass('current');
            $('#experience').addClass('current');
            currentDisplay = '#' + ($('.current').attr('id'))
        };

        if (sectionId == 'projects') {
          $(currentDisplay).animate(
              {left: "200%"}, 500,
                function() {
                  $('#projects').animate(
                  {left: '50%'})
                });
            $(currentDisplay).removeClass('current');
            $('#projects').addClass('current');
            currentDisplay = '#' + ($('.current').attr('id'))
        };
      }
  }) //click function
} // windows.onload
