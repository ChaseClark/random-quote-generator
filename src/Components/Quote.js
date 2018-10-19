import React, { Component } from "react";
import axios from 'axios'
import SimpleCard from "./SimpleCard";

export default class Quote extends Component {
  state = {
    quote: '',
    author: '',
  };
  
  componentDidMount(){
    this.getQuote()
  }

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

  handleClick(event) {
    event.preventDefault()
    this.getQuote()
  }

  tweet() {
    let q = this.strip(this.state.quote)
    let a = this.strip(this.state.author)
    return (`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${q} - ${a}`)}`)

  }

  strip(html) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

  render() {
    return (
      <div>
        <SimpleCard content={this.state.quote} author={this.state.author} handler={this.handleClick.bind(this)} url={this.tweet()} />
      </div>
    );
  }
}
