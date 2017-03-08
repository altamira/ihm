import React from 'react';

import {
    Row,
    Col,
} from 'react-bootstrap';

import uuid from 'uuid';

const Columns = (props) =>
    <tr key={uuid.v4()}>
        {props.columns && props.columns.map( (column) =>

            <td key={uuid.v4()} style={{ textAlign: column.align || 'center' }}>{props.children}</td>

        )}
    </tr>


Columns.propTypes = {
    columns: React.PropTypes.arrayOf(React.PropTypes.shape({
        align: React.PropTypes.string
    }))
}

Columns.defaultProps = {
    columns: []
}

export default Column;