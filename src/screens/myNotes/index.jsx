import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {screenStyle} from '../../styles/screenStyle';
import Header from '../../components/router/header';
import FloatActionButton from '../../components/uı/floatActionButton';
import {useNavigation} from '@react-navigation/native';
import {ADDNOTE} from '../../utils/router';
import {mockData} from '../../utils/mockData';
import NoteCard from '../../components/myNotes/noteCard';

const MyNotes = () => {
  const navigation = useNavigation();

  const [notes, setNote] = useState([
    {
      id: 1,
      title: 'Frontend Developer',
      description: 'Bu 1.notun açıklamasıdır.',
      date: '19:52',
    },
    {
      id: 2,
      title: 'Backend Developer',
      description: 'Bu 2.notun açıklamasıdır.',
      date: '19:52',
    },
    {
      id: 3,
      title: 'Fullstack Developer',
      description: 'Bu 3.notun açıklamasıdır.',
      date: '19:52',
    },
    {
      id: 4,
      title: 'React Native Developer',
      description: 'Bu 4.notun açıklamasıdır.',
      date: '19:52',
    },
  ]);

  let note1 = {
    id: 5,
    title: 'elif',
    description: 'Bu 5.notun açıklamasıdır.',
    date: '19:52',
  };
  let note2 = {
    id: 6,
    title: 'betül',
    description: 'Bu 6.notun açıklamasıdır.',
    date: '19:52',
  };
  let note3 = {
    id: 7,
    title: 'kenan',
    description: 'Bu 7.notun açıklamasıdır.',
    date: '19:52',
  };

  // ekleme fonksiyonu
  const addNote = item => {
    if (item) {
      setNote([...notes, item]);
    }
  };

  // silme fonksiyonu
  const deleteNote = id => {
    const updatedItems = notes.filter(item => item.id !== id);
    setNote(updatedItems);
  };

  useEffect(() => {
    setTimeout(() => {
      setNote([...notes, note2]);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <Header />

        <FlatList
          data={notes}
          renderItem={({item}) => (
            <NoteCard item={item} deleteItem={item => deleteNote(item.id)} />
          )}
          keyExtractor={item => item.id.toString()}
        />

        <FloatActionButton
          // onPress={() => addNote(note2)}
          onPress={() => navigation.navigate(ADDNOTE, {type: 'add'})}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;

const styles = StyleSheet.create({});
