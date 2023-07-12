interface Posts {
    id: number;
    title: string;
    imageUrl: string;
    body: string;
}

interface Comments {
    id: number;
    postId: number;
    username: string;
    email: string;
    body: string;
}

