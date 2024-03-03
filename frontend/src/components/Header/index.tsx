import { useContext } from 'react';
import { ContextListCount } from '../../util/context-listing';
import './styles.css'

export default function Header() {
  const { contextListCount } = useContext(ContextListCount);
  return (
    <>
      <header>
        <div className="container title-header">
          <h1>DSFilter</h1>
          <p>{contextListCount} produtos</p>
        </div>
      </header>

    </>
  );
}