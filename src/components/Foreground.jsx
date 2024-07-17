import React, {useState, useRef} from 'react'
import Card from './Card'


function Foreground() {

    const ref = useRef(null);
    const data = [
    {
        desc:"This is the all about React.js.ReactJS's primary goal is to create User Interfaces (UI) which enhance the speed of programs. ",
        filesize: ".9mb",
        close: false,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor:"green"},

    },
    {
        desc:"This is the all about next.js.Next.js is a React framework",
        filesize: ".9mb",
        close: false,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor:"blue"},

    },
    {
        desc:"This is the all about Tailwind CSS.Tailwind CSS is a design system implementation in pure CSS. It is also configurable. It gives developers super powers.",
        filesize: ".9mb",
        close: false,
        tag: { isOpen: true, tagTitle: "Upload", tagColor:"green"},

    },
];
  return (
    <div ref = {ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item, index)=>(
            <Card data={item} reference={ref}/>
        )
    )}
    </div>
  );
}

export default Foreground
