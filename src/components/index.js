import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@jswork/noop';
import ClipboardJS from 'clipboard';

const CLASS_NAME = 'react-clipboard';

export default class ReactClipboard extends Component {
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The runtime value.
     */
    value: PropTypes.string,
    /**
     * The handler when value change.
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: noop
  };

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

  shouldComponentUpdate(inNextProps) {
    const { value } = inNextProps;
    const _value = this.props.value;
    if (_value !== value) {
      this.setState({ value });
    }
    return true;
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
