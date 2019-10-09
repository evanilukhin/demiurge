import React, { PureComponent } from "react";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

class Code extends PureComponent {
  render() {
    const { language, value } = this.props;
    return (
      <SyntaxHighlighter language={language || ""} style={tomorrow}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default Code;
