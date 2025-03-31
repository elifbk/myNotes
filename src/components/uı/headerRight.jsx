import {More, Paperclip2, Share} from 'iconsax-react-native';
import {StyleSheet, View} from 'react-native';
import {AppColors} from '../../theme/color';

export default function HeaderRight() {
  return (
    <View style={styles.container}>
      <Paperclip2 size="24" color={AppColors.PRIMARY} />
      <Share size="24" color={AppColors.PRIMARY} style={styles.icon} />
      <More size="24" color={AppColors.PRIMARY} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 5,
  },
});
