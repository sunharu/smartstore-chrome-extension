function matching(user) {
    chrome.tabs.executeScript({
        code:'document.querySelector("body").innerText'
    }, function(result) {
        // After executing 'code'
       
        var bodyText = result[0];
        var bodyNum = bodyText.split(' ').length;
        var myNum = bodyText.match(new RegExp('\\b('+ user +')\\b', 'gi')).length;
    
        var per = myNum/bodyNum*100;
        per = per.toFixed(2);
    
        document.querySelector('#result').innerText = myNum+'/'+bodyNum +'('+ per +'%)';
    });
}

// 크롬 스토리지에 저장된 값 가져오기
chrome.storage.sync.get(function(data) {
    document.querySelector('#user').value = data.userWords;
    matching(data.userWords);
});

// #user 입력 값이 변경되었을 때
document.querySelector('#user').addEventListener('change', function() {
    var user = document.querySelector('#user').value;

    // 크롬 스토리지에 입력 값 저장
    chrome.storage.sync.set({
        userWords:user
    });

    matching(user);
});