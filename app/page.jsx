import '../styles/globals.css'
import Characters from './characters/page'
import Comics from './comics/page'
import Creators from './creators/page'
import Events from './events/page'
import Series from './series/page'
import Stories from './series/page'

export default function Home () {
return (
<div>
<h1>Welcome to my Marvel website!</h1>
<Characters />
<Comics />
<Creators />
<Events />
<Series />
<Stories />
</div>
)
}