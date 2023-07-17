interface comment {
    id: number;
    postId: number;
    username: string;
    email: string;
    body: string;
}
declare function formatComment(comment: any): string;
declare const urlParams: URLSearchParams;
declare const encodedPost: string | null;
declare const decodedPost: string;
declare const post: any;
declare const postTitle: HTMLHeadingElement;
declare const postImage: HTMLImageElement;
declare const postBody: HTMLParagraphElement;
declare const commentsList: HTMLUListElement;
declare const comments: comment[];
declare const postComments: comment[];
