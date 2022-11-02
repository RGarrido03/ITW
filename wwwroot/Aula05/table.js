function changeHide(chosen){
    var list = ['aveiro','vilareal','faro'];

    $("#"+chosen).removeClass('d-none');
    $("#"+chosen+"_nav").addClass('active');

    var filtered = list.filter(function(value){ 
        return value != chosen;
    });

    $("#"+filtered[0]).addClass('d-none');
    $("#"+filtered[0]+"_nav").removeClass('active');
    $("#"+filtered[1]).addClass('d-none');
    $("#"+filtered[1]+"_nav").removeClass('active');
};