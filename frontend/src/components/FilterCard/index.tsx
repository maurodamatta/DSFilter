import { useState } from 'react';
import './styles.css';

type FormData = {
  min?: number,
  max?: number
}

type Props = {
  onNewFilter: Function
}
export default function FilterCard({ onNewFilter }: Props) {

  const [formData, setFormData] = useState<FormData>({
    min: undefined,
    max: undefined,
  });

  function handleFormSubmit(event: any) {
    event.preventDefault();
    setFormData(formData);
    onNewFilter(formData.min, formData.max)
  }

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <div className='container'>
      <div className='container-card-form'>
        <form onSubmit={handleFormSubmit}>
          <div>
            <input id='inpt'
              name="min"
              value={formData.min || ""}
              type="text"
              placeholder='Preço mínimo'
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input id='inpt'
              name="max"
              value={formData.max || ""}
              type="text"
              placeholder='Preço máximo'
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button className='btn'>Filtrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}