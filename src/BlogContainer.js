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
            blogHover={props.blogHover}
            blogUnHover={props.blogUnHover}
            image="data:image/png;base64,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"
            title="How to make custom CSS Cursors using React"
            href="https://medium.com/@benzbraunstein/how-to-make-custom-css-cursors-using-react-fd1a5cca9400"
            description="A few weeks ago, I wrote an article about how to use vanilla JavaScript and CSS to make custom CSS cursors. It gives your website an extra layer of flare that few websites have, even though its actually super simple to do. You can find that tutorial here. After I learned how to create custom cursors and wrote that blog post, I decided to add them into my personal portfolio website. I thought to myself… “This can’t be so difficult right? I’ve done this in Vanilla JavaScript and it was super simple..."
          />
        </Grid> */}
        <Grid style={{ flexBasis: "auto" }} item s>
          <BlogPost
            blogHover={props.blogHover}
            blogUnHover={props.blogUnHover}
            image="data:image/png;base64,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"
            title="How to make custom CSS Cursors using React"
            href="https://medium.com/@benzbraunstein/how-to-make-custom-css-cursors-using-react-fd1a5cca9400"
            description="A few weeks ago, I wrote an article about how to use vanilla JavaScript and CSS to make custom CSS cursors. It gives your website an extra layer of flare that few websites have, even though its actually super simple to do. You can find that tutorial here. After I learned how to create custom cursors and wrote that blog post, I decided to add them into my personal portfolio website. I thought to myself… “This can’t be so difficult right? I’ve done this in Vanilla JavaScript and it was super simple..."
          />
        </Grid>
        <Grid style={{ flexBasis: "auto" }} item s>
          <BlogPost
            blogHover={props.blogHover}
            blogUnHover={props.blogUnHover}
            image="https://miro.medium.com/max/810/1*RvdtnXK3vFZgiJF1_fZVpw.png"
            title="The Ternary Operator"
            href="https://medium.com/@benzbraunstein/the-ternary-operator-d413d26bd36d"
            description="Some beginner developers may see the above line of code and be extremely confused. This syntax is not a very typical one and may even look wrong, however, the above line is perfectly legal. Can you guess what it does ? This is a ternary operator and we are using it to compare two numbers return the greater of the two. That one line ternary operator completes the same purpose as this much longer if-else block; find the greater of the two and store int in a variable. Ternary operators are very similar to writing if-else blocks, however ternary operators always..."
          />
        </Grid>
        <Grid style={{ flexBasis: "auto" }} item s>
          <BlogPost
            blogHover={props.blogHover}
            blogUnHover={props.blogUnHover}
            image="https://miro.medium.com/max/300/0*cUI1-6riD1DuNPEj"
            title="AutoHotKey, the Update"
            href="https://medium.com/@benzbraunstein/autohotkey-the-update-ee7bdfd6dbf7"
            description="Recently, I wrote a blog post about AutoHotKey, which according to their team is a “a free, open-source scripting language for Windows that allows users to easily create small to complex scripts for all kinds of tasks such as: form fillers, auto-clicking, macros, etc”. Its a great tool Windows users can use for not only development purposes but navigating and speeding up tasks in Windows overall. I have recently switched from MacOS to Windows 10 using WSL2 and it has been going very well. One of the primary reasons I decided to use AutoHotKey, was to remap..."
          />
        </Grid>
        <Grid style={{ flexBasis: "auto" }} item s>
          <BlogPost
            blogHover={props.blogHover}
            blogUnHover={props.blogUnHover}
            image="https://miro.medium.com/max/398/0*6uCZiBDhbBuu_rZH.gif"
            title="Using JavaScript and CSS to make custom Cursors"
            href="https://medium.com/@benzbraunstein/using-javascript-and-css-to-make-custom-cursors-dd75d40520"
            description="Recently, I was on Adult Swim’s Website and I immediately noticed that their website takes control of the cursor, removes it from the screen and puts an image an it’s place. Originally, I thought it was cool, but I never went any further with it. A day or two later I was couldn’t get the idea out of my head, so I thought I would give it a try and put my own twist on it. I started by making a basic HTML page and linking it with a JavaScript script and a CSS file. I also threw in some text in a list to put something..."
          />
        </Grid>
        <Grid style={{ flexBasis: "auto" }} item s>
          <BlogPost
            blogHover={props.blogHover}
            blogUnHover={props.blogUnHover}
            image="https://miro.medium.com/max/460/1*gFQLJWUQBtfNqeBcfu3h2Q.png"
            title="How to connect a Heroku Website with a GoDaddy Domain Name"
            href="https://medium.com/@benzbraunstein/how-to-connect-a-heroku-website-with-a-godaddy-domain-name-2661e3fda5fd"
            description="If your a web developer and you build apps and host them online using Heroku, you have probably wanted to remove the pesky .herokuapp.com at the end of your app’s URL. Or maybe you’ve built a portfolio website to showcase your past work and you want a more official domain name, like me. Well your in luck because Heroku actually lets you connect other domains to apps it hosts..."
          />
        </Grid>
        <Grid style={{ flexBasis: "auto" }} item s>
          <BlogPost
            blogHover={props.blogHover}
            blogUnHover={props.blogUnHover}
            image="https://miro.medium.com/max/1200/0*IilLY81EZm_YjHgb.jpeg"
            title="Hosting your Rails Backend and React Frontend on Herkou for free!"
            href="https://medium.com/@benzbraunstein/hosting-your-rails-backend-and-react-frontend-on-herkou-for-free-863b86542d09"
            description="As I Fullstack developer, I typically use Ruby on Rails to create a Backend API and React Frontend when building out new projects. But what good is an app if you can’t put it online for your friends and the rest of the world to see. Today I’m going to show you how to host your projects on Heroku. Heroku will host your apps free of charge. All users on Heroku get up to five free apps, but if you link a credit card..."
          />
        </Grid>
        <Grid style={{ flexBasis: "auto" }} item s>
          <BlogPost
            blogHover={props.blogHover}
            blogUnHover={props.blogUnHover}
            image="https://miro.medium.com/max/1515/0*o_fGIoKcDCK40Sck.png"
            title="How to get a basic Redux.js application working"
            href="https://medium.com/@benzbraunstein/how-to-get-a-basic-redux-js-application-working-a08205442e30"
            description="If your a front end developer, who uses React.js, you’ve probably know how frustrating it can be to manage your state by passing it up and down through components and youve also probably heard of a technology called Redux.js, which is created to eliminate the frustrations of managing state. Not only does Redux centralize your state into a “Redux Store”, I also centralizes a large portion of your applications logic and has an outstanding Google Chrome extension you can use to view your store, any changes to it in..."
          />
        </Grid>
        <Grid style={{ flexBasis: "auto" }} item s>
          <BlogPost
            blogHover={props.blogHover}
            blogUnHover={props.blogUnHover}
            image="https://miro.medium.com/max/241/0*DPJBIO0OhFwYB1Jd.png"
            title="The Power of AutoHotKey for Windows Developers"
            href="https://medium.com/@benzbraunstein/the-power-of-autohotkey-for-windows-developers-cf2abf85a865"
            description="If your a developer, I’m sure you know you work far quicker when you can keep your hands on the keyboard and not have to reach for the mouse. Windows developers might have looked at some tools you could use to make your keyboard more powerful and work more efficiently. Simply put, AutoHotKey is one of the most useful tools you can use to your advantage that can help you speed up everyday PC usage and coding. According to their website, it is “a free, open-source scripting language for Windows..."
          />
        </Grid>
        <Grid style={{ flexBasis: "auto" }} item s>
          <BlogPost
            blogHover={props.blogHover}
            blogUnHover={props.blogUnHover}
            image="https://miro.medium.com/max/498/0*eRCRV3XiHNVub60u"
            title="The Journey from Windows to macOS and back to Windows…"
            href="https://medium.com/@benzbraunstein/the-journey-from-windows-to-macos-and-back-to-windows-12f6311ca424"
            description="Since I was a young child, I was blessed to have the opportunity of having personal computers in my home. I loved everything about them. Using them, fixing them… and sometimes breaking them. The PCs in my home started with Windows XP, next up was Vista and eventually Windows 7 (my parents never wanted to upgrade to Windows 10). Throughout my life I got to learn the in’s and out’s of Windows and..."
          />
        </Grid>
        <Grid style={{ flexBasis: "auto" }} item s>
          <BlogPost
            blogHover={props.blogHover}
            blogUnHover={props.blogUnHover}
            image="https://miro.medium.com/max/632/0*mvGwNsYnxuiQAwjz.gif"
            title="How to use React Hooks to give functional components their own 'State'"
            href="https://medium.com/@benzbraunstein/how-to-use-react-hooks-to-give-functional-components-their-own-state-ade4c756244f"
            description="State in React is something truly awesome. It gives you the ability to create components which have the ability to change their values during the lifetime, whereas a components props never change. Once you give a component a prop, that prop is static and cannot be changed unless the component gets removed or re-rendered. Although state is awesome, it is only accessible to use in components..."
          />
        </Grid>
        <Grid style={{ flexBasis: "auto" }} item s>
          <BlogPost
            blogHover={props.blogHover}
            blogUnHover={props.blogUnHover}
            image="https://miro.medium.com/max/1168/1*lJuK3pJiMt5g1-AJfRPpsg.png"
            title="How to build a simple chat application using JavaScript and the Rails API"
            href="https://medium.com/@benzbraunstein/how-to-build-a-simple-chat-application-using-javascript-and-the-rails-api-68c2577db9ea"
            description="Ever wondered how difficult it is to create a basic chat application by yourself (please just play along) ? I wondered the exact same thing once I dove headfirst into JavaScript and began to ponder all the awesome projects I could build using the awesome language. I decided to give this project a go and see how difficult it would be for me to build…and in about an hour and a half my basic application was complete..."
          />
        </Grid>
        <Grid style={{ flexBasis: "auto" }} item s>
          <BlogPost
            blogHover={props.blogHover}
            blogUnHover={props.blogUnHover}
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
