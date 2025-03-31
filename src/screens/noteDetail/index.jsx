import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import EditButtons from '../../components/noteDetail/editButtons';
import {AppColors} from '../../theme/color';
import {useState} from 'react';

const NoteDetail = ({route}) => {
  const [selectStyle, setSelectStyle] = useState(styles.normal);
  const {note} = route?.params;
  const handleStyleChange = value => {
    const newStyle = styles[value] || styles.normal;
    setSelectStyle(newStyle);
  };

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View>
          <EditButtons onChangeStyle={handleStyleChange} />
        </View>

        <View style={{flex: 1, backgroundColor: AppColors.PINK, padding: 10}}>
          <View>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Başlık</Text>
            <Text
              style={{
                fontSize: 26,
                fontWeight: 'bold',
                color: AppColors.PRIMARY,
                marginVertical: 10,
              }}>
              {note.title}
            </Text>
          </View>

          <View>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Note</Text>
            <Text
              style={[
                {
                  fontSize: 16,
                  color: AppColors.SECONDARY,
                  marginVertical: 10,
                },
                selectStyle,
              ]}>
              {note.description}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NoteDetail;

const styles = StyleSheet.create({
  normal: {},
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
});
