import {FlatList, TouchableOpacity, View, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native';
import {styles} from './DashBoardStyles';
import {images} from '../../images';
import {ActivityIndicator} from "react-native";
import usePokemonData from '../../hooks/usePokemonData';

export default function DashBoardScreen({navigation}: any) {
    const {pokemonData, isLoading, error} = usePokemonData('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');

    if (isLoading) {
        return <ActivityIndicator style={styles.activity}></ActivityIndicator>
    }

    if (error) {
        return <Text>Error: {error}</Text>;
    }

    return (
        <SafeAreaView>
            <FlatList
                data={pokemonData}
                renderItem={({item, index}) => (
                    <TouchableOpacity
                        onLongPress={() =>
                            navigation.navigate('About', {
                                image: images[index],
                                name: item.name,
                                stats: `https://pokeapi.co/api/v2/pokemon/${item.name}`,
                            })
                        }
                        activeOpacity={0.7}>
                        <View style={styles.listItem}>
                            <Image source={images[index]} style={styles.image}/>
                            <Text style={styles.text}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(_item, index) => index.toString()}
            />
        </SafeAreaView>
    );
}
