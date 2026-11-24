function MobileCard({ mobile }) {
  return (
    <div className="mobile-card">

      <img src={mobile.image} alt={mobile.model} />

      <h2>{mobile.brand} {mobile.model}</h2>

      <h3>₹{mobile.price.toLocaleString("en-IN")}</h3>

      <p><b>Display:</b> {mobile.display}</p>

      <p><b>Processor:</b> {mobile.processor}</p>

      <p><b>RAM:</b> {mobile.ram}</p>

      <p><b>Storage:</b> {mobile.storage}</p>

      <p><b>Camera:</b> {mobile.camera}</p>

      <p><b>Battery:</b> {mobile.battery}</p>

      <p><b>OS:</b> {mobile.os}</p>

      <p>⭐ {mobile.rating}/5</p>

      <button>View Details</button>

    </div>
  );
}

export default MobileCard;