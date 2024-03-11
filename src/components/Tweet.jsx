import React from 'react'
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";

function Tweet() {
  return (
    <div className='flex gap-3 border-b border-gray-700 py-4 mybg'>
        <div class="h-14 w-14 shrink-0">
              <img
                src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="React Patterns"
                class="h-full w-full rounded-full" />
            </div>
    <div className='text-white w-full '>
        <h4 class="mb-1 flex items-center gap-x-2">
                <span class="font-semibold">React Patterns</span>
                 
                <span class="inline-block text-sm text-gray-400">5 hours ago</span>
              </h4>
              <p class="mb-2">Exploring the latest features in JavaScript ES11! The language keeps evolving. 💡 #JavaScript #ES11 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quia, facilis assumenda maxime veritatis similique, alias in doloremque vel cumque sapiente aut et! Tempora perferendis architecto autem praesentium accusamus suscipit?</p>
              <div className='flex gap-4'>
              <button
                  class="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)]"
                  data-like-count="425"
                  data-like-count-alt="426">
                  <SlLike/>
                </button>
                <button
                  class="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-dislike-count)] focus:after:content-[attr(data-dislike-count-alt)]"
                  data-dislike-count="87"
                  data-dislike-count-alt="88">
                  <SlDislike/>
                </button>

              </div>

    </div>
    </div>
  )
}

export default Tweet