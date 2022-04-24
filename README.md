# Lately.js

Native JavaScript, only 800 Byte but simple and easy to use Timeago plugin

[简体中文][3] / [English][4]

## Get

You can access Lately.js' GitHub directly to get the latest version of the plug-in, or download Lately.js via link:

[lately.js][1] or [lately.min.js][2]

## Reference

Just put lately.js on your page.

    <script src="//tokinx.github.io/lately/lately.min.js"></script>

## Enable

We give you a very simple initialization method so you can personalize your program and enable it correctly

    <script>
        window.Lately && Lately.target('time, .lately').init();
    </script>

## Example: https://tokinx.github.io/lately

    //datetime
    <time class="lately" datetime="2016-09-28T23:49:41+00:00" itemprop="datePublished" pubdate>2016-September-28</time>

    //title
    <a href="#" class="lately" title="2017-02-14 18:56">Any string</a>

    //html
    <a href="#" class="lately">2017-02-12 21:39</a>

The code above performs as follows:

- DateTime：3YearsAgo
- Title：3YearsAgo
- HTML：3YearsAgo

## Format

Supports time formats that can be passed directly to JavaScript objects.  `new Date()`

## Localization

The plug-in defaults to the "Chinese Simplified" language, but we provide a very simple interface for your localized modifications.

You can set it up with the language at initialization:

    <script>
        window.Lately && Lately.target('time, .lately').lang({
                'second': ' Second',
                'minute': ' Minute',
                'hour': ' Hour',
                'day': ' Days',
                'month': ' Month',
                'year': ' Years',
                'ago': ' Ago',
                'error': 'NaN'
            }).init();
    </script>

  [1]: https://tokinx.github.io/lately/lately.js
  [2]: https://tokinx.github.io/lately/lately.min.js
  [3]: README-ZH.md
  [4]: README.md
