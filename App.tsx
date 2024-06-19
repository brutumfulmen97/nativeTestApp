/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Hello from '@/components/Hello';
import Boxes from '@/components/Boxes';
import Flag from '@/components/Flag';
import FlexDirection from '@/components/FlexDirection';
import LayoutDirection from '@/components/LayoutDirection';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    console.log('useEffect', count);
  }, [count]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar />
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View>
        <Text>OVO JE KOMPONENETAAAA</Text>
        <Hello name="World" />
      </View>
      <Boxes />
      <Flag height={100} />
      <FlexDirection />
      <LayoutDirection />
      <View
        style={{
          padding: 20,
        }}>
        <Text
          style={{
            fontSize: 48,
            color: isDarkMode ? Colors.white : Colors.black,
            textAlign: 'center',
          }}>
          cao sta imaaaaaa????
        </Text>
        <TextInput
          style={{
            borderColor: 'gray',
            borderWidth: 1,
            width: 100,
            fontSize: 24,
          }}
          onChangeText={text => setCount(parseInt(text) || 0)}
          value={count.toString()}
          keyboardType="numeric"
        />
        <Text>{count}</Text>
      </View>
      <ScrollView>
        <View
          style={{
            padding: 20,
          }}>
          <Text
            style={{
              fontSize: 48,
              color: isDarkMode ? Colors.white : Colors.black,
              textAlign: 'center',
            }}>
            cao sta ima?
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          style={{
            width: 64,
            height: 64,
          }}
        />
      </ScrollView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
