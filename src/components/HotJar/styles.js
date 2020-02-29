import styled from 'styled-components'
import mediaQuery from '../../utils/mediaQuery'

export const MediaWrapper = styled.div`
maxWidth: 100%;
`

export const Media = styled.div`
.img {
  width: 64px;
  height: 64px;
}
`

export const Logo = styled.div`
.image {
  width: 159px;
  height: 90px;
  float: right;
}

h1, p {
  margin: 0 0 1em 0;
}

.media {
  margin-bottom: 2em;
  padding: 1em;
}

.media > .title { grid-area: title; }
.media > .img { grid-area: img; }
.media > .content { grid-area: bd; }
.media > .logo { grid-area: lg; }
.media > .footer { grid-area: ft; }

.media {
  display: grid;
  grid-column-gap: 2em;
  grid-template-areas:
    "title"
    "img"
    "bd"
    "lg"
    "ft";
}

${mediaQuery.minPhablet} {
  /* clearfix*/
  .media:after {
    content: "";
    display: block;
    clear: both;
  }

  .media > .media {
    margin-left: 160px;
    clear: both;
  }

  .media .img {
    float: left;
    margin: 0 10px 0 0;
    width: 160px;
  }
  
  .media .footer {
    padding: 0em;
  }

  .media.media-flip .img {
    float: right;
    margin: 0 0 0 1em;
  }

  .media > * {
    margin: 0 0 0 160px;
  }

  .media.media-flip > * {
    margin: 0 160px 0 0;
  }

  @supports(display: grid ) {
    /* override */
    .media > *,
    .media.media-flip > * {
      margin: 0;
    }
    .media .img,
    .media.media-flip .img {
      width: auto;
      margin: 0;
    }
    .media:after {
      content: none;
    }

    .media {
      display: grid;
      grid-column-gap: 2em;
      grid-template-columns: 150px 3fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "img title"
        "img bd"
        "ft ft";
    }

    .media.media-flip {
      grid-template-columns: 3fr 150px ;
      grid-template-areas:
        "title img"
        "bd img"
        "ft ft";
    }

    .media.img-flexie {
      grid-template-columns: minmax(150px, 1fr) 3fr;
    }

    .media.media-flip.img-flexie {
      grid-template-columns: 3fr minmax(150px, 1fr);
    }

    /* nested */
    .media > .media {
      grid-column: 2 / -1 ;
      margin: 0; /* override */
      margin-top: 1em;
    }
  }
}
`