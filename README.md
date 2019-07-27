# react-clipboard
> A simple React wrapper around the clipboard.js library.

## install
```shell
npm install -S afeiship/react-clipboard
```

## usage
1. import css
  ```scss
  @import "~react-clipboard/style.scss";

  // customize your styles:
  $react-clipboard-options: ()
  ```
2. import js
  ```js
  import ReactClipboard from '../src/main';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
      value: `道可道，非常道；名可名，非常名。
  无名，天地之始，有名，万物之母。
  故常无欲，以观其妙，常有欲，以观其徼。
  此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。`
    };
    render() {
      return (
        <div className="app-container">
          <div className="clippy">
            <textarea
              value={this.state.value}
              onChange={(e) => {
                console.log(e.target.value);
                this.setState({ value: e.target.value });
              }}>
              You text goes here!
            </textarea>
            <ReactClipboard value={this.state.value}>ClickToCopy!</ReactClipboard>
          </div>
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-clipboard/

## resouces
- https://github.com/zenorocha/clipboard.js/
