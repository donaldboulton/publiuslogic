import CMS from 'netlify-cms-app'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ArticlePostPreview from './preview-templates/ArticlePostPreview'
import HomePagePreview from './preview-templates/HomePagePreview'

CMS.registerPreviewTemplate('nome', HomePagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('article', ArticlePostPreview)

