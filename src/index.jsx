import { createRoot } from 'react-dom/client'

const rootDom = createRoot(document.getElementById('root'))

rootDom.render(
            <section>
                <img src='/src/assets/react-png.png' width='40px'/>
                <h1> Real facts about React! </h1>
                <ul>
                    <li> Was originally created in 2013 </li>
                    <li> It is maintained by Meta </li>
                    <li> React is Composable </li>
                    <li> React is Declarative, not imperative. </li>
                </ul>
            </section>
    )