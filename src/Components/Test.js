import React, { useEffect, useState } from 'react';
import data from './data';
import './Review.css'

const Test = () => {

    const [people, setPeople] = useState(data);
    const [index, setIndex] = React.useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {

        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => {
            clearInterval(slider);
        };

    }, [index])


    return (
        <section className='w-4/5 h-screen  flex bg-red-300 mx-auto relative'>
            {people.map((person, personIndex) => {

                const { id, image, name, title, text }
                    = person;

                let position = 'nextSlide';
                if (personIndex === index) {
                    position = 'activeSlide';
                }

                if (
                    personIndex === index - 1 ||
                    (index === 0 && personIndex === people.length - 1)
                ) {
                    position = 'lastSlide';
                }


                return (
                    <article className={position} key={id}>
                        <div className="card  mx-auto bg-base-100 ">
                            <div className="avatar  pt-10">
                                <div className="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={image} />
                                </div>
                            </div>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{name}</h2>
                                <p>{text}</p>

                            </div>
                        </div>
                    </article>
                );
            })}
        </section>
    );
};

export default Test;