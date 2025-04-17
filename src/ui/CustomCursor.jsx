"use client"

import gsap from "gsap";
import { useEffect } from "react"

export default function CustomCursor() {
    useEffect(() => {
        const cursor = document.getElementById('custom-cursor');
        const links = document.querySelectorAll('a,h1,h2,h3');

        const onMouseMove = (event) => {
            const cursor = document.getElementById('custom-cursor');
            const element = document.elementFromPoint(event.clientX, event.clientY);
        
            if (element && window.getComputedStyle(element).backgroundColor === 'white') {
                cursor.style.backgroundColor = 'black';
            } else {
                cursor.style.backgroundColor = 'white';
            }
        
            gsap.to(cursor, { x: event.clientX, y: event.clientY });
        };
        
        const onMouseEnterLink = event => {
            const link = event.target;
            console.log(link)
            gsap.to(cursor, { scale: 4 });
        }
        const onMouseLeaveLink = () => {
            gsap.to(cursor, { scale: 1 });
        }
        document.addEventListener('mousemove', onMouseMove)
        links.forEach(link => {
            link.addEventListener('mouseenter', onMouseEnterLink)
            link.addEventListener('mouseleave', onMouseLeaveLink)
        })
    })
    return (
        <div id="custom-cursor" className="custom-cursor">

        </div>
    )
}
