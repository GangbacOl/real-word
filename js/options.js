chrome.storage.sync.get(['words'], function (result) {
    for (var item in result.words) {
        var li = document.createElement('li');
        li.innerText = result.words[item];
        document.querySelector('body > div').append(li);
    }
});
