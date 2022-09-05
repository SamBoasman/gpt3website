import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
    {
        title: "Improving end distrusts instantly",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facilis quidem fugiat dolores aut quos dolorem! Quia sed aperiam nobis minus magni impedit eos ducimus? Sint sit architecto quod illum sequi ab explicabo sapiente quaerat adipisci blanditiis saepe alias autem facere facilis itaque perferendis, veritatis harum quisquam illo! Qui, quas.",
    },
    {
        title: "Become the tended active",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facilis quidem fugiat dolores aut quos dolorem! Quia sed aperiam nobis minus magni impedit eos ducimus? Sint sit architecto quod illum sequi ab explicabo sapiente quaerat adipisci blanditiis saepe alias autem facere facilis itaque perferendis, veritatis harum quisquam illo! Qui, quas.",
    },
    {
        title: "Message or am nothing",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facilis quidem fugiat dolores aut quos dolorem! Quia sed aperiam nobis minus magni impedit eos ducimus? Sint sit architecto quod illum sequi ab explicabo sapiente quaerat adipisci blanditiis saepe alias autem facere facilis itaque perferendis, veritatis harum quisquam illo! Qui, quas.",
    },
    {
        title: "Really boy law country",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facilis quidem fugiat dolores aut quos dolorem! Quia sed aperiam nobis minus magni impedit eos ducimus? Sint sit architecto quod illum sequi ab explicabo sapiente quaerat adipisci blanditiis saepe alias autem facere facilis itaque perferendis, veritatis harum quisquam illo! Qui, quas.",
    },
];

const Features = () => {
    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">
                    The Future is Now and You Just Need to Realize It. Step into
                    Future Today & Make It Happen
                </h1>
                <p>Request early access.</p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((item, index) => (
                    <Feature
                        title={item.title}
                        text={item.text}
                        key={item.title + index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Features;
