import React from "react";

function Cards({username,butttxt}){
    // console.log(props.username);

    return(
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://i.pinimg.com/236x/af/31/d3/af31d3e4ec202a09efdb0aec664541ba.jpg" alt="" width="384" height="512" />
    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
    <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
    </p>
    </blockquote>
    <figcaption className="font-medium">
    <div className="text-sky-500 dark:text-sky-400">
        {username}
        </div>
    <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer,</div>
    </figcaption>
    </div>
</figure>
    )
}
export default Cards