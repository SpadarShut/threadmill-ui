import propTypes from "prop-types";
import React, {PureComponent} from "react";
import cn from 'classnames';
import css from "./VideoSelect.module.css";

class VideoSelect extends PureComponent {
  static propTypes = {
    onSubmit: propTypes.func,
    value: propTypes.string,
    onChange: propTypes.func,
    className: propTypes.string,
    values: propTypes.arrayOf(propTypes.shape({
      url: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
    }))
  }

  onChange = (e) => {
    this.props.onChange(e.target.value)
  }

  render() {
    let {onSubmit, values, value, className} = this.props;

    return (
      <form
        className={className}
        onSubmit={onSubmit}
      >
        <select
          name="videoSrc"
          id="videoSrc"
          className={cn("select", css.select)}
          value={value}
          onChange={this.onChange}
        >
          <option value="">- Select video -</option>
          {values.map(item => (
            <option
              value={item.url}
              key={item.url}
            >
              {item.label}
            </option>
          ))}
        </select>
        <button className="button button--branded">
          Select
        </button>
      </form>
    )
  }
}

export default VideoSelect;
