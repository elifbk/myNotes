import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/color';

const Button = props => {
  const {title, style} = props;

  return (
    <TouchableOpacity {...props}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  title: {
    color: AppColors.PINK,
    fontSize: 16,
    fontWeight: '600',
  },
});
