import React, { Component } from "react";
import axios from 'axios'

export default class Quote extends Component {
  state = {
    quote: '',
    author: '',
  };

  async getQuote() {
    try {
      // grab a quote object and add a timestamp to allow pulling a new quote
      const response = await axios.get(`https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&timestamp=${new Date().getTime()}`);
      console.log(response);
      this.setState({
        quote: response.data[0].content,
        author: response.data[0].title
      })
    } catch (error) {
      console.error(error);
    }
  }

  handleClick(event){
    this.getQuote()
  }

  render() { 
    return (
      <div>
        <p dangerouslySetInnerHTML={{ __html: this.state.quote }}></p>
        <p>-{this.state.author}</p>
        <button onClick={this.handleClick.bind(this)}>New Quote</button>
      </div>
    );
  }
}
