const api = 'https://dev.to/api/articles?username=matebeing'

fetch(api)
    .then(response => response.json())
    .then(data => {
        document.getElementById("latest-anchor").href = data[0].url;
        document.getElementById("latest-anchor").target = "_blank"

        document.getElementById("latest-banner").src = data[0].cover_image;
        document.getElementById("latest-title").innerText = data[0].title;
        document.getElementById("latest-description").innerText = data[0].description;
        document.getElementById("author-avatar").src = data[0].user.profile_image_90;
        document.getElementById("author-name").innerText = data[0].user.name;

        data.forEach(element => {
           let section = document.getElementById("posts");
           let anchor = document.createElement('a');
           anchor.id = "post-element";
           anchor.href= element.url;
           anchor.target = "_blank"

           let datePost = document.createElement('time')
           datePost.innerHTML = element.published_timestamp.split("T")[0];
           datePost.id = "datePost"

           let titlePost = document.createElement('span');
           titlePost.id = "titlePost"
           titlePost.innerHTML = element.title;

           
           anchor.appendChild(datePost);
           anchor.appendChild(titlePost);


           section.appendChild(anchor)
        });

    })