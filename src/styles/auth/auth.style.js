import { StyleSheet } from 'react-native'
import Theme from '../theme.style'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 21,
    color: Theme.RAIL_GREEN,
    marginBottom: 15,
  },
  button: {
    alignSelf: 'stretch',
    height: Theme.DEFAULT_ITEM_HEIGHT,
    justifyContent: 'center',
    borderRadius: 50,
  },
})
