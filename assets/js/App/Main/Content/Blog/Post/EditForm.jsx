import React, {Suspense} from "react";
import ReactMarkdown from 'react-markdown';
import TextareaAutosize from 'react-textarea-autosize';
import TagsInput from 'react-tagsinput'
import style from './EditForm.less'
import {boundMethod} from 'autobind-decorator'
const Code = React.lazy(() => import(/* webpackChunkName: "/js/Code" */ './Code'));

export default class EditForm extends React.Component {
  constructor(props) {
    super(props);
    if (props.post != null) {
      let {id, summary, short, mainPart, header, headImage, tags} = this.props.post;
      this.state = {
        id: id,
        summary: summary,
        short: short,
        mainPart: mainPart,
        header: header,
        headImage: headImage,
        tags: tags
      };
    } else {
      this.state = {
        summary: "",
        short: true,
        mainPart: "",
        header:"",
        headImage: "",
        tags: []
      };
    }
  }

  @boundMethod
  handleChangeTags(tags) {
    this.setState({tags: tags})
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
        <button onClick={this.handleSave}>
          Save
        </button>
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
        <TagsInput
          value={this.state.tags}
          onChange={this.handleChangeTags}
          className={style.react_tagsinput}
          tagProps={{className: style.react_tagsinput_tag, classNameRemove: style.react_tagsinput_remove}}
          inputProps={{className: style.react_tagsinput_input}}
        />
        <button onClick={this.handleSave}>
          Save
        </button>
        <Suspense fallback={ <div>Loading...</div> }>
          <ReactMarkdown source={this.state.mainPart} escapeHtml={false} renderers={{ code: Code }}/>
        </Suspense>
      </div>
    );
  }
}
