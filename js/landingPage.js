 // When the browser is ready...
  $(function() {


$("#DOB").datepicker({
         "autoclose": true,
     orientation: "auto bottom"
 });


    // Setup form validation on the #register-form element
    $("#register-form").validate({
         errorPlacement: function (error, element) {
            error.appendTo(".errors");
        },
        // Specify the validation rules
        rules: {
            Name: "required", 
            Email: {
                required: true,
                email: true
            },
            Password: {
                required: true,
                minlength: 5
            },
            ConfirmPassword: {
                required: true,
                equalTo: "#Password"
            },
			 DOB: {
                required: true
            },
            Contact: {
                minlength: 10,
                number: true
            }
  
        },
            // Specify the validation error messages
        messages: {
            Name: "Please enter your Name",         
            Password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            Email: {
            	required : "Please enter an email address",
            	email :"email address is not valid"
            },
            ConfirmPassword: {
                required: "Confirm password is required",
                equalTo: "Passwords should match"
            },
			 DOB : {
                required : "Please enter date of birth"
            },
            Contact: {
                minlength: "Mobile number should contain more than 10 characters",
                number: "Mobile number should only contain digits"
            }
           
        },
         showErrors: function (errorMap, errorList) {
            $("#register-form").find("input").each(function () {
                $(this).removeClass("error");
            });
            $(".errors").html("");
            if (errorList.length) {
                $(errorList[0]['element']).addClass("error");
                var elem = $(errorList[0]['element']).next();
                elem.html(errorList[0]['message']);
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
            

         });

  });