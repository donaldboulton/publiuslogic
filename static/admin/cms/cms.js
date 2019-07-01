import CMS from '../components/NetlifyCms/netlify-cms'

import HomePagePreview from './preview-templates/HomePagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import ArticlePreview from './preview-templates/ArticlePreview'
import PricingPagePreview from './preview-templates/PricingPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import PrivacyPagePreview from './preview-templates/PrivacyPagePreview'

CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('pricing', PricingPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('privacy', PrivacyPagePreview)
CMS.registerPreviewTemplate('blog', ArticlePreview)

export default {
  CMS,
}
