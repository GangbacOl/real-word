CLIENT_ID = 'B61JvRHm5PkonxZzru0O';
CLIENT_SECRET = 'y6X0iowqJh';

fetch(`http://localhost:3000/translate`, {
    method: 'POST',
    text: 'apple',
})
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

chrome.storage.sync.get(['words'], function (result) {
    for (var item in result.words) {
        var li = document.createElement('li');
        li.innerText = result.words[item];
        document.querySelector('body > div.main > div').append(li);
    }
});
