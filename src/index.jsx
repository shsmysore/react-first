import { createRoot } from 'react-dom/client'

const rootDom = createRoot(document.getElementById('root'))

function Header() {
    return (
            <img src='/src/assets/react-png.png' width='40px'/>
        )
}

function MainContent() {
    return(
            <>
               <h1> Real facts about React! </h1>
               <ul>
                   <li> Was originally created in 2013 </li>
                   <li> It is maintained by Meta </li>
                   <li> React is Composable </li>
                   <li> React is Declarative, not imperative. </li>
               </ul>
            </>
        )
}

function Footer()  {
    return(
        <small>© 2024 Shree development. All rights reserved. </small>
    )
}

rootDom.render(
    <>
        <Header />
        <MainContent />
        <Footer />
    </>
)