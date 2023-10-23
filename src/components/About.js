import React from 'react'

export default function About(props) {
    document.title = "TextUtils - About"
  return (
    <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
      <h1>About TextUtils</h1>
        <p> TextUtils is a project to provide online text manipulation utilities (tools)
        to all users around the world as possible. The use of utilities is and will be free of charge.
        These utilities can be considered as accessories to Online Operating Systems (such as Chrome OS).
        </p>         
        <p> This website started in Oct 2023. The website was
        updated with the second version of the software, making the website fully compliant
        with the Chrome Browser.
        </p>
        <p>When we get a new good idea we like for any type of online computer program we will try to implement it.
        So you might contact us if you have an idea for any online utility. 
        </p>
        <p> But, remember, this site is pointless if people don't know about it. 
        So, if you do like the site or any particular utility on the site, you might help us in
        some of the following ways :</p>
        <ul>
            <li>If you have your own websites you might put the link to our site or particular utility. We prefer the link
                to a particular utility from related pages. For example, if you have site about English language we would prefer a link to the English
                language utilities</li>
            <li>If you are a journalist, writer or you have your own blog, you could write the article about our site</li>
            <li>Tell your friends or colleagues about the site or particular utility, if you think that they might be interested in them</li>
        </ul>
    </div>
  )
}
