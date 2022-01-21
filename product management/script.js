



    $.ajax({
        url: 'allpro.json',
        dataType: 'json',
        success: function(data) {
            for (var i=0; i<data.length; i++) {
                var row = $('<tr><td>' + data[i].ProductID+ '</td><td>' + data[i].Price + ' Dh'+'</td><td>' + data[i].designation + '</td><td> <img class="imag" src="'+data[i].Productsimege +'" alt=""></td><td>' + data[i].category + '</td><td>' + data[i].availability + '</td><td> Company Name : ' + data[i].supplier.Company_name + ' <br /> Adresse : ' + data[i].supplier.Adresse + ' </td><td><button type="button" class="btn" id="shps">Shop</button><button type="button" class="btn" >Add</button></td></tr>');
                $('#tables').append(row);
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('Error: ' + textStatus + ' - ' + errorThrown);
        }
    });





    $(document).ready(function(){
        $("#formserch").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#tables tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      });

      $(document).ready(function($) { 
        $("#tables").stupidtable();
       }); 