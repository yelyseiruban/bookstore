import React, {useEffect, useState} from "react";
import './About.css'

interface AboutProps {
    isChecked: boolean
}

function About(props: AboutProps) {

    const [showText, setShowText] = useState(false);

    useEffect(() => {
        setShowText(true)
    }, [])

    return (
        <div className="content-wrapper">
            <div className="content">
                <div className={`text-container ${props.isChecked ? 'movedDown' : ''}`} >
                    <div className={`text ${showText ? 'text-write' : ''}`}><h1 className="title">Welcome to Our Bookstore</h1>
                    </div>
                </div>

                <div>
                    <div className="text-wrapper"><div className="paragraph">
                        At BUULK Store, we are passionate about the written word. We believe that books have
                        the power to transport us to different worlds, inspire our minds, and connect us
                        with the incredible stories of humanity.
                    </div></div>
                    <div className="text-wrapper"><div className="paragraph"> Our journey began with a simple love for reading, and it has grown
                        into a commitment to share that love with you. We curate a carefully selected
                        collection of books that spans genres, cultures, and generations. Whether you're a
                        seasoned bookworm or just starting your reading adventure, we have something for
                        everyone.
                    </div></div>
                    <div className="text-wrapper"><div className="paragraph"> Our dedicated team of book enthusiasts is here to assist you in
                        finding the perfect book for your mood, whether you seek the thrill of a gripping
                        mystery, the wisdom of a thought-provoking non-fiction title, or the comfort of a
                        heartwarming romance. We believe that every book has a reader, and every reader has
                        a book, waiting to be discovered.
                    </div></div>
                    <div className="text-wrapper"><div className="paragraph"> But we're more than just a bookstore. We're a community of readers, a
                        place where book lovers can gather, share recommendations, and celebrate the magic
                        of storytelling. Join us for book clubs, author events, and discussions that will
                        deepen your appreciation for the written word.
                    </div></div>
                    <div className="text-wrapper"><div className="paragraph"> Thank you for choosing [Bookstore Name] as your literary companion.
                        We're excited to embark on this reading journey with you and help you explore the
                        endless possibilities that books offer.
                    </div></div>
                    <div className="text-container">
                        <div className={`text ${showText ? 'text-write' : ''}`}><p>Happy reading!</p></div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

export default About