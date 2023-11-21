import Link from 'next/link'
import React, { Fragment } from 'react'

function AboutUs() {
  return (
    <Fragment>
    <h1>About us</h1>

    <ul>
        <li>
            <Link href="/aboutus/1">YASH</Link>
        </li>
        <li>
            <Link href="/aboutus/2">VAIBHAV</Link>
        </li>
        <li>
            <Link href="/aboutus/3">SURESH</Link>
        </li>
    </ul>
    </Fragment>
  )
}

export default AboutUs
