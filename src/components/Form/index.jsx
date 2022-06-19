import { useRef, useState } from 'react';
import API from '../../api/api';
import './style.css';

const Form = () => {
    const [URLInput, setURLInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [shortURL, setShortURL] = useState('');

    const inputRef = useRef();
    const spanRef = useRef();

    const validateURL = (url) => {
        try {
            new URL(url);
            return true;
        } catch (_) {
            return false;
        }
    }

    const handleButtonClicked = async (e) => {
        e.preventDefault();
        
        const isValidURL = validateURL(URLInput);

        if (isValidURL === true) {
            setIsLoading(true);
            const response = await API.shortenURL(URLInput);
            setShortURL(response);
            setIsLoading(false);
        } else {
            inputRef.current.classList.add('input-invalid');
            spanRef.current.innerHTML = 'URL inválida';
            inputRef.current.focus();

            setTimeout(() => {
                spanRef.current.innerHTML = 'Digite a URL';
                inputRef.current.classList.remove('input-invalid');
            }
            , 2000);
        }
    }

    return (
        <>
            <h1>
                Encurtador de URL
            </h1>
            <form className="form-box">
                <div className="input-box">
                    <input
                        type="text"
                        value={URLInput}
                        onChange={(e) => setURLInput(e.target.value)}
                        ref={inputRef}
                        required
                    />

                    <span ref={spanRef}>Digite a URL:</span>

                    <div className='shorted-url-box'>
                        <span>
                            {
                                shortURL !== '' ? `${shortURL}` : 'Sua URL aparecerá aqui'
                            }
                        </span>
                    </div>
                </div>

                <button className="btn" onClick={handleButtonClicked}>
                    <span>Encurtar</span>
                </button>
            </form>
        </>
    )
}

export default Form;