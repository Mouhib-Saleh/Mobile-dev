
   
    $("#b1").click(f2)
    function f2() {
        x1=$("#S1").val()
        x2=$("#S2").val()
        x3=$("#Am").val()
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from="+x1+"&to="+x2+"&amount="+x3+"",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
                "x-rapidapi-key": "b606ee6facmshba1c53fecd47f54p13a5cajsnd88a528c7a3d"
            }
        }
        
        $.ajax(settings).done(function (response) {
            console.log(response);
            
            var code=`<tr><td>Operation Status</td><td>${response.status}</td></tr>
                 <tr><td>Data update</td><td>${response.updated_date}</td></tr>
                 <tr><td>Rate for Currency</td><td>${response.rates[x2].rate}</td></tr>
                 <tr><td>New Amount</td><td>${response.rates[x2].rate_for_amount}</td></tr>
                 
                 `
    $("#tb").append(code)
        });
    
       
    }

    