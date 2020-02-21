import CMS from 'netlify-cms-app'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ArticlePagePreview from './preview-templates/ArticlePagePreview'
import HomePagePreview from './preview-templates/HomePagePreview'

CMS.registerPreviewTemplate('nome', HomePagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('article', ArticlePagePreview)

