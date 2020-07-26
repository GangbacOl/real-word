chrome.storage.sync.get(['words'], function (result) {
    if (!result.words[0]) {
        var li = document.createElement('span');
        li.innerText = '저장한 단어가 없음.';
        document.querySelector('body > div.main > div').append(li);
    }
    for (var i = result.words.length - 1; i > result.words.length - 4; i--) {
        if (!result.words[i]) break;
        var li = document.createElement('li');
        li.innerText = result.words[i];
        document.querySelector('body > div.main > div').append(li);
    }
});
