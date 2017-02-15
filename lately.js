/**
 * Lately.js is a jQuery plugin that makes it easy to support automatically
 *
 * @name ViewImage.js
 * @version 1.0.0
 * @requires jQuery v2.0+
 * @author Tokin (Tokinx)
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * https://tokinx.github.io/lately/
 *
 * Copyright (c) 2017, Biji.IO
 */
(function ($) {
    $.extend({
        lately: function (options) {
            var setting = $.extend({
                    'target': '.designation time',
                    'lang': {
                        'second': '秒',
                        'minute': '分钟',
                        'hour': '小时',
                        'day': '天',
                        'month': '个月',
                        'year': '年',
                        'ago': '前',
                        'error': 'NaN',
                    }
                }, options),
                contains = $(setting.target);
            for (var i = 0; i < contains.length; i++) {
                var contain = $(contains[i]),
                    date = '';
                if ($(contain).is(":visible")) {
                    var datetime = $(contain).attr("datetime"),
                        title = $(contain).attr("title"),
                        htmls = $(contain).html();
                    if (!isNaN(new Date(datetime))) date = $.trim($(contain).attr("datetime"));
                    else if (title ? !isNaN(new Date(title = title.replace(/-/g, "/"))) : false) date = title;
                    else if (htmls ? !isNaN(new Date(htmls = htmls.replace(/-/g, "/"))) : false) date = htmls;
                    else return;
                    $(contain).html(lately_count(date));
                }
            }
            function lately_count(date) {
                var date = new Date(date),
                    second = (new Date().getTime() - date.getTime()) / 1000,
                    minute = second / 60,
                    hour = minute / 60,
                    day = hour / 24,
                    month = day / 30,
                    year = month / 12,
                    result = '';
                if (year >= 1) result = Math.floor(year) + setting.lang.year;
                else if (month >= 1) result = Math.floor(month) + setting.lang.month;
                else if (day >= 1) result = Math.floor(day) + setting.lang.day;
                else if (hour >= 1) result = Math.floor(hour) + setting.lang.hour;
                else if (minute >= 1) result = Math.floor(minute) + setting.lang.minute;
                else if (second >= 1) result = Math.floor(second) + setting.lang.second;
                else result = setting.lang.error;
                return result + setting.lang.ago;
            }
        }
    });
})(jQuery);
