import React from 'react';
import PropTypes from 'prop-types';

import uuid from 'uuid';

const Column = (props) =>
    <tr key={uuid.v4()}>
        {props.columns && props.columns.map( (column) =>

            <td key={uuid.v4()} style={{ textAlign: column.align || 'center', verticalAlign: 'middle' }} colSpan={column.span} >{column.content}</td>

        )}
    </tr>


Column.PropTypes = {
    columns: PropTypes.arrayOf(PropTypes.shape({
        content: PropTypes.node,
        align: PropTypes.string,
        span: PropTypes.number
    }))
}

Column.defaultProps = {
    columns: []
}

export default Column;