import React from "react";
import quotesList from "./quotes.json";


class QuoteBox extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			quoteObject: '' 
		}
		this.getQuote = this.getQuote.bind(this);
	}
	getQuote() {
		const quotes = quotesList.quotes
		let currentQuote = ''
		if (this.state.quoteObject !== undefined ) {
			currentQuote = this.state.quoteObject.quote
		}
		let newArray = quotes.filter(quote => quote.quote !== currentQuote)
		let quoteObject = newArray[Math.floor(Math.random() * newArray.length)]
		this.setState({quoteObject: quoteObject})
		
	}

	componentDidMount() {
		this.getQuote()
	}

	render() {
		return (

				<div id="quote-box" className="box">

					<h2 id="text" className="title">
						{this.state.quoteObject.quote}
					</h2>
					<p id="author" className="author">{this.state.quoteObject.author}</p>
					<div className="box-footer">
						<button id="new-quote" onClick={this.getQuote}>New Quote</button>
						<a id="tweet-quote" href="https://twitter.com/intent/tweet" className="fa fa-twitter">Tweet</a>
					</div>
					
					  
				</div>
		)
	}
}

export default QuoteBox