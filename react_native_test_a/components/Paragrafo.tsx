import { Text, View, StyleSheet } from 'react-native';
import { PropsWithChildren, useState } from 'react';

export function P({children}: PropsWithChildren) {
  return (
    <View>
      <Text style={styles.paragrafo}>
        {children}
      </Text>
    </View>
  );
}

/*
export function P({
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
*/
const styles = StyleSheet.create({
  paragrafo: {
    color: "#008080",
    fontSize: 15,
    lineHeight: 24,
  },
});
