function testapi(){
    var request = new XMLHttpRequest();
    request.open('GET', '/test.json');
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var introduction = request.response;
        console.log(introduction);
        $('#name').val(introduction.name);
        $('#age').val(introduction.age);
        $('#hobby').val(introduction.hoby[1]);
        
      };
}