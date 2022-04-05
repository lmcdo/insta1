import React from 'react'
import Posts from './Posts';
import Stories from './Stories';

function Feed() {
  return (
      <main className='grid grid-cols-1 md:grid-cols-1 md:max-w-3xl
    xl:grid-cols-1 xl:max-w-6xl mx-auto' >
		   
			<section>
				<Stories className="col-span-2"/>
				<Posts />
			</section>
      
      <section>
          {/*  Mini Profile */}
          {/*  Suggestions */}
      </section>

		</main>
  );
}

export default Feed