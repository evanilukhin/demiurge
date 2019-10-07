import React, { PureComponent } from "react";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import ruby from "react-syntax-highlighter/dist/esm/languages/prism/ruby"
SyntaxHighlighter.registerLanguage('ruby', ruby);

class Code extends PureComponent {
  render() {
    const { language, value } = this.props;
    return (
      <SyntaxHighlighter language={language} style={coy}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default Code;
