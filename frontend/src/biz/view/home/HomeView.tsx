import * as React from 'react';
import {ReactNode, ErrorInfo} from "react";

import {ExtReact, Container, Button, Event, TextField} from '@sencha/ext-react';

//import {Grid, Toolbar, Column, SearchField} from '@sencha/ext-modern';
import {Panel, Grid, Column, Toolbar, SearchField, Field} from '@sencha/ext-classic';


import {XDelegate} from "../../../base/utils/XDelegate";

import data from './data';
import {small, medium} from '../../../responsiveFormulas';

declare var Ext: any;

Ext.require([
    'Ext.button.Button',
    'Ext.grid.Grid',
    'Ext.event.Event',
    'Ext.Toast',
    'Ext.grid.plugin.*',
    'Ext.exporter.*'
]);

interface HomeViewProps {
    history: any,
    location: any
}

interface HomeViewState {
    displayPhone2: boolean,
    SearchFieldWidth: Number
}

export default class HomeView extends React.Component<HomeViewProps, HomeViewState> {

    // -----------------------------------------------------------------------------------------------------------------

    UUID: String;
    TAG: String;

    state = {
        displayPhone2: true,
        SearchFieldWidth: 200
    }

    // -----------------------------------------------------------------------------------------------------------------
    store = Ext.create('Ext.data.Store', {
        fields: ['name', 'email', 'phone', 'hoursTaken', 'hoursRemaining'],
        data
    });


    clickTimes:number = 0;

    constructor(props: Readonly<HomeViewProps>) {
        super(props);

        this.UUID = require('uuid/v1')();
        this.TAG = this.constructor.name;


        this.clickTimes = 0;

        console.log(this.TAG);
    }

    /**
     *
     * @return {ReactNode}
     */
    render() {
        console.log(this.TAG + '.render() UUID=' + this.UUID);

        console.log(this.TAG + '.render--' + this.state.displayPhone2);

        let additionalColumnList: Array<ReactNode> = new Array<ReactNode>();
        if (this.state.displayPhone2) {
            for (var i = 0; i < 3; i++) {
                var tmpText = "phone" + i;
                var tmpDataIndex = "phone" + i;
                var a: ReactNode = <Column
                    text={tmpText}
                    dataIndex={tmpDataIndex}
                    flex={2}
                    resizable
                />;
                additionalColumnList.push(a);
            }
        }

        const node: React.ReactChild = (
            <Grid key={this.UUID} store={this.store}>
                <Toolbar docked="top">
                    <SearchField
                        ui="faded"
                        width={this.state.SearchFieldWidth}
                        placeholder="Search..."
                        onChange={XDelegate.create(this, this.onSearchFieldChange, {name: 'zhangsan', age: 99})}
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
                        width='100%'
                        handler={XDelegate.create(this, this.onOkButtonClick, {name: 'zhangsan', age: 99})}
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


        //var g = (node as Ext.grid.Grid);

        return node;
    }


    /**
     * Filter the store when the user types in the search box
     *
     * @param sender
     * @param newValue
     * @param oldValue
     * @param {Object} eOpts The options object passed to Ext.util.Observable.addListener.
     * @param additionalOpts
     */
    onSearchFieldChange = (sender: any, newValue: String, oldValue: String, eOpts: Object, additionalOpts: Object) => {
        this.store.clearFilter();

        if (newValue.length) this.store.filterBy(record => {
            const {name, email, phone} = record.data;

            return name.toLowerCase().indexOf(newValue) !== -1 ||
                email.toLowerCase().indexOf(newValue) !== -1 ||
                phone.toLowerCase().indexOf(newValue) !== -1;
        });
    }

    /**
     *
     * @param {Button} sender
     * @param {Ext.event.Event} e
     * @param restOfArgs
     */
    onOkButtonClick = (sender: any, e: Event, additionalOpts: Object) => {
        let name: String = additionalOpts['name'];


        this.clickTimes += 1;

        if (this.clickTimes == 1) {
            this.setState({displayPhone2: false});
            console.log('a', name);

            this.setState({SearchFieldWidth: 600});
        } else {

            var id:string = sender.getId();


            var c = Ext.getCmp(id);

            var btn:Button = (sender as Button);


            console.log('btn 21--' + c.getZIndex());
            console.log('btn 21--' + c.getText());
            console.log('btn 21--' + btn.getText());


            let w1:number = c.getWidth();
            let x1:number = c.getX();

            console.log('btn 22');

            let w2:number = c['getWidth']();
            let x2:number = c['getX']();
            console.log('btn 23');

            let w3:number = c.width;
            let x3:number = c.x;
            console.log('btn 24');
        }
        Ext.toast('a');
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