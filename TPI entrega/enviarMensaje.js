function agregarPersona() {
    let hayErrores = validarCampos();
    if (hayErrores === false) {
        let email = document.getElementById('#email').value;
        let nombre = document.getElementById('#name').value;
        let telefono = document.getElementById('telefono-usuario').value;
        let mensaje = document.getElementById('telefono-usuario').value;

        let tabla = document.getElementById("tabla");

    }



    }


function validarCampos() {
    let hayErrores = false;
    
    if ($('#email').val() === '') {
        $('#validarEmail').show();
        hayErrores = true;
    } else {
        $('#validarEmail').hide();
    
    if ($('#name').val() === '') {
        $('#validarName').show();
        hayErrores = true;
    } else {
        $('#validarName').hide();
    }

    
    }

    if ($('#phone').val() === '') {
        $('#validadPhone').show();
        hayErrores = true;
    } else {
        $('#validarPhone').hide();
    }

    return hayErrores;
}


$(document).ready(function() {
    $.ajax({
            method: "GET",
            url: "https://api.open-meteo.com/v1/forecast?latitude=-31.41&longitude=-64.18&hourly=temperature_2m,precipitation_probability,windspeed_10m&current_weather=true&daily=windspeed_10m_max,precipitation_probability_max,sunrise&forecast_days=1&timezone=America%2FSao_Paulo",
        })
        .done(function(mensaje) {
            $("#temperatura").append(mensaje.current_weather.temperature);
            $("#tipotemp").append(mensaje.hourly_units.temperature_2m);
            $("#viento").append(mensaje.current_weather.windspeed);
            $("#tipovien").append(mensaje.hourly_units.windspeed_10m);
            $("#lluvia").append(mensaje.daily.precipitation_probability_max);
            $("#tipolluvia").append(mensaje.daily_units.precipitation_probability_max);
            console.log(mensaje)
        });
});

/* fallido
$(document).ready(function() {
    $.ajax({
      url: 'https://randomuser.me/api/?results=4',
      dataType: 'json',
      success: function(data) {
        $.each(data.results, function(index, user) {
          var $card = $('#persona').clone().appendTo('#personal');
          $card.find('.card-img-top').attr('src', user.picture.large);
          $card.find('.card-title').text(user.name.first + ' ' + user.name.last);
          $card.find('.card-text').text(user.email);
        });
      },
    });
  });
*/

    $.ajax({
        url: "https://randomuser.me/api/?results=4",
        dataType: "json"
      }).done(function(data) {
        var personas = data.results;

        for (var i = 0; i < personas.length; i++) {
          var persona = personas[i];
          var card = $("#user-card" + (i + 1));
          
          card.find("img").attr("src", persona.picture.large);
          card.find(".card-title").text(persona.name.first + " " + persona.name.last);
          card.find("#nacionalidad").text(persona.location.country+ ", " + persona.location.state);
          card.find("#años").text("Edad : " + persona.dob.age);
          card.find("#celular").text("N° celular : "+ persona.cell);
          card.find("#email").text(persona.email);
        }
      });
