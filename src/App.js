import React from "react";
import "./App.css";
import { Button, Radio, Input, Alert } from "zhui";

const charMap = {
  "0": "&#8204;",
  "1": "&#8205;"
};
const splitter = "&#8203;";

const plitterReg = new RegExp("&#8203;|\u200B", "g");
const joinerReg = new RegExp("&#8205;|\u200D|&zwj;", "g");
const nonjoinerReg = new RegExp("&#8204;|\u200C|&zwnj;", "g");

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      encrypt: true,
      prefixShow: true,
      suffixShow: true,
      prefix: "",
      suffix: "",
      secret: "",
      encrypted: "",
      letter: "",
      decrypted: "",
      loading: false,
      copied: false
    };
  }

  toggleEncrypt() {
    this.setState({ encrypt: !this.state.encrypt });
  }

  togglePrefixShow() {
    this.setState({ prefixShow: !this.state.prefixShow, prefix: "" });
  }

  toggleSuffixShow() {
    this.setState({ suffixShow: !this.state.suffixShow, suffix: "" });
  }

  setSecret(event) {
    event.persist();
    this.setState({ secret: event.target.value });
  }

  setPrefix(event) {
    event.persist();
    this.setState({ prefix: event.target.value });
  }

  setSuffix(event) {
    event.persist();
    this.setState({ suffix: event.target.value });
  }

  encrypt() {
    this.setState({ loading: true });
    let { prefix, secret, suffix } = this.state;
    prefix = prefix.trim().concat(" ");
    secret = secret.trim().concat(" ");

    const secretEnc = secret
      .split("")
      .map(ch => this.encryptChar(ch))
      .join(splitter);
    const encrypted = prefix + splitter + secretEnc + splitter + suffix;

    this.setState({ encrypted });
    this.refs.encrypted.innerHTML = encrypted;
  }

  encryptChar(ch) {
    return ch
      .charCodeAt()
      .toString(2)
      .padStart(16, "0")
      .split("")
      .map(ch => charMap[ch])
      .join("");
  }

  copyToClipboard() {
    // 创建元素用于复制
    var aux = document.createElement("input");
    // 获取复制内容
    var content = this.refs.encrypted.innerHTML;
    // 设置元素内容
    aux.setAttribute("value", content);
    // 将元素插入页面进行调用
    document.body.appendChild(aux);
    // 复制内容
    aux.select();
    // 将内容复制到剪贴板
    document.execCommand("copy");
    // 删除创建元素
    document.body.removeChild(aux);
    //提示
    this.setState({ copied: true });
    // alert("已复制到剪贴板");
    setTimeout(() => {
      this.setState({ copied: false });
    }, 2000);
  }

  setLetter(event) {
    event.persist();
    this.setState({ letter: event.target.value });
  }

  decrypt() {
    const { letter } = this.state;

    const rawArr = letter.split(plitterReg);
    if (rawArr.length === 1) {
      this.setState({ decrypted: rawArr[0] });
    } else {
      const prefix = rawArr[0];
      const suffix = rawArr[rawArr.length - 1];
      const decrypted = rawArr
        .slice(1, rawArr.length - 1)
        .map(e => this.decryptChar(e))
        .join("");
      this.setState({ decrypted: prefix + decrypted + suffix });
    }
  }

  decryptChar(s) {
    return String.fromCharCode(
      parseInt(s.replace(joinerReg, "1").replace(nonjoinerReg, "0"), 2)
    );
  }

  render() {
    const {
      encrypt,
      prefixShow,
      suffixShow,
      prefix,
      suffix,
      secret,
      copied,
      letter,
      decrypted
    } = this.state;

    return (
      <div className="App">
        <div className="toggle" onClick={() => this.toggleEncrypt()}>
          <Radio
            checked
            text={encrypt ? "密encrypt" : "解decrypt"}
            theme={encrypt ? "meihong" : "huaqing"}
          />
        </div>
        <Alert
          className="alert"
          visiable={copied}
          message="C O P I E D"
          theme="haitang"
        ></Alert>

        {encrypt ? (
          <div className="flex-col">
            <Button.Group className="button-group">
              <Button
                round
                theme={prefixShow ? "meihong" : "huaqing"}
                onClick={() => this.togglePrefixShow()}
              >
                prefix
              </Button>
              <Button theme="meihong" className="secret-button">
                secret
              </Button>
              <Button
                round
                theme={suffixShow ? "meihong" : "huaqing"}
                onClick={() => this.toggleSuffixShow()}
              >
                suffix
              </Button>
            </Button.Group>

            <div className="form flex-col">
              {prefixShow && (
                <Input
                  width={`90%`}
                  value={prefix}
                  onChange={e => this.setPrefix(e)}
                />
              )}
              <Input.Textarea
                value={secret}
                onChange={e => this.setSecret(e)}
                width={`90%`}
                className="secret"
              />
              {suffixShow && (
                <Input
                  width={`90%`}
                  value={suffix}
                  onChange={e => this.setSuffix(e)}
                />
              )}
            </div>

            <Button
              kong="meihong"
              className="encrypt-button"
              onClick={() => this.encrypt()}
            >
              Encrypt
            </Button>

            <div className="encrypted" ref="encrypted" />

            <Button
              kong="meihong"
              className="copy-button"
              onClick={() => this.copyToClipboard()}
            >
              Copy
            </Button>
          </div>
        ) : (
          <div className="flex-col">
            <Input.Textarea
              value={letter}
              onChange={e => this.setLetter(e)}
              width={`90%`}
              className="letter"
              theme="huaqing"
            />
            <Button
              kong="huaqing"
              className="decrypt-button"
              onClick={() => this.decrypt()}
            >
              Decrypt
            </Button>

            <Input.Textarea
              value={decrypted}
              className="decrypted"
              theme="huaqing"
              disabled
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
