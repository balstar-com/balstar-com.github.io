import React from 'react'
// import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Balstar - Home"
                    meta={[
                        { name: 'description', content: 'Balstar - a software engineering consultancy' },
                        { name: 'keywords', content: 'software engineering, technical architecture, consultancy' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Software Engineering</h3>
                                <p>We can supply expert software developers - <br/>Java, Kotlin, Python and more</p>
                            </header>
                            {/*<Link to="/landing" className="link primary"></Link>*/}
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Technical Architecture</h3>
                                <p>Our decades of experience allow us to shape<br/> the right solution for your project</p>
                            </header>
                            {/*<Link to="/landing" className="link primary"></Link>*/}
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Agile</h3>
                                <p>Scrum or Kanban or something else,<br/> we use Agile methodologies to deliver successful outcomes</p>
                            </header>
                            {/*<Link to="/landing" className="link primary"></Link>*/}
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Specialist Skills</h3>
                                <p>We are specialists in Domain Driven Design and Event Sourcing</p>
                            </header>
                            {/*<Link to="/landing" className="link primary"></Link>*/}
                        </article>
                    </section>
                    {/*<section id="two">*/}
                    {/*    <div className="inner">*/}
                    {/*        <header className="major">*/}
                    {/*            <h2>Massa libero</h2>*/}
                    {/*        </header>*/}
                    {/*        <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>*/}
                    {/*        <ul className="actions">*/}
                    {/*            <li><Link to="/landing" className="button next">Get Started</Link></li>*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*</section>*/}
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
