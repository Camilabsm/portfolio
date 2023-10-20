import "./AboutMe.css"
import TechSkills from "./TechSkills"

const AboutMe = () => {
    return (
        <div className="about-me" id="about-me">
            <p className="sup-text">Sobre mim</p>
            <h2 className="main-text">Da engenharia à tecnologia</h2>
            <p className="sec-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non neque sit amet augue lobortis consectetur. Quisque quam leo, sollicitudin ac leo eu, tempus ornare tortor. Duis lobortis tortor dui, ac semper nisl aliquam ac. Duis ac convallis sem, sit amet tristique ipsum.</p>
            <p className="sec-text">Phasellus lobortis vel nisl nec egestas. Sed in maximus ante. Suspendisse facilisis orci id condimentum iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse a odio blandit, faucibus risus ac, congue odio. Donec sed fermentum sem. Donec mollis, ligula quis tincidunt tempor, ligula massa malesuada elit, non convallis diam lorem at velit.</p>
            <TechSkills/>
        </div>
    )
}

export default AboutMe