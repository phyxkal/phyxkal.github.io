import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaInstagram as Insta,
  FaEnvelope as Mail,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style = {{color : "white"}}>Hello, I'm</span> <br />
        phyxkal.
      </div>
      <div className="h1 code mt-4 mb-3">func desc {"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        A Teenage who is Programmer, CTF player with <a href="https://reconcorps.com">Recon Corps team</a>, hacker
        and Web Developer.
        <br /> Passionate in learning something new.
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="https://twitter.com/phyxkal">
          <Twitter />
        </a>
        <a className="mr-5 icon" href="https://github.com/phyxkal">
          <Github />
        </a>
        <a className="mr-5 icon" href="mailto://haikalvidya@gmail.com">
          <Mail />
        </a>
      </div>
    </div>
  )
}
