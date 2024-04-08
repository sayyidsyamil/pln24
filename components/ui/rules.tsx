import React from 'react';
import { EvervaultCardDemo } from '../EvervaultCardDemo';

const Rules = () => {
    return (
        <div className="grid md:grid-cols-4 grid-cols-2 gap-5 w-full">
            <div className="min-w-0">
                <EvervaultCardDemo
                    cardText="Team Composition"
                    hoverText="Hover over this card to reveal an awesome effect. Running out of copy here."
                />
            </div>
            <div className="min-w-0">
                <EvervaultCardDemo
                    cardText="Registration"
                    hoverText="Hover over this card to reveal an awesome effect. Running out of copy here."
                />
            </div>
            <div className="min-w-0">
                <EvervaultCardDemo
                    cardText="Contest Structure"
                    hoverText="Hover over this card to reveal an awesome effect. Running out of copy here."
                />
            </div>
            <div className="min-w-0">
                <EvervaultCardDemo
                    cardText="Preliminary Round"
                    hoverText="Hover over this card to reveal an awesome effect. Running out of copy here."
                />
            </div>
        </div>
    );
};

export default Rules;
