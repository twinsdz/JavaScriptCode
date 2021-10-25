window.addEventListener('load', solve);

function solve() {
    const genreField = document.getElementById('genre');
    const songField = document.getElementById('name');
    const authorField = document.getElementById('author');
    const dateField = document.getElementById('date');
    const addBtn = document.getElementById('add-btn');
    let totalLikes = 0;

    addBtn.addEventListener('click', addHandler);

    function addHandler(event){
        event.preventDefault();
        const genre = genreField.value;
        const song = songField.value;
        const author = authorField.value;
        const date = dateField.value;

        if (genre === '' || song === '' || author === '' || date === ''){
            return;
        }

        genreField.value = '';
        songField.value = '';
        authorField.value = '';
        dateField.value = '';

        const divAllHits = document.querySelector('.all-hits-container');
        const saveBtn  = e('button', { className: 'save-btn'}, 'Save song');
        const likeBtn = e('button', { className: 'like-btn'}, 'Like song');
        const deleteBtn = e('button', { className: 'delete-btn'}, 'Delete');

        const div = e('div', { className: 'hits-info'}, 
                        e('img', { src: './static/img/img.png'}),
                        e('h2', {}, `Genre: ${genre}`),
                        e('h2', {}, `Name: ${song}`),
                        e('h2', {}, `Author: ${author}`),   
                        e('h3', {}, `Date: ${date}`),
                        saveBtn,
                        likeBtn,
                        deleteBtn                
        );
        
        divAllHits.appendChild(div);

        likeBtn.addEventListener('click', () => {
            totalLikes += 1;
            likeBtn.disabled = true;
            let likesCounter = document.querySelector('#total-likes p');
            likesCounter.textContent = `Total Likes: ${totalLikes}`;
        });

        saveBtn.addEventListener('click', () => {
            const divSavedHit = document.querySelector('.saved-container');
            divSavedHit.appendChild(div);
            saveBtn.remove();
            likeBtn.remove();
        });

        deleteBtn.addEventListener('click', () => {
            div.remove();
        });
    }

    function e(type, attributes, ...content) {
        const result = document.createElement(type);
    
        for (let [attr, value] of Object.entries(attributes || {})) {
            if (attr.substring(0, 2) == 'on') {
                result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
            } else {
                result[attr] = value;
            }
        }
    
        content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);
    
        content.forEach(e => {
            if (typeof e == 'string' || typeof e == 'number') {
                const node = document.createTextNode(e);
                result.appendChild(node);
            } else {
                result.appendChild(e);
            }
        });
    
        return result;
    }
}

/* window.addEventListener('load', solve);
 
function solve() {
    const whereWeWriteNewSong = document.querySelector(".container-text form");
    const buttonAdd = whereWeWriteNewSong.querySelector("button");
    buttonAdd.addEventListener("click", addSong);
    function addSong(ev) {
        ev.preventDefault();
        const inputFields = [];
        const elements = Array.from(ev.target.parentElement.querySelectorAll("input"));
        for (const el of elements) {
            inputFields.push(el.value);
        }
 
        let allFieldsFilledIn = true;
        for (const el of inputFields) {
            if (el == "") {
                allFieldsFilledIn = false;
                break;
            }
        }
 
        if (allFieldsFilledIn) {
            addingSong(inputFields);
            for (const el of elements) {
                el.value = "";
            }
 
        }
 
    }
 
     function addingSong(inputArr) {
        const whereWeAddTheSongs = document.querySelector(".all-hits-container");
 
        const divClassHitsInfo = document.createElement("div");
        divClassHitsInfo.setAttribute("class", "hits-info");
        whereWeAddTheSongs.appendChild(divClassHitsInfo);
 
        const imgElement = document.createElement("img");
        imgElement.src = "./static/img/img.png";
        divClassHitsInfo.appendChild(imgElement);
 
        const elH2Genre = document.createElement("h2");
        elH2Genre.textContent = "Genre: " + inputArr[0];
        divClassHitsInfo.appendChild(elH2Genre);
 
        const elH2Name = document.createElement("h2");
        elH2Name.textContent = "Name: " + inputArr[1];
        divClassHitsInfo.appendChild(elH2Name);
 
        const elH2Author = document.createElement("h2");
        elH2Author.textContent = "Author: " + inputArr[2];
        divClassHitsInfo.appendChild(elH2Author);
 
        const elH3Date = document.createElement("h3");
        elH3Date.textContent = "Date: " + inputArr[3];
        divClassHitsInfo.appendChild(elH3Date);
 
        const buttonLike = document.createElement("button");
        buttonLike.setAttribute("class", "like-btn");
        buttonLike.textContent = "Like song";
        divClassHitsInfo.appendChild(buttonLike);
        buttonLike.addEventListener("click", likeFunct);
 
        const buttonSave = document.createElement("button");
        buttonSave.setAttribute("class", "save-btn");
        buttonSave.textContent = "Save song";
        divClassHitsInfo.appendChild(buttonSave);
        buttonSave.addEventListener("click", saveFunct);
        
 
        const buttonDelete = document.createElement("button");
        buttonDelete.setAttribute("class", "delete-btn");
        buttonDelete.textContent = "Delete";
        divClassHitsInfo.appendChild(buttonDelete);
        buttonDelete.addEventListener("click", deleteFunct);
 
    }
 
    function likeFunct(ev) {
        ev.target.setAttribute('disabled', 'true');
        const textTotalLikes = document.querySelector("div[class='likes']  p");
        let [mainText, numberLikes] = textTotalLikes.textContent.split(": ");
        numberLikes = Number(numberLikes);
        numberLikes++;
        textTotalLikes.textContent = mainText + ": "+ numberLikes;
    }
 
    function saveFunct(ev) {
        const elToMove = ev.target.parentElement;
        elToMove.remove();
        const childr = elToMove.children;
        childr[5].remove();
        childr[5].remove();
 
        const whereWeAddSavedSongs = document.querySelector(".saved-container");
        whereWeAddSavedSongs.appendChild(elToMove);
    }
 
    function deleteFunct(ev) {
        const elToRemove = ev.target.parentElement;
        elToRemove.remove();
    }
} */