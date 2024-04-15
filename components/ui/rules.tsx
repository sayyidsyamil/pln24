import React from 'react';
import { EvervaultCardDemo } from '../EvervaultCardDemo';
import { DrawerCard } from '../DrawerCard';

const Rules = () => {
    return (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 w-full">
            <DrawerCard
                cardText={"Team Composition"}
                drawerDescription={
                    <div className='text-left'>
                        <ol>
                            <li>1. Participants must compete in a team of exactly three (3) members.</li>
                            <li>2. Participants can be of any nationality as long as he/she is currently a student pursuing education in any tertiary education institution in Malaysia. This includes undergraduate students only.</li>
                            <li>3. A participant can only be registered under one (1) team throughout the competition.</li>
                            <li>4. Mixing of institutions in each team is allowed. However in this scenario, the team will automatically represent the leader’s institution.</li>
                            <li>5. Any registration beyond the registration deadline announced officially will not be entertained.</li>
                            <li>6. Team composition details cannot be changed and no substitution of members is allowed once the registration is closed. </li>
                            <li>7. Should there be any discovery of fallacious participant details, the team will be disqualified immediately.</li>
                        </ol>
                        <br />
                        <p><strong>Organizer reserves the rights to amend all the rules and regulations and terms without prior notice.</strong></p>
                    </div>
                }
            />
            <DrawerCard
                cardText={"Final Round (Open Category)"}
                drawerDescription={
                    <div className='text-left'>
                        <ol>
                            <li>1. Only the selected top twenty (20) teams from the preliminary round will make it to this round. Should there be any withdrawal of teams from the top ten, teams with lower rankings will be offered the chance to advance to the final round.</li>
                            <li>2. The final round is scheduled to be held on 18th May 2024 (Saturday) at the Faculty of Computer Science and Information Technology, Universiti Malaya.</li>
                            <li>3. All team members are required to attend on the contest day. No substitution of team members is allowed.</li>
                            <li>4. Only team member(s) who show up physically in the competition are eligible to compete in the final round. Team members are not allowed to communicate with their absent member(s) via any platforms.</li>
                            <li>5. Teams which are eligible for the final round will be notified via email by the organizer after the preliminary round.</li>
                            <li>6. Teams which are eligible for the final round must RSVP the invitation email to the physical site for the final round of PLN2024 within the time given by the organizer to avoid the disqualification of your team to the final round.</li>
                            <li>7. This round will last for four (4) hours with a total of eight (8) questions to be tackled.</li>
                            <li>8. Teams are required to join the contest held on Codeforces with the username and team name registered during registration.</li>
                            <li>9. Use of CDs, mobile phones, Internet search, calculator or any devices is prohibited. </li>
                            <li>10. Each team member will use their own pc and software tools besides any language model extension, such as Copilot, ChatGPT and so on.</li>
                            <li>11. Each team is permitted to bring A4 papers for reference during the competition. There is no specific limit on the number of A4 papers each team can bring. However, when it comes to printing program listings for reference, participants are allowed to use a maximum of 25 A4 papers. These 25 papers can be utilized exclusively for the purpose of printing program listings, while the remaining papers should be left blank for other use.</li>
                            <li>12. Teams must not communicate with the other team(s) during the contest. Interference with the contest leads to disqualification of the team(s) involved.</li>
                            <li>13. Participants are to be disqualified on attempt in any activity that jeopardizes the contest such as dislodging extension cords, unauthorized modification of contest materials or any other activity that may knowingly or unknowingly impact other teams.</li>
                            <li>14. Participants cannot leave the contest room during the contest without permission from the committee. </li>
                            <li>15. No travel and accommodation fees will be covered by the organizer.</li>
                            <li>16. The decisions of the judges are final.</li>
                        </ol>
                        <br />
                        <p><strong>Organizer reserves the rights to amend all the rules and regulations and terms without prior notice.</strong></p>
                    </div>
                }
            />
            <DrawerCard
                cardText={"Final Round (Closed Category)"}
                drawerDescription={
                    <div className='text-left'>
                        <ol>
                            <li>1. Only the selected top ten (10) teams from the preliminary round will make it to this round. Should there be any withdrawal of teams from the top eight, teams with lower rankings will be offered the chance to advance to the final round.</li>
                            <li>2. The final round (closed category) is scheduled to be held physically on 18th May 2024 (Saturday) at the Faculty of Computer Science and Information Technology, University Malaya. In the case of any emergency issues on Codeforces, we would shift the contest to HackerRank. The exact timing will be announced.</li>
                            <li>3. This round will last for four (4) hours with a total of eight (8) questions to be tackled.</li>
                            <li>4. Teams are required to join the contest held on Codeforces with the username and team name registered during registration.</li>
                            <li>5. Each team member will use their own pc and software tools besides any language model extension, such as Copilot, ChatGPT and so on.</li>
                            <li>6. Results and rankings for usernames/team names that are not registered under any teams will not be taken into account.</li>
                            <li>7. Each team is permitted to bring A4 papers for reference during the competition. There is no specific limit on the number of A4 papers each team can bring. However, when it comes to printing program listings for reference, participants are allowed to use a maximum of 25 A4 papers. These 25 papers can be utilized exclusively for the purpose of printing program listings, while the remaining papers should be left blank for other use.</li>
                            <li>8. Use of CDs, mobile phones, Internet search, calculator or any devices is prohibited</li>
                            <li>9. Teams must not communicate with the other team(s) during the contest. Interference with the contest leads to disqualification of the team(s) involved.</li>
                            <li>10. Participants are to be disqualified on attempt in any activity that jeopardizes the contest such as dislodging extension cords, unauthorized modification of contest materials or any other activity that may knowingly or unknowingly impact other teams.</li>
                            <li>11. Participants cannot leave the contest room during the contest without permission from the committee.</li>
                            <li>12. The decisions of the judges are final.</li>
                        </ol>
                        <br />
                        <p><strong>Organizer reserves the rights to amend all the rules and regulations and terms without prior notice.</strong></p>
                    </div>
                }
            />

            <DrawerCard
                cardText={"Question Appeal & Clarification"}
                drawerDescription={
                    <div className='text-left'>
                        <ol>
                            <li>1. Clarifications about the problems concerning a possible ambiguity or error may be obtained from the invigilators on duty during the contest. Answers will typically be restricted to Yes or No, the participants will be asked to read the problem statement again should there be no problem in the question.</li>
                            <li>2. If the judges agree that an ambiguity or error exists, a clarification will be issued to all participants.</li>
                        </ol>
                        <br />
                        <p><strong>Organizer reserves the rights to amend all the rules and regulations and terms without prior notice.</strong></p>
                    </div>
                }
            />


            <DrawerCard
                cardText={"Computing Environment"}
                drawerDescription={
                    <div className='text-left'>
                        <ol>
                            <li>1. Languages permitted during the contest are Java, Javascript, Python and C/C++.</li>
                            <li>2. Problems vary in difficulty and appear in random order in the problem set.</li>
                            <li>3. Solutions are to be submitted through the mechanism or system provided.</li>
                            <li>4. Each submission is judged upon submission during the contest as accepted or rejected; the latter will be explained a little bit with no further details; e.g.:
                                <ul>
                                    <li> - compile-time error</li>
                                    <li> - run-time error</li>
                                    <li> - resource-limit exceeded</li>
                                    <li> - incorrect output format</li>
                                    <li> - incorrect output</li>
                                </ul>
                            </li>
                        </ol>
                        <br />
                        <p><strong>Organizer reserves the rights to amend all the rules and regulations and terms without prior notice.</strong></p>
                    </div>
                }
            />

            <DrawerCard
                cardText={"Contest Scoring"}
                drawerDescription={
                    <div className='text-left'>
                        <p>Ranking of teams is based on:</p>
                        <ol>
                            <li>1. First, the number of problems solved is considered, where a higher number is better.</li>
                            <li>2. In the event of a tie, the total time for all accepted submissions is taken into account, with a preference for a lower time.</li>
                            <li>3. The timing starts from the beginning of the contest and continues until the submission is accepted by the jury. Each rejected submission incurs a penalty of 20 minutes.</li>
                            <li>4. If a tie still exists, the time of acceptance for the last problem solved becomes crucial, with a preference for a lower time.</li>
                        </ol>
                        <br />
                        <p><strong>Important Notes</strong></p>
                        <ul>
                            <li>1. It is strongly advised to thoroughly test your program before submitting it for judging. While it may work with your dataset, it might not function properly during the judging phase. The judges typically use a more comprehensive dataset than what you have.</li>
                            <li>2. The standings of the teams will be publicly available and regularly updated throughout the contest. However, during the last hour of the contest, the scoreboard will be temporarily suspended to maintain the confidentiality of the final results. Nonetheless, all accepted and rejected runs, as well as any clarifications for the teams, will continue until the end of the contest.</li>
                        </ul>
                        <br />
                        <p><strong>Organizer reserves the rights to amend all the rules and regulations and terms without prior notice.</strong></p>
                    </div>
                }
            />

            <DrawerCard
                cardText={"Disqualification"}
                drawerDescription={
                    <div className='text-left'>
                        <p>You (and, if applicable, your team members) may be disqualified from the contest and forfeit any prizes you may be eligible to receive if we reasonably believe that you have attempted to undermine the legitimate operation of the contest. This includes actions such as:</p>
                        <ol>
                            <li>1. Providing false information about yourself during registration or regarding your eligibility.</li>
                            <li>2. Registering in more than one team.</li>
                            <li>3. Breaching or refusing to comply with any Terms or Rules of the contest.</li>
                            <li>4. Tampering or interfering with the administration of the contest or affecting other participants' ability to compete.</li>
                            <li>5. Sharing or using unauthorized information about a contest problem or solution before the round is officially over.</li>
                            <li>6. Submitting content that infringes on the rights of others or is considered inappropriate, offensive, or illegal.</li>
                            <li>7. Threatening or harassing other participants in any form, including any behavior that targets their personal attributes or disrupts the contest environment.</li>
                        </ol>
                        <p>Such violations may not only lead to disqualification from the current contest but may also affect your participation in future events, depending on the nature and severity of the offense.</p>
                        <br />
                        <p><strong>Organizer reserves the rights to amend all the rules and regulations and terms without prior notice.</strong></p>
                    </div>
                }
            />

            <DrawerCard
                cardText={"Ownership"}
                drawerDescription={
                    <div className='text-left'>
                        <ol>
                            <li>1. You own all your codes and you retain all the rights to your submitted codes that you had before submitting them to us.</li>
                            <li>2. Upon submission, you grant us the rights/permission to copy, edit, reproduce, publicly display, publicly perform, broadcast, publish and use, in whole or in part, any questions, in any manners without further compensation during and after the contest.</li>
                        </ol>
                        <br />
                        <p><strong>Organizer reserves the rights to amend all the rules and regulations and terms without prior notice.</strong></p>
                    </div>
                }
            />

           <DrawerCard
    cardText={"Preliminary Round"}
    drawerDescription={
        <div className='text-left'>
            <ol>
                <li>1. Teams must register beforehand via a Google Form distributed by PLN 2024 Officials.</li>
                <li>2. The preliminary round will take place on 11th May 2024 (Saturday) on the online platform Codeforces.</li>
                <li>3. All team members are required to attend on the contest day. No substitution of team members is allowed.</li>
                <li>4. All teams should be registered within the Google Form by their team name and usernames. Ensure that each member joins using the correct username and team names.</li>
                <li>5. Communication between groups or any form of violence in the competition is strictly prohibited. This includes, but is not limited to:
                    <ul>
                        <li> - Using ChatGPT, Copilot, or any other LLM platform.</li>
                        <li> - Copying codes from any internet platform.</li>
                        <li> - Using extra illegal file operations.</li>
                        <li> - Attempting to penetrate or exploit the system in code.</li>
                    </ul>
                </li>
                <li>6. This round will last for two (2) hours with a total of five (5) questions to be tackled.</li>
                <li>7. Participants are not allowed to share questions or discuss them over any online public platform.</li>
                <li>8. The decisions of the judges are final.</li>
            </ol>
            <br />
            <p><strong>Organizer reserves the rights to amend all the rules and regulations and terms without prior notice.</strong></p>
        </div>
    }
/>






        </div>
    );
};

export default Rules;
