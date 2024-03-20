import {Image, Text, View} from 'react-native';
import {styles} from './DetailStyles';
import {ActivityIndicator} from "react-native";
import usePokemonDetails from '../../hooks/ usePokemonDetails';

interface Props {
    route?: any,
}

export default function DetailScreen({route}: Props) {
    const {image, name} = route?.params;
    const {pokemonDetails, isLoading, error} = usePokemonDetails(name);

    if (isLoading) {
        return <ActivityIndicator style={styles.activity}></ActivityIndicator>
    }

    if (error) {
        return <Text>Error: {error}</Text>;
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.statContainer}>
                <Text style={styles.statName}>Types:</Text>
                <Text>{pokemonDetails?.types[0].type.name}</Text>
            </View>
            <View style={styles.statContainer}>
                <Text style={styles.statName}>Height:</Text>
                <Text>{pokemonDetails?.height}</Text>
            </View>
            <View style={styles.statContainer}>
                <Text style={styles.statName}>Weight:</Text>
                <Text>{pokemonDetails?.weight}</Text>
            </View>
            <View style={styles.statContainer}>
                <Text style={styles.statName}>HP:</Text>
                <Text>{pokemonDetails?.stats[0].base_stat}</Text>
            </View>
            <View style={styles.statContainer}>
                <Text style={styles.statName}>Attack:</Text>
                <Text>{pokemonDetails?.stats[1].base_stat}</Text>
            </View>
            <View style={styles.statContainer}>
                <Text style={styles.statName}>Defense:</Text>
                <Text>{pokemonDetails?.stats[2].base_stat}</Text>
            </View>
        </View>
    );
}
