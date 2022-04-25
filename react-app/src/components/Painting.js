import PropTypes from 'prop-types';


export default function Painting({title, url, price, author = 'Not found', authorUrl, quantity}) {
//   console.log(props);
  return <div>
  <img src={url} alt={title} width="480" />
  <h2>{title}</h2>
  <p>
    Автор: <a href={authorUrl}>{author}</a>
  </p>
  <p>Цена: {price} кредитов</p>
  <p>Доступность: {quantity < 10 ? 'we finish' : 'we have'}</p>
  <button type="button">Добавить в корзину</button>
  </div>
}
Painting.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authorUrl: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
}
// ReactDom.render(painting, document.querySelector('#root'))
// ReactDOM.render(<Painting />, document.querySelector('#root'))


// const el = React.createElement('div', { a: 5, b: 10}, 'Hi there')
// const el1 = React.createElement('span', {children: "Hi"} )
// const el2 = React.createElement('span', {children: "there"} )
// const el = React.createElement('div', { a: 5, b: 10, children: [ el1, el2] })
// const el = React.createElement('div', { a: 5, b: 10, children: [ 'Hi', 'there', 'world'] })

// console.log(el);
// ReactDom.render(el, document.querySelector('#root'))

// const jsxEl = <div>Hi world</div>
// console.log(jsxEl);
// const el3 = <span>Hello</span>
// const el4 =<span>world</span>
// const jsxEl1 = <div>
//   {el3}
//   {el4}
// </div>
// console.log(jsxEl1);
// const data = {
//   "id": "id-1",
//   "url": "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
//   "title": "Feathers. Art abstract",
//   "price": 500,
//   "author": {
//     "tag": "ractapopulous",
//     "url": "https://pixabay.com/users/ractapopulous-24766/"
//   },
//   "quantity": 10
// }





// const data = paintings[0]
// const painting = (<div>
// <img src={data.url} alt={data.title} width="480" />
// <h2>{data.title}</h2>
// <p>
//   Автор: <a href={data.author.url}>{data.author.tag}</a>
// </p>
// <p>Цена: {data.price} кредитов</p>
// <p>Доступность: </p>
// <button type="button">Добавить в корзину</button>
// </div>)




