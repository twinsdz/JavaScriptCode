function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', getAllPosts);
    document.getElementById('btnViewPost').addEventListener('click', displayPost);
}

attachEvents();

async function displayPost() {
    
    const titleEl = document.getElementById('post-title');
    const bodyEl = document.getElementById('post-body');
    const ulElement = document.getElementById('post-comments');

    titleEl.textContent = 'Loading...';
    bodyEl.textContent = '';
    ulElement.replaceChildren();

    const selectedId = document.getElementById('posts').value;

    const [post, comments] = await Promise.all(
        [
            getPostById(selectedId),
            getCommentsByPostId(selectedId)
        ]
    );

    titleEl.textContent = post.title;
    bodyEl.textContent = post.body;
   

    comments.forEach(c => {
        const liElement = document.createElement('li');

        liElement.textContent = c.text;
        ulElement.appendChild(liElement);
    });
}

async function getAllPosts() {
    const url = 'http://localhost:3030/jsonstore/blog/posts';

    const res = await fetch(url);
    const data = await res.json(); // data e асициативен масив (обект)

    const selectEl = document.getElementById('posts');
    selectEl.replaceChildren();

    Object.values(data).forEach(p => {
        const optionElement = document.createElement('option');
        optionElement.textContent = p.title;
        optionElement.value = p.id;

        selectEl.appendChild(optionElement);
    });
}

async function getPostById(postId) {
    const url = 'http://localhost:3030/jsonstore/blog/posts/' + postId;

    const res = await fetch(url);
    const data = await res.json();

    return data;
}

async function getCommentsByPostId(postId) {
    const url = 'http://localhost:3030/jsonstore/blog/comments';

    const res = await fetch(url);
    const data = await res.json();

    const comments = Object.values(data).filter(c => c.postId == postId);

    return comments;
}

/* function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', getAllPosts);
    document.getElementById('btnViewPost').addEventListener('click', displayPost);
}

attachEvents();

async function displayPost() {
    
    const selectedId = document.getElementById('posts').value;

    const [post, comments] = await Promise.all(
        [
            getPostById(selectedId),
            getCommentsByPostId(selectedId)
        ]
    );

    // const post = await getPostById(selectedId);
    // const comments = await getCommentsByPostId(selectedId);

    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-body').textContent = post.body;

    const ulElement = document.getElementById('post-comments');
    ulElement.replaceChildren();

    comments.forEach(c => {
        const liElement = document.createElement('li');

        liElement.textContent = c.text;
        ulElement.appendChild(liElement);
    });
}

async function getAllPosts() {
    const url = 'http://localhost:3030/jsonstore/blog/posts';

    const res = await fetch(url);
    const data = await res.json(); // data e асициативен масив (обект)

    const selectEl = document.getElementById('posts');
    selectEl.replaceChildren();

    Object.values(data).forEach(p => {
        const optionElement = document.createElement('option');
        optionElement.textContent = p.title;
        optionElement.value = p.id;

        selectEl.appendChild(optionElement);
    });
}

async function getPostById(postId) {
    const url = 'http://localhost:3030/jsonstore/blog/posts/' + postId;

    const res = await fetch(url);
    const data = await res.json();

    return data;
}

async function getCommentsByPostId(postId) {
    const url = 'http://localhost:3030/jsonstore/blog/comments';

    const res = await fetch(url);
    const data = await res.json();

    const comments = Object.values(data).filter(c => c.postId == postId);

    return comments;
} */
