// Jackson Matney | October 8, 2026
$(document).ready(function () {
    // Use jQuery to change the summary paragraph's text color.
    $("#summary").css("color", "#175b94");

    // Set the rules and messages for the jQuery Validation plugin.
    $("#contact-form").validate({
        errorElement: "span",
        onfocusout: false,
        onkeyup: false,
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        },
        normalizer: function (value) {
            return value.trim();
        },
        messages: {
            name: "Please enter your name.",
            email: {
                required: "Please enter your email address.",
                email: "Please enter a valid email address."
            },
            message: "Please enter a message."
        },
        invalidHandler: function () {
            $("#result").text("Please correct the highlighted fields.");
        },
        submitHandler: function () {
            $("#result").text("All fields are valid. This practice form does not send your information.");
            return false;
        }
    });

    // Clear the previous result when the user changes a field.
    $("#contact-form input, #contact-form textarea").on("input", function () {
        $("#result").text("");
    });
});
