const FormComp = ({ setRefresh, setErr, err }) => {
  const sendData = (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    console.log(form);
    fetch("http://localhost:1337/", {
      method: "POST",
      body: form,
    })
      .then((res) => {
        res.ok
          ? setRefresh((prev) => !prev) & event.target.reset()
          : res.json().then((data) => setErr(data));
      })
      .catch((err) => console.log(err));
  };
  return (
    <form
      style={{ display: "flex", flexDirection: "column", width: "50vw" }}
      onSubmit={sendData}
    >
      {err && (
        <div
          style={{
            background: "red",
            width: "100%",
            color: "white",
            fontSize: "30px",
          }}
        >
          Fehler: {err}
        </div>
      )}
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="Vorname.."
      />
      <input type="text" name="lastName" id="lastName" placeholder="Nachname" />
      <input type="email" name="email" id="email" placeholder="Email" />
      <textarea
        name="message"
        cols="30"
        id="message"
        rows="10"
        placeholder="Nachricht..."
      />
      <input type="submit" value="senden" />
    </form>
  );
};

export default FormComp;
