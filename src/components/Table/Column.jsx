import React from 'react';

import uuid from 'uuid';

const Column = (props) =>
    <tr key={uuid.v4()}>
        {props.columns && props.columns.map( (column) =>

            <td key={uuid.v4()} style={{ textAlign: column.align || 'center', verticalAlign: 'middle' }} colSpan={column.span} >{column.content}</td>

        )}
    </tr>


Column.propTypes = {
    columns: React.PropTypes.arrayOf(React.PropTypes.shape({
        content: React.PropTypes.node,
        align: React.PropTypes.string,
        span: React.PropTypes.number
    }))
}

Column.defaultProps = {
    columns: []
}

export default Column;