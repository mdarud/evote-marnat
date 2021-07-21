$("[data-trigger]").on("click", function(){
    var trigger_id =  $(this).attr('data-trigger');
    $(trigger_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
});

// close button 
$("#closer").click(function(e){
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
}); 

$(function(){
    
    //change to two ? how?
   
   $('#selectStatus').change(function(){
     var data= $(this).val();
     if (data==1) {
        console.log(data);
        $(".NRP").removeClass("d-none");
     }
     else if (data==2) $(".NRP").addClass("d-none");
     else console.error("Value invalid");        
   });
   
   $('.check')
       .val(2)
       .trigger('change');
});

$(function(){
    var selectedItem = sessionStorage.getItem("Mapeka"); 
    $('#1').val(selectedItem); 
    $('#selectMapeka').val(selectedItem);
     if ((selectedItem==1 || selectedItem==2 || selectedItem==3)) {
        $(".mapeka").removeClass("bg-light");
        $(".mapeka").addClass("bg-success");
     }
     else if (selectedItem==0) {
        $(".mapeka").removeClass("bg-success");
        $(".mapeka").addClass("bg-light");
     }     

   $('#selectMapeka').change(function(){
     var data= $(this).val();
     sessionStorage.setItem("Mapeka", data);
     $('#1').val(data);
     if ((data==1 || data==2 || data==3)) {
        $(".mapeka").removeClass("bg-light");
        $(".mapeka").addClass("bg-success");
     }
     else if (data==0) {
        $(".mapeka").removeClass("bg-success");
        $(".mapeka").addClass("bg-light");
     }     
   });
   
   $('.check')
       .val(0)
       .trigger('change');
});

$(function(){
    var selectedItem = sessionStorage.getItem("Ukor");  
    $('#2').val(selectedItem);
    $('#selectUkor').val(selectedItem);
     if ((selectedItem==1 || selectedItem==2 || selectedItem==3)) {
        $(".ukor").removeClass("bg-light");
        $(".ukor").addClass("bg-success");
     }
     else if (selectedItem==0) {
        $(".ukor").removeClass("bg-success");
        $(".ukor").addClass("bg-light");
     }     

   $('#selectUkor').change(function(){
    var data= $(this).val();
    sessionStorage.setItem("Ukor", data);
    $('#2').val(data);
    if ((data==1 || data==2 || data==3)) {
       $(".ukor").removeClass("bg-light");
       $(".ukor").addClass("bg-success");
    }
    else if (data==0) {
       $(".ukor").removeClass("bg-success");
       $(".ukor").addClass("bg-light");
    }     
  });
  
  $('.check')
      .val(0)
      .trigger('change');
});

$(function(){
    var selectedItem = sessionStorage.getItem("Vom");  
    $('#3').val(selectedItem);
    $('#selectVom').val(selectedItem);
     if ((selectedItem==1 || selectedItem==2 || selectedItem==3)) {
        $(".vom").removeClass("bg-light");
        $(".vom").addClass("bg-success");
     }
     else if (selectedItem==0) {
        $(".vom").removeClass("bg-success");
        $(".vom").addClass("bg-light");
     }    
   
   $('#selectVom').change(function(){
    var data = $(this).val();
    sessionStorage.setItem("Vom", data);
    $('#3').val(data);
    if ((data==1 || data==2 || data==3)) {
       $(".vom").removeClass("bg-light");
       $(".vom").addClass("bg-success");
    }
    else if (data==0) {
       $(".vom").removeClass("bg-success");
       $(".vom").addClass("bg-light");
    }     
  });
  
  $('.check')
      .val(0)
      .trigger('change');
});

$(function(){
    var selectedItem = sessionStorage.getItem("Menwa"); 
    $('#4').val(selectedItem); 
    $('#selectMenwa').val(selectedItem);
     if ((selectedItem==1 || selectedItem==2 || selectedItem==3)) {
        $(".menwa").removeClass("bg-light");
        $(".menwa").addClass("bg-success");
     }
     else if (selectedItem==0) {
        $(".menwa").removeClass("bg-success");
        $(".menwa").addClass("bg-light");
     }    
   $('#selectMenwa').change(function(){
    var data= $(this).val();
    sessionStorage.setItem("Menwa", data);
    $('#4').val(data);
    if ((data==1 || data==2 || data==3)) {
       $(".menwa").removeClass("bg-light");
       $(".menwa").addClass("bg-success");
    }
    else if (data==0) {
       $(".menwa").removeClass("bg-success");
       $(".menwa").addClass("bg-light");
    }     
  });
  
  $('.check')
      .val(0)
      .trigger('change');
});

$(function(){
    var selectedItem = sessionStorage.getItem("Mcuc");  
    $('#5').val(selectedItem);
    $('#selectMcuc').val(selectedItem);
     if ((selectedItem==1 || selectedItem==2 || selectedItem==3)) {
        $(".mcuc").removeClass("bg-light");
        $(".mcuc").addClass("bg-success");
     }
     else if (selectedItem==0) {
        $(".mcuc").removeClass("bg-success");
        $(".mcuc").addClass("bg-light");
     }    
   $('#selectMcuc').change(function(){
    var data= $(this).val();
    sessionStorage.setItem("Mcuc", data);
    $('#5').val(data);
    if ((data==1 || data==2 || data==3)) {
       $(".mcuc").removeClass("bg-light");
       $(".mcuc").addClass("bg-success");
    }
    else if (data==0) {
       $(".mcuc").removeClass("bg-success");
       $(".mcuc").addClass("bg-light");
    }     
  });
  
  $('.check')
      .val(0)
      .trigger('change');
});

$(function(){
    var selectedItem = sessionStorage.getItem("Bela"); 
    $('#6').val(selectedItem); 
    $('#selectBela').val(selectedItem);
     if ((selectedItem==1 || selectedItem==2 || selectedItem==3)) {
        $(".bela").removeClass("bg-light");
        $(".bela").addClass("bg-success");
     }
     else if (selectedItem==0) {
        $(".bela").removeClass("bg-success");
        $(".bela").addClass("bg-light");
     }    
   $('#selectBela').change(function(){
    var data= $(this).val();
    sessionStorage.setItem("Bela", data);
    $('#6').val(data);
    if ((data==1 || data==2 || data==3)) {
       $(".bela").removeClass("bg-light");
       $(".bela").addClass("bg-success");
    }
    else if (data==0) {
       $(".bela").removeClass("bg-success");
       $(".bela").addClass("bg-light");
    }     
  });
  
  $('.check')
      .val(0)
      .trigger('change');
});

$(function(){
    var selectedItem = sessionStorage.getItem("Teto");  
    $('#7').val(selectedItem);
    $('#selectTeto').val(selectedItem);
     if ((selectedItem==1 || selectedItem==2 || selectedItem==3)) {
        $(".teto").removeClass("bg-light");
        $(".teto").addClass("bg-success");
     }
     else if (selectedItem==0) {
        $(".teto").removeClass("bg-success");
        $(".teto").addClass("bg-light");
     }    
   $('#selectTeto').change(function(){
    var data= $(this).val();
    sessionStorage.setItem("Teto", data);
    $('#7').val(data);
    if ((data==1 || data==2 || data==3)) {
       $(".teto").removeClass("bg-light");
       $(".teto").addClass("bg-success");
    }
    else if (data==0) {
       $(".teto").removeClass("bg-success");
       $(".teto").addClass("bg-light");
    }     
  });
  
  $('.check')
      .val(0)
      .trigger('change');
});

$(function(){
    var selectedItem = sessionStorage.getItem("Seni");  
    $('#8').val(selectedItem);
    $('#selectSeni').val(selectedItem);
     if ((selectedItem==1 || selectedItem==2 || selectedItem==3)) {
        $(".seni").removeClass("bg-light");
        $(".seni").addClass("bg-success");
     }
     else if (selectedItem==0) {
        $(".seni").removeClass("bg-success");
        $(".seni").addClass("bg-light");
     }    
   
   $('#selectSeni').change(function(){
    var data= $(this).val();
    sessionStorage.setItem("Seni", data);
    $('#8').val(data);
    if ((data==1 || data==2 || data==3)) {
       $(".seni").removeClass("bg-light");
       $(".seni").addClass("bg-success");
    }
    else if (data==0) {
       $(".seni").removeClass("bg-success");
       $(".seni").addClass("bg-light");
    }     
  });
  
  $('.check')
      .val(0)
      .trigger('change');
});

$(function(){
    var selectedItem = sessionStorage.getItem("Maphac");  
    $('#9').val(selectedItem);
    $('#selectMaphac').val(selectedItem);
     if ((selectedItem==1 || selectedItem==2 || selectedItem==3)) {
        $(".maphac").removeClass("bg-light");
        $(".maphac").addClass("bg-success");
     }
     else if (selectedItem==0) {
        $(".maphac").removeClass("bg-success");
        $(".maphac").addClass("bg-light");
     }    
   $('#selectMaphac').change(function(){
    var data= $(this).val();
    sessionStorage.setItem("Maphac", data);
    $('#9').val(data);
    if ((data==1 || data==2 || data==3)) {
       $(".maphac").removeClass("bg-light");
       $(".maphac").addClass("bg-success");
    }
    else if (data==0) {
       $(".maphac").removeClass("bg-success");
       $(".maphac").addClass("bg-light");
    }     
  });
  
  $('.check')
      .val(0)
      .trigger('change');
});

function theFunction () {
    sessionStorage.clear();
    return true;
}

$('#send').click(function() {
   sessionStorage.clear();
   return true;
});





