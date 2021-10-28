const http=require('http'); //grabbing the http module 
const server =http.createServer((req,res)=>{
    // console.log(req);
if (req.url ==='/'){        //here the if condition is checking if the url is the homepage
    res.end("Welcome to our home age")

}


if (req.url === '/about'){

        res.end("here is our short history");
    }

    res.end(`<h1> Oops! </h1>
    <p> we can't find the page you are looking for </p>
    <a href="/">back home</a>
    `)
});
server.listen(5000); // defines what port our server listens to