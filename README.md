# react-clipboard
> A simple React wrapper around the clipboard.js library.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-clipboard
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | string | false    | -       | The runtime value.                    |
| onChange  | func   | false    | noop    | The handler when value change.        |


## usage
1. import css
  ```scss
  @import "~@jswork/react-clipboard/dist/style.css";

  // or use sass
  @import "~@jswork/react-clipboard/dist/style.scss";

  // customize your styles:
  $react-clipboard-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactClipboard from '@jswork/react-clipboard';
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
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-clipboard">
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
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-clipboard/


## license
Code released under [the MIT license](https://github.com/afeiship/react-clipboard/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-clipboard
[version-url]: https://npmjs.org/package/@jswork/react-clipboard

[license-image]: https://img.shields.io/npm/l/@jswork/react-clipboard
[license-url]: https://github.com/afeiship/react-clipboard/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-clipboard
[size-url]: https://github.com/afeiship/react-clipboard/blob/master/dist/react-clipboard.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-clipboard
[download-url]: https://www.npmjs.com/package/@jswork/react-clipboard
