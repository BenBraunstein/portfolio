import React from "react"
import { Grid } from "@material-ui/core"
import BlogPost from "./BlogPost"

function BlogContainer(props) {
  return (
    <div>
      <h2>Blog Posts</h2>
      <Grid style={{ padding: "50px" }} container spacing={3}>
        {/* <Grid style={{ flexBasis: "auto" }} item s>
          <BlogPost
            image=""
            title=""
            href=""
            description=""
          />
        </Grid> */}
        <Grid style={{ flexBasis: "auto" }} item s>
          <BlogPost
            image="https://miro.medium.com/max/460/1*gFQLJWUQBtfNqeBcfu3h2Q.png"
            title="How to connect a Heroku Website with a GoDaddy Domain Name"
            href="https://medium.com/@benzbraunstein/how-to-connect-a-heroku-website-with-a-godaddy-domain-name-2661e3fda5fd"
            description="If your a web developer and you build apps and host them online using Heroku, you have probably wanted to remove the pesky .herokuapp.com at the end of your app’s URL. Or maybe you’ve built a portfolio website to showcase your past work and you want a more official domain name, like me. Well your in luck because Heroku actually lets you connect other domains to apps it hosts..."
          />
        </Grid>
        <Grid style={{ flexBasis: "auto" }} item s>
          <BlogPost
            image="https://miro.medium.com/max/1200/0*IilLY81EZm_YjHgb.jpeg"
            title="Hosting your Rails Backend and React Frontend on Herkou for free!"
            href="https://medium.com/@benzbraunstein/hosting-your-rails-backend-and-react-frontend-on-herkou-for-free-863b86542d09"
            description="As I Fullstack developer, I typically use Ruby on Rails to create a Backend API and React Frontend when building out new projects. But what good is an app if you can’t put it online for your friends and the rest of the world to see. Today I’m going to show you how to host your projects on Heroku. Heroku will host your apps free of charge. All users on Heroku get up to five free apps, but if you link a credit card..."
          />
        </Grid>
        <Grid style={{ flexBasis: "auto" }} item s>
          <BlogPost
            image="https://miro.medium.com/max/1515/0*o_fGIoKcDCK40Sck.png"
            title="How to get a basic Redux.js application working"
            href="https://medium.com/@benzbraunstein/how-to-get-a-basic-redux-js-application-working-a08205442e30"
            description="If your a front end developer, who uses React.js, you’ve probably know how frustrating it can be to manage your state by passing it up and down through components and youve also probably heard of a technology called Redux.js, which is created to eliminate the frustrations of managing state. Not only does Redux centralize your state into a “Redux Store”, I also centralizes a large portion of your applications logic and has an outstanding Google Chrome extension you can use to view your store, any changes to it in..."
          />
        </Grid>
        <Grid style={{ flexBasis: "auto" }} item s>
          <BlogPost
            image="https://miro.medium.com/max/241/0*DPJBIO0OhFwYB1Jd.png"
            title="The Power of AutoHotKey for Windows Developers"
            href="https://medium.com/@benzbraunstein/the-power-of-autohotkey-for-windows-developers-cf2abf85a865"
            description="If your a developer, I’m sure you know you work far quicker when you can keep your hands on the keyboard and not have to reach for the mouse. Windows developers might have looked at some tools you could use to make your keyboard more powerful and work more efficiently. Simply put, AutoHotKey is one of the most useful tools you can use to your advantage that can help you speed up everyday PC usage and coding. According to their website, it is “a free, open-source scripting language for Windows..."
          />
        </Grid>
        <Grid style={{ flexBasis: "auto" }} item s>
          <BlogPost
            image="https://miro.medium.com/max/498/0*eRCRV3XiHNVub60u"
            title="The Journey from Windows to macOS and back to Windows…"
            href="https://medium.com/@benzbraunstein/the-journey-from-windows-to-macos-and-back-to-windows-12f6311ca424"
            description="Since I was a young child, I was blessed to have the opportunity of having personal computers in my home. I loved everything about them. Using them, fixing them… and sometimes breaking them. The PCs in my home started with Windows XP, next up was Vista and eventually Windows 7 (my parents never wanted to upgrade to Windows 10). Throughout my life I got to learn the in’s and out’s of Windows and..."
          />
        </Grid>
        <Grid style={{ flexBasis: "auto" }} item s>
          <BlogPost
            image="https://miro.medium.com/max/632/0*mvGwNsYnxuiQAwjz.gif"
            title="How to use React Hooks to give functional components their own 'State'"
            href="https://medium.com/@benzbraunstein/how-to-use-react-hooks-to-give-functional-components-their-own-state-ade4c756244f"
            description="State in React is something truly awesome. It gives you the ability to create components which have the ability to change their values during the lifetime, whereas a components props never change. Once you give a component a prop, that prop is static and cannot be changed unless the component gets removed or re-rendered. Although state is awesome, it is only accessible to use in components..."
          />
        </Grid>
        <Grid style={{ flexBasis: "auto" }} item s>
          <BlogPost
            image="https://miro.medium.com/max/1168/1*lJuK3pJiMt5g1-AJfRPpsg.png"
            title="How to build a simple chat application using JavaScript and the Rails API"
            href="https://medium.com/@benzbraunstein/how-to-build-a-simple-chat-application-using-javascript-and-the-rails-api-68c2577db9ea"
            description="Ever wondered how difficult it is to create a basic chat application by yourself (please just play along) ? I wondered the exact same thing once I dove headfirst into JavaScript and began to ponder all the awesome projects I could build using the awesome language. I decided to give this project a go and see how difficult it would be for me to build…and in about an hour and a half my basic application was complete..."
          />
        </Grid>
        <Grid style={{ flexBasis: "auto" }} item s>
          <BlogPost
            image="https://s3.amazonaws.com/law-media/uploads/131/51997/large/man_suit_mask_impersonation_ss.jpg?1525714001"
            title="Be afraid. I can impersonate you"
            href="https://medium.com/@benzbraunstein/be-weary-i-can-impersonate-you-adb51ede042a"
            description="Ah. email. The internet has many historical firsts that will forever be remembered. The first documented use of emoticons, The first domain name was registered in 1985, The first website about the World Wide Web went live in 1991, The first picture was uploaded to the internet in 1992, The first item was sold on eBay before it was even called eBay, The first YouTube video was posted in 2005, The first tweet was sent in 2006. Before all of these “firsts” the first email was sent in 1971 by Ray Tomlinson..."
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default BlogContainer
