import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents() {
    return (<View style={styles.container}>
        <View style={styles.header}>
            <Image source={logoImg} />
            <Text style={styles.headerText}>
                Total de <Text style={styles.headerTextBold}>0 casos</Text>
            </Text>
        </View>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.description}>Escolha um dos casos abaixo.</Text>

        <View style={styles.incidentList}>
            <View style={styles.incident}>
                <Text style={styles.incidentProperty}></Text>
                <Text style={styles.incidentValue}></Text>

                <Text style={styles.incidentProperty}></Text>
                <Text style={styles.incidentValue}></Text>

                <Text style={styles.incidentProperty}></Text>
                <Text style={styles.incidentValue}></Text>

                <TouchableOpacity style={styles.detailsButton} onPress={() => { }}>
                    <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                    <Feather name="arrow-right" size={16} color="e02041" />
                </TouchableOpacity>
            </View>
        </View>
    </View>);
}