import React from "react";
import { Markup } from 'interweave';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
  handleMainPartChange(event, data) {
    this.setState({mainPart: data });
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
        <textarea value={this.state.summary} onChange={this.handleSummaryChange} rows="6" cols="95" />
        <input type="checkbox" checked={this.state.short} onChange={this.handleShortChange}/>
        <CKEditor
          editor={ClassicEditor}
          data={this.state.mainPart}
          onChange={(event, editor) => {
            const data = editor.getData();
            this.handleMainPartChange(event, data);
          }}
        />
        <Markup content={this.state.mainPart} />
        <button onClick={this.handleSave}>
          Save
        </button>
      </div>
    );
  }
}
