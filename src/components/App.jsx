class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillLoad() {
		console.log('will load');
	}

	render() {
		return(
			<span>It worked!</span>
			);
	}
}