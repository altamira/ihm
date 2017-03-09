import React from 'react';

import {
    FormGroup,
    FormControl,
    ControlLabel
} from 'react-bootstrap';

import DatePicker from 'react-bootstrap-date-picker';

const BrazilianDayLabels = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
const BrazilianMonthLabels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Octubro', 'Novembro', 'Dezembro'];

const Calendar = (props) => {

    const onValidate = (date) => {
        //var regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(201[7-9]|202[0-9])$/;
        //return regex.test(this.state[propriedade]) && this.state[propriedade].length < 10;
        if (date === undefined) {
            return false;
        } else {
            return true;
        }
    }

    return (
        <FormGroup validationState={onValidate.bind(null, props.date) ? 'success' : 'error'} >
            {props.label && <ControlLabel>{props.label}</ControlLabel>}
            <DatePicker
                name={props.name}
                value={props.date}
                disabled={true}
                showClearButton={false}
                readOnly={!props.onChange}
                onChange={props.onChange}
                dayLabels={BrazilianDayLabels}
                monthLabels={BrazilianMonthLabels}
            />
            <FormControl.Feedback />
        </FormGroup>
    )
}

Calendar.propTypes = {
    label: React.PropTypes.string,
    name: React.PropTypes.string,
    date: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func
};

Calendar.defaultProps = {
    date: new Date().toLocaleDateString()
}

export default Calendar;