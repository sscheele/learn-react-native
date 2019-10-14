import React, { Component } from 'react';
import { AppRegistry, FlatList, View, Text } from 'react-native';
import colors from './constants/Colors'

class MovieList extends Component {
	constructor(props) {
		super(props);
		this.state = { dispList: [] };
		fetch('https://facebook.github.io/react-native/movies.json')
		.then((response) => response.json())
    	.then((responseJson) => {
      		this.setState({ dispList: responseJson.movies });
    	})
    	.catch((error) => {
      		console.error(error);
    	});
	}

	renderItem = ({item}) => {
		return (
			<View style={{height: 50, justifyContent: "center"}}>
				<Text>{item.title}</Text>
			</View> 
		);
	};

	itemSeparatorComponent = () => {
		return (
		<View style={{
			height: 1, 
			width: "100%",
			backgroundColor: colors.sepColor
		}}/>
		);
	};

	render() {
		return(
			<FlatList
			data={ this.state.dispList }
			renderItem={ this.renderItem }
			keyExtractor={ item => item.id }
			ItemSeparatorComponent={ this.itemSeparatorComponent }
			/>
		);
	}
}

export default class BasicComp extends Component {
	render() {
		return(
			<View style={{
				paddingTop: 50,
				flex: 1,
				flexDirection: "row"
			}}>
				<View style={{
					flex: 1
				}}>
					<MovieList />
				</View>
				<View style={{
					flex: 2
				}}>
					<MovieList />
				</View>
			</View>
		)
	}
}

AppRegistry.registerComponent('AwesomeProject', () => BasicComp);
