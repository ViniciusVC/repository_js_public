import { Text, View, StyleSheet } from 'react-native';

export function H1({
  ...rest
}) {
  return (
    <View>
    <Text
      style={styles.paragrafo}
      {...rest}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  paragrafo: {
    color: "#00f0f0",
    paddingTop: 10,
    paddingBottom: 10,
    lineHeight: 24,
    fontSize: 30, // Tamanho da letra.
    fontWeight: "700", // Fonte negrito forte.
  },
});
