$(document).ready(function () {
    console.log('post');
    $.post('http://localhost:3000/teleSearch',{},function (data) {
        console.log(data);
    });
});