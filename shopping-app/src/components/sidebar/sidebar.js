
import { GoThreeBars } from "react-icons/go";
import React from "react";
import Sidebar from "react-sidebar"
import { Button } from "react-bootstrap";

class Sideb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    render() {
        return (
            <Sidebar
                sidebar={<b>Sidebar content</b>}
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                styles={{ sidebar: { background: "white" } }}
            >
                <Button onClick={() => this.onSetSidebarOpen(true)}><GoThreeBars />
          Open sidebar
        </Button>
            </Sidebar>
        );
    }
}

export default Sideb;