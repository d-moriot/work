function testapi(){
    $.getJSON("test.json",function(data) {
        console.log(data);
        $('#area').val(data.name)
    });
}

function zipcloud(){
        $.ajax({
          type: "GET",
          url: "https://api.github.com/search/repositories",
          async: true, //trueなら非同期処理。falseなら同期処理。
          data:{
              q: javascript
          },
          succses: function(mes){
              console.log(mes)
          }
        });
}