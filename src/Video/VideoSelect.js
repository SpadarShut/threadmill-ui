import css from "./VideoScreen.module.css";
import propTypes from "prop-types";
import React, {PureComponent} from "react";

class VideoSelect extends PureComponent {
  static propTypes = {
    onSubmit: propTypes.func,
    value: propTypes.string,
    onChange: propTypes.func,
    values: propTypes.arrayOf(propTypes.shape({
      url: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
    }))
  }

  onChange = (e) => {
    this.props.onChange(e.target.value)
  }

  render() {
    let {onSubmit, values, value} = this.props;

    return (
      <form
        className={css.header}
        onSubmit={onSubmit}
      >
        <select
          name="videoSrc"
          id="videoSrc"
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
        <button>
          Select
        </button>
      </form>
    )
  }
}

export default VideoSelect;
