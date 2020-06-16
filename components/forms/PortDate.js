import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { FormGroup, Label, Button } from "reactstrap";

import "react-datepicker/dist/react-datepicker-cssmodules.css";

export default class PortDate extends React.Component {
  constructor(props) {
    super(props);

    const dateValue = props.initialDate ? moment(props.initialDate) : moment();
    const isHidden = props.initialDate ? false : true;

    this.state = {
      dateValue,
      isHidden,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  setFieldValueAndTouched(date, touched) {
    const { setFieldValue, setFieldTouched } = this.props.form;
    const { name } = this.props.field;

    setFieldValue(name, date, true);
    setFieldTouched(name, touched, true);
  }

  handleChange(date) {
    this.setState({
      dateValue: date,
    });

    this.setFieldValueAndTouched(date, true);
  }

  toggleDate(date) {
    this.setState({
      isHidden: !this.state.isHidden,
    });

    this.setFieldValueAndTouched(date, true);
  }

  render() {
    const {
      canBeDisabled,
      label,
      field,
      form: { touched, errors },
    } = this.props;
    const { isHidden, dateValue } = this.state;

    return (
      <FormGroup>
        <Label>{label}</Label>
        <div className="input-group">
          {!isHidden && (
            <DatePicker
              selected={dateValue}
              onChange={this.handleChange}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              maxDate={moment()}
              dropdownMode="select"
            />
          )}
        </div>

        {canBeDisabled && (
          <FormGroup>
            <input
              type="checkbox"
              onClick={() =>
                !isHidden ? this.toggleDate(null) : this.toggleDate(dateValue)
              }
            />
            <span>Currently Working</span>
          </FormGroup>
        )}

        {touched[field.name] && errors[field.name] && (
          <div className="error">{errors[field.name]}</div>
        )}
      </FormGroup>
    );
  }
}
