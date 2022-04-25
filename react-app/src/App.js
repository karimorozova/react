// import './App.css';
import paintings from './paintings.json'
import PaintingList from './components/PaintingList'
import Section from './components/Section'

//  by condition

// {isOnline && "hello"}
// {isOnline ? "hello" : 'bye'}
//{ [1,2,3,4,5]}.map(el => ( <div>el</div>))

export default function App() {
  return (
    <div className="App">
      <Section title="Hello"> 
        <PaintingList items={paintings} />
      </Section>
      
      {/* { paintings.map(el => < Painting 
        key={el.id}
        title={el.title} 
        url={el.url} 
        price={el.price} 
        authorUrl={el.author.url}
        quantity={el.quantity}
        author={el.author.tag}
      />)} */}
      {/* < Painting 
        title={paintings[0].title} 
        url={paintings[0].url} 
        price="{paintings[0].price} " 
        authorUrl={paintings[0].author.url}
        quantity={paintings[0].quantity}
      />
      < Painting 
        title={paintings[1].title} 
        url={paintings[1].url} 
        price={paintings[1].price} 
        author={paintings[1].author.tag} 
        authorUrl={paintings[1].author.url}
        quantity={paintings[1].quantity}
      />
      < Painting 
        title={paintings[2].title} 
        url={paintings[2].url} 
        price={paintings[2].price} 
        author={paintings[2].author.tag} 
        authorUrl={paintings[2].author.url}
        quantity={paintings[2].quantity}
      /> */}
    </div>
  );
}
