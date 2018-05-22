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
      if (currentDisplay != ('#' + sectionId)) {
        if (sectionId == 'about') {
          $('#about').removeClass('hidden');
          $('#about').addClass('display');
          $(currentDisplay).animate(
              {left: "-220%"}, 500,
              function() {
                $('#about').animate(
                {left: '50%'})
              });
            $('#about').css('left','220%');
        /*  $(currentDisplay).addClass('hidden'); */
            $(currentDisplay).removeClass('current');
            $('#about').addClass('current');
            currentDisplay = '#' + ($('.current').attr('id'))
          };

        if (sectionId == 'education') {
          $('#education').removeClass('hidden');
          $('#education').addClass('display');
          $(currentDisplay).animate(
              {left: "-220%"}, 500,
                function() {
                  $('#education').animate(
                  {left: '50%'})
                });
            $('#education').css('left','220%');
        /*  $(currentDisplay).addClass('hidden'); */
            $(currentDisplay).removeClass('current');
            $('#education').addClass('current');
            currentDisplay = '#' + ($('.current').attr('id'))
        };  

        if (sectionId == 'experience') {
          $('#experience').removeClass('hidden');
          $('#experience').addClass('display');      
          $(currentDisplay).animate(
              {left: "-220%"}, 500,
                function() {
                  $('#experience').animate(
                  {left: '50%'})
                });
            $('#experience').css('left','220%');     
        /*  $(currentDisplay).addClass('hidden'); */
            $(currentDisplay).removeClass('current');
            $('#experience').addClass('current');
            currentDisplay = '#' + ($('.current').attr('id'))
        };

        if (sectionId == 'projects') {
          $('#projects').removeClass('hidden');
          $('#projects').addClass('display');
          $(currentDisplay).animate(
              {left: "-220%"}, 500,
                function() {
                  $('#projects').animate(
                  {left: '50%'})
                });
            $('#projects').css('left','220%');
        /*  $(currentDisplay).addClass('hidden'); */
            $(currentDisplay).removeClass('current');
            $('#projects').addClass('current');
            currentDisplay = '#' + ($('.current').attr('id'))
        };
      }
  }) //click function
} // windows.onload
