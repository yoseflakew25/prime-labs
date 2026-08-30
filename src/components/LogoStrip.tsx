const logos = [
  "Northwind Health",
  "Aksum Logistics",
  "Meridian College",
  "Brewtech Industries",
  "Grand Palace Group",
  "Radiant Fitness",
  "Helix Payments",
  "Orbit Retail",
  "Vantage Capital",
];

export default function LogoStrip() {
  return (
    <section className="section_logo">
      <div className="logo_padding">
        <div className="logo_container">
          <div className="logo_row" id="logoRow">
            {logos.map((name) => (
              <div className="logo_image" key={name}>
                {name}
              </div>
            ))}
            {logos.map((name) => (
              <div className="logo_image" key={`dup-${name}`}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
