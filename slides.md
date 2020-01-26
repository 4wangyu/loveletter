title: Zero Width Character
speaker: Wang Yu

<slide class="aligncenter" >

# Zero Width Character {.text-landing.text-shadow}

By Wang Yu {.text-intro}

<slide>

https://en.wikipedia.org/wiki/Unicode

[Unicode Character Table](https://unicode-table.com/en/search/?q=zero+width)

[ASCII Table](http://www.asciitable.com/)

Unicode represents most written languages in the world while ASCII does not.

ASCII has its equivalent within Unicode.

https://en.wikipedia.org/wiki/Zero-width_space

https://en.wikipedia.org/wiki/Zero-width_joiner

<slide>

There are many types of zero-width characters, but today we are going to discuss about zero-width space. And also that how it is used in our day-to-day life. Sit back, get relax and read on to know more about it.

It is a non-printing character. Generally, used in computerized typesetting in order to differentiate two words (to indicate word boundaries). It is a Unicode character, which can be used to render white spaces. It’s also type of white space but it is of zero-width. Thus, it does not appears.

It is used to have invisible fingerprints like if we are sharing any data like an article on web then it should be embedded with zero-width spaces in order to easily identify our content and details provided if ever copied and republished anywhere else.

It is also used in many browsers, if the browser needs to wrap up the text when end of window appears. The consecutive words in sentence are separated by zero-width spaces. If the words are not separated then the word will be in same line which is difficult to read.

Blacklisting in URLs:

ICANN rules are formed such that it prohibits the use of zero-width characters in domain names. Because, if they are used in or with the domain names, they create homograph attack. Homograph attack is where malicious URLs are differentiated as a legitimate one and the one which is visual.

The Unicode of zero-width space is U+200B and if we want to specify zero-width character in HTML code then it is specified as (&#8203;). In TeX, it is written as (\hskip0pt), in LaTeX it is written as (\hspace{0pt}) and in groff it is (\:).

It can also be used in our daily life. Like if we want to make two files or folders having same name then it’s not possible as they both will merge together. But, by using zero-width space it is possible.

When naming the file or folder same as the one which already exists then after or before the same name, press ALT+8203. As the zero-width space is added to the original name, the system differentiate both of that although the names look same.

Also, it can be used if we want to break line as per our conveyance. For example: If I am having a very long name or word which I want to be fitted in small column like the cell of excel sheet when displayed initially (without enlarging it). Then we are able to decide that from where the word should be broken. This is called line break.

The following are the notations to specify different kinds of zero-width characters:

- `&#8203;` (Space)
- `&#8204;` (Non-Joiner)
- `&#8205;` (Joiner)
- `&#65279;` (No-Break Space)

<slide>

将这段零宽字符粘贴进一个 HTML 文件当中

```html
<p>前</p>
<div>
  &#8205;&#8205;&#8203;&#8205;&#8205;&#8205;&#8203;&#8204;&#8205;&#8204;&#8203;&#8204;&#8204;&#8204;&#8203;&#8204;
</div>
<p>后</p>
```

在浏览器中打开这个 HTML 文件，你只能看到 "前后" 两个字

<slide>

首先从待解密字符串中匹配零宽字符， 零宽字符在 Unicode 中的编码为 \u200B \u200C \u200D|
在 HTML 中有两种显示

HTML

- `&#8203;`
- `&#8204;` --> &zwnj
- `&#8205;` --> &zwj

pc 版 QQ 不支持零宽字符，会显示空格，但手机版不会

<slide>

# Unicode

A worldwide standard where each character uses a unique number between U+0000 and U+10FFFF, Unicode may be 8-bit, 16-bit, or 32-bit. Numbers, mathematical notation, popular symbols and characters from all languages are assigned a code point, for example, U+0041 is an English letter "A." Below is an example of how "Computer Hope" would be written in English Unicode.

```
U+0043 U+006F U+006D U+0070 U+0075 U+0074 U+0065 U+0072 U+00A0 U+0048 U+006F U+0070 U+0065
```

A common type of Unicode is UTF-8, which utilizes 8-bit character encoding. It is often used in Linux environments, to encode foreign characters so they display properly when output to a text file.

<slide>

The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

<slide>

# Bypass censorship

[Another application](view-source:https://we.laogongshuo.com/)

<slide>

# Fingerprinting

- To track user activity.
- To protect copyrighted info.

[Big brother is watching you](https://www.umpox.com/zero-width-detection/)

[Let's check the code](https://github.com/umpox/zero-width-detection/blob/master/src/utils/usernameToZeroWidth.js)

# Anti-Fringerprinting

[Chrome extension](https://chrome.google.com/webstore/detail/replace-zero-width-charac/lgaiigbekmcejmhenhhleeaicbcjjddi)

<slide>

# Don't use it in your code

git can detect the changes.
