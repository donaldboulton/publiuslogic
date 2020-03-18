import CMS from 'netlify-cms-app'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import ArticlePreview from './preview-templates/ArticlePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', ArticlePreview)

CMS.init()

export default {
  CMS,
}
