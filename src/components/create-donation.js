import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, TextInput } from 'react-native';
import { connect } from 'react-redux'
import { postDonation } from '../redux/actions'
import ListItem from "./list-item"

class CreateDonation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            itemCt: 1,
            name: 'Noah',
            phone: '650-1234',
            location: 'WWU'
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
            let data = {...this.refs[`item${i}`].exportState()};
            data.initialQty = data.qty;
            // TODO: delete this crap and fix the server
            data.remainingQty = data.qty;
            data.qtyUnits = data.units;
            delete data.qty;
            delete data.units;
            ret.push(data);
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
        let data = {
            contactPhone: this.state.phone,
            location: this.state.location,
            items,
        }
        this.props.postDonation(data);
    }

    render() {
        const { loading, errorMessage, justPosted } = this.props;
        let title = justPosted ? "Posted!" : "Post Donation";
        if(loading) title = "Posting...";
        let disabled = loading || justPosted;
        return (
            <View style={styles.container}>
                <View style={styles.userInfoContainer}>
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
                </View>

                <Text>Enter details about this donation:</Text>

                {this._renderItems()}

                <View style={styles.buttonContainer}>
                    <Button title="Add Item" onPress={this._addItem.bind(this)} />
                    <Button title="Remove Item" onPress={this._removeItem.bind(this)} />
                </View>

                <Text>{errorMessage}</Text>

                <Button title={title} disabled={disabled} onPress={this._postDonation} />
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ffeeee',
      flexDirection: 'column',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    userInfoContainer: {
        height: 150,
    },
    item: {},
    input:{
        flexDirection: 'row',
        flex: 1,
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

const mapStateToProps = state => {
    return state.newDonation;
}

export default connect(
    mapStateToProps,
    { postDonation }
)(CreateDonation);
