console.log("JavaScript is working");

$(document).ready(function () {
	console.log("jQuery is ready");
	
    $("#descriptions p").hide();
    $("#descriptions img").hide();
    
    $("#mallMap a.dot").click(function () {
        // first line removes selected class from all. Second turns on selected class
        $("#mallMap a.dot").removeClass('selected');
        $(this).addClass('selected');
        
        var store = $(this).attr('store');
        
        $("#descriptions h4").text("This is store " + store);
        $("#descriptions p").hide();
        $("#descriptions img").hide();
        $("#descriptions p[store='"+store+"']").fadeIn(250);
        $("#descriptions img[store='"+store+"']").fadeIn(250);
    });
    
    $("#mallMap").click(function (e) {
        var pos = "Left: " + (e.offsetY) + "px; Top:  " + (e.offsetX) + "px";
        //alert(pos);
    });
    
    // gets thh selected category from combo box
    $("#categories select").change(function() {
        $("#descriptions p").hide();
        $("#descriptions img").hide();
        var selectedCat = $(this).val();
        $("#mallMap a.dot").removeClass("selected");
        switch(selectedCat) {
            case "ds":
                $("#descriptions h4").text("Department Stores");
                break;
            case "mw":
                $("#descriptions h4").text("Men's Wear");
                break;
            case "ww":
                $("#descriptions h4").text("Women's Wear");
                break;
            case "ss":
                $("#descriptions h4").text("Shoe Stores");
                break;
            case "ts":
                $("#descriptions h4").text("Toy Stores");
                break;
            case "fc":
                $("#descriptions h4").text("Food Court");
                break;
            case "bs":
                $("#descriptions h4").text("Book Stores");
                break;
            case "sa":
                $("#descriptions h4").text("All Stores");
                break;
        }
        
        if( selectedCat == "sa" ) {
            $("#mallMap a.dot").fadeIn(500);
        } else {
            $("#mallMap a.dot").fadeOut(500);
            $("#mallMap a.dot[cat='"+selectedCat+"']").fadeIn(500);       
        }
    })
}); // notice parenthesis here: end of $(document).ready(function())

