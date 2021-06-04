function sameAs()
          {
              if (sameInfo.checked == true)
              {
                  var shNam = document.getElementById("shippingName").value;
                  var shStr = document.getElementById("shippingStreet").value;
                  var shCit = document.getElementById("shippingCity").value;
                  var shSta = document.getElementById("shippingState").value;    
                  var shZip = document.getElementById("shippingZip").value;           

                
                  var copyNam = shNam;
                  var copyStr = shStr;
                  var copyCit = shCit;
                  var copySta = shSta;
                  var copyZip = shZip;
                  

                  document.getElementById("billingName").value = copyNam;
                  document.getElementById("billingStreet").value = copyStr;
                  document.getElementById("billingCity").value = copyCit;
                  document.getElementById("billingState").value = copySta;
                  document.getElementById("billingZip").value = copyZip;
              }

              else if (sameInfo.checked == false)
              {
                  document.getElementById("billingName").value = '';
                  document.getElementById("billingStreet").value = '';
                  document.getElementById("billingCity").value = '';
                  document.getElementById("billingState").value = '';
                  document.getElementById("billingZip").value = '';
              }
          }

function placeOrder() {
           document.getElementById("myForm").submit();
        }


        var size = document.getElementById("selectSize");
        var quantity = document.getElementById("selectQuantity")
        var price = document.getElementById("price");
        price.innerHTML = "$" + size.value;
        size.onchange = function () {
            price.innerHTML = "$" + (size.value * quantity.value);
        }
        quantity.onchange = function () {
            price.innerHTML = "$" + (size.value * quantity.value);
        }

        var addItem = document.getElementById('addCart');
        var items = document.getElementById('cartItems');
        var count = parseInt(items.innerHTML);
        addItem.addEventListener("click", function (event) {
            count = parseInt(items.innerHTML);
            items.innerHTML = count + parseInt(quantity.value);
        });
        
        