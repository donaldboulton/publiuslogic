import CMS from 'netlify-cms-app'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import { SlidesControl, SlidesPreview } from './Slides'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import ArticlePagePreview from './preview-templates/ArticlePagePreview'

CMS.registerMediaLibrary(cloudinary)
CMS.registerWidget('slides', SlidesControl, SlidesPreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', ArticlePagePreview)

export default {
  CMS,
}
