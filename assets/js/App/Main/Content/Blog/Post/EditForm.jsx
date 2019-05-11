import React from "react";
import ReactMarkdown from 'react-markdown';
import TextareaAutosize from 'react-textarea-autosize';

import Code from "./Code";

export default class EditForm extends React.Component {
  constructor(props) {
    super(props);
    if (props.post != null) {
      this.state = {
        id: props.post.id,
        summary: props.post.summary,
        short: props.post.short,
        mainPart: props.post.mainPart,
        header: props.post.header
      };
    } else {
      this.state = {
        summary: "",
        short: true,
        mainPart: "",
        header:""
      };
    }
    this.handleShortChange   = this.handleShortChange.bind(this);
    this.handleSummaryChange =  this.handleSummaryChange.bind(this);
    this.handleMainPartChange = this.handleMainPartChange.bind(this);
    this.handleHeader = this.handleHeader.bind(this);
    this.handleSave   = this.handleSave.bind(this);
  }
  handleShortChange(event) {
    this.setState({short: event.target.checked});
  }
  handleSummaryChange(event) {
    this.setState({summary: event.target.value});
  }
  handleMainPartChange(event) {
    this.setState({mainPart: event.target.value });
  }

  handleHeader(event) {
    this.setState({header: event.target.value });
  }

  handleSave(event) {
    this.props.mutate({
      variables: this.state
    }).catch((error) => {
      console.log('there was an error, whesending the query', error);
    });
  }

  render() {
    return(
      <div>
        <label>
          Header:
          <input type="text" value={this.state.header} onChange={this.handleHeader} />
        </label>
        <TextareaAutosize value={this.state.summary} onChange={this.handleSummaryChange} style={{width: '100%'}} />
        <input type="checkbox" checked={this.state.short} onChange={this.handleShortChange}/>
        <TextareaAutosize
          value={this.state.mainPart}
          onChange={this.handleMainPartChange}
          style={{width: '100%'}}
          minRows={10}/>
        <ReactMarkdown source={this.state.mainPart} escapeHtml={false} renderers={{ code: Code }}/>
        <button onClick={this.handleSave}>
          Save
        </button>
      </div>
    );
  }
}
