interface post {
    id: number;
    title: string;
    image: string;
    body: string;
}

interface comments {
    id: number;
    postId: number;
    username: string;
    email: string;
    body: string;
}

const posts: post[] = [
    {
        id: 0,
        title: 'Post 1',
        image: '/assets/post.png',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took...'
    },
    {
        id: 1,
        title: 'Post 2',
        image: '/assets/post.png',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took...'
    },
    {
        id: 2,
        title: 'Post 3',
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
]


const postCard = document.querySelector('#postList')!

function createCard(post) {
    postCard.innerHTML += `
    <li id="post-${post.id}">
        <div class="card">
        <figure>
        <img src="${post.image}" alt="">
        <figcaption>
        <h2>
            ${post.title}
        </h2>
        <p>
            ${post.body}
        </p>
        <a class="expand" dataID="${post.id}">
            Expand...
        </a>
        </figcaption>
    </figure>
    </div>
</li>
`
}

posts.forEach((post: post) => createCard(post));

const postsLinks = document.querySelectorAll('a.expand') as NodeListOf<HTMLAnchorElement>;

postsLinks.forEach((link: HTMLAnchorElement) => {
    link.onclick = () => {
        const id = link.getAttribute('dataID');
        const expandPostObject = {
            id: id!,
            title: posts[Number(id)].title,
            body: posts[Number(id)].body,
            imageUrl: posts[Number(id)].image,
        };
        console.log(expandPostObject); //Juts to not generate errors, i will work on this feature later.
    };
});