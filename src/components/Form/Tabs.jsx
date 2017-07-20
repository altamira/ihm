import React from 'react';
import PropTypes from 'prop-types';

import { Tabs as BTabs, Tab as BTab } from 'react-bootstrap';

import uuid from 'uuid';

const Tabs = props =>
    <BTabs defaultActiveKey={0} id="uncontrolled-tab-example">
        
        {props.tabs && props.tabs.map((tab, index) =>
            <BTab key={uuid.v4()} eventKey={index} title={tab.title}>
                <div style={{ margin: 20 }}>
                    {tab.content}
                </div>
            </BTab>
        )}

    </BTabs>

Tabs.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.node.isRequired
    }))
}

export default Tabs;