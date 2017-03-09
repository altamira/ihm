import React from 'react';

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
    tabs: React.PropTypes.arrayOf(React.PropTypes.shape({
        title: React.PropTypes.string.isRequired,
        content: React.PropTypes.node.isRequired
    }))
}

export default Tabs;