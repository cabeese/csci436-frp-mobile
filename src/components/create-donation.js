import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { connect } from 'react-redux'
import { fetchDonations } from '../redux/actions'
import ListItem from "./list-item"

class CreateDonation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            itemCt: 1
        }
    }

    _renderItems(){
        let ret = [];
        for(let i=0; i<this.state.itemCt; i++){
            ret.push(<ListItem ref={`item${i}`} key={i} />);
        }
        return ret;
    }

    _getChildState(){
        for(let i=0; i<this.state.itemCt; i++){
            console.log(this.refs[`item${i}`].exportState());
        }
    }

    _addItem(){ this.setState({itemCt: this.state.itemCt+1}); }
    _removeItem(){
        let { itemCt } = this.state;
        if(itemCt > 1){
            this.setState({itemCt: itemCt - 1});
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>You're creating a new donation:</Text>

                {this._renderItems()}

                <Button title="Get state" onPress={this._getChildState.bind(this)} />
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
    item: {}
});

export default CreateDonation
