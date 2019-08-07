import { createGlobalStyle } from 'styled-components'

const langExtColor = [
  { lang: `javascript`, tag: `js`, color: `#f7df1e` },
  { lang: `js`, tag: `js`, color: `#f7df1e` },
  { lang: `jsx`, tag: `jsx`, color: `#61dafb` },
  { lang: `env`, tag: `env`, color: `#ff89d3` },
  { lang: `python`, tag: `py`, color: `#61da84` },
  { lang: `py`, tag: `py`, color: `#61da84` },
  { lang: `graphql`, tag: `graphql`, color: `#E10098` },
  { lang: `gql`, tag: `graphql`, color: `#E10098` },
  { lang: `html`, tag: `html`, color: `#005A9C` },
  { lang: `css`, tag: `css`, color: `#ff9800` },
  { lang: `shell`, tag: `shell`, color: `#c93c00` },
  { lang: `sh`, tag: `sh`, color: `#c93c00` },
  { lang: `bash`, tag: `bash`, color: `#c93c00` },
  { lang: `yml`, tag: `yml`, color: `linen` },
  { lang: `yaml`, tag: `yaml`, color: `linen` },
  { lang: `markdown`, tag: `md`, color: `#e6ffed` },
  { lang: `json`, tag: `json`, color: `#fff` },
  { lang: `diff`, tag: `diff`, color: `#E8BD36` },
  { lang: `text`, tag: `text`, color: `#D64000` },
]

const languageTags = langExtColor
  .map(
    ({ lang, tag, color }) =>
      `.gatsby-highlight[data-language='${lang}']::before {
        content: '${tag}';
        background: ${color};
      }`
  )
  .join(`\n`)

export default createGlobalStyle`
  .gatsby-code-title {
    background: #d64000!important;
    color: #000000!important;
    padding: 0.2em 0.4em;
    width: max-content;
    max-width: 400px;
    margin: 1em 0 -2em 1em;
    border-radius: 0.3em;
    position: relative;
    z-index: 1;
    font-weight: lighter;
    font-size: 0.8em;
    line-height: initial;
  }

  .gatsby-highlight {
    overflow: auto;
    position: relative;
    margin: 1em 0;
    border-radius: ${props => props.theme.mediumBorderRadius};
  }

  .gatsby-highlight[data-language]::before {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 2em;
    padding: 0.2em 0.5em;
    font-size: 0.6em;
    font-weight: bold;
    line-height: initial;
    text-transform: uppercase;
    border-radius: 0 0 0.2em 0.2em;
  }
  ${languageTags}

  code[class*='language-'],
  pre[class*='language-'] {
    color: lightGray;
    font-family: Consolas, Menlo, Monaco, source-code-pro, 'Courier New', monospace;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    font-size: 0.9em;
    tab-size: 4;
    hyphens: none;
    margin: 0;
  }

  /* Code blocks */
  pre[class*='language-'] {
    overflow: auto;
    padding: 1em;
  }

  pre[class*='language-']::selection {
    /* Safari */
    background: hsl(207, 4%, 16%);
  }

  pre[class*='language-']::selection,
  pre[class*='language-']::selection,
  code[class*='language-']::selection,
  code[class*='language-']::selection {
    text-shadow: none;
    background: hsla(0, 0%, 93%, 0.15);
  }

  .token.attr-name {
    color: rgb(173, 219, 103);
    font-style: italic;
  }

  .token.comment {
    color: rgb(99, 119, 119);
  }

  .token.string,
  .token.url {
    color: rgb(173, 219, 103);
  }

  .token.variable {
    color: rgb(214, 222, 235);
  }

  .token.number {
    color: rgb(247, 140, 108);
  }

  .number {
    -webkit-align-items: center;
    align-items: center;
    background-color: #c93c00 !important;
    border-radius: 290486px;
    display: -webkit-inline-flex;
    display: inline-flex;
    font-size: 1.25rem;
    height: 1.3em !important;
    -webkit-justify-content: center;
    justify-content: center;
    margin-right: 1.5rem;
    min-width: 2em !important;
    padding: .25rem .5rem;
    text-align: center;
    vertical-align: top;
  }

  .token.builtin,
  .token.char,
  .token.constant,
  .token.function {
    color: rgb(130, 170, 255);
  }

  .token.punctuation {
    color: rgb(199, 146, 234);
  }

  .token.selector,
  .token.doctype {
    color: rgb(199, 146, 234);
    font-style: 'italic';
  }

  .token.class-name {
    color: rgb(255, 203, 139);
  }

  .token.tag,
  .token.operator,
  .token.keyword {
    color: #ffa7c4;
  }
  
  .tag:not(body) {
    -webkit-align-items: center;
    align-items: center;
    background-color: #d64000 !important;
    border-radius: 4px;
    color: #ccccccc;
    display: -webkit-inline-flex;
    display: inline-flex;
    font-size: .75rem;
    height: 2em;
    -webkit-justify-content: center;
    justify-content: center;
    line-height: 1.5;
    padding-left: .75em;
    padding-right: .75em;
    white-space: nowrap;
  }
  .token.boolean {
    color: rgb(255, 88, 116);
  }

  .token.property {
    color: rgb(128, 203, 196);
  }

  .token.namespace {
    color: rgb(178, 204, 214);
  }

  pre[data-line] {
    padding: 1em 0 1em 3em;
    position: relative;
  }

  .gatsby-highlight-code-line {
    background-color: hsla(207, 95%, 15%, 1);
    display: block;
    margin: 0 -1em;
    padding: 0 1em 0 0.75em;
    border-left: 0.25em solid ${props => props.theme.darkOrange};
  }

  not(pre) > code[class*="language-"] {
    color: black;
    border-radius: 0.2em;
    background: #c93c00 !important;
    padding: 0.15em 0.2em 0.05em;
  }

  .language-text {
    color: #cccccc!important;
    border-radius: 0.2em;
    background: #363636!important;
    padding: 0.15em 0.2em 0.05em;
  }

  div.code-toolbar>.toolbar {
    position: absolute;
    top: 1em !important;
    right: .5em !important;
    transition: opacity .3s ease-in-out;
    opacity: 0;
  }

  pre.code-toolbar {
    position: relative;
  }

  pre.code-toolbar > .toolbar {
    position: absolute;
    top: 1em !important;
    right: .5em !important;
    background: #363636!important;
    border-radius: .5em;
  }

  pre.code-toolbar > .toolbar a {
    color: #bbb;
    font-size: .8em;
    cursor: pointer;
    padding: 0 .5em;
  }
  
  pre.code-toolbar > .toolbar a:hover, 
  pre.code-toolbar > .toolbar a:focus,
  pre.code-toolbar > .toolbar a.zeroclipboard-is-hover {
    color: inherit;
  }

  pre {
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
  }
`
