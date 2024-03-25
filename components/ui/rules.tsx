import React from 'react';
import { EvervaultCardDemo } from '../EvervaultCardDemo';

const Rules = () => {
    return (
        <div className='flex flex-col gap-5 lg:flex-row'>
            <div className='flex flex-row gap-5'>
                <EvervaultCardDemo
                    cardText="Team Composition"
                    hoverText="Hover over this card to reveal an awesome effect. Running out of copy here."
                />
                <EvervaultCardDemo
                    cardText="Registration"
                    hoverText="Hover over this card to reveal an awesome effect. Running out of copy here."
                />
            </div>
            <div className='flex flex-row gap-5'>
                <EvervaultCardDemo
                    cardText="Contest Structure"
                    hoverText="Hover over this card to reveal an awesome effect. Running out of copy here."
                />

                <EvervaultCardDemo
                    cardText="Preliminary Round"
                    hoverText="Hover over this card to reveal an awesome effect. Running out of copy here."
                />
            </div>
        </div>
    );
};

export default Rules;
