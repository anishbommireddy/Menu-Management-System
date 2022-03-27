import Image from './Image'
import InlineEdit from './InlineEdit'
const Display = ({item}) => {
    return(
        <div>
        <Image url = {item.image} />
        <ul>
        <li><InlineEdit text = {item.Title} /></li>
        <li><InlineEdit text = {item.Description} /></li>
        <li><InlineEdit text = {item.Price + '$'} /></li>
        </ul>
        </div>
    )
}
export default Display