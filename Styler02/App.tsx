import React from 'react';

import {Text, View, SafeAreaView, ScrollView} from 'react-native';

import FlatCard from './components/FlatCard';
import ElevatedApp from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCard/>
          <ElevatedApp/>
          <FancyCard/>
          <ActionCard/>
          <ContactList/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
