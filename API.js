//  const postInfo = {  title: 'foooooooo', body: 'barrrrrrrrrrrrrrrr'}
 
document.getElementById("submit").addEventListener("click",function(){
    const title = document.getElementById('title').value;
    const bodyCopntent = document.getElementById("bodyContent").value;
    const post  = {title: title, body:bodyContent}
    nowPostToServer(post);




 })

  function nowPostToServer(postInfo) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(postInfo),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((data) => console.log(data));

  }
     
     function displayUser (users){
     const userNames = users.map(users => users.username);
     const ul = document.getElementById("user-container");

      for (let i = 0; i < userNames.length; i++) {
        const username = userNames[i];
        const li = document.createElement("li");
        li.innerText.username;
        ul.appendChild(li);

 
      }
    }
