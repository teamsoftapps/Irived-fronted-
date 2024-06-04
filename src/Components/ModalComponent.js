import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

const ModalComponent = ({
  children,
  style,
  onBackdropPress,
  isVisible = true,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      style={{...styles.main, ...style}}>
      {children}
    </Modal>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({});
