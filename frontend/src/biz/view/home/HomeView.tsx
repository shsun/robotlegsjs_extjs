import * as React from 'react';
import {ReactNode, ErrorInfo} from "react";

import {ExtReact, Container, Button, Event} from '@sencha/ext-react';
import {Grid, Toolbar, Column, SearchField} from '@sencha/ext-modern';

import {XDelegate} from "../../../base/utils/XDelegate";

import data from './data';
import {small, medium} from '../../../responsiveFormulas';


declare var Ext: any;


interface HomeViewProps {
    history: any,
    location: any
}

interface HomeViewState {
    displayPhone2: boolean
}

export default class HomeView extends React.Component<HomeViewProps, HomeViewState> {

    // -----------------------------------------------------------------------------------------------------------------

    UUID: String;
    TAG: String;

    state = {
        displayPhone2: false
    }

    // -----------------------------------------------------------------------------------------------------------------

    query: any;

    store = Ext.create('Ext.data.Store', {
        fields: ['name', 'email', 'phone', 'hoursTaken', 'hoursRemaining'],
        data
    });

    constructor(props: Readonly<HomeViewProps>) {
        super(props);

        this.UUID = require('uuid/v1')();
        this.TAG = this.constructor.name;

        console.log(this.TAG);
    }

    /**
     *
     * @return {ReactNode}
     */
    render() {
        console.log(this.TAG + '.render() UUID=' + this.UUID);

        let additionalColumnList: Array<ReactNode> = new Array<ReactNode>();
        var b: Boolean = this.state.displayPhone2;
        console.log(this.TAG + '.render--' + b);


        if (b) {
            var a: ReactNode = <Column
                text="Phone2"
                dataIndex="phone2"
                flex={2}
                resizable
            />;
            additionalColumnList.push(a);
        }
        let node: ReactNode = (
            <Grid key={this.UUID} store={this.store}>
                <Toolbar docked="top">
                    <SearchField
                        ui="faded"
                        ref={field => this.query = field}
                        placeholder="Search..."
                        onChange={this.onSearch.bind(this, [{blood:'c'}])}
                        responsiveConfig={{
                            [small]: {
                                flex: 1
                            },
                            [medium]: {
                                flex: undefined
                            }
                        }}
                    />
                    <Button
                        text="ok"
                        handler={XDelegate.create(this, this.onOkButtonRelease, {name: 'zhangsan', age: 99})}
                        ui="action raised"
                    />
                </Toolbar>
                <Column
                    text="Name00"
                    dataIndex="name"
                    flex={2}
                    resizable
                />
                <Column
                    text="Email"
                    dataIndex="email"
                    flex={3}
                    resizable
                    responsiveConfig={{
                        [small]: {
                            hidden: true
                        },
                        [medium]: {
                            hidden: false
                        }
                    }}
                />
                <Column
                    text="Phone"
                    dataIndex="phone"
                    flex={2}
                    resizable
                />
                {additionalColumnList}
            </Grid>
        );


        return node;
    }

    /**
     * Filter the store when the user types in the search box
     */
    onSearch = () => {
        const query = this.query.cmp.getValue().toLowerCase();
        this.store.clearFilter();

        if (query.length) this.store.filterBy(record => {
            const {name, email, phone} = record.data;

            return name.toLowerCase().indexOf(query) !== -1 ||
                email.toLowerCase().indexOf(query) !== -1 ||
                phone.toLowerCase().indexOf(query) !== -1;
        });
    }

    /**
     *
     * @param {Button} sender
     * @param {Ext.event.Event} e
     * @param restOfArgs
     */
    onOkButtonRelease = (sender: Button, e: Event, additionalOpts: Object) => {
        let name: String = additionalOpts['name'];
        this.setState({displayPhone2: false});
        console.log('a', name);
    }


    /**
     * Called immediately after a component is mounted. Setting state here will trigger re-rendering.
     */
    componentDidMount?(): void {
        console.log(this.TAG + '.componentDidMount()');
    }

    /**
     * Called to determine whether the change in props and state should trigger a re-render.
     *
     * `Component` always returns true.
     * `PureComponent` implements a shallow comparison on props and state and returns true if any
     * props or states have changed.
     *
     * If false is returned, `Component#render`, `componentWillUpdate`
     * and `componentDidUpdate` will not be called.
     */
    shouldComponentUpdate?(nextProps: Readonly<HomeViewProps>, nextState: Readonly<HomeViewState>, nextContext: any): boolean {
        console.log(this.TAG + '.shouldComponentUpdate()');
        return true;
    }

    /**
     * Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
     * cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.
     */
    componentWillUnmount?(): void {
        console.log(this.TAG + '.componentWillUnmount()');
    }

    /**
     * Catches exceptions generated in descendant components. Unhandled exceptions will cause
     * the entire component tree to unmount.
     */
    componentDidCatch?(error: Error, errorInfo: ErrorInfo): void {
        console.log(this.TAG + '.componentDidCatch()');
    }
}