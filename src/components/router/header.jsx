import {Text, View} from 'react-native';
import {MYNOTES} from '../../utils/router';
import {screenStyle} from '../../styles/screenStyle';
import {AppColors} from '../../theme/color';
import {HambergerMenu, More, SearchNormal1} from 'iconsax-react-native';

const Header = () => {
  return (
    <View style={screenStyle.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 10,
        }}>
        <Text style={{fontSize: 35, color: AppColors.PRIMARY}}>{MYNOTES}</Text>
      </View>

      <View style={{flexDirection: 'row', paddingVertical: 10}}>
        <View style={{padding: 5, flex: 1, justifyContent: 'center'}}>
          <HambergerMenu size="24" color={AppColors.PRIMARY} />
        </View>

        <View
          style={{
            padding: 15,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <SearchNormal1
            size="24"
            color={AppColors.PRIMARY}
            style={{marginEnd: 10}}
          />
          <More size="24" color={AppColors.PRIMARY} />
        </View>
      </View>
    </View>
  );
};

export default Header;
