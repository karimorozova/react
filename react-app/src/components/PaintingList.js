import Painting from './Painting'
import PropTypes from 'prop-types';

export default function PaintingList({items}) {
    return (<ul>
        {items.map(item => 
            (<li key={item.id}>
            < Painting 
            title={item.title} 
            url={item.url} 
            price={item.price} 
            authorUrl={item.author.url}
            quantity={item.quantity}
            author={item.author.tag}
            />
            </li>))}
     
    </ul>)
}
PaintingList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),),
}