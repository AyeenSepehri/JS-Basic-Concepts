function req1() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))
            // we print the title and the body of the post recived
        var title = response.data.title;
        var body = response.data.body;
        for (var i=0; i<= fetch.length; i++)
        {
           title += fetch[i] + "<br>";
           body += fetch[i] + "<br>"; 
        }
        document.getElementById("title").innerHTML = title;
        document.getElementById("body").innerHTML = body;
    }