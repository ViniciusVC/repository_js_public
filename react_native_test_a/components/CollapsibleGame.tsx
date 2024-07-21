import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

export function CollapsibleGame({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';

  return (
    <View>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
        <Ionicons
          name={isOpen ? 'chevron-down' : 'chevron-forward-outline'}
          size={18}
          color="#00FFFF"
        />
        <Text style={styles.titleStyle}>
          {title}
        </Text>
      </TouchableOpacity>
      {isOpen && <View style={styles.content}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    color:"#00FFFF"
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
  titleStyle: {
    color: "#00f0f0",
    lineHeight: 24,
    fontSize: 20, 
  }
});
