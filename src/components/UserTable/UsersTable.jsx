import {Component} from "react";
import users from "../UsersData";
import './userTable.style.css'

class UsersTable extends Component {
    state = {
        users: users
    }

    deleteAfterClick = (id) => {
        this.setState({users: this.state.users.filter(user => user.id !== id)})
    }
    addAfterClick = () => {
        const name = prompt("enter name");
        const status = prompt("enter status");
        const email = prompt("enter email");
        this.setState({users: [...this.state.users, {id: parseInt(100*Math.random()) * 10, name, status, email}]})
        console.log([...this.state.users, {id: Math.random() * 10, name, status, email}])
    }
    updateAfterClick = (oldUser) => {
        const name = prompt("enter name", oldUser.name);
        const status = prompt("enter status", oldUser.status);
        const email = prompt("enter email", oldUser.email);
        this.setState({
            users: this.state.users.map(user => (
                user.id === oldUser.id ? {...oldUser, name, status, email} : user
            ))
        })
    }

    render() {
        return (
            <div className={"userTable"}>

                <table>
                    <thead>
                    <tr>
                        <td>id</td>
                        <td>fullName</td>
                        <td>status</td>
                        <td>email</td>
                        <td>update</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map(user => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.status}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button onClick={() => this.deleteAfterClick(user.id)}>delete</button>
                                    <button onClick={() => this.updateAfterClick(user) }>update</button>
                                </td>
                            </tr>
                        ))
                    }

                    </tbody>
                </table>
                <button className={"addBtn"} onClick={this.addAfterClick}>Add</button>
            </div>
        )

    }

}

export default UsersTable;