//== Class definition
var Select2_custom = function() {
    //== Private functions
    var demos = function() {
       // tagging support
        $('#m_select2_email').select2({
            placeholder: "Recipient Email",
            tags: true,
            width : '100%'
        });

    }
    //== Public functions
    return {
        init: function() {
            demos();
        }
    };
}();

//== Initialization
jQuery(document).ready(function() {
    Select2_custom.init();
});
