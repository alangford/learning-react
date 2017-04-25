/**
 * Created by beebe on 4/24/2017.
 */
const React = require(`react`);
const ReactDOM = require(`react-dom`);
require(`./index.css`);

class HelloUser extends React.Component {
    render() {
        return (
            <div> Hello, {this.props.name}</div>
        )
    }
}
ReactDOM.render(<HelloUser name="Tyler"/>, document.getElementById('app'));

class Users extends React.Component {
    render() {
        return (
            <div>
                <h1>Friends</h1>
                <ul>
                    {this.props.list.filter(function(user){
                        return user.friend === true
                    }).map(function(user){
                        return <li key={user.name}>{user.name}</li>
                    })}
                </ul>

                <hr />

                <h1> Non Friends </h1>
                <ul>
                    {this.props.list.filter(function(user){
                        return user.friend !== true
                    }).map(function(user){
                        return <li key={user.name}>{user.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(
    <Users list={[
        { name: 'Tyler', friend: true },
        { name: 'Ryan', friend: true },
        { name: 'Michael', friend: false },
        { name: 'Mikenzi', friend: false },
        { name: 'Jessica', friend: true },
        { name: 'Dan', friend: false } ]}
    />,
    document.getElementById('friend')
);