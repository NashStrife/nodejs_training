// IIFE - Immediately Invoked Function Expression
(function($){
    // shorter form for $(document).ready(function(){});
    $(function(){
        // first loading => show all restos
        showAll();

        $('.showForm').click(function(){
            showForm();
        });
        $('.backToList').click(function(){
            backToList();
        });

        $('#submitResto').click(function(e){
            e.preventDefault();
            submitResto(this);
        });
    });

    function showAll(){
        // hide some elements wich are not displayer at the first loading
        $('.formContainer').hide();
        $('.backToList').hide();
        $('.showForm').show();

        var url = "/api/restos/";
        
        $.ajax({
            url : url,
            dataType : "json",
            type : "get",
            success : function(data) {
                renderData(data);
            },
            error : function(err) {
                showError(err)
            }
        });
    }

    function renderData(data){
        // console.log(data);
        var html = '<div class="listRestos"><h2>List of restaurants</h2><ul>';
        data.map(function(item) {
            html += "<li>";
            html += '<h3>' + item.name + "</h3>";
            html += "adresse : <br />";
            html += item.address.number + "," + item.address.street + '<br/>';
            html += item.address.zip + " " + item.address.town + '<br/>';
            html += item.address.country + '<br/>';
            html += "</li>";
        });

        html += "</ul></div>";
        $('body').append(html);
    }

    function showError(err) {
        console.log(err);
    }

    function backToList(){
        $('head title').html("Index");
        $('.showForm').show();
        $('.backToList').hide();
        $('.listRestos').show();
        $('.formContainer').hide();
    }

    function showForm(){
        $('head title').html("Add a new restaurant");
        $('.showForm').hide();
        $('.backToList').show();
        $('.listRestos').hide();
        $('.formContainer').show();
    }

    function submitResto(elem) {
        var url = "/api/restos/";
        var form = $(elem).parent().parent();
        // var nameSent = form.find('#name-input').val();
        var newResto = {};
        newResto.name = form.find('#name-input').val();
        newResto.address = {};
        newResto.address.street = form.find('#street-input').val();
        newResto.address.number = parseInt(form.find('#number-input').val());
        newResto.address.zip = parseInt(form.find('#zip-input').val());
        newResto.address.town = form.find('#town-input').val();
        newResto.address.country = form.find('#country-input').val();
        // newResto.cookType = form.find('#cookType-input').val().split(",");
        // newResto.quote = parseInt(form.find('#quote-input').val());
        // newResto.pictures = {};
        // newResto.pictures.title = form.find('#pic-title-input').val();
        // newResto.pictures.link = form.find('#pic-link-input').val();
        // newResto.url = form.find('#url-input').val();
        newResto.createdAt = Date.now();
        console.log(newResto);
        $.ajax({
            url : url,
            dataType : "json",
            type : "post",
            data : newResto,
            success : function(data) {
                console.log(data);
                showAll();
            },
            error : function(err) {
                showError(err)
            }
        });
    }
})(jQuery);