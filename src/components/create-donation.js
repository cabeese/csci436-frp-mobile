import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, TextInput } from 'react-native';
import { connect } from 'react-redux'
import { fetchDonations } from '../redux/actions'
import ListItem from "./list-item"

class CreateDonation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            itemCt: 1,
            name: '',
            phone: '',
            location: ''
        }
        this._getChildState = this._getChildState.bind(this);
        this._postDonation = this._postDonation.bind(this);
    }

    _renderItems(){
        let ret = [];
        for(let i=0; i<this.state.itemCt; i++){
            ret.push(<ListItem ref={`item${i}`} key={i} />);
        }
        return ret;
    }

    _getChildState(){
        let ret = [];
        for(let i=0; i<this.state.itemCt; i++){
            ret.push(this.refs[`item${i}`].exportState());
        }
        return ret;
    }

    _addItem(){ this.setState({itemCt: this.state.itemCt+1}); }
    _removeItem(){
        let { itemCt } = this.state;
        if(itemCt > 1){
            this.setState({itemCt: itemCt - 1});
        }
    }

    _postDonation(){
        const items = this._getChildState();
        console.log("We would now post this");
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>You're creating a new donation:</Text>
                <TextInput style={styles.input}
                    placeholder='Name'
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.name} />

                <TextInput style={styles.input}
                    placeholder='Phone'
                    onChangeText={(phone) => this.setState({phone})}
                    value={this.state.phone} />

                <TextInput style={styles.input}
                    placeholder='Location'
                    onChangeText={(location) => this.setState({location})}
                    value={this.state.location} />

                {this._renderItems()}

                <View style={styles.buttonContainer}>
                    <Button title="Add Item" onPress={this._addItem.bind(this)} />
                    <Button title="Remove Item" onPress={this._removeItem.bind(this)} />
                </View>
                    <Button title="Post Donation" onPress={this._postDonation} />
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      height: "50%",
      backgroundColor: '#ffeeee',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {},
    input:{
        height: 40, 
        width: 150,
        padding: 5,
        color: 'gray',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 5
    },
    buttonContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        margin: 5
    }
});

export default CreateDonation
