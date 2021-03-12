import * as React from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.allText}>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Story Hub App</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.titleBox}
          placeholder="Write the title"
        />

        <TextInput
          style={styles.authorBox}
          placeholder="Write the author👩🏽"
        />

        <TextInput
          style={styles.storyBox}
          placeholder="Write your story here📖"
        />

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    backgroundColor: '#abe6ff',
    flex: 1,
  },
  header: {
    backgroundColor: 'pink',
    border: 'dashed',
  },
  headerText: {
    fontFamily: 'britannic',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  titleBox: {
     width: '90%',
    height: 20,
    backgroundColor: 'pink',
    fontFamily: 'britannic',
    border: 'dashed',
    borderColor: 'black',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  authorBox: {
    width: '90%',
    height: 20,
    backgroundColor: 'pink',
    fontFamily: 'britannic',
    border: 'dashed',
    borderColor: 'black',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  storyBox: {
    width: '90%',
    height: '40%',
    backgroundColor: 'pink',
    fontFamily: 'britannic',
    border: 'dashed',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  submitButton: {
    backgroundColor: 'pink',
    width: '50%',
    height: 40,
    border: 'dashed',
    marginTop: 10,
    padding: 5,
    marginLeft: 80,
  },
  buttonText: {
    fontFamily: 'britannic',
    textAlign: 'center',
    fontSize: 25,
  },
});
