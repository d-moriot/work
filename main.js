function testapi(){
    $.getJSON("test.json",function(data) {
        console.log(data);
    });

    $.ajax({
        type: json,
        url: test,
        async: true, //trueなら非同期処理。falseなら同期処理。
        succses: function(mes){
            console.log(mes)
            $('#area').val(mes.name)
        }
      });
}

function zipcloud(){
        $.ajax({
          type: "GET",
          url: "http//zipcloud.ibsnet.co.jp/api/search",
          async: true, //trueなら非同期処理。falseなら同期処理。
          data:{
              zipcode: 1300002
          },
          succses: function(mes){
              console.log(mes)
          }
        });
}