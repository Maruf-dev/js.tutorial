- firt of all we should build a react app with vite, following the command will create scaffold for react app.
```
npm create vite@latest
```


function App() {
const tracks = [
  { id: 1, title: "Song A", url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3" },
  { id: 2, title: "Song B", url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3" },
];

  return (
    <>
    <h1>Musicfun player</h1>
    <ul>
      {tracks.map((track)=>{
        return(
          <li key={track.id}>
            <h3>{track.title}</h3>
            <audio src={track.url} controls></audio>

          </li>
        )
      })}
    </ul>
    </>
  )
}

export default App