import * as appStyles from '../styles/app.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component<any, any> {
    render() {
        return (
            <div className={appStyles.main}>
            <h1 className={appStyles.heroUnit}>TSX with CSS Modules!</h1>
            </div>
        );
    }
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));
