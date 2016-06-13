// IIFE - Immediately Invoked Function Expression
(function($){
    var viewsArray = [".view-list",".view-details",".view-form"]
    // shorter form for $(document).ready(function(){});
    $(function(){
        // first loading => show all restos
        showList();

        $('.add-resto').click(function(e){
            e.preventDefault();
            showHide(".view-form");
        });

        $('.back-to-list').click(function(e){
            e.preventDefault();
            showHide(".view-list");
        });

        // submit a form
        $('#submit-Resto').click(function(e){
            e.preventDefault();
            submitResto(this);
        });
    });

    function showList(){
        // hide some elements wich are not displayer at the first loading
        showHide(".view-list");

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
        if($('.view-list'))
            $('.view-list').html("");
        var html = '<section class="view-list"><h2>List of restaurants</h2><ul>';
        data.map(function(item) {
            html += "<li>";
            html += '<h3>' + item.name + '</h3><ul>';
            html += "<li>adresse : </li>";
            html += "<li>"+item.address.number + "," + item.address.street + "</li>";
            html += "<li>"+item.address.zip + " " + item.address.town + "</li>";
            html += "<li>"+item.address.country + "</li>";
            html += '<li><button class="update-resto" value="'+ item.name +'">Update Resto</button>';
            html += '<button class="delete-resto" value="'+ item.name +'">Delete Resto</button></li>';
            html += "</ul></li>";
        });

        html += "</ul></section>";
        $('body').append(html);

        // need to put it here and not at the top of the file cause when we load the page the button doesn't exist
        $('.update-resto').click(function(e){
            e.preventDefault();
            getOne(this);
        });
    }

    function showMessage(data){
        alert(data);
    }

    function showError(err) {
        console.log(err);
    }

    function showHide(viewSel){
        viewsArray.map(function(view){
            if(view === viewSel){
                $(view).show();
            } else {
                $(view).hide();
            }
        })
    }

    function getOne(elem){
        // get data from resto thx to the element value
        var resto = $(elem).val();
        console.log(resto);
        var url = "/api/restos/search?name="+resto;
        console.log(url);
        $.ajax({
            url : url,
            dataType : "json",
            type : "get",
            success : function(data) {
                // data is an Array of objects so the resto we want is the object inside the id 0
                console.log(data[0].name);
                // send data to the function which manage the view
                showUpdateView(data[0]);
            },
            error : function(err) {
                showError(err)
            }
        });
    }

    function showUpdateView(dataFromDB){
        console.log(dataFromDB);
        showHide(".view-form");
        $('.view-form').find('h2').text("Edit a restaurant");
        var form = $('.view-form').find('form');
        console.log(form);
        form.find('#name-input').val(dataFromDB.name);
        form.find('#street-input').val(dataFromDB.address.street);
        form.find('#number-input').val(dataFromDB.address.number);
        form.find('#zip-input').val(dataFromDB.address.zip);
        form.find('#town-input').val(dataFromDB.address.town);
        form.find('#country-input').val(dataFromDB.address.country);
        form.find("#submit-Resto").val("Update Resto");
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
        // console.log(newResto);
        $.ajax({
            url : url,
            dataType : "json",
            type : "post",
            data : newResto,
            success : function(data) {
                showMessage(data);
                showList();
            },
            error : function(err) {
                showError(err)
            }
        });
    }
})(jQuery);


 // function backToList(){
    //     $('head title').html("Index");
    //     $('.add-resto').show();
    //     $('.backToList').hide();
    //     $('.view-list').show();
    //     $('.view-form').hide();
    // }

    // function showForm(){
    //     $('head title').html("Add a new restaurant");
    //     $('.add-resto').hide();
    //     $('.backToList').show();
    //     $('.view-list').hide();
    //     $('.view-form').show();
    // }