 // When the browser is ready...
  $(function() {
  
    // Setup form validation on the #register-form element
    $("#register-form").validate({
    
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
            Contact: {
                minlength: "Mobile number should contain more than 10 characters",
                number: "Mobile number should only contain digits"
            }
           
        },
      
        submitHandler: function(form) {
            form.submit();
        }
            

         });

  });