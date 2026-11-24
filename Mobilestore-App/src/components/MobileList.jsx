import MobileCard from "./MobileCard";

function MobileList({ mobiles }) {
  return (
    <div className="mobile-list">
      {mobiles.map((mobile) => (
        <MobileCard key={mobile.id} mobile={mobile} />
      ))}
    </div>
  );
}

export default MobileList;