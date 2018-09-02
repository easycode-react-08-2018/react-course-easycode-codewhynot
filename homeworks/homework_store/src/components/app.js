import React, {Component} from 'react';
import {HomePage} from "../pages/home/home";
import {AdminPage} from "../pages/admin/admin";
import {UserPage} from "../pages/user/user";
import {CartPage} from "../pages/cart/cart";

export class App extends Component {
    state = {
        activePage: 'admin',
        prevPage: null,
        owner: null
    };
    setPage = (page) => {
        const data = page.target.getAttribute('page');
        const owner = data === 'admin' || data === 'user' ? data : null
        const prevPage = this.state.activePage
        this.setState ({
            activePage: data,
            prevPage: prevPage,
            owner: owner
        })
    };
    render () {
        const pageClass = this.state.activePage
        return (
            <React.Fragment>
                <div className={"main_wrapper " + pageClass}>
                    <HomePage
                        active={this.state.activePage}
                        setPage={this.setPage}
                    />
                    <AdminPage
                        active={this.state.activePage}
                        setPage={this.setPage}
                        owner={this.state.owner}
                    />
                    <UserPage
                        active={this.state.activePage}
                        setPage={this.setPage}
                        owner={this.state.owner}
                    />
                    <CartPage
                        active={this.state}
                        setPage={this.setPage}
                    />
                </div>
            </React.Fragment>
        );
    }
}