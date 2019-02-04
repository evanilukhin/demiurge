import React from "react";
import ReactMarkdown from "react-markdown";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Markup } from 'interweave';
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'



export default class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: this.props.post };
    this.handleChange = this.handleChange.bind(this);
    this.handleSave   = this.handleSave.bind(this);
  }

  handleChange(event, data) {
    this.setState({post: {...this.state.post, mainPart: data }});
  }

  handleSave(event) {
    this.props.mutate({
      variables: { id: this.state.post.id, mainPart: this.state.post.mainPart }
    }).then(({ data }) => {
        console.log('got data', data);
    }).catch((error) => {
        console.log('there was an error sending the query', error);
    });
  }

  render() {
    return(
      <div>
        <CKEditor
          editor={ClassicEditor}
          data={this.state.post.mainPart}
          onChange={(event, editor) => {
            const data = editor.getData();
            this.handleChange(event, data);
          }}
        />
        <Markup content={this.state.post.mainPart} />
        <button onClick={this.handleSave}>
          Save
        </button>
      </div>
    );
  }
}
