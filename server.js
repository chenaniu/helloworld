var http = require('http'),  
//����һ��������  
server = http.createServer(function(req, res) {  
	res.writeHead(200, {  
		'Content-Type': 'text/plain' 
	});  
	res.write('hello world!');  
	res.end();  
});  
//����80�˿�  
server.listen(8888);  
console.log('server started'); 