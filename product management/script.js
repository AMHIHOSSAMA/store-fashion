
    // $.getJSON('allpro.json',function(data){
    //     var products_data = '';
    //     $.each(data, function(key, value){
    //         products_data += '<tr>'
    //         products_data += '<td>'+value.ProductID+'</td>';
    //         products_data += '<td>'+value.designation+'</td>';
    //         products_data += '<td>'+value.Productsimege+'</td>';
    //         products_data += '<td>'+value.category+'</td>';
    //         products_data += '<td>'+value.availability+'</td>';
    //         products_data += '<td>'+value.supplier+'</td>';
    //         products_data += '</tr>';
    //     });
    //     $('#table').append(products_data);
    //     console.log(data)
    // });


    $.ajax({
        url: 'allpro.json',
        dataType: 'json',
        success: function(data) {
            for (var i=0; i<data.length; i++) {
                var row = $('<tr><td>' + data[i].ProductID+ '</td><td>' + data[i].designation + '</td><td> <img class="imag" src="'+data[i].Productsimege +'" alt=""></td><td>' + data[i].category + '</td><td>' + data[i].availability + '</td><td> Company Name : ' + data[i].supplier.Company_name + ' <br /> Adresse : ' + data[i].supplier.Adresse + ' </td></tr>');
                $('#tables').append(row);
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('Error: ' + textStatus + ' - ' + errorThrown);
        }
    });
