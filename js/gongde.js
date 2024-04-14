var a_idx = 0;
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = new Array("❤️+1", "❤️-1", "功德+1", "功德-1");
        var randomIndex = Math.floor(Math.random() * a.length); // 生成随机索引
        var randomValue = Math.floor(Math.random() * 10000); // 生成随机数值
        var randomElement = a[randomIndex].replace(/\d+/, randomValue); // 替换随机数值
        var $i = $("<span/>").text(randomElement); // 使用随机索引获取随机元素
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX, y = e.pageY;
        let scrolly = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
        y = y - scrolly;
        $i.css({
            "-webkit-user-select": "none",
            "-moz-user-select": "none",
            "-o-user-select": "none",
            "user-select": "none",
            "z-index": 999,
            "top": y - 20,
            "left": x,
            "position": "fixed",
            "font-weight": "bold",
            "color": "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        }, 1500, function () {
            $i.remove();
        });
    });
});
