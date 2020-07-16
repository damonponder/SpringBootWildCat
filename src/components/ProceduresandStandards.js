import React from 'react';
import {bindActionCreators} from 'redux';
import * as formActions from '../redux/form/action';
import {connect} from 'react-redux';
import { StyleSheet, View,Text, SafeAreaView, ScrollView, Button, CheckBox, Alert } from 'react-native';

 class ProcedureandStandards extends React.Component {
    constructor(props){
        super(props)

            this.state = {
                Adequate:null,
                NotAdequate:null,
                Followed:null,
                NotFollowed:null,
                Known:null,
                NotKnown:null,
                NotinPlace:null
            
    }
    this.storeAndNavigate = this.storeAndNavigate.bind(this)
};

  
  render() {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{flex:1,flexDirection:'row'}}>
        <Text style={styles.text}>
         Adequate
        </Text>
        <CheckBox
        value={this.state.Adequate}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Adequate:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Not Adequate
        </Text>
        <CheckBox
        value={this.state.NotAdequate}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({NotAdequate:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
        <Text style={styles.text}>
         Followed
         </Text>
        <CheckBox
        value={this.state.Followed}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Followed:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Not Followed
        </Text>
        <CheckBox
        value={this.state.NotFollowed}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({NotFollowed:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Known
        </Text>
        <CheckBox
        value={this.state.Known}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Known:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Not Known
        </Text>
        <CheckBox
        value={this.state.NotKnown}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({NotKnown:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Use of PPE 
        </Text>
        <CheckBox
        value={this.state.NotinPlace}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({NotinPlace:value})}}
        />
        </View>
        <Text style={{marginTop:40}}>To Proceed to the next Screen</Text>
        <Button title={'Submit Form User Info'} onPress={() => {this.storeAndNavigate()}}></Button>
      </ScrollView>
    </SafeAreaView>
  );
}

storeAndNavigate(){
    
    console.log('this.props 2',this.props)
    var procedureandStandardSelections = []
    if(this.state.Adequate===true){
        procedureandStandardSelections.push("Adequate")
    }
    if(this.state.NotAdequate===true){
        procedureandStandardSelections.push('Not Adequate')
    }
    if(this.state.Followed===true){
        procedureandStandardSelections.push('Followed')
    }
    if(this.state.NotFollowed===true){
        procedureandStandardSelections.push('Not Followed')
    }
    if(this.state.Known===true){
        procedureandStandardSelections.push('Known')
    }
    if(this.state.NotKnown===true){
        procedureandStandardSelections.push('Not Known')
    }
    if(this.state.NotinPlace===true){
        procedureandStandardSelections.push('Not in Place')
    }
    
    this.props.actions.addProcedureAndStandardsCategories(
      procedureandStandardSelections
      );
    //navigate
    this.props.navigation.navigate('Submit')
}
}

const styles = StyleSheet.create({
    inputStyle: {
        marginTop: 20,
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: 'yellow',
      },
  container: {
    flex: 1,
    paddingTop:40,
    alignItems:'center'
    // marginTop: Constants.statusBarHeight,
  },

  scrollView: {
   // backgroundColor: 'black',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 14,
    color: 'black'
  },
});

const mapStateToProps = (state) => ({
    verify: state,
  });

  
  const ActionCreators = Object.assign({}, formActions);
  
  const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(ActionCreators, dispatch),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProcedureandStandards);