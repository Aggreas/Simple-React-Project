import { useState, useRef } from "react";

/*
Heureusement que internet était la parce que :
-la page rafraichissait automatiquement à chaque fois que j'appuyé sur le bouton, preventDefault() était la solution à ce problème.
-La doc de React très pratique pour le useRef parce que sans elle la question n'était pas réussite
-nettoyer les champs du form était une galère pendant une bonne trentaine de minutes heureusement qu'une bête recherche google apporte la solution,
"To clear an input field with React, we can set the state that's used as the input value to an empty string.""
*/

function ProductForm({addProduct}){
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: 0
    });

    const inputRef = useRef();

    function handleChange(e) {
        const newState = {
          ...formData,
          [e.target.name]: e.target.value
        }
        setFormData(newState);
    }

    function handleSubmit(e) {
        e.preventDefault();
        addProduct(formData);
        /* essai non fonctionnel, raison inconnue
        inputRef.current.value = "";
        inputRef.current.reset();
        */
        setFormData({
            name: '',
            description: '',
            price: 0
        });
        inputRef.current.focus();
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Add a Product</h3>
                <div>
                    <label>Name</label>
                    <input name='name' value={formData.name} onChange={handleChange} ref={inputRef} required/>
                </div>
                <div>
                    <label>Description</label>
                    <input name='description' value={formData.description} onChange={handleChange} required/>
                </div>
                <div>
                    <label>Price</label>
                    <input name='price' type='number' value={formData.price} onChange={handleChange} required/>
                </div>
                <button>Add</button>
            </form>
        </div>
    );
}

export default ProductForm;