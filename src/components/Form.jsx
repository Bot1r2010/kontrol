import React, { useState } from 'react'

const Form = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handlePasword = (e) => {
        setPassword(e.target.value)
    };
    
    const handleImage = (e) => {
        setImage(e.target.value)
    };

        const handleSubmit = (e) => {
            e.preventDefault();

            const user = {
            name,
            password,
            image,
        };

        if (name.trim().lenget && password.trim().length) {
            console.log(user);

            alert("Suceessfull validations");
            setName("");
            setPassword("");
            setImage("");
        } else {
            alert("maydon bosh");
        }

    };
  return (
    <div>


        <form onSubmit={handleSubmit}
            style={{
                width: "300px",
                height: "300px",
                border: "1px solid",
                margin: "100px auto",
                padding: "10px",
            }}>
            <input required
             style={{width: "100",}}
             placeholder='username'
              type="text"
              value={name}
              onChange={handleName} />

              <input required
             style={{width: "100",}}
             placeholder='password'
              type="password"
              value={password}
              onChange={handlePasword} />

              <input type="file"
                value={image}
                onChange={handleImage} />

                <input type="submit" value={"Yuborish"} />
        </form>
    </div>
  )
}

export default Form
