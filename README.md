# Lately.js

基于jQuery ，仅 800 字节却强大、好用的'Timeago'插件

## 获取

你可以直接访问Lately.js的 GitHub 来获取最新版插件，当然你也可以通过下面的链接下载Lately.js：

[lately.js][1] or [lately.min.js][2]

## 引用

首先确保你的页面已经正确引用jQuery（建议2.0+），然后再引用ViewImage.js。

    <script src="http://git.biji.io/lately/lately.min.js"></script>

## 启用

我们为您提供了非常简便的初始化方法，方便您对程序进行一些个性化设置并正确启用

    <script>
        jQuery(document).ready(function () {
            $.lately({
                'target' : '.lately-a,.lately-b,.lately-c'
            });
        });
    </script>

## 示例 http://git.biji.io/lately/#id-demo

    //datetime
    <time class="lately-a" datetime="2016-09-28T23:49:41+00:00" itemprop="datePublished" pubdate>2016-September-28</time>

    //title
    <a href="#" class="lately-b" title="2017-02-14 18:56">Any string</a>

    //html
    <a href="#" class="lately-c">2017-02-12 21:39</a>

上方代码执行效果参考如下：

datetime： 4个月前 / title：49分钟前 / html：1天前

## Time格式

支持可直传JavaScript `new Date()` 对象的时间格式。

## 本地化

插件默认为 “简体中文” 语言，但是我们提供了非常简单的接口，方便您的本地化修改。

您可以在初始化的时候连同语言一起设置：

    <script>
        jQuery(document).ready(function () {
            $.lately({
                'target' : '.lately-a,.lately-b,.lately-c',
                'lang': {
                    'second': ' Second',
                    'minute': ' Minute',
                    'hour': ' Hour',
                    'day': ' Days',
                    'month': ' Month',
                    'year': ' Years',
                    'ago': ' Ago',
                    'error': 'NaN'
                }
            });
        });
    </script>

  [1]: http://git.biji.io/lately/lately.js
  [2]: http://git.biji.io/lately/lately.min.js
