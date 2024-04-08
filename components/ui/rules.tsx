import React from 'react';
import { EvervaultCardDemo } from '../EvervaultCardDemo';

const Rules = () => {
    return (
        <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
            <EvervaultCardDemo
                cardText="Team Composition"
                hoverText="Hover over this card to reveal an awesome effect. Running out of copy here."
            />
            <EvervaultCardDemo
                cardText="Registration"
                hoverText="Hover over this card to reveal an awesome effect. Running out of copy here."
            />
            <EvervaultCardDemo
                cardText="Contest Structure"
                hoverText="Hover over this card to reveal an awesome effect. Running out of copy here."
            />
            <EvervaultCardDemo
                cardText="Preliminary Round"
                hoverText="Hover over this card to reveal an awesome effect. Running out of copy here."
            />
        </div>
    );
};

export default Rules;
