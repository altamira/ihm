import React from 'react';

import uuid from 'uuid';

import {
    Table as BTable,
    Row,
    Col,
    Glyphicon,
    Button
} from 'react-bootstrap';

import { Header } from './'

const Table = props => (
    <Row>
        <Col xs={12} md={12}>
            <BTable striped bordered condensed hover style={{ borderCollapse: 'collapse' }}>

                <thead>

                    {Array.isArray(props.command) && props.command.length &&
                        <tr key={uuid.v4()}>
                            <th colSpan={props.header.length} style={{ width: 100, textAlign: 'right' }} >
                                {props.command.map((command) => (
                                    <Button key={uuid.v4()} style={{ width: command.width }} bsStyle="success" bsSize="small" onClick={command.onClick}>
                                        <Glyphicon glyph={command.icon} />{command.label}
                                    </Button>
                                ))}
                            </th>
                        </tr>
                    }

                    <Header header={props.header} />

                </thead>

                <tbody>
                    {props.children}
                </tbody>

            </BTable>
        </Col>
    </Row>
);

Table.propTypes = {
    command: React.PropTypes.array,
    header: React.PropTypes.array.isRequired,
    children: React.PropTypes.node.isRequired
};

Table.defaultProps = {
    command: [],
    header: [],
    body: []
}

export default Table;