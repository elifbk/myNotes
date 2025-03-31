import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ADDNOTE, MYNOTES, NOTEDETAIL} from '../utils/router';
import MyNotes from '../screens/myNotes';
import NoteDetail from '../screens/noteDetail';
import AddNote from '../screens/addNote';
import HeaderRight from '../components/uı/headerRight';
import {AppColors} from '../theme/color';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Geri',
        headerTintColor: AppColors.PRIMARY,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={MYNOTES}
        component={MyNotes}
      />
      <Stack.Screen
        options={{headerRight: () => <HeaderRight />}}
        name={ADDNOTE}
        component={AddNote}
      />
      <Stack.Screen name={NOTEDETAIL} component={NoteDetail} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
