
import './App.css'

function App() {


  return (
    <>
      <h2 className='text-5xl bg-red-500 text-center'>Tailwind and DaisyUI setup checking.</h2>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box">
        <input type="radio" name="my_tabs_1" className="tab" aria-label="Tab 1" />
        <input type="radio" name="my_tabs_1" className="tab" aria-label="Tab 2" defaultChecked />
        <input type="radio" name="my_tabs_1" className="tab" aria-label="Tab 3" />
      </div>
    </>
  )
}

export default App
