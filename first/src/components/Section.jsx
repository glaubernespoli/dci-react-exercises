import './css/Section.css';
import Article from "./Article";

const Section = {
    Welcome: () =>
        <section id="welcome" className="card">
            <h2>Welcome To Our Website</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            cupiditate itaque possimus numquam corporis odit deserunt voluptas
            repellat ad ex earum magnam mollitia magni eaque nisi, excepturi nam
                temporibus! Sed.<br />
                <a href="#" className="text-center">Click For More</a>
            </p>
        </section>,


    Blog: () =>
        <section id="blog">
            <h2>From Our Blog</h2>
            <Article title="Article One" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                    veniam adipisci necessitatibus quia quisquam? Eligendi vitae quia
                    totam accusantium officiis" />
            
            <Article title="Article Two" text="Another really long and boring lorem ipsum text." />
        </section>
}

export default Section;