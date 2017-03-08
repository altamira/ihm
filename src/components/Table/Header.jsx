import React from 'react';

import uuid from 'uuid';

const Header = (props) => {
    return (
        <tr>
            {Array.isArray(props.header) && props.header.map( header =>
                <th
                    key={uuid.v4()}
                    style={{
                        borderBottom: '2px solid black',
                        borderTop: '2px solid black',
                        backgroundColor: 'lightgray',
                        textAlign: header.align,
                        verticalAlign: 'top'
                    }}
                >
                    {header.label}
                </th>
            )}
        </tr>
    );
};

Header.propTypes = {
    header: React.PropTypes.arrayOf(React.PropTypes.shape({
        align: React.PropTypes.string,
        label: React.PropTypes.string.isRequired
    })).isRequired,
};

Header.defaultProps = {
    header: []
};

export default Header;