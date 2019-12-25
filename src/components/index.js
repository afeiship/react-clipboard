import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import ClipboardJS from 'clipboard';

const CLASS_NAME = 'react-clipboard';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: noop
  };
  /*===properties end===*/

  get value() {
    return this.state.value;
  }

  constructor(inProps) {
    super(inProps);
    this.state = {
      value: inProps.value
    };
  }
  componentDidMount() {
    this.createInstance();
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  componentWillReceiveProps(inNextProps) {
    const { value } = inNextProps;
    const _value = this.props.value;
    if (_value !== value) {
      this.setState({ value });
    }
  }

  createInstance() {
    const { onChange } = this.props;
    this.clipboard = new ClipboardJS(this.root, { text: () => this.value });
    this.clipboard.on('success', (inEvent) => {
      onChange(inEvent);
    });
  }

  render() {
    const { className, children, value, ...props } = this.props;
    return (
      <button
        ref={(root) => (this.root = root)}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        <img
          className={`${CLASS_NAME}__clippy`}
          width="13"
          src="https://clipboardjs.com/assets/images/clippy.svg"
          alt="Copy to clipboard"
        />
      </button>
    );
  }
}
