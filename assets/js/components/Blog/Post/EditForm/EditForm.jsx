import React from "react";
import ReactMarkdown from "react-markdown";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Markup } from 'interweave';
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const UPDATE_POST_MUTATION = gql`
  mutation updatePost($id: Int!, $mainPart: !String) {
    updatePost(id: $id, mainPart: $mainPart) {
        id
        mainPart
    }
  }
`

export default class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: this.props.post };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSave   = this.handleSave.bind(this);
  }

  handleChange(event, data) {
    this.setState({post: {...this.state.post, mainPart: data }});
  }

  handleSave(event) {
    console.log("Saved:" + this.state.post.mainPart)
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.post.mainPart);
    event.preventDefault();
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
