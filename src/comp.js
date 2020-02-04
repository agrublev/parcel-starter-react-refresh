import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

const defaultMessage = "Tee";

@observer
class Comp extends Component {
    @observable message = defaultMessage;

    render() {
        return (
            <div>
                <h1>Hi {this.message}</h1>
                <button
                    onClick={() => {
                        this.message = `${defaultMessage} ${Date.now()}`;
                    }}
                >
                    Change message
                </button>
            </div>
        );
    }
}

export default Comp;
