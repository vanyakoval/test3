var http=require ('http')
http.createServer(function(request,response) {
    response.end("hello nodejs");
})
    .listen(3000,"127.0.0.1",function(){
        console.log("Сервер начал прослушивать запросы на порту 3000");
});