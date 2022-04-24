/**
 * Lately.js - Native JavaScript, only 800Byte but simple and easy to use Timeago plugin
 *
 * @name Lately.js
 * @version 2.5.0
 * @author Tokin (Tokinx)
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * https://tokinx.github.io/lately/
 *
 * Copyright (c) 2017, biji.io
 */
(() => {
    window.Lately = new function () {
        this.target = 'time'
        this.lang = {
            second: "秒",
            minute: "分钟",
            hour: "小时",
            day: "天",
            month: "个月",
            year: "年",
            ago: "前",
            error: "NaN"
        };
        let format = (date) => {
            date = new Date(date);
            let floor = (num, _lang) => Math.floor(num) + _lang,
                obj = new function () {
                    this.second = (new Date().getTime() - date.getTime()) / 1000;
                    this.minute = this.second / 60;
                    this.hour = this.minute / 60;
                    this.day = this.hour / 24;
                    this.month = this.day / 30;
                    this.year = this.month / 12
                },
                key = Object.keys(obj).reverse().find(_ => obj[_] >= 1);
            return (key ? floor(obj[key], this.lang[key]) : this.lang.error) + this.lang.ago;
        },
        _val = (date) => {
            let _date = new Date(date);
            return isNaN(_date.getTime()) ? false : _date.getTime();
        },
        that = this;
        return new function(){
            this.target = (target) => {
                if (target) that.target = target;
                return this;
            }
            this.lang = (lang) => {
                if (lang) that.lang = lang;
                return this;
            }
            this.init = () => {
                for (let el of document.querySelectorAll(that.target)) {
                    let date = _val(el.dateTime) || _val(el.title) || _val(el.innerHTML) || 0;
                    if (!date) return;
                    el.title = new Date(date).toLocaleString();
                    el.innerHTML = format(date);
                }
                return this;
            }
            this.format = that.format
        }
    }
})();