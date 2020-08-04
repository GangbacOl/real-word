var menuItem = {
    id: 'addSelectionWord',
    title: 'Add This Word',
    contexts: ['selection'],
};

chrome.contextMenus.create(menuItem);
chrome.storage.sync.set({
    wordsList: [
        {
            date: new Date().format('yyyy-MM-dd(KS)'),
            words: [],
        },
    ],
});

chrome.contextMenus.onClicked.addListener(function (clickData) {
    var selectionValue = clickData.selectionText;
    console.log(selectionValue);
    chrome.storage.sync.get(['wordsList'], function (storageData) {
        console.log(storageData);
        var currentValue = storageData;
        currentValue.wordsList[0].words.push(selectionValue);
        chrome.storage.sync.set({ wordsList: currentValue.wordsList });
    });
});
