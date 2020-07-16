import React from 'react';
import {bindActionCreators} from 'redux';
import * as formActions from '../redux/form/action';
import {connect} from 'react-redux';
import { StyleSheet, View,Text, SafeAreaView, ScrollView, Button, CheckBox, Alert } from 'react-native';

 class Health extends React.Component {
    constructor(props){
        super(props)

            this.state = {
                ColdTemps:null,
                HotTemps:null,
                Ingestion:null,
                Inhalation:null,
                Noise:null,
                Radiation:null,
                SkinContact:null,
                
            
    }
    this.storeAndNavigate = this.storeAndNavigate.bind(this)
};

  
  render() {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{flex:1,flexDirection:'row'}}>
        <Text style={styles.text}>
         Cold Temps
        </Text>
        <CheckBox
        value={this.state.ColdTemps}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({ColdTemps:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Hot Temps
        </Text>
        <CheckBox
        value={this.state.HotTemps}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({HotTemps:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
        <Text style={styles.text}>
         Ingestion
         </Text>
        <CheckBox
        value={this.state.Ingestion}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Ingestion:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Inhalation
        </Text>
        <CheckBox
        value={this.state.Inhalation}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Inhalation:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Noise
        </Text>
        <CheckBox
        value={this.state.Noise}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Noise:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Radiation
        </Text>
        <CheckBox
        value={this.state.Radiation}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Radiation:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
        Skin Contact
        </Text>
        <CheckBox
        value={this.state.SkinContact}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({SkinContact:value})}}
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
    var healthSelections = []
    if(this.state.ColdTemps===true){
        healthSelections.push("Cold Temps")
    }
    if(this.state.HotTemps===true){
        healthSelections.push('Hot Temps')
    }
    if(this.state.Ingestion===true){
        healthSelections.push('Ingestion')
    }
    if(this.state.Inhalation===true){
        healthSelections.push('Inhalation')
    }
    if(this.state.Noise===true){
        healthSelections.push('Noise')
    }
    if(this.state.Radiation===true){
        healthSelections.push('Radiation')
    }
    if(this.state.SkinContact===true){
        healthSelections.push('Skin Contact')
    }
    
    this.props.actions.addHealthCategories(
      healthSelections
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Health);