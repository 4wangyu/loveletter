title: Zero Width Character
speaker: Wang Yu

<slide class="aligncenter" >

# Zero Width Character {.text-landing.text-shadow}

By Wang Yu {.text-intro}

<slide>

## What zero width characters are there?

| ZWC            | HTML entity        | Unicode |
| -------------- | ------------------ | ------- |
| Space          | `&#8203;`          | U+200B  |
| Non-Joiner     | `&#8204;`/`&zwnj;` | U+200C  |
| Joiner         | `&#8205;`/`&zwj;`  | U+200D  |
| No-Break Space | `&#65279;`         | U+FEFF  |

<slide>

## Unicode

| Encoding format | Space     | Link                                          |
| --------------- | --------- | --------------------------------------------- |
| ASCII           | 8 bits    | [ASCII Table](http://www.asciitable.com/)     |
| Unicode         | 1-4 bytes | [Unicode Table](https://unicode-table.com/en) |

![](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Utf8webgrowth.svg/640px-Utf8webgrowth.svg.png?1580102755192)

> As of January 2020 accounts for 94.7% of all web pages (some of which are simply ASCII, as it is a subset of UTF-8) and 96% of the top 1,000 highest ranked web pages.
> -Wikipedia

<slide>

## Zero-width space (U+200B)

<hr>

The zero-width space can be used to enable line wrapping in long words, when using languages that don’t use spaces to separate words, or after certain characters like a slash /. Most applications treat the zero-width space like a regular space for word wrapping purposes, even though it is not visible.

In the illustration below, the first string contains no spaces of any kind, but the second string contains zero-width spaces before each capital letter. When narrowing the window, the difference in word wrapping can be observed.

![](https://www.ptiglobal.com/proofsite/wp-content/uploads/2018/04/image1.png)

[Wiki](https://en.wikipedia.org/wiki/Zero-width_space)

<slide>

## Zero-width non-joiner (U+200C)

<hr>

The zero-width non-joiner is a non-printing character used in writing systems that make use of ligatures. When placed between two characters that would otherwise be combined into a ligature, a zero-width non-joiner tells the font engine not to combine them.

In the Persian example below, the phrase “I want…” requires a zero-width non-joiner (indicated with a red line) after the first two letters to prevent the ligature from forming. If the zero-width non-joiner is missing, the ligature is formed as seen in the first line.

![](https://www.ptiglobal.com/proofsite/wp-content/uploads/2018/04/image2.png)

[Wiki](https://en.wikipedia.org/wiki/Zero-width_non-joiner)

<slide>

## Zero-width joiner (U+200D)

<hr>

The zero-width joiner is essentially the opposite of the zero-width non-joiner. When placed between two characters that would otherwise not be connected, a zero-width joiner causes them to be printed in their connected forms (if they have one).

In the Devanagari example below, adding a zero-width joiner in the second line changes the appearance of the character.

![](https://www.ptiglobal.com/proofsite/wp-content/uploads/2018/04/image3.png)

[Wiki](https://en.wikipedia.org/wiki/Zero-width_joiner)

<slide>

## Zero-width no-break space (U+FEFF) | Word joiner (U+2060)

<hr>

To keep lines from breaking between two characters, the word joiner (above) should be used instead.

![](https://www.ptiglobal.com/proofsite/wp-content/uploads/2018/04/image4.png)

[Wiki](https://en.wikipedia.org/wiki/Word_joiner)

<slide>

## Try it out

<hr>

```html
<p>
  front&#8205;&#8205;&#8203;&#8205;&#8205;&#8205;&#8203;&#8204;&#8205;&#8204;&#8203;&#8204;&#8204;&#8204;&#8203;&#8204;back
</p>
```

[Codepen](https://codepen.io/pen/)

<slide>

## Applications

<hr>

- Wrapping up text in browsers
- Blacklisting in URLs
- Naming folder/file with same name
- Bypass censorship
- Embed surprises in code
- Fingerprinting
- Encrypt information

<slide>

### Wrapping up text in browsers

It is also used in many browsers, if the browser needs to wrap up the text when end of window appears. The consecutive words in sentence are separated by zero-width spaces. If the words are not separated then the word will be in same line which is difficult to read.

### Blacklisting in URLs

ICANN prohibits the use of zero-width characters in domain names. Because, if they are used in or with the domain names, they create homograph attack. Homograph attack is where malicious URLs are disguised as a legitimate one.

[Emoji Domain](https://www.google.com/search?q=emoji+domain)

[Snake game in URL](http://demian.ferrei.ro/snake)

### Naming folder/file

It can also be used in our daily life. Like if we want to make two files or folders having same name then it’s not possible as they both will merge together. But, by using zero-width space it is possible.

<slide>

## Bypass censorship

[Link to freedom of speech](https://we.laogongshuo.com/)

`view-source:https://we.laogongshuo.com/`

<slide>

## Embed surprises in code

# Don't use it in your code!

<slide>

## Fingerprinting

- To protect copyrighted content.
- To track user activity.

[Big brother is watching you](https://www.umpox.com/zero-width-detection/)

[Let's check the code](https://github.com/umpox/zero-width-detection/blob/master/src/utils/usernameToZeroWidth.js)

## Anti-Fringerprinting

[Chrome extension](https://chrome.google.com/webstore/detail/replace-zero-width-charac/lgaiigbekmcejmhenhhleeaicbcjjddi)

<slide>

## Encrypt information

[Let's compose a love letter](https://love-letter.netlify.com)

<slide class="aligncenter">

# FINE
