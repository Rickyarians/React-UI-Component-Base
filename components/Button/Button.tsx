import {TouchableOpacity, Text} from 'react-native';
import {useTheme} from '../../theme/ThemeProvider';

export const Button = ({title}:any) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme.colors.abubutek,
        borderRadius: 8
      }}>
      <Text style={{color: '#fff'}}>{title}</Text>
    </TouchableOpacity>
  );
};