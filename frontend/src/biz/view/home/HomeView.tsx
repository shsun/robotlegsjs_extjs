import * as React from 'react';
import { ExtReact, Container, Button, Event} from '@sencha/ext-react';

import {Grid, Toolbar, Column, SearchField} from '@sencha/ext-modern';
import data from './data';
import {small, medium} from '../../../responsiveFormulas';
import {ReactNode} from "react";
import {XDelegate} from "../../../base/utils/XDelegate";


declare var Ext: any;

export default class HomeView extends React.Component<void, any> {

    query: any

    store = Ext.create('Ext.data.Store', {
        fields: ['name', 'email', 'phone', 'hoursTaken', 'hoursRemaining'],
        data
    });

    render() {

        let additionalColumnList: Array<ReactNode> = new Array<ReactNode>();
        var b: Boolean = true;
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
            <Grid store={this.store}>
                <Toolbar docked="top">
                    <SearchField
                        ui="faded"
                        ref={field => this.query = field}
                        placeholder="Search..."
                        onChange={this.onSearch.bind(this)}
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
                        handler={XDelegate.create(this, this.onOkButtonRelease, {name:'zhangsan', age:99})}
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

        let name:String = additionalOpts['name'];

        let a:Button = (sender as Button);



        console.log('a', name);

    }
}