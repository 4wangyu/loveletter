import React from "react";
import "./App.css";
import { Button, Radio, Input } from "zhui";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      encrypt: true,
      prefixShow: false,
      suffixShow: false,
      prefix: "",
      suffix: "",
      secret: ""
    };
  }

  toggleEncrypt() {
    this.setState({ encrypt: !this.state.encrypt });
  }

  togglePrefixShow() {
    this.setState({ prefixShow: !this.state.prefixShow });
  }

  toggleSuffixShow() {
    this.setState({ suffixShow: !this.state.suffixShow });
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

  render() {
    const {
      encrypt,
      prefixShow,
      suffixShow,
      prefix,
      suffix,
      secret
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

            <Button kong="meihong" className="encrypt-button">
              Encrypt
            </Button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default App;
