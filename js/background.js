var menuItem = {
    id: 'addSelectionWord',
    title: 'Add This Word',
    contexts: ['selection'],
};

chrome.contextMenus.create(menuItem);
chrome.storage.sync.set({ words: [] });

chrome.contextMenus.onClicked.addListener(function (clickData) {
    var selectionValue = clickData.selectionText;
    chrome.storage.sync.get(['words'], function (result) {
        var currentValue = result.words;
        currentValue.push(selectionValue);
        chrome.storage.sync.set({ words: currentValue });
    });
});
