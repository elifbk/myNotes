import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppColors} from '../../theme/color';
import {
  TextalignCenter,
  TextalignLeft,
  TextalignRight,
  TextBold,
  TextItalic,
  TextUnderline,
} from 'iconsax-react-native';

const EditButtons = ({onChangeStyle}) => {
  const Buttons = [
    {
      id: 1,
      value: 'bold',
      icon: <TextBold size="28" color={AppColors.PRIMARY} />,
    },
    {
      id: 2,
      value: 'italic',
      icon: <TextItalic size="28" color={AppColors.PRIMARY} />,
    },
    {
      id: 3,
      value: 'textUnderline',
      icon: <TextUnderline size="28" color={AppColors.PRIMARY} />,
    },
    {
      id: 4,
      value: 'left',
      icon: <TextalignLeft size="28" color={AppColors.PRIMARY} />,
    },
    {
      id: 5,
      value: 'center',
      icon: <TextalignCenter size="28" color={AppColors.PRIMARY} />,
    },
    {
      id: 6,
      value: 'right',
      icon: <TextalignRight size="28" color={AppColors.PRIMARY} />,
    },
  ];

  return (
    <View style={styles.container}>
      {Buttons.map(item => (
        <TouchableOpacity
          onPress={() => onChangeStyle(item.value)}
          key={item.id}>
          {item.icon}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default EditButtons;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.PEACH,
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-around',
  },
});
