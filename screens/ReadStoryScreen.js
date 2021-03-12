import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.allText}>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Story Hub App</Text>
        </TouchableOpacity>

        <Text style={styles.displayText}>
          In a big city lived a little boy named Tom.
He lived with his mom, dad, and little brother.
One day when he came home from soccer practice, he went to change his clothes.
Then, he heard his mirror talking!
"MWA HA HA HA HA!!", the mirror laughed.
"You are finally going to let me free!"
Tom had many questions, but as soon as he began talking, the mirror had sucked him in!
"Where am I?", Tom thought to himself.
One second he was in his room, the next he was in this weird and unfamiliar landscape...
        </Text>

        <Text style={styles.displayText}>
          More to come soon...
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    backgroundColor: '#abe6ff',
    flex: 1,
    fontFamily: 'britannic',
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
  displayText: {
    fontFamily: 'britannic',
    fontSize: 19,
    padding: 15,
  },
});