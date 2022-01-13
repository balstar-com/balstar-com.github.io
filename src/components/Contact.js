import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                Contact us to discuss your project requirements
                {/*<form method="post" action="#">*/}
                {/*    <div className="field half first">*/}
                {/*        <label htmlFor="name">Name</label>*/}
                {/*        <input type="text" name="name" id="name" />*/}
                {/*    </div>*/}
                {/*    <div className="field half">*/}
                {/*        <label htmlFor="email">Email</label>*/}
                {/*        <input type="text" name="email" id="email" />*/}
                {/*    </div>*/}
                {/*    <div className="field">*/}
                {/*        <label htmlFor="message">Message</label>*/}
                {/*        <textarea name="message" id="message" rows="6"/>*/}
                {/*    </div>*/}
                {/*    <ul className="actions">*/}
                {/*        <li><input type="submit" value="Send Message" className="special" /></li>*/}
                {/*        <li><input type="reset" value="Clear" /></li>*/}
                {/*    </ul>*/}
                {/*</form>*/}
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"/>
                        <h3>Email</h3>
                        <a href="mailto:info@balstar.com">info@balstar.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"/>
                        <h3>Phone</h3>
                        <span>TBD</span>
                    </div>
                </section>
                {/*<section>*/}
                {/*    <div className="contact-method">*/}
                {/*        <span className="icon alt fa-home"/>*/}
                {/*        <h3>Address</h3>*/}
                {/*        <span>10 Penland Road, Haywards Heath<br />*/}
                {/*        West Sussex, RH16 1PW<br />*/}
                {/*        United Kingdom</span>*/}
                {/*    </div>*/}
                {/*</section>*/}
            </section>
        </div>
    </section>
)

export default Contact
