var initBrowseButton = function () {
    var browseButton = document.querySelector('.browse');
    if (!browseButton) {
        return;
    }
    browseButton.onclick = function (e) {
        e.preventDefault();
        var file = document.querySelector('#file');
        if (file) {
            file.click();
        }
    }
};

window.onload = function() {
    initBrowseButton();
    $('.nav.nav-tabs.nav-order a').on('click', function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
};

