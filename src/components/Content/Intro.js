import React from 'react'

const Intro = () => 
    <>
        <h1>Mission Statement</h1>
            <p>The purpose of this website is to provide information to park enthusiasts that is not readily available on the already exisiting nps.gov website.  
            </p>
                <ul>
                    <li>
                        The drop down menu allows users to select a specific national park near or along the high Sierras for which they can get more detailed information.
                    </li>
                    <li>
                        Input your when/where information into the Star Map to see what's up during your park visit.
                    </li>
                    <li>
                    Check the Alerts page to see which parks on the west coast are closed, make a list and find out when your park reopens.
                    </li>
                </ul>

        <br />
        <h1>My Story</h1>
            <p>
                Like most outdoors enthusiasts, 6 months ahead of time I put in my reservation request via fax at 7am.  A few days later a reponse said I got accepted for my second trail choice, Snow Creek.
                4 months later huge wildfires closed the park for weeks.  As my permit date came up there was still no way to know whether or not the park would open in time.  Thankfully I heard on my local radio station that Yosemite was opening the day before my permit date.  I was able to drive up with my uncle and we wound up being the some of the first people on the trail in 2 months.  The only other person we bumped into was a ranger who came up the following day to check the trails.  Suffice it to say, it was a blessed experience, Yosemite untouched for 2 months.  I'm hooked.
                <br/><br/>
                So I built a little tracker to follow nps.gov's api closure updates to flag when they are removed from the site.  I did have to filter out things like bathroom closures and am open to other filter suggestions :).  Feel free to create an account and your own list to follow!  You can also see what the general weather is like, and the solar chart for your trip!
                <br/><br/>
                I named the website <b>Hi Sierra!</b> because my life goal is to backpack through every region of the Sierras in California.  However, I couldn't help but include the surrounding areas since they too offer amazing park experiences within a days drive on the west coast.
            </p>
        {/* <h1>Origins</h1>
            <p>With outdoor activities such as camping and back-packing gaining in popularity, it has become increasingly difficult to obtain access permits to federal parks.  On average, reservations to popular wilderness zones often need to be made six months in advance. However, unpredictable natural disasters such as fires and mudslides that cause park closures can compromise even the most well-planned trips.  Not knowing when the park will re-open is an additional obstacle to planning the perfect outdoor adventure.</p>
            <p>The original intent of this website was to provide the public with information about parks’ statuses.  Not only would a user be able to search for current park closures and openings, but also sort through data to easily store, track, and retrieve information specific to their selected parks and assist with their planning. Since then more content has been added to enhance the user experience, including the introduction of the Star Map by Virtual Sky.</p> */}
    </>

export default Intro