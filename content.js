chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (sender.tab != undefined) {
            return;
        }

        if (request.action != 'browserAction.onClicked') {
            return;
        }

        var page_pattern = /https?:\/\/xueqiu\.com\/\d+\/\d+\/?/;
        if (!page_pattern.test(request.url)) {
            return;
        }

        $('nav').remove();
        $('.nav__placeholder').remove();
        $('footer').remove();
        $('.article__widget').remove();
        $('.article__meta').remove();
        $('.article__comment').remove();
        $('.go-to-top').remove();
        $('.button.button-sm.user__follow').remove();

        $('.container.article__container').css('margin-bottom', '36px');
    });
