import React from 'react'

export default function page() {
  return (
    <div className="flex flex-col h-screen box-border m-0">
      <header className="h-20 bg-yellow-400 p-4">Header</header>
      <div id="main" className="flex flex-grow min-h-custom">
        <article className="flex-grow p-4">Article</article>
      </div>
      <footer className="h-20 bg-yellow-400 p-4">Footer</footer>
    </div>
  );
}
