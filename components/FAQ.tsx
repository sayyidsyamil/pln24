import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// updated by Ruben

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full text-white">
      <AccordionItem value="item-1">
        <AccordionTrigger >How can i apply?</AccordionTrigger>
        <AccordionContent>
          Kindly register through the official Programming League National 2024 registration form.
        </AccordionContent>
      </AccordionItem>


      <AccordionItem value="item-2">
        <AccordionTrigger>When can i register?</AccordionTrigger>
        <AccordionContent>
          The registration form will be open from 8th April 2024(12:00 P.M) until 22nd April 2024(12:00 P.M). Stay tuned on our
          social media accounts to get the latest updates.
        </AccordionContent>
      </AccordionItem>


      <AccordionItem value="item-3">
        <AccordionTrigger>Is there any registration fee?</AccordionTrigger>
        <AccordionContent>
          Yes. Participants are required to pay RM10 per team as a commitment fee.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>Can First-Year University Malaya Students enter the open category?</AccordionTrigger>
        <AccordionContent>
          You may enter the open category, however we encourage you to enter the closed category instead as this category
          is made to accommodate your experience and knowdledge on fundamentals of programming.
        </AccordionContent>
      </AccordionItem>



      <AccordionItem value="item-5">
        <AccordionTrigger>How many members per team?</AccordionTrigger>
        <AccordionContent>
          Please be reminded that only teams of the exact three(3) members are accepted to join the competition.
        </AccordionContent>
      </AccordionItem>




      <AccordionItem value="item-6">
        <AccordionTrigger>Can i join the competition without a team?</AccordionTrigger>
        <AccordionContent>
          No, the contest strictly allows a team of three(3) members to register for this event.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-7">
        <AccordionTrigger>Must all the team members come from the same University?</AccordionTrigger>
        <AccordionContent>
          For the open category, all three(3) members can come from different universities. For the closed category, all three(3) members
          must be First-Year students from University Malaya.
        </AccordionContent>
      </AccordionItem>



      <AccordionItem value="item-8">
        <AccordionTrigger>What if i can't find teammates?</AccordionTrigger>
        <AccordionContent>
         You can find potential teammates through the Official Programming League National 2024 padlet dashboard here. Don't forget
         to introduce yourself to start connecting with other students!
        </AccordionContent>
      </AccordionItem>




      <AccordionItem value="item-9">
        <AccordionTrigger>What programming languages can we use?</AccordionTrigger>
        <AccordionContent>
          The following languages are only available languages for the problems from the contest:
          GNU GCC C11 5.1.0
          Clang++17 Diagnostics
          GNU G++14 6.4.0
          GNU G++17 7.3.0
          GNU G++20 11.2.0 (64 bit, winilibs)
          Microsoft Visual C++ 2017
          GNU G++17 9.2.0 (64 bit, msys2)
          Java 11.0.6
          Java 1.8.0_241
          Python 2.7.18
          Python 3.8.10
          PyPy 2.7 (7.3.0)
          PyPy 3.7 (7.3.0)
          PyPy 3.7 (7.3.5, 64 bit)
          Javascript V8 4.8.0
          Node.js 12.16.3
        </AccordionContent>
      </AccordionItem>




      <AccordionItem value="item-10">
        <AccordionTrigger>What programming tools can we use?</AccordionTrigger>
        <AccordionContent>
        IDEs configured for the contest are as follows:
        IntelliJ (IDEA Community Edition version 2021.3.2) with Open JDK11.4
        Visual Studio Code(Version 1.64) with JavaScript V8 4.8.0
        Pycharm Community Edition Python IDE (version 2021.3.2) with CPython 3.8.10
        Code::Blocks (version 20.03) with C++17 (GCC 9.2)
        </AccordionContent>
      </AccordionItem>



      <AccordionItem value="item-11">
        <AccordionTrigger>Will there be any offline documentation provided?</AccordionTrigger>
        <AccordionContent>
        Yes, the offline documentations available during the final round competition are:
         JDK JavaDocs
         C++ STL docs
         Python 3.8.10 documentation
         JavaScript devdocs
        </AccordionContent>
      </AccordionItem>



      <AccordionItem value="item-12">
        <AccordionTrigger>What are the computer and technical requirements?</AccordionTrigger>
        <AccordionContent>
        The team is free to use any programming languages permitted by the contest. 
        All teams are expected to prepare their own computers for the online preliminary round. 
        As for the final round, each team is obliged to use only one (1) computer provided by the organiser.
        </AccordionContent>
      </AccordionItem>



      <AccordionItem value="item-13">
        <AccordionTrigger>How many rounds are there in total?</AccordionTrigger>
        <AccordionContent>
        Both open and closed categories will have two rounds - the preliminary and the final round. 
        The top twenty-five(25) teams from Open Category and top eight(8) teams from Closed Category of the preliminary round will proceed to the final round.
        </AccordionContent>
      </AccordionItem>



      <AccordionItem value="item-14">
        <AccordionTrigger>What is the format of the competition?</AccordionTrigger>
        <AccordionContent>
        The competition is a team contest.
        Participants will receive a pdf file containing the competition questions.
        There will be 5 questions for the online preliminary round (2 hours) and 10 questions for the final round (5 hours), 
        which are of different difficulty levels and mostly algorithmic in nature.
        </AccordionContent>
      </AccordionItem>


      <AccordionItem value="item-15">
        <AccordionTrigger>How will the teams be scored?</AccordionTrigger>
        <AccordionContent>
        Scoring is based first on the number of problems solved (the more the better);
        In case of a tie, the total time for all accepted submissions is taken into account (the less the better);
        Each rejected submission adds 20 minutes of penalty time.
        The time of acceptance for the last problem solved matters if there is still a tie.
        </AccordionContent>
      </AccordionItem>


      <AccordionItem value="item-16">
        <AccordionTrigger>How can I confirm that my team is chosen for the preliminary round?</AccordionTrigger>
        <AccordionContent>
        For the online preliminary round, any eligible team that has registered for the Programming League is eligible to join.
        </AccordionContent>
      </AccordionItem>


      <AccordionItem value="item-17">
        <AccordionTrigger>Where will the preliminary round be held?</AccordionTrigger>
        <AccordionContent>
        The preliminary round will be held online through Codeforces. 
        Contest participants are free to attempt the challenges from any geographical location within the time period of the online round.
        </AccordionContent>
      </AccordionItem>



      <AccordionItem value="item-18">
        <AccordionTrigger>When is the preliminary round?</AccordionTrigger>
        <AccordionContent>
        It will be held on 11th May 2024. The event itinerary will be announced soon.
        </AccordionContent>
      </AccordionItem>



      <AccordionItem value="item-19">
        <AccordionTrigger>How can I confirm that my team is chosen for the final round?</AccordionTrigger>
        <AccordionContent>
        You will receive an email within 3 days of the preliminary round. You may also check on our social media site for the finalist announcement.
        </AccordionContent>
      </AccordionItem>



      <AccordionItem value="item-20">
        <AccordionTrigger>Where will the final round be held?</AccordionTrigger>
        <AccordionContent>
         Physical at Faculty of Computer Science and Information Technology, Universiti Malaya
        </AccordionContent>
      </AccordionItem>



      <AccordionItem value="item-21">
        <AccordionTrigger>When is the final round?</AccordionTrigger>
        <AccordionContent>
        The final round is a one-day event that will be held on 18th May 2024. The event itinerary will be announced soon.
        </AccordionContent>
      </AccordionItem>



      <AccordionItem value="item-22">
        <AccordionTrigger>Are travel and accommodation fees covered?</AccordionTrigger>
        <AccordionContent>
        Travel and accommodation fees will not be provided for the participants. 
        However, you may contact us regarding accommodation booking at UM.
        </AccordionContent>
      </AccordionItem>


      <AccordionItem value="item-23">
        <AccordionTrigger>If my team is unable to be present physically in the final round, is there any other possible arrangement?</AccordionTrigger>
        <AccordionContent>
        We are sorry to inform you that this action will be counted as withdrawal from the competition and teams with lower ranking will be offered the chance to the final round. 
        The purpose of having a physical final round is to ensure the fairness of the competition.
      </AccordionContent>
      </AccordionItem>



      <AccordionItem value="item-24">
        <AccordionTrigger>When will the results of the final round be announced?</AccordionTrigger>
        <AccordionContent>
        The results of the final round will be announced on the same day during the closing ceremony.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
