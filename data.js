var posts = [
    {
        id: 0,
        title: 'First posts',
        image: '/assets/post.png',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took...'
    },
    {
        id: 1,
        title: 'The second One',
        image: '/assets/post.png',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took...'
    },
    {
        id: 2,
        title: 'Hey there',
        image: '/assets/post.png',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took...'
    },
    {
        id: 3,
        title: 'Post 4',
        image: '/assets/post.png',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took...'
    },
    {
        id: 4,
        title: 'Post 5',
        image: '/assets/post.png',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took...'
    },
    {
        id: 5,
        title: 'Post 6',
        image: '/assets/post.png',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took...'
    }
];
var postCard = document.querySelector('#post-ul');
function createCard(post) {
    var li = document.createElement('li');
    var div = document.createElement('div');
    var figure = document.createElement('figure');
    var img = document.createElement('img');
    var figcaption = document.createElement('figcaption');
    var h2 = document.createElement('h2');
    var p = document.createElement('p');
    var a = document.createElement('a');
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
var postsLinks = document.querySelectorAll('a.expand');
postsLinks.forEach(function (link) {
    link.onclick = function () {
        var postId = link.getAttribute('data-id');
        if (postId !== null) {
            var post = posts.find(function (item) {
                return item.id === parseInt(postId);
            });
            if (post) {
                var encodedPost = encodeURIComponent(JSON.stringify(post));
                window.location.href = 'post.html?data=' + encodedPost;
            }
        }
    };
});
