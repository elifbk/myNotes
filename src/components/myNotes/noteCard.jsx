import {Edit2, Trash} from 'iconsax-react-native';
import {Text, TouchableOpacity, View} from 'react-native';
import {AppColors} from '../../theme/color';
import {noteCardStyle} from '../../styles/noteCardStyle';
import {useNavigation} from '@react-navigation/native';
import {ADDNOTE, NOTEDETAIL} from '../../utils/router';

const NoteCard = ({item, deleteItem}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(NOTEDETAIL, {note: item})}
      style={noteCardStyle.container}>
      <View style={noteCardStyle.bubleContainer}>
        <View style={noteCardStyle.buble}></View>
      </View>

      <View style={noteCardStyle.noteContainer}>
        <Text style={noteCardStyle.title}>{item.title}</Text>
        <Text style={noteCardStyle.description}>{item.description}</Text>
        <Text style={noteCardStyle.date}>{item.date}</Text>
      </View>

      <TouchableOpacity
        onPress={() => deleteItem(item)}
        style={noteCardStyle.buttonContainer}>
        <Trash size="24" color={AppColors.RED} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate(ADDNOTE, {note: item, type: 'update'})
        }
        style={noteCardStyle.buttonContainer}>
        <Edit2 size="24" color={AppColors.GREEN} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default NoteCard;
