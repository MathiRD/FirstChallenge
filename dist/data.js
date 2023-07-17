"use strict";
const posts = [
    {
        id: 0,
        title: 'First post',
        image: '/assets/post.png',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        id: 1,
        title: 'The second One',
        image: '/assets/post.png',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        id: 2,
        title: 'Hey there',
        image: '/assets/post.png',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        id: 3,
        title: 'Post 4',
        image: '/assets/post.png',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        id: 4,
        title: 'Post 5',
        image: '/assets/post.png',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        id: 5,
        title: 'Post 6',
        image: '/assets/post.png',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }
];
const postCard = document.querySelector('#post-ul');
function createCard(post) {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const figcaption = document.createElement('figcaption');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const a = document.createElement('a');
    li.id = 'post-' + post.id;
    div.className = 'card';
    img.src = post.image;
    h2.textContent = post.title;
    p.textContent = post.body;
    a.className = 'expand';
    a.setAttribute('data-id', post.id.toString());
    a.textContent = 'Expand...';
    figcaption.appendChild(h2);
    figcaption.appendChild(p);
    figcaption.appendChild(a);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    div.appendChild(figure);
    li.appendChild(div);
    postCard === null || postCard === void 0 ? void 0 : postCard.appendChild(li);
}
posts.forEach(function (post) {
    createCard(post);
});
const postsLinks = document.querySelectorAll('a.expand');
postsLinks.forEach(function (link) {
    link.onclick = function () {
        const postId = link.getAttribute('data-id');
        if (postId !== null) {
            const post = posts.find(function (item) {
                return item.id === parseInt(postId);
            });
            if (post) {
                const encodedPost = encodeURIComponent(JSON.stringify(post));
                window.location.href = 'post.html?data=' + encodedPost;
            }
        }
    };
});
