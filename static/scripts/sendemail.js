    $(document).ready(function() {

      $("#emailBtn").click(function(){

        var email = $("#emailReg").val();

        var email1 = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        if(email == "")
        {
          
          $("#emailValidateTrue").hide();

          $("#emailValidateFalse").show(100);

        }
        
        else
        {

          var check = email1.test(email);

          if(check == true)
          {

            $("#emailValidateTrue").show(100);

            $("#emailValidateFalse").hide();

          }
          else
          {

            $("#emailValidateTrue").hide();

            $("#emailValidateFalse").show(100);

          }

        }

      })

    })