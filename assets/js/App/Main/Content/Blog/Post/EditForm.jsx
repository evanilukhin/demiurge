import React from "react";
import ReactMarkdown from 'react-markdown';
import TextareaAutosize from 'react-textarea-autosize';
import {boundMethod} from 'autobind-decorator'

import Code from "./Code";

export default class EditForm extends React.Component {
  constructor(props) {
    super(props);
    if (props.post != null) {
      let {id, summary, short, mainPart, header, headImage} = this.props.post;
      this.state = {
        id: id,
        summary: summary,
        short: short,
        mainPart: mainPart,
        header: header,
        headImage: headImage
      };
    } else {
      this.state = {
        summary: "",
        short: true,
        mainPart: "",
        header:"",
        headImage: ""
      };
    }
  }

  @boundMethod
  handleShortChange(event) {
    this.setState({short: event.target.checked});
  }

  @boundMethod
  handleSummaryChange(event) {
    this.setState({summary: event.target.value});
  }

  @boundMethod
  handleMainPartChange(event) {
    this.setState({mainPart: event.target.value });
  }

  @boundMethod
  handleHeader(event) {
    this.setState({header: event.target.value });
  }

  @boundMethod
  handleHeadImage(event) {
    this.setState({headImage: event.target.value});
  }

  @boundMethod
  handleSave(event) {
    this.props.mutate({
      variables: this.state
    }).catch((error) => {
      console.log('there was an error, when sending the query', error);
    });
  }

  render() {
    return(
      <div>
        <label>
          Header:
          <input type="text" value={this.state.header} onChange={this.handleHeader} />
        </label>
        <label>
          Head Image:
          <input type="text" value={this.state.headImage} onChange={this.handleHeadImage} />
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
