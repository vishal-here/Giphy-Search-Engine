if(document.querySelector("input").value == ""){
  document.querySelector("button").disabled = true ;
}

  document.querySelector("button").addEventListener('click',function(){

    var input = document.querySelector("input").value;

    var url = "http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=bP9naXeufaucEkgb9E2vpuK8bBcnTc4B";
       var cont1 = document.querySelector(".container");
    cont1.innerHTML = "<h1>Search Results ...... </h1>" ;
    make_ajax_call(url) ;

  });

  document.querySelector("input").addEventListener('keyup',function(e){

     var input = document.querySelector("input").value;

     if(document.querySelector("input").value == ""){
  document.querySelector("button").disabled = true ;
}
else{
  document.querySelector("button").disabled = false ;
}

    // if the key ENTER is pressed...
 
    if(e.which == 13) {
    var url = "http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=bP9naXeufaucEkgb9E2vpuK8bBcnTc4B";
    console.log(url) ;

     var cont1 = document.querySelector(".container");
    cont1.innerHTML = "<h1>Search Results ...... </h1>" ;
     
     make_ajax_call(url) ;
    }

  });

  /* 2. do the data stuff with the API */

  function make_ajax_call(url){


  var GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open( 'GET', url );
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener('load',function(e){
   

    var data= e.target.response;
   // console.log(data);
    var input2 = JSON.parse(data) ;

    for(var i=0 ; i< input2.data.length ; i++){
      console.log(input2.data[i].images.fixed_height.url) ;
      pushToDOM(input2.data[i].images.fixed_height.url) ; 
    }
    console.log(input2) ;
   

  });



  }



  /* 3. Show me the GIFs */

  function pushToDOM(input2) {

    var cont = document.querySelector(".container");

    console.log(cont) ;
    cont.innerHTML += "<img src=\"" + input2 + "\" class=\".container-image\">";

  }