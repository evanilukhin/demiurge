<script>
import { h, onMounted, onUpdated, ref } from 'vue';

import MarkdownIt from 'markdown-it';
import MarkdownItAbbr from 'markdown-it-abbr';
import MarkdownItAnchor from 'markdown-it-anchor';
import MarkdownItDeflist from 'markdown-it-deflist';
import MarkdownItEmoji from 'markdown-it-emoji';
import MarkdownItFootnote from 'markdown-it-footnote';
import MarkdownItHighlightjs from 'markdown-it-highlightjs';
import MarkdownItIns from 'markdown-it-ins';
import MarkdownItMark from 'markdown-it-mark';
import MarkdownItSub from 'markdown-it-sub';
import MarkdownItSup from 'markdown-it-sup';
import MarkdownItTasklists from 'markdown-it-task-lists';
import MarkdownItTOC from 'markdown-it-toc-done-right';
import markdownItClass from '@toycode/markdown-it-class';

const props = {
  anchor: {
    type: Object,
    default: () => ({})
  },
  breaks: {
    type: Boolean,
    default: false
  },
  emoji: {
    type: Object,
    default: () => ({})
  },
  highlight: {
    type: Object,
    default: () => ({ inline: true })
  },
  html: {
    type: Boolean,
    default: true
  },
  langPrefix: {
    type: String,
    default: 'language-'
  },
  linkify: {
    type: Boolean,
    default: true
  },
  plugins: {
    type: Array,
    default: () => []
  },
  quotes: {
    type: String,
    default: '“”‘’'
  },
  source: {
    type: String,
    default: ''
  },
  tasklists: {
    type: Object,
    default: () => ({})
  },
  toc: {
    type: Object,
    default: () => ({})
  },
  typographer: {
    type: Boolean,
    default: false
  },
  xhtmlOut: {
    type: Boolean,
    default: false
  }
};

export default {
  name: 'markdown-renderer',
  props,
  setup(props) {
    const md = ref();
    const mapping = {
      // a: ['text-blue-300', 'hover:underline'],
    };
    const renderMarkdown = () => {
      let markdown = new MarkdownIt()
          .use(MarkdownItAbbr)
          .use(MarkdownItAnchor, props.anchor)
          .use(markdownItClass, mapping)
          .use(MarkdownItDeflist)
          .use(MarkdownItEmoji, props.emoji)
          .use(MarkdownItFootnote)
          .use(MarkdownItHighlightjs, props.highlight)
          .use(MarkdownItIns)
          .use(MarkdownItMark)
          .use(MarkdownItSub)
          .use(MarkdownItSup)
          .use(MarkdownItTasklists, props.tasklists)
          .use(MarkdownItTOC, props.toc)
          .set({
            breaks: props.breaks,
            html: props.html,
            langPrefix: props.langPrefix,
            linkify: props.linkify,
            quotes: props.quotes,
            typographer: props.typographer,
            xhtmlOut: props.xhtmlOut
          });

      props.plugins.forEach(({ plugin, options = {} }) => {
        markdown.use(plugin, options);
      });

      md.value = markdown.render(props.source);
    };

    onMounted(() => renderMarkdown());
    onUpdated(() => renderMarkdown());

    return () => h('div', { innerHTML: md.value });
  }
};
</script>
