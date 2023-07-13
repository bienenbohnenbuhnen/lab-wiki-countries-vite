function HomePage({ countries }) {
  console.log("props in homepage", countries);
  return (
    <div className="container" style={{ maxHeight: "90vh" }}>
      <h1 style={{ fontSize: "24px" }}>
        WikiCountries: Your Guide to the World
      </h1>
      {countries.map((country, index) => {
        return (
          <div key={country._id} className="list-group">
            <a className="list-group-item list-group-item-action" href="/ABW">
              <p>{country.name.common}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
