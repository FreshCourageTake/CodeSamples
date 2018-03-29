import React, { Component } from 'react';
import {
    ListView,
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import {
    Button,
    List,
    ListItem
} from 'react-native-elements';
import styles from './styles';


export default class HomePage extends Component<{}> {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                {key: "list1", name: "Groceries", total: "$124.34"},
                {key: "list2", name: "Christmas List", total: "$244.30"},
            ]),
        }
    }

    static navigationOptions = {
        title: 'My Shopping Lists'
    };

    _renderRow = (rowData, sectionId) => {
        return (
            <TouchableHighlight>
                <ListItem
                    key={sectionId}
                    title={rowData.name}
                    subtitle={rowData.total}
                    underlayColor='#dddddd'
                    onPress={() => this._showListItems(sectionId, rowData.name)}
                />
            </TouchableHighlight>
        );
    };

    _showListItems = (sectionId, title) => {
        this.props.navigation.navigate(
            'ListItems', {id: sectionId, name: title}
        );
    };

    render() {
        const emptyList = (
            <View style={styles.container}>
                <Text style={styles.emptyListMessage}>Ready to start saving?</Text>
                <Button
                    raised
                    title='Create List'
                    backgroundColor='green'
                />
            </View>
        );

        const populatedList = (
            <List>
                <ListView
                    renderRow={this._renderRow}
                    dataSource={this.state.dataSource}
                />
            </List>
        );

        return (
            <View>
                {this.state.dataSource.getRowCount() > 0 ? populatedList : emptyList}
            </View>
        );
    }
}