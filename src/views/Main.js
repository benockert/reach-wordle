import React from 'react';

const exports = {};

exports.Wrapper = class extends React.Component {
    render() {
        const { content } = this.props;
        return (
            <div className="App">
                <header className="App-header" id="root">
                    <h1>WorldETH</h1>
                    {content}
                </header>
            </div>
        );
    }
}

exports.DeployerOrAttacher = class extends React.Component {
    render() {
        const { parent } = this.props;
        return (
            <div>
                Please select a role:
                <br />
                <p>
                    <button
                        onClick={() => parent.selectDeployer()}
                    >Deployer</button>
                    <br /> Set the wager, deploy the contract.
                </p>
                <p>
                    <button
                        onClick={() => parent.selectAttacher()}
                    >Attacher</button>
                    <br /> Attach to the Deployer's contract.
                </p>
            </div>
        );
    }
}

export default exports;