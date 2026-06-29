import "./trabajos.css";

const trabajos = [
  {
    img: "/img/mg1.png",
    title: "Constructora MG1",
    country: "Argentina",
    url: "https://www.constructoramg1.com.ar",
  },
  {
    img: "/img/jensen.png",
    title: "Techos Jensen",
    country: "Argentina",
    url: "https://www.techosjensen.com.ar",
  },
  {
    img: "/img/anacri.png",
    title: "Construcciones Anacri",
    country: "Argentina",
    url: "https://www.construccionesanacri.com.ar",
  },
  {
    img: "/img/coa.png",
    title: "Proyectos Coa",
    country: "Argentina",
    url: "https://www.proyectoscoa.com.ar",
  },
  {
    img: "/img/consultora-mdg.png",
    title: "Consultora MDG",
    country: "Argentina",
    url: "https://www.consultoramdg.com.ar",
  },
];

export default function Trabajos() {
  return (
    <section className="trabajos">
      <div className="container">

        <h2 id="clientes" >Proyectos que generan <span className="highlight">resultados</span></h2>

        <p className="subtitle">
          Sitios web desarrollados para empresas reales que necesitaban más presencia, confianza y oportunidades de negocio.
        </p>

        <div  className="trabajos-grid">
          {trabajos.map((t, i) => (
            <a
              href={t.url}
              target="_blank"
              rel="noopener noreferrer"
              className="trabajo"
              key={i}
            >
              <div className="screen">
                <img
                  src={t.img}
                  alt={`Página web ${t.title} desarrollada por AlessoCode`}
                />
              </div>

              <h3>{t.title}</h3>
              <span>{t.country}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}