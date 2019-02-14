import React from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Markup } from 'interweave';

export default class EditForm extends React.Component {
  constructor(props) {
    super(props);
    if (props.post != null) {
      this.state = {
        id: props.post.id,
        mainPart: props.post.mainPart,
        header: props.post.header
      };
    } else {
      this.state = {
        mainPart: "",
        header:""
      };
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleHeader = this.handleHeader.bind(this);
    this.handleSave   = this.handleSave.bind(this);
  }

  handleChange(event, data) {
    this.setState({mainPart: data });
  }

  handleHeader(event) {
    this.setState({header: event.target.value });
  }

  handleSave(event) {
    this.props.mutate({
      variables: this.state
    }).catch((error) => {
      console.log('there was an error sending the query', error);
    });
  }

  render() {
    return(
      <div>
        <label>
          Header:
          <input type="text" value={this.state.header} onChange={this.handleHeader} />
        </label>
        <CKEditor
          editor={ClassicEditor}
          data={this.state.mainPart}
          onChange={(event, editor) => {
            const data = editor.getData();
            this.handleChange(event, data);
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
