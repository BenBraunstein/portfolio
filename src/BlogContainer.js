import React from 'react'
import { Container } from '@material-ui/core';
import BlogPost from './BlogPost';



function BlogContainer() {

    return <div>
        <h2>Blog Posts</h2>
        <Container maxWidth="md">
            <BlogPost image="https://miro.medium.com/max/498/0*eRCRV3XiHNVub60u" title="The Journey from Windows to macOS and back to Windows…" href="https://medium.com/@benzbraunstein/the-journey-from-windows-to-macos-and-back-to-windows-12f6311ca424" description="Since I was a young child, I was blessed to have the opportunity of having personal computers in my home. I loved everything about them. Using them, fixing them… and sometimes breaking them. The PCs in my home started with Windows XP, next up was Vista and eventually Windows 7 (my parents never wanted to upgrade to Windows 10)..." />
            <BlogPost image="https://miro.medium.com/max/632/0*mvGwNsYnxuiQAwjz.gif" title="How to use React Hooks to give functional components their own 'State'" href="https://medium.com/@benzbraunstein/how-to-use-react-hooks-to-give-functional-components-their-own-state-ade4c756244f" description="State in React is something truly awesome. It gives you the ability to create components which have the ability to change their values during the lifetime, whereas a components props never change. Once you give a component a prop, that prop is static and cannot be changed unless the component gets removed or re-rendered. Although state is awesome, it is only accessible to use in components that are Class Based Ones, rather than in Functional Components, however React added “Hooks” a way Functional Components can change their value..." />
            <BlogPost image="https://miro.medium.com/max/1168/1*lJuK3pJiMt5g1-AJfRPpsg.png" title="How to build a simple chat application using JavaScript and the Rails API" href="https://medium.com/@benzbraunstein/how-to-build-a-simple-chat-application-using-javascript-and-the-rails-api-68c2577db9ea" description="Ever wondered how difficult it is to create a basic chat application by yourself (please just play along) ? I wondered the exact same thing once I dove headfirst into JavaScript and began to ponder all the awesome projects I could build using the awesome language. I decided to give this project a go and see how difficult it would be for me to build…and in about an hour and a half my basic application was complete..." />
            <BlogPost image="https://s3.amazonaws.com/law-media/uploads/131/51997/large/man_suit_mask_impersonation_ss.jpg?1525714001" title="Be afraid. I can impersonate you" href="https://medium.com/@benzbraunstein/be-weary-i-can-impersonate-you-adb51ede042a" description="Ah. email. The internet has many historical firsts that will forever be remembered. The first documented use of emoticons, The first domain name was registered in 1985, The first website about the World Wide Web went live in 1991, The first picture was uploaded to the internet in 1992, The first item was sold on eBay before it was even called eBay, The first YouTube video was posted in 2005, The first tweet was sent in 2006. Before all of these “firsts” the first email was sent in 1971 by Ray Tomlinson..." />
        </Container>

    </div>


}

export default BlogContainer