interface Post {
    id: number;
    title: string;
    image: string;
    body: string;
}
declare const posts: Post[];
declare const postCard: HTMLUListElement | null;
declare function createCard(post: Post): void;
declare const postsLinks: NodeListOf<HTMLAnchorElement>;
