const { Component } = require("react");
import API from "../utils/API";
import List from "../components/List";
import {Input, FormBtn} from "../components/Form";
import { Col, Row, Container } from "../components/Grid";

class Home extends Component {
	state = {
		results: [],
		search: "",
		q: "",
		message: "Search for a Book to Begin!"
	};
	componentDidMount() {
		API.getBooks()
			.then(res => this.setState({ results: res.data.message }))
			.catch(err => console.log(err));
	}

	handleInputChange = event => {
		this.setState({ search: event.target.value });
	};

	handleFormSubmit = event => {
		event.preventDefault();
		API.getBooks(this.state.search)
			.then(res => {
				if (res.data.status === "error") {
					throw new Error(res.data.message);
				}
				this.setState({ results: res.data.message, error: "" });
			})
			.catch(err => this.setState({ error: err.message }));
	};
	render() {
		return (
			<div>
				<Container>
					<Row>
						<Col size="md-12">
							<h1>Search For your Perfect Book!</h1>
							<Form handleFormSubmit={this.handleFormSubmit}
								handleInputChange={this.handleInputChange}/>
							<Input placeholder="search" />
							
							<Formbtn  />
						</Col>
					</Row>

				</Container>

			</div>
		);
	}
}
export default Home;