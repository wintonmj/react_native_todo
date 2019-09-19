import React from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import styles from '../styles/pageStyles';
import logOutService from "../services/logOutService";
import bstyles from '../styles/buttonStyles';
import textStyles from '../styles/textStyles';

export class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            messages: []
        };
        this.renderBubble = this.renderBubble.bind(this);
        this.renderSystemMessage = this.renderSystemMessage.bind(this);
    }
}