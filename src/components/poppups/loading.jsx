import React from 'react'

export default function Loader() {
  return (
    <div class="flex flex-row gap-2">
      <div class="w-2 h-2 rounded-full bg-green-400  animate-bounce [animation-duration:.5s] [animation-delay:.7s]"></div>
      <div class="w-2 h-2 rounded-full bg-green-400 animate-bounce [animation-duration:.5s] [animation-delay:.3s]"></div>
      <div class="w-2 h-2 rounded-full bg-green-400 animate-bounce [animation-duration:.5s] [animation-delay:.7s]"></div>
    </div>
  );
}
