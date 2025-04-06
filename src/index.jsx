import { createRoot } from 'react-dom/client'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

const rootDom = createRoot(document.getElementById('root'))

rootDom.render(
    <>
        <Header />
        <MainContent />
        <Footer />
    </>
)