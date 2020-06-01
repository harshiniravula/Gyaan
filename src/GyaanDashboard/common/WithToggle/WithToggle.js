import React from 'react';

function WithToggle(props) {
    class Toggle extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                toggleStatus: false,
                onToggle: this.onToggle
            }
        };

        onToggle = () => {
            this.setState(prevState => ({ toggleStatus: !prevState.toggleStatus }));
            if (this.state.toggleStatus) {
                this.props.toggleSeeAll(false);
            }
        }
        render() {

            return props.children(this.state);
        }
    };
    return <Toggle {...props}/>
}


export default WithToggle;
