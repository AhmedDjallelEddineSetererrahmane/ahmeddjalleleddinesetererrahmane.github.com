//== Class definition
var DatatableJsonRemoteDemo = function () {
    //== Private functions

    // basic demo
    var demo = function () {
        $("#jstree").bind("loaded.jstree", function(event, data) {
            data.instance.open_all();
        });
        $('#jstree').jstree({
            "plugins" : ["checkbox"]
        })
    }

    return {
        // public functions
        init: function () {
            demo();
        }
    };
}();

jQuery(document).ready(function () {
    DatatableJsonRemoteDemo.init();
});